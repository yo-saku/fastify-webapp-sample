const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
require('dotenv').config();
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: process.env.BASE_URL,
      show: false, //devContainer上で動かしているためヘッドレストモードで実行する
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js'
  },
  translation: 'en-US',
  vocabularies: ['./vocabularies.json'],
  name: 'e2e',
  plugins: {
    allure: {
    enabled: true,
    require: "allure-codeceptjs",
    },
    stepByStepReport: {
    enabled: true,
    screenshotsForAllureReport: true,
    deleteSuccessful: false,
    },
  }
}