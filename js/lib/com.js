!function(i){i.fn.step=function(e){var t=this,n={index:0,time:400,title:[]},s=(e=i.extend({},n,e)).title,d=s.length,u=e.time,p=t.width()/d;t.index=e.index;var a=function(){var e="";s.length>0&&(e+='<div class="ui-step-wrap"><div class="ui-step-bg"></div><div class="ui-step-progress"></div><ul class="ui-step">',i.each(s,function(i,t){e+='<li class="ui-step-item"><div class="ui-step-item-title">'+t+'</div><div class="ui-step-item-num"><span>'+(i+1)+"</span></div></li>"}),e+="</ul></div>"),t.append(e),t.find(".ui-step").children(".ui-step-item").width(p),t.toStep(t.index)};return t.toStep=function(e){var n=t.find(".ui-step").children(".ui-step-item");t.index=e,t.find(".ui-step-progress").animate({width:p*(e+1)},u,function(){i.each(n,function(t){t>e?i(this).removeClass("active"):i(this).addClass("active")})})},t.getIndex=function(){return t.index},t.nextStep=function(){t.index>d-2||(t.index++,t.toStep(t.index))},t.prevStep=function(){t.index<1||(t.index--,t.toStep(t.index))},a(),this}}(jQuery);
function showMessage(message,type){
    var message = $("<div class='messageDiv "+type+"'>"+message+"</div>");
    message.css({"top":($(".messageDiv").length+1)*50+'px'});
    $("body").append(message);
    setTimeout(function(){
        message.remove();
    },3000);
}