$(document).ready(function() {
    $("span#design").click(function() {
      $("showing1").toggle();
      $(".hiding1").toggle();
    });
});
$(document).ready(function() {
  $("span#dev").click(function() {
    $(".showing2").toggle();
    $(".hiding2").toggle();
  });
});
$(document).ready(function() {
  $("span#pro").click(function() {
    $(".showing3").toggle();
    $(".hiding3").toggle();
  });
});
$(document).ready(function () {

  $(".showing").hide();

  $(".hiding").click(function(){
       $("#design").toggle();
  });

  // $("#btn2").click(function(){
  //      $("#p2").toggle();
  // });

  // $("#btn2").click(function(){
  //      $("#p2").toggle();
  // });
});