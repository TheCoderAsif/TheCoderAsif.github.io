var d,x=0,c,s=0,r=0,y=0,z=0;//z=0=metal slash-z=1=boom-blast
//my attacks
function laser(){
  if(x==0){
  if(document.getElementById('pb1').value>0&&document.getElementById('pb2').value>0){
    //laser
    document.getElementById('status1').innerHTML="-";
    document.getElementById('status2').innerHTML="-";
      document.getElementById('image').src="r1-r2/animation/r1-m1.gif";
      document.getElementById('audio').src="sounds/laser2.mp3"
      if(s==0){
        d=Math.floor(Math.random()*20);
        document.getElementById('pb1').value=document.getElementById('pb1').value-d;
        document.getElementById('status1').innerHTML="Mystesic used 'Laser'"
        document.getElementById('status2').innerHTML="Darsypro lost some energy due to 'Laser'";
      }
      else{
        d=Math.floor(Math.random()*20);
        document.getElementById('pb1').value=document.getElementById('pb1').value-(d-s);
        document.getElementById('status1').innerHTML="Mystesic used 'Laser'. But, it is weak.";
        document.getElementById('status2').innerHTML="Darsypro lost low energy due to 'Laser'";
        s=0;
      }
      x=1;
      }
      else{
        if(document.getElementById('pb1').value==0){
          alert("Darspyro has lost the fight.");
          document.getElementById('status1').innerHTML="Mystesic has won.";
          document.getElementById('status2').innerHTML="Darspyro has lost";
        }
        if(document.getElementById('pb2').value==0){
          alert("Mystesic has lost the fight.");
          document.getElementById('status2').innerHTML="Darspyro has lost";
          document.getElementById('status1').innerHTML="Mystesic has won.";
        }
      }
    }
  }
  function shield(){
    if(x==0){
    if(document.getElementById('pb1').value>0&&document.getElementById('pb2').value>0){
      document.getElementById('status1').innerHTML="-";
      document.getElementById('status2').innerHTML="-";
        document.getElementById('image').src="r1-r2/animation/r1-m2.gif";
        document.getElementById('audio').src="sounds/reflect.mp3";
          d=Math.floor(Math.random()*15);
          document.getElementById('pb2').value=document.getElementById('pb2').value+d;
          document.getElementById('pb1').value=document.getElementById('pb1').value-d;
          document.getElementById('status1').innerHTML="Mystesic used 'Gaining Shield' and gained some energy";
          document.getElementById('status2').innerHTML="Darsypro lost some energy due to 'Ganing Shield'";
          x=1;
        }
        else{
          if(document.getElementById('pb1').value==0){
            alert("Darspyro has lost the fight.");
            document.getElementById('status1').innerHTML="Mystesic has won.";
            document.getElementById('status2').innerHTML="Darspyro has lost";
          }
          if(document.getElementById('pb2').value==0){
            alert("Mystesic has lost the fight.");
            document.getElementById('status2').innerHTML="Darspyro has lost";
            document.getElementById('status1').innerHTML="Mystesic has won.";
          }
        }
      }
  }
  function reflect(){
    if(x==0){
    if(document.getElementById('pb1').value>0&&document.getElementById('pb2').value>0){
      document.getElementById('status1').innerHTML="-";
      document.getElementById('status2').innerHTML="-";
      document.getElementById('image').src="r1-r2/animation/r1-m3.gif";
      document.getElementById('audio').src="sounds/reflect.mp3";
          document.getElementById('pb1').value=document.getElementById('pb1').value-(y/2);
          document.getElementById('status1').innerHTML="Mystesic used 'Reflect'";
          if(z==0) document.getElementById('status2').innerHTML="Darspyto lost some energy due to own 'Metal-Slash'";
          if(z==1) document.getElementById('status2').innerHTML="Darspyto lost some energy due to own 'Boom-Blast'";
          if(z==2) document.getElementById('status2').innerHTML="-";
          x=1;
        }
        else{
          if(document.getElementById('pb1').value==0){
            alert("Darspyro has lost the fight.");
            document.getElementById('status1').innerHTML="Mystesic has won.";
            document.getElementById('status2').innerHTML="Darspyro has lost";
          }
          if(document.getElementById('pb2').value==0){
            alert("Mystesic has lost the fight.");
            document.getElementById('status2').innerHTML="Darspyro has lost";
            document.getElementById('status1').innerHTML="Mystesic has won.";
          }
        }
      }
  }
  function dark_shock(){
    if(x==0){
    if(document.getElementById('pb1').value>0&&document.getElementById('pb2').value>0){
      //laser
      document.getElementById('status1').innerHTML="-";
      document.getElementById('status2').innerHTML="-";
        document.getElementById('image').src="r1-r2/animation/r1-m4.gif";
        document.getElementById('audio').src="sounds/dark.mp3";
        if(s==0){
          d=Math.floor(Math.random()*35);
          document.getElementById('pb1').value=document.getElementById('pb1').value-d;
          document.getElementById('status1').innerHTML="Mystesic used special 'Dark-Shock'"
          document.getElementById('status2').innerHTML="Darsypro lost much energy due to 'Dark-Shock'";
        }
        else{
          d=Math.floor(Math.random()*35);
          document.getElementById('pb1').value=document.getElementById('pb1').value-d;
          document.getElementById('status1').innerHTML="Mystesic used special 'Dark-Shock'. But, it is weak.";
          document.getElementById('status2').innerHTML="Darsypro lost low energy due to 'Dark-shock'";
          s=0;
        }
        x=1;
        }
        else{
          if(document.getElementById('pb1').value==0){
            alert("Darspyro has lost the fight.");
            document.getElementById('status1').innerHTML="Mystesic has won.";
            document.getElementById('status2').innerHTML="Darspyro has lost";
          }
          if(document.getElementById('pb2').value==0){
            alert("Mystesic has lost the fight.");
            document.getElementById('status2').innerHTML="Darspyro has lost";
            document.getElementById('status1').innerHTML="Mystesic has won.";
          }
        }
      }
    }
  //my attacks
    //laser
    function opp_att(){
    if(x==1){
    if(document.getElementById('pb2').value>0&&document.getElementById('pb1').value>0){
      //boom blast and metal slash
      document.getElementById('status1').innerHTML="-";
      document.getElementById('status2').innerHTML="-";
      if(document.getElementById('pb1').value>65){
        c=Math.floor(Math.random()*2)+1;
        //use metal slash
        if(c==1){
          document.getElementById('image').src="r1-r2/animation/r2-m1.gif";
          document.getElementById('audio').src="sounds/metal.mp3"
          d=Math.floor(Math.random()*20);
          document.getElementById('pb2').value=document.getElementById('pb2').value-d;
          document.getElementById('status1').innerHTML="Mystesic had some damage due to 'Metal-Slash'";
          document.getElementById('status2').innerHTML="Darspyro used 'Metal-Slash'";
          y=d;
          z=0;
        }
        //change th
        if(c==2){
          document.getElementById('image').src="r1-r2/animation/r2-m4.gif";
          document.getElementById('audio').src="sounds/blast.mp3"
          d=Math.floor(Math.random()*50);
          document.getElementById('pb2').value=document.getElementById('pb2').value-d;
          document.getElementById('status1').innerHTML="Mystesic had much damage due to special 'Boom-Blast'";
          document.getElementById('status2').innerHTML="Darspyro used special 'Boom-Blast'";
          y=d;
          z=1;
        }
        //use boom-blast
      }
      //boom blast and metal slash
      //shield and recharge
      else{
        c=Math.floor(Math.random()*2)+1;
        //recharge
        if(c==1){
          document.getElementById('image').src="r1-r2/animation/r2-m3.gif";
          document.getElementById('audio').src="sounds/gain.mp3";
          d=Math.floor(Math.random()*40);
          document.getElementById('pb1').value=document.getElementById('pb1').value+d;
          document.getElementById('status2').innerHTML="Darspyro gained some energy using 'Recharge'";
          y=0;
          z=2;
        }
        if(c==2){
        document.getElementById('image').src="r1-r2/animation/r2-m2.gif";
        document.getElementById('audio').src="sounds/shield2.mp3";
        s=Math.floor(Math.random()*40)+10;
        document.getElementById('status2').innerHTML="Darspyro used 'Shield'";
        y=0;
        z=2;
        }
      }
      //shield and recharge
    }
    else{
      if(document.getElementById('pb1').value==0){
        alert("Darspyro has lost the fight.");
        document.getElementById('status1').innerHTML="Mystesic has won.";
        document.getElementById('status2').innerHTML="Darspyro has lost";
      }
      if(document.getElementById('pb2').value==0){
        alert("Mystesic has lost the fight.");
        document.getElementById('status2').innerHTML="Darspyro has lost";
        document.getElementById('status1').innerHTML="Mystesic has won.";
      }
    }
    }
    x=0;
    }
