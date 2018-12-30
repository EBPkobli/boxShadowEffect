var impDiv;
$( document ).ready(function() 
{
    $(".container .dugme").on("click",dugmeFonk);
    impDiv = $(".container");
});

function dugmeFonk()
{
    createImpulse();
}

function createImpulse()
{
    var myDiv = $("<div class=imp></div>").appendTo(impDiv).css({"width": impDiv.width()+"px","height": impDiv.height()+"px"});
    setTimeout(function(){
        myDiv.remove();
    },2000);
}