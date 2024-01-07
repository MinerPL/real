            "use strict";
            n.r(t), n.d(t, {
                replaceAnimationColors: function() {
                    return i
                },
                getBurstAnimationHash: function() {
                    return o
                }
            }), n("781738");
            var a, l = n("917351"),
                r = n("284679");
            (a || (a = {})).OUT_OF_BURSTS = "out of burst reactions modal";
            let i = (e, t) => {
                    let n = (0, r.getComplimentaryPaletteForColor)([t.r, t.g, t.b], 2);
                    return e = (e = e.replace(/(\[1,0,0,)/g, "[".concat(n[0][0] / 255, ",").concat(n[0][1] / 255, ",").concat(n[0][2] / 255, ","))).replace(/\[0,0,1,/g, "[".concat(n[1][0] / 255, ",").concat(n[1][1] / 255, ",").concat(n[1][2] / 255, ","))
                },
                o = (0, l.memoize)(e => {
                    let t = 0;
                    for (let n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n);
                    return Math.abs(t)
                })