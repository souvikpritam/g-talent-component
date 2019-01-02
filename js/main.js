
/*..........Side Nav ........ */

function openSlideMenu(){
document.getElementById('side-menu').style.width = '100%';
}

function closeSlideMenu(){
document.getElementById('side-menu').style.width = '0';
}

/*..........End of Side Nav ........ */


/*..........Search Button........ */

    $(document).ready(function(){
    $(".fa-search").click(function(){
    $("#container, .input").toggleClass("active");
    $("input[type='text']").focus();
  });
  
});

 /*..........End of Search Button........ */



 //Navbar Box Shadow on Scroll 

$(function(){
    var navbar = $('.navbar');
    $(window).scroll(function(){
        if($(window).scrollTop() <= 40){
       		navbar.css('box-shadow', 'none');
        } else {
          navbar.css('box-shadow', '0px 10px 20px rgba(0, 0, 0, 0.4)'); 
        }
    });  
})

