
$(function(){
  var app;
  laolin.router.appConfig={};
  //===========================================
  app={};
  app.name='!index';
  app.path='apps/!index/';
  app.disc='首页';
  //app.icon='_app.png';
  app.bg='#fff';
  app.css='_app.css';
  app.js='';
  //app.loginfo="请先<a href='#login'>登录</a>";
  app.items={'':{disc:app.disc,html:'index.html',css:'',js:''},
      'about':{disc:'关于本APP',html:'about.html',css:'',js:''},
      'about-laolin':{disc:'关于作者',html:'about-laolin.html',css:'',js:''},
      'contact':{disc:'意见反馈',html:'contact.html',css:'',js:''}
      };
    
  regApp(app);
  //===========================================
  app={};
  app.name='!pinyin';
  app.path='apps/!pinyin/';
  app.disc='查拼音';
  //app.icon='_app.png';
  app.bg='#fd0';
  app.css='_app.css';
  app.js='';
  app.items={'':{disc:app.disc,html:'index.html',css:'',js:'index.js'},
      'about':{disc:'说明',html:'about.html',css:'',js:''}
      };
  regApp(app);
  //===========================================
  app={};
  app.name='!pgtest';
  app.path='apps/!pgtest/';
  app.disc='测试pg功能';
  //app.icon='_app.png';
  app.bg='#0df';
  app.css='_app.css';
  app.js='';
  app.items={'':{disc:app.disc,html:'index.html',css:'',js:'index.js'}
        , 'camera':{disc:'相机',html:'camera.html',css:'',js:''}
        , 'accelerometer':{disc:'重力感应',html:'accelerometer.html',css:'',js:''}
      };
  regApp(app);
  //===========================================
  app={};
  app.name='!gesture ';
  app.path='apps/!gesture/';
  app.disc='手势';
  //app.icon='_app.png';
  app.bg='#d99';
  app.css='_app.css';
  app.js='';
  app.items={'':{disc:app.disc,html:'index.html',css:'',js:''}
      };
  regApp(app);
  //===========================================
  app={};
  app.name='!goto';
  app.path='apps/!goto/';
  app.disc='跳转到..';
  //app.icon='_app.png';
  app.bg='#ddd';
  app.css='_app.css';
  app.js='';
  app.items={'':{disc:app.disc,html:'index.html',css:'',js:''}
      };
  regApp(app);
  //===========================================
  
  
  
  //MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
  laolin.router.appConfig.siteName='老林在线';
  laolin.router.appConfig.appDefault= '!index';//默认app
  console.log('router start.');
  laolin.router.start();
  
  if(typeof(laolin.router.appConfig.activeApp)=='undefined') {
    console.log('no activeApp, activing app: '+laolin.router.appConfig.appDefault);
    laolin.router.app.navigate(laolin.router.appConfig.appDefault+'/',{trigger: true});
  }

});

function activeApp(appname) {
  console.log('activeApp: '+appname);
  app=laolin.router.appConfig.allApps[appname];
  var tdata={};
  tdata['sitename']=laolin.router.appConfig.siteName;
  tdata['sitelink']='#'+laolin.router.appConfig.appDefault+'/';
  
  tdata['appname']=app.disc;
  tdata['nav_items']={};
  for(p in app.items) {
    tdata['nav_items']['#'+app.name+'/'+p]=app.items[p]['disc'];
  }
  tdata['loginfo']=app.loginfo||'';
  set_top_nav(tdata);
  laolin.router.appConfig.activeApp=appname;
  
  if(app.css)laolin.fn.loadCss('app_css_'+app.name,app.path+app.css);
  if(app.js)laolin.fn.loadJs('app_js_'+app.name,app.path+app.js);
  
}  
function regApp(app) {
  
  if(!laolin.router.appConfig.hasOwnProperty('allApps')){ 
    console.log('start init allApps at app: '+app.name);
    laolin.router.appConfig.allApps={};
  }
  console.log('regApp: '+app.name);
  laolin.router.appConfig.allApps[app.name]=app;
  laolin.router.add(app.name,function (item) {
    if(typeof(item)=='undefined')item='';
    
    console.log('Got Router at activeApp='+app.name+', item='+item);
    if(laolin.router.appConfig.activeApp!=app.name){
      laolin.router.appConfig.activeApp=app.name;
      activeApp(app.name);
    }
    laolin.router.activeItem=item;
    iObj=app.items.hasOwnProperty(item)?app.items[item]:app.items[''];
    $.get(app.path+iObj.html,function(htm){
      set_main_box(htm);
      if(iObj.css)laolin.fn.loadCss('app_item_css_'+app.name+item,app.path+iObj.css);
      if(iObj.js)laolin.fn.loadJs('app_item_css_'+app.name+item,app.path+iObj.js);
      document.title=iObj.disc+'-'+app.disc;
      //hilight nav Item: 
      var hash=window.location.hash;
      $('.navbar .nav a').parent().removeClass('active');//全变灰
      $('.navbar .nav a[href="'+hash+'"]').parent().addClass('active');//与当前URL相符的亮显
    });
  });
  
}
