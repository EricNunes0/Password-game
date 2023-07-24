import levelsJSON from "../jsons/levels.json" assert {type: "json"};

export default function warningClick() {
    $("#password-scrollup").click(function() {
        const element = document.getElementById(`password`);
        element.scrollIntoView({behavior: 'smooth', block: 'center'});
    });
};