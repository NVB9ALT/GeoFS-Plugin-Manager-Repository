function gBreath() {
   if (geofs.animation.values.loadFactor >= 3) {
audio.impl.html5.playFile("https://142420819-645052386429616373.preview.editmysite.com/uploads/1/4/2/4/142420819/cutgbreath.mp3")
	}
}
function flankerStall() {
   if (geofs.aircraft.instance.id == 18 && geofsAddonAircraft.isSu27 == 1 && geofs.animation.values.cobraMode == 1) {
audio.impl.html5.playFile("https://142420819-645052386429616373.preview.editmysite.com/uploads/1/4/2/4/142420819/flankerstall.m4a")
	}
}
gBreathInt = setInterval(function(){gBreath()},3500)
flankerStallInt = setInterval(function(){flankerStall()},3000)

    gSoundInt = setInterval(function(){
       if (geofs.animation.values.accZ >= 50 && geofs.animation.values.view == "cockpit") {
    audio.impl.html5.playFile("https://142420819-645052386429616373.preview.editmysite.com/uploads/1/4/2/4/142420819/wind.mp3")
        }
       if (geofs.animation.values.accZ >= 70 && geofs.animation.values.view == "cockpit") {
    audio.impl.html5.playFile("https://142420819-645052386429616373.preview.editmysite.com/uploads/1/4/2/4/142420819/wind.mp3")
        }
    },1000)
