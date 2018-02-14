document.addEventListener("DOMContentLoaded", function(){
    var list = new Jotter();




  noteSubmit.addEventListener('click', function() {  
    var new_note = new Note();
    new_note.createNote(document.getElementById("note").value);
    console.log(new_note);
    document.getElementById("note").value = "";
    list.addNote(new_note);
    console.log(list);
  });



  
});
