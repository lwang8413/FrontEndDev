function add(a, b)
{
    return a + b;
}

function createElement(tag, text)
{
    var el = document.createElement(tag);
    el.textContent = text;
    return el;
}

function doSomething()
{
    alert("You clicked!");
    var el = createElement("p", "Transition 1");
    var sports = document.getElementById("sports");
    sports.appendChild(el);
}