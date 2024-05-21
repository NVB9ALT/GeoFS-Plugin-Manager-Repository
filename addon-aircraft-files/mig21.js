geofs.addonAircraft.runMig21 = function(){
	console.log("Loading MiG-21 Fishbed. Model credit manilov.ap.")
	controls.optionalAnimatedPart.target = 1
}
mig21Li = document.createElement("li");
mig21Li.innerHTML = '<div><img src="http://atlas-content-cdn.pixelsquid.com/stock-images/russian-fighter-mig-21-fishbed-jet-q1ylV3E-600.jpg">Mikoyan-Gurevich MiG-21 "Fishbed"</div>';
mig21Li.addEventListener("click", geofs.addonAircraft.runMig21);
document.getElementsByClassName("geofs-list geofs-toggle-panel geofs-aircraft-list")[0].appendChild(mig21Li)
mig21Li.setAttribute("data-aircraft", 7)
mig21Li.setAttribute("data-livery", 1)

geofs.mig21instruments = new Boolean(0)
//clearInterval(mig21Interval)
function runMiG21() {
if (geofs.aircraft.instance.id == 7 && geofs.aircraft.instance.liveryId == 1) {
	geofs.aircraft.instance.definition.parts[2].zeroLiftIncidence = 90
	geofs.aircraft.instance.definition.parts[3].zeroLiftIncidence = 90
	geofs.aircraft.instance.definition.parts[6].area = 1
if (geofs.animation.values.kias >= 150 && geofs.animation.values.kias <= 225) {
	geofs.aircraft.instance.definition.parts[7].area = 0.5
	geofs.aircraft.instance.definition.parts[8].area = 0.5
	geofs.aircraft.instance.definition.parts[2].area = 10
	geofs.aircraft.instance.definition.parts[3].area = 10
} else {
	geofs.aircraft.instance.definition.parts[7].area = 2
	geofs.aircraft.instance.definition.parts[8].area = 2
	geofs.aircraft.instance.definition.parts[2].area = 7
	geofs.aircraft.instance.definition.parts[3].area = 7
}
if (geofs.animation.values.aoa > 14) {
   geofs.aircraft.instance.definition.dragFactor = 6
} else if (geofs.animation.values.aoa > 5) {
   geofs.aircraft.instance.definition.dragFactor = 3
} else {
   geofs.aircraft.instance.definition.dragFactor = 0.4
}
	geofs.aircraft.instance.definition.mass = 21000
	geofs.aircraft.instance.engine.thrust = 40000
if (controls.optionalAnimatedPart.target == 0) {
	geofs.aircraft.instance.engine.afterBurnerThrust = 90000
} else {
   geofs.aircraft.instance.engine.afterBurnerThrust = 60000
}
	geofs.aircraft.instance.definition.parts[12].liftFactor = 5
geofs.aircraft.instance.setup.instruments = {
        "cdi": "",
        "compass": "",
        "airspeedSupersonic": "",
        "attitudeJet": "",
        "altitude": "",
        "varioJet": "",
        "rpmJet": "",
		"brakes": "",		
		"gear": "",
		"flaps": "",
		"spoilers": ""
}
if (geofs.mig21instruments == 0) {
   instruments.init(geofs.aircraft.instance.setup.instruments)
   geofs.mig21instruments = 1
}
setTimeout(() => {
   geofs.addonAircraft.isMiG21 = 1
 },5000)
setTimeout(() => {
   geofs.aircraft.instance.definition.parts[0].animations[0] = {"type": "hide", "value": "rpm", "gt": -1}
	geofs.aircraft.instance.definition.parts[41].animations[0].gt = 100000
 },10000)
if (geofs.animation.values.view == "cockpit") {
	geofs.aircraft.instance.cockpitSetup.parts[0].animations[0].value = "rpm"
	geofs.aircraft.instance.cockpitSetup.parts[0].animations[0].gt = -1
	geofs.camera.currentDefinition.position[2] = geofs.aircraft.instance.definition.cameras.cockpit.position[2] - 0.15
   }
} else {
   geofs.addonAircraft.isMiG21 = 0
	geofs.mig21instruments = 0
}
}
mig21Interval = setInterval(function(){runMiG21()},100)
