import levelsJSON from "../jsons/levels.json" assert {type: "json"};

export default function warningCalculate() {
    let windowHeight = $(window).height();
    let top = $(window).scrollTop();
    let warning = $("#password-warning");
    let warnings = 0;
    let count = $("#password-warning-count");
    for(const level of levelsJSON.levels) {
        let rule = $(`#password-rule-${level.id}`);
        if(rule) {
            let ruleTop = rule.position().top;
            if(rule.hasClass("red")) {
                if(ruleTop > top + windowHeight) {
                    warnings += 1;
                } else {
                    break;
                };
            };
        };
    };
    if(warnings === 0) {
        warning.addClass("closed");
    } else {
        warning.removeClass("closed");
    };
    count.text(warnings);
};