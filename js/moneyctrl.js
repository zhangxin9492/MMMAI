/**
 * Created by zhangxin on 2018/10/13.
 */
$(function(){
  var page = 1;
  function render(page){
    $.ajax({
      url:'http://127.0.0.1:9090/api/getmoneyctrl',
      type:'get',
      dataType:'json',
      data:{
        pageid:page||1
      },
      success:function(info){
        console.log(info);
        var allPage = Math.ceil(info.totalCount/info.pagesize);
        info.allPage = allPage;
        info.page = page;
        console.log(allPage)
        var str = template('moneyctrlTmp',info);
        $('.product').html(str);
      }
    })
  }
  render(page);
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
})
