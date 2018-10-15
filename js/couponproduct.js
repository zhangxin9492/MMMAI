/**
 * Created by zhangxin on 2018/10/13.
 */
$(function(){
  var id = getUrl('couponid');
  $.ajax({
    url:'http://127.0.0.1:9090/api/getcouponproduct',
    type:'get',
    data:{
      couponid:id
    },
    dataType:'json',
    success:function(info){
      var str = template('contentTmp',info);
      var slideStr = template('slideTmp',info);
      $('.product .content').html(str);
      $('.madel').html(slideStr);
      //点击显示隐藏
      $('.content').on('click','a',function(e){
        e.preventDefault();
        var id = $(this).data('id');
        $('.madel').show();
        //  轮播图初始化   注:初始化需要在页面结构加载完成之后在进行初始化
        var mySwiper = new Swiper ('.swiper-container', {
          autoplay: false,
          loop: false, // 循环模式选项
          // 如果需要前进后退按钮
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        })
        //轮播图定位到指定位置
        mySwiper.slideTo(id);
      })
    }
  })




})
