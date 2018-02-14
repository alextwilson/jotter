describe("Testing the jotter object", function(){
		it("tests  whether the jotter's list is empty or not", function(){
			var jotter = new Jotter();
			console.log(assert.isEmpty(jotter.displayList));
		});
	});

// (function () {
//     var jotter = new Jotter();
//     console.log(assert.isEmpty(jotter.displayList));
// })();
