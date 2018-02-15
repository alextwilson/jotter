document.addEventListener("DOMContentLoaded", function(){
    describe ("Jotter", function(){
        it("Displays welcome message.", function(){
          document.getElementById("note").value = "Welcome";
          document.getElementById('noteSubmit').click();
        //   fillIn(("note").value,"Welcome");
        //   clickElement("noteSubmit");
          assert.isEqual(document.getElementById("0").textContent, "Welcome");
        });
      });
});

