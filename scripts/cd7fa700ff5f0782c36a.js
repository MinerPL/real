(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["25349"], {
        685073: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                loadInviteSuggestions: function() {
                    return a
                },
                searchInviteSuggestions: function() {
                    return l
                }
            });
            var s = i("913144"),
                n = i("777273");

            function a(e) {
                let {
                    omitUserIds: t,
                    guild: i,
                    channel: a,
                    applicationId: l,
                    inviteTargetType: r
                } = e;
                return (0, n.fetchUserAffinities)().then(() => {
                    s.default.dispatch({
                        type: "LOAD_INVITE_SUGGESTIONS",
                        omitUserIds: null != t ? t : new Set,
                        guild: i,
                        channel: a,
                        applicationId: l,
                        inviteTargetType: r
                    })
                })
            }

            function l(e) {
                s.default.dispatch({
                    type: "INVITE_SUGGESTIONS_SEARCH",
                    query: e
                })
            }
        },
        777273: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                fetchUserAffinities: function() {
                    return r
                }
            });
            var s = i("872717"),
                n = i("913144"),
                a = i("843823"),
                l = i("49111");

            function r() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return a.default.needsRefresh() ? (n.default.dispatch({
                    type: "LOAD_USER_AFFINITIES"
                }), s.default.get({
                    url: l.Endpoints.USER_AFFINITIES,
                    retries: e ? 3 : 0,
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: t
                    } = e;
                    n.default.dispatch({
                        type: "LOAD_USER_AFFINITIES_SUCCESS",
                        affinities: t
                    })
                }, () => {
                    n.default.dispatch({
                        type: "LOAD_USER_AFFINITIES_FAILURE"
                    })
                })) : Promise.resolve()
            }
        },
        843962: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                getChannelIconURL: function() {
                    return r
                }
            });
            var s = i("697218"),
                n = i("315102"),
                a = i("449008"),
                l = i("49111");

            function r(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
                    i = arguments.length > 2 ? arguments[2] : void 0;
                switch (e.type) {
                    case l.ChannelTypes.DM:
                        let [r] = e.recipients.map(s.default.getUser).filter(a.isNotNullish);
                        if (null == r) return null;
                        return r.getAvatarURL(void 0, t, i);
                    case l.ChannelTypes.GROUP_DM:
                        return n.default.getChannelIconURL({
                            id: e.id,
                            icon: e.icon,
                            applicationId: e.getApplicationId(),
                            size: t
                        })
                }
            }
        },
        736139: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return D
                }
            });
            var s = i("37983"),
                n = i("884691"),
                a = i("446674"),
                l = i("77078"),
                r = i("450911"),
                d = i("685073"),
                u = i("819689"),
                o = i("812204"),
                c = i("843962"),
                f = i("679653"),
                I = i("305961"),
                h = i("705955"),
                E = i("27618"),
                S = i("697218"),
                g = i("646240"),
                m = i("578706"),
                p = i("83900"),
                _ = i("599110"),
                A = i("315102"),
                y = i("306160"),
                R = i("354023"),
                N = i("159885"),
                C = i("158998"),
                v = i("335189"),
                T = i("49111"),
                w = i("782340"),
                U = i("627269");

            function D(e) {
                let {
                    guildId: t,
                    ...i
                } = e, [c, f] = n.useState(""), [I, E] = n.useState([]), [S, m] = n.useState(""), {
                    onClose: p
                } = i, A = "".concat(window.location.origin).concat(T.Endpoints.CLYDE_PROFILES(S)), y = (0, a.useStateFromStoresArray)([h.default], () => h.default.getInviteSuggestionRows());
                n.useEffect(() => {
                    (0, d.loadInviteSuggestions)({
                        omitUserIds: new Set
                    })
                }, []), n.useEffect(() => {
                    (0, v.createClydeProfile)(t).then(e => {
                        if (null != e) m(null == e ? void 0 : e.clyde_profile_id);
                        else(0, l.showToast)((0, l.createToast)(w.default.Messages.CLYDE_PROFILE_ERROR_MESSAGE_GENERIC, l.ToastType.FAILURE)), p()
                    })
                }, [t, p]), n.useEffect(() => (0, d.searchInviteSuggestions)(c), [c]);
                let N = n.useCallback(async () => {
                    let e = 0,
                        s = 0,
                        n = 0,
                        a = h.default.getInviteSuggestionRows().filter(e => I.includes(e.item.id)).map(t => (function(t, i) {
                            switch (t.type) {
                                case R.RowTypes.DM:
                                case R.RowTypes.FRIEND:
                                    e++;
                                    break;
                                case R.RowTypes.GROUP_DM:
                                    s++;
                                    break;
                                case R.RowTypes.CHANNEL:
                                    n++
                            }
                            return t.type === R.RowTypes.GROUP_DM || t.type === R.RowTypes.CHANNEL ? u.default.sendClydeProfileOverride(t.item.id, i, o.default.CLYDE_PROFILE_SHARE_MODAL, null) : t.type === R.RowTypes.DM || t.type === R.RowTypes.FRIEND ? r.default.ensurePrivateChannel(t.item.id).then(e => u.default.sendClydeProfileOverride(e, A, o.default.CLYDE_PROFILE_SHARE_MODAL, null)) : Promise.resolve()
                        })(t, A));
                    await a, _.default.track(T.AnalyticEvents.CLYDE_AI_SHARE_LINK_SENT, {
                        guild_id: t,
                        clyde_profile_id: S,
                        num_users: e,
                        num_gdms: s,
                        num_channels: n
                    }), i.onClose()
                }, [I, i, A, t, S]);
                return (0, s.jsxs)(l.ModalRoot, {
                    ...i,
                    className: U.modalRoot,
                    children: [(0, s.jsxs)(l.ModalHeader, {
                        className: U.header,
                        children: [(0, s.jsx)(l.Heading, {
                            variant: "heading-md/semibold",
                            children: w.default.Messages.CLYDE_PROFILE_SHARE_HEADER
                        }), (0, s.jsx)(l.ModalCloseButton, {
                            onClick: i.onClose
                        })]
                    }), (0, s.jsxs)(l.ModalContent, {
                        className: U.modalContent,
                        children: [(0, s.jsx)(g.default, {
                            className: U.searchBar,
                            placeholder: w.default.Messages.SEARCH,
                            label: w.default.Messages.SEARCH,
                            searchTerm: c,
                            onChange: e => f(e),
                            onClear: () => f("")
                        }), y.map((e, t) => (0, s.jsxs)(n.Fragment, {
                            children: [0 === t ? null : (0, s.jsx)("div", {
                                className: U.rowDivider
                            }), (0, s.jsx)(L, {
                                row: e,
                                onClick: () => {
                                    let t = [...I];
                                    t.includes(e.item.id) ? t = t.filter(t => t !== e.item.id) : t.push(e.item.id), E(t)
                                },
                                checked: I.includes(e.item.id)
                            })]
                        }, e.item.id))]
                    }), (0, s.jsxs)(l.ModalFooter, {
                        className: U.footer,
                        children: [(0, s.jsx)("div", {
                            className: U.footerDivider
                        }), (0, s.jsxs)("div", {
                            className: U.copySendBar,
                            children: [(0, s.jsx)(x, {
                                link: A,
                                clydeProfileId: S,
                                guildId: t
                            }), (0, s.jsx)(l.Button, {
                                onClick: N,
                                disabled: I.length <= 0 || "" === S,
                                children: w.default.Messages.SEND
                            })]
                        })]
                    })]
                })
            }

            function L(e) {
                let {
                    row: t,
                    onClick: i,
                    checked: n
                } = e, a = null, r = null, d = null;
                switch (t.type) {
                    case R.RowTypes.DM:
                    case R.RowTypes.FRIEND:
                        a = (0, s.jsx)(l.Avatar, {
                            size: l.AvatarSizes.SIZE_40,
                            src: t.item.getAvatarURL(null, 128, !1),
                            "aria-label": t.item.username
                        }), r = C.default.getName(t.item), d = C.default.getUserTag(t.item);
                        break;
                    case R.RowTypes.GROUP_DM: {
                        let e = (0, c.getChannelIconURL)(t.item),
                            i = (0, f.computeChannelName)(t.item, S.default, E.default);
                        a = (0, s.jsx)(l.Avatar, {
                            src: e,
                            "aria-label": i,
                            size: l.AvatarSizes.SIZE_40
                        }), r = (0, f.computeChannelName)(t.item, S.default, E.default);
                        break
                    }
                    case R.RowTypes.CHANNEL: {
                        let e = t.item,
                            i = I.default.getGuild(e.guild_id);
                        if (null == i) return null;
                        if (r = "#".concat((0, f.computeChannelName)(e, S.default, E.default)), d = i.name, null != i.icon) {
                            let t = A.default.getGuildIconURL({
                                id: e.guild_id,
                                icon: i.icon,
                                size: 40
                            });
                            a = (0, s.jsx)(l.Avatar, {
                                src: t,
                                "aria-label": r,
                                size: l.AvatarSizes.SIZE_40
                            })
                        } else {
                            let e = (0, N.getAcronym)(i.name);
                            a = (0, s.jsx)("div", {
                                className: U.acronym,
                                "aria-hidden": !0,
                                children: e
                            })
                        }
                    }
                }
                return (0, s.jsxs)(l.Clickable, {
                    onClick: i,
                    className: U.rowContainer,
                    children: [(0, s.jsxs)("div", {
                        className: U.rowLeft,
                        children: [(0, s.jsx)("div", {
                            className: U.rowAvatar,
                            children: a
                        }), (0, s.jsxs)("div", {
                            className: U.rowNameContainer,
                            children: [(0, s.jsx)(l.Text, {
                                variant: "text-md/semibold",
                                className: U.rowName,
                                children: r
                            }), (0, s.jsx)(l.Text, {
                                variant: "text-xs/medium",
                                className: U.rowSubName,
                                children: d
                            })]
                        })]
                    }), (0, s.jsx)(l.Checkbox, {
                        value: n,
                        type: l.Checkbox.Types.INVERTED,
                        displayOnly: !0,
                        className: U.rowRight
                    })]
                })
            }

            function x(e) {
                let {
                    link: t,
                    guildId: i,
                    clydeProfileId: a
                } = e, [r, d] = n.useState(!1);
                return n.useEffect(() => {
                    let e;
                    return r && (e = setTimeout(() => {
                        d(!1)
                    }, 1e3)), () => {
                        null != e && clearTimeout(e)
                    }
                }, [r]), (0, s.jsxs)(l.Button, {
                    look: l.Button.Looks.LINK,
                    color: l.Button.Colors.LINK,
                    onClick: function() {
                        (0, y.copy)(t), d(!0), _.default.track(T.AnalyticEvents.CLYDE_AI_SHARE_LINK_COPIED, {
                            guild_id: i,
                            clyde_profile_id: a
                        })
                    },
                    innerClassName: U.copyButton,
                    children: [r ? (0, s.jsx)(m.default, {}) : (0, s.jsx)(p.default, {}), r ? w.default.Messages.COPIED : w.default.Messages.COPY_LINK]
                })
            }
        },
        705955: function(e, t, i) {
            "use strict";
            let s, n, a, l, r, d, u;
            i.r(t), i.d(t, {
                default: function() {
                    return v
                }
            });
            var o = i("446674"),
                c = i("913144"),
                f = i("116460"),
                I = i("449008"),
                h = i("354023"),
                E = i("42203"),
                S = i("27618"),
                g = i("843823"),
                m = i("49111"),
                p = i("91366");
            let _ = new Set,
                A = [],
                y = new Map;

            function R(e) {
                let t = new Set,
                    i = null == l || u === p.InviteTargetTypes.EMBEDDED_APPLICATION ? void 0 : l.id,
                    s = (0, h.getMostRecentDMedUser)(_, i);
                for (let e of (null != s && !S.default.isBlocked(s.id) && t.add(s.id), g.default.getUserAffinitiesUserIds())) t.add(e);
                let n = new Set;
                if (u === p.InviteTargetTypes.EMBEDDED_APPLICATION) {
                    let e = f.default.getChannelHistory();
                    e.map(e => E.default.getChannel(e)).filter(I.isNotNullish).filter(e => e.type === m.ChannelTypes.GUILD_TEXT).slice(0, 3).forEach(e => n.add(e.id))
                }
                return (0, h.generateRowsForQuery)({
                    query: e,
                    omitUserIds: _,
                    suggestedUserIds: t,
                    maxRowsWithoutQuery: 100,
                    omitGuildId: i,
                    suggestedChannelIds: n,
                    inviteTargetType: u
                })
            }

            function N(e) {
                A = e, y = new Map, e.forEach((e, t) => {
                    y.set(e, {
                        index: t
                    })
                })
            }
            class C extends o.default.Store {
                initialize() {
                    this.waitFor(S.default, g.default)
                }
                getInviteSuggestionRows() {
                    return A
                }
                getTotalSuggestionsCount() {
                    return n
                }
                getInitialCounts() {
                    return s
                }
                getSelectedInviteMetadata(e) {
                    let t = y.get(e),
                        i = g.default.getUserAffinitiesUserIds();
                    return null != t ? {
                        rowNum: t.index,
                        isAffinitySuggestion: e.isSuggested,
                        numTotal: A.length,
                        numAffinityConnections: i.size,
                        isFiltered: a
                    } : null
                }
            }
            C.displayName = "InviteSuggestionsStore";
            var v = new C(c.default, {
                LOAD_INVITE_SUGGESTIONS: function(e) {
                    let {
                        omitUserIds: t,
                        guild: i,
                        channel: o,
                        applicationId: c,
                        inviteTargetType: f
                    } = e;
                    l = null != o ? i : null, r = o, d = c, u = f;
                    let I = S.default.getRelationships(),
                        E = Object.keys(I).filter(e => I[e] === m.RelationshipTypes.BLOCKED),
                        g = (0, h.getUsersAlreadyJoined)({
                            channel: r,
                            applicationId: d,
                            inviteTargetType: f
                        });
                    _ = new Set([...t, ...E, ...g]), a = !1;
                    let {
                        rows: p,
                        counts: y
                    } = R("");
                    N(p), s = y, n = A.length
                },
                INVITE_SUGGESTIONS_SEARCH: function(e) {
                    let {
                        query: t
                    } = e;
                    a = "" !== t;
                    let {
                        rows: i
                    } = R(t);
                    N(i)
                }
            })
        },
        843823: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return c
                }
            });
            var s = i("446674"),
                n = i("913144"),
                a = i("27618");
            let l = !1,
                r = Object.freeze({
                    userAffinities: [],
                    affinityUserIds: new Set,
                    lastFetched: 0
                }),
                d = {
                    ...r
                };

            function u() {
                d.affinityUserIds = new Set(d.userAffinities.map(e => e.user_id).filter(e => !a.default.isBlocked(e)))
            }
            class o extends s.default.PersistedStore {
                initialize(e) {
                    this.waitFor(a.default), null != e && (d.userAffinities = e.userAffinities, d.affinityUserIds = new Set(e.affinityUserIds), d.lastFetched = e.lastFetched), this.syncWith([a.default], u)
                }
                needsRefresh() {
                    return Date.now() - d.lastFetched > 864e5
                }
                getFetching() {
                    return l
                }
                getState() {
                    return d
                }
                getUserAffinities() {
                    return d.userAffinities
                }
                getUserAffinitiesUserIds() {
                    return d.affinityUserIds
                }
            }
            o.displayName = "UserAffinitiesStore", o.persistKey = "UserAffinitiesStore", o.migrations = [e => null];
            var c = new o(n.default, {
                LOAD_USER_AFFINITIES_SUCCESS: function(e) {
                    var t;
                    let {
                        affinities: i
                    } = e;
                    d.userAffinities = null !== (t = i.user_affinities) && void 0 !== t ? t : [], d.lastFetched = Date.now(), u(), l = !1
                },
                LOAD_USER_AFFINITIES: function() {
                    l = !0
                },
                LOAD_USER_AFFINITIES_FAILURE: function() {
                    l = !1
                },
                LOGOUT: function() {
                    d = {
                        ...r
                    }
                }
            })
        }
    }
]);