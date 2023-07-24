import scrollUpButton from "./scrollUpButton.js";
import warningCalculate from "./warningCalculate.js";

export default function windowScroll() {
    $(window).scroll(function() {
        warningCalculate();
        scrollUpButton();
    });
};