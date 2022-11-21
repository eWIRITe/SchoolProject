var p=1; 
var i=0;
function Rand(min, max)
{
  var k = Math.floor(Math.random() * max)
  if (k <= min)
  {
    k = min+1; 
  }
  return k;
}

function init(){
  sec = 0;
  setInterval(tric, 1000);
}

function tric() {
  sec++;
  document.getElementById("timer") = "Your time: " + sec + "sec";
}

function t() {
  counter()
  var s = document.getElementById("obj");
  if (p==1) {
    s.style.top = Rand(100, 800);
    s.style.left= Rand(100, 800);
    s.style.background = 'blue';
    p=2;
  }else {
    s.style.top = Rand(100, 800);
    s.style.left= Rand(100, 800);
    s.style.background = 'red';
    p=1;
  }
}

function counter(){
  i++;
  var o = document.getElementById("count");
  if (i >= 100){
    o.innerHTML="You are WIN!!!";
  }else{o.innerHTML=i+"/100"}
}