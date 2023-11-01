(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["3569"], {
        445356: function(e, t, a) {
            "use strict";
            e.exports = a.p + "c8718df1382ba878f1fc.svg"
        },
        460287: function(e, t, a) {
            "use strict";
            e.exports = a.p + "08e581a604e6635d1424.svg"
        },
        137223: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
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
            var l, n, s = a("37983"),
                r = a("884691"),
                o = a("414456"),
                i = a.n(o),
                u = a("77078"),
                d = a("109024"),
                c = a("945330"),
                f = a("229915"),
                S = a("439932"),
                h = a("49111"),
                A = a("782340"),
                g = a("515315");
            let E = Object.freeze({
                SMALL: g.small,
                MEDIUM: g.medium,
                LARGE: g.large
            });
            (l = n || (n = {})).MEMBER = "MEMBER", l.ROLE = "ROLE", l.CHANNEL = "CHANNEL", l.GUILD = "GUILD", l.USER = "USER";
            let T = e => {
                let {
                    hasContent: t,
                    onClear: a,
                    className: l,
                    themeOverride: n,
                    size: r = E.SMALL
                } = e;
                return (0, s.jsx)(u.Clickable, {
                    className: i(l, g.iconLayout, r, (0, S.getThemeClass)(n), {
                        [g.clear]: t
                    }),
                    onClick: e => {
                        e.stopPropagation(), null != a && a(e)
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
                            className: i({
                                [g.icon]: !0,
                                [g.visible]: !t
                            })
                        }), (0, s.jsx)(c.default, {
                            className: i({
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
                        isReady: a
                    } = this.props;
                    t && !e.isReady && a && this.focus()
                }
                handleKeyDownGrid(e) {
                    let {
                        selectedRow: t,
                        selectedColumn: a,
                        sections: l,
                        query: n,
                        tags: s,
                        onSelectionChange: r,
                        onSelect: o,
                        onRemoveTag: i,
                        preventEscapePropagation: u
                    } = this.props;
                    if (0 !== l.length) {
                        switch (e.keyCode) {
                            case h.KeyboardKeys.BACKSPACE:
                                if ((null == n || 0 === n.length) && null != s && s.length > 0) e.preventDefault(), e.stopPropagation(), null == i || i(s.length - 1);
                                break;
                            case h.KeyboardKeys.ARROW_DOWN:
                                e.preventDefault(), e.stopPropagation(), -1 === t ? (t = 0, a = 0) : ((t += 1) >= l.length && (t = l.length - 1), a >= l[t] && (a = l[t] - 1));
                                break;
                            case h.KeyboardKeys.ARROW_UP:
                                e.preventDefault(), e.stopPropagation(), (t -= 1) < 0 ? (t = 0, a = 0) : a >= l[t] && (a = l[t] - 1);
                                break;
                            case h.KeyboardKeys.ARROW_LEFT:
                                e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (a -= 1) < 0 && ((t -= 1) >= 0 ? a = l[t] - 1 : t < 0 && (t = 0, a = 0));
                                break;
                            case h.KeyboardKeys.ARROW_RIGHT:
                                e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (a += 1) >= l[t] && (a = 0, (t += 1) >= l.length && (t = l.length - 1, a = l[t] - 1));
                                break;
                            case h.KeyboardKeys.ENTER:
                                if (e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), -1 === a && (a = 0), t >= l.length || a >= l[t]) return;
                                null != o && o(t, a, e);
                                return;
                            case h.KeyboardKeys.ESCAPE:
                                e.preventDefault(), u && e.stopPropagation(), null != o && o(null, null, e);
                                return;
                            default:
                                return
                        }
                        null != r && r(t, a)
                    }
                }
                handleKeyDownList(e) {
                    var t, a;
                    let {
                        sections: l,
                        selectedSection: n,
                        selectedRow: s,
                        onSelect: r,
                        onSelectionChange: o,
                        query: i,
                        tags: u,
                        preventEscapePropagation: d
                    } = this.props, {
                        current: c
                    } = this.ref;
                    if (null != c) switch (e.keyCode) {
                        case h.KeyboardKeys.BACKSPACE:
                            (null == i || 0 === i.length) && null != u && u.length > 0 && (e.preventDefault(), e.stopPropagation(), null === (t = (a = this.props).onRemoveTag) || void 0 === t || t.call(a, u.length - 1));
                            break;
                        case h.KeyboardKeys.ARROW_DOWN:
                            e.preventDefault(), e.stopPropagation(), l.length > n && ++s >= l[n] && (++n >= l.length && (n = 0), s = 0), null == o || o(n, s);
                            break;
                        case h.KeyboardKeys.ARROW_UP:
                            e.preventDefault(), e.stopPropagation(), --s < 0 && (--n < 0 && (n = l.length - 1), s = l[n] - 1), null == o || o(n, s);
                            break;
                        case h.KeyboardKeys.ENTER:
                            e.preventDefault(), e.stopPropagation(), l.length > n && l[n] > s && (null == r || r(n, s, e));
                            break;
                        case h.KeyboardKeys.ESCAPE:
                            e.preventDefault(), d && e.stopPropagation(), null == r || r(null, null, e), c.blur()
                    }
                }
                render() {
                    let {
                        autoFocus: e,
                        query: t,
                        placeholder: a = A.default.Messages.DM_SEARCH_PLACEHOLDER,
                        themeOverride: l,
                        disabled: r,
                        onClear: o,
                        size: f,
                        maxHeight: h,
                        tags: E,
                        onActivate: _,
                        className: R,
                        inputProps: p,
                        focusAfterReady: I
                    } = this.props, D = null != t && t.length > 0, m = !1, v = [];
                    return null != E && E.length > 0 && ("string" == typeof E[0] ? E.forEach((e, t) => v.push((0, s.jsxs)(u.Anchor, {
                        focusProps: {
                            offset: 4
                        },
                        className: g.tag,
                        onClick: this.handleRemoveTag.bind(this, t),
                        children: [e, (0, s.jsx)(c.default, {
                            className: g.close,
                            "aria-label": A.default.Messages.REMOVE
                        })]
                    }, t))) : (m = !0, E.forEach((e, t) => v.push((0, s.jsxs)(u.Anchor, {
                        className: i(g.tag, g.richTag),
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
                            className: i(R, g.container, f, (0, S.getThemeClass)(l), {
                                [g.disabled]: r
                            }),
                            children: (0, s.jsxs)(u.ScrollerThin, {
                                className: g.inner,
                                style: {
                                    maxHeight: h
                                },
                                children: [v, (0, s.jsx)("input", {
                                    className: i(g.input, {
                                        [g.richTagInput]: m
                                    }),
                                    type: "text",
                                    ref: this.ref,
                                    spellCheck: "false",
                                    placeholder: a,
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
                                }), null != o ? (0, s.jsx)(T, {
                                    size: f,
                                    themeOverride: l,
                                    hasContent: D,
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
                            onKeyDown: a,
                            onQueryChange: l,
                            useKeyboardNavigation: n
                        } = this.props;
                        null != a && a(e);
                        let {
                            current: s
                        } = this.ref;
                        if (null == s || null != t) {
                            e.keyCode !== h.KeyboardKeys.TAB && null != t && t(e);
                            return
                        }
                        if (e.keyCode === h.KeyboardKeys.ESCAPE && null != s.value && "" !== s.value && s.value.length > 0) {
                            s.value = "", null != l && l("");
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
        844153: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                BROADCASTING_GUILDS_MAX_MEMBER_COUNT: function() {
                    return l
                },
                BROADCASTING_MAX_ALLOWED_GUILD_IDS: function() {
                    return n
                },
                BROADCASTING_MAX_ALLOWED_USER_IDS: function() {
                    return s
                }
            });
            let l = 200,
                n = 10,
                s = 10
        },
        194051: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return I
                }
            });
            var l, n, s = a("917351"),
                r = a("446674"),
                o = a("407846"),
                i = a("913144"),
                u = a("766274"),
                d = a("271938"),
                c = a("9759"),
                f = a("837374");
            (l = n || (n = {}))[l.INVALID = 0] = "INVALID", l[l.VALID_USER_ONLY = 1] = "VALID_USER_ONLY", l[l.VALID = 2] = "VALID";
            let S = new Set,
                h = new Set,
                A = new Set,
                g = [],
                E = {
                    BROADCASTS_BY_USER_ID: e => "user:".concat(e),
                    BROADCASTS_BY_CHANNEL_ID: e => "channel:".concat(e),
                    BROADCASTS_BY_VALIDITY: e => "validity:".concat(e)
                },
                T = new o.default(function(e) {
                    let t = S.has(e.userId) ? n.VALID_USER_ONLY : n.INVALID;
                    return null != e.viewers && (t = n.VALID), [E.BROADCASTS_BY_USER_ID(e.userId), E.BROADCASTS_BY_CHANNEL_ID(e.channelId), E.BROADCASTS_BY_VALIDITY(t)]
                }, e => e.channelId);

            function _(e, t, a) {
                if (d.default.getId() === e) return !1;
                if (null == t) {
                    let t = T.get(e);
                    return !!(null != t && (0, s.isEqual)(t.source, a)) && (T.delete(e), void 0)
                }!S.has(e) && !h.has(e) && (A.add(e), g = [...A]);
                let l = (0, f.broadcastFromServer)(t, e, a);
                T.set(e, l)
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
            var I = new p(i.default, {
                PRESENCE_UPDATES: function(e) {
                    let {
                        updates: t
                    } = e;
                    return t.forEach(e => {
                        let {
                            user: t,
                            broadcast: a,
                            guildId: l
                        } = e;
                        _(t.id, a, R(l))
                    })
                },
                PRESENCES_REPLACE: function(e) {
                    let {
                        presences: t
                    } = e;
                    return t.forEach(e => {
                        let {
                            user: t,
                            broadcast: a,
                            guildId: l
                        } = e;
                        _(t.id, a, R(l))
                    })
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
                    let {
                        presences: t,
                        guilds: a
                    } = e;
                    t.forEach(e => {
                        let {
                            user: t,
                            broadcast: a,
                            guildId: l
                        } = e;
                        _(t.id, a, R(l))
                    }), a.forEach(e => {
                        let {
                            presences: t,
                            id: a
                        } = e;
                        t.forEach(e => {
                            let {
                                user: t,
                                broadcast: l
                            } = e;
                            _(t.id, l, R(a))
                        })
                    })
                },
                BROADCASTER_BUCKETS_RECEIVED: function(e) {
                    let {
                        data: t
                    } = e;
                    Object.keys(t).forEach(e => {
                        c.CAN_VIEW_BROADCASTS_BUCKETS.includes(t[e]) ? S.add(e) : h.add(e), A.clear(), g = [...A];
                        let a = T.get(e);
                        null != a && (T.delete(e), T.set(e, a))
                    })
                },
                BROADCAST_VIEWERS_UPDATE: function(e) {
                    let {
                        viewers: t
                    } = e;
                    Object.entries(t).forEach(e => {
                        let [t, a] = e, l = T.get(t);
                        null != l && T.set(t, {
                            ...l,
                            viewers: a
                        })
                    })
                },
                CHANNEL_RECIPIENT_ADD: function(e) {
                    let {
                        channelId: t,
                        user: a
                    } = e, l = T.values(E.BROADCASTS_BY_CHANNEL_ID(t))[0];
                    if (null == l || null == l.viewers || l.viewers.some(e => e.id === a.id)) return !1;
                    T.set(l.userId, {
                        ...l,
                        viewers: [...l.viewers, new u.default(a)]
                    })
                },
                CHANNEL_RECIPIENT_REMOVE: function(e) {
                    let {
                        channelId: t,
                        user: a
                    } = e, l = T.values(E.BROADCASTS_BY_CHANNEL_ID(t))[0];
                    if (null == l || null == l.viewers) return !1;
                    T.set(l.userId, {
                        ...l,
                        viewers: l.viewers.filter(e => e.id !== a.id)
                    })
                },
                CHANNEL_CREATE: function(e) {
                    var t;
                    let {
                        channel: a
                    } = e, l = T.values(E.BROADCASTS_BY_CHANNEL_ID(a.id))[0];
                    if (null == l) return !1;
                    let n = null !== (t = a.rawRecipients) && void 0 !== t ? t : [];
                    T.set(l.userId, {
                        ...l,
                        viewers: n.filter(e => e.id !== l.userId).map(e => new u.default(e))
                    })
                },
                LOGOUT: function() {
                    S.clear(), h.clear(), A.clear(), g = [], T.clear()
                }
            })
        },
        882278: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            });
            var l = a("884691"),
                n = a("446674"),
                s = a("42203"),
                r = a("697218"),
                o = a("194051"),
                i = a("754493");

            function u(e) {
                var t, a;
                let u = (0, n.useStateFromStores)([r.default], () => r.default.getCurrentUser()),
                    d = (0, n.useStateFromStores)([s.default], () => s.default.getChannel(e)),
                    c = (0, n.useStateFromStores)([o.default], () => null != e ? o.default.getBroadcastByChannel(e) : null),
                    f = (0, i.default)(),
                    S = l.useMemo(() => {
                        var e;
                        return null !== (t = null == d ? void 0 : null === (e = d.recipients) || void 0 === e ? void 0 : e.map(e => r.default.getUser(e)).filter(e => null != e && e.id !== (null == c ? void 0 : c.userId))) && void 0 !== t ? t : []
                    }, [null == c ? void 0 : c.userId, null == d ? void 0 : d.recipients]);
                return null == u ? [] : f ? S : null !== (a = S.length > 0 ? [u].concat(S) : null == c ? void 0 : c.viewers) && void 0 !== a ? a : []
            }
        },
        754493: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
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
            var l = a("446674"),
                n = a("845579");
            a("373469");
            var s = a("271938"),
                r = a("42203");
            a("18494");
            var o = a("101125"),
                i = a("9759");

            function u() {
                let e = (0, l.useStateFromStores)([s.default], () => s.default.getId()),
                    {
                        canBroadcast: t
                    } = i.default.useExperiment({
                        location: "use_self_broadcast"
                    }, {
                        autoTrackExposure: !1
                    }),
                    a = (0, l.useStateFromStores)([o.default], () => o.default.getBroadcast());
                return t && (null == a ? void 0 : a.userId) === e ? a : null
            }

            function d() {
                let e = u();
                return null != e
            }

            function c(e) {
                let t = u(),
                    a = (0, l.useStateFromStores)([r.default], () => r.default.getChannel(e));
                return null != t && null != a && a.ownerId === t.userId && a.isBroadcastChannel()
            }

            function f(e) {
                let t = s.default.getId(),
                    {
                        canBroadcast: a
                    } = i.default.getCurrentConfig({
                        location: "is_broadcasting_in_channel"
                    }, {
                        autoTrackExposure: !1
                    }),
                    l = o.default.getBroadcast();
                if (!a || null == l || l.userId !== t) return !1;
                let n = r.default.getChannel(e);
                return null != n && n.ownerId === l.userId && n.isBroadcastChannel()
            }

            function S() {
                let e = n.BroadcastAllowedGuildIds.getSetting(),
                    t = n.BroadcastAllowedUserIds.getSetting(),
                    a = n.BroadcastAllowFriends.getSetting();
                return a || e.length > 0 || t.length > 0
            }
            a("194051")
        },
        5920: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                selectedTagFromRowData: function() {
                    return I
                },
                useFilteredGuilds: function() {
                    return D
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
            var l = a("884691"),
                n = a("627445"),
                s = a.n(n),
                r = a("249654"),
                o = a("446674"),
                i = a("137223"),
                u = a("355313"),
                d = a("845579"),
                c = a("271938"),
                f = a("42203"),
                S = a("525065"),
                h = a("26989"),
                A = a("305961"),
                g = a("27618"),
                E = a("677099"),
                T = a("697218"),
                _ = a("158998"),
                R = a("844153"),
                p = a("606762");

            function I(e) {
                let t;
                return e.rowType === p.RowType.USER ? t = {
                    type: i.RichTagTypes.USER,
                    label: e.name,
                    avatar: e.avatarURL
                } : e.rowType === p.RowType.GUILD && (t = {
                    type: i.RichTagTypes.GUILD,
                    label: e.name,
                    guild: e.guild
                }), s(null != t, "RowData must be a guild or a user"), {
                    display: t,
                    row: e
                }
            }

            function D(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0,
                    a = (0, o.useStateFromStoresArray)([A.default, S.default], () => {
                        let a = [];
                        return e.forEach(e => {
                            var l;
                            let n = A.default.getGuild(e),
                                s = null !== (l = S.default.getMemberCount(e)) && void 0 !== l ? l : R.BROADCASTING_GUILDS_MAX_MEMBER_COUNT;
                            null != n && s < R.BROADCASTING_GUILDS_MAX_MEMBER_COUNT && (null == t ? void 0 : t(n.name)) && a.push(n)
                        }), a
                    }, [e, t]);
                return a
            }

            function m(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0,
                    a = D(e, t),
                    n = l.useMemo(() => a.map(e => ({
                        rowType: p.RowType.GUILD,
                        name: e.name,
                        id: e.id,
                        disabled: !1,
                        guild: e,
                        key: "".concat(p.RowType.GUILD, ":").concat(e.id)
                    })), [a]);
                return n
            }

            function v(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0,
                    a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return e.filter(e => null != e && (null == t ? void 0 : t(e.username))).map(e => ({
                    rowType: p.RowType.USER,
                    name: _.default.getUserTag(e),
                    id: e.id,
                    disabled: a && g.default.isFriend(e.id),
                    avatarURL: e.getAvatarURL(null, 24),
                    key: "".concat(p.RowType.USER, ":").concat(e.id)
                }))
            }

            function C(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0,
                    a = arguments.length > 2 ? arguments[2] : void 0,
                    n = (0, o.useStateFromStores)([E.default], () => E.default.getFlattenedGuildIds()),
                    s = m(n, t),
                    i = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !0,
                            t = arguments.length > 1 ? arguments[1] : void 0,
                            a = arguments.length > 2 ? arguments[2] : void 0,
                            n = (0, o.useStateFromStoresArray)([g.default], () => g.default.getFriendIDs()),
                            s = D(t),
                            i = (0, o.useStateFromStores)([c.default], () => c.default.getId()),
                            u = (0, o.useStateFromStores)([h.default], () => h.default.getMemberVersion()),
                            d = l.useMemo(() => {
                                let e = new Set(n);
                                return s.forEach(t => {
                                    let a = h.default.getMemberIds(t.id);
                                    a.forEach(t => {
                                        !e.has(t) && !g.default.isBlocked(t) && e.add(t)
                                    })
                                }), e
                            }, [s, n, u]),
                            S = (0, o.useStateFromStoresArray)([T.default], () => [...d].map(e => T.default.getUser(e)), [d]),
                            A = S.filter(e => null != e && !e.bot && e.id !== i).sort((e, t) => {
                                let a = f.default.getChannel(f.default.getDMFromUserId(null == e ? void 0 : e.id)),
                                    l = f.default.getChannel(f.default.getDMFromUserId(null == t ? void 0 : t.id));
                                return r.default.compare(null == a ? void 0 : a.lastMessageId, null == l ? void 0 : l.lastMessageId) > 0 ? -1 : 1
                            });
                        return v(A, e, a)
                    }(t, n, a);
                return [i, e ? [] : s]
            }

            function N() {
                let e = d.BroadcastAllowedGuildIds.useSetting(),
                    t = d.BroadcastAllowedUserIds.useSetting(),
                    a = {},
                    l = {};
                if (m(e).forEach(e => {
                        let t = (0, u.getFullRowId)(e);
                        a[t] = I(e)
                    }), t.length > 0) {
                    let e = t.map(e => T.default.getUser(e)).filter(e => null != e);
                    v(e).map(e => {
                        let t = (0, u.getFullRowId)(e);
                        l[t] = I(e)
                    })
                }
                return {
                    [p.RowType.GUILD]: a,
                    [p.RowType.USER]: l
                }
            }

            function y(e) {
                var t;
                let a = c.default.getId(),
                    l = e;
                return l.length > R.BROADCASTING_MAX_ALLOWED_GUILD_IDS && (l = l.slice(0, R.BROADCASTING_MAX_ALLOWED_GUILD_IDS)), l = l.filter(e => h.default.isMember(e, a) && (null !== (t = S.default.getMemberCount(e)) && void 0 !== t ? t : R.BROADCASTING_GUILDS_MAX_MEMBER_COUNT) < R.BROADCASTING_GUILDS_MAX_MEMBER_COUNT)
            }

            function L(e) {
                let t = e;
                return t.length > R.BROADCASTING_MAX_ALLOWED_USER_IDS && (t = t.slice(0, R.BROADCASTING_MAX_ALLOWED_USER_IDS)), t
            }
        },
        835236: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            });
            var l = a("37983");
            a("884691");
            var n = a("414456"),
                s = a.n(n),
                r = a("77078"),
                o = a("355313"),
                i = a("837899"),
                u = a("425190"),
                d = a("782340"),
                c = a("960320");

            function f(e) {
                let {
                    selectedTags: t,
                    title: a,
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
                return (0, l.jsx)(r.Collapsible, {
                    className: c.collapsible,
                    isExpanded: S,
                    collapsibleContent: (0, l.jsx)("div", {
                        className: s(c.collapsibleContent, {
                            [c.visible]: S
                        }),
                        children: (0, l.jsx)(o.default, {
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
                        return (0, l.jsxs)(r.Clickable, {
                            className: c.content,
                            onClick: e => {
                                h(!S), t(e)
                            },
                            children: [(0, l.jsx)(r.Heading, {
                                variant: "text-sm/normal",
                                children: a
                            }), S ? (0, l.jsx)(u.default, {}) : (0, l.jsx)(i.default, {})]
                        })
                    }
                })
            }
        },
        725420: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return v
                }
            });
            var l = a("37983"),
                n = a("884691"),
                s = a("917351"),
                r = a("446674"),
                o = a("750028"),
                i = a("77078"),
                u = a("716241"),
                d = a("355313"),
                c = a("845579"),
                f = a("872173"),
                S = a("305961"),
                h = a("651879"),
                A = a("655518"),
                g = a("882278"),
                E = a("754493"),
                T = a("5920"),
                _ = a("835236"),
                R = a("844153"),
                p = a("49111"),
                I = a("606762"),
                D = a("782340"),
                m = a("147594");

            function v(e) {
                let {
                    headerText: t = D.default.Messages.BROADCASTING_SETTINGS,
                    buttonCTA: a = D.default.Messages.BROADCAST_SETTINGS_SAVE,
                    transitionState: v,
                    onClose: C,
                    onSave: N
                } = e, y = (0, T.useBroadcastingStoredSelectedTags)(), [L, O] = n.useState(y), [x, b] = n.useState(""), M = c.BroadcastAllowFriends.useSetting(), [B, w] = n.useState(null == M || M), U = c.BroadcastAutoBroadcast.useSetting(), [G, j] = n.useState(U), [P, k] = n.useState(!1), [F, K] = n.useState(!1), H = (0, E.useSelfBroadcast)(), V = (0, g.default)(null == H ? void 0 : H.channelId), z = null != H, W = n.useMemo(() => M !== B || !(0, s.isEqual)(y, L) || U !== G, [M, B, y, L, U, G]), Y = null != N, X = n.useMemo(() => B || Object.keys(L[I.RowType.USER]).length > 0 || Object.keys(L[I.RowType.GUILD]).length > 0, [B, L]), q = !X && z || !X && Y || !W && !Y, Q = n.useMemo(() => "@" === x.trim().charAt(0), [x]), Z = (0, r.useStateFromStoresArray)([S.default], () => S.default.getGuildIds()), J = (0, T.useFilteredGuilds)(Z), $ = n.useMemo(() => J.map(e => e.id), [J]), [ee, et] = (0, T.useBroadcastingPrivacyAudience)(Q, function(e) {
                    var t;
                    let a = (t = x.trim(), Q ? t.slice(1) : t),
                        l = RegExp("".concat(A.default.escape(a)), "i");
                    return l.test(e)
                }, B);

                function ea() {
                    var e;
                    null == N || N();
                    let [t, a] = er();
                    u.default.trackWithMetadata(p.AnalyticEvents.BROADCAST_SETTINGS_UPDATED, {
                        auto_broadcast: G,
                        broadcast_to_all_friends: B,
                        num_allowed_users_in_broadcast: a.length,
                        allowed_users: a,
                        num_guilds_in_broadcast: t.length,
                        guilds: t,
                        num_viewers_in_broadcast: V.length,
                        current_viewers: null !== (e = V.map(e => e.id)) && void 0 !== e ? e : [],
                        started_broadcast: Y
                    })
                }

                function el(e) {
                    b(e)
                }

                function en(e, t) {
                    let a = (0, d.getFullRowId)(t);
                    O(l => {
                        let n = {
                            ...l
                        };
                        return n[e] = {
                            ...n[e]
                        }, a in n[e] ? delete n[e][a] : n[e][a] = (0, T.selectedTagFromRowData)(t), n
                    })
                }

                function es(e, t) {
                    O(a => {
                        let l = {
                            ...a
                        };
                        return l[e] = {
                            ...l[e]
                        }, delete l[e][t], l
                    })
                }

                function er() {
                    let e = new Set,
                        t = new Set;
                    Object.values(L[I.RowType.USER]).forEach(e => {
                        let {
                            row: a
                        } = e;
                        return t.add(a.id)
                    }), Object.values(L[I.RowType.GUILD]).forEach(t => {
                        let {
                            row: a
                        } = t;
                        return e.add(a.id)
                    });
                    let a = (0, T.sanitizeAllowedGuildIds)(Array.from(e)),
                        l = (0, T.sanitizeAllowedUserIds)(Array.from(t));
                    return [a, l]
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
                }, [$, x]), (0, l.jsxs)(i.ModalRoot, {
                    transitionState: v,
                    children: [(0, l.jsx)(i.Heading, {
                        variant: "heading-xl/semibold",
                        className: m.header,
                        children: t
                    }), (0, l.jsx)(i.ModalCloseButton, {
                        onClick: C,
                        className: m.close
                    }), (0, l.jsxs)(i.ModalContent, {
                        className: m.content,
                        paddingFix: !1,
                        children: [(0, l.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: m.description,
                            children: D.default.Messages.BROADCASTING_DESCRIPTION
                        }), (0, l.jsx)(i.FormTitle, {
                            tag: i.FormTitleTags.H5,
                            className: m.title,
                            children: D.default.Messages.BROADCASTING_SETTINGS_MODAL_AUDIENCE_TITLE
                        }), (0, l.jsxs)("div", {
                            className: m.switch,
                            children: [(0, l.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                children: D.default.Messages.BROADCASTING_SETTINGS_MODAL_FRIENDS
                            }), (0, l.jsx)(i.Switch, {
                                checked: B,
                                onChange: e => {
                                    w(e)
                                }
                            })]
                        }), (0, l.jsx)(_.default, {
                            selectedTags: L[I.RowType.USER],
                            query: x,
                            onQueryChange: el,
                            onClickRow: e => en(I.RowType.USER, e),
                            onRemoveTag: e => es(I.RowType.USER, e),
                            title: D.default.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_USERS,
                            hintText: D.default.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_USERS_HINT.format({
                                count: R.BROADCASTING_MAX_ALLOWED_USER_IDS
                            }),
                            placeholderText: D.default.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_AUDIENCE_PLACEHOLDER_USERS,
                            users: ee,
                            expanded: P,
                            setExpanded: e => {
                                el(""), k(e), K(!1)
                            },
                            maxCount: R.BROADCASTING_MAX_ALLOWED_USER_IDS
                        }), (0, l.jsx)(_.default, {
                            selectedTags: L[I.RowType.GUILD],
                            query: x,
                            onQueryChange: el,
                            onClickRow: e => en(I.RowType.GUILD, e),
                            onRemoveTag: e => es(I.RowType.GUILD, e),
                            title: D.default.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_GUILDS,
                            hintText: D.default.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_GUILDS_HINT.format({
                                count: R.BROADCASTING_MAX_ALLOWED_GUILD_IDS
                            }),
                            placeholderText: D.default.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_AUDIENCE_PLACEHOLDER_GUILDS,
                            guilds: et,
                            expanded: F,
                            setExpanded: e => {
                                el(""), K(e), k(!1)
                            },
                            maxCount: R.BROADCASTING_MAX_ALLOWED_GUILD_IDS
                        }), (0, l.jsx)(i.FormTitle, {
                            tag: i.FormTitleTags.H5,
                            className: m.title,
                            children: D.default.Messages.BROADCASTING_SETTINGS_MODAL_BEHAVIOR_TITLE
                        }), (0, l.jsxs)("div", {
                            className: m.switch,
                            children: [(0, l.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                children: D.default.Messages.AUTO_BROADCAST_TOGGLE
                            }), (0, l.jsx)(i.Switch, {
                                checked: G,
                                onChange: j
                            })]
                        })]
                    }), (0, l.jsx)(i.ModalFooter, {
                        children: (0, l.jsx)(i.Button, {
                            disabled: q,
                            onClick: function() {
                                if (!q) {
                                    if (W) {
                                        let [e, t] = er();
                                        f.PreloadedUserSettingsActionCreators.updateAsync("broadcast", a => {
                                            a.allowedGuildIds = e, a.allowedUserIds = t, a.allowFriends = o.BoolValue.create({
                                                value: B
                                            }), a.autoBroadcast = o.BoolValue.create({
                                                value: G
                                            }), ea(), C()
                                        }, f.UserSettingsDelay.INFREQUENT_USER_ACTION);
                                        return
                                    }
                                    ea(), C()
                                }
                            },
                            children: a
                        })
                    })]
                })
            }
        },
        355313: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                getFullRowId: function() {
                    return I
                },
                default: function() {
                    return v
                }
            });
            var l = a("37983"),
                n = a("884691"),
                s = a("414456"),
                r = a.n(s),
                o = a("974667"),
                i = a("77078"),
                u = a("507453"),
                d = a("79798"),
                c = a("145131"),
                f = a("109024"),
                S = a("476765"),
                h = a("682344"),
                A = a("454273"),
                g = a("191458"),
                E = a("606762"),
                T = a("782340"),
                _ = a("265821");
            let R = (0, S.uid)(),
                p = (0, S.uid)();

            function I(e) {
                return "".concat(e.rowType, ":").concat(e.id)
            }

            function D(e) {
                return (0, l.jsx)(i.FormTitle, {
                    tag: "h5",
                    className: r(_.sectionTitle, _.rowHeight),
                    children: e
                }, e)
            }

            function m(e) {
                let {
                    id: t,
                    children: a,
                    rowLabel: n,
                    checked: s,
                    onSelect: u,
                    disabled: d,
                    showCheckbox: f,
                    selected: S,
                    onMouseEnter: h,
                    "aria-posinset": A,
                    "aria-setsize": g
                } = e, E = (0, o.useListItem)(t);
                return (0, l.jsx)(i.Clickable, {
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
                    children: (0, l.jsxs)(c.default, {
                        justify: c.default.Justify.BETWEEN,
                        align: c.default.Align.CENTER,
                        children: [f ? (0, l.jsx)(i.Checkbox, {
                            displayOnly: !0,
                            size: 18,
                            value: s,
                            type: i.Checkbox.Types.INVERTED,
                            disabled: d,
                            children: (0, l.jsx)("div", {
                                className: _.checkboxLabel,
                                children: a
                            })
                        }) : a, null != n ? (0, l.jsx)(i.Text, {
                            color: "text-muted",
                            variant: "text-xs/normal",
                            children: n
                        }) : null]
                    })
                })
            }

            function v(e) {
                let {
                    listClassName: t,
                    pendingAdditions: a,
                    query: s,
                    onQueryChange: o,
                    onClickRow: S,
                    onRemovePendingAddition: v,
                    roles: C = [],
                    members: N = [],
                    users: y = [],
                    guilds: L = [],
                    placeholderText: O,
                    disabledText: x,
                    hintText: b,
                    searchTitleText: M,
                    renderEmptyText: B,
                    focusSearchAfterReady: w,
                    isReady: U,
                    maxCount: G,
                    hideRowLabel: j = !1
                } = e, P = n.useRef(null), k = n.useRef(null), F = [C.length, N.length, y.length, L.length], [K, H] = n.useState(!1), [V, z] = n.useState(0), [W, Y] = n.useState(-1);
                n.useEffect(() => {
                    var e;
                    null === (e = P.current) || void 0 === e || e.focus()
                }, []);
                let X = n.useCallback(function(e, t) {
                        let a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                        if (z(e), Y(t), a) {
                            var l;
                            null === (l = k.current) || void 0 === l || l.scrollToIndex({
                                section: null != e ? e : 0,
                                row: null != t ? t : 0,
                                padding: 8
                            })
                        }
                    }, []),
                    q = n.useCallback((e, t) => {
                        if (null == t) return;
                        o("");
                        let a = e === E.AudienceSelectorSections.ROLES ? C : [],
                            l = a[t];
                        l.rowType !== E.RowType.EMPTY_STATE && S(l)
                    }, [C, S, o]),
                    Q = n.useCallback(e => {
                        var t;
                        null != e && e.rowType !== E.RowType.EMPTY_STATE && (S(e), o(""), null === (t = P.current) || void 0 === t || t.focus())
                    }, [S, o]),
                    Z = n.useMemo(() => Object.keys(a), [a]),
                    J = n.useMemo(() => N.some(e => !e.disabled) || C.some(e => !e.disabled) || y.some(e => !e.disabled) || L.some(e => !e.disabled), [N, C, y, L]),
                    $ = J || "" === s.trim();

                function ee() {
                    var e;
                    H(!(null === (e = k.current) || void 0 === e ? void 0 : e.isScrolledToTop()) && $)
                }
                return n.useEffect(() => {
                    ee()
                }), (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)("div", {
                        className: r(_.searchBox, {
                            [_.scrollSeparator]: K
                        }),
                        children: [null != M && (0, l.jsx)(i.FormTitle, {
                            tag: i.FormTitleTags.H5,
                            children: M
                        }), (0, l.jsx)(g.default, {
                            ref: P,
                            query: s,
                            onQueryChange: o,
                            selectedSection: V,
                            selectedRow: W,
                            onSelectionChange: X,
                            onSelect: q,
                            tags: Z.map(e => a[e].display),
                            sections: F,
                            onRemoveTag: function(e) {
                                v(Z[e])
                            },
                            placeholder: O,
                            focusAfterReady: w,
                            isReady: U,
                            "aria-labelledby": R,
                            "aria-controls": p
                        }), null != b ? (0, l.jsx)(i.Text, {
                            variant: "text-xs/normal",
                            children: b
                        }) : null]
                    }), $ ? (0, l.jsx)(i.List, {
                        ref: k,
                        className: r(_.roleMemberList, t),
                        sections: F,
                        renderRow: e => {
                            let t, n, {
                                    section: s,
                                    row: o
                                } = e,
                                u = null,
                                c = !1,
                                S = !1,
                                g = !1,
                                T = !c && null != G && Object.keys(a).length >= G;
                            switch (s) {
                                case E.AudienceSelectorSections.ROLES:
                                    c = (n = I(u = C[o])) in a || u.disabled, S = u.disabled || T, g = V === E.AudienceSelectorSections.ROLES && W === o, t = (0, l.jsxs)("div", {
                                        className: _.rowBody,
                                        children: [(0, l.jsx)("div", {
                                            className: r(_.rowHeight, _.alignCenter),
                                            children: (0, l.jsx)(h.default, {
                                                color: u.colorString,
                                                height: 20
                                            })
                                        }), (0, l.jsxs)("div", {
                                            className: _.rowLabel,
                                            children: [(0, l.jsx)(i.Text, {
                                                variant: "text-sm/medium",
                                                className: _.rowTitle,
                                                color: u.rowType === E.RowType.EMPTY_STATE ? "text-muted" : "text-normal",
                                                children: u.name
                                            }), u.disabled && null != x ? (0, l.jsx)(i.Text, {
                                                color: "header-secondary",
                                                variant: "text-xs/normal",
                                                children: x
                                            }) : null]
                                        })]
                                    });
                                    break;
                                case E.AudienceSelectorSections.MEMBERS:
                                    c = (n = I(u = N[o])) in a || u.disabled, S = u.disabled || T, g = V === E.AudienceSelectorSections.MEMBERS && W === o, t = (0, l.jsxs)("div", {
                                        className: _.rowBody,
                                        children: [(0, l.jsx)(i.Avatar, {
                                            src: u.avatarURL,
                                            size: i.AvatarSizes.SIZE_24,
                                            "aria-label": ""
                                        }), (0, l.jsx)(i.Text, {
                                            className: _.rowLabel,
                                            variant: "text-sm/normal",
                                            children: u.name
                                        }), null != u.nickname ? (0, l.jsx)(i.Text, {
                                            color: "text-muted",
                                            className: _.rowLabelSubText,
                                            variant: "text-sm/normal",
                                            "aria-hidden": !0,
                                            children: u.username
                                        }) : null, u.bot && (0, l.jsx)(d.default, {
                                            verified: u.verifiedBot
                                        })]
                                    });
                                    break;
                                case E.AudienceSelectorSections.USERS:
                                    c = (n = I(u = y[o])) in a || u.disabled, S = u.disabled || T, g = V === E.AudienceSelectorSections.USERS && W === o, t = (0, l.jsxs)("div", {
                                        className: _.rowBody,
                                        children: [(0, l.jsx)(i.Avatar, {
                                            src: u.avatarURL,
                                            size: i.AvatarSizes.SIZE_24,
                                            "aria-label": ""
                                        }), (0, l.jsxs)("div", {
                                            className: _.rowLabel,
                                            children: [(0, l.jsx)(i.Text, {
                                                variant: "text-sm/normal",
                                                children: u.name
                                            }), u.disabled && null != x ? (0, l.jsx)(i.Text, {
                                                color: "header-secondary",
                                                variant: "text-xs/normal",
                                                children: x
                                            }) : null]
                                        })]
                                    });
                                    break;
                                case E.AudienceSelectorSections.GUILDS:
                                    c = (n = I(u = L[o])) in a || u.disabled, S = u.disabled || T, g = V === E.AudienceSelectorSections.GUILDS && W === o, t = (0, l.jsxs)("div", {
                                        className: _.rowBody,
                                        children: [(0, l.jsx)(f.default, {
                                            guild: u.guild,
                                            active: !0,
                                            size: f.default.Sizes.SMALLER
                                        }), (0, l.jsx)("div", {
                                            className: _.rowLabel,
                                            children: (0, l.jsx)(i.Text, {
                                                variant: "text-sm/medium",
                                                color: "text-normal",
                                                children: u.name
                                            })
                                        })]
                                    })
                            }
                            return null == u ? null : (0, l.jsx)(m, {
                                id: "user-row-".concat(o),
                                rowLabel: j ? null : A.getRowTypeLabel(u.rowType),
                                checked: c,
                                disabled: S,
                                onSelect: () => Q(u),
                                showCheckbox: u.rowType !== E.RowType.EMPTY_STATE,
                                onMouseEnter: () => X(s, o, !1),
                                selected: g,
                                "aria-posinset": o + 1,
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
                                    return D(T.default.Messages.ROLES);
                                case E.AudienceSelectorSections.MEMBERS:
                                    return D(T.default.Messages.MEMBERS);
                                case E.AudienceSelectorSections.USERS:
                                    return D(T.default.Messages.USERS);
                                case E.AudienceSelectorSections.GUILDS:
                                    return D(T.default.Messages.SERVERS)
                            }
                        },
                        sectionHeight: 32,
                        onScroll: ee,
                        role: void 0,
                        innerRole: "listbox",
                        innerId: p,
                        innerAriaMultiselectable: !0,
                        innerAriaOrientation: "vertical"
                    }) : (0, l.jsxs)(c.default, {
                        className: t,
                        align: c.default.Align.CENTER,
                        justify: c.default.Justify.CENTER,
                        direction: c.default.Direction.VERTICAL,
                        children: [(0, l.jsx)(u.default, {
                            className: _.noResultIcon
                        }), (0, l.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            children: B(s)
                        })]
                    })]
                })
            }
        },
        191458: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var l = a("37983"),
                n = a("884691"),
                s = a("137223"),
                r = a("520479");
            let o = n.forwardRef(function(e, t) {
                let {
                    query: a,
                    onQueryChange: n,
                    onRemoveTag: o,
                    onSelect: i,
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
                return (0, l.jsx)(s.default, {
                    autoFocus: !0,
                    className: r.searchBar,
                    maxHeight: 100,
                    onQueryChange: n,
                    onRemoveTag: o,
                    selectedSection: d,
                    selectedRow: c,
                    onSelect: i,
                    onSelectionChange: u,
                    placeholder: 0 === f.length ? h : "",
                    query: a,
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
            var i = o
        },
        685829: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
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
            var l = a("872717"),
                n = a("913144"),
                s = a("716241"),
                r = a("271938"),
                o = a("26989"),
                i = a("305961"),
                u = a("599110"),
                d = a("568734"),
                c = a("863636"),
                f = a("653138"),
                S = a("49111"),
                h = a("657944");

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
                }), l.default.get({
                    url: S.Endpoints.GUILD_ONBOARDING(e)
                }).then(t => {
                    let {
                        body: a
                    } = t, l = (0, f.serverApiResponseToClientState)(a);
                    return n.default.dispatch({
                        type: "GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS",
                        guildId: e,
                        ...l
                    }).then(() => l.prompts)
                }, t => (n.default.dispatch({
                    type: "GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE",
                    guildId: e
                }), t))
            }
            async function E(e) {
                var t, a;
                let l = r.default.getId(),
                    n = (0, d.hasFlag)(null !== (a = null === (t = o.default.getMember(e, l)) || void 0 === t ? void 0 : t.flags) && void 0 !== a ? a : 0, h.GuildMemberFlags.COMPLETED_ONBOARDING),
                    s = i.default.getGuild(e);
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
        507453: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return o
                }
            });
            var l = a("37983");
            a("884691");
            var n = a("414456"),
                s = a.n(n),
                r = a("598532");

            function o(e) {
                let {
                    className: t
                } = e;
                return (0, l.jsx)("div", {
                    className: s(r.image, t)
                })
            }
        }
    }
]);