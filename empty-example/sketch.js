var table;
function preload(){
  table = loadTable("data/CSVvalues.csv");
}

function setup() {
  createCanvas(1500,1500);
  //canvas.parent ("dataviz)");
  console.log( table.getRowCount());
  console.log( table.getColumnCount());
  noStroke();
  colorMode(RGB);
}


function draw() {
  background(255);
    noStroke();
if (mouseX>850){
      cursor("carCrash.png");
    }
    else{
    cursor("car.png");
    }
  var dataTipXY = drawLine();
  dataTip(dataTipXY[0], dataTipXY[1],dataTipXY[2]);
  commuteStory();
}

function drawLine(){
  var lastXax = 0;
  var lastYax = 0;
  var lastXay = 0;
  var lastYay = 0;
  var lastXaz = 0;
  var lastYaz = 0;
  var dataTipX = -1;
  var dataTipY = -1;
  var message = "";

  for(i = 0; i<table.getRowCount(); i+=2){
    var row = table.getRow(i);
    var ax = row.get (0); //accelerometer*reading
    var ay = row.get (1); //accelerometer*reading
    var az = ((row.get (2))*-1); //accelerometer*reading
    var timeStamp = i*200;
    var markerSize = 10;




    var y = map( az, 3, 15, 0, height);
    var x = map(timeStamp, 30, 200*table.getRowCount(), 0, width);

    fill(161,7,2,50);
    // stroke(0,168,107,50);

    if (az <= 5){
    fill (161,7,2, 50);
    ellipse(x,y,markerSize,markerSize);
  }
   else if (az > 5 && az<= 6){
  fill (161,7,2, 60);
  ellipse(x,y,markerSize+45,markerSize+45);
    }
    else if (az > 6 && az<= 7){
   fill (161,7,2, 70);
   ellipse(x,y,(markerSize+40),(markerSize+40));
     }

     else if (az > 7 && az<= 8){
    fill (161,7,2, 80);
    ellipse(x,y,(markerSize+35),(markerSize+35));
      }

      else if (az > 8 && az<= 9){
     fill (161,7,2, 90);
     ellipse(x,y,(markerSize+30),(markerSize+30));
       }

       else if (az > 9 && az<= 9.5){
      fill (161,7,2, 95);
      ellipse(x,y,(markerSize+25),(markerSize+25));
        }

    else if (az>9.5 && az<=9.6){
      fill (250,202,19,50);
        ellipse(x,y,(markerSize+25),(markerSize+25));
    }
    else if (az>9.6 && az<=9.7){
      fill (250,202,19,60);
        ellipse(x,y,(markerSize+25),(markerSize+25));
    }
    else if (az>9.7 && az<=9.8){
      fill (250,202,19,70);
        ellipse(x,y,(markerSize+25),(markerSize+25));
    }

    else if (az>9.8 && az<=9.9){
      fill (250,202,19,80);
        ellipse(x,y,(markerSize+25),(markerSize+25));
    }
    else if (az>9.9 && az<=10){
      fill (250,202,19,90);
      ellipse(x,y,(markerSize+25),(markerSize+25));
    }
    else if (az>10 && az<=10.5){
      fill (69,172,38,50);
        ellipse(x,y,(markerSize+25),(markerSize+25));
    }
    else if (az>10.5 && az<=11){
      fill (69,172,38,60);
        ellipse(x,y,(markerSize+25),(markerSize+25));
    }
    else if (az>11 && az<=11.5){
      fill (69,172,38,70);
        ellipse(x,y,(markerSize+30),(markerSize+30));
    }
    else if (az>11.5 && az<=12){
      fill (69,172,38,80);
        ellipse(x,y,(markerSize+35),(markerSize+35));
    }
    else if (az>12 && az<=12.5){
      fill (69,172,38,90);
        ellipse(x,y,(markerSize+40),(markerSize+40));
    }
    else if (az>11.5 && az<=12){
      fill (69,172,38,95);
        ellipse(x,y,(markerSize+35),(markerSize+35));
    }

    else if (az>12 && az<=13){
      fill (69,172,38,100);
        ellipse(x,y,(markerSize+40),(markerSize+40));
    }

    else if (az>13 && az<=14){
      fill (69,172,38,100);
        ellipse(x,y,(markerSize+45),(markerSize+45));
    }
    else if (az>14 && az<=15){
      fill (69,172,38,100);
        ellipse(x,y,(markerSize+50),(markerSize+50));
    }


    if (mouseX < x+markerSize/2 && mouseX > x -markerSize/2 && mouseY< y+markerSize/2 && mouseY > y- markerSize/2){
      dataTipX = x;
      dataTipY = y;
      console.log("hi!");
      message = "Acceleration " + az+ "m/s^2\n" + "Mins Into Commute " + round((((timeStamp-200)/1000)/60))
    }


    lastXaz = x;
    lastYaz = y;


  }

  return [dataTipX,dataTipY,message];
}



function dataTip(x,y, message){
  console.log(x);
  console.log(y);
  if( x > 0 && y > 0 ) {
    var boxWidth = 150;
    var boxHeight = 100;
    fill( 128, 128, 128, 32 );
    if( y < boxHeight ) {
      rect( x-boxWidth/2, y, boxWidth, boxHeight );
      textSize(18);
      stroke(0,0,0);
      fill(0,0,0);
      text( message, x-boxWidth/2, y, boxWidth, boxHeight );
    } else {
      rect( x-boxWidth/2, y-boxHeight, boxWidth, boxHeight );
      textSize(18);
      stroke(0,0,0);
      fill(0,0,0);
      text( message, x-boxWidth/2, y-boxHeight, boxWidth, boxHeight );
    }
  }
}
function commuteStory(){
  textSize(50);
  fill(0,171,255);

  if (mouseX > 0 && mouseX<= 100){
    text("8:15AM: Remi begins her commute to work, transmission begins.", 50,50,1450, 300);
  }

  else if (mouseX>100 && mouseX<=200){
    text("8:16AM: Remi is driving through her neighborhood, Olde Richmond. It's all stop and go, stop and go.", 50,50, 1450, 300);
  }
  else if (mouseX>200 && mouseX<=300){
    text("8:17AM: The worst part of the commute. Waiting at a light that has terrible timing.", 50,50, 1450, 300);
  }
  else if (mouseX>300 && mouseX<=450){
    text("8:20AM: Remi FINALLY made it onto the 95 on ramp!", 50,50, 1450, 300);
  }
  else if (mouseX>450 && mouseX<=600){
    text("8:21AM Cruising on 95, jamming out to some tunes", 50,50, 1450, 300);
  }
  else if (mouseX>600 && mouseX<=675){
    text("8:23AM: Waiting at the light to turn onto Callohill St.", 50,50, 1450, 300);
  }

  else if (mouseX>675 && mouseX<=850){
    text("8:24AM: People really need to learn how to merge here.", 50,50, 1450, 300);
  }
  else if (mouseX>850 && mouseX<=900){
    text("8:25AM: Remi's car is hit by a truck as she turns onto 6th St.", 50,50, 1450, 300);
  }

  else if (mouseX>900&& mouseX<=1100){
    text("8:25AM: Remi gets out to talk to the dude that hit her.", 50,50, 1450, 300);
}
  else if (mouseX>1100&& mouseX<=1450){
    text("8:28AM: Remi turns her car off, once she realizes this will take a while", 50,50, 1450, 300);
  }
  else{text("8:32AM: Upon realizing the police must be called, due to the truck carrying chemicals, she decides it's best to put away the computer that was sitting in her front seat and the transmission ends.", 50,50, 1450, 300);

  }
}
