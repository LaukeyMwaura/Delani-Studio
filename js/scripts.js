$(document).ready(function () {
  $(".design").click(function () {
    $(".design").fadeOut();
    $(".showing1").fadeIn();
  });
});
$(document).ready(function () {
  $(".showing1").click(function () {
    $(".showing1").fadeOut();
    $(".design").fadeIn();
  });
});
$(document).ready(function () {
  $(".dev").click(function () {
    $(".dev").fadeOut();
    $(".showing2").fadeIn();
  });
});
$(document).ready(function () {
  $(".showing2").click(function () {
    $(".showing2").fadeOut();
    $(".dev").fadeIn();
  });
});
$(document).ready(function () {
  $(".pro").click(function () {
    $(".pro").fadeOut();
    $(".showing3").fadeIn();
  });
});
$(document).ready(function () {
  $(".showing3").click(function () {
    $(".showing3").fadeOut();
    $(".pro").fadeIn();
  });
});
function submit(name) {
  var name = document.getElementById("left").value;
  if (name === "") {
    alert("Invalid input.Please enter you name correctly");
  }
  else {
    alert(name + ", Thank you message received!😁")
  }
}