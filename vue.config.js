const { defineConfig } = require('@vue/cli-service')
const path = require("path");
module.exports = defineConfig({
  outputDir: path.resolve(__dirname, "dist"),
  // assetsDir: "../../static/SPA",
  transpileDependencies: true,

  devServer: {
    // https: true,
    port: 3000,
    allowedHosts: "all",
    // devtools: true,
    client: {
      logging: 'info',
      overlay: true,
    },
  // lintOnSave: false,
  // debug: true,
  // devtools: true
  // proxy: 'https://api.whatsapp.com',
  // devServer: {
    // "host": "spbsupboard.ru"
    // disableHostCheck: true
    // allowedHosts: [
    //   'MyApache',
    // ],
    // allowedHosts: "all"
  }
})
