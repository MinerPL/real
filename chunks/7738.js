            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            }), l("222007");
            var n = l("773356"),
                a = l("686298");

            function s(e, t, l) {
                let s = a.ApplicationStreamPresetValues[e];
                for (let a of s)
                    if ((0, n.default)(e, a.resolution, a.fps, t, l)) return [a.resolution, a.fps];
                return null
            }