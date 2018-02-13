(function () { 
    var note = new Note()
    note.createNote('hello');
    console.log(assert.isEqual(note.returnText(), 'hello'))
})();

(function () { 
    var note = new Note()
    note.createNote('not hello');
    console.log(assert.isEqual(note.returnText(), 'hello'))
})();

