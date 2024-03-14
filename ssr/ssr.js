shaLoaded = 0
loadInterval = setInterval(function(){
	if (shaLoaded == 0 && geofs.fx.overg.shader) {
    var scriptSHA = document.createElement("script");
    scriptSHA.src = "https://raw.githack.com/Ariakim-Taiyo/GeoFS-Shaders-Repository/main/SSR/SSR.js";
    document.body.appendChild(scriptSHA);
    shaLoaded = 1
	}
}, 1000)
