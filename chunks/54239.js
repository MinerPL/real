            "use strict";
            n.r(t), n.d(t, {
                pushLayer: function() {
                    return r
                },
                popLayer: function() {
                    return s
                },
                popAllLayers: function() {
                    return l
                }
            });
            var i = n("913144");

            function r(e) {
                i.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function s() {
                i.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function l() {
                i.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }