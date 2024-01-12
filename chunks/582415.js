            "use strict";
            n.r(t), n.d(t, {
                getStreamerActivity: function() {
                    return r
                },
                getStreamerApplication: function() {
                    return a
                }
            });
            var s = n("49111");

            function i(e) {
                return e.type === s.ActivityTypes.PLAYING
            }

            function r(e, t) {
                var n;
                return null != e ? (n = e.ownerId, t.findActivity(n, i)) : null
            }

            function a(e, t) {
                if (null == e) return null;
                let n = r(e, t);
                return null == n ? null : {
                    id: n.application_id,
                    name: n.name
                }
            }