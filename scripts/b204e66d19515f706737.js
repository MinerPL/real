(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["3569"], {
        445356: function(e, t, l) {
            "use strict";
            e.exports = l.p + "c8718df1382ba878f1fc.svg"
        },
        460287: function(e, t, l) {
            "use strict";
            e.exports = l.p + "08e581a604e6635d1424.svg"
        },
        137223: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                RichTagTypes: function() {
                    return n
                },
                SearchBarIcon: function() {
                    return T
                },
                default: function() {
                    return R
                }
            });
            var a, n, s = l("37983"),
                r = l("884691"),
                i = l("414456"),
                o = l.n(i),
                u = l("77078"),
                d = l("109024"),
                c = l("945330"),
                f = l("229915"),
                S = l("439932"),
                h = l("49111"),
                A = l("782340"),
                g = l("515315");
            let E = Object.freeze({
                SMALL: g.small,
                MEDIUM: g.medium,
                LARGE: g.large
            });
            (a = n || (n = {})).MEMBER = "MEMBER", a.ROLE = "ROLE", a.CHANNEL = "CHANNEL", a.GUILD = "GUILD", a.USER = "USER";
            let T = e => {
                let {
                    hasContent: t,
                    onClear: l,
                    className: a,
                    themeOverride: n,
                    size: r = E.SMALL
                } = e;
                return (0, s.jsx)(u.Clickable, {
                    className: o(a, g.iconLayout, r, (0, S.getThemeClass)(n), {
                        [g.clear]: t
                    }),
                    onClick: e => {
                        e.stopPropagation(), null != l && l(e)
                    },
                    onMouseDown: e => {
                        e.preventDefault(), e.stopPropagation()
                    },
                    tabIndex: t ? 0 : -1,
                    "aria-hidden": !t,
                    "aria-label": A.default.Messages.SEARCH_CLEAR,
                    focusProps: {
                        offset: 4
                    },
                    children: (0, s.jsxs)("div", {
                        className: g.iconContainer,
                        children: [(0, s.jsx)(f.default, {
                            className: o({
                                [g.icon]: !0,
                                [g.visible]: !t
                            })
                        }), (0, s.jsx)(c.default, {
                            className: o({
                                [g.icon]: !0,
                                [g.visible]: t
                            })
                        })]
                    })
                })
            };
            class _ extends r.Component {
                componentDidUpdate(e) {
                    let {
                        focusAfterReady: t,
                        isReady: l
                    } = this.props;
                    t && !e.isReady && l && this.focus()
                }
                handleKeyDownGrid(e) {
                    let {
                        selectedRow: t,
                        selectedColumn: l,
                        sections: a,
                        query: n,
                        tags: s,
                        onSelectionChange: r,
                        onSelect: i,
                        onRemoveTag: o,
                        preventEscapePropagation: u
                    } = this.props;
                    if (0 !== a.length) {
                        switch (e.keyCode) {
                            case h.KeyboardKeys.BACKSPACE:
                                if ((null == n || 0 === n.length) && null != s && s.length > 0) e.preventDefault(), e.stopPropagation(), null == o || o(s.length - 1);
                                break;
                            case h.KeyboardKeys.ARROW_DOWN:
                                e.preventDefault(), e.stopPropagation(), -1 === t ? (t = 0, l = 0) : ((t += 1) >= a.length && (t = a.length - 1), l >= a[t] && (l = a[t] - 1));
                                break;
                            case h.KeyboardKeys.ARROW_UP:
                                e.preventDefault(), e.stopPropagation(), (t -= 1) < 0 ? (t = 0, l = 0) : l >= a[t] && (l = a[t] - 1);
                                break;
                            case h.KeyboardKeys.ARROW_LEFT:
                                e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (l -= 1) < 0 && ((t -= 1) >= 0 ? l = a[t] - 1 : t < 0 && (t = 0, l = 0));
                                break;
                            case h.KeyboardKeys.ARROW_RIGHT:
                                e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (l += 1) >= a[t] && (l = 0, (t += 1) >= a.length && (t = a.length - 1, l = a[t] - 1));
                                break;
                            case h.KeyboardKeys.ENTER:
                                if (e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), -1 === l && (l = 0), t >= a.length || l >= a[t]) return;
                                null != i && i(t, l, e);
                                return;
                            case h.KeyboardKeys.ESCAPE:
                                e.preventDefault(), u && e.stopPropagation(), null != i && i(null, null, e);
                                return;
                            default:
                                return
                        }
                        null != r && r(t, l)
                    }
                }
                handleKeyDownList(e) {
                    var t, l;
                    let {
                        sections: a,
                        selectedSection: n,
                        selectedRow: s,
                        onSelect: r,
                        onSelectionChange: i,
                        query: o,
                        tags: u,
                        preventEscapePropagation: d
                    } = this.props, {
                        current: c
                    } = this.ref;
                    if (null != c) switch (e.keyCode) {
                        case h.KeyboardKeys.BACKSPACE:
                            (null == o || 0 === o.length) && null != u && u.length > 0 && (e.preventDefault(), e.stopPropagation(), null === (t = (l = this.props).onRemoveTag) || void 0 === t || t.call(l, u.length - 1));
                            break;
                        case h.KeyboardKeys.ARROW_DOWN:
                            e.preventDefault(), e.stopPropagation(), a.length > n && ++s >= a[n] && (++n >= a.length && (n = 0), s = 0), null == i || i(n, s);
                            break;
                        case h.KeyboardKeys.ARROW_UP:
                            e.preventDefault(), e.stopPropagation(), --s < 0 && (--n < 0 && (n = a.length - 1), s = a[n] - 1), null == i || i(n, s);
                            break;
                        case h.KeyboardKeys.ENTER:
                            e.preventDefault(), e.stopPropagation(), a.length > n && a[n] > s && (null == r || r(n, s, e));
                            break;
                        case h.KeyboardKeys.ESCAPE:
                            e.preventDefault(), d && e.stopPropagation(), null == r || r(null, null, e), c.blur()
                    }
                }
                render() {
                    let {
                        autoFocus: e,
                        query: t,
                        placeholder: l = A.default.Messages.DM_SEARCH_PLACEHOLDER,
                        themeOverride: a,
                        disabled: r,
                        onClear: i,
                        size: f,
                        maxHeight: h,
                        tags: E,
                        onActivate: _,
                        className: R,
                        inputProps: p,
                        focusAfterReady: I
                    } = this.props, v = null != t && t.length > 0, D = !1, m = [];
                    return null != E && E.length > 0 && ("string" == typeof E[0] ? E.forEach((e, t) => m.push((0, s.jsxs)(u.Anchor, {
                        focusProps: {
                            offset: 4
                        },
                        className: g.tag,
                        onClick: this.handleRemoveTag.bind(this, t),
                        children: [e, (0, s.jsx)(c.default, {
                            className: g.close,
                            "aria-label": A.default.Messages.REMOVE
                        })]
                    }, t))) : (D = !0, E.forEach((e, t) => m.push((0, s.jsxs)(u.Anchor, {
                        className: o(g.tag, g.richTag),
                        onClick: this.handleRemoveTag.bind(this, t),
                        children: [(e.type === n.MEMBER || e.type === n.USER) && null != e.avatar && (0, s.jsx)(u.Avatar, {
                            src: e.avatar,
                            "aria-hidden": !0,
                            size: u.AvatarSizes.SIZE_16
                        }), e.type === n.ROLE && null != e.color && (0, s.jsx)("span", {
                            className: g.tagRoleColor,
                            style: {
                                backgroundColor: e.color
                            }
                        }), e.type === n.GUILD && null != e.guild && (0, s.jsx)(d.default, {
                            guild: e.guild,
                            active: !0,
                            size: d.default.Sizes.SMOL
                        }), (0, s.jsx)("span", {
                            className: g.tagLabel,
                            children: e.label
                        }), (0, s.jsx)(c.default, {
                            className: g.close,
                            "aria-label": A.default.Messages.REMOVE
                        })]
                    }, t))))), (0, s.jsx)(u.FocusRing, {
                        focusTarget: this.ref,
                        ringTarget: this.containerRef,
                        children: (0, s.jsx)("div", {
                            ref: this.containerRef,
                            className: o(R, g.container, f, (0, S.getThemeClass)(a), {
                                [g.disabled]: r
                            }),
                            children: (0, s.jsxs)(u.ScrollerThin, {
                                className: g.inner,
                                style: {
                                    maxHeight: h
                                },
                                children: [m, (0, s.jsx)("input", {
                                    className: o(g.input, {
                                        [g.richTagInput]: D
                                    }),
                                    type: "text",
                                    ref: this.ref,
                                    spellCheck: "false",
                                    placeholder: l,
                                    value: t,
                                    onChange: this.handleChange,
                                    onKeyDown: this.handleKeyDown,
                                    onFocus: this.handleFocus,
                                    disabled: r,
                                    "aria-disabled": r,
                                    autoFocus: !I && e,
                                    onMouseDown: _,
                                    ...this.defaultInputProps,
                                    ...p
                                }), null != i ? (0, s.jsx)(T, {
                                    size: f,
                                    themeOverride: a,
                                    hasContent: v,
                                    onClear: this.handleClear
                                }) : null]
                            })
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.defaultInputProps = {
                        role: "combobox",
                        "aria-haspopup": "listbox",
                        "aria-autocomplete": "list"
                    }, this.ref = r.createRef(), this.containerRef = r.createRef(), this.handleKeyDown = e => {
                        let {
                            onActivate: t,
                            onKeyDown: l,
                            onQueryChange: a,
                            useKeyboardNavigation: n
                        } = this.props;
                        null != l && l(e);
                        let {
                            current: s
                        } = this.ref;
                        if (null == s || null != t) {
                            e.keyCode !== h.KeyboardKeys.TAB && null != t && t(e);
                            return
                        }
                        if (e.keyCode === h.KeyboardKeys.ESCAPE && null != s.value && "" !== s.value && s.value.length > 0) {
                            s.value = "", null != a && a("");
                            return
                        }
                        n && (this.props.gridResults ? this.handleKeyDownGrid(e) : this.handleKeyDownList(e))
                    }, this.handleChange = e => {
                        let {
                            onQueryChange: t
                        } = this.props;
                        null != t && t(e.currentTarget.value)
                    }, this.handleFocus = e => {
                        let {
                            onFocus: t
                        } = this.props;
                        null != t && t(e)
                    }, this.handleClear = () => {
                        let {
                            onClear: e
                        } = this.props, {
                            current: t
                        } = this.ref;
                        null != e && e(), null != t && t.focus()
                    }, this.handleRemoveTag = e => {
                        let {
                            onRemoveTag: t
                        } = this.props;
                        null == t || t(e)
                    }, this.focus = () => {
                        let {
                            current: e
                        } = this.ref;
                        null != e && e.focus()
                    }
                }
            }
            _.Sizes = E, _.defaultProps = {
                size: E.SMALL,
                query: "",
                sections: [],
                selectedSection: 0,
                selectedRow: -1,
                selectedColumn: -1,
                gridResults: !1,
                disabled: !1,
                autoFocus: !1,
                preventEscapePropagation: !0,
                useKeyboardNavigation: !0
            };
            var R = _
        },
        305861: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                ShieldUserIcon: function() {
                    return r
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("669491"),
                s = l("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: r = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...o
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M3.473 5.182c.268-.403.64-.739 1.09-.964l6.095-3.047a3 3 0 0 1 2.684 0l6.095 3.047A2.828 2.828 0 0 1 21 6.748v3.034a14.167 14.167 0 0 1-1.831 6.972 14.176 14.176 0 0 1-6.593 5.99 1.419 1.419 0 0 1-1.152 0 14.176 14.176 0 0 1-6.593-5.99A14.168 14.168 0 0 1 3 9.781V6.748c0-.568.17-1.11.473-1.566Zm2.945 10.305A12.179 12.179 0 0 0 12 20.808a12.179 12.179 0 0 0 5.582-5.32A9.49 9.49 0 0 0 12.467 14h-.934a9.489 9.489 0 0 0-5.115 1.487ZM12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        clipRule: "evenodd",
                        className: i
                    })
                })
            }
        },
        844153: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                BROADCASTING_GUILDS_MAX_MEMBER_COUNT: function() {
                    return a
                },
                BROADCASTING_MAX_ALLOWED_GUILD_IDS: function() {
                    return n
                },
                BROADCASTING_MAX_ALLOWED_USER_IDS: function() {
                    return s
                }
            });
            let a = 200,
                n = 10,
                s = 10
        },
        194051: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return I
                }
            });
            var a, n, s = l("917351"),
                r = l("446674"),
                i = l("407846"),
                o = l("913144"),
                u = l("766274"),
                d = l("271938"),
                c = l("9759"),
                f = l("837374");
            (a = n || (n = {}))[a.INVALID = 0] = "INVALID", a[a.VALID_USER_ONLY = 1] = "VALID_USER_ONLY", a[a.VALID = 2] = "VALID";
            let S = new Set,
                h = new Set,
                A = new Set,
                g = [],
                E = {
                    BROADCASTS_BY_USER_ID: e => "user:".concat(e),
                    BROADCASTS_BY_CHANNEL_ID: e => "channel:".concat(e),
                    BROADCASTS_BY_VALIDITY: e => "validity:".concat(e)
                },
                T = new i.default(function(e) {
                    let t = S.has(e.userId) ? n.VALID_USER_ONLY : n.INVALID;
                    return null != e.viewers && (t = n.VALID), [E.BROADCASTS_BY_USER_ID(e.userId), E.BROADCASTS_BY_CHANNEL_ID(e.channelId), E.BROADCASTS_BY_VALIDITY(t)]
                }, e => e.channelId);

            function _(e, t, l) {
                if (d.default.getId() === e) return !1;
                if (null == t) {
                    let t = T.get(e);
                    return !!(null != t && (0, s.isEqual)(t.source, l)) && (T.delete(e), void 0)
                }!S.has(e) && !h.has(e) && (A.add(e), g = [...A]);
                let a = (0, f.broadcastFromServer)(t, e, l);
                T.set(e, a)
            }

            function R(e) {
                return null != e ? {
                    type: f.BroadcastSourceType.GUILD,
                    guildId: e
                } : {
                    type: f.BroadcastSourceType.GLOBAL
                }
            }
            class p extends r.default.Store {
                getBroadcasts() {
                    return T.values(E.BROADCASTS_BY_VALIDITY(n.VALID))
                }
                getBroadcastsToValidateChannels() {
                    return T.values(E.BROADCASTS_BY_VALIDITY(n.VALID_USER_ONLY))
                }
                getBroadcastByChannel(e) {
                    return T.values(E.BROADCASTS_BY_CHANNEL_ID(e))[0]
                }
                getBroadcastByUser(e) {
                    return T.get(e)
                }
                getUserIdsToValidate() {
                    return g
                }
            }
            p.displayName = "BroadcastingStore";
            var I = new p(o.default, {
                PRESENCE_UPDATES: function(e) {
                    let {
                        updates: t
                    } = e;
                    return t.forEach(e => {
                        let {
                            user: t,
                            broadcast: l,
                            guildId: a
                        } = e;
                        _(t.id, l, R(a))
                    })
                },
                PRESENCES_REPLACE: function(e) {
                    let {
                        presences: t
                    } = e;
                    return t.forEach(e => {
                        let {
                            user: t,
                            broadcast: l,
                            guildId: a
                        } = e;
                        _(t.id, l, R(a))
                    })
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
                    let {
                        presences: t,
                        guilds: l
                    } = e;
                    t.forEach(e => {
                        let {
                            user: t,
                            broadcast: l,
                            guildId: a
                        } = e;
                        _(t.id, l, R(a))
                    }), l.forEach(e => {
                        let {
                            presences: t,
                            id: l
                        } = e;
                        t.forEach(e => {
                            let {
                                user: t,
                                broadcast: a
                            } = e;
                            _(t.id, a, R(l))
                        })
                    })
                },
                BROADCASTER_BUCKETS_RECEIVED: function(e) {
                    let {
                        data: t
                    } = e;
                    Object.keys(t).forEach(e => {
                        c.CAN_VIEW_BROADCASTS_BUCKETS.includes(t[e]) ? S.add(e) : h.add(e), A.clear(), g = [...A];
                        let l = T.get(e);
                        null != l && (T.delete(e), T.set(e, l))
                    })
                },
                BROADCAST_VIEWERS_UPDATE: function(e) {
                    let {
                        viewers: t
                    } = e;
                    Object.entries(t).forEach(e => {
                        let [t, l] = e, a = T.get(t);
                        null != a && T.set(t, {
                            ...a,
                            viewers: l
                        })
                    })
                },
                CHANNEL_RECIPIENT_ADD: function(e) {
                    let {
                        channelId: t,
                        user: l
                    } = e, a = T.values(E.BROADCASTS_BY_CHANNEL_ID(t))[0];
                    if (null == a || null == a.viewers || a.viewers.some(e => e.id === l.id)) return !1;
                    T.set(a.userId, {
                        ...a,
                        viewers: [...a.viewers, new u.default(l)]
                    })
                },
                CHANNEL_RECIPIENT_REMOVE: function(e) {
                    let {
                        channelId: t,
                        user: l
                    } = e, a = T.values(E.BROADCASTS_BY_CHANNEL_ID(t))[0];
                    if (null == a || null == a.viewers) return !1;
                    T.set(a.userId, {
                        ...a,
                        viewers: a.viewers.filter(e => e.id !== l.id)
                    })
                },
                CHANNEL_CREATE: function(e) {
                    var t;
                    let {
                        channel: l
                    } = e, a = T.values(E.BROADCASTS_BY_CHANNEL_ID(l.id))[0];
                    if (null == a) return !1;
                    let n = null !== (t = l.rawRecipients) && void 0 !== t ? t : [];
                    T.set(a.userId, {
                        ...a,
                        viewers: n.filter(e => e.id !== a.userId).map(e => new u.default(e))
                    })
                },
                LOGOUT: function() {
                    S.clear(), h.clear(), A.clear(), g = [], T.clear()
                }
            })
        },
        882278: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            });
            var a = l("884691"),
                n = l("446674"),
                s = l("42203"),
                r = l("697218"),
                i = l("194051"),
                o = l("754493");

            function u(e) {
                var t, l;
                let u = (0, n.useStateFromStores)([r.default], () => r.default.getCurrentUser()),
                    d = (0, n.useStateFromStores)([s.default], () => s.default.getChannel(e)),
                    c = (0, n.useStateFromStores)([i.default], () => null != e ? i.default.getBroadcastByChannel(e) : null),
                    f = (0, o.default)(),
                    S = a.useMemo(() => {
                        var e;
                        return null !== (t = null == d ? void 0 : null === (e = d.recipients) || void 0 === e ? void 0 : e.map(e => r.default.getUser(e)).filter(e => null != e && e.id !== (null == c ? void 0 : c.userId))) && void 0 !== t ? t : []
                    }, [null == c ? void 0 : c.userId, null == d ? void 0 : d.recipients]);
                return null == u ? [] : f ? S : null !== (l = S.length > 0 ? [u].concat(S) : null == c ? void 0 : c.viewers) && void 0 !== l ? l : []
            }
        },
        754493: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                useSelfBroadcast: function() {
                    return u
                },
                default: function() {
                    return d
                },
                useIsBroadcastingInChannel: function() {
                    return c
                },
                isBroadcastingInChannel: function() {
                    return f
                },
                getIsBroadcastingToAnyone: function() {
                    return S
                }
            });
            var a = l("446674"),
                n = l("845579");
            l("373469");
            var s = l("271938"),
                r = l("42203");
            l("18494");
            var i = l("101125"),
                o = l("9759");

            function u() {
                let e = (0, a.useStateFromStores)([s.default], () => s.default.getId()),
                    {
                        canBroadcast: t
                    } = o.default.useExperiment({
                        location: "use_self_broadcast"
                    }, {
                        autoTrackExposure: !1
                    }),
                    l = (0, a.useStateFromStores)([i.default], () => i.default.getBroadcast());
                return t && (null == l ? void 0 : l.userId) === e ? l : null
            }

            function d() {
                let e = u();
                return null != e
            }

            function c(e) {
                let t = u(),
                    l = (0, a.useStateFromStores)([r.default], () => r.default.getChannel(e));
                return null != t && null != l && l.ownerId === t.userId && l.isBroadcastChannel()
            }

            function f(e) {
                let t = s.default.getId(),
                    {
                        canBroadcast: l
                    } = o.default.getCurrentConfig({
                        location: "is_broadcasting_in_channel"
                    }, {
                        autoTrackExposure: !1
                    }),
                    a = i.default.getBroadcast();
                if (!l || null == a || a.userId !== t) return !1;
                let n = r.default.getChannel(e);
                return null != n && n.ownerId === a.userId && n.isBroadcastChannel()
            }

            function S() {
                let e = n.BroadcastAllowedGuildIds.getSetting(),
                    t = n.BroadcastAllowedUserIds.getSetting(),
                    l = n.BroadcastAllowFriends.getSetting();
                return l || e.length > 0 || t.length > 0
            }
            l("194051")
        },
        5920: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                selectedTagFromRowData: function() {
                    return I
                },
                useFilteredGuilds: function() {
                    return v
                },
                useBroadcastingPrivacyAudience: function() {
                    return C
                },
                useBroadcastingStoredSelectedTags: function() {
                    return N
                },
                sanitizeAllowedGuildIds: function() {
                    return y
                },
                sanitizeAllowedUserIds: function() {
                    return L
                }
            });
            var a = l("884691"),
                n = l("627445"),
                s = l.n(n),
                r = l("249654"),
                i = l("446674"),
                o = l("137223"),
                u = l("355313"),
                d = l("845579"),
                c = l("271938"),
                f = l("42203"),
                S = l("525065"),
                h = l("26989"),
                A = l("305961"),
                g = l("27618"),
                E = l("677099"),
                T = l("697218"),
                _ = l("158998"),
                R = l("844153"),
                p = l("606762");

            function I(e) {
                let t;
                return e.rowType === p.RowType.USER ? t = {
                    type: o.RichTagTypes.USER,
                    label: e.name,
                    avatar: e.avatarURL
                } : e.rowType === p.RowType.GUILD && (t = {
                    type: o.RichTagTypes.GUILD,
                    label: e.name,
                    guild: e.guild
                }), s(null != t, "RowData must be a guild or a user"), {
                    display: t,
                    row: e
                }
            }

            function v(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0,
                    l = (0, i.useStateFromStoresArray)([A.default, S.default], () => {
                        let l = [];
                        return e.forEach(e => {
                            var a;
                            let n = A.default.getGuild(e),
                                s = null !== (a = S.default.getMemberCount(e)) && void 0 !== a ? a : R.BROADCASTING_GUILDS_MAX_MEMBER_COUNT;
                            null != n && s < R.BROADCASTING_GUILDS_MAX_MEMBER_COUNT && (null == t ? void 0 : t(n.name)) && l.push(n)
                        }), l
                    }, [e, t]);
                return l
            }

            function D(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0,
                    l = v(e, t),
                    n = a.useMemo(() => l.map(e => ({
                        rowType: p.RowType.GUILD,
                        name: e.name,
                        id: e.id,
                        disabled: !1,
                        guild: e,
                        key: "".concat(p.RowType.GUILD, ":").concat(e.id)
                    })), [l]);
                return n
            }

            function m(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0,
                    l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return e.filter(e => null != e && (null == t ? void 0 : t(e.username))).map(e => ({
                    rowType: p.RowType.USER,
                    name: _.default.getUserTag(e),
                    id: e.id,
                    disabled: l && g.default.isFriend(e.id),
                    avatarURL: e.getAvatarURL(null, 24),
                    key: "".concat(p.RowType.USER, ":").concat(e.id)
                }))
            }

            function C(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0,
                    l = arguments.length > 2 ? arguments[2] : void 0,
                    n = (0, i.useStateFromStores)([E.default], () => E.default.getFlattenedGuildIds()),
                    s = D(n, t),
                    o = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !0,
                            t = arguments.length > 1 ? arguments[1] : void 0,
                            l = arguments.length > 2 ? arguments[2] : void 0,
                            n = (0, i.useStateFromStoresArray)([g.default], () => g.default.getFriendIDs()),
                            s = v(t),
                            o = (0, i.useStateFromStores)([c.default], () => c.default.getId()),
                            u = (0, i.useStateFromStores)([h.default], () => h.default.getMemberVersion()),
                            d = a.useMemo(() => {
                                let e = new Set(n);
                                return s.forEach(t => {
                                    let l = h.default.getMemberIds(t.id);
                                    l.forEach(t => {
                                        !e.has(t) && !g.default.isBlocked(t) && e.add(t)
                                    })
                                }), e
                            }, [s, n, u]),
                            S = (0, i.useStateFromStoresArray)([T.default], () => [...d].map(e => T.default.getUser(e)), [d]),
                            A = S.filter(e => null != e && !e.bot && e.id !== o).sort((e, t) => {
                                let l = f.default.getChannel(f.default.getDMFromUserId(null == e ? void 0 : e.id)),
                                    a = f.default.getChannel(f.default.getDMFromUserId(null == t ? void 0 : t.id));
                                return r.default.compare(null == l ? void 0 : l.lastMessageId, null == a ? void 0 : a.lastMessageId) > 0 ? -1 : 1
                            });
                        return m(A, e, l)
                    }(t, n, l);
                return [o, e ? [] : s]
            }

            function N() {
                let e = d.BroadcastAllowedGuildIds.useSetting(),
                    t = d.BroadcastAllowedUserIds.useSetting(),
                    l = {},
                    a = {};
                if (D(e).forEach(e => {
                        let t = (0, u.getFullRowId)(e);
                        l[t] = I(e)
                    }), t.length > 0) {
                    let e = t.map(e => T.default.getUser(e)).filter(e => null != e);
                    m(e).map(e => {
                        let t = (0, u.getFullRowId)(e);
                        a[t] = I(e)
                    })
                }
                return {
                    [p.RowType.GUILD]: l,
                    [p.RowType.USER]: a
                }
            }

            function y(e) {
                var t;
                let l = c.default.getId(),
                    a = e;
                return a.length > R.BROADCASTING_MAX_ALLOWED_GUILD_IDS && (a = a.slice(0, R.BROADCASTING_MAX_ALLOWED_GUILD_IDS)), a = a.filter(e => h.default.isMember(e, l) && (null !== (t = S.default.getMemberCount(e)) && void 0 !== t ? t : R.BROADCASTING_GUILDS_MAX_MEMBER_COUNT) < R.BROADCASTING_GUILDS_MAX_MEMBER_COUNT)
            }

            function L(e) {
                let t = e;
                return t.length > R.BROADCASTING_MAX_ALLOWED_USER_IDS && (t = t.slice(0, R.BROADCASTING_MAX_ALLOWED_USER_IDS)), t
            }
        },
        835236: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("414456"),
                s = l.n(n),
                r = l("77078"),
                i = l("355313"),
                o = l("837899"),
                u = l("425190"),
                d = l("782340"),
                c = l("960320");

            function f(e) {
                let {
                    selectedTags: t,
                    title: l,
                    hintText: n,
                    placeholderText: f,
                    expanded: S,
                    setExpanded: h,
                    users: A,
                    guilds: g,
                    query: E,
                    maxCount: T,
                    onQueryChange: _,
                    onClickRow: R,
                    onRemoveTag: p
                } = e;
                return (0, a.jsx)(r.Collapsible, {
                    className: c.collapsible,
                    isExpanded: S,
                    collapsibleContent: (0, a.jsx)("div", {
                        className: s(c.collapsibleContent, {
                            [c.visible]: S
                        }),
                        children: (0, a.jsx)(i.default, {
                            listClassName: c.list,
                            pendingAdditions: t,
                            query: E,
                            onQueryChange: _,
                            onClickRow: R,
                            onRemovePendingAddition: p,
                            users: A,
                            guilds: g,
                            renderEmptyText: e => d.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_NO_RESULT.format({
                                query: e
                            }),
                            hintText: n,
                            placeholderText: f,
                            disabledText: d.default.Messages.BROADCASTING_SETTINGS_MODAL_DISABLED_DESCRIPTION,
                            maxCount: T,
                            hideRowLabel: !0
                        })
                    }),
                    children: e => {
                        let {
                            onClick: t
                        } = e;
                        return (0, a.jsxs)(r.Clickable, {
                            className: c.content,
                            onClick: e => {
                                h(!S), t(e)
                            },
                            children: [(0, a.jsx)(r.Heading, {
                                variant: "text-sm/normal",
                                children: l
                            }), S ? (0, a.jsx)(u.default, {}) : (0, a.jsx)(o.default, {})]
                        })
                    }
                })
            }
        },
        725420: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return m
                }
            });
            var a = l("37983"),
                n = l("884691"),
                s = l("917351"),
                r = l("446674"),
                i = l("750028"),
                o = l("77078"),
                u = l("716241"),
                d = l("355313"),
                c = l("845579"),
                f = l("872173"),
                S = l("305961"),
                h = l("651879"),
                A = l("655518"),
                g = l("882278"),
                E = l("754493"),
                T = l("5920"),
                _ = l("835236"),
                R = l("844153"),
                p = l("49111"),
                I = l("606762"),
                v = l("782340"),
                D = l("147594");

            function m(e) {
                let {
                    headerText: t = v.default.Messages.BROADCASTING_SETTINGS,
                    buttonCTA: l = v.default.Messages.BROADCAST_SETTINGS_SAVE,
                    transitionState: m,
                    onClose: C,
                    onSave: N
                } = e, y = (0, T.useBroadcastingStoredSelectedTags)(), [L, O] = n.useState(y), [x, b] = n.useState(""), M = c.BroadcastAllowFriends.useSetting(), [w, B] = n.useState(null == M || M), U = c.BroadcastAutoBroadcast.useSetting(), [G, j] = n.useState(U), [P, k] = n.useState(!1), [F, K] = n.useState(!1), H = (0, E.useSelfBroadcast)(), V = (0, g.default)(null == H ? void 0 : H.channelId), z = null != H, W = n.useMemo(() => M !== w || !(0, s.isEqual)(y, L) || U !== G, [M, w, y, L, U, G]), Y = null != N, X = n.useMemo(() => w || Object.keys(L[I.RowType.USER]).length > 0 || Object.keys(L[I.RowType.GUILD]).length > 0, [w, L]), q = !X && z || !X && Y || !W && !Y, Z = n.useMemo(() => "@" === x.trim().charAt(0), [x]), Q = (0, r.useStateFromStoresArray)([S.default], () => S.default.getGuildIds()), J = (0, T.useFilteredGuilds)(Q), $ = n.useMemo(() => J.map(e => e.id), [J]), [ee, et] = (0, T.useBroadcastingPrivacyAudience)(Z, function(e) {
                    var t;
                    let l = (t = x.trim(), Z ? t.slice(1) : t),
                        a = RegExp("".concat(A.default.escape(l)), "i");
                    return a.test(e)
                }, w);

                function el() {
                    var e;
                    null == N || N();
                    let [t, l] = er();
                    u.default.trackWithMetadata(p.AnalyticEvents.BROADCAST_SETTINGS_UPDATED, {
                        auto_broadcast: G,
                        broadcast_to_all_friends: w,
                        num_allowed_users_in_broadcast: l.length,
                        allowed_users: l,
                        num_guilds_in_broadcast: t.length,
                        guilds: t,
                        num_viewers_in_broadcast: V.length,
                        current_viewers: null !== (e = V.map(e => e.id)) && void 0 !== e ? e : [],
                        started_broadcast: Y
                    })
                }

                function ea(e) {
                    b(e)
                }

                function en(e, t) {
                    let l = (0, d.getFullRowId)(t);
                    O(a => {
                        let n = {
                            ...a
                        };
                        return n[e] = {
                            ...n[e]
                        }, l in n[e] ? delete n[e][l] : n[e][l] = (0, T.selectedTagFromRowData)(t), n
                    })
                }

                function es(e, t) {
                    O(l => {
                        let a = {
                            ...l
                        };
                        return a[e] = {
                            ...a[e]
                        }, delete a[e][t], a
                    })
                }

                function er() {
                    let e = new Set,
                        t = new Set;
                    Object.values(L[I.RowType.USER]).forEach(e => {
                        let {
                            row: l
                        } = e;
                        return t.add(l.id)
                    }), Object.values(L[I.RowType.GUILD]).forEach(t => {
                        let {
                            row: l
                        } = t;
                        return e.add(l.id)
                    });
                    let l = (0, T.sanitizeAllowedGuildIds)(Array.from(e)),
                        a = (0, T.sanitizeAllowedUserIds)(Array.from(t));
                    return [l, a]
                }
                return n.useEffect(() => {
                    u.default.trackWithMetadata(p.AnalyticEvents.OPEN_MODAL, {
                        type: Y ? "Start Broadcast" : "Update Broadcast"
                    })
                }, [Y]), n.useEffect(() => {
                    let e = (0, s.chunk)($, 100);
                    e.forEach(e => {
                        h.default.requestMembers(e, x.trim())
                    })
                }, [$, x]), (0, a.jsxs)(o.ModalRoot, {
                    transitionState: m,
                    children: [(0, a.jsx)(o.Heading, {
                        variant: "heading-xl/semibold",
                        className: D.header,
                        children: t
                    }), (0, a.jsx)(o.ModalCloseButton, {
                        onClick: C,
                        className: D.close
                    }), (0, a.jsxs)(o.ModalContent, {
                        className: D.content,
                        paddingFix: !1,
                        children: [(0, a.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: D.description,
                            children: v.default.Messages.BROADCASTING_DESCRIPTION
                        }), (0, a.jsx)(o.FormTitle, {
                            tag: o.FormTitleTags.H5,
                            className: D.title,
                            children: v.default.Messages.BROADCASTING_SETTINGS_MODAL_AUDIENCE_TITLE
                        }), (0, a.jsxs)("div", {
                            className: D.switch,
                            children: [(0, a.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                children: v.default.Messages.BROADCASTING_SETTINGS_MODAL_FRIENDS
                            }), (0, a.jsx)(o.Switch, {
                                checked: w,
                                onChange: e => {
                                    B(e)
                                }
                            })]
                        }), (0, a.jsx)(_.default, {
                            selectedTags: L[I.RowType.USER],
                            query: x,
                            onQueryChange: ea,
                            onClickRow: e => en(I.RowType.USER, e),
                            onRemoveTag: e => es(I.RowType.USER, e),
                            title: v.default.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_USERS,
                            hintText: v.default.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_USERS_HINT.format({
                                count: R.BROADCASTING_MAX_ALLOWED_USER_IDS
                            }),
                            placeholderText: v.default.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_AUDIENCE_PLACEHOLDER_USERS,
                            users: ee,
                            expanded: P,
                            setExpanded: e => {
                                ea(""), k(e), K(!1)
                            },
                            maxCount: R.BROADCASTING_MAX_ALLOWED_USER_IDS
                        }), (0, a.jsx)(_.default, {
                            selectedTags: L[I.RowType.GUILD],
                            query: x,
                            onQueryChange: ea,
                            onClickRow: e => en(I.RowType.GUILD, e),
                            onRemoveTag: e => es(I.RowType.GUILD, e),
                            title: v.default.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_GUILDS,
                            hintText: v.default.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_GUILDS_HINT.format({
                                count: R.BROADCASTING_MAX_ALLOWED_GUILD_IDS
                            }),
                            placeholderText: v.default.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_AUDIENCE_PLACEHOLDER_GUILDS,
                            guilds: et,
                            expanded: F,
                            setExpanded: e => {
                                ea(""), K(e), k(!1)
                            },
                            maxCount: R.BROADCASTING_MAX_ALLOWED_GUILD_IDS
                        }), (0, a.jsx)(o.FormTitle, {
                            tag: o.FormTitleTags.H5,
                            className: D.title,
                            children: v.default.Messages.BROADCASTING_SETTINGS_MODAL_BEHAVIOR_TITLE
                        }), (0, a.jsxs)("div", {
                            className: D.switch,
                            children: [(0, a.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                children: v.default.Messages.AUTO_BROADCAST_TOGGLE
                            }), (0, a.jsx)(o.Switch, {
                                checked: G,
                                onChange: j
                            })]
                        })]
                    }), (0, a.jsx)(o.ModalFooter, {
                        children: (0, a.jsx)(o.Button, {
                            disabled: q,
                            onClick: function() {
                                if (!q) {
                                    if (W) {
                                        let [e, t] = er();
                                        f.PreloadedUserSettingsActionCreators.updateAsync("broadcast", l => {
                                            l.allowedGuildIds = e, l.allowedUserIds = t, l.allowFriends = i.BoolValue.create({
                                                value: w
                                            }), l.autoBroadcast = i.BoolValue.create({
                                                value: G
                                            }), el(), C()
                                        }, f.UserSettingsDelay.INFREQUENT_USER_ACTION);
                                        return
                                    }
                                    el(), C()
                                }
                            },
                            children: l
                        })
                    })]
                })
            }
        },
        355313: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                getFullRowId: function() {
                    return I
                },
                default: function() {
                    return m
                }
            });
            var a = l("37983"),
                n = l("884691"),
                s = l("414456"),
                r = l.n(s),
                i = l("974667"),
                o = l("77078"),
                u = l("507453"),
                d = l("79798"),
                c = l("145131"),
                f = l("109024"),
                S = l("476765"),
                h = l("682344"),
                A = l("454273"),
                g = l("191458"),
                E = l("606762"),
                T = l("782340"),
                _ = l("265821");
            let R = (0, S.uid)(),
                p = (0, S.uid)();

            function I(e) {
                return "".concat(e.rowType, ":").concat(e.id)
            }

            function v(e) {
                return (0, a.jsx)(o.FormTitle, {
                    tag: "h5",
                    className: r(_.sectionTitle, _.rowHeight),
                    children: e
                }, e)
            }

            function D(e) {
                let {
                    id: t,
                    children: l,
                    rowLabel: n,
                    checked: s,
                    onSelect: u,
                    disabled: d,
                    showCheckbox: f,
                    selected: S,
                    onMouseEnter: h,
                    "aria-posinset": A,
                    "aria-setsize": g
                } = e, E = (0, i.useListItem)(t);
                return (0, a.jsx)(o.Clickable, {
                    ...E,
                    id: t,
                    className: r(_.addMemberRow, {
                        [_.selectedRow]: S
                    }),
                    onClick: e => {
                        !d && (e.preventDefault(), u())
                    },
                    onMouseEnter: h,
                    role: "option",
                    "aria-disabled": d,
                    "aria-selected": s,
                    "aria-setsize": g,
                    "aria-posinset": A,
                    children: (0, a.jsxs)(c.default, {
                        justify: c.default.Justify.BETWEEN,
                        align: c.default.Align.CENTER,
                        children: [f ? (0, a.jsx)(o.Checkbox, {
                            displayOnly: !0,
                            size: 18,
                            value: s,
                            type: o.Checkbox.Types.INVERTED,
                            disabled: d,
                            children: (0, a.jsx)("div", {
                                className: _.checkboxLabel,
                                children: l
                            })
                        }) : l, null != n ? (0, a.jsx)(o.Text, {
                            color: "text-muted",
                            variant: "text-xs/normal",
                            children: n
                        }) : null]
                    })
                })
            }

            function m(e) {
                let {
                    listClassName: t,
                    pendingAdditions: l,
                    query: s,
                    onQueryChange: i,
                    onClickRow: S,
                    onRemovePendingAddition: m,
                    roles: C = [],
                    members: N = [],
                    users: y = [],
                    guilds: L = [],
                    placeholderText: O,
                    disabledText: x,
                    hintText: b,
                    searchTitleText: M,
                    renderEmptyText: w,
                    focusSearchAfterReady: B,
                    isReady: U,
                    maxCount: G,
                    hideRowLabel: j = !1
                } = e, P = n.useRef(null), k = n.useRef(null), F = [C.length, N.length, y.length, L.length], [K, H] = n.useState(!1), [V, z] = n.useState(0), [W, Y] = n.useState(-1);
                n.useEffect(() => {
                    var e;
                    null === (e = P.current) || void 0 === e || e.focus()
                }, []);
                let X = n.useCallback(function(e, t) {
                        let l = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                        if (z(e), Y(t), l) {
                            var a;
                            null === (a = k.current) || void 0 === a || a.scrollToIndex({
                                section: null != e ? e : 0,
                                row: null != t ? t : 0,
                                padding: 8
                            })
                        }
                    }, []),
                    q = n.useCallback((e, t) => {
                        if (null == t) return;
                        i("");
                        let l = e === E.AudienceSelectorSections.ROLES ? C : [],
                            a = l[t];
                        a.rowType !== E.RowType.EMPTY_STATE && S(a)
                    }, [C, S, i]),
                    Z = n.useCallback(e => {
                        var t;
                        null != e && e.rowType !== E.RowType.EMPTY_STATE && (S(e), i(""), null === (t = P.current) || void 0 === t || t.focus())
                    }, [S, i]),
                    Q = n.useMemo(() => Object.keys(l), [l]),
                    J = n.useMemo(() => N.some(e => !e.disabled) || C.some(e => !e.disabled) || y.some(e => !e.disabled) || L.some(e => !e.disabled), [N, C, y, L]),
                    $ = J || "" === s.trim();

                function ee() {
                    var e;
                    H(!(null === (e = k.current) || void 0 === e ? void 0 : e.isScrolledToTop()) && $)
                }
                return n.useEffect(() => {
                    ee()
                }), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: r(_.searchBox, {
                            [_.scrollSeparator]: K
                        }),
                        children: [null != M && (0, a.jsx)(o.FormTitle, {
                            tag: o.FormTitleTags.H5,
                            children: M
                        }), (0, a.jsx)(g.default, {
                            ref: P,
                            query: s,
                            onQueryChange: i,
                            selectedSection: V,
                            selectedRow: W,
                            onSelectionChange: X,
                            onSelect: q,
                            tags: Q.map(e => l[e].display),
                            sections: F,
                            onRemoveTag: function(e) {
                                m(Q[e])
                            },
                            placeholder: O,
                            focusAfterReady: B,
                            isReady: U,
                            "aria-labelledby": R,
                            "aria-controls": p
                        }), null != b ? (0, a.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            children: b
                        }) : null]
                    }), $ ? (0, a.jsx)(o.List, {
                        ref: k,
                        className: r(_.roleMemberList, t),
                        sections: F,
                        renderRow: e => {
                            let t, n, {
                                    section: s,
                                    row: i
                                } = e,
                                u = null,
                                c = !1,
                                S = !1,
                                g = !1,
                                T = !c && null != G && Object.keys(l).length >= G;
                            switch (s) {
                                case E.AudienceSelectorSections.ROLES:
                                    c = (n = I(u = C[i])) in l || u.disabled, S = u.disabled || T, g = V === E.AudienceSelectorSections.ROLES && W === i, t = (0, a.jsxs)("div", {
                                        className: _.rowBody,
                                        children: [(0, a.jsx)("div", {
                                            className: r(_.rowHeight, _.alignCenter),
                                            children: (0, a.jsx)(h.default, {
                                                color: u.colorString,
                                                height: 20
                                            })
                                        }), (0, a.jsxs)("div", {
                                            className: _.rowLabel,
                                            children: [(0, a.jsx)(o.Text, {
                                                variant: "text-sm/medium",
                                                className: _.rowTitle,
                                                color: u.rowType === E.RowType.EMPTY_STATE ? "text-muted" : "text-normal",
                                                children: u.name
                                            }), u.disabled && null != x ? (0, a.jsx)(o.Text, {
                                                color: "header-secondary",
                                                variant: "text-xs/normal",
                                                children: x
                                            }) : null]
                                        })]
                                    });
                                    break;
                                case E.AudienceSelectorSections.MEMBERS:
                                    c = (n = I(u = N[i])) in l || u.disabled, S = u.disabled || T, g = V === E.AudienceSelectorSections.MEMBERS && W === i, t = (0, a.jsxs)("div", {
                                        className: _.rowBody,
                                        children: [(0, a.jsx)(o.Avatar, {
                                            src: u.avatarURL,
                                            size: o.AvatarSizes.SIZE_24,
                                            "aria-label": ""
                                        }), (0, a.jsx)(o.Text, {
                                            className: _.rowLabel,
                                            variant: "text-sm/normal",
                                            children: u.name
                                        }), null != u.nickname ? (0, a.jsx)(o.Text, {
                                            color: "text-muted",
                                            className: _.rowLabelSubText,
                                            variant: "text-sm/normal",
                                            "aria-hidden": !0,
                                            children: u.username
                                        }) : null, u.bot && (0, a.jsx)(d.default, {
                                            verified: u.verifiedBot
                                        })]
                                    });
                                    break;
                                case E.AudienceSelectorSections.USERS:
                                    c = (n = I(u = y[i])) in l || u.disabled, S = u.disabled || T, g = V === E.AudienceSelectorSections.USERS && W === i, t = (0, a.jsxs)("div", {
                                        className: _.rowBody,
                                        children: [(0, a.jsx)(o.Avatar, {
                                            src: u.avatarURL,
                                            size: o.AvatarSizes.SIZE_24,
                                            "aria-label": ""
                                        }), (0, a.jsxs)("div", {
                                            className: _.rowLabel,
                                            children: [(0, a.jsx)(o.Text, {
                                                variant: "text-sm/normal",
                                                children: u.name
                                            }), u.disabled && null != x ? (0, a.jsx)(o.Text, {
                                                color: "header-secondary",
                                                variant: "text-xs/normal",
                                                children: x
                                            }) : null]
                                        })]
                                    });
                                    break;
                                case E.AudienceSelectorSections.GUILDS:
                                    c = (n = I(u = L[i])) in l || u.disabled, S = u.disabled || T, g = V === E.AudienceSelectorSections.GUILDS && W === i, t = (0, a.jsxs)("div", {
                                        className: _.rowBody,
                                        children: [(0, a.jsx)(f.default, {
                                            guild: u.guild,
                                            active: !0,
                                            size: f.default.Sizes.SMALLER
                                        }), (0, a.jsx)("div", {
                                            className: _.rowLabel,
                                            children: (0, a.jsx)(o.Text, {
                                                variant: "text-sm/medium",
                                                color: "text-normal",
                                                children: u.name
                                            })
                                        })]
                                    })
                            }
                            return null == u ? null : (0, a.jsx)(D, {
                                id: "user-row-".concat(i),
                                rowLabel: j ? null : A.getRowTypeLabel(u.rowType),
                                checked: c,
                                disabled: S,
                                onSelect: () => Z(u),
                                showCheckbox: u.rowType !== E.RowType.EMPTY_STATE,
                                onMouseEnter: () => X(s, i, !1),
                                selected: g,
                                "aria-posinset": i + 1,
                                "aria-setsize": F.reduce((e, t) => e + t, 0),
                                children: t
                            }, n)
                        },
                        rowHeight: 40,
                        renderSection: e => {
                            let {
                                section: t
                            } = e;
                            switch (t) {
                                case E.AudienceSelectorSections.ROLES:
                                    return v(T.default.Messages.ROLES);
                                case E.AudienceSelectorSections.MEMBERS:
                                    return v(T.default.Messages.MEMBERS);
                                case E.AudienceSelectorSections.USERS:
                                    return v(T.default.Messages.USERS);
                                case E.AudienceSelectorSections.GUILDS:
                                    return v(T.default.Messages.SERVERS)
                            }
                        },
                        sectionHeight: 32,
                        onScroll: ee,
                        role: void 0,
                        innerRole: "listbox",
                        innerId: p,
                        innerAriaMultiselectable: !0,
                        innerAriaOrientation: "vertical"
                    }) : (0, a.jsxs)(c.default, {
                        className: t,
                        align: c.default.Align.CENTER,
                        justify: c.default.Justify.CENTER,
                        direction: c.default.Direction.VERTICAL,
                        children: [(0, a.jsx)(u.default, {
                            className: _.noResultIcon
                        }), (0, a.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            children: w(s)
                        })]
                    })]
                })
            }
        },
        191458: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var a = l("37983"),
                n = l("884691"),
                s = l("137223"),
                r = l("520479");
            let i = n.forwardRef(function(e, t) {
                let {
                    query: l,
                    onQueryChange: n,
                    onRemoveTag: i,
                    onSelect: o,
                    onSelectionChange: u,
                    selectedSection: d,
                    selectedRow: c,
                    tags: f,
                    sections: S,
                    placeholder: h = "",
                    focusAfterReady: A,
                    isReady: g,
                    "aria-labelledby": E,
                    "aria-controls": T
                } = e;
                return (0, a.jsx)(s.default, {
                    autoFocus: !0,
                    className: r.searchBar,
                    maxHeight: 100,
                    onQueryChange: n,
                    onRemoveTag: i,
                    selectedSection: d,
                    selectedRow: c,
                    onSelect: o,
                    onSelectionChange: u,
                    placeholder: 0 === f.length ? h : "",
                    query: l,
                    ref: t,
                    size: s.default.Sizes.MEDIUM,
                    tags: f,
                    sections: S,
                    focusAfterReady: A,
                    isReady: g,
                    inputProps: {
                        "aria-labelledby": E,
                        "aria-controls": T,
                        "aria-expanded": !0,
                        "aria-activedescendant": "user-row-".concat(c)
                    }
                })
            });
            var o = i
        },
        685829: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                loadOnboardingPrompts: function() {
                    return A
                },
                fetchOnboardingPrompts: function() {
                    return g
                },
                maybeFetchOnboardingPrompts: function() {
                    return E
                },
                startOnboarding: function() {
                    return T
                }
            });
            var a = l("872717"),
                n = l("913144"),
                s = l("716241"),
                r = l("271938"),
                i = l("26989"),
                o = l("305961"),
                u = l("599110"),
                d = l("568734"),
                c = l("863636"),
                f = l("653138"),
                S = l("49111"),
                h = l("657944");

            function A(e) {
                u.default.track(S.AnalyticEvents.GUILD_ONBOARDING_LOADED, {
                    ...(0, s.collectGuildAnalyticsMetadata)(e),
                    has_new_prompts: !1,
                    number_of_prompts: 0
                })
            }

            function g(e) {
                return n.default.dispatch({
                    type: "GUILD_ONBOARDING_PROMPTS_FETCH_START",
                    guildId: e
                }), a.default.get({
                    url: S.Endpoints.GUILD_ONBOARDING(e)
                }).then(t => {
                    let {
                        body: l
                    } = t, a = (0, f.serverApiResponseToClientState)(l);
                    return n.default.dispatch({
                        type: "GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS",
                        guildId: e,
                        ...a
                    }).then(() => a.prompts)
                }, t => (n.default.dispatch({
                    type: "GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE",
                    guildId: e
                }), t))
            }
            async function E(e) {
                var t, l;
                let a = r.default.getId(),
                    n = (0, d.hasFlag)(null !== (l = null === (t = i.default.getMember(e, a)) || void 0 === t ? void 0 : t.flags) && void 0 !== l ? l : 0, h.GuildMemberFlags.COMPLETED_ONBOARDING),
                    s = o.default.getGuild(e);
                if (null == s || !s.hasFeature(S.GuildFeatures.GUILD_ONBOARDING)) return Promise.resolve();
                let u = c.default.shouldFetchPrompts(e),
                    f = c.default.getOnboardingPrompts(e);
                if (!u && f.length > 0) return f.every(e => !e.inOnboarding) ? (_(e), Promise.resolve()) : (!n && T(e), Promise.resolve());
                let A = await g(e);
                return Array.isArray(A) && A.every(e => !e.inOnboarding) ? (_(e), Promise.resolve()) : (!n && T(e), A)
            }

            function T(e) {
                n.default.dispatch({
                    type: "GUILD_ONBOARDING_START",
                    guildId: e
                })
            }

            function _(e) {
                u.default.track(S.AnalyticEvents.GUILD_ONBOARDING_STEP_VIEWED, {
                    ...(0, s.collectGuildAnalyticsMetadata)(e),
                    step: -2,
                    required: !0
                }), u.default.track(S.AnalyticEvents.GUILD_ONBOARDING_STEP_COMPLETED, {
                    ...(0, s.collectGuildAnalyticsMetadata)(e),
                    step: -2,
                    skipped: !1,
                    is_final_step: !0,
                    in_onboarding: !0
                })
            }
        },
        507453: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("414456"),
                s = l.n(n),
                r = l("598532");

            function i(e) {
                let {
                    className: t
                } = e;
                return (0, a.jsx)("div", {
                    className: s(r.image, t)
                })
            }
        },
        682344: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("469563"),
                s = l("305861"),
                r = l("75196"),
                i = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 20,
                        height: l = 23,
                        color: n = "currentColor",
                        foreground: s,
                        ...i
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, r.default)(i),
                        width: t,
                        height: l,
                        viewBox: "0 0 20 23",
                        children: (0, a.jsx)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: (0, a.jsx)("path", {
                                className: s,
                                fill: n,
                                d: "M19.487 5.126L10.487 0.126C10.184 -0.042 9.81798 -0.042 9.51498 0.126L0.514977 5.126C0.197977 5.302 0.000976562 5.636 0.000976562 5.999C0.000976562 6.693 0.114977 22.999 10.001 22.999C19.887 22.999 20.001 6.693 20.001 5.999C20.001 5.636 19.804 5.302 19.487 5.126ZM10.001 5.999C11.382 5.999 12.501 7.118 12.501 8.499C12.501 9.88 11.382 10.999 10.001 10.999C8.61998 10.999 7.50098 9.88 7.50098 8.499C7.50098 7.118 8.61998 5.999 10.001 5.999ZM6.25098 16C6.25098 13.699 7.69998 12.25 10.001 12.25C12.302 12.25 13.751 13.699 13.751 16H6.25098Z"
                            })
                        })
                    })
                }, s.ShieldUserIcon)
        }
    }
]);