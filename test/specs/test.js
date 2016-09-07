/* globals browser*/

const assert =  require('assert');

describe('Log in page', function(){

  it('should be able to grab the page title', function(){
    browser.url('/public/index.html');
    var title = browser.getTitle();
    assert.equal(title, 'GetWorking');
  });

  it('should take you to the home page after clicking log in', function() {
    browser.url('/public/index.html');
    browser.click('#log-in-button');
    assert.equal(browser.getUrl(),'http://localhost:8080/public/views/home.html');
  });
});

describe('Contact page', function() {

  it('should take the user back to the login page when they click log out', function() {
    browser.url('/public/views/contact.html');
    browser.click('.log-out-button');
    assert.equal(browser.getUrl(),'http://localhost:8080/public/index.html');
  });
  // it should accept all input fields and render each provided item to the page

  // it should not render content to any field that user has not entered text

});

describe('Home page', function() {

  it('should take the user back to the login page when they click log out', function() {
    browser.url('/public/views/home.html');
    browser.click('.log-out-button');
    assert.equal(browser.getUrl(),'http://localhost:8080/public/index.html');
  });
  // it should accept all input fields and render each provided item to the page

  // it should not render content to any field that user has not entered text

});
