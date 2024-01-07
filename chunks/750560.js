            "use strict";
            n.r(t), n.d(t, {
                useSubscribeGuildMembers: function() {
                    return o
                }
            }), n("37983");
            var r = n("884691"),
                i = n("917351"),
                l = n.n(i);
            n("233736");
            var u = n("666020");

            function o(e) {
                r.useEffect(() => (l.forEach(e, (e, t) => (0, u.subscribeMembers)(t, e)), () => {
                    l.forEach(e, (e, t) => (0, u.unsubscribeMembers)(t, e))
                }), [e])
            }