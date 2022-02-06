$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $(".black").css("background" , "white");
        }
  
        else{
            $(".black").css("background" , "#333");  	
        }
    })
  })