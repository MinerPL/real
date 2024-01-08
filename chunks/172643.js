            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                l = n("77078"),
                i = n("619335"),
                r = n("680986"),
                o = n("430475"),
                u = n("121308"),
                d = n("660074"),
                c = n("172554"),
                f = n("782340"),
                h = n("851341");

            function C(e) {
                var t;
                let {
                    channel: n
                } = e, C = (0, r.useAppliedTags)(n), {
                    firstMessage: p
                } = (0, s.useStateFromStoresObject)([o.default], () => o.default.getMessage(n.id)), m = new Set((0, r.useVisibleAppliedForumTags)(n, C)), E = null !== (t = (0, i.default)(n)) && void 0 !== t ? t : d.default;
                return (0, a.jsxs)(c.default, {
                    channelId: n.id,
                    className: h.container,
                    children: [(0, a.jsx)("div", {
                        className: h.iconWrapper,
                        children: (0, a.jsx)(E, {
                            className: h.icon,
                            strokeWidth: 1.75
                        })
                    }), (0, a.jsx)(c.EmptyMessageHeader, {
                        className: h.header,
                        children: n.name
                    }), null == p && (0, a.jsx)(l.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: f.default.Messages.REPLY_QUOTE_MESSAGE_DELETED
                    }), (0, a.jsx)(u.default, {
                        appliedTags: m
                    })]
                })
            }