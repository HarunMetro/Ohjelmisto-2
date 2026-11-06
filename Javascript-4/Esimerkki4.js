function ChangeColor(obj) {
    obj.style.color = "red";
}

document.getElementById("myButton").onclick = ChangeBackgroundColor;

function ChangeBackgroundColor() {
    document.querySelector("body").style.backgroundColor = "yellow";
}

function RemoveLetterFromH1() {
    var h1 = document.querySelector("h1");
    h1.textContent = h1.textContent.slice(0, -1);
}

function MouseOver(obj) {
    obj.innerHTML = "Mouse is over me!";
}

function MouseOut(obj) {
    obj.innerHTML = "Thank you for hovering!";
}

