describe("Testing the Jotter object.", function(){
		it("Tests whether the Jotters list is empty or not.", function(){
			var jotter = new Jotter();
			console.log(assert.isEmptyArray(jotter.displayList));
		});

		it("Tests whether the Jotters list is not empty after adding a note.", function(){
			var jotter = new Jotter();
			var note = new Note();
			note.createNote('hello');
			jotter.addNote(note);
			console.log(assert.isNotEmptyArray(jotter.displayList));
		});


		it("List contains note.", function(){
			var jotter = new Jotter();
			var note = new Note();
			note.createNote('hello');
			jotter.addNote(note);
			console.log(assert.includesObject(jotter.displayList, note));
		});

		it("List contains notes.", function(){
			var jotter = new Jotter();
			var note = new Note();
			var note2 = new Note();

			note.createNote('hello');
			note2.createNote('hello2');

			jotter.addNote(note);
			jotter.addNote(note2);
			
			console.log(assert.includesObject(jotter.displayList, note));
			console.log(assert.includesObject(jotter.displayList, note2));
		});

		it("List does not include", function(){
			var jotter = new Jotter();
			var note = new Note();
			console.log(assert.notIncludesObject(jotter.displayList, note));
		});
		

		// it("List contains notes.", function(){
		// 	var jotter = new Jotter();
		// 	var note = new Note();
		// 	var note2 = new Note();

		// 	note.createNote('hello');
		// 	note2.createNote('hello2');

		// 	jotter.addNote(note);
		// 	jotter.addNote(note2);
			
		// 	console.log(assert.includesObject(jotter.displayList, [note, note2]));
		// });
		

});
