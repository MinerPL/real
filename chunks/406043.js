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
            var i = n("446674"),
                l = n("26989"),
                u = n("697218"),
                o = n("509");

            function r(e) {
                let t = (0, i.useStateFromStores)([u.default], () => u.default.getCurrentUser());
                return d(null == t ? void 0 : t.id, e)
            }

            function a(e, t, n) {
                return null != t && null != e ? n.getMember(t, e) : null
            }

            function s(e) {
                var t;
                return [null !== (t = null == e ? void 0 : e.communicationDisabledUntil) && void 0 !== t ? t : null, (0, o.isMemberCommunicationDisabled)(e)]
            }

            function d(e, t) {
                let n = (0, i.useStateFromStores)([l.default], () => a(e, t, l.default), [t, e]);
                return s(n)
            }

            function c(e, t) {
                let n = a(e, t, l.default);
                return s(n)
            }