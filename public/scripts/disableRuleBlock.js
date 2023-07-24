export default function disableRuleBlock({id}) {
    let rule = $(`#password-rule-${id}`);
    if(rule) {
        let ruleHeader = rule.find(".password-header-containers");
        let ruleMain = rule.find(".password-text-containers");
        let ruleIcon = rule.find(".password-header-icons");
    
        rule.css("opacity", "1");
        rule.addClass("red").removeClass("green");
        ruleHeader.addClass("red").removeClass("green");
        ruleMain.addClass("red").removeClass("green");
        ruleIcon.attr("src", "../svgs/error.svg");
    };
};