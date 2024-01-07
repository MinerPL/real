            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("414456"),
                l = n.n(a),
                s = n("414055"),
                r = n("486952"),
                u = n("988268"),
                o = n("782340"),
                d = n("647431");
            let c = e => {
                let t, {
                        invertColor: n = !1,
                        type: a = u.BotTagTypes.BOT,
                        className: c,
                        verified: _,
                        hideIcon: E = !1,
                        useRemSizes: f = !1,
                        children: h = []
                    } = e,
                    p = null,
                    T = o.default.Messages.VERIFIED_BOT_TOOLTIP;
                switch (a) {
                    case u.BotTagTypes.SYSTEM_DM:
                    case u.BotTagTypes.OFFICIAL:
                        _ = !0, T = o.default.Messages.DISCORD_SYSTEM_MESSAGE_BOT_TAG_TOOLTIP, p = o.default.Messages.SYSTEM_DM_TAG_SYSTEM;
                        break;
                    case u.BotTagTypes.SERVER:
                        p = o.default.Messages.BOT_TAG_SERVER;
                        break;
                    case u.BotTagTypes.ORIGINAL_POSTER:
                        p = o.default.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER;
                        break;
                    case u.BotTagTypes.STAFF_ONLY_DM:
                        p = o.default.Messages.STAFF_BADGE_TOOLTIP;
                        break;
                    case u.BotTagTypes.AI:
                        _ = !0, T = o.default.Messages.AI_GENERATED_TOOLTIP, p = o.default.Messages.AI_TAG;
                        break;
                    case u.BotTagTypes.REMIX:
                        _ = !1, p = o.default.Messages.REMIXING_TAG;
                        break;
                    case u.BotTagTypes.BOT:
                    default:
                        p = o.default.Messages.BOT_TAG_BOT
                }
                let C = a === u.BotTagTypes.ORIGINAL_POSTER,
                    m = a === u.BotTagTypes.REMIX,
                    S = null;
                _ && (S = (0, i.jsx)(s.Tooltip, {
                    text: T,
                    align: "center",
                    position: "top",
                    children: e => (0, i.jsx)(r.default, {
                        ...e,
                        className: d.botTagVerified
                    })
                })), t = a === u.BotTagTypes.AI ? d.botTagAI : n ? d.botTagInvert : d.botTagRegular;
                let I = e => (0, i.jsxs)("span", {
                    ...e,
                    className: l(c, t, f ? d.rem : d.px, {
                        [d.botTagOP]: C,
                        [d.botTagRemix]: m
                    }),
                    children: [E ? null : S, h, (0, i.jsx)("span", {
                        className: d.botText,
                        children: p
                    })]
                });
                switch (a) {
                    case u.BotTagTypes.REMIX:
                        return (0, i.jsx)(s.Tooltip, {
                            text: o.default.Messages.REMIXING_DOWNLOAD_APP,
                            position: "top",
                            children: e => I(e)
                        });
                    case u.BotTagTypes.ORIGINAL_POSTER:
                        return (0, i.jsx)(s.Tooltip, {
                            text: o.default.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER_TOOLTIP,
                            position: "top",
                            children: e => I(e)
                        });
                    default:
                        return I()
                }
            };
            c.Types = u.BotTagTypes;
            var _ = c