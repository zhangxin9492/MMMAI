/**
 * Created by zhangxin on 2018/10/14.
 */
$(function(){
  $.ajax({
    url:'http://127.0.0.1:9090/api/getbrandtitle',
    type:'get',
    dataType:'json',
    success:function(info){
      console.log(info);
      var str = template('contentTmp',info);
      $('.product .content').html(str);
    }
  })
})
