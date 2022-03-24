console.log($)
var inputAreaEl = document.getElementsByClassName(".inputArea");
var saveButtonEl = document.getElementsByClassName("saveButton");



$(".container").on("click",".saveButton", function (event) {
  console.log(event.target);
  $(event.target);
})

// var inputEl =

// inputAreaEl.append(inputAreaEl);
// console.log(inputAreaEl);
 
// // let inputAreaEl, value


// i want to replace current list w new list or just add and male button be save
// function savelist() {
//   inputAreaEl.textContent = inputAreaEl;
//   localStorage.setItem(inputAreaEl);
// }

// saveButtonEl.on ("click", savelist());




// function getinput() {

// }

