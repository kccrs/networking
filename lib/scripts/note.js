class Note {
  constructor(content) {
    this.content = content || null;
    this.time = Date.now();
  }

  updateContent(newContent) {
    this.content = newContent;
    this.time = Date.now();
  }

}

module.exports = Note;
