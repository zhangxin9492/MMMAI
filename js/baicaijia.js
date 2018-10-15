/**
 * Created by zhangxin on 2018/10/13.
 */
$(function(){
  $.ajax({
    url:'http://127.0.0.1:9090/api/getbaicaijiatitle',
    type:'get',
    dataType:'json',
    success:function(info){
      var str = template('titleTmp',info);
      $('.product .title').html(str);
      //改变ul的高度
      function resize() {
        var $li = $('.title ul li');
        var width = 0;
        $li.each(function(i,v){
          width += Math.ceil($(v).outerWidth(true));
        })
        $('.title ul').width(width);
      }
      resize();
      window.onresize = function(){
        //当屏幕宽度发生改变时再次改变ul的宽度
        resize();
      }
    }
  })

//  区域滚动初始化
  mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    indicators: false,//是否显示滚动条
    scrollX: true,
  });


//  渲染页面
  function render(id){
    $.ajax({
      url:'http://127.0.0.1:9090/api/getbaicaijiaproduct',
      type:'get',
      data:{titleid:id || 0},
      dataType:'json',
      success:function(info){
        console.log(info);
        var str = template('contentTmp',info);
        $('.product .content').html(str);
      }
    })
  }
  render();

  //  注册标题点击事件渲染页面
  $('.product').on('click','.title a',function(){
    var id = $(this).data('id');
    $(this).parent().addClass('current').siblings().removeClass('current');
    render(id);
  })
})
