import disableRuleBlock from "./disableRuleBlock.js";
import enableRuleBlock from "./enableRuleBlock.js";
import ruleCheck from "./ruleCheck.js";
import { playerStats } from "./playerStats.js";
import warningCalculate from "./warningCalculate.js";

export default function onType() {
    $("#password").keyup(function(k) {
        let password = $("#password").val();
        $("#password-span").text(`${password.length}`);
        let specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~¨°]/;
        const levels = [
            {
                "id": 1,
                "rule": password.length >= 5
            },
            {
                "id": 2,
                "rule": /[0-9]/.test(password)
            },
            {
                "id": 3,
                "rule": specialChars.test(password)
            },
            {
                "id": 4,
                "rule": /[A-Z]/.test(password.trim().split(""))
            },
            {
                "id": 5,
                "rule": ruleCheck({id: 5})
            },
            {
                "id": 6,
                "rule": ruleCheck({id: 6})
            },
            {
                "id": 7,
                "rule": ruleCheck({id: 7})
            },
            {
                "id": 8,
                "rule": ruleCheck({id: 8})
            }
        ];

        for(const level of levels) {
            //console.log(level.id, level.rule, playerStats);
            if(level.id <= playerStats.level) {
                $(`#password-rule-${level.id}`).css("display", "block");
            };
            if(level.rule === true) {
                enableRuleBlock({id: level.id});
                if(level.id === playerStats.level) {
                    playerStats.level++;
                }
            } else {
                disableRuleBlock({id: level.id});
            };
        };
        warningCalculate();
    });
};