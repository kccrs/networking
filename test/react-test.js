var expect = require('chai').expect
const React  = require('react')
const Application =  require('../lib/components/Application');

const mount = require('enzyme').mount


describe('Application',function(){
 it('"addContact" state should be false on page load',function(){
 const wrapper = mount(<Application/>)
   expect(wrapper.props()).to.deep.equal({ addContact: false });
 });
});
