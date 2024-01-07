            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var i = n("37983"),
                l = n("884691"),
                r = n("414456"),
                s = n.n(r),
                a = n("446674"),
                u = n("405645"),
                o = n("692038"),
                d = n("815297"),
                c = n("291655"),
                f = n("697218"),
                E = n("387111"),
                _ = n("439932"),
                p = n("49111"),
                h = n("782340"),
                S = n("515476");

            function m(e) {
                var t;
                let {
                    guildId: n,
                    role: r,
                    theme: m,
                    content: M = h.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FLAIR_PREVIEW_MESSAGE_TEXT,
                    className: L
                } = e, A = (0, a.useStateFromStores)([f.default], () => f.default.getCurrentUser()), C = E.default.useName(n, null, A), v = (0, u.getRoleIconProps)(r), g = l.useMemo(() => (0, o.createMessageRecord)({
                    ...(0, d.default)({
                        channelId: "0",
                        content: M,
                        tts: void 0,
                        type: void 0,
                        messageReference: void 0,
                        allowedMentions: void 0,
                        author: A
                    }),
                    state: p.MessageStates.SENT,
                    id: "0"
                }), [A, M]), T = {
                    nick: C,
                    colorString: null !== (t = r.colorString) && void 0 !== t ? t : void 0
                };
                return (0, i.jsx)("div", {
                    className: s((0, _.getThemeClass)(m), S.container, L),
                    children: (0, i.jsx)(c.default, {
                        hideTimestamp: !0,
                        author: T,
                        roleIcon: v,
                        message: g,
                        isGroupStart: !0,
                        disableInteraction: !0
                    })
                })
            }