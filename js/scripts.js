$(document).ready(function () {
  $(".design").click(function () {
    $(".design").fadeOut();
    $(".showing1").fadeIn();
  });
  $(".showing1").click(function () {
    $(".showing1").fadeOut();
    $(".design").fadeIn();
  });
  $(".dev").click(function () {
    $(".dev").fadeOut();
    $(".showing2").fadeIn();
  });
  $(".showing2").click(function () {
    $(".showing2").fadeOut();
    $(".dev").fadeIn();
  });
  $(".pro").click(function () {
    $(".pro").fadeOut();
    $(".showing3").fadeIn();
  });
  $(".showing3").click(function () {
    $(".showing3").fadeOut();
    $(".pro").fadeIn();
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
});