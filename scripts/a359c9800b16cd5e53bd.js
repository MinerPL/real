(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["5456"], {
        88885: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HomeSlashIcon: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("669491"),
                a = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...u
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, a.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M22.707 2.707a1 1 0 0 0-1.414-1.414l-20 20a1 1 0 1 0 1.414 1.414l20-20ZM15.505 3.696a.5.5 0 0 1 .049.75L4.655 15.345a.5.5 0 0 1-.85-.304l-.272-2.712a.456.456 0 0 0-.355-.4C1.52 11.56 1.047 9.425 2.392 8.39l8.389-6.453a2 2 0 0 1 2.438 0l2.286 1.758ZM6.31 22c-.12 0-.169-.141-.084-.226l1.92-1.92a.5.5 0 0 1 .854.353V21a1 1 0 0 1-1 1H6.31ZM14.475 13.525c-.195.195-.191.51-.031.735.35.49.556 1.091.556 1.74v5a1 1 0 0 0 1 1h1.69a2 2 0 0 0 1.99-1.801l.787-7.87a.456.456 0 0 1 .355-.4c1.657-.369 2.131-2.503.786-3.538l-.782-.602a.5.5 0 0 0-.658.043l-5.693 5.693Z",
                        className: s
                    })
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
                    return x
                },
                default: function() {
                    return L
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("118810"),
                a = n("65597"),
                o = n("77078"),
                s = n("272030"),
                u = n("861370"),
                d = n("126423"),
                i = n("518155"),
                c = n("447651"),
                f = n("26051"),
                E = n("271938"),
                M = n("957255"),
                h = n("867544"),
                m = n("399699"),
                _ = n("713810"),
                I = n("49111"),
                g = n("782340");

            function C(e, t) {
                return (0, l.jsx)(o.MenuItem, {
                    id: "hide-feed-message",
                    label: g.default.Messages.GUILD_FEED_HIDE_MESSAGE_ITEM,
                    action: n => (n.stopPropagation(), (0, _.hideItemFromGuildFeed)(e, t)),
                    icon: h.default,
                    iconProps: {
                        foregroundColor: "currentColor"
                    }
                })
            }

            function p(e, t, n) {
                let r = (0, a.default)([E.default], () => E.default.getId()),
                    s = (0, a.default)([M.default], () => M.default.can(I.Permissions.MANAGE_MESSAGES, n), [n]),
                    u = t.author.id === r || s;
                return u ? (0, l.jsx)(o.MenuItem, {
                    id: "remove-feed-message",
                    label: g.default.Messages.GUILD_FEED_REMOVE_MESSAGE_ITEM,
                    action: t => {
                        t.stopPropagation();
                        let n = !0;
                        return t.shiftKey && (n = !1),
                            function(e, t) {
                                if (!t) {
                                    (0, _.removeItemFromGuildFeed)(e);
                                    return
                                }(0, o.openModal)(t => (0, l.jsx)(o.ConfirmModal, {
                                    header: g.default.Messages.GUILD_FEED_REMOVE_MESSAGE_ITEM_HEADER,
                                    confirmText: g.default.Messages.GUILD_FEED_REMOVE_CONFIRM,
                                    cancelText: g.default.Messages.CANCEL,
                                    onConfirm: () => (0, _.removeItemFromGuildFeed)(e),
                                    ...t,
                                    children: (0, l.jsx)(o.Text, {
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

            function x(e) {
                let t, n, l, a = e;
                for (;
                    (0, r.isElement)(a, Node);)(0, r.isElement)(a, HTMLImageElement) && null != a.src && (n = a.src), (0, r.isElement)(a, HTMLAnchorElement) && null != a.href && (t = a.href, l = a.textContent), a = a.parentNode;
                return {
                    href: t,
                    src: n,
                    textContent: l
                }
            }

            function L(e) {
                let {
                    channel: t,
                    message: n,
                    messageItem: r,
                    target: a,
                    onSelect: E
                } = e, {
                    href: M,
                    src: h,
                    textContent: m
                } = x(a), _ = (0, i.default)(n, t), I = (0, f.default)(null != M ? M : h, m), L = (0, c.default)(h), v = (0, u.default)({
                    id: n.id,
                    label: g.default.Messages.COPY_ID_MESSAGE,
                    shiftId: "".concat(n.channel_id, "-").concat(n.id)
                }), G = C(r, t.guild_id), S = p(r, r.message, t), A = (0, d.default)(n, t, {
                    hoist: !1
                });
                return (0, l.jsxs)(o.Menu, {
                    navId: "message",
                    onClose: s.closeContextMenu,
                    "aria-label": g.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
                    onSelect: E,
                    children: [(0, l.jsxs)(o.MenuGroup, {
                        children: [G, S, A]
                    }), (0, l.jsxs)(o.MenuGroup, {
                        children: [_, L, I, v]
                    })]
                })
            }
        },
        399699: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("469563"),
                a = n("88885"),
                o = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: a,
                        ...s
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, o.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: [(0, l.jsx)("rect", {
                            className: a,
                            x: "2.10049",
                            y: "20.4853",
                            width: "26",
                            height: "2",
                            transform: "rotate(-45 2.10049 20.4853)",
                            fill: r
                        }), (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14.169 5.60117L12.5325 4.12835C12.3424 3.95722 12.0537 3.95722 11.8635 4.12835L3.16652 11.9557C2.82591 12.2622 3.04276 12.8273 3.50101 12.8273H5.19803V14.5721L14.169 5.60117ZM5.19803 17.4005L15.6576 6.94095L17.1384 8.27369L10.5848 14.8273H10.198V15.2141L5.25403 20.1581C5.21775 20.0546 5.19803 19.9432 5.19803 19.8273V17.4005ZM7.41324 20.8273H9.19803C9.75031 20.8273 10.198 20.3796 10.198 19.8273V18.0425L7.41324 20.8273ZM13.4132 14.8273H14.198V19.8273C14.198 20.3796 14.6457 20.8273 15.198 20.8273H18.198C18.7503 20.8273 19.198 20.3796 19.198 19.8273V12.8273H20.895C21.3533 12.8273 21.5701 12.2622 21.2295 11.9557L18.6271 9.61347L13.4132 14.8273Z",
                            fill: r
                        })]
                    })
                }, a.HomeSlashIcon)
        }
    }
]);