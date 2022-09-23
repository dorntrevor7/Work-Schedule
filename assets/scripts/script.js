const $saveBtn = $(".saveButton");
const $7input = $("#7");
const $8input = $("#8");
const $9input = $("#9");
const $10input = $("#10");
const $11input = $("#11");
const $12input = $("#12");
const $1input = $("#1");
const $2input = $("#2");
const $3input = $("#3");
const $4input = $("#4");
const $5input = $("#5");

// get saved notes
function getSavedNotes() {
  $7input.val(localStorage.getItem("7am"));
  $8input.val(localStorage.getItem("8am"));
  $9input.val(localStorage.getItem("9am"));
  $10input.val(localStorage.getItem("10am"));
  $11input.val(localStorage.getItem("11am"));
  $12input.val(localStorage.getItem("12pm"));
  $1input.val(localStorage.getItem("1pm"));
  $2input.val(localStorage.getItem("2pm"));
  $3input.val(localStorage.getItem("3pm"));
  $4input.val(localStorage.getItem("4pm"));
  $5input.val(localStorage.getItem("5pm"));
}

getSavedNotes();

// when savebtn is clicked save the notes
$saveBtn.on("click", function (e) {
  e.preventDefault();
  console.log($7input.val());
  console.log($8input.val());
  console.log($9input.val());
  console.log($10input.val());
  console.log($11input.val());
  console.log($12input.val());
  console.log($1input.val());
  console.log($2input.val());
  console.log($3input.val());
  console.log($4input.val());
  console.log($5input.val());
  localStorage.setItem("7am", $7input.val());
  localStorage.setItem("8am", $8input.val());
  localStorage.setItem("9am", $9input.val());
  localStorage.setItem("10am", $10input.val());
  localStorage.setItem("11am", $11input.val());
  localStorage.setItem("12pm", $12input.val());
  localStorage.setItem("1pm", $1input.val());
  localStorage.setItem("2pm", $2input.val());
  localStorage.setItem("3pm", $3input.val());
  localStorage.setItem("4pm", $4input.val());
  localStorage.setItem("5pm", $5input.val());
});
