console.log('Loaded!');
var element=document.getElementById('main');
element.innerHTML='ricky;'
var img=document.getElementById('madi');
var marginleft=0;
function moveright() {
    marginleft=marginleft + 5;
    img.style.marginleft=marginleft +'px';
}
img.onclick=function() {
    var interval =setInterval(moveright,10);
};