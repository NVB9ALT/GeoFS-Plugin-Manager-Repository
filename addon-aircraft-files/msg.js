geofs.addonAircraft.isMsG = 0
geofs.addonAircraft.runMsG = function(){
   console.log("Loading Morane-Saulnier G. Model credit manilov.ap")
}
MsGLi = document.createElement("li");
MsGLi.innerHTML = '<div>Morane-Saulnier Type G</div>';
MsGLi.addEventListener("click", geofs.addonAircraft.runMsG);
MsGLi.setAttribute("data-aircraft", 8)
MsGLi.setAttribute("data-livery", 3)
document.getElementsByClassName("geofs-list geofs-toggle-panel geofs-aircraft-list")[0].appendChild(MsGLi)
function runMsG() {
if (geofs.aircraft.instance.id == 8 && geofs.aircraft.instance.liveryId == 3) {
	geofs.aircraft.instance.definition.parts[4].area = 3
	geofs.aircraft.instance.definition.parts[5].area = 3
	geofs.aircraft.instance.definition.parts[6].area = 3
	geofs.aircraft.instance.definition.parts[7].area = 3
	geofs.aircraft.instance.definition.mass = 300
	geofs.aircraft.instance.definition.parts[30].thrust = 1500
	geofs.aircraft.instance.definition.parts[8].area = 0.069
	geofs.aircraft.instance.definition.parts[9].area = 0.069
	geofs.aircraft.instance.definition.parts[10].area = 0.2
	geofs.aircraft.instance.definition.parts[11].area = 0.2
	geofs.aircraft.instance.definition.dragFactor = 0.7
	geofs.aircraft.instance.definition.autopilot = false
   geofs.addonAircraft.isMSG = 1
	geofs.aircraft.instance.definition.parts[0].animations[0].value = "rpm"
	geofs.aircraft.instance.definition.parts[0].animations[0].gt = -1
	if (geofs.animation.values.view == "cockpit") {
	geofs.aircraft.instance.cockpitSetup.parts[0].animations[0].value = "rpm"
	geofs.aircraft.instance.cockpitSetup.parts[0].animations[0].gt = -1
	}
} else {
geofs.addonAircraft.isMSG = 0	
}
}
msgInterval = setInterval(function(){runMsG()},100)
