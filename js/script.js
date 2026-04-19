let Nocount = -1

const msgno = [
    "1",
    "2",
    "3",
    "4"
];

function cilckno() {
    const msg = document.getElementById("msno")
    if (Nocount < msgno.length - 1) {
        Nocount = Nocount + 1 } 
    msg.textContent = msgno[Nocount]
    msg.style.display = "block"
}

function cilckyes() {
    const page_s = document.getElementById("page")
    const pageyes_s = document.getElementById("pageyes")
    page_s.style.display = 'none'
    pageyes_s.style.display = 'flex'
}