let footer = document.getElementById("foot");
let bg;
let color;

function nightMode () {
    bg = footer.style.backgroundColor;
    color = footer.style.color;

    footer.style.backgroundColor = "rgb(240, 240, 240)";
    footer.style.color = "black";

    footer.removeEventListener("click", nightMode);
    footer.removeEventListener("touch", nightMode);

    footer.addEventListener("click", normalMode);
    footer.addEventListener("touch", normalMode);
}

function normalMode() {
    footer.style.backgroundColor = bg;
    footer.style.color = color;

    footer.removeEventListener("click", normalMode);
    footer.removeEventListener("touch", normalMode);

    footer.addEventListener("click", nightMode);
    footer.addEventListener("touch", nightMode);
}

footer.addEventListener("click", nightMode);
footer.addEventListener("touch", nightMode);