
//so you don't get notified about the ejection seats every single second
var notifiedEject = new Boolean(0)
//this is for the canopy blow-off animation
geofs.animation.values.eject = 0
//so the "ejection simulation" code only executes once
var ejected = new Boolean(1);
function checkForEjections() {
//if in an aircraft with ejection seats
if (geofs.aircraft.instance.id == 3 || geofs.aircraft.instance.id == 7 || geofs.aircraft.instance.id == 18 || geofs.aircraft.instance.id == 4172 || geofs.aircraft.instance.id == 3617 || geofs.aircraft.instance.id == 2581 || geofs.aircraft.instance.id == 2857) {
//notifying you of the existence of ejection seats
if (notifiedEject == 0) {
ui.notification.show("Press E while airborne to eject");
notifiedEject = 1
};
//if you've turned the engines off, haven't ejected, and are airborne
if (geofs.animation.values.enginesOn == 0 && geofs.animation.values.groundContact == 0 && ejected == 0) {
console.log("eject");
//cockpit camera animation?
if (geofs.camera.currentModeName == "cockpit") {
   geofs.camera.set(0)
}
//with "ejected" set to true, the code inside the "if" statement only executes once
ejected = 1
//setting the animation value for the canopy animation
geofs.animation.values.eject = 1;
//switch you to a paraglider in two seconds (parachute inflation time)
setTimeout(() => {geofs.aircraft.instance.change(50);}, 2000);
//tell you what you did
ui.notification.show("You ejected from your aircraft");
//play the "ejection sound"
audio.impl.html5.playFile("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/softtouch.mp3");
//canopy animation - with animation.values.eject set to 1, the canopy teleports out of view
geofs.aircraft.instance.definition.parts.forEach(function(e){
   if (e.name.includes('canopy') || e.name.includes('Canopy')) {
	   e.animations[1] = {};
      e.animations[1].type = "translate";
		e.animations[1].axis = [0, 0, 1];
      e.animations[1].value = "eject";
      e.animations[1].ratio = 100;
      e.animations[1].currentValue = null;
	};
});
//0.0986 - gravitational constant, divided by 100 as the code it's for runs 100 times per second
//starting ejection force and roll angle compensation
var a = 1 - ((geofs.animation.values.aroll + 90) * 0.001) 
var b = 0 - (geofs.animation.values.aroll * 0.001) 
var c = 0
if (geofs.animation.values.trueKias != undefined) {
   c = (geofs.animation.values.trueKias / 150)
} else {
   c = (geofs.animation.values.kias / 150)
}
function moveCamera() {
//gravity pulling the camera down
a = a - 0.0986
//teleport the camera to the new calculated location - every ten ms
geofs.camera.translate(b, c, a)
//log the values for debugging
console.log(a)
console.log(b)
console.log(c)
};
//moving the camera
moveCameraInterval = setInterval(function(){moveCamera()},10)
//stop moving the camera when the parachute inflates
setTimeout(() => {clearInterval(moveCameraInterval);},2000)
};
//if you're not ejecting right now, you shouldn't be
if (geofs.animation.values.enginesOn == 1 && ejected == 1) {
   ejected = 0
}
	} else {
//if you're not in an aircraft with ejection seat, set notifiedTrue to false so you can be notified next time you hop in one :)
notifiedEject = 0
geofs.animation.values.eject = 1
	}
};
//set the whole bs on an interval so it all ticks along nicely
ejectionInterval = setInterval(function(){checkForEjections()}, 500);
