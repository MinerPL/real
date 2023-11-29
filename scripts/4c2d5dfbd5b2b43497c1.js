(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["27755"], {
        69448: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f6da6e7ed1d57e445d0e.svg"
        },
        601248: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChatMarkUnreadIcon: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                u = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...r
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, u.default)(r),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        d: "M12.934 21.957c.244-.023.422-.229.464-.47.02-.115.046-.23.08-.343a.665.665 0 0 0-.243-.718A2.996 2.996 0 0 1 12 18v-3a3 3 0 0 1 4.348-2.68.577.577 0 0 0 .442.037A6.993 6.993 0 0 1 19 12c.83 0 1.626.145 2.365.41.3.107.635-.091.635-.41 0-5.523-4.477-10-10-10S2 6.477 2 12c0 1.97.57 3.808 1.554 5.357a.517.517 0 0 1-.04.617l-2.067 2.369C.882 20.989 1.342 22 2.2 22H12c.315 0 .627-.015.934-.043Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: s
                    }), (0, l.jsx)("path", {
                        d: "M18 17h-1.236a3 3 0 1 1 .252 4.25 1 1 0 1 0-1.324 1.5A5 5 0 1 0 16 15a1 1 0 0 0-2 0v3a1 1 0 0 0 1 1h3a1 1 0 1 0 0-2Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: s
                    })]
                })
            }
        },
        35647: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                IdIcon: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                u = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...r
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, u.default)(r),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M15.298 14.48c-.457.448-1.078.672-1.862.672H12.05V9.188h1.386c.784 0 1.405.224 1.862.672.457.448.686 1.218.686 2.31s-.229 1.862-.686 2.31Z",
                        className: s
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.044V7.34H6V17Zm4.006-9.66V17h3.43c1.465 0 2.595-.415 3.388-1.246.802-.83 1.204-2.025 1.204-3.584 0-1.559-.401-2.753-1.204-3.584-.794-.83-1.923-1.246-3.388-1.246h-3.43Z",
                        clipRule: "evenodd",
                        className: s
                    })]
                })
            }
        },
        991630: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                u = n("414456"),
                i = n.n(u),
                s = n("587974"),
                r = n("315102"),
                c = n("524768"),
                o = n("616674"),
                d = n("363577");

            function f(e) {
                let {
                    section: t,
                    isSelected: n,
                    width: u,
                    height: f,
                    className: h,
                    selectable: m = !1,
                    onFocus: p,
                    onBlur: C,
                    onMouseOver: v,
                    onMouseLeave: M,
                    ...E
                } = e, [g, I] = a.useState(!1), N = a.useCallback(() => {
                    I(!0), null == p || p()
                }, [p]), x = a.useCallback(() => {
                    I(!1), null == C || C()
                }, [C]), _ = a.useCallback(() => {
                    I(!0), null == v || v()
                }, [v]), A = a.useCallback(() => {
                    I(!1), null == M || M()
                }, [M]), S = a.useMemo(() => {
                    if (t.type === c.ApplicationCommandSectionType.APPLICATION) {
                        var e;
                        return r.default.getApplicationIconURL({
                            id: t.id,
                            icon: t.icon,
                            bot: null === (e = t.application) || void 0 === e ? void 0 : e.bot,
                            botIconFirst: !0,
                            size: u
                        })
                    }
                    return d
                }, [t, u]);
                return (0, l.jsx)("div", {
                    ...E,
                    className: i(o.wrapper, h, {
                        [o.selectable]: m,
                        [o.selected]: m && n
                    }),
                    onFocus: N,
                    onBlur: x,
                    onMouseOver: _,
                    onMouseLeave: A,
                    children: (0, l.jsx)(s.default, {
                        className: o.mask,
                        mask: m && (n || g) ? s.MaskIDs.SQUIRCLE : s.MaskIDs.AVATAR_DEFAULT,
                        width: u,
                        height: f,
                        children: (0, l.jsx)("img", {
                            alt: "",
                            className: o.icon,
                            style: {
                                width: u,
                                height: f
                            },
                            src: S
                        })
                    })
                })
            }
        },
        943161: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                u = n.n(a),
                i = n("83910"),
                s = n("93393"),
                r = n("317041"),
                c = n("749296");
            let o = e => {
                switch (e.id) {
                    case r.BuiltInSectionId.BUILT_IN:
                        return i.default;
                    case r.BuiltInSectionId.FRECENCY:
                        return s.default;
                    default:
                        return
                }
            };

            function d(e) {
                let {
                    section: t,
                    className: n,
                    width: a,
                    height: i,
                    padding: s,
                    isSelected: r,
                    selectable: d = !1,
                    ...f
                } = e, h = o(t);
                return (0, l.jsx)("div", {
                    className: u(c.wrapper, n, {
                        [c.selectable]: d,
                        [c.selected]: d && r
                    }),
                    style: {
                        width: a,
                        height: i,
                        padding: null != s ? s : 0
                    },
                    children: null != h ? (0, l.jsx)(h, {
                        className: c.icon,
                        width: a,
                        height: i,
                        ...f
                    }) : null
                })
            }
        },
        355263: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getIconComponent: function() {
                    return s
                },
                pxToRem: function() {
                    return r
                },
                getCommandQuery: function() {
                    return c
                }
            });
            var l = n("524768"),
                a = n("991630"),
                u = n("943161"),
                i = n("317041");
            let s = e => e.type === l.ApplicationCommandSectionType.BUILT_IN ? u.default : a.default;

            function r(e) {
                return "".concat(e / 16, "rem")
            }

            function c(e, t) {
                let n = t,
                    l = !1,
                    a = t.indexOf(":");
                if (a >= 0) {
                    let e = t.lastIndexOf(" ", a);
                    e >= 0 ? (t = t.substring(0, e), l = !0) : t = t.substring(0, a)
                } else t = t.substring(0, t.length);
                let u = t.split(" ", i.MAX_SUBCOMMAND_LEVEL + 1);
                return u.length > i.MAX_SUBCOMMAND_LEVEL && (l = !0, u.pop()), t = u.join(" "), (n.length > t.length || t.endsWith(" ")) && (l = !0, t = t.trimEnd()), {
                    text: t,
                    parts: u,
                    hasSpaceTerminator: l
                }
            }
        },
        633043: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                u = n("850572"),
                i = () => (0, l.jsx)("div", {
                    className: u.loadingWrapper,
                    children: (0, l.jsx)(a.Dots, {
                        dotRadius: 4,
                        themed: !0
                    })
                })
        },
        861370: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                u = n("845579"),
                i = n("662255"),
                s = n("306160");

            function r(e) {
                let {
                    id: t,
                    label: n,
                    onSuccess: r,
                    shiftId: c,
                    showIconFirst: o
                } = e, d = u.DeveloperMode.useSetting();
                if (__OVERLAY__ || !d || !s.SUPPORTS_COPY) return null;
                let f = "devmode-copy-id-".concat(t);
                return (0, l.jsx)(a.MenuItem, {
                    id: f,
                    label: n,
                    action: function(e) {
                        let n = null != c && e.shiftKey ? c : t;
                        (0, s.copy)(n), null == r || r()
                    },
                    icon: i.default,
                    showIconFirst: o
                }, f)
            }
        },
        385065: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("118810"),
                u = n("77078"),
                i = n("272030"),
                s = n("798609"),
                r = n("861370"),
                c = n("152298"),
                o = n("26051"),
                d = n("667358"),
                f = n("563816"),
                h = n("518155"),
                m = n("718381"),
                p = n("875834"),
                C = n("782340");

            function v(e) {
                var t;
                let n, v, M, {
                        channel: E,
                        message: g,
                        target: I,
                        attachment: N,
                        onSelect: x,
                        onHeightUpdate: _
                    } = e,
                    A = I;
                if (null != N) v = n = N.url;
                else
                    for (;
                        (0, a.isElement)(A);)(0, a.isElement)(A, HTMLImageElement) && null != A.src && (v = A.src), (0, a.isElement)(A, HTMLAnchorElement) && null != A.href && (n = A.href, M = A.textContent), A = A.parentNode;
                let S = null === (t = document.getSelection()) || void 0 === t ? void 0 : t.toString(),
                    T = (0, c.default)(S),
                    O = (0, d.default)(S),
                    y = (0, f.default)({
                        commandType: s.ApplicationCommandType.MESSAGE,
                        commandTargetId: g.id,
                        channel: E,
                        guildId: void 0,
                        onShow: _
                    }),
                    j = (0, p.default)(g, E),
                    R = (0, h.default)(g, E),
                    b = (0, m.default)(g, E),
                    w = (0, o.default)(null != n ? n : v, M),
                    L = (0, r.default)({
                        id: g.id,
                        label: C.default.Messages.COPY_ID_MESSAGE,
                        shiftId: "".concat(g.channel_id, "-").concat(g.id)
                    });
                return (0, l.jsxs)(u.Menu, {
                    navId: "message",
                    onClose: i.closeContextMenu,
                    "aria-label": C.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
                    onSelect: x,
                    children: [(0, l.jsx)(u.MenuGroup, {
                        children: T
                    }), (0, l.jsx)(u.MenuGroup, {
                        children: O
                    }), (0, l.jsxs)(u.MenuGroup, {
                        children: [y, j, R, b]
                    }), (0, l.jsx)(u.MenuGroup, {
                        children: w
                    }), (0, l.jsx)(u.MenuGroup, {
                        children: L
                    })]
                })
            }
        },
        518155: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("281071"),
                u = n("77078"),
                i = n("83900"),
                s = n("599110"),
                r = n("306160"),
                c = n("49111"),
                o = n("782340");

            function d(e, t) {
                return r.SUPPORTS_COPY && e.type !== c.MessageTypes.GUILD_INVITE_REMINDER ? (0, l.jsx)(u.MenuItem, {
                    id: "copy-link",
                    label: o.default.Messages.COPY_MESSAGE_LINK,
                    icon: i.default,
                    action: () => {
                        (0, a.copy)("".concat(location.protocol, "//").concat(location.host).concat(c.Routes.CHANNEL(t.guild_id, t.id, e.id))), s.default.track(c.AnalyticEvents.MESSAGE_LINK_COPIED, {
                            message_id: e.id,
                            channel: e.channel_id
                        })
                    }
                }) : null
            }
        },
        718381: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                u = n("77078"),
                i = n("819689"),
                s = n("249561"),
                r = n("300322"),
                c = n("957255"),
                o = n("697218"),
                d = n("228220"),
                f = n("49111"),
                h = n("782340");

            function m(e, t) {
                let n = (0, a.useStateFromStores)([o.default], () => o.default.getCurrentUser()),
                    m = (0, r.useIsActiveChannelOrUnarchivableThread)(t),
                    p = (0, a.useStateFromStores)([c.default], () => c.default.can(f.Permissions.MANAGE_MESSAGES, t), [t]);
                return e.state !== f.MessageStates.SENDING && (e.author.id === (null == n ? void 0 : n.id) || p) && e.type in f.MessageTypesDeletable && m ? (0, l.jsx)(u.MenuItem, {
                    id: "delete",
                    label: h.default.Messages.DELETE_MESSAGE,
                    action: function(n) {
                        e.state === f.MessageStates.SEND_FAILED ? i.default.deleteMessage(t.id, e.id, !0) : n.shiftKey ? i.default.deleteMessage(t.id, e.id) : s.default.confirmDelete(t, e, !0)
                    },
                    color: "danger",
                    icon: d.default
                }) : null
            }
        },
        875834: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                u = n("300322"),
                i = n("993477"),
                s = n("456936"),
                r = n("782340");

            function c(e, t) {
                let n = (0, u.useIsActiveChannelOrUnarchivableThread)(t);
                return n ? (0, l.jsx)(a.MenuItem, {
                    id: "mark-unread",
                    label: r.default.Messages.MARK_UNREAD,
                    action: () => (0, s.default)(t.id, e.id),
                    icon: i.default
                }) : null
            }
        },
        146574: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getNativeContextMenuChannelAnalytics: function() {
                    return u
                }
            });
            var l = n("18494"),
                a = n("724210");

            function u() {
                var e;
                let t = null !== (e = l.default.getCurrentlySelectedChannelId()) && void 0 !== e ? e : void 0;
                return null != t && (0, a.isStaticChannelRoute)(t) ? {
                    channel_static_route: t
                } : {
                    channel_id: t
                }
            }
        },
        152298: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                u = n("773336"),
                i = n("50885"),
                s = n("782340");

            function r(e, t) {
                return u.isPlatformEmbedded && (null == e ? void 0 : e.length) !== 0 ? (0, l.jsx)(a.MenuItem, {
                    id: "copy",
                    label: s.default.Messages.COPY,
                    hint: (0, u.isMac)() ? "⌘C" : "Ctrl+C",
                    action: () => {
                        i.default.copy(e), null == t || t.focus()
                    }
                }) : null
            }
        },
        26051: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                u = n("689226"),
                i = n("467475"),
                s = n("24373"),
                r = n("48703"),
                c = n("599110"),
                o = n("128259"),
                d = n("773336"),
                f = n("50885"),
                h = n("146574"),
                m = n("49111"),
                p = n("782340");

            function C(e, t, n, C) {
                let v = (0, i.default)(null == n ? void 0 : n.getChannelId());
                if (!d.isPlatformEmbedded || null == e || "" === e || v || (null == C ? void 0 : C.shouldHideMediaOptions) === !0 || null != e && null != (0, s.isStickerAssetUrl)(e) || null != e && (0, u.isRoleIconAssetUrl)(e)) return null;
                let M = (0, r.getHostname)(e),
                    E = n => {
                        c.default.track(m.AnalyticEvents.CONTEXT_MENU_LINK_OPENED, {
                            hostname: M,
                            ...(0, h.getNativeContextMenuChannelAnalytics)()
                        }), (0, o.handleClick)({
                            href: e,
                            trusted: (0, o.isLinkTrusted)(e, t),
                            shouldConfirm: !0
                        }, n)
                    };
                return [(0, l.jsx)(a.MenuItem, {
                    id: "copy-native-link",
                    label: p.default.Messages.COPY_LINK,
                    action: () => {
                        c.default.track(m.AnalyticEvents.CONTEXT_MENU_LINK_COPIED, {
                            hostname: M,
                            ...(0, h.getNativeContextMenuChannelAnalytics)()
                        }), f.default.copy(e)
                    }
                }, "copy-native-link"), (0, l.jsx)(a.MenuItem, {
                    id: "open-native-link",
                    label: p.default.Messages.OPEN_LINK,
                    action: e => E(e)
                }, "open-native-link")]
            }
        },
        667358: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("37983"),
                a = n("884691"),
                u = n("627445"),
                i = n.n(u),
                s = n("77078"),
                r = n("599110"),
                c = n("773336"),
                o = n("49111"),
                d = n("782340");

            function f(e) {
                let t = a.useCallback(() => {
                    i(null != e, "text cannot be null"), r.default.track(o.AnalyticEvents.MESSAGE_MENU_GOOGLE_SEARCHED), window.open("https://www.google.com/search?q=".concat(encodeURIComponent(e)), "_blank")
                }, [e]);
                return c.isPlatformEmbedded && null != e && (null == e ? void 0 : e.length) !== 0 ? [(0, l.jsx)(s.MenuItem, {
                    id: "search-google",
                    label: d.default.Messages.SEARCH_WITH_GOOGLE,
                    action: t
                }, "search-google")] : null
            }
        },
        563816: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("37983"),
                a = n("884691"),
                u = n("627445"),
                i = n.n(u),
                s = n("446674"),
                r = n("77078"),
                c = n("240249"),
                o = n("524768"),
                d = n("389153"),
                f = n("916565"),
                h = n("355263"),
                m = n("633043"),
                p = n("305961"),
                C = n("317041"),
                v = n("782340"),
                M = n("205735"),
                E = e => {
                    let {
                        commandType: t,
                        commandTargetId: n,
                        channel: u,
                        guildId: E,
                        onShow: g
                    } = e, I = a.useRef(!1), N = a.useRef(0), x = (0, s.useStateFromStores)([p.default], () => p.default.getGuild(null != E ? E : u.guild_id)), {
                        hasMoreAfter: _,
                        scrollDown: A,
                        sectionDescriptors: S,
                        commands: T,
                        placeholders: O
                    } = c.useDiscovery(u, {
                        commandType: t
                    }, {
                        placeholderCount: C.CONTEXT_MENU_PLACEHOLDER_COUNT,
                        limit: C.CONTEXT_MENU_COMMANDS_QUERY_LIMIT
                    }), {
                        visibleCommands: y,
                        sections: j
                    } = a.useMemo(() => {
                        let e = T.concat(O),
                            t = {};
                        return S.forEach(e => {
                            t[e.id] = e
                        }), {
                            visibleCommands: e,
                            sections: t
                        }
                    }, [T, S, O]), R = a.useMemo(() => (0, d.canUseContextMenuCommands)(u, y.length, c.getCommandTypeCount(u, t, null == x ? void 0 : x.applicationCommandCounts)), [u, t, y.length, null == x ? void 0 : x.applicationCommandCounts]);
                    a.useEffect(() => {
                        R !== I.current && (R && (null == g || g()), I.current = R)
                    }, [R, g]), a.useEffect(() => {
                        b(N.current)
                    }, [y]);
                    let b = a.useCallback(e => {
                            _ && e + 500 > 34 * y.length - 40 && A(), N.current = e
                        }, [_, A, y]),
                        w = a.useCallback(e => {
                            if (e.inputType === o.ApplicationCommandInputType.PLACEHOLDER) return (0, l.jsx)(r.MenuItem, {
                                id: "menu-command-".concat(e.id),
                                render: () => (0, l.jsx)(m.default, {})
                            }, "menu-command-".concat(e.id));
                            i(null != u, "menu item should not show if channel is null");
                            let t = j[e.applicationId],
                                a = null != t ? (0, h.getIconComponent)(t) : void 0;
                            return (0, l.jsx)(r.MenuItem, {
                                id: e.id,
                                label: e.displayName,
                                showIconFirst: !0,
                                icon: () => null != a ? (0, l.jsx)(a, {
                                    channel: u,
                                    section: t,
                                    width: 18,
                                    height: 18,
                                    selectable: !1
                                }) : null,
                                action: () => {
                                    (0, f.default)({
                                        command: e,
                                        optionValues: {},
                                        context: {
                                            channel: u,
                                            guild: x
                                        },
                                        commandTargetId: n
                                    })
                                }
                            }, e.id)
                        }, [u, x, n, j]);
                    return R && (0, l.jsx)(r.MenuItem, {
                        id: "apps",
                        label: v.default.Messages.APPS,
                        onChildrenScroll: b,
                        childRowHeight: 34,
                        listClassName: M.list,
                        disabled: 0 === y.length,
                        children: y.map(w)
                    })
                }
        },
        555158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HelpMessageTypes: function() {
                    return a
                },
                default: function() {
                    return m
                }
            });
            var l, a, u = n("37983");
            n("884691");
            var i = n("414456"),
                s = n.n(i),
                r = n("77078"),
                c = n("36694"),
                o = n("381546"),
                d = n("68238"),
                f = n("423487"),
                h = n("557296");
            (l = a || (a = {}))[l.WARNING = 0] = "WARNING", l[l.INFO = 1] = "INFO", l[l.ERROR = 2] = "ERROR", l[l.POSITIVE = 3] = "POSITIVE";
            var m = function(e) {
                let {
                    children: t,
                    messageType: n,
                    className: l,
                    textColor: a = "text-normal",
                    textVariant: i = "text-sm/medium"
                } = e, m = function(e) {
                    switch (e) {
                        case 0:
                            return f.default;
                        case 1:
                            return d.default;
                        case 2:
                            return o.default;
                        case 3:
                            return c.default
                    }
                }(n), p = function(e) {
                    switch (e) {
                        case 0:
                            return h.warning;
                        case 1:
                            return h.info;
                        case 2:
                            return h.error;
                        case 3:
                            return h.positive
                    }
                }(n);
                return (0, u.jsxs)("div", {
                    className: s(h.container, p, l),
                    children: [(0, u.jsx)("div", {
                        className: h.iconDiv,
                        children: (0, u.jsx)(m, {
                            className: h.icon
                        })
                    }), (0, u.jsx)(r.Text, {
                        className: h.text,
                        color: a,
                        variant: i,
                        children: t
                    })]
                })
            }
        },
        662255: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                u = n("35647"),
                i = n("75196"),
                s = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: u,
                        ...s
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, i.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            className: u,
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
                        })
                    })
                }, u.IdIcon, void 0, {
                    size: 24
                })
        },
        993477: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                u = n("601248"),
                i = n("75196"),
                s = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: u,
                        ...s
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, i.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            className: u,
                            fill: a,
                            d: "M14 3H20C21 3 22.0001 4 22.0001 5V19.0003C22.0001 20 21 21 20 21H14C13 21 6 13 6 13H2V11H6C6 11 13 3 14 3Z"
                        })
                    })
                }, u.ChatMarkUnreadIcon, void 0, {
                    size: 24
                })
        }
    }
]);