const messages = [
    "Emin misin?",
    "Gerçekten Emin Misinn??",
    "Doğru muuu?",
    "AAAA Hadi amaa...",
    "Bir Kez Daha Düşünnn!",
    "Hayır dersen çok üzüleceğim :(",
    "Gerçekten, Gerçekten Üzüleceğimmm...",
    "ÇOK ÇOK ÇOK ÇOK ÇOK ÜZÜLECEĞİMMM...",
    "Tamammm, Sormayı bırakıyorum...",
    "Şakaydı, Hadi EVET deeeeee! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}