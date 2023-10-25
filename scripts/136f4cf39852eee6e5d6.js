(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["66769"], {
        88885: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HomeSlashIcon: function() {
                    return r
                }
            });
            var s = n("920040");
            n("773670");
            var l = n("912557"),
                a = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...d
                } = e;
                return (0, s.jsx)("svg", {
                    ...(0, a.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M22.707 2.707a1 1 0 0 0-1.414-1.414l-20 20a1 1 0 1 0 1.414 1.414l20-20Zm-7.202.99a.5.5 0 0 1 .049.75L4.655 15.344a.5.5 0 0 1-.85-.304l-.272-2.712a.457.457 0 0 0-.355-.4C1.52 11.56 1.047 9.425 2.392 8.39l8.389-6.453a2 2 0 0 1 2.438 0l2.286 1.758ZM6.31 22c-.12 0-.169-.141-.084-.226l1.92-1.92a.5.5 0 0 1 .854.353V21a1 1 0 0 1-1 1H6.31Zm8.165-8.475c-.195.195-.191.51-.031.735.35.49.556 1.091.556 1.74v5a1 1 0 0 0 1 1h1.69a2 2 0 0 0 1.99-1.8l.787-7.871a.457.457 0 0 1 .355-.4c1.657-.369 2.131-2.503.786-3.538l-.782-.602a.5.5 0 0 0-.658.043l-5.693 5.693Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        814781: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var s = n("920040");
            n("773670");
            var l = n("402924"),
                a = n("77078"),
                r = n("272030"),
                u = n("861370"),
                d = n("522778"),
                o = n("447651"),
                i = n("26051"),
                c = n("449008"),
                f = n("437150"),
                E = n("782340");

            function M(e) {
                let {
                    channel: t,
                    item: n,
                    target: M,
                    onSelect: m
                } = e, h = function(e) {
                    switch (e.type) {
                        case l.GuildFeedItemTypes.MESSAGE_BUNDLE:
                            return e.messages[0].message;
                        case l.GuildFeedItemTypes.CONVERSATION:
                            return e.root.messages[0];
                        default:
                            (0, c.assertNever)(e)
                    }
                }(n), g = function(e) {
                    switch (e.type) {
                        case l.GuildFeedItemTypes.MESSAGE_BUNDLE:
                            return e.messages[e.messages.length - 1].message;
                        case l.GuildFeedItemTypes.CONVERSATION:
                            return e.root.messages[e.root.messages.length - 1];
                        default:
                            (0, c.assertNever)(e)
                    }
                }(n), {
                    href: I,
                    src: _,
                    textContent: C
                } = (0, f.targetToContext)(M), p = (0, d.default)(h, t), G = (0, i.default)(null != I ? I : _, C), S = (0, o.default)(_), v = (0, u.default)({
                    id: g.id,
                    label: E.default.Messages.COPY_ID_MESSAGE,
                    shiftId: "".concat(t.id, "-").concat(g.id)
                }), x = (0, f.useGuildFeedHideItem)(n, t.guild_id), L = (0, f.useGuildFeedRemoveItem)(n, g, t);
                return (0, s.jsxs)(a.Menu, {
                    navId: "message",
                    onClose: r.closeContextMenu,
                    "aria-label": E.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
                    onSelect: m,
                    children: [(0, s.jsxs)(a.MenuGroup, {
                        children: [x, L]
                    }), (0, s.jsxs)(a.MenuGroup, {
                        children: [p, S, G, v]
                    })]
                })
            }
        },
        437150: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useGuildFeedHideItem: function() {
                    return C
                },
                useGuildFeedRemoveItem: function() {
                    return p
                },
                targetToContext: function() {
                    return G
                },
                default: function() {
                    return S
                }
            });
            var s = n("920040");
            n("773670");
            var l = n("117064"),
                a = n("744196"),
                r = n("77078"),
                u = n("272030"),
                d = n("861370"),
                o = n("126423"),
                i = n("522778"),
                c = n("447651"),
                f = n("26051"),
                E = n("271938"),
                M = n("957255"),
                m = n("867544"),
                h = n("399699"),
                g = n("713810"),
                I = n("49111"),
                _ = n("782340");

            function C(e, t) {
                return (0, s.jsx)(r.MenuItem, {
                    id: "hide-feed-message",
                    label: _.default.Messages.GUILD_FEED_HIDE_MESSAGE_ITEM,
                    action: n => (n.stopPropagation(), (0, g.hideItemFromGuildFeed)(e, t)),
                    icon: m.default,
                    iconProps: {
                        foregroundColor: "currentColor"
                    }
                })
            }

            function p(e, t, n) {
                let l = (0, a.default)([E.default], () => E.default.getId()),
                    u = (0, a.default)([M.default], () => M.default.can(I.Permissions.MANAGE_MESSAGES, n), [n]),
                    d = t.author.id === l || u;
                return d ? (0, s.jsx)(r.MenuItem, {
                    id: "remove-feed-message",
                    label: _.default.Messages.GUILD_FEED_REMOVE_MESSAGE_ITEM,
                    action: t => {
                        t.stopPropagation();
                        let n = !0;
                        return t.shiftKey && (n = !1),
                            function(e, t) {
                                if (!t) {
                                    (0, g.removeItemFromGuildFeed)(e);
                                    return
                                }(0, r.openModal)(t => (0, s.jsx)(r.ConfirmModal, {
                                    header: _.default.Messages.GUILD_FEED_REMOVE_MESSAGE_ITEM_HEADER,
                                    confirmText: _.default.Messages.GUILD_FEED_REMOVE_CONFIRM,
                                    cancelText: _.default.Messages.CANCEL,
                                    onConfirm: () => (0, g.removeItemFromGuildFeed)(e),
                                    ...t,
                                    children: (0, s.jsx)(r.Text, {
                                        variant: "text-md/normal",
                                        children: _.default.Messages.GUILD_FEED_REMOVE_MESSAGE_ITEM_CONFIRM_TEXT
                                    })
                                }))
                            }(e, n)
                    },
                    icon: h.default,
                    iconProps: {
                        foregroundColor: "currentColor"
                    }
                }) : null
            }

            function G(e) {
                let t, n, s, a = e;
                for (;
                    (0, l.isElement)(a, Node);)(0, l.isElement)(a, HTMLImageElement) && null != a.src && (n = a.src), (0, l.isElement)(a, HTMLAnchorElement) && null != a.href && (t = a.href, s = a.textContent), a = a.parentNode;
                return {
                    href: t,
                    src: n,
                    textContent: s
                }
            }

            function S(e) {
                let {
                    channel: t,
                    message: n,
                    messageItem: l,
                    target: a,
                    onSelect: E
                } = e, {
                    href: M,
                    src: m,
                    textContent: h
                } = G(a), g = (0, i.default)(n, t), I = (0, f.default)(null != M ? M : m, h), S = (0, c.default)(m), v = (0, d.default)({
                    id: n.id,
                    label: _.default.Messages.COPY_ID_MESSAGE,
                    shiftId: "".concat(n.channel_id, "-").concat(n.id)
                }), x = C(l, t.guild_id), L = p(l, l.message, t), A = (0, o.default)(n, t, {
                    hoist: !1
                });
                return (0, s.jsxs)(r.Menu, {
                    navId: "message",
                    onClose: u.closeContextMenu,
                    "aria-label": _.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
                    onSelect: E,
                    children: [(0, s.jsxs)(r.MenuGroup, {
                        children: [x, L, A]
                    }), (0, s.jsxs)(r.MenuGroup, {
                        children: [g, S, I, v]
                    })]
                })
            }
        },
        399699: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var s = n("920040");
            n("773670");
            var l = n("469563"),
                a = n("88885"),
                r = n("75196"),
                u = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: a,
                        ...u
                    } = e;
                    return (0, s.jsxs)("svg", {
                        ...(0, r.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: [(0, s.jsx)("rect", {
                            className: a,
                            x: "2.10049",
                            y: "20.4853",
                            width: "26",
                            height: "2",
                            transform: "rotate(-45 2.10049 20.4853)",
                            fill: l
                        }), (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14.169 5.60117L12.5325 4.12835C12.3424 3.95722 12.0537 3.95722 11.8635 4.12835L3.16652 11.9557C2.82591 12.2622 3.04276 12.8273 3.50101 12.8273H5.19803V14.5721L14.169 5.60117ZM5.19803 17.4005L15.6576 6.94095L17.1384 8.27369L10.5848 14.8273H10.198V15.2141L5.25403 20.1581C5.21775 20.0546 5.19803 19.9432 5.19803 19.8273V17.4005ZM7.41324 20.8273H9.19803C9.75031 20.8273 10.198 20.3796 10.198 19.8273V18.0425L7.41324 20.8273ZM13.4132 14.8273H14.198V19.8273C14.198 20.3796 14.6457 20.8273 15.198 20.8273H18.198C18.7503 20.8273 19.198 20.3796 19.198 19.8273V12.8273H20.895C21.3533 12.8273 21.5701 12.2622 21.2295 11.9557L18.6271 9.61347L13.4132 14.8273Z",
                            fill: l
                        })]
                    })
                }, a.HomeSlashIcon)
        }
    }
]);