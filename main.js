// get elements
const addNotesButton = document.querySelector(".add-notes");
const list = document.querySelector("ul");
const clearButton = document.querySelector(".clear");
// load the saved notes on page load
window.addEventListener("load", getData);
// hundel the clear button event
clearButton.addEventListener("click", () => {
  list.innerHTML = "";
  saveData();
});
// hundel add notes click event
addNotesButton.addEventListener("click", () => {
  // create the li and add class to it
  const li = document.createElement("li");
  li.className = "note";
  // create the textBox
  const textBox = document.createElement("div");
  textBox.className = "note-content";
  // let the element be edit able to type the note in it
  textBox.setAttribute("contenteditable", "true");
  // create the buttons div
  const buttonsDiv = document.createElement("div");
  buttonsDiv.className = "buttons-div";
  // create buttons
  const saveButton = document.createElement("button");
  const deleteButton = document.createElement("button");
  const editButton = document.createElement("button");
  // buttons innerHTML
  saveButton.innerHTML = "save";
  deleteButton.innerHTML = "delete";
  editButton.innerHTML = "edit";
  // add classes to the buttons
  saveButton.className = "save";
  deleteButton.className = "delete";
  editButton.className = "edit";
  // append elements to the li
  li.append(textBox);
  buttonsDiv.append(saveButton);
  buttonsDiv.append(deleteButton);
  buttonsDiv.append(editButton);
  // append the buttons div to the li
  li.append(buttonsDiv);
  // append the li to the list (ul)
  list.append(li);
});

// hundel click events
list.addEventListener("click", (e) => {
  if (e.target.className === "save") {
    e.target.parentElement.parentElement.children[0].removeAttribute(
      "contenteditable"
    );
    saveData();
  } else if (e.target.className === "delete") {
    e.target.parentElement.parentElement.remove();
    saveData();
  } else if (e.target.className === "edit") {
    e.target.parentElement.parentElement.children[0].setAttribute(
      "contenteditable",
      "true"
    );
    e.target.parentElement.parentElement.children[0].focus();
  }
});
// save the notes in the localStorage
function saveData() {
  localStorage.setItem("notes", list.innerHTML);
}

function getData() {
  if (localStorage.getItem("notes")) {
    list.innerHTML = localStorage.getItem("notes");
  }
}
