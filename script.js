let footer = document.getElementById("foot");

function nightMode () {
    footer.style.backgroundColor = "rgb(240, 240, 240)";
    footer.style.color = "black";
}

footer.addEventListener("click", nightMode);
footer.addEventListener("touch", nightMode);