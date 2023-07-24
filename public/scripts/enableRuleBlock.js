export default function enableRuleBlock({id}) {
    let rule = $(`#password-rule-${id}`);
    if(rule) {
        let ruleHeader = rule.find(".password-header-containers");
        let ruleMain = rule.find(".password-text-containers");
        let ruleIcon = rule.find(".password-header-icons");
    
        rule.css("opacity", "1");
        rule.addClass("green").removeClass("red");
        ruleHeader.addClass("green").removeClass("red");
        ruleMain.addClass("green").removeClass("red");
        ruleIcon.attr("src", "../svgs/check.svg");
    };
};