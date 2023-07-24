export default function scrollUpButton() {
    let windowHeight = $(window).height();
    let top = $(window).scrollTop();
    const button = $("#password-scrollup");
    const password = $("#password");
    const passwordTop = password.position().top;
    if(top < passwordTop) {
        button.addClass("closed");
    } else {
        button.removeClass("closed");
    };
};