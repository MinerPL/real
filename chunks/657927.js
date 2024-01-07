            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return _
                }
            });
            var s = a("37983");
            a("884691");
            var n = a("414456"),
                l = a.n(n),
                r = a("77078"),
                i = a("945330"),
                o = a("153769"),
                u = a("266926"),
                d = a("867965"),
                c = a("152637"),
                m = a("953371"),
                h = a("994428"),
                f = a("782340"),
                g = a("761953"),
                x = a("241558"),
                C = a("260177"),
                T = a("714358");

            function _(e) {
                let {
                    onDismiss: t
                } = e;
                return (0, s.jsxs)(r.Clickable, {
                    onClick: () => {
                        open(m.COMMUNITY_PORTAL_FORUM_PAGE), (0, d.trackForumHelperCardClicked)({
                            readGuideCta: !0
                        })
                    },
                    className: l(C.container, x.container, g.mainCard),
                    children: [(0, s.jsxs)("div", {
                        className: x.inline,
                        children: [(0, s.jsxs)("div", {
                            className: x.author,
                            children: [(0, s.jsx)(o.default, {
                                className: x.discordIcon
                            }), (0, s.jsx)(r.Text, {
                                variant: "text-sm/semibold",
                                color: "header-primary",
                                children: f.default.Messages.DISCORD_NAME
                            }), (0, s.jsxs)("div", {
                                className: x.notice,
                                children: [(0, s.jsx)(u.default, {
                                    className: x.infoIcon
                                }), (0, s.jsx)(r.Text, {
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    children: f.default.Messages.FORUM_HELPER_CARD_NOTICE
                                })]
                            })]
                        }), (0, s.jsx)(r.Clickable, {
                            onClick: e => {
                                e.stopPropagation(), t(h.ContentDismissActionType.DISMISS), (0, d.trackForumHelperCardClicked)({
                                    readGuideCta: !1
                                })
                            },
                            children: (0, s.jsx)(i.default, {
                                className: x.closeIcon,
                                width: 16,
                                height: 16
                            })
                        })]
                    }), (0, s.jsx)("hr", {
                        className: x.separator
                    }), (0, s.jsxs)("div", {
                        className: x.inline,
                        children: [(0, s.jsxs)("div", {
                            children: [(0, s.jsx)(r.Heading, {
                                className: l(C.channelName, x.title),
                                variant: "heading-lg/semibold",
                                color: "header-primary",
                                children: f.default.Messages.FORUM_HELPER_CARD_TITLE
                            }), (0, s.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: f.default.Messages.FORUM_HELPER_CARD_BODY
                            })]
                        }), (0, s.jsx)("img", {
                            src: T,
                            alt: f.default.Messages.FORUM_HELPER_CARD_ALT_TEXT,
                            width: c.MAX_THUMBNAIL_WIDTH,
                            height: c.MAX_THUMBNAIL_WIDTH
                        })]
                    })]
                })
            }