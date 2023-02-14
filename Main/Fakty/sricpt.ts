
                            var modal = document.getElementById("myModal");

                            var text = document.getElementById("myText");
                        
                            // Get the <span> element that closes the modal
                            var span = document.getElementsByClassName("close")[0];
                        
                            // When the user clicks the text, open the modal 
                            text.onclick = function() {
                                modal.style.display = "block";
                            }
                        
                            // When the user clicks on <span> (x), close the modal
                            span.onclick = function() {
                                modal.style.display = "none";
                            }
                        
                            // When the user clicks anywhere outside of the modal, close it
                            window.onclick = function(event) {
                                if (event.target == modal) {
                                modal.style.display = "none";
                                }
                            }
                            console:(modal)
                            

        (document).ready(function() {
     var btn = $(".button");
     btn.click(function() {
      btn.toggleClass("paused");
      return false;
     });
    });


    var modal2 = document.getElementById("modal2");

    var text2 = document.getElementById("myText2");

    // Get the <span> element that closes the modal
    var span2 = document.getElementsByClassName("close2")[0];

    // When the user clicks the text, open the modal 
    text2.onclick = function() {
    modal2.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span2.onclick = function() {
        modal2.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
        modal2.style.display = "none";
        }
    }
console.log(myModal2);
    

(document).ready(function() {
var btn = $(".button");
btn.click(function() {
btn.toggleClass("paused");
return false;
});
});