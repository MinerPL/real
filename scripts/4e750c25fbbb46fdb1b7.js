(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["74749"], {
        454e3: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return r
                }
            });
            var u = t("37983");
            t("884691");
            var l = t("77078"),
                o = t("272030"),
                a = t("861370"),
                i = t("818059"),
                c = t("782340");

            function r(e) {
                let {
                    channel: n,
                    channelId: t,
                    originalLink: r,
                    messageId: s,
                    onSelect: d
                } = e, f = (0, i.default)(n, r, s), p = (0, a.default)({
                    id: t,
                    label: c.default.Messages.COPY_ID_CHANNEL
                });
                return (0, u.jsxs)(l.Menu, {
                    navId: "channel-mention-context",
                    onClose: o.closeContextMenu,
                    onSelect: d,
                    "aria-label": c.default.Messages.CHANNEL_MENTION_ACTIONS_MENU_LABEL,
                    children: [(0, u.jsx)(l.MenuGroup, {
                        children: f
                    }, "channel-mention-actions"), (0, u.jsx)(l.MenuGroup, {
                        children: p
                    }, "developer-actions")]
                })
            }
        },
        458574: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return f
                }
            });
            var u = t("37983");
            t("884691");
            var l = t("281071"),
                o = t("65597"),
                a = t("77078"),
                i = t("867965"),
                c = t("42203"),
                r = t("404008"),
                s = t("49111"),
                d = t("782340");

            function f(e, n, t) {
                let f = (0, o.default)([c.default], () => c.default.getChannel(e.parent_id));
                return (0, u.jsx)(a.MenuItem, {
                    id: "channel-copy-link",
                    label: d.default.Messages.COPY_LINK,
                    action: () => {
                        e.isForumPost() && (0, i.trackForumPostLinkCopied)({
                            postId: e.id,
                            location: {
                                section: s.AnalyticsSections.CONTEXT_MENU
                            }
                        }), (0, l.copy)((0, r.getChannelLinkToCopy)(e, f, n, t))
                    }
                })
            }
        },
        818059: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return c
                }
            });
            var u = t("37983");
            t("884691");
            var l = t("281071"),
                o = t("77078"),
                a = t("458574"),
                i = t("782340");

            function c(e, n, t) {
                return null != e ? (0, a.default)(e, t, n) : (0, u.jsx)(o.MenuItem, {
                    id: "channel-copy-link",
                    label: i.default.Messages.COPY_LINK,
                    action: () => {
                        (0, l.copy)(null != n ? n : "")
                    }
                })
            }
        },
        861370: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return c
                }
            });
            var u = t("37983");
            t("884691");
            var l = t("77078"),
                o = t("845579"),
                a = t("662255"),
                i = t("306160");

            function c(e) {
                let {
                    id: n,
                    label: t,
                    onSuccess: c,
                    shiftId: r,
                    showIconFirst: s
                } = e, d = o.DeveloperMode.useSetting();
                if (__OVERLAY__ || !d || !i.SUPPORTS_COPY) return null;
                let f = "devmode-copy-id-".concat(n);
                return (0, u.jsx)(l.MenuItem, {
                    id: f,
                    label: t,
                    action: function(e) {
                        let t = null != r && e.shiftKey ? r : n;
                        (0, i.copy)(t), null == c || c()
                    },
                    icon: a.default,
                    showIconFirst: s
                }, f)
            }
        }
    }
]);