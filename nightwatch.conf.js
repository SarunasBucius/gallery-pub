let chromedriverPath = process.env.VUE_APP_CHROMEDRIVER_PATH

if (!chromedriverPath) {
  chromedriverPath = require('chromedriver').path
}

module.exports = {
  webdriver: {
    server_path: chromedriverPath
  },

  selenium: {
    cli_args: {
      'webdriver.chrome.driver': chromedriverPath
    }
  }
}
