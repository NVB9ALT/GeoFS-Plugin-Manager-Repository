    instruments.renderers.genericHUD = function (a) {
            var b = exponentialSmoothing("smoothKias", geofs.animation.getValue("kias"), 0.1),
                c = [256, 256],
                d = a.canvasAPI.context;
            a.canvasAPI.clear();
            d.fillStyle = "#00ff00";
            d.strokeStyle = "#00ff00";
            d.save();
            d.beginPath();
            d.arc(c[0], c[1], 200, 0, 6.28);
            d.clip();
            a.drawGrads(a.canvasAPI, {
                position: c,
                center: [100, 100],
                zero: [100, 100],
                size: [200, 200],
                orientation: "y",
                direction: -1,
                rotation: geofs.animation.getValue("aroll") * DEGREES_TO_RAD,
                value: -geofs.animation.getValue("atilt"),
                interval: 5,
                pixelRatio: 20,
                pattern: [
                    [
                        {
                            length: 40,
                            offset: { x: -50, y: 0 },
                            legend: !0,
                            legendOffset: { x: -80, y: 5 },
                            process: function (e) {
                                return Math.round(e);
                            },
                        },
                        {
                            length: 40,
                            offset: { x: 10, y: 0 },
                            legend: !0,
                            legendOffset: { x: 60, y: 5 },
                            process: function (e) {
                                return Math.round(e);
                            },
                        },
                    ],
                ],
            });
            d.restore();
            a.canvasAPI.drawRotatedSprite({ image: a.images.overlays, origin: [248, 0], size: [36, 28], center: [18, 210], destination: [256, 256], rotation: geofs.animation.getValue("aroll") * DEGREES_TO_RAD, translation: [0, 0] });
            d.drawImage(a.images.background, 0, 0);
            a.canvasAPI.drawSprite({
                image: a.images.overlays,
                origin: [230, 239],
                size: [51, 30],
                center: [26, 15],
                destination: c,
                    //, clamp(100 * geofs.calculatedAOA, -150, 150)
                translation: [clamp(6.5 * geofs.animation.getValue("NAV1CourseDeviation"), -75, 75), clamp(300 * geofs.calculatedAOA, -250, 250)],
            });
            d.lineWidth = 2;
            d.font = "20px sans-serif";
            d.textAlign = "right";
            d.save();
            d.beginPath();
            d.rect(84, 116, 70, 280);
            d.rect(68, 243, 75, 25);
            d.clip("evenodd");
            a.drawGrads(a.canvasAPI, {
                position: [104, 116],
                zero: [0, 140],
                size: [50, 280],
                orientation: "y",
                direction: -1,
                value: b,
                interval: 10,
                pixelRatio: 1.3,
                align: "right",
                pattern: [
                    [{ length: -10, legend: !0, legendOffset: { x: -14, y: 7 } }],
                    [{ length: -7 }],
                    [{ length: -7 }],
                    [{ length: -7 }],
                    [{ length: -7 }],
                    [{ length: -10 }],
                    [{ length: -7 }],
                    [{ length: -7 }],
                    [{ length: -7 }],
                    [{ length: -7 }],
                ],
                sprites: [{ image: a.images.overlays, origin: [143, 0], size: [25, 27], center: [-8, 13], value: geofs.autopilot.values.speed, clamp: !0 }],
            });
            d.restore();
            d.save();
            d.beginPath();
            d.rect(358, 116, 47, 280);
            d.rect(368, 243, 75, 25);
            d.clip("evenodd");
            a.drawGrads(a.canvasAPI, {
                position: [358, 116],
                zero: [0, 140],
                size: [47, 280],
                orientation: "y",
                direction: -1,
                value: geofs.animation.getValue("altitude"),
                interval: 100,
                pixelRatio: 0.13,
                pattern: [
                    [
                        {
                            length: 10,
                            legend: !0,
                            legendOffset: { x: 47, y: 7 },
                            process: function (e) {
                                return Math.round(e / 100);
                            },
                        },
                    ],
                    [{ length: 7 }],
                    [{ length: 7 }],
                    [{ length: 7 }],
                    [{ length: 7 }],
                ],
                sprites: [
                    { image: a.images.overlays, origin: [223, 0], size: [25, 62], center: [5, 31], value: geofs.autopilot.values.altitude, clamp: !0 },
                    { image: a.images.overlays, origin: [383, 0], size: [42, 255], center: [0, 0], value: geofs.animation.values.haglFeet },
                ],
            });
            d.restore();
            d.save();
            d.beginPath();
            d.rect(173, 440, 165, 30);
            d.clip("evenodd");
            d.textAlign = "center";
            a.drawGrads(a.canvasAPI, {
                position: [173, 440],
                zero: [82, 0],
                size: [165, 30],
                orientation: "x",
                direction: 1,
                value: geofs.animation.getValue("heading360"),
                interval: 5,
                pixelRatio: 7.25,
                pattern: [
                    [
                        {
                            length: 10,
                            legend: !0,
                            legendOffset: { x: 0, y: 30 },
                            process: function (e) {
                                return Math.round(fixAngle360(e) / 10);
                            },
                        },
                    ],
                    [{ length: 5 }],
                ],
            });
            d.restore();
            d.font = "20px sans-serif";
            d.textAlign = "right";
            d.fillText(Math.round(geofs.animation.getValue("kias")), 129, 264);
            d.fillText(Math.round(geofs.animation.getValue("altitude")), 441, 264);
            d.fillText(Math.round(geofs.calculatedAOA), 410, 426);
            d.fillText("M " + geofs.animation.getValue("mach").toFixed(2), 150, 425);
            c = b = a = "";
            geofs.autopilot.on && ((a = "SPD"), "NAV" == geofs.autopilot.mode ? ((b = "NAV"), geofs.autopilot.VNAV ? ((b = "LOC"), (c = "G/S")) : (c = "ALT")) : ((b = "HDG"), (c = "ALT")));
            d.fillText(a, 143, 446);
            d.fillText(c, 143, 466);
            d.fillText(b, 143, 486);
            d.textAlign = "left";
            d.fillText("G " + geofs.animation.getValue("loadFactor").toFixed(1), 143, 110);
        }
