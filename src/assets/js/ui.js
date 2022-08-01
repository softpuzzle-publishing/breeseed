let Common = {
    init: function () {
        this.event();
        this.input();
    },
    event: function () {

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
                btn.previousElementSibling.previousElementSibling.classList.remove(
                    "filled"
                );
            });
        });

        //input type(password) toggle
        let btnTypeToggle = document.querySelectorAll(".btn-type-toggle");
        btnTypeToggle.forEach(function (btn) {
            btn.addEventListener("click", function () {
                btn.previousElementSibling.setAttribute("type", "text");
            });
        });

        //textarea auto growing
        function calcHeight(value) {
            let numberOfLineBreaks = (value.match(/\n/g) || []).length;
            // min-height + lines x line-height + padding + border
            let newHeight = 42 + numberOfLineBreaks * 21 + 20 + 0;
            return newHeight;
        }
        let textarea = document.querySelector(".auto-growing");
        textarea.addEventListener("keyup", () => {
            textarea.style.height = calcHeight(textarea.value) + "px";
        });
    }
}

let Aside = {
    init: function () {
        //this.lnb();
    },
}

Common.init();
Aside.init();