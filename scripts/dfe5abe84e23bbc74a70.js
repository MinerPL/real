(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["66769"], {
        814781: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return M
                }
            });
            var n = s("37983");
            s("884691");
            var u = s("611221"),
                a = s("77078"),
                r = s("272030"),
                d = s("861370"),
                l = s("518155"),
                o = s("447651"),
                i = s("26051"),
                c = s("449008"),
                E = s("437150"),
                f = s("782340");

            function M(e) {
                let {
                    channel: t,
                    item: s,
                    target: M,
                    onSelect: m
                } = e, _ = function(e) {
                    switch (e.type) {
                        case u.GuildFeedItemTypes.MESSAGE_BUNDLE:
                            return e.messages[0].message;
                        case u.GuildFeedItemTypes.CONVERSATION:
                            return e.root.messages[0];
                        default:
                            (0, c.assertNever)(e)
                    }
                }(s), I = function(e) {
                    switch (e.type) {
                        case u.GuildFeedItemTypes.MESSAGE_BUNDLE:
                            return e.messages[e.messages.length - 1].message;
                        case u.GuildFeedItemTypes.CONVERSATION:
                            return e.root.messages[e.root.messages.length - 1];
                        default:
                            (0, c.assertNever)(e)
                    }
                }(s), {
                    href: g,
                    src: G,
                    textContent: h
                } = (0, E.targetToContext)(M), S = (0, l.default)(_, t), p = (0, i.default)(null != g ? g : G, h), C = (0, o.default)(G), A = (0, d.default)({
                    id: I.id,
                    label: f.default.Messages.COPY_ID_MESSAGE,
                    shiftId: "".concat(t.id, "-").concat(I.id)
                }), F = (0, E.useGuildFeedHideItem)(s, t.guild_id), T = (0, E.useGuildFeedRemoveItem)(s, I, t);
                return (0, n.jsxs)(a.Menu, {
                    navId: "message",
                    onClose: r.closeContextMenu,
                    "aria-label": f.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
                    onSelect: m,
                    children: [(0, n.jsxs)(a.MenuGroup, {
                        children: [F, T]
                    }), (0, n.jsxs)(a.MenuGroup, {
                        children: [S, C, p, A]
                    })]
                })
            }
        },
        437150: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                useGuildFeedHideItem: function() {
                    return h
                },
                useGuildFeedRemoveItem: function() {
                    return S
                },
                targetToContext: function() {
                    return p
                },
                default: function() {
                    return C
                }
            });
            var n = s("37983");
            s("884691");
            var u = s("118810"),
                a = s("65597"),
                r = s("77078"),
                d = s("272030"),
                l = s("861370"),
                o = s("126423"),
                i = s("518155"),
                c = s("447651"),
                E = s("26051"),
                f = s("271938"),
                M = s("957255"),
                m = s("867544"),
                _ = s("399699"),
                I = s("713810"),
                g = s("49111"),
                G = s("782340");

            function h(e, t) {
                return (0, n.jsx)(r.MenuItem, {
                    id: "hide-feed-message",
                    label: G.default.Messages.GUILD_FEED_HIDE_MESSAGE_ITEM,
                    action: s => (s.stopPropagation(), (0, I.hideItemFromGuildFeed)(e, t)),
                    icon: m.default,
                    iconProps: {
                        foregroundColor: "currentColor"
                    }
                })
            }

            function S(e, t, s) {
                let u = (0, a.default)([f.default], () => f.default.getId()),
                    d = (0, a.default)([M.default], () => M.default.can(g.Permissions.MANAGE_MESSAGES, s), [s]),
                    l = t.author.id === u || d;
                return l ? (0, n.jsx)(r.MenuItem, {
                    id: "remove-feed-message",
                    label: G.default.Messages.GUILD_FEED_REMOVE_MESSAGE_ITEM,
                    action: t => {
                        t.stopPropagation();
                        let s = !0;
                        return t.shiftKey && (s = !1),
                            function(e, t) {
                                if (!t) {
                                    (0, I.removeItemFromGuildFeed)(e);
                                    return
                                }(0, r.openModal)(t => (0, n.jsx)(r.ConfirmModal, {
                                    header: G.default.Messages.GUILD_FEED_REMOVE_MESSAGE_ITEM_HEADER,
                                    confirmText: G.default.Messages.GUILD_FEED_REMOVE_CONFIRM,
                                    cancelText: G.default.Messages.CANCEL,
                                    onConfirm: () => (0, I.removeItemFromGuildFeed)(e),
                                    ...t,
                                    children: (0, n.jsx)(r.Text, {
                                        variant: "text-md/normal",
                                        children: G.default.Messages.GUILD_FEED_REMOVE_MESSAGE_ITEM_CONFIRM_TEXT
                                    })
                                }))
                            }(e, s)
                    },
                    icon: _.default,
                    iconProps: {
                        foregroundColor: "currentColor"
                    }
                }) : null
            }

            function p(e) {
                let t, s, n, a = e;
                for (;
                    (0, u.isElement)(a, Node);)(0, u.isElement)(a, HTMLImageElement) && null != a.src && (s = a.src), (0, u.isElement)(a, HTMLAnchorElement) && null != a.href && (t = a.href, n = a.textContent), a = a.parentNode;
                return {
                    href: t,
                    src: s,
                    textContent: n
                }
            }

            function C(e) {
                let {
                    channel: t,
                    message: s,
                    messageItem: u,
                    target: a,
                    onSelect: f
                } = e, {
                    href: M,
                    src: m,
                    textContent: _
                } = p(a), I = (0, i.default)(s, t), g = (0, E.default)(null != M ? M : m, _), C = (0, c.default)(m), A = (0, l.default)({
                    id: s.id,
                    label: G.default.Messages.COPY_ID_MESSAGE,
                    shiftId: "".concat(s.channel_id, "-").concat(s.id)
                }), F = h(u, t.guild_id), T = S(u, u.message, t), x = (0, o.default)(s, t, {
                    hoist: !1
                });
                return (0, n.jsxs)(r.Menu, {
                    navId: "message",
                    onClose: d.closeContextMenu,
                    "aria-label": G.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
                    onSelect: f,
                    children: [(0, n.jsxs)(r.MenuGroup, {
                        children: [F, T, x]
                    }), (0, n.jsxs)(r.MenuGroup, {
                        children: [I, C, g, A]
                    })]
                })
            }
        }
    }
]);