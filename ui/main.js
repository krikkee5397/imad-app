console.log('Loaded!');
var element=document.getElementById('main');
element.innerHTML='ricky';
var img=document.getElementById('madi');
var marginLeft=0;
function moveRight() {
    marginLeft=marginLeft + 1;
    img.style.marginLeft=marginLeft +'px';
}
img.onclick=function() {
    var interval =setInterval(moveRight,10);
};
var button=document.getElementById('Counter');
button.onclick=function(){
  var request=new XMLHttpRequest();
  request.onreadystatechange=function(){
      if(request.readystate==XMLHttpRequest.DONE)
      {
          if(request.status==200)
          {
              var counter=request.responseText;
              var span=document.getElementById('count');
              span.innerHTML=Counter.toString();
              
          }
      }
  };
  
   request.open('GET','http://krikkee5397.imad.hasura.app-io/counter',true);
   request.send(null);
};
