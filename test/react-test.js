var expect = require('chai').expect;
const React  = require('react');
const Application =  require('../lib/components/Application');
import Contact from '../lib/components/Contact';
const SignIn =  require('../lib/components/SignIn');
import firebase from '../firebase';
import UserInfo from '../lib/components/UserInfo';
import ContactList from '../lib/components/ContactList';
import ShortContact from '../lib/components/ShortContact';
import CreateContact from '../lib/components/CreateContact';

import { shallow, mount, render } from 'enzyme';

describe('Application',function(){
  it('should have a default state of null and add Contact of false', function() {
    const wrapper = shallow(<Application />);
    expect(wrapper.state().user).to.equal(null);
    expect(wrapper.state().addContact).to.equal(false);
  });

  it('should have only one title, one Logo, and the words for each', function() {
    const wrapper = mount(<Application />);
    expect(wrapper.find('.title')).to.have.length(1);
    expect(wrapper.find('.HeroLogo')).to.have.length(1);
    expect(wrapper.find('.buttonSignIn')).to.have.length(1);
    expect(wrapper.text()).to.contain('GetWorkingSign In');
  });
});

// describe('Contact',function(){
//   it('should have a default state of not editable', function() {
//     const wrapper = shallow(<Contact />);
//     expect(wrapper.state().editable).to.equal(false);
//   });
// });

describe('ContactList',function(){
  it('should have no selected Contact and an empty array of contacts', function() {
    const wrapper = shallow(<ContactList />);
    expect(wrapper.state().selectedContact).to.equal(null);
    expect(wrapper.state().contacts).to.deep.equal([]);
  });
});

describe('CreateContact',function(){
  it('should have default states for key values', function() {
    const wrapper = shallow(<CreateContact />);
    expect(wrapper.state().contact.firstName).to.equal('');
    expect(wrapper.state().contact.lastName).to.equal('');
    expect(wrapper.state().contact.company).to.equal('');
    expect(wrapper.state().contact.followUp).to.equal(true);
  });
});

// describe('ShortContact', function() {
//   spy(ShortContact.prototype, 'followUpClass')
//   const wrapper = mount(<ShortContact />)
//   expect(ShortContact.prototype.followUpClass(true)).to.equal(false)
// });
//
// describe('Application Sign In Process', function() {
//   const wrapper = mount(<CreateContact />)
//   var button = wrapper.find('.AddNewContact').simulate('click')
// });
