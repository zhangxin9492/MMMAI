/**
 * Created by zhangxin on 2018/10/13.
 */
$(function(){
  var productid = getUrl('productId');
  console.log(productid);
  $.ajax({
    url:'http://127.0.0.1:9090/api/getmoneyctrlproduct',
    type:'get',
    data:{
      productid:productid
    },
    dataType:'json',
    success:function(info){
      console.log(info);
      var str = template('moneyProductTmp',info);
      $('.product').html(str);
    }
  })
})
