            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                s = n.n(r),
                a = n("446674"),
                o = n("405645"),
                u = n("692038"),
                d = n("815297"),
                c = n("291655"),
                f = n("697218"),
                E = n("387111"),
                _ = n("439932"),
                p = n("49111"),
                h = n("782340"),
                S = n("515476");

            function T(e) {
                var t;
                let {
                    guildId: n,
                    role: r,
                    theme: T,
                    content: m = h.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FLAIR_PREVIEW_MESSAGE_TEXT,
                    className: C
                } = e, M = (0, a.useStateFromStores)([f.default], () => f.default.getCurrentUser()), g = E.default.useName(n, null, M), v = (0, o.getRoleIconProps)(r), I = i.useMemo(() => (0, u.createMessageRecord)({
                    ...(0, d.default)({
                        channelId: "0",
                        content: m,
                        tts: void 0,
                        type: void 0,
                        messageReference: void 0,
                        allowedMentions: void 0,
                        author: M
                    }),
                    state: p.MessageStates.SENT,
                    id: "0"
                }), [M, m]), A = {
                    nick: g,
                    colorString: null !== (t = r.colorString) && void 0 !== t ? t : void 0
                };
                return (0, l.jsx)("div", {
                    className: s((0, _.getThemeClass)(T), S.container, C),
                    children: (0, l.jsx)(c.default, {
                        hideTimestamp: !0,
                        author: A,
                        roleIcon: v,
                        message: I,
                        isGroupStart: !0,
                        disableInteraction: !0
                    })
                })
            }