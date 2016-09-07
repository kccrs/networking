/* globals describe, it, context*/

const assert = require('chai').assert;
const User = require('../lib/scripts/user');

describe('User', function() {

  context('constructor', function() {

    // beforeEach(function() {
    //   this.rightNow = Date.now();
    //   this.dateNow = Date.now;
    //   Date.now = () => this.rightNow;
    // });
    //
    // afterEach(function() {
    //   Date.now = this.dateNow;
    // });

    let user = new User({});

    it('is an object', function() {
      assert.isObject(user);
    });

    it('should have an array called contacts', function() {
      assert.isArray(user.contacts);
    });

    it('has correct default values', function() {
    // debugger;
      let user = new User({});
      let now = Date.now();
      user.id = now;
      assert.deepEqual(user, {
        photo: null,
        firstName: user.firstName,
        lastName: user.lastName,
        contacts: [],
        id: now
      });
    });
  });

  context('set values for object properties', function() {
    let userFirstName = "Bob";
    let userLastName = "Loblaw";
    let newUser = new User({firstName: userFirstName, lastName: userLastName});

    it('should update a users firstName using  updateUserInfo', function() {
      let newFirstName = "George";
      newUser.updateUserInfo('firstName', newFirstName);
      assert.equal(newUser.firstName, "George");
    });

    it('should update a users lastName using updateUserInfo', function() {
      let newLastName = "Smith";
      newUser.updateUserInfo('lastName', newLastName);
      assert.equal(newUser.lastName, "Smith");
    });

    context('contact array functions', function() {
      let anotherUser = new User({});

      it('should add a new contact into the array of contacts using addContacts', function() {
        anotherUser.addContact({firstName: "Fancy", lastName: "Pants"});
        assert.lengthOf(anotherUser.contacts, 1);
        anotherUser.addContact({firstName: "Indigo", lastName: "Montoya"});
        assert.lengthOf(anotherUser.contacts, 2);
      });

      it('should remove a contact from the array of contacts using deleteContacts', function() {
        anotherUser.deleteContacts(0);
        assert.lengthOf(anotherUser.contacts, 1);
      });

    });


    // TODO:  it should add a users photo using updateUserInfo

    // TODO: it should update a users photo using updateUserInfo
  });
});
