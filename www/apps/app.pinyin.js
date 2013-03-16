
$(function(){
  var app={};
  
  app.name='pinyin';
  app.disc='查拼音';
  app.loginfo="请先<a href='#login'>登录</a>";
  app.path='apps/pinyin/';
  app.items={'':{disc:'首页',html:'index.html',css:'',js:'index.js'},
      'about':{disc:'说明',html:'about.html',css:'',js:''},
      'contact':{disc:'意见反馈',html:'contact.html',css:'',js:''}
      };
  app.css='app.pinyin.css';
  app.js='';
      
  initApp(app);
});
