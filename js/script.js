$( document ).ready(function() {

/*------------------------------
On Scroll Animation
-------------------------------*/

  $(window).scroll(function() {
      $('#productFloat').each(function(){
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+900) {
          $(this).addClass("floating");
        }
      });

      $('.textContent1').each(function(){
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+900) {
          $(this).addClass("slideLeft");
        }
      });

      $('#imgBlock1').each(function(){
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+900) {
          $(this).addClass("slideRight");
        }
      });
    });

/*------------------------------
Product 1 Click
-------------------------------*/

    $("#productLink1").click(function() {
		$(".row2").hide();
		$(".row3").hide();
		$(".row1").show();

    $(".textContent1").addClass("slideLeft");
    $("#imgBlock1").addClass("slideRight");

    $("#productLink1").addClass("activeLink");
    $("#productLink2").removeClass("activeLink");
    $("#productLink3").removeClass("activeLink");
	});

/*------------------------------
Product 2 Click
-------------------------------*/

    $("#productLink2").click(function() {
		$(".row1").hide();
		$(".row3").hide();
		$(".row2").show();

    $(".textContent2").addClass("slideRight");
    $("#imgBlock2").addClass("slideLeft");

    $("#productLink2").addClass("activeLink");
    $("#productLink1").removeClass("activeLink");
    $("#productLink3").removeClass("activeLink");

    $("#productFloat2").addClass("floating");
	});

/*------------------------------
Product 3 Click
-------------------------------*/

      $("#productLink3").click(function() {
  		$(".row1").hide();
  		$(".row2").hide();
  		$(".row3").show();

      $(".textContent3").addClass("slideLeft");
      $("#imgBlock3").addClass("slideRight");

      $("#productLink3").addClass("activeLink");
      $("#productLink2").removeClass("activeLink");
      $("#productLink1").removeClass("activeLink");

      $("#productFloat3").addClass("floating");
  	});

/*------------------------------
Navbar Scroll Effect
-------------------------------*/

    $(document).on("scroll", function() {

    	if($(document).scrollTop()>100) {
    		document.querySelector(".navbar").setAttribute("style", "height: 100px; display: block;");


    		document.querySelector("#logo").setAttribute("style", "width: 70px; margin-top: -.5em;");
    		document.querySelector(".navbar-right").setAttribute("style", "margin-top: 2.4em!important;");
    	}
      else {
    		document.querySelector(".navbar").setAttribute("style", "height: 170px; display: none;");

        document.querySelector("#logo").setAttribute("style", "width: 100px; margin-top: 0em;");
        document.querySelector(".navbar-right").setAttribute("style", "margin-top: 5.4em!important;");
    	}

    });

/*------------------------------
More Button Click Effect
-------------------------------*/

    $(".animatedButton").hover(function() {
    $(".parallax").addClass("borderRadiusAnim");
    $(".subContainer").fadeIn();
  });

  $(".animatedButton").click(function() {
  $(".parallax").addClass("borderRadiusAnim");
  $(".subContainer").show();
});

/*-------------------------------------
| Parallax Anime Fade In
-------------------------------------*/
$(".parallaxLogo").fadeIn(1000, function(){
            $(".parallaxLogo").delay(2000).fadeOut();
        });
$(".parallaxContent h1").delay(3500).fadeIn();
$(".animatedButton img").delay(5000).fadeIn();

/*-------------------------------------
| Smooth Scroll
-------------------------------------*/
    function scroll2About () {
    	$('html,body').animate({
            scrollTop: $("#about").delay(500).offset().top},
            'slow');
    }

    $(".animatedButton").click(scroll2About);
});
