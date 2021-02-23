window.onload = function() {
  setTimeout(function() {
    $('.load').fadeOut(1000);
  }, 1000);
}

$(function(){
  $('a[href^="#second"]').click(function(){
    var speed = 800;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
