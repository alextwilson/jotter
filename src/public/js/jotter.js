function Jotter(){
  this.displayList = [];
}

Jotter.prototype.addNote = function(note){
  this.displayList.push(note);
}
