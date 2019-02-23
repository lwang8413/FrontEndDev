var form = document.forms.search;
var input = form.searchBox;
var searchText = "Search here";
input.value = searchText;

function search(event) {
    alert("You searched for: " + input.value);
    event.preventDefault();
}

form.addEventListener("submit", search, false);

input.addEventListener("focus", function (event) {
    if (input.value === searchText) {
        input.value = "";
    }
});

input.addEventListener("blur", function () {
    if (input.value == "") {
        input.value = searchText;
    }
});
