

// 셀렉트 박스
const label = document.querySelectorAll('.label');
label.forEach(function(lb){
  // 라벨에 클릭 
    lb.addEventListener('click', e => {
        let optionList = lb.nextElementSibling;
        let optionItems = optionList.querySelectorAll('.optionItem');
        clickLabel(lb, optionItems);
    })
});
// 액티브 클래스 추가, 클릭 반복
const clickLabel = (lb, optionItems) => {
    if(lb.parentNode.classList.contains('active')) {
        lb.parentNode.classList.remove('active');
        optionItems.forEach((opt) => {
            opt.removeEventListener('click', () => {
                handleSelect(lb, opt)
            })
        })
    } else {
        lb.parentNode.classList.add('active');
        optionItems.forEach((opt) => {
            opt.addEventListener('click', () => {
                handleSelect(lb, opt)
            })
        })
    }
}
const handleSelect = (label, item) => {
    label.innerHTML = item.textContent;
    label.parentNode.classList.remove('active');
}


// // 메뉴 펼침과 접힘
// const promotionEl = document.querySelector('.three-nav');
// // 토글-프로모션이라는 엘리먼트를 찾아서 promotionToggleBtn에 값을 할당
// const promotionToggleBtn = document.querySelector('.nav__item-box');
// let isHidePromtion = false;
// promotionToggleBtn.addEventListener('click', function () {
//   isHidePromtion = !isHidePromtion
//   if (isHidePromtion) {
//     // 숨김 처리!
//     promotionEl.classList.add('active');
//   } else {
//     // 보임 처리!
//     promotionEl.classList.remove('active');
//   }
// });

var acc = document.getElementsByClassName("nav__item");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("hide");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
