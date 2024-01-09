            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                s = n("77078"),
                i = n("191145"),
                r = n("243288"),
                u = n("769928"),
                o = n("321135"),
                d = n("976074"),
                c = n("639537"),
                f = n("99795"),
                h = n("782340");

            function p(e) {
                let {
                    channelId: t,
                    onClose: n,
                    appContext: p,
                    exitFullScreen: m,
                    onSelect: E
                } = e, C = (0, l.useStateFromStores)([i.default], () => i.default.getSelectedParticipant(t)), S = (null == C ? void 0 : C.type) === f.ParticipantTypes.STREAM ? C.stream : null, g = (0, r.default)(t), _ = (0, o.default)(), I = (0, u.default)(t), T = (0, c.default)(t);
                return (0, a.jsxs)(s.Menu, {
                    navId: "channel-call-overflow-popout",
                    onClose: n,
                    "aria-label": h.default.Messages.CHANNEL_CALL_OVERFLOW_MENU_LABEL,
                    onSelect: E,
                    children: [g, _, I, T, (0, d.default)(S, p, m)]
                })
            }