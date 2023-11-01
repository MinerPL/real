(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["5456"], {
        437150: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useGuildFeedHideItem: function() {
                    return G
                },
                useGuildFeedRemoveItem: function() {
                    return C
                },
                targetToContext: function() {
                    return p
                },
                default: function() {
                    return S
                }
            });
            var o = n("37983");
            n("884691");
            var r = n("118810"),
                u = n("65597"),
                l = n("77078"),
                a = n("272030"),
                s = n("861370"),
                d = n("126423"),
                i = n("518155"),
                E = n("447651"),
                f = n("26051"),
                c = n("271938"),
                M = n("957255"),
                _ = n("867544"),
                m = n("399699"),
                I = n("713810"),
                h = n("49111"),
                g = n("782340");

            function G(e, t) {
                return (0, o.jsx)(l.MenuItem, {
                    id: "hide-feed-message",
                    label: g.default.Messages.GUILD_FEED_HIDE_MESSAGE_ITEM,
                    action: n => (n.stopPropagation(), (0, I.hideItemFromGuildFeed)(e, t)),
                    icon: _.default,
                    iconProps: {
                        foregroundColor: "currentColor"
                    }
                })
            }

            function C(e, t, n) {
                let r = (0, u.default)([c.default], () => c.default.getId()),
                    a = (0, u.default)([M.default], () => M.default.can(h.Permissions.MANAGE_MESSAGES, n), [n]),
                    s = t.author.id === r || a;
                return s ? (0, o.jsx)(l.MenuItem, {
                    id: "remove-feed-message",
                    label: g.default.Messages.GUILD_FEED_REMOVE_MESSAGE_ITEM,
                    action: t => {
                        t.stopPropagation();
                        let n = !0;
                        return t.shiftKey && (n = !1),
                            function(e, t) {
                                if (!t) {
                                    (0, I.removeItemFromGuildFeed)(e);
                                    return
                                }(0, l.openModal)(t => (0, o.jsx)(l.ConfirmModal, {
                                    header: g.default.Messages.GUILD_FEED_REMOVE_MESSAGE_ITEM_HEADER,
                                    confirmText: g.default.Messages.GUILD_FEED_REMOVE_CONFIRM,
                                    cancelText: g.default.Messages.CANCEL,
                                    onConfirm: () => (0, I.removeItemFromGuildFeed)(e),
                                    ...t,
                                    children: (0, o.jsx)(l.Text, {
                                        variant: "text-md/normal",
                                        children: g.default.Messages.GUILD_FEED_REMOVE_MESSAGE_ITEM_CONFIRM_TEXT
                                    })
                                }))
                            }(e, n)
                    },
                    icon: m.default,
                    iconProps: {
                        foregroundColor: "currentColor"
                    }
                }) : null
            }

            function p(e) {
                let t, n, o, u = e;
                for (;
                    (0, r.isElement)(u, Node);)(0, r.isElement)(u, HTMLImageElement) && null != u.src && (n = u.src), (0, r.isElement)(u, HTMLAnchorElement) && null != u.href && (t = u.href, o = u.textContent), u = u.parentNode;
                return {
                    href: t,
                    src: n,
                    textContent: o
                }
            }

            function S(e) {
                let {
                    channel: t,
                    message: n,
                    messageItem: r,
                    target: u,
                    onSelect: c
                } = e, {
                    href: M,
                    src: _,
                    textContent: m
                } = p(u), I = (0, i.default)(n, t), h = (0, f.default)(null != M ? M : _, m), S = (0, E.default)(_), F = (0, s.default)({
                    id: n.id,
                    label: g.default.Messages.COPY_ID_MESSAGE,
                    shiftId: "".concat(n.channel_id, "-").concat(n.id)
                }), x = G(r, t.guild_id), A = C(r, r.message, t), D = (0, d.default)(n, t, {
                    hoist: !1
                });
                return (0, o.jsxs)(l.Menu, {
                    navId: "message",
                    onClose: a.closeContextMenu,
                    "aria-label": g.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
                    onSelect: c,
                    children: [(0, o.jsxs)(l.MenuGroup, {
                        children: [x, A, D]
                    }), (0, o.jsxs)(l.MenuGroup, {
                        children: [I, S, h, F]
                    })]
                })
            }
        }
    }
]);