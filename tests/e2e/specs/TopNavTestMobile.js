module.exports = {
  after: function(browser) {
    browser.end()
  },
  before: browser => {
    // set window to highest width for mobile
    let mobileWindow = { width: 768, height: 640 }
    browser
      .url(browser.launchUrl)
      .resizeInnerWidth(mobileWindow.width, mobileWindow.height)
      .waitForElementVisible('#app')
  },
  'button Galerijos should be present in landing page': browser => {
    browser
      .waitForElementVisible('.mobile-nav-home__button-container')
      .assert.containsText('.mobile-nav-home div:first-of-type a', 'Galerijos')
  },
  'extended galleries should not be visible': browser => {
    browser.expect.element('.galleries-nav').to.not.be.visible
  },
  'clicking Galerijos buttons extends galleries': browser => {
    browser
      .click('.mobile-nav-home div:first-of-type a')
      .expect.element('.galleries-nav').to.be.visible
  },
  'clicking on gallery should move to that gallery': browser => {
    browser
      .click('.galleries-nav__list a:first-of-type')
      .waitForElementVisible('.js-image')
      .expect.element('.js-image').to.be.visible
  },
  'after navigation galleries should not remain extended': browser => {
    browser.expect.element('.galleries-nav').to.not.be.visible
  },
  'extended navigation menu should not be visible': browser => {
    browser.expect.element('.mobile-nav__links').to.not.be.visible
  },
  'clicking on burger should open navigation menu': browser => {
    browser
      .click('.mobile-nav__burger-button')
      .expect.element('.mobile-nav__links').to.be.visible
  },
  'clicking anywhere but link should close burger': browser => {
    browser
      .moveToElement('.mobile-nav__burger', -10, 0)
      .mouseButtonClick()
      .expect.element('.mobile-nav__links').to.not.be.visible
  },
  'clicking link should move to new route': browser => {
    browser.url(url => {
      browser
        .click('.mobile-nav__burger-button')
        .click('.mobile-nav__links a:nth-last-of-type(2)')
        .assert.not.urlEquals(url.value)
    })
  }
}
