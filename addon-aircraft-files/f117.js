geofs.addonAircraft.isF117 = 0;
geofs.debug.F117Instruments = 0;
geofs.addonAircraft.runF117 = function(){
   console.log("Loading F-117. Model credit manilov.ap")
}
f117Li = document.createElement("li");
f117Li.innerHTML = '<div><img src="https://cdn.shopify.com/s/files/1/0277/5197/2966/products/HA5807-3_1200x789.jpg">Lockheed F-117 "Nighthawk"</div>';
f117Li.addEventListener("click", geofs.addonAircraft.runF117);
//this works actually
f117Li.setAttribute("data-aircraft", 5)
f117Li.setAttribute("data-livery", 1)
document.getElementsByClassName("geofs-list geofs-toggle-panel geofs-aircraft-list")[0].appendChild(f117Li)
function runF117() {
   if (geofs.aircraft.instance.id == 5 && geofs.aircraft.instance.liveryId == 1) {
	//Remove lights
	geofs.aircraft.instance.definition.parts[46].animations[0].value = "rpm"
	geofs.aircraft.instance.definition.parts[46].animations[0].lt = -1
   geofs.aircraft.instance.definition.parts[45].animations[0].value = "rpm"
	geofs.aircraft.instance.definition.parts[45].animations[0].lt = -1
	geofs.aircraft.instance.definition.parts[47].animations[0].value = "rpm"
	geofs.aircraft.instance.definition.parts[47].animations[0].lt = -1
   geofs.aircraft.instance.definition.parts[48].animations[0].value = "rpm"
	geofs.aircraft.instance.definition.parts[48].animations[0].lt = -1
   geofs.aircraft.instance.definition.parts[8].area = 5
setTimeout(() => {
	geofs.addonAircraft.isF117 = 1
},5000)
setTimeout(() => {
	geofs.aircraft.instance.definition.parts[0].animations[0].value = "rpm"
	geofs.aircraft.instance.definition.parts[0].animations[0].gt = -1
}, 10000)
   //Wing area adjustment
	geofs.aircraft.instance.definition.parts[2].area = 4
	geofs.aircraft.instance.definition.parts[5].area = 4
	//Drag increase (flat panels = draggy airplane)
	geofs.aircraft.instance.definition.dragFactor = 0.5
	//Boost thrust to compensate for rise in dragFactor
	geofs.aircraft.instance.engines[0].thrust = 20000
	geofs.aircraft.instance.engines[1].thrust = 20000
	//remove flaps
	geofs.aircraft.instance.definition.flapsPositions = [0.01, 0.02, 0.03, 0.04, 0.05]
if (geofs.debug.F117Instruments == 0) {
	geofs.aircraft.instance.definition.instruments = {
        "hsi": "",
        "compass": "",
        "airspeedJet": "",
        "attitudeJet": "",
        "altitude": "",
        "varioJet": "",
        "rpmJet": "",
        "brakes": "",
        "gear": ""
}
	instruments.init(geofs.aircraft.instance.definition.instruments)
	geofs.debug.F117Instruments = 1
}
if (geofs.animation.values.view == "cockpit") {
	geofs.aircraft.instance.cockpitSetup.parts[0].animations[0].value = "rpm"
	geofs.aircraft.instance.cockpitSetup.parts[0].animations[0].gt = -1
	geofs.camera.currentDefinition.position[0] = geofs.aircraft.instance.definition.cameras.cockpit.position[0] + 0.35
	geofs.camera.currentDefinition.position[1] = geofs.aircraft.instance.definition.cameras.cockpit.position[1] - 0.2
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//Stealth technology goes here (haven't been able to develop it)
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
   } else {
geofs.debug.F117Instruments = 0
geofs.addonAircraft.isF117 = 0
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//Stealth technology goes here (haven't been able to develop it)
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	}
}
f117Int = setInterval(function(){runF117()},100)
