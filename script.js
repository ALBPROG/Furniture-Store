
$(document).ready(function() {
    $('ul.tabs li').click(function() {
      var tab_id = $(this).attr('data-tab');
      $('ul.tabs li').removeClass('current');
      $('.form-content').removeClass('current');
      $(this).addClass('current');
      $("#" + tab_id).addClass('current');
    })
    $("#signUp").click( function(){
        $(".overlay").addClass("active");
        $(".modal").show();
        });

    $(".close").click(function () {
               
       $(".modal").hide();

    });

  });

