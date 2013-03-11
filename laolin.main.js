var laolin={};
laolin.fn={};

/// laolin.fn
/// =========
  laolin.fn.init=function() {
      console.log(0);
    return true;
  };
  
  
  laolin.fn.template=function(to,tpl,data) {
      console.log(2);

    $(to).html( _.template($(tpl).html(),data));
  };
  
  
  laolin.fn.templateRest=function(to,tpl,url) {
    console.log(1);
    $.getJSON(url,function(data){
      
      laolin.fn.template(to,tpl,data);
    });
  };
  
  
  
  laolin.fn.getjs=function (id,url){
     oScript = document.getElementById(id);
     var head = document.getElementsByTagName("head").item(0);
     if (oScript) {
        head.removeChild(oScript);
     }
     oScript = document.createElement("script");
     oScript.setAttribute("src", url);
     oScript.setAttribute("id",id);
     oScript.setAttribute("type","text/javascript");
     oScript.setAttribute("language","javascript");
     head.appendChild(oScript);
     return oScript;
}
/// ========
  
$(function(){
  laolin.data={};//放一些变量的地方
  
});