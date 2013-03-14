var app_py={};

$(function(){
  var tdata={};
  tdata['sitename']='查拼音';
  tdata['nav_items']={'#home':'Home','#about':'About','#contact':'意见反馈'};
  tdata['loginfo']="请先<a href='#login'>登录</a>";
  set_top_nav(tdata);
  
  $.get('apps/app.py.html',function(htm){
    set_main_box(htm);
    laolin.fn.loadCss('py_css','apps/app.py.css');
  });
  document.title='查拼音';
});
      
  function get_py(id_q) {
    url="http://api.laolin.com/rest/api/pinyin/list/"+
    'js=1&func=set_info_box_main'+
    '&q='+$('#'+id_q).attr('value');
    py_waiting(6);
    laolin.fn.loadJs('pyscript',url);//会调用 set_info_box_main(htm)
    return false;
  }
  
  //这个函数是给 ajax文件生成js代码回调用的
  function set_info_box_main(str) {
    $('#info-box-main').html(str);
     py_done();
  }
  
  function py_waiting(n) {
    if(n<=1) {
      set_info_box_main('[error]网络超时。');
      return;
    }
    n--;
    $("#py_btn").attr('value','查询中('+n+')').attr('disabled',true);
    laolin.data.py_timeid=setTimeout("py_waiting("+n+")",1000);

  }
  function py_done() {
    $("#py_btn").attr('value','查询').attr('disabled',false);
    clearTimeout(laolin.data.py_timeid);
  }