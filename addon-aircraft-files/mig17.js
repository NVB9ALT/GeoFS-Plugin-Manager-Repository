geofs.addonAircraft.isMig17 = 0
geofs.addonAircraft.runMiG17 = function(){
   console.log("Loading MiG-17. Model credit manilov.ap")
}
mig17Li = document.createElement("li");
mig17Li.innerHTML = '<div><img src="https://finescale.com/~/media/images/workbench-reviews/2020/february-2020/fsmwb1219_zvezda_mig17_01.jpg">Mikoyan-Gurevich MiG-17 "Fresco"</div>';
mig17Li.addEventListener("click", geofs.addonAircraft.runMiG17);
//this works actually
mig17Li.setAttribute("data-aircraft", 3)
mig17Li.setAttribute("data-livery", 1)
document.getElementsByClassName("geofs-list geofs-toggle-panel geofs-aircraft-list")[0].appendChild(mig17Li)
function runMiG17() {
   if (geofs.aircraft.instance.id == 3 && geofs.aircraft.instance.liveryId == 1) {
geofs.aircraft.instance.definition.parts[3].area = 3
geofs.aircraft.instance.definition.parts[4].area = 3
geofs.aircraft.instance.definition.parts[8].liftFactor = 7
geofs.aircraft.instance.definition.parts[9].liftFactor = 7
geofs.aircraft.instance.definition.parts[8].dragFactor = 1
geofs.aircraft.instance.definition.parts[9].dragFactor = 1
geofs.aircraft.instance.definition.parts[16].liftFactor = 8
geofs.aircraft.instance.engines[0].thrust = 15000
geofs.aircraft.instance.engines[1].thrust = 15000
geofs.aircraft.instance.engines[0].afterBurnerThrust = 20000
geofs.aircraft.instance.engines[1].afterBurnerThrust = 20000
   if (geofs.animation.values.view == "cockpit") {
geofs.aircraft.instance.cockpitSetup.parts[1].object3d.model._model.color.alpha = 0
   }
setTimeout(() => {
   geofs.addonAircraft.isMig17 = 1
},5000)
setTimeout(() => {
   geofs.aircraft.instance.definition.parts[0].animations[0].value = "rpm"
	geofs.aircraft.instance.definition.parts[0].animations[0].gt = -1
},10000)
   } else {
geofs.addonAircraft.isMig17 = 0
   }
}
mig17Int = setInterval(function(){runMiG17()},100)
