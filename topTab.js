var width = document.body.clientWidth;
console.log(width);
var img = document.getElementsByClassName('imgData');
console.log(img);
for( x=0, y=0; y<img.length;y++){
    console.log(img[y]);
    img[y].width=width;

}
// 当窗口大小发生变化时调用
window.onresize=function(){
    var width = document.body.clientWidth;
    for( x=0, y=0; y<img.length;y++){
        console.log(img[y]);
        img[y].width=width;
    
    }
}
//当鼠标位置发生变化
var bodyDiv = document.getElementById('bodyMove');
console.log(bodyDiv);
bodyDiv.addEventListener('mouseover',onmouseover,false);
bodyDiv.addEventListener('mouseout',onmouseout,false);
bodyDiv.addEventListener('mousemove',onmousemove,false);
var sign=0;
function onmouseover (e){
    sign = 1;
    console.log(e.offsetX);

}
function onmouseout (){
    sign = 0;
    console.log(sign);

}
var imgOpacity = document.getElementsByClassName('fixMove');
function onmousemove(e){
    console.log(sign)
    // console.log(e.offsetX/document.body.clientWidth);
    console.log(img[0].style.opacity);
    for( x=0, y=0; y<img.length;y++){
        console.log(img[y]);
        img[y].style.opacity=e.offsetX/document.body.clientWidth+0.1*y;
        console.log(img[y].style.opacity)
    }
    // document.body.clientWidth
} 