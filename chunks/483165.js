            "use strict";

            function r(e) {
                return Object.assign({}, e, {
                    left: e.x,
                    top: e.y,
                    right: e.x + e.width,
                    bottom: e.y + e.height
                })
            }
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            })