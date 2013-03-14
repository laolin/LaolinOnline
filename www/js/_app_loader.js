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