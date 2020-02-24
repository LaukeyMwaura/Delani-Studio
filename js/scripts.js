$(document).ready(function () {
  $(".design").click(function () {
    $(".design").hide();
    $(".showing1").show();
  });
});
$(document).ready(function () {
  $(".showing1").click(function () {
    $(".showing1").hide();
    $(".design").show();
  });
});
$(document).ready(function () {
  $(".dev").click(function () {
    $(".dev").hide();
    $(".showing2").show();
  });
});
$(document).ready(function () {
  $(".showing2").click(function () {
    $(".showing2").hide();
    $(".dev").show();
  });
});
$(document).ready(function () {
  $(".pro").click(function () {
    $(".pro").hide();
    $(".showing3").show();
  });
});
$(document).ready(function () {
  $(".showing3").click(function () {
    $(".showing3").hide();
    $(".pro").show();
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