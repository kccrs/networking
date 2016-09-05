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
    let firstName = "Bob";
    // let lastName = "Loblaw"
    let user = new User({});

    it('should add a users firstName using updateUserInfo', function() {
      // user.updateUserInfo();
      assert.equal(user.updateUserInfo(firstName, "Bob"), "Bob");
    });

    it('should change a users firstName using  updateUserInfo', function() {
      // let firstName = "Carl";
      let user = new User({firstName: "Taco"});
      // let newName = user.firstName;
      let firstName = "George";
      user.updateUserInfo(firstName, "George");
      assert.equal(user.firstName, "George");
    });

    it('should add a users lastName using updateUserInfo', function() {
      user.updateUserInfo();
      assert.equal(user.lastName, "Johnson");
    });
    // it should update a users lastName using updateUserInfo
    it('should update a users lastName using updateUserInfo', function() {

    });

    it('should add a new contact into the array of contacts using addContacts', function() {

    });

    it('should remove a contact from the array of contacts using deleteContacts', function() {

    });

    // TODO:  it should add a users photo using updateUserInfo

    // TODO: it should update a users photo using updateUserInfo
  });
});
