export default function ruleCheck({id}) {
    let password = $("#password").val();
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
        password = password.trim().split("");
        let primo = false;
        for(const letter of password) {
            if(/[0-9]/.test(letter)) {
                let n = parseInt(letter);
                let divisores = 0;
                for(let i = 1; i <= n; i++) {
                    if(parseInt(letter) % i == 0) {
                        divisores++;
                    };
                };
                if(divisores === 2) {
                    primo = true;
                    break;
                };
            };
        };
        return primo;
    } else if(id === 8) {
        const planets = ["mercúrio", "vênus", "terra", "marte","júpiter", "saturno", "urano", "netuno"]
        for(const planet of planets) {
            if(password.toLocaleLowerCase().includes(planet)) {
                return true;
            };
        };
        return false;
    } ;
};