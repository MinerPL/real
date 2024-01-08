            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("414456"),
                i = n.n(s),
                l = n("77078"),
                r = n("42203"),
                o = n("18494"),
                u = n("328275"),
                d = n("489622"),
                c = n("244480"),
                E = n("130563"),
                f = n("151642"),
                _ = n("782340"),
                h = n("779007");

            function C(e) {
                let t = o.default.getVoiceChannelId();
                if (null == t) return;
                let n = r.default.getChannel(t);
                null != n && (0, c.audienceAckRequestToSpeak)(n, e)
            }

            function I() {
                var e;
                let t = (0, E.default)(),
                    n = null !== (e = (0, f.useStageBlockedUsersCount)(null == t ? void 0 : t.id)) && void 0 !== e ? e : 0;
                return null == t ? null : (0, a.jsxs)(d.default, {
                    className: h.container,
                    color: d.NoticeColors.DEFAULT,
                    children: [(0, a.jsx)("div", {
                        children: _.default.Messages.STAGE_SPEAK_INVITE_HEADER
                    }), n > 0 ? (0, a.jsxs)("div", {
                        className: h.blocked,
                        children: [(0, a.jsx)(u.default, {
                            width: 12,
                            height: 12,
                            className: h.blockedIcon
                        }), (0, a.jsx)("div", {
                            className: h.blockedText,
                            children: _.default.Messages.STAGE_SPEAK_INVITE_HEADER_BLOCKED_USERS.format({
                                number: n
                            })
                        })]
                    }) : null, (0, a.jsx)(l.Button, {
                        className: i(h.button, h.acceptButton),
                        size: l.Button.Sizes.MIN,
                        color: l.Button.Colors.WHITE,
                        onClick: () => C(!1),
                        children: (0, a.jsx)(l.Text, {
                            className: h.acceptText,
                            variant: "text-xs/normal",
                            color: "none",
                            children: _.default.Messages.STAGE_SPEAK_INVITE_ACCEPT
                        })
                    }), (0, a.jsx)(l.Button, {
                        className: i(h.button, h.declineButton),
                        look: l.Button.Looks.OUTLINED,
                        size: l.Button.Sizes.MIN,
                        color: l.Button.Colors.WHITE,
                        onClick: () => C(!0),
                        children: (0, a.jsx)(l.Text, {
                            className: h.declineText,
                            variant: "text-xs/normal",
                            color: "none",
                            children: _.default.Messages.STAGE_SPEAK_INVITE_DECLINE
                        })
                    })]
                })
            }