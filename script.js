const nev = document.getElementById("nev");
const telepules = document.getElementById("telepules");
const iranyitoszam=document.getElementById("iranyitoszam");
const kozterulet=document.getElementById("kozterulet");
const hazszam=document.getElementById("hazszam");
localStorage.setItem("nev", nev)
localStorage.setItem("telepules", telepules)
localStorage.setItem("iranyitoszam", iranyitoszam)
localStorage.setItem("kozter", kozterulet)
localStorage.setItem("hazszam", hazszam)
document.getElementById("flex-container").innerHTML=nev+telepules+iranyitoszam+kozterulet+hazszam;