function SpaceShooter(io){
 
  io.activateDebugger();
  io.setBGColor('#5e3f6b');
 
  //function to move elements to the top 
  //of the canvas when they reach the bottom
  moveToTop = function(obj){
    obj.setPos(iio.getRandomInt(10, io.canvas.width-10)
              ,iio.getRandomInt(-340, -100));
    return true;
  }
 
  var bgSpeed = 6;
  var bgDensity = io.canvas.width/20;
  var bgImgs = []; //load images into an array
 
  for (var i=0; i<3; i++)
      bgImgs[i] = new Image();
 
  bgImgs[0].src = 'png/Background/starSmall.png';
  bgImgs[1].src = 'png/Background/starBig.png';
  bgImgs[2].src = 'png/Background/nebula.png';
 
  for (var i=0; i<bgImgs.length; i++)
    bgImgs[i].onload = function(){
        var tag,zIndex,vel;
        switch(this[0]){
            case 0: tag = 'small stars'; 
                    zIndex = -20; 
                    vel = bgSpeed; 
                    break;
            case 1: tag = 'big stars'; 
                    zIndex = -15; 
                    vel = bgSpeed+.2; 
                    break;
            case 2: tag = 'nebula'; 
                    zIndex = -5; 
                    vel = bgSpeed+4;
                    break;
        }
        for (var j=0; j<bgDensity; j++)
            if (iio.getRandomNum() < .4){
                io.addToGroup(tag
                   ,new iio.SimpleRect(iio.getRandomInt(10, io.canvas.width-10)
                                ,iio.getRandomInt(0, io.canvas.height))
                                ,zIndex)
 
                   .createWithImage(bgImgs[this[0]])
                   .enableKinematics()
                   .setVel(0,vel)
                   .setBound('bottom'
                            ,io.canvas.height+140
                            ,moveToTop);
            }
    }.bind([i])
    //when you bind an array, access the elements with this[index]
 
  io.setFramerate(60);
}