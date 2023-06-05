
// variables
var accordionBtn = document.querySelectorAll('.accordionTitle');
var allTexts = document.querySelectorAll('.text');
var accIcon = document.querySelectorAll('.accIcon');

// event listener
accordionBtn.forEach(function (el) {
    el.addEventListener('click', toggleAccordion)
});

// function
function toggleAccordion(el) {
   var targetText = el.currentTarget.nextElementSibling.classList;
   var targetAccIcon = el.currentTarget.children[0];
   var target = el.currentTarget;
   
   if (targetText.contains('show')) {
       targetText.remove('show');
       targetAccIcon.classList.remove('anime');
       target.classList.remove('accordionTitleActive');
   } 
   else {
      accordionBtn.forEach(function (el) {
         el.classList.remove('accordionTitleActive');
         
         allTexts.forEach(function (el) {
            el.classList.remove('show');
         })
         
         accIcon.forEach(function (el) {
          el.classList.remove('anime');
         }) 
         
      })
      
         targetText.add('show');
         target.classList.add('accordionTitleActive');
         targetAccIcon.classList.add('anime');
   }  
};

const arrowEl = document.querySelector('.arrow');

window.addEventListener('scroll', _.throttle(function () {
   console.log(window.scrollY);
   if (window, scrollY > 500) {
      gsap.to(arrowEl, .3, {
         x: 0
      });
   } else {gsap.to(arrowEl, .3, {
      x:100
   });
   } 
}, 300));

arrowEl.addEventListener('click', function () {
   gsap.to(window, .8, {
      scrollTo: 0
   });
});