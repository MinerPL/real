(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["39548"], {
        828986: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var s = n("872717"),
                a = n("913144"),
                l = n("263024"),
                i = n("508229"),
                d = n("404118"),
                u = n("49111"),
                r = n("782340");
            let o = {
                async pinMessage(e, t) {
                    let {
                        id: n,
                        name: a
                    } = e;
                    await l.default.unarchiveThreadIfNecessary(e.id), s.default.put({
                        url: u.Endpoints.PIN(n, t),
                        oldFormErrors: !0
                    }).catch(() => {
                        let t;
                        t = e.isPrivate() ? r.default.Messages.PIN_MESSAGE_TOO_MANY_BODY_PRIVATE_CHANNEL.format({
                            maxPins: u.MAX_PINS_PER_CHANNEL
                        }) : r.default.Messages.PIN_MESSAGE_TOO_MANY_BODY.format({
                            maxPins: u.MAX_PINS_PER_CHANNEL,
                            channelName: a
                        }), d.default.show({
                            title: r.default.Messages.PIN_MESSAGE_TOO_MANY_TITLE,
                            body: t,
                            confirmText: r.default.Messages.OKAY
                        })
                    })
                },
                async unpinMessage(e, t) {
                    await l.default.unarchiveThreadIfNecessary(e.id), s.default.delete({
                        url: u.Endpoints.PIN(e.id, t),
                        oldFormErrors: !0
                    }).catch(() => d.default.show({
                        title: r.default.Messages.UNPIN_MESSAGE_FAILED_TITLE,
                        body: r.default.Messages.UNPIN_MESSAGE_FAILED_BODY,
                        confirmText: r.default.Messages.TRY_AGAIN,
                        cancelText: r.default.Messages.CANCEL,
                        onConfirm: o.unpinMessage.bind(o, e, t)
                    }))
                },
                ackPins(e) {
                    a.default.dispatch({
                        type: "CHANNEL_PINS_ACK",
                        channelId: e
                    })
                },
                fetchPins(e) {
                    let t = i.default.getPinnedMessages(e);
                    (null == t || !t.loaded && !t.loading) && (a.default.dispatch({
                        type: "LOAD_PINNED_MESSAGES",
                        channelId: e
                    }), s.default.get({
                        url: u.Endpoints.PINS(e),
                        retries: 2,
                        oldFormErrors: !0
                    }).then(t => {
                        a.default.dispatch({
                            type: "LOAD_PINNED_MESSAGES_SUCCESS",
                            messages: t.body,
                            channelId: e
                        })
                    }, () => {
                        a.default.dispatch({
                            type: "LOAD_PINNED_MESSAGES_FAILURE",
                            channelId: e
                        })
                    }))
                }
            };
            var c = o
        },
        249561: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var s = n("37983"),
                a = n("884691"),
                l = n("414456"),
                i = n.n(l),
                d = n("77078"),
                u = n("828986"),
                r = n("819689"),
                o = n("679653"),
                c = n("390236"),
                f = n("377114"),
                E = n("699473"),
                g = n("27618"),
                m = n("697218"),
                h = n("822332"),
                M = n("568734"),
                _ = n("870190"),
                N = n("49111"),
                p = n("782340"),
                C = n("834476");
            class S extends a.PureComponent {
                render() {
                    let e, t;
                    let {
                        report: n
                    } = this.state, {
                        channel: a,
                        message: l,
                        showContextMenuHint: i,
                        ...u
                    } = this.props, r = a.type === N.ChannelTypes.GUILD_ANNOUNCEMENT && (0, M.hasFlag)(l.flags, N.MessageFlags.CROSSPOSTED);
                    return i && (e = (0, s.jsx)(h.default, {
                        className: C.spacingTop,
                        children: p.default.Messages.DELETE_MESSAGE_CONTEXT_MENU_HINT.format()
                    })), (0, _.canDeleteAndReportMessage)(l) && (t = (0, s.jsx)(d.FormSwitch, {
                        value: n,
                        onChange: this.handleToggleReport,
                        hideBorder: !0,
                        className: C.spacingTop,
                        children: p.default.Messages.DELETE_MESSAGE_REPORT
                    })), (0, s.jsx)(c.default.Provider, {
                        value: a.guild_id,
                        children: (0, s.jsxs)(d.ConfirmModal, {
                            header: r ? p.default.Messages.MODIFY_FOLLOWED_NEWS_HEADER : p.default.Messages.DELETE_MESSAGE_TITLE,
                            confirmText: p.default.Messages.DELETE,
                            cancelText: p.default.Messages.CANCEL,
                            onConfirm: this.handleDelete,
                            ...u,
                            children: [(0, s.jsx)(d.Text, {
                                variant: "text-md/normal",
                                className: C.spacing,
                                children: r ? p.default.Messages.DELETE_FOLLOWED_NEWS_BODY : p.default.Messages.DELETE_MESSAGE_BODY
                            }), (0, s.jsx)("div", {
                                className: C.message,
                                children: (0, s.jsx)(E.default, {
                                    channel: a,
                                    message: l,
                                    disableInteraction: !0
                                })
                            }), t, e]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        report: !1
                    }, this.handleDelete = () => {
                        let {
                            report: e
                        } = this.state, {
                            channel: t,
                            message: n
                        } = this.props;
                        e ? (0, f.showReportModalForMessage)(n, () => r.default.deleteMessage(t.id, n.id)) : r.default.deleteMessage(t.id, n.id)
                    }, this.handleToggleReport = e => {
                        this.setState({
                            report: e
                        })
                    }
                }
            }
            var I = {
                confirmPin: function(e, t) {
                    (0, d.openModal)(n => {
                        let a;
                        let l = (0, o.computeChannelName)(e, m.default, g.default);
                        return a = e.isPrivate() ? p.default.Messages.PIN_MESSAGE_BODY_PRIVATE_CHANNEL : p.default.Messages.PIN_MESSAGE_BODY.format({
                            channelName: l
                        }), (0, s.jsx)(c.default.Provider, {
                            value: e.guild_id,
                            children: (0, s.jsxs)(d.ConfirmModal, {
                                header: p.default.Messages.PIN_MESSAGE_TITLE,
                                confirmText: p.default.Messages.PIN_CONFIRM,
                                cancelText: p.default.Messages.CANCEL,
                                confirmButtonColor: d.Button.Colors.BRAND,
                                onConfirm: () => u.default.pinMessage(e, t.id),
                                ...n,
                                children: [(0, s.jsx)(d.Text, {
                                    variant: "text-md/normal",
                                    className: C.spacing,
                                    children: a
                                }), (0, s.jsx)("div", {
                                    className: C.message,
                                    children: (0, s.jsx)(E.default, {
                                        channel: e,
                                        message: t,
                                        animateAvatar: !1,
                                        disableInteraction: !0
                                    })
                                })]
                            })
                        })
                    })
                },
                confirmUnpin: function(e, t) {
                    (0, d.openModal)(n => (0, s.jsx)(c.default.Provider, {
                        value: e.guild_id,
                        children: (0, s.jsxs)(d.ConfirmModal, {
                            header: p.default.Messages.UNPIN_MESSAGE_TITLE,
                            confirmText: p.default.Messages.UNPIN_CONFIRM,
                            cancelText: p.default.Messages.CANCEL,
                            onConfirm: () => u.default.unpinMessage(e, t.id),
                            ...n,
                            children: [(0, s.jsx)(d.Text, {
                                variant: "text-md/normal",
                                className: C.spacing,
                                children: p.default.Messages.UNPIN_MESSAGE_BODY
                            }), (0, s.jsx)("div", {
                                className: i(C.message, C.spacing),
                                children: (0, s.jsx)(E.default, {
                                    channel: e,
                                    message: t,
                                    disableInteraction: !0
                                })
                            }), (0, s.jsx)(h.default, {
                                children: p.default.Messages.UNPIN_MESSAGE_CONTEXT_MENU_HINT.format()
                            })]
                        })
                    }))
                },
                confirmDelete: function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    (0, d.openModal)(a => (0, s.jsx)(S, {
                        channel: e,
                        message: t,
                        showContextMenuHint: n,
                        ...a
                    }))
                },
                confirmEdit: function(e, t, n) {
                    (0, d.openModal)(a => (0, s.jsx)(d.ConfirmModal, {
                        header: p.default.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
                        confirmText: p.default.Messages.CONFIRM,
                        cancelText: p.default.Messages.CANCEL,
                        confirmButtonColor: d.Button.Colors.BRAND,
                        onConfirm: () => r.default.editMessage(e, t, {
                            content: n
                        }),
                        ...a,
                        children: (0, s.jsx)(d.Text, {
                            variant: "text-md/normal",
                            className: C.spacing,
                            children: p.default.Messages.EDIT_FOLLOWED_NEWS_BODY
                        })
                    }))
                }
            }
        },
        28161: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MarkUnreadIcon: function() {
                    return i
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("669491"),
                l = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: d = "",
                    ...u
                } = e;
                return (0, s.jsxs)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, s.jsx)("g", {
                        clipPath: "url(#a)",
                        children: (0, s.jsx)("path", {
                            fill: "string" == typeof i ? i : i.css,
                            fillRule: "evenodd",
                            d: "M19 16a3 3 0 1 1-1.984 5.25 1 1 0 1 0-1.324 1.5A5 5 0 1 0 16 15a1 1 0 0 0-2 0v3a1 1 0 0 0 1 1h3a1 1 0 1 0 0-2h-1.236c.55-.614 1.348-1 2.236-1Zm-6.066 5.957c-.307.028-.619.043-.934.043H2.2c-.859 0-1.318-1.01-.753-1.657l2.066-2.369a.517.517 0 0 0 .041-.617A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 .319-.335.517-.635.41A6.99 6.99 0 0 0 19 12c-.772 0-1.515.125-2.21.357a.577.577 0 0 1-.442-.038A3 3 0 0 0 12 15v3.001c0 .997.487 1.88 1.235 2.426.222.162.321.456.243.718-.034.114-.06.228-.08.344-.042.24-.22.446-.464.469Z",
                            clipRule: "evenodd",
                            className: d
                        })
                    }), (0, s.jsx)("defs", {
                        children: (0, s.jsx)("clipPath", {
                            id: "a",
                            children: (0, s.jsx)("path", {
                                fill: "#fff",
                                d: "M24 24H0V0h24z"
                            })
                        })
                    })]
                })
            }
        },
        633043: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("77078"),
                l = n("850572"),
                i = () => (0, s.jsx)("div", {
                    className: l.loadingWrapper,
                    children: (0, s.jsx)(a.Dots, {
                        dotRadius: 4,
                        themed: !0
                    })
                })
        },
        518155: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("281071"),
                l = n("77078"),
                i = n("83900"),
                d = n("599110"),
                u = n("306160"),
                r = n("49111"),
                o = n("782340");

            function c(e, t) {
                return u.SUPPORTS_COPY && e.type !== r.MessageTypes.GUILD_INVITE_REMINDER ? (0, s.jsx)(l.MenuItem, {
                    id: "copy-link",
                    label: o.default.Messages.COPY_MESSAGE_LINK,
                    icon: i.default,
                    action: () => {
                        (0, a.copy)("".concat(location.protocol, "//").concat(location.host).concat(r.Routes.CHANNEL(t.guild_id, t.id, e.id))), d.default.track(r.AnalyticEvents.MESSAGE_LINK_COPIED, {
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
                    return g
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("446674"),
                l = n("77078"),
                i = n("819689"),
                d = n("249561"),
                u = n("300322"),
                r = n("957255"),
                o = n("697218"),
                c = n("228220"),
                f = n("49111"),
                E = n("782340");

            function g(e, t) {
                let n = (0, a.useStateFromStores)([o.default], () => o.default.getCurrentUser()),
                    g = (0, u.useIsActiveChannelOrUnarchivableThread)(t),
                    m = (0, a.useStateFromStores)([r.default], () => r.default.can(f.Permissions.MANAGE_MESSAGES, t), [t]);
                return e.state !== f.MessageStates.SENDING && (e.author.id === (null == n ? void 0 : n.id) || m) && e.type in f.MessageTypesDeletable && g ? (0, s.jsx)(l.MenuItem, {
                    id: "delete",
                    label: E.default.Messages.DELETE_MESSAGE,
                    action: function(n) {
                        e.state === f.MessageStates.SEND_FAILED ? i.default.deleteMessage(t.id, e.id, !0) : n.shiftKey ? i.default.deleteMessage(t.id, e.id) : d.default.confirmDelete(t, e, !0)
                    },
                    color: "danger",
                    icon: c.default
                }) : null
            }
        },
        875834: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("77078"),
                l = n("300322"),
                i = n("993477"),
                d = n("456936"),
                u = n("782340");

            function r(e, t) {
                let n = (0, l.useIsActiveChannelOrUnarchivableThread)(t);
                return n ? (0, s.jsx)(a.MenuItem, {
                    id: "mark-unread",
                    label: u.default.Messages.MARK_UNREAD,
                    action: () => (0, d.default)(t.id, e.id),
                    icon: i.default
                }) : null
            }
        },
        146574: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getNativeContextMenuChannelAnalytics: function() {
                    return l
                }
            });
            var s = n("18494"),
                a = n("724210");

            function l() {
                var e;
                let t = null !== (e = s.default.getCurrentlySelectedChannelId()) && void 0 !== e ? e : void 0;
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
                    return u
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("77078"),
                l = n("773336"),
                i = n("50885"),
                d = n("782340");

            function u(e, t) {
                return l.isPlatformEmbedded && (null == e ? void 0 : e.length) !== 0 ? (0, s.jsx)(a.MenuItem, {
                    id: "copy",
                    label: d.default.Messages.COPY,
                    hint: (0, l.isMac)() ? "⌘C" : "Ctrl+C",
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
                    return h
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("77078"),
                l = n("689226"),
                i = n("467475"),
                d = n("24373"),
                u = n("48703"),
                r = n("599110"),
                o = n("128259"),
                c = n("773336"),
                f = n("50885"),
                E = n("146574"),
                g = n("49111"),
                m = n("782340");

            function h(e, t, n, h) {
                let M = (0, i.default)(null == n ? void 0 : n.getChannelId());
                if (!c.isPlatformEmbedded || null == e || "" === e || M || (null == h ? void 0 : h.shouldHideMediaOptions) === !0 || null != e && null != (0, d.isStickerAssetUrl)(e) || null != e && (0, l.isRoleIconAssetUrl)(e)) return null;
                let _ = (0, u.getHostname)(e),
                    N = n => {
                        r.default.track(g.AnalyticEvents.CONTEXT_MENU_LINK_OPENED, {
                            hostname: _,
                            ...(0, E.getNativeContextMenuChannelAnalytics)()
                        }), (0, o.handleClick)({
                            href: e,
                            trusted: (0, o.isLinkTrusted)(e, t),
                            shouldConfirm: !0
                        }, n)
                    };
                return [(0, s.jsx)(a.MenuItem, {
                    id: "copy-native-link",
                    label: m.default.Messages.COPY_LINK,
                    action: () => {
                        r.default.track(g.AnalyticEvents.CONTEXT_MENU_LINK_COPIED, {
                            hostname: _,
                            ...(0, E.getNativeContextMenuChannelAnalytics)()
                        }), f.default.copy(e)
                    }
                }, "copy-native-link"), (0, s.jsx)(a.MenuItem, {
                    id: "open-native-link",
                    label: m.default.Messages.OPEN_LINK,
                    action: e => N(e)
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
            var s = n("37983"),
                a = n("884691"),
                l = n("627445"),
                i = n.n(l),
                d = n("77078"),
                u = n("599110"),
                r = n("773336"),
                o = n("49111"),
                c = n("782340");

            function f(e) {
                let t = a.useCallback(() => {
                    i(null != e, "text cannot be null"), u.default.track(o.AnalyticEvents.MESSAGE_MENU_GOOGLE_SEARCHED), window.open("https://www.google.com/search?q=".concat(encodeURIComponent(e)), "_blank")
                }, [e]);
                return r.isPlatformEmbedded && null != e && (null == e ? void 0 : e.length) !== 0 ? [(0, s.jsx)(d.MenuItem, {
                    id: "search-google",
                    label: c.default.Messages.SEARCH_WITH_GOOGLE,
                    action: t
                }, "search-google")] : null
            }
        },
        563816: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var s = n("37983"),
                a = n("884691"),
                l = n("627445"),
                i = n.n(l),
                d = n("446674"),
                u = n("77078"),
                r = n("240249"),
                o = n("524768"),
                c = n("389153"),
                f = n("916565"),
                E = n("355263"),
                g = n("633043"),
                m = n("305961"),
                h = n("317041"),
                M = n("782340"),
                _ = n("205735"),
                N = e => {
                    let {
                        commandType: t,
                        commandTargetId: n,
                        channel: l,
                        guildId: N,
                        onShow: p
                    } = e, C = a.useRef(!1), S = a.useRef(0), I = (0, d.useStateFromStores)([m.default], () => m.default.getGuild(null != N ? N : l.guild_id)), {
                        hasMoreAfter: A,
                        scrollDown: v,
                        sectionDescriptors: T,
                        commands: x,
                        placeholders: O
                    } = r.useDiscovery(l, {
                        commandType: t
                    }, {
                        placeholderCount: h.CONTEXT_MENU_PLACEHOLDER_COUNT,
                        limit: h.CONTEXT_MENU_COMMANDS_QUERY_LIMIT
                    }), {
                        visibleCommands: D,
                        sections: P
                    } = a.useMemo(() => {
                        let e = x.concat(O),
                            t = {};
                        return T.forEach(e => {
                            t[e.id] = e
                        }), {
                            visibleCommands: e,
                            sections: t
                        }
                    }, [x, T, O]), L = a.useMemo(() => (0, c.canUseContextMenuCommands)(l, D.length, r.getCommandTypeCount(l, t, null == I ? void 0 : I.applicationCommandCounts)), [l, t, D.length, null == I ? void 0 : I.applicationCommandCounts]);
                    a.useEffect(() => {
                        if (L !== C.current) {
                            if (L) null == p || p();
                            C.current = L
                        }
                    }, [L, p]), a.useEffect(() => {
                        R(S.current)
                    }, [D]);
                    let R = a.useCallback(e => {
                            A && e + 500 > 34 * D.length - 40 && v(), S.current = e
                        }, [A, v, D]),
                        y = a.useCallback(e => {
                            if (e.inputType === o.ApplicationCommandInputType.PLACEHOLDER) return (0, s.jsx)(u.MenuItem, {
                                id: "menu-command-".concat(e.id),
                                render: () => (0, s.jsx)(g.default, {})
                            }, "menu-command-".concat(e.id));
                            i(null != l, "menu item should not show if channel is null");
                            let t = P[e.applicationId],
                                a = null != t ? (0, E.getIconComponent)(t) : void 0;
                            return (0, s.jsx)(u.MenuItem, {
                                id: e.id,
                                label: e.displayName,
                                showIconFirst: !0,
                                icon: () => null != a ? (0, s.jsx)(a, {
                                    channel: l,
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
                                            channel: l,
                                            guild: I
                                        },
                                        commandTargetId: n
                                    })
                                }
                            }, e.id)
                        }, [l, I, n, P]);
                    return L && (0, s.jsx)(u.MenuItem, {
                        id: "apps",
                        label: M.default.Messages.APPS,
                        onChildrenScroll: R,
                        childRowHeight: 34,
                        listClassName: _.list,
                        disabled: 0 === D.length,
                        children: D.map(y)
                    })
                }
        },
        508229: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var s = n("917351"),
                a = n.n(s),
                l = n("446674"),
                i = n("913144"),
                d = n("692038"),
                u = n("915639"),
                r = n("42203"),
                o = n("26989"),
                c = n("305961"),
                f = n("377253"),
                E = n("27618"),
                g = n("697218");
            let m = {};

            function h(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    a = r.default.getChannel(e),
                    l = null != a ? a.getGuildId() : null;
                return {
                    id: e,
                    messages: t.map(e => (0, d.createMessageRecord)(e)),
                    guildId: l,
                    loaded: n,
                    loading: s
                }
            }

            function M(e) {
                let {
                    channel: t
                } = e;
                delete m[t.id]
            }

            function _() {
                a.forEach(m, e => {
                    a.forEach(e.messages, e => {
                        e.timestamp.locale(u.default.locale)
                    })
                })
            }

            function N() {
                a.forEach(m, e => {
                    e.messages = e.messages.map(e => e.set("blocked", E.default.isBlocked(e.author.id)))
                })
            }
            class p extends l.default.Store {
                initialize() {
                    this.waitFor(r.default, c.default, o.default, f.default, g.default, u.default)
                }
                getPinnedMessages(e) {
                    var t;
                    return null !== (t = m[e]) && void 0 !== t ? t : void 0
                }
                loaded(e) {
                    return null != m[e] && m[e].loaded
                }
            }
            p.displayName = "ChannelPinsStore";
            var C = new p(i.default, {
                CONNECTION_OPEN: function() {
                    m = {}
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    m = a(m).filter(e => e.guildId !== t.id).keyBy("id").value()
                },
                MESSAGE_UPDATE: function(e) {
                    let t = e.message.id,
                        n = e.message.channel_id;
                    if (null == n) return !1;
                    let s = m[n];
                    if (null == s && !e.message.pinned) return !1;
                    if (null == e.message.author) {
                        if (null != s) {
                            let l = a.findIndex(s.messages, e => e.id === t);
                            if (l >= 0) {
                                let t = s.messages[l],
                                    a = (0, d.updateMessageRecord)(t, e.message);
                                if (a !== t) {
                                    let e = s.messages.slice();
                                    e[l] = a, m[n].messages = e
                                }
                            }
                        }
                        return
                    }
                    if (e.message.pinned) {
                        if (null == s) {
                            s = h(n, [e.message], !1), m[n] = s;
                            return
                        }
                        s.messages = s.messages.slice();
                        let l = a.findIndex(s.messages, e => e.id === t); - 1 === l ? s.messages.unshift((0, d.createMessageRecord)(e.message)) : s.messages[l] = (0, d.updateMessageRecord)(s.messages[l], e.message), m[n] = s
                    } else {
                        if (null == s) return;
                        let e = a.findIndex(s.messages, e => e.id === t);
                        if (-1 === e) return;
                        s.messages = s.messages.slice(), s.messages.splice(e, 1), m[n] = s
                    }
                },
                MESSAGE_DELETE: function(e) {
                    let {
                        id: t,
                        channelId: n
                    } = e, s = m[n];
                    if (null == s) return !1;
                    let l = a.remove(s.messages, e => e.id === t);
                    if (0 === l.length) return !1;
                    s.messages = s.messages.slice(), m[n] = s
                },
                MESSAGE_DELETE_BULK: function(e) {
                    let {
                        ids: t,
                        channelId: n
                    } = e, s = m[n];
                    null != s && (s.messages = s.messages.filter(e => -1 === t.indexOf(e.id)))
                },
                LOAD_PINNED_MESSAGES: function(e) {
                    let {
                        channelId: t
                    } = e;
                    m[t] = h(t, [], !1, !0)
                },
                LOAD_PINNED_MESSAGES_SUCCESS: function(e) {
                    let {
                        channelId: t,
                        messages: n
                    } = e;
                    m[t] = h(t, n, !0)
                },
                LOAD_PINNED_MESSAGES_FAILURE: function(e) {
                    let {
                        channelId: t
                    } = e;
                    delete m[t]
                },
                USER_SETTINGS_PROTO_UPDATE: _,
                I18N_LOAD_SUCCESS: _,
                CHANNEL_DELETE: M,
                THREAD_DELETE: M,
                RELATIONSHIP_ADD: N,
                RELATIONSHIP_REMOVE: N
            })
        },
        822332: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var s = n("37983"),
                a = n("884691"),
                l = n("414456"),
                i = n.n(l),
                d = n("77078"),
                u = n("782340"),
                r = n("440318");
            let o = {
                BLOCK: r.block,
                INLINE: r.inline
            };
            class c extends a.PureComponent {
                render() {
                    let {
                        children: e,
                        className: t,
                        textClassName: n,
                        type: a = o.BLOCK,
                        style: l
                    } = this.props;
                    return (0, s.jsxs)("div", {
                        className: i(t, a),
                        style: l,
                        children: [(0, s.jsxs)(d.Text, {
                            variant: "text-sm/bold",
                            tag: "div",
                            color: "text-positive",
                            className: r.pro,
                            children: [u.default.Messages.FORM_LABEL_ROLES_PRO_TIP, ":"]
                        }), (0, s.jsx)(d.Text, {
                            className: i(r.tip, n),
                            variant: "text-sm/normal",
                            children: e
                        })]
                    })
                }
            }
            c.Types = o;
            var f = c
        },
        993477: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("469563"),
                l = n("28161"),
                i = n("75196"),
                d = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: l,
                        ...d
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, i.default)(d),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, s.jsx)("path", {
                            className: l,
                            fill: a,
                            d: "M14 3H20C21 3 22.0001 4 22.0001 5V19.0003C22.0001 20 21 21 20 21H14C13 21 6 13 6 13H2V11H6C6 11 13 3 14 3Z"
                        })
                    })
                }, l.MarkUnreadIcon)
        },
        870190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canReportMessage: function() {
                    return u
                },
                canDeleteAndReportMessage: function() {
                    return r
                }
            });
            var s = n("42203"),
                a = n("525065"),
                l = n("957255"),
                i = n("697218"),
                d = n("49111");

            function u(e) {
                return null != e && function(e) {
                    if (null == e) return !1;
                    let t = e.id,
                        n = i.default.getCurrentUser();
                    return null != n && n.id !== t && !0 !== e.system && !0
                }(e.author)
            }

            function r(e) {
                return null != e && u(e) && function(e) {
                    let t = s.default.getChannel(e);
                    if (null == t) return !1;
                    if (t.type === d.ChannelTypes.DM || t.type === d.ChannelTypes.GROUP_DM) return !0;
                    if (l.default.canWithPartialContext(d.Permissions.MANAGE_MESSAGES, {
                            channelId: e
                        })) {
                        let e = a.default.getMemberCount(t.getGuildId());
                        return null != e && e >= 50
                    }
                    return !1
                }(e.getChannelId())
            }
        }
    }
]);