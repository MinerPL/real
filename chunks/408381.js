            "use strict";
            l.r(t), l.d(t, {
                MAX_CONTENT_WIDTH: function() {
                    return s
                },
                getAssetSizeByHeight: function() {
                    return r
                },
                getLogoSize: function() {
                    return n
                },
                getBackgroundGradient: function() {
                    return o
                }
            });
            var a = l("547630");
            let s = 1060,
                r = e => e * (0, a.default)(),
                n = e => 3.8 * e,
                o = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 180,
                        {
                            primary: l,
                            secondary: a
                        } = e;
                    return "linear-gradient(".concat(t, "deg, ").concat(l.toHslString(), ", ").concat(a.toHslString(), ")")
                }