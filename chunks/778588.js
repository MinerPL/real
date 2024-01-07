            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            }), n("222007");
            var i = n("446674"),
                a = n("913144");
            let l = [];

            function s() {
                l = []
            }
            class r extends i.default.Store {
                hasLayers() {
                    return l.length > 0
                }
                getLayers() {
                    return l
                }
            }
            r.displayName = "LayerStore";
            var u = new r(a.default, {
                LAYER_PUSH: function(e) {
                    let {
                        component: t
                    } = e;
                    if (l.indexOf(t) >= 0) return !1;
                    l = [...l, t]
                },
                LAYER_POP: function() {
                    if (0 === l.length) return !1;
                    l = l.slice(0, -1)
                },
                LAYER_POP_ALL: s,
                LOGOUT: s,
                NOTIFICATION_CLICK: s
            })