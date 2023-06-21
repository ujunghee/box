
var pay = document.getElementsByClassName("favorite");
var i;

for (i = 0; i < pay.length; i++) {
  pay[i].addEventListener("click", function () {
        this.classList.toggle("active");
        
    });
}