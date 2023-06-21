
var pay = document.getElementsByClassName("subscription");
var i;

for (i = 0; i < pay.length; i++) {
  pay[i].addEventListener("click", function () {
        this.classList.toggle("active");
        
    });
};
