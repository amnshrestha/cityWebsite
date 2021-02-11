

$('.bodyContent').css('opacity','0');

var lastScrollTop = 0;
const initialWidth = $('#batmanLogo').width();

const maxWidth = 10000;
const factor = 550;

var scrolledAmount = 0;
// 19683
// 29524.5
$(window).scroll(function(){

    var image = $('#batmanLogo');
    var bodyContent = $('.bodyContent');
    var st = $(this).scrollTop();

    if(st < 600){
        var slope = (maxWidth - initialWidth )/ factor;
        image.width(slope*st + initialWidth);
        
        var slopeOpacity = 1/factor;
        var opacityResult = -slopeOpacity*st + 1;
        image.css('opacity',opacityResult);

        var opacityForBody = slopeOpacity * st + 0;
        bodyContent.css('opacity',opacityForBody);

        
    }

    


    // if (st > lastScrollTop){
    //     // downscroll code

    //     var widthToBe = (50-st)
    //     if(image.width() < maxWidth){
    //         image.width(imageWidth+0.1*imageWidth);
    //         image.css('opacity',imageOpacity - 0.1* imageOpacity);
    //     }else{
    //         image.css('opacity','0');
    //         maxHeight = image.height();
    //         image.height(0);
    //     }
    // } else {
    //     // upscroll code
    //     if(image.width() > initialWidth){
    //         if(image.height()==0){
    //             image.height(maxHeight);
    //         }
    //         image.width(imageWidth-0.1*imageWidth);
    //         image.css('opacity',imageOpacity + 0.1* imageOpacity)
    //     }else{
    //         image.css('opacity','1')
    //     }
    // }
    // lastScrollTop = st;
   
    
});


$(".eachCard").click(function(){ 
    $( ".eachCard" ).each(function() {
        $(this).removeClass('selected');
        // $(this).css("background-color", "rgba(0, 0, 0, 0.8)");
    });
    $(this).addClass('selected');
    // $(this).css("background-color", "rgba(70, 70, 70, 0.8)");
    var id = $(this).attr('id');
    var newTitle = '';
    var newDescription = '';
    switch(id) {
        case 'geography':
            newTitle = 'GEOGRAPHY';
            newDescription = "Gotham City, like other cities in the DC Universe, has varied in its portrayals over the decades, but the city's location is traditionally depicted as being in the state of New Jersey. In Amazing World of DC Comics #14 (March 1977), publisher Mark Gruenwald discusses the history of the Justice League and indicates that Gotham City is located in New Jersey. In the Gotham series, the scenes were mostly shot in New York which also brings into perspective the origin of the world in the setting.";
            break;
        case 'history':
            newTitle = 'HISTORY';
            newDescription = "The 2011 comic book series Batman: Gates of Gotham details a history of Gotham City in which Alan Wayne (Bruce Wayne's ancestor), Theodore Cobblepot (Oswald Cobblepot's ancestor), and Edward Elliot (Thomas Elliot's ancestor), are the founding fathers of Gotham. In 1881, they constructed three bridges called the Gates of Gotham, each bearing one of their names. Edward became jealous of the Wayne family during this period, jealousy that would spread to his great-great-grandson, Thomas Elliot or Hush.";
            break;
        case 'show':
            newTitle = 'TV-SHOW';
            newDescription = "Gotham is an American action crime drama television series developed by Bruno Heller, produced by Warner Bros. Television and based on characters published by DC Comics and appearing in the Batman franchise, primarily those of James Gordon and Bruce Wayne. The series premiered on Fox on September 20, 2013, and concluded on April 25, 2019. The series although initially intended for Gordon and the city,  included the Bruce Wayne character and the origin stories of Batman's rogues gallery.";
            break;
        default:
            newTitle = 'GOTHAM';
            newDescription = "Gotham is a fictional city appearing in comic books published by DC Comics, best known as the home of Batman. The city was identified as Batman's place of residence in Batman #4 (December 1940) and has since been the primary setting for stories featuring the character. Gotham is traditionally depicted as being located in the U.S. state of New Jersey. Gotham's look and atmosphere was primarily influenced by New York City and Chicago,although it was designed to more generally resemble any major American city.";
            break;
    }
    var titleToChange = $('.title');
    var descriptionToChange = $('.initialDescription');
    titleToChange.fadeOut(function(){
        titleToChange.text(newTitle);
        titleToChange.fadeIn();
    });
    descriptionToChange.fadeOut(function(){
        descriptionToChange.text(newDescription);
        descriptionToChange.fadeIn();
    });
    
    
});

