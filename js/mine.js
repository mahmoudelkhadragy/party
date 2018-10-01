/*global console, $ */

/*
$(document).ready(function(){
    
    $(".sk-cube-grid").fadeOut(2000,function(){
        
      $("#loading").fadeOut(2000 , function(){
          
              $("body").css("overflow","auto")

      })  

    })
    
    
})

var galleryO = $("#gallery").offset().top;
$(window).scroll(function(){
    
    
var wScrol = $(window).scrollTop();

    if(wScrol > galleryO)
        {
    $(".change").css("backgroundColor","gray")  
    $("#btnUp").fadeIn(500)
        }
    else
        {
    $(".change").css("backgroundColor","transparent")        
    $("#btnUp").fadeOut(500)
            
        }


})



$("#btnUp").click(function(){
    

    
    $("html,body").animate({scrollTop:'0'},1000)
})




$("a").click(function(){
    
   var href =  $(this).attr("href");
  var off =   $(href).offset().top
  
    $("html,body").animate({scrollTop:off},10000)
  
    
})




$("#options i").click(function(){
    
    $(".color-options").toggle();
})
var colors = ["orange","tan","gray","#09c","teal"]
var lis = $("#options ul li");
for(var i=0;i<lis.length;i++)
    {
$("#options ul li").eq(i).css("backgroundColor",colors[i])
    }
if(localStorage.getItem("clientColor") == null)
    {
$("p,i,h3,h2,h1").css("color","orange")        
    }
else
    {
$("p,i,h3,h2,h1").css("color",localStorage.getItem("clientColor"))      
    }
$("#options ul li").click(function(){
   // $(this).css("backgroundColor","black") 
   var color = $(this).css("backgroundColor") 
   $("p,i,h3,h2,h1").css("color",color)
    
localStorage.setItem("clientColor",color);
})


$("#options img").click(function(){
    
    var src = $(this).attr("src")
    $("#home").css("backgroundImage","url("+src+")")
})



var typed = new Typed('.element', {
  strings: ["First sentence.", "Second sentence.","web development"],
  typeSpeed: 20,
    loop:true
});


$(document).ready(function() {
  $(".skitter-large").skitter({
      interval:500,
      theme:'square',
        thumbs: true

  });
});


new WOW().init();
*/

$(document).ready(function () {
    "use strict";
    var wH = window.innerHeight;
    $('header').css("height", wH);
    
    $(".button").click(function () {
        
        $(this).parent("#navbar").toggleClass("visible");
        
        if ($("#navbar").hasClass("visible")) {
            $("#navbar").animate({
                left: '0px'
            }, 500);
            
            $("body").animate({
                paddingLeft: '200px'
            }, 500);
            
            $(this).html("<i class='fas fa-angle-double-left'></i> " + " Close");
        } else {
            $("#navbar").animate({
                left: '-200px'
            }, 500);
            
            $("body").animate({
                paddingLeft: '0px'
            }, 500);
            
            $(this).html("<i class='fas fa-angle-double-right'></i> " + " Open");
        }
    });
    
    $("#navbar .hide").click(function () {
        $("#navbar").animate({
            left: '-200px'
        }, 300);
        
        $("body").animate({
            paddingLeft: '0px'
        }, 300);
        $(".button").html("<i class='fas fa-angle-double-right'></i> " + " Open");
    });
    
    
    //thumbnails
    $(".small-image img").on('click', function () {
        
        var imageSrc = $(this).attr('src');
        
        $(this).addClass("selected").parent().siblings().find("img").removeClass("selected");
        
        $(".image img").hide().attr("src", imageSrc).fadeIn(300);
        
        
    });
    
    
    $(".toggle-menu h3").click(function () {
        
        $(this).next().slideToggle(500);
        $(".toggle-menu .paragraph").not($(this).next()).slideUp(500);
        
    });
    
    
    // Calculate Date
    
    function countdown(){
        
        "use strict";
        
        var now = new Date(),
            eventDate = new Date(2018, 10, 15),
        
            currentTiime = now.getTime(),
            eventTime = eventDate.getTime(),

            remTime = eventTime - currentTiime,
            
            days = document.getElementById("days"),
            hours = document.getElementById("hours"),
            minutes = document.getElementById("minutes"),
            seconds = document.getElementById("seconds");
            

        var s = Math.floor(remTime / 1000);
        var m = Math.floor(s / 60);
        var h = Math.floor(m / 60);
        var d = Math.floor(h / 24)-30;

				h %= 24;
				m %= 60;
				s %= 60;

				h = (h < 10) ? "0" + h : h;
				m = (m < 10) ? "0" + m : m;
				s = (s < 10) ? "0" + s : s;

				days.innerHTML = "<h3>"+  d + " D"+"</h3>";
				hours.innerHTML ="<h3>"+  h + " h"+"</h3>";
				minutes.innerHTML = "<h3>"+  m + " m"+"</h3>";
				seconds.innerHTML = "<h3>"+  s + " s"+"</h3>";

				setTimeout(countdown, 1000);
			}

			countdown();
});











