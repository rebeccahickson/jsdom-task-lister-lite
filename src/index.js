document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector("input[type=submit]")
    .addEventListener("click", function (event) {
      event.preventDefault();
      addItemToList();
    });

  function addItemToList() {
    input = document.getElementById("new-task-description").value;
    document.getElementById(
      "tasks"
    ).innerHTML += `<li>${input} <button id="button-for-${input}">X</button></li>`;

    addDeleteButton(input);
  }

  function addDeleteButton(input) {
    var button = document.getElementById(`button-for-${input}`);
    button.addEventListener("click", () => {
      var parent = button.parentNode;
      parent.parentNode.removeChild(parent);
    });
  }
});
