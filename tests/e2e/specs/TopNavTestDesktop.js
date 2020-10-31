module.exports = {
  after: function(browser) {
    browser.end()
  },
  before: browser => {
    // set window to lowest width for desktop
    let desktopWindow = { width: 769, height: 1000 }
    browser
      .url(browser.launchUrl)
      .resizeInnerWidth(desktopWindow.width, desktopWindow.height)
      .waitForElementVisible('#app')
  },
  'should not overlap': browser => {
    browser
      .waitForElementVisible('.desktop-nav')
      .assert.isNotOverlapping(
        '.desktop-nav__logo',
        '.desktop-nav__links-container a:first-of-type'
      )
  },
  'extended galleries should not be visible': browser => {
    browser.expect.element('.galleries-nav').to.not.be.visible
  },
  'clicking Galerijos should make galleries visible': browser => {
    browser
      .click('.desktop-nav__links-container a:first-of-type')
      .waitForElementVisible('.galleries-nav')
      .expect.element('.galleries-nav').to.be.visible
  },
  'clicking within galleries container should not hide galleries': browser => {
    browser
      .moveToElement('.galleries-nav', 0, 0)
      .mouseButtonClick()
      .expect.element('.galleries-nav').to.be.visible
  },
  'clicking outside of galleries should close galleries list': browser => {
    browser
      .moveToElement('.galleries-nav', 0, 100)
      .mouseButtonClick()
      .expect.element('.galleries-nav').to.not.be.visible
  },
  'clicking on gallery should move to that gallery': browser => {
    browser
      .click('.desktop-nav__links-container a:first-of-type')
      .waitForElementVisible('.galleries-nav')
      .click('.galleries-nav__list a:first-of-type')
      .waitForElementVisible('.js-image')
      .expect.element('.js-image').to.be.visible
  },
  'galleries should not be visible after navgating': browser => {
    browser.expect.element('.galleries-nav').to.not.be.visible
  },
  'landing page navigation should be bigger than other pages': browser => {
    browser
      .url(browser.launchUrl)
      .getElementSize('.desktop-nav', landingNav => {
        browser
          .click('.desktop-nav__links-container a:nth-child(2)')
          .getElementSize('.desktop-nav', otherNav => {
            browser.assert.notEqual(
              landingNav.value.height,
              otherNav.value.height
            )
          })
      })
  }
}
