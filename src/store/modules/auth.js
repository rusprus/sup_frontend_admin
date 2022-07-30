// import firebase from 'firebase/app'
import { getAuth, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { ref } from "firebase/database";




export default {
    actions: {
        async login(context, { email, password }) {
            try {
                const auth = getAuth();
                await signInWithEmailAndPassword(auth, email, password)
                console.log('inter done')
            } catch (e) {
                console.log('error')
                throw e
            }
        },
        async register({ dispatch }, { email, password, name }) {
            try {
                const auth = getAuth();
                await createUserWithEmailAndPassword(auth, email, password)
                const  uid = await dispatch('getUid')
                await ref(`/users/${uid}/info`).set({
                    bill: 10000,
                    name
                })
            } catch (e) {
                console.log(e)
                throw e
            }
        },
        getUid() {
            const auth = getAuth();
            const user = auth.currentUser
            return user ? user.uid : null
        },
        async logout() {
            const auth = getAuth();
            await signOut(auth, () => {

            })
        }


    }
}