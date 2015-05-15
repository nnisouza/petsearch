var master = {window: {el: null, width: null, height: null}};


function calc() {
    master.window.height = $(window).height();
    master.window.width = $(window).width();
    
    afterLoaded();
}
function drawPage() {
    
}
function actions() {
    cheet('s h a k e s p e a r e', function () {
      alert('Doubt thou the stars are fire; \nDoubt that the sun doth move; \nDoubt truth to be a liar; \nBut never doubt I love. \n                                                        - William Shakespeare');
    });
}
function afterLoaded() {
    feed = new Instafeed({
        get: 'tagged',
        tagName: 'puppies',
        userId: 141970,
        accessToken: '141970.467ede5.edbc9c37472d41b790e1db8948793f11',
        sortby: 'random',
        resolution: 'thumbnail',
        links: 'false',
        limit: '60',
        template: '<img src="{{image}}"/>', 
        after: function(){
            $.ajaxSetup({ cache: false });
            
            if($('#instafeed img').length < 60) {
                feed.run();
            }
            
            $makeImages = master.window.width / 10;
            $('#instafeed img').width($makeImages);
        }
    });

    feed.run();
    
    
    smoothScroll();
}



$(window).load(drawPage);
$(document).ready(actions);
$(window).resize(calc).trigger('resize');