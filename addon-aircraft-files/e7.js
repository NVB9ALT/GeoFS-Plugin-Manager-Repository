geofs.addonAircraft.isE7 = 0
geofs.addonAircraft.runE7 = function(){
   console.log("Loading E-7 Wedgetail AEW&C.")
}
e7Li = document.createElement("li");
e7Li.innerHTML = '<div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/B737_AEW%26C_Wedgetail_cut_model.PNG/220px-B737_AEW%26C_Wedgetail_cut_model.PNG">E-7 Wedgetail AEW&C</div>';
e7Li.addEventListener("click", geofs.addonAircraft.runE7);
//this works actually
e7Li.setAttribute("data-aircraft", 3292)
e7Li.setAttribute("data-livery", 1)
document.getElementsByClassName("geofs-list geofs-toggle-panel geofs-aircraft-list")[0].appendChild(e7Li)
function runE7Wedgetail() {
   if (geofs.aircraft.instance.id == 3292 && geofs.aircraft.instance.liveryId == 1) {
geofs.addonAircraft.isE7 = 1
geofs.aircraft.instance.definition.mass = 75000
   } else {
geofs.addonAircraft.isE7 = 0
	}
}
e7int = setInterval(function(){runE7Wedgetail()},100)
