console.log($)
var inputAreaEl = document.getElementsByClassName(".inputArea");
var saveButtonEl = document.getElementsByClassName("saveButton");

// inputAreaEl.append(inputAreaEl);
// console.log(inputAreaEl);
 
// // let inputAreaEl, value



function savelist() {
  inputAreaEl.textContent = inputAreaEl;
  localStorage.setItem(inputAreaEl);
}

saveButtonEl.on ("click", savelist());




// function getinput() {

// }

