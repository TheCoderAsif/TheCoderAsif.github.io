//opponent attack
var d,x=0,c;
function opp_att(){
if(x==1){
if(document.getElementById('pb2').value>0){
  //boom blast and metal slash
  document.getElementById('status1').innerHTML="-";
  document.getElementById('status2').innerHTML="-";
  if(document.getElementById('pb1').value>50){
    c=Math.floor(Math.random()*2)+1;
    //use metal slash
    if(c==1){
      document.getElementById('image').src="r1-r2/animation/r2-m1.gif";
      d=Math.floor(Math.random()*15);
      document.getElementById('pb2').value=document.getElementById('pb2').value-d;
      document.getElementById('status1').innerHTML="Mystesic had some damage due to 'Metal-Slash'";
      document.getElementById('status2').innerHTML="Darspyro used 'Metal-Slash'";
    }
    if(c==2){
      document.getElementById('image').src="r1-r2/animation/r2-m1.gif";
      d=Math.floor(Math.random()*15);
      document.getElementById('pb2').value=document.getElementById('pb2').value-d;
      document.getElementById('status1').innerHTML="Mystesic had some damage due to 'Metal-Slash'";
      document.getElementById('status2').innerHTML="Darspyro used 'Metal-Slash'";
    }
    //use boom-blast
  }
  //boom blast and metal slash
  //shield and recharge
  else{

  }
  //shield and recharge
}
else{
  //add Mystesic has lost
}
}
x=0;
}
