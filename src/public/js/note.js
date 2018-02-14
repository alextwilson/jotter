function Note(){
    this.fullText = "";
    
}

Note.prototype.createNote = function(text){
    this.fullText = text;
    this.abbreviatedText = this._abbreviateText(text);

}

Note.prototype.returnText = function(){
    return this.fullText;
}

Note.prototype._abbreviateText = function(text){
    return text.substring(0,20);
}

// document.getElementById('example').textContent