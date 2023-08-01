import levelsJSON from "../jsons/levels.json" assert {type: "json"};
import disableRuleBlock from "./disableRuleBlock.js";
import enableRuleBlock from "./enableRuleBlock.js";
import getCurrentRuleBlock from "./getCurrentRuleBlock.js";
import ruleCheck from "./ruleCheck.js";
import { playerStats } from "./playerStats.js";
import swapRuleBlocks from "./swapRuleBlocks.js";
import warningCalculate from "./warningCalculate.js";

export default function onType() {
    $("#password").keyup(function(k) {
        let password = $("#password").text();
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
                "rule": ruleCheck({id: 5}),
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
            },
            {
                "id": 9,
                "rule": ruleCheck({id: 9})
            }
        ];

        for(let i = 1; i <= levels.length; i++) {
            if(i <= playerStats.level) {
                $(`#password-rule-${i}`).css("display", "block");
            };
        };

        for(const level of levels) {
            if(playerStats.level >= level.id) {
                $(`#password-rule-${level.id}`).css("display", "block");
                if(level.rule === true) {
                    levelsJSON.levels[level.id - 1].completed = true;
                    enableRuleBlock({id: level.id});
                    if(level.id === playerStats.level) {
                        playerStats.level++;
                    };
                } else {
                    levelsJSON.levels[level.id - 1].completed = false;
                    disableRuleBlock({id: level.id});
                };
            };
        };
        warningCalculate();
    });
};