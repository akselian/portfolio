$(".menu_left a").click(function(){
  $(".content").load($(this).attr("href"));
})