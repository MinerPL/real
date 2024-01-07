            "use strict";
            n.r(t), n.d(t, {
                useNotificationCenterItemAcked: function() {
                    return i
                }
            });
            var l = n("446674"),
                a = n("204116"),
                s = n("342176");
            let i = (e, t) => {
                let n = (0, l.useStateFromStores)([a.default], () => a.default.isLocalItemAcked(e));
                return !e.forceUnacked && (n || (0, s.isRemoteAcked)(e, t))
            }