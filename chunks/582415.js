            "use strict";
            n.r(t), n.d(t, {
                getStreamerActivity: function() {
                    return l
                },
                getStreamerApplication: function() {
                    return s
                }
            });
            var i = n("49111");

            function a(e) {
                return e.type === i.ActivityTypes.PLAYING
            }

            function l(e, t) {
                var n;
                return null != e ? (n = e.ownerId, t.findActivity(n, a)) : null
            }

            function s(e, t) {
                if (null == e) return null;
                let n = l(e, t);
                return null == n ? null : {
                    id: n.application_id,
                    name: n.name
                }
            }