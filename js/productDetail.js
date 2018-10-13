/**
 * Created by zhangxin on 2018/10/12.
 */
$(function(){
  var brandId = getUrl('brandId');
  var category = decodeURI(getUrl('category'));
  var url = decodeURI(location.search);
  var index = url.indexOf('location');
  var locationurl = url.substr(index+9);
  $.ajax({
    url:'http://127.0.0.1:9090/api/getproduct',
    type:'get',
    data:{
      productid:brandId
    },
    dataType:'json',
    success:function(info){
      var str = info.result[0].productName;
      str = str.split(' ')[0];
      info.locationurl = locationurl;
      info.category = category;
      info.brand = str;
      var str = template('detailTmp',info);
      $('.productDetail').html(str);
    }
  })

//  评论
  $.ajax({
    url:'http://127.0.0.1:9090/api/getproductcom',
    type:'get',
    data:{
      productid:brandId
    },
    dataType:'json',
    success:function(info){
      console.log(info);
      var str = template('commentTmp',info);
      $('.comment').html(str);
    }
  })
})
