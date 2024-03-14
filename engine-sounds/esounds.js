geofs.animation.values.nullAnimation = null;
//Most of these functions developed by AriakimTaiyo
function radians(n) {
  return n * (Math.PI / 180);
};
function degrees(n) {
  return n * (180 / Math.PI);
};
//find direction from camera in degrees. 0 should be directly behind, 90 is to the left of the plane, 180 is in front, and 270 is to the right.
function getCameraDirection() {
  var a = geofs.api.getCameraLla(geofs.camera.cam);
  var b = geofs.aircraft.instance.llaLocation;
  var startLat = radians(a[0]);
  var startLong = radians(a[1]);
  var endLat = radians(b[0]);
  var endLong = radians(b[1]);

  let dLong = endLong - startLong;

  let dPhi = Math.log(Math.tan(endLat/2.0+Math.PI/4.0)/Math.tan(startLat/2.0+Math.PI/4.0));
  if (Math.abs(dLong) > Math.PI){
    if (dLong > 0.0)
       dLong = -(2.0 * Math.PI - dLong);
    else
       dLong = (2.0 * Math.PI + dLong);
  }
  return (degrees(Math.atan2(dLong, dPhi)) + 270.0) % 360.0;
};
function checkPos() {
    var a = (getCameraDirection() - geofs.animation.values.heading360) % 360;
    var b = radians(a);
    var c = Math.cos(b);
    var d = Math.sin(b);
    var e = clamp((clamp(d, 0, 1) + Math.abs(c)), 0, 1)
    var f = clamp((clamp(-d, 0, 1) - Math.abs(c)), 0, 1)
	 //HOW THIS WORKS: f is backblast, e is front sound. both are equal 180-degree halves if used as below.
    return [e,f];
  };
function getJetSounds() {
   if (geofs.aircraft.instance.id == 7 || geofs.aircraft.instance.id == 2857 || geofs.aircraft.instance.id == 4172 || geofs.aircraft.instance.id == 2364 || geofs.aircraft.instance.id == 3591) {
geofs.aircraft.instance.definition.sounds.forEach(function(e){
   if (e.file.includes("f16") && e.id.includes("rpm2")) {
if (checkPos()[0] >= 0.99 && checkPos()[1] < 0.99) {
	e.effects.volume.value = "nullAnimation";
} 
if (checkPos()[1] >= 0 && checkPos()[0] < 0.99) {
   e.effects.volume.value = "rpm";
}
	}
if (e.file.includes("f16") && e.id.includes("rpm1")) {
   if (checkPos()[0] >= 0.99 && checkPos()[1] < 0.99) {
e.effects.volume.ramp = [3000, 5000, 11000, 11000]
	}
   if (checkPos()[1] >= 0 && checkPos()[0] < 0.99) {
e.effects.volume.ramp = [3000, 5000, 9000, 9500]
   }
}
})
   }
   if (geofs.animation.values.mach > 1 && checkPos()[0] >= 0.99 && checkPos()[1] < 0.99 && geofs.camera.currentModeName != "cockpit") {
audio.on = 0
audio.stop();
	} else if (checkPos()[1] >= 0 && checkPos()[0] < 0.99 && audio.on == 0 && geofs.preferences.sound == 1) {
audio.on = 1
   }
   if (checkPos()[0] > 0.99 && checkPos()[0] < 1 && geofs.animation.values.mach > 1 && geofs.preferences.sound == 1 && (geofs.camera.currentModeName == "free" || geofs.camera.currentModeName == "chase")) {
console.log("Sonic boom time")
audio.impl.html5.playFile("https://142420819-645052386429616373.preview.editmysite.com/uploads/1/4/2/4/142420819/sonicboom.mp3")
   }
//console.log(checkPos()[0] + ", " + checkPos()[1])
};
jetSoundsInterval = setInterval(function(){getJetSounds()},100)

    console.log("Original immersion SFX scripts copyright Ariakim Taiyo");
    console.log("Modified by NVB9 and Kolos26");
    
    //variable to tell if the script has run or not
    var b737Sounds = 0
    soundInt = null;
    tcasIntervalAnnounce = null;
    effectInterval = null;
    accelInt = null;
    flexInterval = null;
    
    function checkForBoeing737() {
    if (geofs.aircraft.instance.id == 4 || geofs.aircraft.instance.id == 3054) { //if the aircraft currently being flown is a 737
    if (b737Sounds != geofs.aircraft.instance.id){ //if the script hasn't already run on this aircraft
    //preventing errors
            clearInterval(soundInt);
            clearInterval(tcasIntervalAnnounce);
            clearInterval(accelInt);
            clearInterval(flexInterval);
    //running the script
    var script737 = document.createElement('script'); 
    script737.src="https://raw.githack.com/AbnormalHuman/GeoFS-737-Immersion-SFX/main/index.js";
    document.body.appendChild(script737);
    script737.onload = function(){clearInterval(tcasIntervalAnnounce)};
    
    //script has run now, so we change scriptHasRun to avoid having the script execute multiple times per aircraft instance
    //this avoids massive lag
    b737Sounds = geofs.aircraft.instance.id
          }
       }
    //if the aircraft isn't a 737
    else {
    //clearing the script when the aircraft isn't a 737 to avoid filling up the console with errors
    if (typeof soundInt != undefined) {
       clearInterval(soundInt)
       clearInterval(tcasIntervalAnnounce)
       clearInterval(accelInt)
       clearInterval(flexInterval)
    } else {
    void(0)
    };
    //making sure the script can run again next time a 737 is selected
        b737Sounds = 0
       }
    }
    
    //running the above function once per second
    checkInterval = setInterval(function(){
    checkForBoeing737()
    }, 1000)
    
    var b777sounds = new Boolean(0)
    
    function checkForBoeing777() {
    
    if (geofs.aircraft.instance.id == 240 || geofs.aircraft.instance.id == 25 || geofs.aircraft.instance.id == 4402) {
    if (b777sounds == 0){
    
    var script777 = document.createElement('script'); 
    script777.src="https://cdn.jsdelivr.net/gh/NVB9ALT/777-Realism-Overhaul-for-Realism-Addon@main/indexA.js";
    document.body.appendChild(script777);
    script777.onload = function (){change777s()}
    
    b777sounds = 1
          }
       } else {
    if (typeof effectInterval != undefined) {
       clearInterval(effectInterval)
    } else {
       void(0)
    }
        b777sounds = 0
       }
    }
    
    checkInterval1 = setInterval(function(){
    checkForBoeing777()
    }, 1000)
    
    //variable to tell if the script has run or not
        var a320Sounds = 0
    
        function checkFora320() {
        if (geofs.aircraft.instance.id == 2865 || geofs.aircraft.instance.id == 2870 || geofs.aircraft.instance.id == 2871 || geofs.aircraft.instance.id == 242 || geofs.aircraft.instance.id == 2843 || geofs.aircraft.instance.id == 2899 || geofs.aircraft.instance.id == 24 || geofs.aircraft.instance.id == 2973) { //if the aircraft currently being flown is a320 or a220 or a350
        if (a320Sounds != geofs.aircraft.instance.id){ //if the script hasn't already run on this aircraft
        //preventing errors
                clearInterval(soundInt);
                clearInterval(tcasIntervalAnnounce);
                clearInterval(accelInt);
                clearInterval(flexInterval);
        //running the script
        var a320script = document.createElement('script'); 
        a320script.src="https://raw.githack.com/kolos26/geofs-a320neo-sounds-byAriakimTaiyo/main/sounds.js";
        document.body.appendChild(a320script);
    
        //script has run now, so we change scriptHasRun to avoid having the script execute multiple times per aircraft instance
        //this avoids massive lag
        a320Sounds = geofs.aircraft.instance.id
            }
        }
        //if the aircraft isn't a 320
        else {
            //making sure the script can run again next time a 320 is selected
            a320Sounds = 0
        }
        }
    
        //running the above function once per second
        checkInterval2 = setInterval(function(){
        checkFora320()
        }, 1000)
