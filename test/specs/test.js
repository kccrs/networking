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

describe('Contact page navigation', function() {

  it('should take the user back to the login page when they click log out', function() {
    browser.url('/public/views/contact.html');
    browser.click('.log-out-button');
    assert.equal(browser.getUrl(),'http://localhost:8080/public/index.html');
  });

  it('should disable the add-contact-button on page load', function() {
    browser.url('/public/views/contact.html');

    var buttonStatus = browser.isEnabled('.add-contact-button');
    assert.equal(buttonStatus, false);
  });

  it('should disable the save button on page load', function() {
    browser.url('/public/views/contact.html');

    var buttonStatus = browser.isEnabled('#save-button');
    assert.equal(buttonStatus, false);
  });

  it('should enable the edit button on page load', function() {
    browser.url('/public/views/contact.html');

    var buttonStatus = browser.isEnabled('#edit-button');
    assert.equal(buttonStatus, true);
  });

  it('should enable the save button when there is a first and last name entered', function() {
    var firstName = browser.element('.first-name');
    var lastName = browser.element('.last-name');

    firstName.setValue('Macaroni');
    lastName.setValue('Cheese');

    var expectedButtonStatus = browser.isEnabled('#save-button');

    assert.equal(expectedButtonStatus, true);
  });
});

describe('Contact page input fields', function() {

  xit('should clear all input fields on click of save button', function() {
    browser.url('/public/views/contact.html');

    var firstName = browser.element('.first-name');
    var lastName = browser.element('.last-name');
    var company = browser.element('.company');
    var jobTitle = browser.element('.job-title');
    var email = browser.element('.email');
    var phone = browser.element('.phone');
    var noteinput = browser.element('.new-note');
    var linkedIn = browser.element('.linked-in');
    var twitter = browser.element('.twitter');
    var github = browser.element('.github');
    var category = browser.element('.category');

    firstName.setValue('words');
    lastName.setValue('words');
    company.setValue('words');
    jobTitle.setValue('words');
    email.setValue('words');
    phone.setValue('words');
    noteinput.setValue('words');
    linkedIn.setValue('words');
    twitter.setValue('words');
    github.setValue('words');
    category.setValue('words');

    browser.click('#save-button');

    assert.equal(firstName.getValue(), '');
    assert.equal(lastName.getValue(), '');
    assert.equal(company.getValue(), '');
    assert.equal(jobTitle.getValue(), '');
    assert.equal(email.getValue(), []);
    assert.equal(phone.getValue(), []);
    assert.equal(noteinput.getValue(), []);
    assert.equal(linkedIn.getValue(), '');
    assert.equal(twitter.getValue(), '');
    assert.equal(github.getValue(), '');
    assert.equal(category.getValue(), '');
  });


//TODO it should accept all input fields and render each provided item to the page

//TODO it should not render content to any field that user has not entered text

});

describe('Home page', function() {

  it('should take the user back to the login page when they click log out', function() {
    browser.url('/public/views/home.html');
    browser.click('.log-out-button');
    assert.equal(browser.getUrl(),'http://localhost:8080/public/index.html');
  });

  it('should take the user to the contact page when they click add contact', function() {
    browser.url('/public/views/home.html');
    browser.click('.add-contact-button');
    assert.equal(browser.getUrl(),'http://localhost:8080/public/views/contact.html');
  });
});
