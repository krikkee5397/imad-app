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
var button=document.getElementBy('counter');
button.onclick=function(){
  Counter=Counter+1;
  var span=document.getElementBy('Count');
  span.innerHTML=Counter.toString();
};