    geofs.animation.values.shake = null
    function getShake() {
        geofs.animation.values.shake = geofs.animation.values.aoa * Math.random();
    }
    function doShake() {
      getShake() 
      if (geofs.animation.values.aoa >= 10 && geofs.aircraft.instance.id != 4) {
      geofs.camera.translate(0.0001 * geofs.animation.values.shake,0.0001 * geofs.animation.values.shake,0.0001 * geofs.animation.values.shake)
      setTimeout(function(){
        geofs.camera.translate(-0.0001 * geofs.animation.values.shake,-0.0001 * geofs.animation.values.shake,-0.0001 * geofs.animation.values.shake)
      },1)
      }
    }
    shakeInterval = setInterval(function(){doShake()},10)
