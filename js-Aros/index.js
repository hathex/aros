$(function () {
    "use strict";

    //var animationend = $(window).cssAniEnd('animation');
    //var transtitionEnd = $(window).cssAniEnd('transtion');
    var animationend    =   "animationend";
    
    var galleryWrapper = $('.gallerWrapper');
    
    galleryWrapper.each(function () {
        
        var thisGalleryWrapper = $(this);
        var gallery = thisGalleryWrapper.find('.gallery');
        var item = gallery.children();
        var numberOfItem = item.length;
        var itemHeight =
            parseFloat((100 / numberOfItem).toFixed(2));
        
        var ulHeight = numberOfItem*100+"%";
        
        gallery.height(ulHeight);
        
        var direction = thisGalleryWrapper.find('.direction');
        var firstButtom = direction.find('>:first-child');
        var lastButtom = direction.find('>:last-child');
        
        var liProcent = itemHeight + "%";
        item.outerHeight(liProcent);
        //console.log(itemHeight + "%")



        var isAnimating = false;
        
/*        firstButtom.on('click',function(e){
            e.preventDefault();
            console.log(firstButtom);
            if (isAnimating === false) {
                isAnimating = true;
                gallery.addClass('left').one(animationend, function () {
                    var firstLi = gallery.find('>:first-child');
                    firstLi.appendTo(gallery);
                    gallery.removeClass('left');
                    isAnimating = false;
                })
            }
        })*/
        firstButtom.on('click', function (e) {
            console.log("first b");
            e.preventDefault();
            if (isAnimating === false) {
                isAnimating = true;
                gallery.addClass('left').one(animationend, function () {

                    var firstLi = gallery.find('>:first-child');
                    firstLi.appendTo(gallery);
                    gallery.removeClass('left');
                    isAnimating = false;
                });
            }
        });


        lastButtom.on('click', function (e) {
            e.preventDefault();
            console.log("last b");
            if (isAnimating === false) {
                isAnimating = true;

                var lastLi = gallery.find('>:last-child');

                lastLi.prependTo(gallery);

                gallery.addClass('right').one(animationend, function () {
                    gallery.removeClass('right')
                    isAnimating = false;
                });
            }
        });
        
    })
});
