            "use strict";
            n.r(t), n.d(t, {
                ZOOM_IN: function() {
                    return d
                },
                ZOOM_OUT: function() {
                    return u
                },
                ZOOM_RESET: function() {
                    return s
                },
                default: function() {
                    return E
                }
            });
            var i = n("180748"),
                o = n("206230"),
                l = n("49111");

            function a(e) {
                return l.Accessibility.ZOOM_SCALES[Math.max(0, Math.min(l.Accessibility.ZOOM_SCALES.indexOf(o.default.zoom) + e, l.Accessibility.ZOOM_SCALES.length - 1))]
            }
            let d = {
                    binds: ["mod+plus"],
                    comboKeysBindGlobal: !0,
                    action: () => ((0, i.setZoom)(a(1)), !1)
                },
                u = {
                    binds: ["mod+minus"],
                    comboKeysBindGlobal: !0,
                    action: () => ((0, i.setZoom)(a(-1)), !1)
                },
                s = {
                    binds: ["mod+0"],
                    comboKeysBindGlobal: !0,
                    action: () => ((0, i.setZoom)(l.Accessibility.ZOOM_DEFAULT), !1)
                };
            var E = {
                ZOOM_IN: d,
                ZOOM_OUT: u,
                ZOOM_RESET: s
            }