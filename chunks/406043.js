            "use strict";
            n.r(t), n.d(t, {
                useCurrentUserCommunicationDisabled: function() {
                    return r
                },
                default: function() {
                    return d
                },
                userCommunicationDisabled: function() {
                    return c
                }
            });
            var l = n("446674"),
                i = n("26989"),
                a = n("697218"),
                s = n("509");

            function r(e) {
                let t = (0, l.useStateFromStores)([a.default], () => a.default.getCurrentUser());
                return d(null == t ? void 0 : t.id, e)
            }

            function u(e, t, n) {
                return null != t && null != e ? n.getMember(t, e) : null
            }

            function o(e) {
                var t;
                return [null !== (t = null == e ? void 0 : e.communicationDisabledUntil) && void 0 !== t ? t : null, (0, s.isMemberCommunicationDisabled)(e)]
            }

            function d(e, t) {
                let n = (0, l.useStateFromStores)([i.default], () => u(e, t, i.default), [t, e]);
                return o(n)
            }

            function c(e, t) {
                let n = u(e, t, i.default);
                return o(n)
            }