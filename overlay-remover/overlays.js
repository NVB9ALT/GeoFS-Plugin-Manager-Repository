    function checkOverlays() {
    if (Object.values(geofs.runways.nearRunways)[0].icao == "VNLK") {
       void(0)
    } else {
    geofs.runways.setRunwayModelVisibility(0)
    }
    };checkOverlayInt = setInterval(function(){checkOverlays()},1000)
