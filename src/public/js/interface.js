document.addEventListener("DOMContentLoaded", function(){
  noteSubmit.addEventListener('click', function() {  
    var new_note = new Note();
    new_note.createNote(document.getElementById("note").value);
    console.log(new_note);
    document.getElementById("note").value = "";
  });
});
