/* globals describe, it, context */

const assert = require('chai').assert;
const Note = require('../lib/scripts/note');

describe('Note', function () {
  var note;
  context('constructor', function () {
    it('should default this.content to a value of null', function () {
      note = new Note();
      assert.equal(note.content, null);
    });

    it('can receive a different value as an argument', function () {
      note = new Note('programming');
      assert.equal(note.content, 'programming');
    });

    it('should default this.time to a number value', function () {
      note = new Note();
      assert.equal(typeof note.time, 'number');
    });
  });

  context('updateContent', function () {

    it('should update content of note', function () {
      note = new Note('content');
      note.updateContent('new content');
      assert.equal(note.content, 'new content');
    });

    it('should update time of note', function () {
      note = new Note();
      var pastTime = note.time;
      setTimeout(function() {
        note.updateContent('');
        assert.notEqual(note.time, pastTime);
      }, 1000);
    });

  });

});
