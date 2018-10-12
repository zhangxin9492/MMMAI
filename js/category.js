/**
 * Created by zhangxin on 2018/10/12.
 */
$(function(){
  $.ajax({
    url:'http://127.0.0.1:9090/api/getcategorytitle',
    type:'get',
    dataType:'json',
    success:function(info){
      console.log(info);
      var str = template('titleTmp',info);
      $('.category').html(str);
    }
  })

  $('.category').on('click','a.first',function(){
    var id = $(this).data('id');
    var that = this;
    $.ajax({
      url:'http://127.0.0.1:9090/api/getcategory',
      type:'get',
      data:{titleid:id},
      dataType:'json',
      success:function(info){
        console.log(info);
        var str = template('productTmp',info);
        $(that).siblings().html(str).toggle();
      }
    })
  })
})
