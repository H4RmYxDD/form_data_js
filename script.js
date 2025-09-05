document.getElementById("bekuldes").addEventListener("click", mentes);
function mentes() {
  const nev = document.getElementById("nev").value;
  const telepules = document.getElementById("telepules").value;
  const iranyitoszam = document.getElementById("iranyitoszam").value;
  const kozterulet = document.getElementById("kozterulet").value;
  const hazszam = document.getElementById("hazszam").value;
  localStorage.setItem("nev", nev);
  localStorage.setItem("telepules", telepules);
  localStorage.setItem("iranyitoszam", iranyitoszam);
  localStorage.setItem("kozter", kozterulet);
  localStorage.setItem("hazszam", hazszam);
  document.getElementById("flex-container").innerHTML =
    nev + telepules + iranyitoszam + kozterulet + hazszam;
}
document.getElementById("delete").addEventListener("click", torles);
function torles(){
    localStorage.clear();
}