$(function(){
  app=laolin.fn.getParameterByName('app');
  if( app.length ==0) {
    app='py';//默认
  }
  _load_app(app);
});
function _load_app(a,id) {
  if(typeof(id)=='undefined')id='app-1';
  laolin.fn.loadJs(id,'apps/app.'+a+'.js');
}


function initApp(app) {
  var tdata={};
  tdata['sitename']=app.disc;
  tdata['nav_items']={};
  for(p in app.items) {
    tdata['nav_items']['#'+app.name+'/'+p]=app.items[p]['disc'];
  }
  tdata['loginfo']=app.loginfo;
  set_top_nav(tdata);
  delete laolin.router.activeApp;
  delete laolin.router.activeItem;
  laolin.router.add(app.name,function (item) {
    if(typeof(item)=='undefined')item='';
    
    console.log('activeApp='+app.name+', item='+item);
    laolin.router.activeApp=app.name;
    laolin.router.activeItem=item;
    iObj=app.items.hasOwnProperty(item)?app.items[item]:app.items[''];
    $.get(app.path+iObj.html,function(htm){
      set_main_box(htm);
      if(iObj.css)laolin.fn.loadCss('app_item_css_'+app.name+item,app.path+iObj.css);
      if(iObj.js)laolin.fn.loadJs('app_item_css_'+app.name+item,app.path+iObj.js);
      document.title=iObj.disc+'-'+app.disc;
    });
  });
  laolin.router.start();
  
  if(app.css)laolin.fn.loadCss('app_css_'+app.name,app.path+app.css);
  if(app.js)laolin.fn.loadJs('app_js_'+app.name,app.path+app.js);
  
  if(typeof(laolin.router.activeApp)=='undefined') {
    console.log('no activeApp, loading app: '+app.name);
    laolin.router.app.navigate(app.name+'/',{trigger: true});
  }
}