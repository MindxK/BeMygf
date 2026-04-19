let Nocount = 0;

const msgno = [
    "1",
    "2",
    "3",
    "4"
];

function cilckno() {
    const msg = document.getElementById("msno");
    msg.textContent = msgno[Math.min(Nocount - 1, msgno.length - 1)];
}

function cilckyes() {
    document.getElementById("page").style.display = 'none'
}