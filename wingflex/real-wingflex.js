//Better CC wingflex
geofs.animation.values.liftLeftWing = 1
geofs.animation.values.liftRightWing = 1
function runBetterWingflex() {
if (geofs.aircraft.instance.id == 3179 || geofs.aircraft.instance.id == 3180){
geofs.animation.values.liftLeftWing = -geofs.aircraft.instance.parts.leftwing.lift / 200000;
geofs.animation.values.liftRightWing = -geofs.aircraft.instance.parts.rightwing.lift / 200000;
geofs.aircraft.instance.setup.parts[3].animations[0].value = "liftLeftWing"
geofs.aircraft.instance.setup.parts[4].animations[0].value = "liftLeftWing"
geofs.aircraft.instance.setup.parts[5].animations[0].value = "liftLeftWing"
geofs.aircraft.instance.setup.parts[6].animations[0].value = "liftRightWing"
geofs.aircraft.instance.setup.parts[7].animations[0].value = "liftRightWing"
geofs.aircraft.instance.setup.parts[8].animations[0].value = "liftRightWing"
geofs.aircraft.instance.lights[0].animations[0].value = "liftRightWing"
geofs.aircraft.instance.lights[1].animations[0].value = "liftLeftWing"
geofs.aircraft.instance.lights[2].animations[0].value = "liftRightWing"
geofs.aircraft.instance.lights[3].animations[0].value = "liftLeftWing"
geofs.aircraft.instance.lights[2].animations[1].value = "liftRightWing"
geofs.aircraft.instance.lights[3].animations[1].value = "liftLeftWing"
};
if (geofs.aircraft.instance.id == 2973){
geofs.animation.values.liftLeftWing = -geofs.aircraft.instance.parts.leftwing.lift / 200000;
geofs.animation.values.liftRightWing = -geofs.aircraft.instance.parts.rightwing.lift / 200000;
geofs.aircraft.instance.setup.parts[2].animations[0].value = "liftLeftWing"
geofs.aircraft.instance.setup.parts[3].animations[0].value = "liftLeftWing"
geofs.aircraft.instance.setup.parts[4].animations[0].value = "liftLeftWing"
geofs.aircraft.instance.setup.parts[16].animations[0].value = "liftRightWing"
geofs.aircraft.instance.setup.parts[17].animations[0].value = "liftRightWing"
geofs.aircraft.instance.setup.parts[18].animations[0].value = "liftRightWing"
geofs.aircraft.instance.lights[0].animations[0].value = "liftRightWing"
geofs.aircraft.instance.lights[1].animations[0].value = "liftLeftWing"
geofs.aircraft.instance.lights[2].animations[0].value = "liftRightWing"
geofs.aircraft.instance.lights[3].animations[0].value = "liftLeftWing"
geofs.aircraft.instance.lights[2].animations[1].value = "liftRightWing"
geofs.aircraft.instance.lights[3].animations[1].value = "liftLeftWing"
};
if (geofs.aircraft.instance.id == 2386){
geofs.animation.values.liftLeftWing = -geofs.aircraft.instance.parts.wingleft.lift / 200000;
geofs.animation.values.liftRightWing = -geofs.aircraft.instance.parts.wingright.lift / 200000;
geofs.aircraft.instance.setup.parts[3].animations[1].value = "liftLeftWing"
geofs.aircraft.instance.setup.parts[4].animations[1].value = "liftLeftWing"
geofs.aircraft.instance.setup.parts[5].animations[0].value = "liftLeftWing"
geofs.aircraft.instance.setup.parts[6].animations[0].value = "liftLeftWing"
geofs.aircraft.instance.setup.parts[7].animations[1].value = "liftLeftWing"
geofs.aircraft.instance.setup.parts[8].animations[1].value = "liftRightWing"
geofs.aircraft.instance.setup.parts[9].animations[0].value = "liftRightWing"
geofs.aircraft.instance.setup.parts[10].animations[0].value = "liftRightWing"
geofs.aircraft.instance.lights[6].animations[1].value = "liftRightWing"
geofs.aircraft.instance.lights[1].animations[2].value = "liftLeftWing"
geofs.aircraft.instance.lights[6].animations[2].value = "liftRightWing"
geofs.aircraft.instance.lights[1].animations[1].value = "liftLeftWing"
geofs.aircraft.instance.lights[5].animations[1].value = "liftleftWing"
geofs.aircraft.instance.lights[5].animations[2].value = "liftLeftWing"
geofs.aircraft.instance.lights[10].animations[1].value = "liftRightWing"
geofs.aircraft.instance.lights[10].animations[2].value = "liftRightWing"
};
if (geofs.aircraft.instance.id == 252) {
geofs.animation.values.liftLeftWing = -geofs.aircraft.instance.parts.wingleft.lift / 200000;
geofs.animation.values.liftRightWing = -geofs.aircraft.instance.parts.wingright.lift / 200000;
geofs.aircraft.instance.setup.parts[4].animations[0].value = "liftLeftWing"
geofs.aircraft.instance.setup.parts[5].animations[0].value = "liftLeftWing"
geofs.aircraft.instance.setup.parts[6].animations[0].value = "liftLeftWing"
geofs.aircraft.instance.setup.parts[7].animations[0].value = "liftLeftWing"
geofs.aircraft.instance.setup.parts[8].animations[0].value = "liftRightWing"
geofs.aircraft.instance.setup.parts[9].animations[0].value = "liftRightWing"
geofs.aircraft.instance.setup.parts[10].animations[0].value = "liftRightWing"
geofs.aircraft.instance.setup.parts[11].animations[0].value = "liftRightWing"
};
};
wingflexInterval = setInterval(function(){
runBetterWingflex()
},1000);
