(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["25349"], {
        685073: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                loadInviteSuggestions: function() {
                    return a
                },
                searchInviteSuggestions: function() {
                    return l
                }
            });
            var n = s("913144"),
                i = s("777273");

            function a(e) {
                let {
                    omitUserIds: t,
                    guild: s,
                    channel: a,
                    applicationId: l,
                    inviteTargetType: r
                } = e;
                return (0, i.fetchUserAffinities)().then(() => {
                    n.default.dispatch({
                        type: "LOAD_INVITE_SUGGESTIONS",
                        omitUserIds: null != t ? t : new Set,
                        guild: s,
                        channel: a,
                        applicationId: l,
                        inviteTargetType: r
                    })
                })
            }

            function l(e) {
                n.default.dispatch({
                    type: "INVITE_SUGGESTIONS_SEARCH",
                    query: e
                })
            }
        },
        777273: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                fetchUserAffinities: function() {
                    return r
                }
            });
            var n = s("872717"),
                i = s("913144"),
                a = s("843823"),
                l = s("49111");

            function r() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return a.default.needsRefresh() ? (i.default.dispatch({
                    type: "LOAD_USER_AFFINITIES"
                }), n.default.get({
                    url: l.Endpoints.USER_AFFINITIES,
                    retries: e ? 3 : 0,
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: t
                    } = e;
                    i.default.dispatch({
                        type: "LOAD_USER_AFFINITIES_SUCCESS",
                        affinities: t
                    })
                }, () => {
                    i.default.dispatch({
                        type: "LOAD_USER_AFFINITIES_FAILURE"
                    })
                })) : Promise.resolve()
            }
        },
        843962: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                getChannelIconURL: function() {
                    return r
                }
            });
            var n = s("697218"),
                i = s("315102"),
                a = s("449008"),
                l = s("49111");

            function r(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
                    s = arguments.length > 2 ? arguments[2] : void 0;
                switch (e.type) {
                    case l.ChannelTypes.DM:
                        let [r] = e.recipients.map(n.default.getUser).filter(a.isNotNullish);
                        if (null == r) return null;
                        return r.getAvatarURL(void 0, t, s);
                    case l.ChannelTypes.GROUP_DM:
                        return i.default.getChannelIconURL({
                            id: e.id,
                            icon: e.icon,
                            applicationId: e.getApplicationId(),
                            size: t
                        })
                }
            }
        },
        736139: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return U
                }
            });
            var n = s("37983"),
                i = s("884691"),
                a = s("446674"),
                l = s("77078"),
                r = s("450911"),
                u = s("685073"),
                o = s("819689"),
                d = s("812204"),
                c = s("843962"),
                f = s("679653"),
                h = s("305961"),
                I = s("705955"),
                p = s("27618"),
                m = s("697218"),
                g = s("646240"),
                E = s("578706"),
                S = s("83900"),
                R = s("599110"),
                _ = s("315102"),
                C = s("306160"),
                A = s("354023"),
                N = s("159885"),
                y = s("158998"),
                v = s("335189"),
                T = s("49111"),
                x = s("782340"),
                w = s("627269");

            function U(e) {
                let {
                    guildId: t,
                    ...s
                } = e, [c, f] = i.useState(""), [h, p] = i.useState([]), [m, E] = i.useState(""), {
                    onClose: S
                } = s, _ = "".concat(window.location.origin).concat(T.Endpoints.CLYDE_PROFILES(m)), C = (0, a.useStateFromStoresArray)([I.default], () => I.default.getInviteSuggestionRows());
                i.useEffect(() => {
                    (0, u.loadInviteSuggestions)({
                        omitUserIds: new Set
                    })
                }, []), i.useEffect(() => {
                    (0, v.createClydeProfile)(t).then(e => {
                        if (null != e) E(null == e ? void 0 : e.clyde_profile_id);
                        else(0, l.showToast)((0, l.createToast)(x.default.Messages.CLYDE_PROFILE_ERROR_MESSAGE_GENERIC, l.ToastType.FAILURE)), S()
                    })
                }, [t, S]), i.useEffect(() => (0, u.searchInviteSuggestions)(c), [c]);
                let N = i.useCallback(async () => {
                    let e = 0,
                        n = 0,
                        i = 0,
                        a = I.default.getInviteSuggestionRows().filter(e => h.includes(e.item.id)).map(t => (function(t, s) {
                            switch (t.type) {
                                case A.RowTypes.DM:
                                case A.RowTypes.FRIEND:
                                    e++;
                                    break;
                                case A.RowTypes.GROUP_DM:
                                    n++;
                                    break;
                                case A.RowTypes.CHANNEL:
                                    i++
                            }
                            return t.type === A.RowTypes.GROUP_DM || t.type === A.RowTypes.CHANNEL ? o.default.sendClydeProfileOverride(t.item.id, s, d.default.CLYDE_PROFILE_SHARE_MODAL, null) : t.type === A.RowTypes.DM || t.type === A.RowTypes.FRIEND ? r.default.ensurePrivateChannel(t.item.id).then(e => o.default.sendClydeProfileOverride(e, _, d.default.CLYDE_PROFILE_SHARE_MODAL, null)) : Promise.resolve()
                        })(t, _));
                    await a, R.default.track(T.AnalyticEvents.CLYDE_AI_SHARE_LINK_SENT, {
                        guild_id: t,
                        clyde_profile_id: m,
                        num_users: e,
                        num_gdms: n,
                        num_channels: i
                    }), s.onClose()
                }, [h, s, _, t, m]);
                return (0, n.jsxs)(l.ModalRoot, {
                    ...s,
                    className: w.modalRoot,
                    children: [(0, n.jsxs)(l.ModalHeader, {
                        className: w.header,
                        children: [(0, n.jsx)(l.Heading, {
                            variant: "heading-md/semibold",
                            children: x.default.Messages.CLYDE_PROFILE_SHARE_HEADER
                        }), (0, n.jsx)(l.ModalCloseButton, {
                            onClick: s.onClose
                        })]
                    }), (0, n.jsxs)(l.ModalContent, {
                        className: w.modalContent,
                        children: [(0, n.jsx)(g.default, {
                            className: w.searchBar,
                            placeholder: x.default.Messages.SEARCH,
                            label: x.default.Messages.SEARCH,
                            searchTerm: c,
                            onChange: e => f(e),
                            onClear: () => f("")
                        }), C.map((e, t) => (0, n.jsxs)(i.Fragment, {
                            children: [0 === t ? null : (0, n.jsx)("div", {
                                className: w.rowDivider
                            }), (0, n.jsx)(L, {
                                row: e,
                                onClick: () => {
                                    let t = [...h];
                                    t.includes(e.item.id) ? t = t.filter(t => t !== e.item.id) : t.push(e.item.id), p(t)
                                },
                                checked: h.includes(e.item.id)
                            })]
                        }, e.item.id))]
                    }), (0, n.jsxs)(l.ModalFooter, {
                        className: w.footer,
                        children: [(0, n.jsx)("div", {
                            className: w.footerDivider
                        }), (0, n.jsxs)("div", {
                            className: w.copySendBar,
                            children: [(0, n.jsx)(D, {
                                link: _,
                                clydeProfileId: m,
                                guildId: t
                            }), (0, n.jsx)(l.Button, {
                                onClick: N,
                                disabled: h.length <= 0 || "" === m,
                                children: x.default.Messages.SEND
                            })]
                        })]
                    })]
                })
            }

            function L(e) {
                let {
                    row: t,
                    onClick: s,
                    checked: i
                } = e, a = null, r = null, u = null;
                switch (t.type) {
                    case A.RowTypes.DM:
                    case A.RowTypes.FRIEND:
                        a = (0, n.jsx)(l.Avatar, {
                            size: l.AvatarSizes.SIZE_40,
                            src: t.item.getAvatarURL(null, 128, !1),
                            "aria-label": t.item.username
                        }), r = y.default.getName(t.item), u = y.default.getUserTag(t.item);
                        break;
                    case A.RowTypes.GROUP_DM: {
                        let e = (0, c.getChannelIconURL)(t.item),
                            s = (0, f.computeChannelName)(t.item, m.default, p.default);
                        a = (0, n.jsx)(l.Avatar, {
                            src: e,
                            "aria-label": s,
                            size: l.AvatarSizes.SIZE_40
                        }), r = (0, f.computeChannelName)(t.item, m.default, p.default);
                        break
                    }
                    case A.RowTypes.CHANNEL: {
                        let e = t.item,
                            s = h.default.getGuild(e.guild_id);
                        if (null == s) return null;
                        if (r = "#".concat((0, f.computeChannelName)(e, m.default, p.default)), u = s.name, null != s.icon) {
                            let t = _.default.getGuildIconURL({
                                id: e.guild_id,
                                icon: s.icon,
                                size: 40
                            });
                            a = (0, n.jsx)(l.Avatar, {
                                src: t,
                                "aria-label": r,
                                size: l.AvatarSizes.SIZE_40
                            })
                        } else {
                            let e = (0, N.getAcronym)(s.name);
                            a = (0, n.jsx)("div", {
                                className: w.acronym,
                                "aria-hidden": !0,
                                children: e
                            })
                        }
                    }
                }
                return (0, n.jsxs)(l.Clickable, {
                    onClick: s,
                    className: w.rowContainer,
                    children: [(0, n.jsxs)("div", {
                        className: w.rowLeft,
                        children: [(0, n.jsx)("div", {
                            className: w.rowAvatar,
                            children: a
                        }), (0, n.jsxs)("div", {
                            className: w.rowNameContainer,
                            children: [(0, n.jsx)(l.Text, {
                                variant: "text-md/semibold",
                                className: w.rowName,
                                children: r
                            }), (0, n.jsx)(l.Text, {
                                variant: "text-xs/medium",
                                className: w.rowSubName,
                                children: u
                            })]
                        })]
                    }), (0, n.jsx)(l.Checkbox, {
                        value: i,
                        type: l.Checkbox.Types.INVERTED,
                        displayOnly: !0,
                        className: w.rowRight
                    })]
                })
            }

            function D(e) {
                let {
                    link: t,
                    guildId: s,
                    clydeProfileId: a
                } = e, [r, u] = i.useState(!1);
                return i.useEffect(() => {
                    let e;
                    return r && (e = setTimeout(() => {
                        u(!1)
                    }, 1e3)), () => {
                        null != e && clearTimeout(e)
                    }
                }, [r]), (0, n.jsxs)(l.Button, {
                    look: l.Button.Looks.LINK,
                    color: l.Button.Colors.LINK,
                    onClick: function() {
                        (0, C.copy)(t), u(!0), R.default.track(T.AnalyticEvents.CLYDE_AI_SHARE_LINK_COPIED, {
                            guild_id: s,
                            clyde_profile_id: a
                        })
                    },
                    innerClassName: w.copyButton,
                    children: [r ? (0, n.jsx)(E.default, {}) : (0, n.jsx)(S.default, {}), r ? x.default.Messages.COPIED : x.default.Messages.COPY_LINK]
                })
            }
        },
        705955: function(e, t, s) {
            "use strict";
            let n, i, a, l, r, u, o;
            s.r(t), s.d(t, {
                default: function() {
                    return v
                }
            });
            var d = s("446674"),
                c = s("913144"),
                f = s("116460"),
                h = s("449008"),
                I = s("354023"),
                p = s("42203"),
                m = s("27618"),
                g = s("843823"),
                E = s("49111"),
                S = s("91366");
            let R = new Set,
                _ = [],
                C = new Map;

            function A(e) {
                let t = new Set,
                    s = null == l || o === S.InviteTargetTypes.EMBEDDED_APPLICATION ? void 0 : l.id,
                    n = (0, I.getMostRecentDMedUser)(R, s);
                for (let e of (null != n && !m.default.isBlocked(n.id) && t.add(n.id), g.default.getUserAffinitiesUserIds())) t.add(e);
                let i = new Set;
                if (o === S.InviteTargetTypes.EMBEDDED_APPLICATION) {
                    let e = f.default.getChannelHistory();
                    e.map(e => p.default.getChannel(e)).filter(h.isNotNullish).filter(e => e.type === E.ChannelTypes.GUILD_TEXT).slice(0, 3).forEach(e => i.add(e.id))
                }
                return (0, I.generateRowsForQuery)({
                    query: e,
                    omitUserIds: R,
                    suggestedUserIds: t,
                    maxRowsWithoutQuery: 100,
                    omitGuildId: s,
                    suggestedChannelIds: i,
                    inviteTargetType: o
                })
            }

            function N(e) {
                _ = e, C = new Map, e.forEach((e, t) => {
                    C.set(e, {
                        index: t
                    })
                })
            }
            class y extends d.default.Store {
                initialize() {
                    this.waitFor(m.default, g.default)
                }
                getInviteSuggestionRows() {
                    return _
                }
                getTotalSuggestionsCount() {
                    return i
                }
                getInitialCounts() {
                    return n
                }
                getSelectedInviteMetadata(e) {
                    let t = C.get(e),
                        s = g.default.getUserAffinitiesUserIds();
                    return null != t ? {
                        rowNum: t.index,
                        isAffinitySuggestion: e.isSuggested,
                        numTotal: _.length,
                        numAffinityConnections: s.size,
                        isFiltered: a
                    } : null
                }
            }
            y.displayName = "InviteSuggestionsStore";
            var v = new y(c.default, {
                LOAD_INVITE_SUGGESTIONS: function(e) {
                    let {
                        omitUserIds: t,
                        guild: s,
                        channel: d,
                        applicationId: c,
                        inviteTargetType: f
                    } = e;
                    l = null != d ? s : null, r = d, u = c, o = f;
                    let h = m.default.getRelationships(),
                        p = Object.keys(h).filter(e => h[e] === E.RelationshipTypes.BLOCKED),
                        g = (0, I.getUsersAlreadyJoined)({
                            channel: r,
                            applicationId: u,
                            inviteTargetType: f
                        });
                    R = new Set([...t, ...p, ...g]), a = !1;
                    let {
                        rows: S,
                        counts: C
                    } = A("");
                    N(S), n = C, i = _.length
                },
                INVITE_SUGGESTIONS_SEARCH: function(e) {
                    let {
                        query: t
                    } = e;
                    a = "" !== t;
                    let {
                        rows: s
                    } = A(t);
                    N(s)
                }
            })
        },
        843823: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return c
                }
            });
            var n = s("446674"),
                i = s("913144"),
                a = s("27618");
            let l = !1,
                r = Object.freeze({
                    userAffinities: [],
                    affinityUserIds: new Set,
                    lastFetched: 0
                }),
                u = {
                    ...r
                };

            function o() {
                u.affinityUserIds = new Set(u.userAffinities.map(e => e.user_id).filter(e => !a.default.isBlocked(e)))
            }
            class d extends n.default.PersistedStore {
                initialize(e) {
                    this.waitFor(a.default), null != e && (u.userAffinities = e.userAffinities, u.affinityUserIds = new Set(e.affinityUserIds), u.lastFetched = e.lastFetched), this.syncWith([a.default], o)
                }
                needsRefresh() {
                    return Date.now() - u.lastFetched > 864e5
                }
                getFetching() {
                    return l
                }
                getState() {
                    return u
                }
                getUserAffinities() {
                    return u.userAffinities
                }
                getUserAffinitiesUserIds() {
                    return u.affinityUserIds
                }
            }
            d.displayName = "UserAffinitiesStore", d.persistKey = "UserAffinitiesStore", d.migrations = [e => null];
            var c = new d(i.default, {
                LOAD_USER_AFFINITIES_SUCCESS: function(e) {
                    var t;
                    let {
                        affinities: s
                    } = e;
                    u.userAffinities = null !== (t = s.user_affinities) && void 0 !== t ? t : [], u.lastFetched = Date.now(), o(), l = !1
                },
                LOAD_USER_AFFINITIES: function() {
                    l = !0
                },
                LOAD_USER_AFFINITIES_FAILURE: function() {
                    l = !1
                },
                LOGOUT: function() {
                    u = {
                        ...r
                    }
                }
            })
        },
        646240: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return h
                }
            });
            var n = s("37983"),
                i = s("884691"),
                a = s("414456"),
                l = s.n(a),
                r = s("77078"),
                u = s("381546"),
                o = s("229915"),
                d = s("782340"),
                c = s("913893");
            class f extends i.Component {
                render() {
                    let {
                        autoFocus: e,
                        label: t,
                        placeholder: s,
                        searchTerm: i,
                        inputClassName: a,
                        className: f,
                        onChange: h,
                        onFocus: I,
                        onBlur: p,
                        onKeyPress: m,
                        autoComplete: g,
                        forwardedRef: E,
                        closeIconClassName: S,
                        searchIconClassName: R,
                        cta: _
                    } = this.props, C = null != i && i.length > 0, A = null != E ? E : this._textInputRef;
                    return (0, n.jsx)(r.FocusRing, {
                        focusTarget: A,
                        ringTarget: this._containerRef,
                        children: (0, n.jsxs)("div", {
                            className: l(c.searchBox, f),
                            ref: this._containerRef,
                            children: [(0, n.jsx)(r.TextInput, {
                                inputRef: A,
                                focusProps: {
                                    enabled: !1
                                },
                                name: "search",
                                maxLength: 100,
                                className: c.searchBoxInputWrapper,
                                inputClassName: l(c.searchBoxInput, a),
                                onChange: h,
                                onFocus: I,
                                onBlur: p,
                                onKeyPress: m,
                                value: C ? i : "",
                                placeholder: s,
                                autoFocus: e,
                                "aria-label": t,
                                autoComplete: g ? "on" : "off"
                            }), null != _ ? (0, n.jsx)(r.Text, {
                                color: "text-muted",
                                variant: "text-xs/normal",
                                className: c.cta,
                                children: _
                            }) : null, C ? (0, n.jsx)(r.Clickable, {
                                onClick: this.handleClear,
                                className: c.clear,
                                "aria-label": d.default.Messages.SEARCH_CLEAR,
                                children: (0, n.jsx)(u.default, {
                                    className: l(c.clearIcon, S)
                                })
                            }) : (0, n.jsx)(o.default, {
                                className: l(c.searchIcon, R),
                                "aria-label": d.default.Messages.SEARCH
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._textInputRef = i.createRef(), this._containerRef = i.createRef(), this.handleClear = () => {
                        let {
                            onClear: e,
                            forwardedRef: t
                        } = this.props, {
                            current: s
                        } = null != t ? t : this._textInputRef;
                        null != s && s.focus(), null != e && e()
                    }
                }
            }
            f.defaultProps = {
                autoComplete: !1
            };
            var h = i.forwardRef((e, t) => (0, n.jsx)(f, {
                forwardedRef: t,
                ...e
            }))
        }
    }
]);