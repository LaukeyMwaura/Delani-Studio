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
// $(document).ready(function () {
//   $("#pic1").hover(function () {
//     $("#1").show();
//     $("#1").hide();
//   })
// });
// $(document).ready(function () {
//   $("#pic1").hover(function () {
//     $("#1").hide();
//   });
// });
// $(document).ready(function() {
//   $("#pic2").mouseover(function() {
//     $("#pic2").fadeOut()
//     $("#2").fadeIn();
//   }).mouseleave(function  () {
//     $("#2").fadeOut();
//     $("#pic2").fadeIn ();
//   })
// });
// $(document).ready(function() {
//   $("#pic3").mouseover(function() {
//     $("#pic3").fadeOut()
//     $("#3").fadeIn();
//   }).mouseleave(function  () {
//     $("#3").fadeOut();
//     $("#pic3").fadeIn ();
//   })
// });
// $(document).ready(function() {
//   $("#pic4").mouseover(function() {
//     $("#pic4").fadeOut()
//     $("#4").fadeIn();
//   }).mouseleave(function  () {
//     $("#4").fadeOut();
//     $("#pic4").fadeIn ();
//   })
// });
// $(document).ready(function() {
//   $("#pic5").mouseover(function() {
//     $("#pic5").fadeOut()
//     $("#5").fadeIn();
//   }).mouseleave(function  () {
//     $("#5").fadeOut();
//     $("#pic5").fadeIn ();
//   })
// });
// $(document).ready(function() {
//   $("#pic6").mouseover(function() {
//     $("#pic6").fadeOut()
//     $("#6").fadeIn();
//   }).mouseleave(function  () {
//     $("#6").fadeOut();
//     $("#pic6").fadeIn ();
//   })
// });
// $(document).ready(function() {
//   $("#pic7").mouseover(function() {
//     $("#pic7").fadeOut()
//     $("#7").fadeIn();
//   }).mouseleave(function  () {
//     $("#7").fadeOut();
//     $("#pic7").fadeIn ();
//   })
// });
// $(document).ready(function() {
//   $("#pic8").mouseover(function() {
//     $("#pic8").fadeOut(slow)
//     $("#8").fadeIn(slow);
//   }).mouseleave(function  () {
//     $("#8").fadeOut(slow);
//     $("#pic8").fadeIn (slow);
//   })
// });
function submit(name) {
  var name = document.getElementById("left").value;
  if (name === "") {
    alert("Invalid input.Please enter you name correctly");
  }
  else {
    alert(name + ", Thank you message received!😁")
  }
}