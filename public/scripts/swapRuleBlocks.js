export default function swapRuleBlocks({rule1, rule2}) {
    let animationDuration = 0//.3;
    if(rule1 && rule2) {
        const rule1Element = document.querySelector(`#password-rule-${rule1}`);
        const rule2Element = document.querySelector(`#password-rule-${rule2}`);
        //console.log(rule1Element.style.display, rule2Element.style.display)
        if((rule1Element.style.display === `none`) || (rule2Element.style.display === `none`)) {
            console.error("✖ Erro ao trocar")
            return;
        };
        let classTemp = rule1Element.className;
        rule1Element.className = rule2Element.className;
        rule2Element.className = classTemp;
        rule1Element.id = `password-rule-${rule2}`;
        rule2Element.id = `password-rule-${rule1}`;

        const rule1Off = rule1Element.getBoundingClientRect();
        const rule1Top = rule1Off.top;
        const rule2Off = rule2Element.getBoundingClientRect();
        const rule2Top = rule2Off.top;

        rule1Element.style.removeProperty(`transition`);
        rule2Element.style.removeProperty(`transition`);
        rule1Element.style.transform = `translateY(${(rule1Top - rule2Top) * -1}px)`;
        rule2Element.style.transform = `translateY(${rule1Top - rule2Top}px)`;
        setTimeout(function() {
            rule1Element.style.transition = `none`;
            rule2Element.style.transition = `none`;
            rule1Element.style.removeProperty(`transform`);
            rule2Element.style.removeProperty(`transform`);
            let temp = rule1Element.innerHTML;
            rule1Element.innerHTML = rule2Element.innerHTML;
            rule2Element.innerHTML = temp;
        }, animationDuration * 1000);
    };
};