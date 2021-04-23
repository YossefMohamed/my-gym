$(document).ready(function(){

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
autoplayTimeout:5000,
autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})



        
          $('td').hover(function () {
              y= $(this).text()
              p=0
                for ( var i = 0; i < y.length; i++ )
                {
                    if (y.charAt(i)=='C' || y.charAt(i)=='L') 
                        p++
                }
              f=y.charAt(0)
            if((y.trim()!='') && p > 0)
              { 
                $(this).css(
                    'background-image',' linear-gradient(to right, #e4381C 100%, #e16521 100%)'
                    )  
                $(this).children().css('color','white')                  
              }
            
            }, function () {
                 $(this).removeAttr('style');
                 $(this).children().removeAttr('style')

                }
            );
        $('.links div').click(function () {
            z=0
            $(this).css('border-bottom','2px solid #e4381C')
            t=$(this).text().charAt(0)
            

        });
        $("td").each(function(){


            if($(this).text.indexOf(t) < 0){
                $(this).css(
                    "visibility","hidden"
                    
                )
            }

        })



    })
