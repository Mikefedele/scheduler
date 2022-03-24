console.log($)
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


// moment().format('MMMM Do YYYY, h:mm:ss a');
// console.log (moment());

function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}
setInterval(displayTime, 1000);

$(".container").on("click",".saveButton", function (event) {
value = $(this).siblings("textarea").val();
textString = $(this).siblings(inputAreaEl).text();
localStorage.setItem(textString, JSON.stringify(value));



  // console.log(event.target);
  // $(event.target) = $(this).val().trim
  
  // var inputAreaEl = $(this).siblings.text();

  // console.log($(this).siblings(inputAreaEl).val());
  // localStorage.setItem($(this).target.siblings.value);

  // var value = (event.target)
  // var value = $(this).siblings(inputAreaEl).val()

  // $(event.target).siblings(setItem(inputAreaEl,val()));
  
  // = i;
  // localStorage.setItem(i, val());

  // .val().localstorage.setItem()
  // // localStorage.setItem("event.target","siblings.val")
  
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

