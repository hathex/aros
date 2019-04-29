$(function(){
   var content= $("section#content");
   var article= content.find("article");
    var h2= article.find("h2");
   var hiddenShow= article.find(".hidden-show");
    hiddenShow.slideUp(0);
    h2.on("click",function(){
        var indhold =   $(this).next();
        if(indhold.is(":visible") == false){
           indhold.slideDown(500); 
        }
        else{
            indhold.slideUp("500");
        }
        //console.log($(this).next().slideDown(500));
//        console.log("hej")
    })
})