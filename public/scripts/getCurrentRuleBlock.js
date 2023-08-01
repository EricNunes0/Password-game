export default function getCurrentRuleBlock() {
    const containers = document.querySelectorAll(".password-rules-containers");
    let x = 0;
    for(let i = 0; i <= containers.length - 1; i++) {
        x += 1;
        if(containers[i].classList.contains(`red`)) {
            break;
        };
    };
    return x;
};