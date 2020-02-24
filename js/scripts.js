  $(".showing1").click(function () {
    $(".showing1").hide();
    $("#design").show();
  });

$(document).ready(function () {
  $("#pic1").mouseenter(function () {
    $("#pic1").fadeOut();
    $("#1").fadeIn();
  }).mouseleave(function () {
    $("#1").fadeOut();
    $("#pic1").fadeIn();
  });
});
$(document).ready(function() {
  $("#pic2").mouseover(function() {
    $("#pic2").fadeOut()
    $("#2").fadeIn();
  }).mouseleave(function  () {
    $("#2").fadeOut();
    $("#pic2").fadeIn ();
  })
});
$(document).ready(function() {
  $("#pic3").mouseover(function() {
    $("#pic3").fadeOut()
    $("#3").fadeIn();
  }).mouseleave(function  () {
    $("#3").fadeOut();
    $("#pic3").fadeIn ();
  })
});
$(document).ready(function() {
  $("#pic4").mouseover(function() {
    $("#pic4").fadeOut()
    $("#4").fadeIn();
  }).mouseleave(function  () {
    $("#4").fadeOut();
    $("#pic4").fadeIn ();
  })
});
$(document).ready(function() {
  $("#pic5").mouseover(function() {
    $("#pic5").fadeOut()
    $("#5").fadeIn();
  }).mouseleave(function  () {
    $("#5").fadeOut();
    $("#pic5").fadeIn ();
  })
});
$(document).ready(function() {
  $("#pic6").mouseover(function() {
    $("#pic6").fadeOut()
    $("#6").fadeIn();
  }).mouseleave(function  () {
    $("#6").fadeOut();
    $("#pic6").fadeIn ();
  })
});
$(document).ready(function() {
  $("#pic7").mouseover(function() {
    $("#pic7").fadeOut()
    $("#7").fadeIn();
  }).mouseleave(function  () {
    $("#7").fadeOut();
    $("#pic7").fadeIn ();
  })
});
$(document).ready(function() {
  $("#pic8").mouseover(function() {
    $("#pic8").fadeOut(slow)
    $("#8").fadeIn(slow);
  }).mouseleave(function  () {
    $("#8").fadeOut(slow);
    $("#pic8").fadeIn (slow);
  })
});
event.preventDefault();