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
      console.log(info)
      info.src= $('.product li img').attr('src');
      var str = template('contentTmp',info);
      $('.product .content').html(str);
    }
  })
})
