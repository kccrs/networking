/* globals describe, it*/

const assert = require('chai').assert;
const User = require('../lib/scripts/user');

describe('our test bundle', function () {
  it('should work', function () {
    assert(true);
  });
});

describe('User constructor', function() {

  context('User constructor object properties', function() {

    let user = new User({});

    it('is an object', function() {
      assert.isObject(user);
    });

    it('should have an array called contacts', function() {
      assert.isArray(user.contacts);
    });

    it('has correct default values', function() {
      assert.deepEqual(user, {
        photo: null,
        firstName: user.firstName,
        lastName: user.lastName,
        contacts: []
      });
    });
  });

  context('set values for object properties', function() {
    let userFirstName = "Bob";
    let userLastName = "Loblaw";
    let newUser = new User({firstName: userFirstName, lastName: userLastName});

    it('should change a users firstName using  updateUserInfo', function() {
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
        anotherUser.addContacts({firstName: "Fancy", lastName: "Pants"});
        assert.lengthOf(anotherUser.contacts, 1);
        anotherUser.addContacts({firstName: "Indigo", lastName: "Montoya"});
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
