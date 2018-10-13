/**
 * Created by zhangxin on 2018/10/13.
 */
$(function(){
  var productId = getUrl('productId');
  console.log(productId);
  $.ajax({
    url:'http://127.0.0.1:9090/api/getdiscountproduct',
    type:'get',
    data:{
      productid:productId
    },
    success:function(info){
      console.log(info.result[0].productComment);

      var str = template('moneyProductTmp',info);
      $('.product').html(str);
    }
  })
})
