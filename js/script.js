let Nocount = -1

const msgno = [
    "1................................................",
    "2................................................",
    "3................................................",
    "4................................................",
    "5................................................",
    "6................................................"
];

function cilckno() {
    const msg = document.getElementById("msno")
    const bear = document.getElementById("bear")
    const btnno = document.getElementById("btnno")
    if (Nocount < msgno.length - 1) {
        Nocount = Nocount + 1 } 
    msg.textContent = msgno[Nocount]
    msg.style.visibility = 'visible'
    btnno.style.position = 'relative'
    btnno.style.left = (Math.random() * 70) + 'px'
    btnno.style.bottom = (Math.random() * 25) + 'px'
}

function cilckyes() {
    const page_s = document.getElementById("page")
    const pageyes_s = document.getElementById("pageyes")
    page_s.style.display = 'none'
    pageyes_s.style.display = 'flex'
}