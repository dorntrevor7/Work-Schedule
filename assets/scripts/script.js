const $saveBtn = $(".saveBtn");
const $currentDay = $("#currentDay");
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
const $h3 = document.querySelectorAll("h3");

const runTime = () => {
  document.getElementById("currentDay").innerHTML = moment().format(
    "MMMM Do YYYY, h:mm:ss a"
  );
};

setInterval(runTime, 1000);

for (let i = 0; i < 11; i++) {
  let h3Val = $h3[i].attributes[0].value;
  if (h3Val < moment().hour()) {
    $h3[i].setAttribute("style", "background-color: rgb(255, 72, 72);");
    console.log("earlier");
  } else if (h3Val > moment().hour()) {
    $h3[i].setAttribute("style", "background-color: rgb(72, 255, 72);");
    // $h3[i].attr("style", "background-color: green;");
    console.log("later");
  } else {
    $h3[i].setAttribute("style", "background-color: lightgrey;");
    console.log("present");
  }
}

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
