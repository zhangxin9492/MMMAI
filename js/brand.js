/**
 * Created by zhangxin on 2018/10/14.
 */
$(function(){
  var id = getUrl('brandtitleid')
  //渲染好品牌
  $.ajax({
    url:'http://127.0.0.1:9090/api/getbrand',
    data:{
      brandtitleid:id
    },
    type:'get',
    dataType:'json',
    success:function(info){
      var id = info.result[0].categoryId;
      //根据分类id获取分类名称
      $.ajax({
        url:'http://127.0.0.1:9090/api/getcategorybyid',
        type:'get',
        data:{
          categoryid:id,
        },
        success:function(data) {
          var category = data.result[0].category;
          info.category = category;
          var str = template('praiseTmp',info);
          $('.product .praise').html(str);
        }
      })
    }
  })
//  渲染品牌销量排行
  $.ajax({
    url:'http://127.0.0.1:9090/api/getbrandproductlist',
    type:'get',
    data:{
      brandtitleid:id,
      pagesize:4,
    },
    dataType:'json',
    success:function(info){
      var str = template('volumeTmp',info);
      $('.product .volume').html(str);
      var img = info.result[0].productImg;
      var productName = info.result[0].productName;
      var productid = info.result[0].productId;
      //根据品牌排行的第一个产品的id获取评论
      $.ajax({
        url:'http://127.0.0.1:9090/api/getproductcom',
        data:{productid:productid},
        dataType:'json',
        success:function(data){
          data.img = img;
          data.productName = productName;
          var str = template('comentTmp',data);
          $('.product .coments').html(str);
        }
      })
    }
  })


})
