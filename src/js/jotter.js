function Jotter(){
    this.displayList = [];
    this.note = new Note();
}

Jotter.prototype.addNote() = function(textNote ){
    this.displayList.push(note.createNote(textNote));
};

