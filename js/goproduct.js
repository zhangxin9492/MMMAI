/**
 * Created by zhangxin on 2018/10/14.
 */
$(function(){
  var shopid = 0;
  var areaid = 0;
  //进入页面渲染页面
  function render(shopid,areaid){
    $.ajax({
      url:'http://127.0.0.1:9090/api/getgsproduct',
      type:'get',
      data:{
        shopid:shopid||0,
        areaid:areaid||0
      },
      dataType:'json',
      success:function(info){
        var str = template('contentTmp',info);
        $('.product .content').html(str);
      }
    })
  }
  render();
  //获取店铺
  $.ajax({
    url:'http://127.0.0.1:9090/api/getgsshop',
    type:'get',
    dataType:'json',
    success:function(info){
      var str = template('shopTmp',info);
      $('.product .shop').html(str);
    }
  })
//  获取区域
  $.ajax({
    url:'http://127.0.0.1:9090/api/getgsshoparea',
    type:'get',
    dataType:'json',
    success:function(info){
      var str = template('areaTmp',info);
      $('.product .area').html(str);
    }
  })

  //  标题点击显示隐藏
  $('.title .shop').click(function(){
    $(this).find('i').toggleClass('fa-caret-up').toggleClass('fa-caret-down');
    $(this).siblings().find('i').removeClass('fa-caret-down').addClass('fa-caret-up');
    $(this).find('ul').toggle();
    $(this).siblings().find('ul').hide();
  })
  $('.title .area').click(function(){
    $(this).find('i').toggleClass('fa-caret-up').toggleClass('fa-caret-down');
    $(this).siblings().find('i').removeClass('fa-caret-down').addClass('fa-caret-up');
    $(this).find('ul').toggle().siblings().find('ul').hide();
    $(this).siblings().find('ul').hide();
  })
  $('.title .allPrice').click(function(){
    $(this).find('i').toggleClass('fa-caret-up').toggleClass('fa-caret-down');
    $(this).siblings().find('i').removeClass('fa-caret-down').addClass('fa-caret-up');
    $(this).find('ul').toggle().siblings().find('ul').hide();
    $(this).siblings().find('ul').hide();
  })

//点击渲染页面
  $('.product .title').on('click','.shop ul li',function(){
    shopid = $(this).data('id');
    var txt = $(this).text();
    $(this).parent().siblings().find('em').text(txt);
    render(shopid,areaid);
  })
  $('.product .title').on('click','.area ul li',function(){
    areaid = $(this).data('id');
    var txt = $(this).text().substr(0,2)
    $(this).parent().siblings().find('em').text(txt);
    render(shopid,areaid);
  })
})
