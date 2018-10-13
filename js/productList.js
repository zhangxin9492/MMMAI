/**
 * Created by zhangxin on 2018/10/12.
 */
  var allPage;
  var url = decodeURI(location.href);
  var page = 1;
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
        allPage = Math.ceil(info.totalCount/info.pagesize);
        info.allPage = allPage;
        info.location = url;
        info.page = page || 1;
        console.log(info);
        var str = template('listTmp',info);
        $('.product').html(str);
      }
    })
  }
  render()
 $('.product').on('change','#selection',function(){
   page = $(this).val();
   render(page);
 })

$('.product').on('click','.before',function(){
  if (page <= 1) {
    return;
  }
  page--;
  render(page);
})
$('.product').on('click','.next',function(){
  page++;
  render(page);
})


