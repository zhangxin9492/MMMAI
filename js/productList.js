/**
 * Created by zhangxin on 2018/10/12.
 */
$(function(){
  var url = decodeURI(location.href);
  console.log(url);
  var categoryId = getUrl('categoryid');
  var category = decodeURI(getUrl('category'));
  function render(page){
    $.ajax({
      url:'http://127.0.0.1:9090/api/getproductlist',
      type:'get',
      data:{
        categoryid:categoryId,
        pageid:page||1,
      },
      dataType:'json',
      success:function(info){
        info.category = category;
        var allPage = Math.ceil(info.totalCount/info.pagesize);
        info.allPage = allPage;
        info.location = url;
        console.log(info);
        var str = template('listTmp',info);
        $('.product').html(str);
      }
    })
  }
  render()
  $('#selected').on('change',function(){
    console.log(1);
  })
})
