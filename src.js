var i=1,r=Math.floor(Math.random()*7)+1;

    function change_image_music(){
      //image
      if(i==1){
        document.getElementById('image').src="button/2.png";
        i=2;
       }
      else{
         document.getElementById('image').src="button/1.png";
         i=1;
       }
       //image
       //music
       var gen;
       gen=Math.floor(Math.random()*13)+1;
       if(gen==1) document.getElementById('music').src="music/1.mp3";
       else if(gen==2) document.getElementById('music').src="music/2.mp3";
       else if(gen==3) document.getElementById('music').src="music/3.mp3";
       else if(gen==4) document.getElementById('music').src="music/4.mp3";
       else if(gen==5) document.getElementById('music').src="music/5.mp3";
       else if(gen==6) document.getElementById('music').src="music/6.mp3";
       else if(gen==7) document.getElementById('music').src="music/7.mp3";
       else if(gen==8) document.getElementById('music').src="music/8.mp3";
       else if(gen==9) document.getElementById('music').src="music/9.mp3";
       else if(gen==10) document.getElementById('music').src="music/10.mp3";
       else if(gen==11) document.getElementById('music').src="music/11.mp3";
       else if(gen==12) document.getElementById('music').src="music/12.mp3";
       else if(gen==13) document.getElementById('music').src="music/13.mp3";
       //alert(gen);
       //music
    }
    //quote
    if(r==1){
      document.getElementById('quote').innerHTML="One good thing about music, When it hits you, you feel no pain.";
      document.getElementById('name').innerHTML="-Bob Marley";
    }
    else if(r==2){
      document.getElementById('quote').innerHTML="Music is probably the only real magic I have encountered in my life. There's not some trick involved with it. It's pure and it's real. It moves, it heals, it communicates and does all these incredible things.";
      document.getElementById('name').innerHTML="-Tom Petty";
    }
    else if(r==3){
      document.getElementById('quote').innerHTML="Where words fail, music speaks.";
      document.getElementById('name').innerHTML="-Hans Christian Andersen";
    }
    else if(r==4){
      document.getElementById('quote').innerHTML="Music expresses that which cannot be said and on which it is impossible to be silent.";
      document.getElementById('name').innerHTML="-Victor Hugo";
    }
    else if(r==5){
      document.getElementById('quote').innerHTML="Without music, life would be a mistake.";
      document.getElementById('name').innerHTML="-Friedrich Nietzsche";
    }
    else if(r==6){
      document.getElementById('quote').innerHTML="Music is the strongest form of magic.";
      document.getElementById('name').innerHTML="-Marilyn Manson";
    }
    else if(r==7){
      document.getElementById('quote').innerHTML="Music can change the world because it can change people.";
      document.getElementById('name').innerHTML="-Bono";
    }
    //quote

