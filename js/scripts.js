// $(document).ready(function() {
//     $("span#design").click(function() {
//       $("showing1").toggle();
//       $(".hiding1").toggle();
//     });
// });
// $(document).ready(function() {
//   $("span#dev").click(function() {
//     $("showing2").toggle();
//     $(".hiding2").toggle();
//   });
// });
// $(document).ready(function() {
//   $("span#pro").click(function() {
//     $(".showing3").toggle();
//     $(".hiding3").toggle();
//   });
// });
// $(document).ready(function () {

//   $(".showing").hide();

//   $(".hiding").click(function(){
//        $("#design").toggle();
//   });

//   // $("#btn2").click(function(){
//   //      $("#p2").toggle();
//   // });

//   // $("#btn2").click(function(){
//   //      $("#p2").toggle();
//   // });
// });$(document).ready(function(){
$("#dev_icon").click(function () {
  $("#dev_icon").slideDown('1500').hide('1000');
  $("#development").show('1500');
});
$("#development").click(function () {
  $("#development").slideUp('1500');
  $("#dev_icon").slideDown('1500');
});
$(document).ready(function () {
  $("#design-icon").click(function () {
    $("#design-icon").slideDown('1500').hide('1000');
    $("#design").show('1500');
  });
  $("#design").click(function () {
    $("#design").slideUp('1500');
    $("#design-icon").slideDown('1500');
  });
});
$(document).ready(function () {
  $("#product_icon").click(function () {
    $("#product_icon").slideDown('1500').hide('1000');
    $("#product").show('1500');
  });
  $("#product").click(function () {
    $("#product").slideUp('1500');
    $("#product_icon").slideDown('1500');
  });
});
$(document).ready(function () {
  $("#pic1").mouseover(function () {
    $("#1").show();
  }).mouseout(function () {
    $("#1").hide();
  });
});
$(document).ready(function () {
  $("#pic2").mouseover(function () {
    $("#2").show();
  }).mouseout(function () {
    $("#2").hide();
  });
});
$(document).ready(function () {
  $("#pic3").mouseover(function () {
    $("#3").show();
  }).mouseout(function () {
    $("#3").hide();
  });
});
$(document).ready(function () {
  $("#pic4").mouseover(function () {
    $("#4").show();
  }).mouseout(function () {
    $("#4").hide();
  });
});
$(document).ready(function () {
  $("#pic5").mouseover(function () {
    $("#5").show();
  }).mouseout(function () {
    $("#5").hide();
  });
  $("#pic6").mouseover(function () {
    $("#6").show();
  }).mouseout(function () {
    $("#6").hide();
  });
  $("#pic7").mouseover(function () {
    $("#7").show();
  }).mouseout(function () {
    $("#7").hide();
  });
  $("#pic8").mouseover(function () {
    $("#8").show();
  }).mouseout(function () {
    $("#8").hide();
  });
});