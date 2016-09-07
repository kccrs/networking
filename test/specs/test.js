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
