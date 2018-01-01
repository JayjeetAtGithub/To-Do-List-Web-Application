isGray = false;
$("ul").on("click","li",function(){
    if(isGray)
        {
            $(this).css("color","black");
            $(this).css("text-decoration","none");
            isGray = false;
        }
    else
        {
             $(this).css("color","gray");
             $(this).css("text-decoration","line-through");
             isGray = true;
        }
});
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        
        $(this).remove();
        
    });
    event.stopPropagation();
   
    
});
$("input[type = 'text']").keypress(function(event){
   
if(event.which === 13)    
    {
       var toText =  $(this).val();
        $(this).val("");
       $("ul").append("<li><span><img src = 'delete.png'></span>" +"  "+ toText + "</li>");
    }
    
});
$("img[src = 'create.png']").click(function(){
   
    $("input[type = 'text']").fadeToggle();
});