//side bar
(function($) {
$('#sidebarCollapse').on('click', function () {
$('#sidebar').toggleClass('active');
});
})(jQuery);

    $('.header-slider').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    
    // Product Slider 4 Column
    $('.product-slider-4').slick({
        autoplay: true,
        infinite: true,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    
 ///**validation**/
$("#register-form input:not([type='submit'])").on("focus",function(){
$(this).css("border","2px solid cyan");
});

$("#register-form input:not([type='submit'])").on("blur",function(){toValidate($(this))});

$("#register-form").on("submit",function(){
let inputs = $(this).children().children("input:not([type='submit'])");
let inputs = $(this).find("input:not([type='submit'])");
toValidate(inputs);

});

function toValidate(el)
{
console.log(el);
if(!validate(el))
{
el.css("border","2px solid red");
el.tooltip('show');
}
else
{
el.css("border","2px solid green");
el.tooltip('hide');
}
}


function validate(el)
{
console.log(el.attr("name"));
if(el.attr("name") == "name_ar")
{
if(el.val().trim().match(/^[\u0621-\u064A ]+$/) == null)//only arabic letters
return false;
}
else if(el.attr("name") == "name_en")
{
if(el.val().trim().match(/^[a-zA-Z ]+$/) == null)
return false;
}
else if(el.attr("name") == "email")
{
if(el.val().trim().match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/) == null)
return false;
}
else if(el.attr("name") == "address")
{
if(el.val().trim().match(/^([\u0621-\u064A0-9\-, ]{3,})|([a-zA-Z0-9\-, ]{3,})+$/) == null)
return false;
}
else if(el.attr("name") == "phone")
{
if(el.val().trim().match(/^\+?\d{10,}$/) == null)
return false;
}
else if(el.attr("name") == "password")
{
if(el.val().trim().length < 8 )
return false;
}
else if(el.attr("name") == "confirm-password")
{
if(el.val().trim().length < 8 && el.val().trim() != $("#register-form input[name='password']"))
return false;
}
else if(el.attr("name") == "agree")
{
if(!el.attr("checked"))
return false;
}
else if(el.has("required").val() == "")
{
return false;
}
return true;

    
   })(jQuery); 
    
    


    
    
    
    