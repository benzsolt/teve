function ellenorzes() {
    var teveDb = parseInt(document.getElementById("teveDb").value);
    var struccDb = parseInt(document.getElementById("struccDb").value);
    document.getElementById("megoldas").innerText = "";
    if (isNaN(teveDb) || isNaN(struccDb)) {
        alert("Hibás adat!");
    }
    if (teveDb < 5) {
        alert("Ennél több teve van!");
    }
    if (teveDb > 5) {
        alert("Ennél kevesebb teve van!");
    }
    if (teveDb === 5 && struccDb === 19) {
        document.getElementById("megoldas").innerText = "Helyes! 5 teve és 19 strucc";
    }
}