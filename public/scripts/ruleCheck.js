export default function ruleCheck({id}) {
    let password = $("#password").text();
    const romans = ["I", "V", "X", "L","C", "D", "M"];
    console.log(password)
    if(id === 5) {
        password = password.trim().split("");
        let sum = 0;
        for(const letter of password) {
            if(/[0-9]/.test(letter)) {
                sum += parseInt(letter);
            };
        };
        return (sum === 25);
    } else if(id === 6) {
        const months = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
        for(const month of months) {
            if(password.toLocaleLowerCase().includes(month)) {
                return true;
            };
        };
        return false;
    } else if(id === 7) {
        for(const roma of romans) {
            if(password.includes(roma)) {
                return true;
            };
        };
        return false;
    } else if(id === 8) {
        const planets = ["mercúrio", "vênus", "terra", "marte","júpiter", "saturno", "urano", "netuno"]
        for(const planet of planets) {
            if(password.toLocaleLowerCase().includes(planet)) {
                return true;
            };
        };
        return false;
    } else if(id === 9) {
        password = password.trim().split("");
        let mult = 1;
        for(let letter of password) {
            if(romans.includes(letter)) {
                letter = roman(letter);
                mult = mult * parseInt(letter);
            };
        };
        console.log("Mult", mult);
        return (mult === 25);;
    };
};

function roman(letter) {
    if(letter === "I") {
        letter = 1;
    } else if(letter === "V") {
        letter = 5;
    } else if(letter === "X") {
        letter = 10;
    } else if(letter === "L") {
        letter = 50;
    } else if(letter === "C") {
        letter = 100;
    } else if(letter === "D") {
        letter = 500;
    } else if(letter === "M") {
        letter = 1000;
    }
    return letter;
};