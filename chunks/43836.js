            "use strict";
            a.r(t), a.d(t, {
                useIsRecentMessageDeleted: function() {
                    return l
                }
            });
            var s = a("446674"),
                n = a("324261");

            function l(e) {
                var t;
                let {
                    loaded: a,
                    message: l
                } = (0, s.useStateFromStores)([n.default], () => n.default.getMessageState(e.id));
                return a && (null !== (t = e.messageCount) && void 0 !== t ? t : 0) > 0 && null == l
            }