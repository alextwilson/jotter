describe("Note",function(){
    var note = new Note();
    it("Returns text for created note.",function(){
        note.createNote('hello');
        console.log(assert.isEqual(note.returnText(), 'hello'));
    });

    it("does not returns text ",function(){
        note.createNote('not hello');
        console.log(assert.isNotEqual(note.returnText(), 'hello'));
    });

    it("Has an abbreviated version of text.", function(){
        note.createNote('Hello my name is Reena, I like talk alot.');
        console.log(assert.isEqual(note.returnText(), 'Hello my name is Reena, I like talk alot.'));
        console.log(assert.isEqual(note.returnAbbreviatedText(), 'Hello my name is Ree'));
    });
});
