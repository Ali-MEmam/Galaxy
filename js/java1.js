$(window).on('load',function(){
    $(".Loading-screen").fadeOut(1000);
});
var modal = document.getElementById('login-modal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

/*$("html").niceScroll({
cursorcolor:"black",
cursorwidth:"14px",
background:"rgba(255,255,255,0.1)",
cursorborder:"1px solid #133f3a",
cursorborderradius:0
});*/
function openSideNav(){
    document.getElementById("side").style.right="0px";
    document.getElementById("main").style.marginRight="170px";
};
function closeSideNav(){
    document.getElementById("side").style.right="-300px";
    document.getElementById("main").style.marginRight="0px";
}
// window.addEventListener('scroll', function(e) {

            //if( $(window).scrollTop() <= 50) {
                //$('.wow').removeClass('animated');
                //$('.wow').removeAttr('style');
                //new WOW().init();
            //}
//});
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
//var sticky = navbar.offsetTop;
// add for body
var paddingBody = document.getElementById("bgtop");
var paddingOp = document.getElementById("optop");
var brandName = document.getElementById("brandname");


// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= 60) {
    navbar.classList.add("fixed-top");
    paddingBody.style.paddingTop ="30px";
    paddingOp.style.paddingTop ="30px";
        navbar.style.background="linear-gradient(135deg, rgb(82, 103, 100) 0%, rgb(0, 37, 35) 100%)";
    //brandName.style.remove("wow");
    //brandName.style.remove("flip");
    //brandName.style.visibility="visible";
    
    
  } else {
    navbar.classList.remove("fixed-top");
    paddingBody.style.paddingTop = "0px";
   paddingOp.style.paddingTop ="0px";
    navbar.style.background="none";
    //brandName.style.add("wow");
    //brandName.style.add("flip");
  }
};