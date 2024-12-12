// js start 
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
      
    }
  }
}
// js end 
// owl start 
$(document).ready(function(){
  $(".web_carousel").owlCarousel({
    items:5,
    loop:true,
   
    autoplayTimeout:2000,
    smartSpeed:1000,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        320:{
          items:3,
          
          loop:true,
          nav:false,
          dots:false,
          autoplayTimeout:2000,
          smartSpeed:1000,
          autoplay:true,
        
        },
        768:{
          items:4,
          loop:true,
          nav:false,
          dots:false,
          autoplayTimeout:2000,
          smartSpeed:1000,
          autoplay:true,
        },
        992:{
          items:5,
          loop:true,
          nav:false,
          dots:false,
          autoplayTimeout:2000,
          smartSpeed:1000,
          autoplay:true,
        },

       
    }
  });
  $('.owl-padding ').owlCarousel({
    items:2.5,
    stagePadding: 0,
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
      0:{
        items:1,
        stagePadding: 0,
        loop:true,
        margin:10,
        nav:true,
        dots:false,
      },
      576:{
        items:1.5,
        stagePadding: 0,
        loop:true,
        margin:10,
        nav:true,
        dots:false,
      },
       
        768:{
          items:1.5,
          stagePadding: 0,
          loop:true,
          margin:10,
          nav:true,
          dots:false,
        },
        1000:{
          
        }
    }
    
    
});

});
// owl end
