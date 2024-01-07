            "use strict";
            n.r(t), n.d(t, {
                renderSystemTag: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("25116"),
                s = n("730541"),
                r = n("79798"),
                l = n("680894"),
                o = n("741566");

            function u(e) {
                let t, {
                    message: n,
                    channel: u,
                    user: c,
                    compact: d,
                    isRepliedMessage: m,
                    hideIcon: f = !1,
                    children: g
                } = e;
                return ((null == n ? void 0 : n.isSystemDM()) ? t = r.default.Types.SYSTEM_DM : null != n && (0, i.default)(n) ? t = (0, s.isPublicSystemMessage)(n) ? r.default.Types.OFFICIAL : r.default.Types.SERVER : (null == c ? void 0 : c.id) === l.CLYDE_AI_USER_ID ? t = r.default.Types.AI : (null == c ? void 0 : c.bot) ? t = r.default.Types.BOT : null != u && u.isForumPost() && u.ownerId === (null == c ? void 0 : c.id) && !m && (t = r.default.Types.ORIGINAL_POSTER), null == t) ? null : (0, a.jsx)(r.default, {
                    className: d ? o.botTagCompact : o.botTagCozy,
                    type: t,
                    verified: null == c ? void 0 : c.isVerifiedBot(),
                    hideIcon: f,
                    useRemSizes: !0,
                    children: g
                })
            }