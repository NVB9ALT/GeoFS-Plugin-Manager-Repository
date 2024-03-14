    function runTurbAccel() {
        if (geofs.aircraft.instance.definition.maxRPM == 10000) {
            if (geofs.animation.values.rpm < 5999) {
                geofs.aircraft.instance.definition.engineInertia = 0.2;
            }
            if (geofs.animation.values.rpm >= 6000 && geofs.animation.values.rpm < 6999) {
                geofs.aircraft.instance.definition.engineInertia = 0.5;
            }
            if (geofs.animation.values.rpm >= 7000) {
                geofs.aircraft.instance.definition.engineInertia = 1;
            }
        }
    }
    turbAccelInt = setInterval(function () {
        runTurbAccel();
    }, 100);
