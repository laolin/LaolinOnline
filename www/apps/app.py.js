var app_py={};

$(function(){
  var tdata={};
  tdata['sitename']='查拼音';
  tdata['nav_items']={'#home':'Home','#about':'About','#contact':'意见反馈'};
  tdata['loginfo']="请先<a href='#login'>登录</a>";
  set_top_nav(tdata);
  
  $.get('apps/app.py.html',function(htm){
    set_main_box(htm);
  });
  document.title='查拼音';
});
      
  function get_py(id_q) {
    url="http://api.laolin.com/rest/api/pinyin/list/"+
    'js=1&func=set_info_box_main'+
    '&q='+$('#'+id_q).attr('value');
    laolin.fn.loadJs('pyscript',url);
    return false;
  }
  
  //这个函数是给跨域ajax文件生成js代码调用的
  function set_info_box_main(str) {
    $('#info-box-main').html(str);
  }