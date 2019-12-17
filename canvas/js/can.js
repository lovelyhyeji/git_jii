// can.js
// [0] 붙여야 console에서 html코드로 나옴
// const myC = $('.myC')[0];
// const myC = document.getElementsByClassName('myC')[0];

// ctx.fillStyle = '#ac4';
// ctx.fillRect(0,0,100,100);

// ctx.fillStyle = '#7c4';
// ctx.fillRect(50,50,200,200);
//-------------------------------------------------

// 원을 여러개 동시에 ------------------------------
const myCan = document.querySelectorAll('.my_can');
for(let i=0; i<myCan.length;i++){
  myCan[i].innerHTML =
  '<canvas width="400" height="400" class="myC"></canvas>';
  let myC = document.querySelectorAll('.myC')[i];
  myC.style = 'transform:rotate(-90deg)';
}

// [].Each(function(index, date){})
// const resultArr = [90, 80 50]
const resultArr = [{sj:'photoshop',   sc:75}, // resultArr[index].sc
                   {sj:'illustrator', sc:80},
                   {sj:'indesign',    sc:30}];

document.querySelectorAll('.myC').forEach(function(data, index){
  let ctx = data.getContext('2d');


// 원 그리는 법 % ----------------------------------
const myR = function(r){
  return Math.PI / 180 * (3.6 * r);
};
const progressArc = function(r){
  ctx.arc(200, 200, 100, 0, myR(r));
  // X축, Y축, 반지름, 반시계방향(오른쪽중간)기준으로 선을 어떻게 그릴지, 원주율3.14
};

// 원의 선을 움직이게 하는 법 or 멈추는 법 ----------
let j = 0, go;
const graphGo = function(s){
  go = setInterval(function(){
    if(j < s){
        ctx.beginPath();
        ctx.lineWidth = 50;
        ctx.strokeStyle = '#171276';
        progressArc(++j);
        ctx.stroke();
      }else{
        clearInterval();
      }
    }, 30);
};
graphGo( resultArr[index].sc );

});