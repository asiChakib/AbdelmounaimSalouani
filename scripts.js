function footAnalyzer ()  {
    window.open("./project3.html", "_blank");
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

function sendEmail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const body = `Name: ${name}%0AEmail: ${email}%0A%0A${message}`;

    window.location.href = `mailto:salouaniabdelmounaim@gmail.com?subject=Contact%20Form%20Message&body=${body}`;
}