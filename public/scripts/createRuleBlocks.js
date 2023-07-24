import levelsJSON from "../jsons/levels.json" assert {type: "json"};

export default function createRuleBlocks() {
    const rulesDiv = $("#password-rules-div");

    for(const level of levelsJSON.levels) {
        rulesDiv.append(`
    <a href = "#password-rule-${level.id}" class = "password-anchors"></a>
    <div class = "password-rules-containers red" id = "password-rule-${level.id}" style = "display: none; opacity: 0;">
        <div class = "password-blocks">
            <header class = "password-header-containers red" class = "password-header-${level.id}">
                <div class = "password-header-flex">
                    <div class = "password-header-icon-divs">
                        <img class = "password-header-icons" src = "../svgs/error.svg"></img>
                    </div>
                    <div class = "password-header-label-divs">
                        <label class = "password-header-labels">Regra ${level.id}</label>
                    </div>
                </div>
            </header>
            <main class = "password-text-containers red">
                <div class = "password-text-divs">
                    <p class = "password-texts">${level.description}</p>
                </div>
            </main>
        </div>
    </div>
        `);
    };
};