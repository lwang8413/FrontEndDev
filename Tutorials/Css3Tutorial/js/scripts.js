function doSomething(e) {
    console.log("screen: (" + e.screenX + "," + e.screenY + "), page: (" + e.pageX + "," + e.pageY + ")");
    console.log("client: (" + e.clientX + "," + e.clientY + ")");
    console.log(e.which);
}

//addEventListener("click", doSomething);
var click = document.getElementById("click");
click.addEventListener("mousedown",function(){ console.log("down")});
click.addEventListener("click",function(){ console.log("click") });
click.addEventListener("mouseup", function () { console.log("up") });

var dblclick = document.getElementById("dblclick");
dblclick.addEventListener("dblclick", highlight);
function highlight(event) {
    event.target.classList.toggle("highlight");
}

var mouse = document.getElementById("mouse");
mouse.addEventListener("mouseover", highlight);
mouse.addEventListener("mouseout", highlight);
mouse.addEventListener("mousemove", function () { console.log("You Moved!"); });

addEventListener("keydown", highlight);
addEventListener("keyup", function stop(event) {
    var date = new Date();
    console.log("You stopped pressing key on " + date);
});

addEventListener("keypress", function (event){
    console.log("You pressed the " + String.fromCharCode(event.charCode) + " character");
});

var ul = document.getElementById("list");
var li = document.querySelector("#list li");
ul.addEventListener("click", function (event) {
    console.log("Clicked on ul");
}, false);

ul.addEventListener("click", highlight);

li.addEventListener("click", function (event) {
    console.log("Clicked on li");
}, false);

