//모달창
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("button[data-modal]");
  const modals = document.querySelectorAll(".modal");
  const closeButtons = document.querySelectorAll(".close");

  buttons.forEach((button) => {

    button.addEventListener("click", (event) => {
      const modalName = event.target.dataset.modal;
      if (event.target.dataset.modal === modalName) {
        console.log("모달이1 버튼을 클릭하였습니다!")
        modals.forEach(modal => {
          if (modal.classList.contains(modalName)) {
            modal.classList.add("is-active")
          }
        });
      }
    });
  });

  closeButtons.forEach(close => {
    close.addEventListener("click", (event) => {
      const modal = event.target.closest(".modal");
      modal.classList.remove("is-active")
    });
  })
});


function openPop() {
  document.getElementById("pop-info-1").style.display = "block";
};

function closePop() {
  document.getElementById("pop-info-1").style.display = "none";
};

//팝업창 열릴시 스크롤 막기 & 트랜스폼 효과
const modal = document.querySelector(".pop-wrap");
const body = document.querySelector("body");
const showClass = document.querySelector(".btn-open");
const btnclose = document.querySelector('.btn-completion');
const btnback = document.querySelector('.btn-back');
const imgclose = document.querySelector('.img-close');


showClass.addEventListener('click', function () {
  modal.classList.add('popup-show');
  body.classList.add('scrollLock');
});

btnclose.addEventListener('click', function () {
  modal.classList.remove('popup-show');
  body.classList.remove('scrollLock');
});

btnback.addEventListener('click', function () {
  modal.classList.remove('popup-show');
  body.classList.remove('scrollLock');
});

imgclose.addEventListener('click', function () {
  modal.classList.remove('popup-show');
  body.classList.remove('scrollLock');
});
