const $saveBtn = $("#saveBtn");
const $7input = $("#7");

// get saved notes
function getSavedNotes() {
  let $7am = localStorage.getItem("7am");
  $7input.val($7am);
}

getSavedNotes();

$saveBtn.on("click", function (e) {
  e.preventDefault();
  console.log($7input.val());
  localStorage.setItem("7am", $7input.val());
});
