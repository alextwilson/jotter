document.addEventListener("DOMContentLoaded", function () {
  var list = new Jotter();

  noteSubmit.addEventListener('click', function () {
    var new_note = new Note();
    let note_text = document.getElementById("note").value
    if (note_text.length > 0) {
      new_note.createNote(note_text);
      document.getElementById("note").value = "";
      list.addNote(new_note);
      refreshList()
    }
  });

  function refreshList() {
    var notes = list.displayList;
    var result = ""
    for (var i = 0; i < notes.length; i++) {
      result += "<a id='" + i + "' href='" + i + "'>" + notes[i].abbreviatedText + "</a>...<br>";
    };
    document.getElementById('allNotes').innerHTML = result;
    addEvent();
  };

  function addEvent() {
    var links = document.getElementsByTagName("a");
    for (i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function () {
        event.preventDefault();
        document.getElementById('allNotes').innerHTML = list.displayList[this.id].fullText + "<br> <button id='ok'>OK</button>";
        document.getElementById("ok").addEventListener("click", function () {
          refreshList();
        });
      });
    };
  };
});
