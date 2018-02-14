describe("Note",function(){
    var note = new Note();
    it("returns text for created note",function(){
        note.createNote('hello');
        console.log(assert.isEqual(note.returnText(), 'hello'));
    });

    it(" does not returns text ",function(){
        note.createNote('not hello');
        console.log(assert.isNotEqual(note.returnText(), 'hello'));
    });
});

