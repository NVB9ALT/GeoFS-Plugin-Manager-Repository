    function fixSpin() {
        if (geofs.aircraft.instance.id == 2948 || geofs.aircraft.instance.id == 2581) {
            var pitch = geofs.animation.values.atilt;
            setTimeout(() => {
                if (geofs.animation.values.atilt + 50 < pitch || geofs.animation.values.atilt - 50 > pitch) {
                    geofs.aircraft.instance.definition.minimumSpeed = 600;
                    console.log("Spin detected");
                    geofs.flyToCamera();
                    console.log("Spin fixed");
                    setTimeout(() => {
                        geofs.aircraft.instance.definition.minimumSpeed = 250;
                    }, 5000);
                }
            }, 500);
        }
        if (geofs.aircraft.instance.id == 2808 || geofs.aircraft.instance.id == 3460) {
            var pitch = geofs.animation.values.atilt;
            setTimeout(() => {
                if (geofs.animation.values.atilt + 50 < pitch || geofs.animation.values.atilt - 50 > pitch) {
                    geofs.aircraft.instance.definition.minimumSpeed = 200;
                    console.log("Spin detected");
                    geofs.flyToCamera();
                    console.log("Spin fixed");
                    setTimeout(() => {
                        geofs.aircraft.instance.definition.minimumSpeed = 200;
                    }, 5000);
                }
            }, 500);
        }
        if (geofs.aircraft.instance.id == 2988) {
            var pitch = geofs.animation.values.atilt;
            setTimeout(() => {
                if (geofs.animation.values.atilt + 50 < pitch || geofs.animation.values.atilt - 50 > pitch) {
                    geofs.aircraft.instance.definition.minimumSpeed = 1000;
                    console.log("Spin detected");
                    geofs.flyToCamera();
                    console.log("Spin fixed");
                    setTimeout(() => {
                        geofs.aircraft.instance.definition.minimumSpeed = 250;
                    }, 5000);
                }
            }, 500);
        }
    }
    fixyFixy = setInterval(function () {
        fixSpin();
    }, 1000);
