            "use strict";
            n.r(t), n.d(t, {
                addPostConnectionCallback: function() {
                    return r
                }
            }), n("860677"), n("424973");
            var i = n("913144"),
                a = n("619443");
            let l = [];

            function s(e) {
                setImmediate(() => e())
            }

            function r(e) {
                a.default.isConnectedOrOverlay() ? s(e) : l.push(e)
            }
            i.default.subscribe("CONNECTION_OPEN", () => {
                l.forEach(e => s(e)), l = []
            })