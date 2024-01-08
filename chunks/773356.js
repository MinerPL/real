            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("222007");
            var a = n("294707"),
                s = n("686298");

            function r(e, t, n, r, i) {
                for (let l of s.ApplicationStreamSettingRequirements)
                    if ((null == l.preset || e === l.preset) && t === l.resolution && n === l.fps && (0, a.default)(l, r, i)) return !0;
                return !1
            }