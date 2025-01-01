function footAnalyzer ()  {
    window.open("https://github.com/asiChakib/FootballAnalysis", "_blank");
}

function educasept () {
    window.open("https://github.com/asiChakib/ProjetLongTOB/tree/main/pl-main", "_blank");
}

function llmWiki() {
    window.open("https://en.wikipedia.org/wiki/Large_language_model", "_blank")
}

function softwareWiki() {
    window.open("https://en.wikipedia.org/wiki/Software_engineering", "_blank")
}

function visionWiki() {
    window.open("https://en.wikipedia.org/wiki/Computer_vision", "_blank")
}

function resume() {
    window.open("https://drive.google.com/drive/folders/1_zf2PNMvpP8td1W54ztcfY-5Apt8QDiT?usp=sharing", "_blank")
}

function sendEmail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const body = `Name: ${name}%0AEmail: ${email}%0A%0A${message}`;

    window.location.href = `mailto:salouaniabdelmounaim@gmail.com?subject=Contact%20Form%20Message&body=${body}`;
}