document.addEventListener("DOMContentLoaded", function(){
  var list = new Jotter();

  noteSubmit.addEventListener('click', function() {
    var new_note = new Note();
    new_note.createNote(document.getElementById("note").value);
    document.getElementById("note").value = "";
    list.addNote(new_note);
    refreshList()
  });

  function refreshList() {
    var notes = list.displayList;
    var result = ""
    for (var i = 0; i < notes.length; i++) {
      result = result + " <a href='" + notes[i].abbreviatedText + "'>"+ notes[i].abbreviatedText + "...</a><br>";
    };
    document.getElementById('all notes').innerHTML = result;
  };
});
