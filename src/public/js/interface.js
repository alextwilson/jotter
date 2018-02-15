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
      result += notes[i].abbreviatedText + "...<button id="+ i +">View note</button><br>";
    };
    document.getElementById('all notes').innerHTML = result;
    addEvent();
  };

  function addEvent() {
    var buttons = document.getElementsByTagName("button");
    for (i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function() {
        alert(list.displayList[this.id].fullText);
      });
    };
  };
});
