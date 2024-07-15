
                                   // СВЯЗЬ С ФОЗЗИ
var modal5 = document.getElementById("myModal5");
var btn5 = document.getElementById("openModalBtn5");
var span5 = document.getElementsByClassName("close5")[0];
var dropdownBtn5 = document.getElementById("myBtn5");
var dropdownContent5 = document.getElementById("dropdownContent5");

btn5.onclick = function() {
    modal5.style.display = "block";
}

span5.onclick = function() {
    modal5.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal5) {
        modal5.style.display = "none";
    }
}

dropdownBtn5.onclick = function() {
    if (dropdownContent5.style.display === "block") {
        dropdownContent5.style.display = "none";
    } else {
        dropdownContent5.style.display = "block";
    }
}
              