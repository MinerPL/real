            "use strict";
            n.r(t), n.d(t, {
                transitionToChannel: function() {
                    return u
                },
                transitionToPage: function() {
                    return o
                }
            });
            var s = n("77078"),
                i = n("255397"),
                a = n("406189"),
                l = n("393027"),
                r = n("49111");

            function u(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                !(0, s.hasAnyModalOpen)() && (n && a.default.channelListScrollTo(e, t), u && null != t && i.default.updateChatOpen(t, !0), l.default.getState().updatePath(r.Routes.CHANNEL(e, t)))
            }

            function o(e) {
                !(0, s.hasAnyModalOpen)() && l.default.getState().updatePath(e)
            }