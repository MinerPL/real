            "use strict";
            n.r(t), n.d(t, {
                useSubscribeGuildMembers: function() {
                    return s
                }
            }), n("37983");
            var i = n("884691"),
                l = n("917351"),
                r = n.n(l);
            n("233736");
            var o = n("666020");

            function s(e) {
                i.useEffect(() => (r.forEach(e, (e, t) => (0, o.subscribeMembers)(t, e)), () => {
                    r.forEach(e, (e, t) => (0, o.unsubscribeMembers)(t, e))
                }), [e])
            }