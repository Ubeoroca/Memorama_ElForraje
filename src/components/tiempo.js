
var totalTime = 30;

function updateClock() {
  document.getElementById('tiempo').innerHTML = totalTime;
  if(totalTime==0){
    alert('Finalizo el tiempo');
  }else{
    totalTime-=1;
    setTimeout("updateClock()",1000);
  }
}

export default updateClock;