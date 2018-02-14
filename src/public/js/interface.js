document.addEventListener("DOMContentLoaded", function(){
    var list = new Jotter();
  noteSubmit.addEventListener('click', function() {  
    var new_note = new Note();
    new_note.createNote(document.getElementById("note").value);
    // console.log(new_note);
    document.getElementById("note").value = "";
    list.addNote(new_note);
    // console.log(list);
    refreshList();
  });


  function refreshList() {
    var notes = ""
    list.displayList.forEach(function(element){
        notes = notes.concat(element.abbreviatedText + "\n")
    });
    console.log(notes)
    document.getElementById("test").innerHTML = notes

    var notesList = document.getElementById('notesList');
    list.displayList.forEach(function(element) {
        var note = document.createElement('li');
        note.appendChild(document.createTextNode(element.abbreviatedText));
        notesList.appendChild(note);
        console.log(element);
      });
  };


});
