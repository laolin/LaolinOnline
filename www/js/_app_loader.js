$(function(){
  app=laolin.fn.getParameterByName('app');
  if( app.length ==0) {
    app='py';//默认
  }
  _load_app(app);
});
function _load_app(a) {
  laolin.fn.getjs('app-1','apps/app.'+a+'.js');
}