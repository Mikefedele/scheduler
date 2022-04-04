console.log($);
var inputAreaEl = document.getElementsByClassName(".inputArea");
var saveButtonEl = document.getElementsByClassName(".saveButton");
var timeDisplayEl = $("#time-display");
var h9El = $("#h9");
var h10El = $("#h10");
var h11El = $("#h11");
var h12El = $("#h12");
var h13El = $("#h13");
var h14El = $("#h14");
var h15El = $("#h15");
var h9El = $("#h16");
var h17 = $("#h17");
// var rightnow = moment();
// var time = rightnow.format('HH');

// gets time & displays time in header timeDisplay
function displayTime() {
  var rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
  timeDisplayEl.text(rightNow);
}
// sets interval for the clock to change on screen
setInterval(displayTime, 1000);

//sets the click event w Jquery the event is sibling to textarea which was the input field
//stores the input locallly
$(".container").on("click", ".saveButton", function (event) {
  value = $(this).siblings("textarea").val();
  textString = $(this).siblings(inputAreaEl).text();
  localStorage.setItem(textString, JSON.stringify(value));
  console.log(textString)
});




var listTimeMoment = moment().format("HH");
console.log(listTimeMoment);

function changeColor() {
  for (let i = 9; i < 18; i++) {
    //have to parseint either my data- or ids to get number then can do the moment math started
    //that will be timeBlock var, then we can compare
    // var timeBlock = inputAreaEl[i];
    listTimeMoment =parseInt(listTimeMoment);
    if (listTimeMoment > i) {
      $(".form-control").addClass("past");
      
    }
    else if (i === listTimeMoment) {
      $(".form-control").addClass("present");
    }
    else{ 
      $(".form-control").addClass("future");

    }
  }
}

changeColor();

// console.log(event.target);
// $(event.target) = $(this).val().trim

// var inputAreaEl = $(this).siblings.text();

// localStorage.setItem($(this).target.siblings.value);

// var value = (event.target)
// var value = $(this).siblings(inputAreaEl).val()

// $(event.target).siblings(setItem(inputAreaEl,val()));

// = i;
// localStorage.setItem(i, val());

// .val().localstorage.setItem()
// // localStorage.setItem("event.target","siblings.val")

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
