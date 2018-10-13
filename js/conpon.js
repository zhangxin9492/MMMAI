/**
 * Created by zhangxin on 2018/10/13.
 */
$(function(){
  $.ajax({
    url:'http://127.0.0.1:9090/api/getcoupon',
    type:'get',
    dataType:'json',
    success:function(info){
      console.log(info);
      var str = template('titleTmp',info);
      $('.product').html(str);
    }
  })
})
