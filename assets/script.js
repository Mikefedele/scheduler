console.log($)
var inputAreaEl = document.getElementsByClassName(".inputArea");
var saveButtonEl = document.getElementsByClassName(".saveButton");
var timeDisplayEl = $("#time-display");

// moment().format('MMMM Do YYYY, h:mm:ss a');
// console.log (moment());

function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}
setInterval(displayTime, 1000);

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

