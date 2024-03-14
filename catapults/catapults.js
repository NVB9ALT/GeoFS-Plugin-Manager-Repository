let catLlas = [[37.778307623586805, -122.6090264835742, 22.753097613256113]]; //Modify to add new LLA locations for catapults.
let barDown = true;
let barLocked = false;
let launchKey = "`" // |
let lockKey = "q"; // |

function gearBarPosLock() {
 if (barLocked) {
   geofs.aircraft.instance.rigidBody.setLinearVelocity([0, 0, 0])
 }
}

function resolveForceVector(force, angle) {
  fx = force * (Math.cos(angle * (Math.PI/180)));
  fy = force * (Math.sin(angle * (Math.PI/180)));
  return [fx, fy, 0];
}

function distance(pos1, pos2) {
  var a = pos2[0] - pos1[0];
var b = pos2[1] - pos1[1];
var c = pos2[2] - pos1[2];

return Math.sqrt(a * a + b * b + c * c);
  
}

var carrierPlaneCheck = 0;

setInterval(function(){
if ((geofs.aircraft.instance.id == 7 || geofs.aircraft.instance.id == 2581 || geofs.aircraft.instance.id == 3460) && carrierPlaneCheck == 0) {
 carrierPlaneCheck = 1;
document.addEventListener("keypress", function onEvent(event) {

    if (event.key === lockKey) {
        if (barLocked) {
        barLocked = false;
        clearInterval(lockInt)
        ui.notification.show("Launch bar unlocked")
      }
      else {
        catLlas.forEach(function(e){
          if (distance(geofs.aircraft.instance.llaLocation, e) < 10) {
            barLocked = true;
            lockInt = setInterval(function(){
            gearBarPosLock()
              })
          }
          })            
        }
      }
      if (event.key === launchKey) {
        if (barLocked && geofs.animation.values.throttle == 1) {
              clearInterval(lockInt)
                  barLocked = false;
                  barDown = false;
             geofs.aircraft.instance.rigidBody.reset();
          var launchForce = geofs.aircraft.instance.rigidBody.mass * 10
          let whiteSmokeEmitter = new geofs.fx.ParticleEmitter({
            anchor: {
                        worldPosition: [0, 0, -1]
                    },
            duration: 1E5,
            rate: .05,
            life: 4E4,
            easing: "easeOutQuart",
            startScale: .0005,
            endScale: .0005,
            randomizeStartScale: .05,
            randomizeEndScale: .15,
            startOpacity: 0.9,
            endOpacity: 1E-5,
            startRotation: "random",
            texture: "whitesmoke"
        })
          launchInterval = setInterval(function(){
            if (geofs.animation.values.groundContact == 1){
            geofs.aircraft.instance.rigidBody.applyCentralImpulse([resolveForceVector(launchForce, geofs.animation.values.heading360)[1], resolveForceVector(launchForce, geofs.animation.values.heading360)[0], resolveForceVector(launchForce, geofs.animation.values.heading360)[2]])
              }
            else {
              clearInterval(launchInterval)
              whiteSmokeEmitter.destroy()
            }
            }, 200)
          }
        }
      })
    } else {
carrierPlaneCheck = 0
    }
  }, 100)
