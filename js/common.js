/**
 * Created by zhangxin on 2018/10/12.
 */
//  返回顶部功能
$('.login .top').click(function(){
  $('html,body').animate({
    scrollTop:0
  })
})

//封装获取URL参数公共函数
function getUrl(key){
  var str = location.search;
  var str = str.slice(1);
  var arr = str.split('&');
  var obj = {};
  arr.forEach(function(v,i){
    var key = v.split('=')[0];
    var val = v.split('=')[1];
    obj[key] = val;
  })
  return obj[key];
}
