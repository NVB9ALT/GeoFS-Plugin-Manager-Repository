    function lookBack() {
        if (geofs.camera.currentModeName == "cockpit" && geofsAddonAircraft.isF117 != 1) {
            geofs.camera.currentDefinition.position[0] = geofs.aircraft.instance.definition.cameras.cockpit.position[0] + geofs.camera.definitions["cockpit"].orientations.current[0] / 1000;
        }
    }
    lookBackInterval = setInterval(function () {
        lookBack();
    }, 100);
