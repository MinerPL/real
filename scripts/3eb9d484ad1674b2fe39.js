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
                u = n("404118"),
                d = n("49111"),
                r = n("782340");
            let o = {
                async pinMessage(e, t) {
                    let {
                        id: n,
                        name: a
                    } = e;
                    await l.default.unarchiveThreadIfNecessary(e.id), s.default.put({
                        url: d.Endpoints.PIN(n, t),
                        oldFormErrors: !0
                    }).catch(() => {
                        let t;
                        t = e.isPrivate() ? r.default.Messages.PIN_MESSAGE_TOO_MANY_BODY_PRIVATE_CHANNEL.format({
                            maxPins: d.MAX_PINS_PER_CHANNEL
                        }) : r.default.Messages.PIN_MESSAGE_TOO_MANY_BODY.format({
                            maxPins: d.MAX_PINS_PER_CHANNEL,
                            channelName: a
                        }), u.default.show({
                            title: r.default.Messages.PIN_MESSAGE_TOO_MANY_TITLE,
                            body: t,
                            confirmText: r.default.Messages.OKAY
                        })
                    })
                },
                async unpinMessage(e, t) {
                    await l.default.unarchiveThreadIfNecessary(e.id), s.default.delete({
                        url: d.Endpoints.PIN(e.id, t),
                        oldFormErrors: !0
                    }).catch(() => u.default.show({
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
                        url: d.Endpoints.PINS(e),
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
                u = n("77078"),
                d = n("828986"),
                r = n("819689"),
                o = n("679653"),
                c = n("390236"),
                f = n("377114"),
                E = n("699473"),
                g = n("27618"),
                m = n("697218"),
                M = n("822332"),
                _ = n("568734"),
                h = n("870190"),
                N = n("49111"),
                S = n("782340"),
                C = n("834476");
            class p extends a.PureComponent {
                render() {
                    let e, t;
                    let {
                        report: n
                    } = this.state, {
                        channel: a,
                        message: l,
                        showContextMenuHint: i,
                        ...d
                    } = this.props, r = a.type === N.ChannelTypes.GUILD_ANNOUNCEMENT && (0, _.hasFlag)(l.flags, N.MessageFlags.CROSSPOSTED);
                    return i && (e = (0, s.jsx)(M.default, {
                        className: C.spacingTop,
                        children: S.default.Messages.DELETE_MESSAGE_CONTEXT_MENU_HINT.format()
                    })), (0, h.canDeleteAndReportMessage)(l) && (t = (0, s.jsx)(u.FormSwitch, {
                        value: n,
                        onChange: this.handleToggleReport,
                        hideBorder: !0,
                        className: C.spacingTop,
                        children: S.default.Messages.DELETE_MESSAGE_REPORT
                    })), (0, s.jsx)(c.default.Provider, {
                        value: a.guild_id,
                        children: (0, s.jsxs)(u.ConfirmModal, {
                            header: r ? S.default.Messages.MODIFY_FOLLOWED_NEWS_HEADER : S.default.Messages.DELETE_MESSAGE_TITLE,
                            confirmText: S.default.Messages.DELETE,
                            cancelText: S.default.Messages.CANCEL,
                            onConfirm: this.handleDelete,
                            ...d,
                            children: [(0, s.jsx)(u.Text, {
                                variant: "text-md/normal",
                                className: C.spacing,
                                children: r ? S.default.Messages.DELETE_FOLLOWED_NEWS_BODY : S.default.Messages.DELETE_MESSAGE_BODY
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
                    (0, u.openModal)(n => {
                        let a;
                        let l = (0, o.computeChannelName)(e, m.default, g.default);
                        return a = e.isPrivate() ? S.default.Messages.PIN_MESSAGE_BODY_PRIVATE_CHANNEL : S.default.Messages.PIN_MESSAGE_BODY.format({
                            channelName: l
                        }), (0, s.jsx)(c.default.Provider, {
                            value: e.guild_id,
                            children: (0, s.jsxs)(u.ConfirmModal, {
                                header: S.default.Messages.PIN_MESSAGE_TITLE,
                                confirmText: S.default.Messages.PIN_CONFIRM,
                                cancelText: S.default.Messages.CANCEL,
                                confirmButtonColor: u.Button.Colors.BRAND,
                                onConfirm: () => d.default.pinMessage(e, t.id),
                                ...n,
                                children: [(0, s.jsx)(u.Text, {
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
                    (0, u.openModal)(n => (0, s.jsx)(c.default.Provider, {
                        value: e.guild_id,
                        children: (0, s.jsxs)(u.ConfirmModal, {
                            header: S.default.Messages.UNPIN_MESSAGE_TITLE,
                            confirmText: S.default.Messages.UNPIN_CONFIRM,
                            cancelText: S.default.Messages.CANCEL,
                            onConfirm: () => d.default.unpinMessage(e, t.id),
                            ...n,
                            children: [(0, s.jsx)(u.Text, {
                                variant: "text-md/normal",
                                className: C.spacing,
                                children: S.default.Messages.UNPIN_MESSAGE_BODY
                            }), (0, s.jsx)("div", {
                                className: i(C.message, C.spacing),
                                children: (0, s.jsx)(E.default, {
                                    channel: e,
                                    message: t,
                                    disableInteraction: !0
                                })
                            }), (0, s.jsx)(M.default, {
                                children: S.default.Messages.UNPIN_MESSAGE_CONTEXT_MENU_HINT.format()
                            })]
                        })
                    }))
                },
                confirmDelete: function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    (0, u.openModal)(a => (0, s.jsx)(p, {
                        channel: e,
                        message: t,
                        showContextMenuHint: n,
                        ...a
                    }))
                },
                confirmEdit: function(e, t, n) {
                    (0, u.openModal)(a => (0, s.jsx)(u.ConfirmModal, {
                        header: S.default.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
                        confirmText: S.default.Messages.CONFIRM,
                        cancelText: S.default.Messages.CANCEL,
                        confirmButtonColor: u.Button.Colors.BRAND,
                        onConfirm: () => r.default.editMessage(e, t, {
                            content: n
                        }),
                        ...a,
                        children: (0, s.jsx)(u.Text, {
                            variant: "text-md/normal",
                            className: C.spacing,
                            children: S.default.Messages.EDIT_FOLLOWED_NEWS_BODY
                        })
                    }))
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
                u = n("599110"),
                d = n("306160"),
                r = n("49111"),
                o = n("782340");

            function c(e, t) {
                return d.SUPPORTS_COPY && e.type !== r.MessageTypes.GUILD_INVITE_REMINDER ? (0, s.jsx)(l.MenuItem, {
                    id: "copy-link",
                    label: o.default.Messages.COPY_MESSAGE_LINK,
                    icon: i.default,
                    action: () => {
                        (0, a.copy)("".concat(location.protocol, "//").concat(location.host).concat(r.Routes.CHANNEL(t.guild_id, t.id, e.id))), u.default.track(r.AnalyticEvents.MESSAGE_LINK_COPIED, {
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
                u = n("249561"),
                d = n("300322"),
                r = n("957255"),
                o = n("697218"),
                c = n("228220"),
                f = n("49111"),
                E = n("782340");

            function g(e, t) {
                let n = (0, a.useStateFromStores)([o.default], () => o.default.getCurrentUser()),
                    g = (0, d.useIsActiveChannelOrUnarchivableThread)(t),
                    m = (0, a.useStateFromStores)([r.default], () => r.default.can(f.Permissions.MANAGE_MESSAGES, t), [t]);
                return e.state !== f.MessageStates.SENDING && (e.author.id === (null == n ? void 0 : n.id) || m) && e.type in f.MessageTypesDeletable && g ? (0, s.jsx)(l.MenuItem, {
                    id: "delete",
                    label: E.default.Messages.DELETE_MESSAGE,
                    action: function(n) {
                        e.state === f.MessageStates.SEND_FAILED ? i.default.deleteMessage(t.id, e.id, !0) : n.shiftKey ? i.default.deleteMessage(t.id, e.id) : u.default.confirmDelete(t, e, !0)
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
                u = n("456936"),
                d = n("782340");

            function r(e, t) {
                let n = (0, l.useIsActiveChannelOrUnarchivableThread)(t);
                return n ? (0, s.jsx)(a.MenuItem, {
                    id: "mark-unread",
                    label: d.default.Messages.MARK_UNREAD,
                    action: () => (0, u.default)(t.id, e.id),
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
                    return d
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("77078"),
                l = n("773336"),
                i = n("50885"),
                u = n("782340");

            function d(e, t) {
                return l.isPlatformEmbedded && (null == e ? void 0 : e.length) !== 0 ? (0, s.jsx)(a.MenuItem, {
                    id: "copy",
                    label: u.default.Messages.COPY,
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
                    return M
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("77078"),
                l = n("689226"),
                i = n("467475"),
                u = n("24373"),
                d = n("48703"),
                r = n("599110"),
                o = n("128259"),
                c = n("773336"),
                f = n("50885"),
                E = n("146574"),
                g = n("49111"),
                m = n("782340");

            function M(e, t, n, M) {
                let _ = (0, i.default)(null == n ? void 0 : n.getChannelId());
                if (!c.isPlatformEmbedded || null == e || "" === e || _ || (null == M ? void 0 : M.shouldHideMediaOptions) === !0 || null != e && null != (0, u.isStickerAssetUrl)(e) || null != e && (0, l.isRoleIconAssetUrl)(e)) return null;
                let h = (0, d.getHostname)(e),
                    N = n => {
                        r.default.track(g.AnalyticEvents.CONTEXT_MENU_LINK_OPENED, {
                            hostname: h,
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
                            hostname: h,
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
                u = n("77078"),
                d = n("599110"),
                r = n("773336"),
                o = n("49111"),
                c = n("782340");

            function f(e) {
                let t = a.useCallback(() => {
                    i(null != e, "text cannot be null"), d.default.track(o.AnalyticEvents.MESSAGE_MENU_GOOGLE_SEARCHED), window.open("https://www.google.com/search?q=".concat(encodeURIComponent(e)), "_blank")
                }, [e]);
                return r.isPlatformEmbedded && null != e && (null == e ? void 0 : e.length) !== 0 ? [(0, s.jsx)(u.MenuItem, {
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
                u = n("446674"),
                d = n("77078"),
                r = n("240249"),
                o = n("524768"),
                c = n("389153"),
                f = n("916565"),
                E = n("355263"),
                g = n("633043"),
                m = n("305961"),
                M = n("317041"),
                _ = n("782340"),
                h = n("205735"),
                N = e => {
                    let {
                        commandType: t,
                        commandTargetId: n,
                        channel: l,
                        guildId: N,
                        onShow: S
                    } = e, C = a.useRef(!1), p = a.useRef(0), I = (0, u.useStateFromStores)([m.default], () => m.default.getGuild(null != N ? N : l.guild_id)), {
                        hasMoreAfter: A,
                        scrollDown: T,
                        sectionDescriptors: D,
                        commands: v,
                        placeholders: O
                    } = r.useDiscovery(l, {
                        commandType: t
                    }, {
                        placeholderCount: M.CONTEXT_MENU_PLACEHOLDER_COUNT,
                        limit: M.CONTEXT_MENU_COMMANDS_QUERY_LIMIT
                    }), {
                        visibleCommands: P,
                        sections: x
                    } = a.useMemo(() => {
                        let e = v.concat(O),
                            t = {};
                        return D.forEach(e => {
                            t[e.id] = e
                        }), {
                            visibleCommands: e,
                            sections: t
                        }
                    }, [v, D, O]), L = a.useMemo(() => (0, c.canUseContextMenuCommands)(l, P.length, r.getCommandTypeCount(l, t, null == I ? void 0 : I.applicationCommandCounts)), [l, t, P.length, null == I ? void 0 : I.applicationCommandCounts]);
                    a.useEffect(() => {
                        if (L !== C.current) {
                            if (L) null == S || S();
                            C.current = L
                        }
                    }, [L, S]), a.useEffect(() => {
                        R(p.current)
                    }, [P]);
                    let R = a.useCallback(e => {
                            A && e + 500 > 34 * P.length - 40 && T(), p.current = e
                        }, [A, T, P]),
                        G = a.useCallback(e => {
                            if (e.inputType === o.ApplicationCommandInputType.PLACEHOLDER) return (0, s.jsx)(d.MenuItem, {
                                id: "menu-command-".concat(e.id),
                                render: () => (0, s.jsx)(g.default, {})
                            }, "menu-command-".concat(e.id));
                            i(null != l, "menu item should not show if channel is null");
                            let t = x[e.applicationId],
                                a = null != t ? (0, E.getIconComponent)(t) : void 0;
                            return (0, s.jsx)(d.MenuItem, {
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
                        }, [l, I, n, x]);
                    return L && (0, s.jsx)(d.MenuItem, {
                        id: "apps",
                        label: _.default.Messages.APPS,
                        onChildrenScroll: R,
                        childRowHeight: 34,
                        listClassName: h.list,
                        disabled: 0 === P.length,
                        children: P.map(G)
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
                u = n("692038"),
                d = n("915639"),
                r = n("42203"),
                o = n("26989"),
                c = n("305961"),
                f = n("377253"),
                E = n("27618"),
                g = n("697218");
            let m = {};

            function M(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    a = r.default.getChannel(e),
                    l = null != a ? a.getGuildId() : null;
                return {
                    id: e,
                    messages: t.map(e => (0, u.createMessageRecord)(e)),
                    guildId: l,
                    loaded: n,
                    loading: s
                }
            }

            function _(e) {
                let {
                    channel: t
                } = e;
                delete m[t.id]
            }

            function h() {
                a.forEach(m, e => {
                    a.forEach(e.messages, e => {
                        e.timestamp.locale(d.default.locale)
                    })
                })
            }

            function N() {
                a.forEach(m, e => {
                    e.messages = e.messages.map(e => e.set("blocked", E.default.isBlocked(e.author.id)))
                })
            }
            class S extends l.default.Store {
                initialize() {
                    this.waitFor(r.default, c.default, o.default, f.default, g.default, d.default)
                }
                getPinnedMessages(e) {
                    var t;
                    return null !== (t = m[e]) && void 0 !== t ? t : void 0
                }
                loaded(e) {
                    return null != m[e] && m[e].loaded
                }
            }
            S.displayName = "ChannelPinsStore";
            var C = new S(i.default, {
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
                                    a = (0, u.updateMessageRecord)(t, e.message);
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
                            s = M(n, [e.message], !1), m[n] = s;
                            return
                        }
                        s.messages = s.messages.slice();
                        let l = a.findIndex(s.messages, e => e.id === t); - 1 === l ? s.messages.unshift((0, u.createMessageRecord)(e.message)) : s.messages[l] = (0, u.updateMessageRecord)(s.messages[l], e.message), m[n] = s
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
                    m[t] = M(t, [], !1, !0)
                },
                LOAD_PINNED_MESSAGES_SUCCESS: function(e) {
                    let {
                        channelId: t,
                        messages: n
                    } = e;
                    m[t] = M(t, n, !0)
                },
                LOAD_PINNED_MESSAGES_FAILURE: function(e) {
                    let {
                        channelId: t
                    } = e;
                    delete m[t]
                },
                USER_SETTINGS_PROTO_UPDATE: h,
                I18N_LOAD_SUCCESS: h,
                CHANNEL_DELETE: _,
                THREAD_DELETE: _,
                RELATIONSHIP_ADD: N,
                RELATIONSHIP_REMOVE: N
            })
        },
        870190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canReportMessage: function() {
                    return d
                },
                canDeleteAndReportMessage: function() {
                    return r
                }
            });
            var s = n("42203"),
                a = n("525065"),
                l = n("957255"),
                i = n("697218"),
                u = n("49111");

            function d(e) {
                return null != e && function(e) {
                    if (null == e) return !1;
                    let t = e.id,
                        n = i.default.getCurrentUser();
                    return null != n && n.id !== t && !0 !== e.system && !0
                }(e.author)
            }

            function r(e) {
                return null != e && d(e) && function(e) {
                    let t = s.default.getChannel(e);
                    if (null == t) return !1;
                    if (t.type === u.ChannelTypes.DM || t.type === u.ChannelTypes.GROUP_DM) return !0;
                    if (l.default.canWithPartialContext(u.Permissions.MANAGE_MESSAGES, {
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