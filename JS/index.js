$(function(){
   $('#btn-plus').click(function (){
       var cnt = Number($('#counter').html());
       cnt++;
       $("#counter").html(cnt);
   });
});

$(function(){
   $('#btn-minus').click(function (){
       var cnt = Number($('#counter').html());
       cnt--;
       $("#counter").html(cnt);
   });
});