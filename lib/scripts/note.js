class Note {
 constructor(options) {
   this.note = options.note || null;
   this.time = options.time || Date.now();
 }

 updateNote(newNote) {
   this.note = newNote;
 }


}

module.exports = Note;
