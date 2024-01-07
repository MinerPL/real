            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("381784");

            function r(e) {
                let {
                    channel: t,
                    commands: n
                } = e, r = (0, i.default)({
                    channel: t,
                    commands: n,
                    limit: 5
                });
                return 0 === r.length ? null : (0, l.jsx)("li", {})
            }