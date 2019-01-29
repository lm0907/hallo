$.fn.extend({
    slider:function(obj){
        var defaultset={
            timer:1000,
            pic:['https://img.alicdn.com/simba/img/TB1fN3WA7CWBuNjy0FaSutUlXXa.jpg','https://img.alicdn.com/tps/i4/TB1o_JiAVOWBuNjy0FiSutFxVXa.jpg','https://img.alicdn.com/simba/img/TB114X1gBjTBKNjSZFuSuv0HFXa.jpg']
        }
        var newSet=$.extend({},defaultset,obj)
        var content=$("<div class='slider'></div>")
        var imgBar = '<div>'+
    '<div class="slider-panner sp-1 active"><div>'+
    '<img src="'+newSet.pic[0]+'" ></div></div>'+
    '<div class="slider-panner sp-2 active"><div>'+
    '<img src="'+newSet.pic[1]+'" ></div></div>'+
    '<div class="slider-panner sp-3 active"><div>'+
    '<img src="'+newSet.pic[2]+'" ></div></div>'+
    '</div>'
    var btnBar = '<div class="list-btn">'+
      '<ul>'+
        '<li class="active">'+'</li>'+
        '<li>'+'</li>'+
        '<li>'+'</li>'+
      '</ul>'+
    '</div>';
    content.html(imgBar+btnBar);  
    $(this).append(content);
    var n=0;
    var t=null;
  $("li").mouseover(function(){
      
      
      $(".slider-panner:eq("+$(this).index()+")").add($(this)).addClass("active").siblings().removeClass("active");
  })
  function showAuto(){
      n++;
      if(n==3)n=0;
      $("li").eq(n).triggerHandler("mouseover");
  }
  t=setInterval(showAuto,3000)
  $(".slider").hover(function(){
      clearInterval(t);
  },function(){
      t=setInterval(showAuto,3000)
  })
    }
   
})