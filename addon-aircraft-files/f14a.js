geofs.addonAircraft.isF14A = 0
geofs.addonAircraft.F14AInstruments = 0
geofs.addonAircraft.runF14A = function(){
   console.log("Loading F-14A Tomcat. Model credit manilov.ap")
}
F14ALi = document.createElement("li");
F14ALi.innerHTML = '<div><img src="http://atlas-content-cdn.pixelsquid.com/stock-images/f-14-airplane-tomcat-fighter-jet-ENB74k2-600.jpg">Grumman F-14A Tomcat</div>';
F14ALi.addEventListener("click", geofs.addonAircraft.runF14A);
//this works actually
F14ALi.setAttribute("data-aircraft", 18)
F14ALi.setAttribute("data-livery", 6)
document.getElementsByClassName("geofs-list geofs-toggle-panel geofs-aircraft-list")[0].appendChild(F14ALi)
function runF14A() {
if (geofs.aircraft.instance.id == 18 && geofs.aircraft.instance.liveryId == 6) {
//Wing sweep physics
   if (geofs.animation.values.optionalAnimatedPartPosition < 1) {
geofs.aircraft.instance.definition.parts[3].area = 17
geofs.aircraft.instance.definition.parts[4].area = 17
geofs.aircraft.instance.definition.parts[2].area = 17
   } else {
geofs.aircraft.instance.definition.parts[3].area = 10
geofs.aircraft.instance.definition.parts[4].area = 10
geofs.aircraft.instance.definition.parts[2].area = 5
	}
//area refinements
geofs.aircraft.instance.definition.parts[11].area = 0.5
geofs.aircraft.instance.definition.parts[14].area = 5
geofs.aircraft.instance.definition.parts[15].area = 5
geofs.aircraft.instance.definition.parts[6].area = 5
geofs.aircraft.instance.definition.parts[5].area = 5
//removing the thrust vectoring
geofs.aircraft.instance.definition.parts[46].animations[0].ratio = 0.069;
geofs.aircraft.instance.definition.parts[46].animations[1].ratio = 0.069;
geofs.aircraft.instance.definition.parts[51].animations[0].ratio = 0.069;
geofs.aircraft.instance.definition.parts[51].animations[1].ratio = 0.069;
//TF30s having no thrust unless you go really fast
//mass is 25300 by default, try increasing it so thrust can increase as well
geofs.aircraft.instance.definition.mass = 35000
   if (geofs.animation.values.mach >= 1.75) {
geofs.aircraft.instance.engines[0].thrust = 85000
geofs.aircraft.instance.engines[0].afterBurnerThrust = 190000
geofs.aircraft.instance.engines[1].thrust = 85000
geofs.aircraft.instance.engines[1].afterBurnerThrust = 190000
	} else {
geofs.aircraft.instance.engines[0].thrust = 85000
geofs.aircraft.instance.engines[0].afterBurnerThrust = 145000
geofs.aircraft.instance.engines[1].thrust = 85000
geofs.aircraft.instance.engines[1].afterBurnerThrust = 145000
   }

//attempt at landing gear adjustment
geofs.aircraft.instance.definition.parts[17].collisionPoints[0][2] = -0.8
geofs.aircraft.instance.definition.parts[27].collisionPoints[0][2] = -0.8
//Sound adjustment
audio.soundplayer.setRate(geofs.aircraft.instance.definition.sounds[3].id, 0.5)
if (geofs.animation.values.view == "cockpit") {
	geofs.aircraft.instance.cockpitSetup.parts[0].animations[0].value = "rpm"
	geofs.aircraft.instance.cockpitSetup.parts[0].animations[0].gt = -1
geofs.camera.currentDefinition.position[1] = 6.4
geofs.camera.currentDefinition.position[2] = 1.08
}
//HUD
	geofs.aircraft.instance.setup.instruments.correctHUD = {
            "cockpit": {
                "position": [0, 7.109, 1.06],
                "scale": 0.65
            },
            "animations": [
                {"value": "view", "type": "show", "eq": "cockpit"}
            ]
	}
if (geofs.addonAircraft.F14AInstruments == 0) {
	instruments.init(geofs.aircraft.instance.setup.instruments)
   geofs.addonAircraft.F14AInstruments = 1
}
//Tailhook
geofs.addonAircraft.runAddonTailhook()
//Replacing the tires lol
geofs.aircraft.instance.definition.contactProperties = {
        "wheel": {
        	"frictionCoef": 2,
        	"dynamicFriction": 0.01,
        	"rollingFriction": 0.00001,
            "damping": 1
        },
        "frame": {
        	"frictionCoef": 2,
        	"dynamicFriction": 0.01,
            "damping": 1
        },
	    "airfoil": {
        	"frictionCoef": 2,
        	"dynamicFriction": 0.01,
            "damping": 1
        },
        "hook": {
            "frictionCoef": 2,
            "dynamicFriction": 0.01,
            "damping": 1
        }
    };
//Adding the airbrake
geofs.aircraft.instance.definition.airbrakesTravelTime = 1;
geofs.aircraft.instance.definition.instruments.spoilers = "";
if (geofs.animation.values.airbrakesTarget > 0) {
   geofs.aircraft.instance.definition.dragFactor = 7
} else {
   geofs.aircraft.instance.definition.dragFactor = 1.5
}
setTimeout(() => {
   geofs.addonAircraft.isF14A = 1
},5000)
setTimeout(() => {
	geofs.aircraft.instance.definition.parts[0].animations[0].value = "rpm"
	geofs.aircraft.instance.definition.parts[0].animations[0].gt = -1
	 geofs.aircraft.instance.definition.parts[50].animations[0].gt = 100000
	 geofs.aircraft.instance.definition.parts[55].animations[0].gt = 100000
},10000)} else {
   geofs.addonAircraft.isF14A = 0
   geofs.addonAircraft.F14AInstruments = 0
}
}
f14aInterval = setInterval(function(){runF14A()},10)
