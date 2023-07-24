import levelsJSON from "../jsons/levels.json" assert {type: "json"};

export default function warningClick() {
    $("#password-warning").click(function() {
        $("#password-warning").addClass("closed");
        for(const level of levelsJSON.levels) {
            let rule = $(`#password-rule-${level.id}`);
            if(rule) {
                if(rule.hasClass("red")) {
                    const element = document.getElementById(`password-rule-${level.id}`);
                    element.scrollIntoView({behavior: 'smooth', block: 'center'});
                    element.style.transform = `scale(1.02)`;
                    element.style.filter = `drop-shadow(0px 0px 5px #f02020)`;
                    setTimeout(function() {
                        element.style.removeProperty(`transform`);
                        element.style.removeProperty(`filter`);
                    }, 1000);
                    break;
                };
            };
        };
    });
};