/**
 * Created by zhangxin on 2018/10/12.
 */
$(function(){
  $.ajax({
    url:'http://127.0.0.1:9090/api/getindexmenu',
    type:'get',
    dataType:'json',
    success:function(info){
      var str = template('navTmp',info);
      $('.mm_nav ul').html(str);
    }
  })
  //点击显示隐藏
  $('.mm_nav').on('click',$('.mm_nav li a.more'),function(){
    $('.mm_nav li a.more').parent().nextAll().toggle();
  })

//  渲染产品数据
  $.ajax({
    url:'http://127.0.0.1:9090/api/getmoneyctrl',
    type:'get',
    dataType:'json',
    success:function(info){
      console.log(info);
      var str = template('productTmp',info);
      $('.info ul').html(str);
    }
  })


})