class Note {
  constructor(content) {
    this.content = content || null;
    this.time = Date.now();
  }

  updateContent(newContent) {
    this.content = newContent;
    this.time = Date.now();
  }

  shortHtmlTemplate() {
    return `<li data='${this.time}'>${this.content}
    <p>${this.time}</p></li>`;
  }
}

module.exports = Note;
