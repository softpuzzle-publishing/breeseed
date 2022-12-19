let Common = {
  init: function () {
    this.input();
    this.modal();
  },
  input: function () {
    //input focused
    let inputAll = document.querySelectorAll(".form-control");
    inputAll.forEach(function (input) {
      input.addEventListener("focus", function () {
        this.classList.add("filled");
      });
      input.addEventListener("focusout", function () {
        setTimeout(function () {
          input.classList.remove("filled");
        }, 100);
      });
    });

    //input value clear
    let btnClear = document.querySelectorAll(".btn-input-x");
    btnClear.forEach(function (btn) {
      btn.addEventListener("click", function () {
        btn.previousElementSibling.value = "";
        btn.previousElementSibling.classList.remove("filled");
        btn.previousElementSibling.previousElementSibling.value = "";
        btn.previousElementSibling.previousElementSibling.classList.remove("filled");
      });
    });

    //input type(password) toggle
    let btnTypeToggle = document.querySelectorAll(".btn-type-toggle");
    btnTypeToggle.forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (btn.previousElementSibling.getAttribute("type") === "password") {
          btn.previousElementSibling.setAttribute("type", "text");
        } else {
          btn.previousElementSibling.setAttribute("type", "password");
        }
      });
    });
  },
  modal: function () {
    let btnModal = document.querySelectorAll("[data-component='modal']");
    btnModal.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        let target;
        if (this.hasAttribute("data-component-target")) {
          target = this.getAttribute("data-component-target");
        } else {
          target = this.getAttribute("href");
        }
        modalShow(target);
      });
    });

    let btnModalClose = document.querySelectorAll("[data-component-close]");
    btnModalClose.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        this.closest(".modal").classList.remove("show");
        document.querySelector("body").classList.remove("modal-open");
      });
    });

    function modalShow(target) {
      document.querySelector("body").classList.add("modal-open");
      document.querySelector(target).classList.add("show");
    }
  },
};

setTimeout(function () {
  Common.init();
}, 50);
