(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["58628"], {
        685073: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                loadInviteSuggestions: function() {
                    return s
                },
                searchInviteSuggestions: function() {
                    return l
                }
            });
            var n = i("913144"),
                a = i("777273");

            function s(e) {
                let {
                    omitUserIds: t,
                    guild: i,
                    channel: s,
                    applicationId: l,
                    inviteTargetType: r
                } = e;
                return (0, a.fetchUserAffinities)().then(() => {
                    n.default.dispatch({
                        type: "LOAD_INVITE_SUGGESTIONS",
                        omitUserIds: null != t ? t : new Set,
                        guild: i,
                        channel: s,
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
        777273: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                fetchUserAffinities: function() {
                    return r
                }
            });
            var n = i("872717"),
                a = i("913144"),
                s = i("843823"),
                l = i("49111");

            function r() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return s.default.needsRefresh() ? (a.default.dispatch({
                    type: "LOAD_USER_AFFINITIES"
                }), n.default.get({
                    url: l.Endpoints.USER_AFFINITIES,
                    retries: e ? 3 : 0,
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: t
                    } = e;
                    a.default.dispatch({
                        type: "LOAD_USER_AFFINITIES_SUCCESS",
                        affinities: t
                    })
                }, () => {
                    a.default.dispatch({
                        type: "LOAD_USER_AFFINITIES_FAILURE"
                    })
                })) : Promise.resolve()
            }
        },
        159747: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return L
                }
            });
            var n = i("37983"),
                a = i("884691"),
                s = i("759843"),
                l = i("446674"),
                r = i("77078"),
                o = i("450911"),
                d = i("685073"),
                u = i("819689"),
                c = i("812204"),
                f = i("685665"),
                p = i("428958"),
                m = i("843962"),
                I = i("679653"),
                h = i("305961"),
                S = i("705955"),
                g = i("27618"),
                A = i("697218"),
                y = i("646240"),
                T = i("578706"),
                E = i("83900"),
                v = i("599110"),
                N = i("315102"),
                C = i("306160"),
                _ = i("354023"),
                R = i("159885"),
                x = i("158998"),
                U = i("969380"),
                w = i("49111"),
                D = i("91366"),
                O = i("782340"),
                j = i("764786");

            function L(e) {
                let {
                    activityItem: t,
                    analyticsLocations: i,
                    ...m
                } = e, I = (0, l.useStateFromStores)([A.default], () => A.default.getCurrentUser()), {
                    analyticsLocations: h
                } = (0, f.default)(i);
                (0, p.default)({
                    type: s.ImpressionTypes.MODAL,
                    name: s.ImpressionNames.ACTIVITY_BOOKMARK_SHARE_MODAL,
                    properties: {
                        application_id: t.application.id,
                        location_stack: h
                    }
                });
                let [g, T] = a.useState(""), [E, N] = a.useState([]), C = (0, U.default)({
                    applicationId: t.application.id,
                    size: 256
                }), R = "".concat(window.location.origin).concat(w.Routes.ACTIVITY_DETAILS(t.application.id)), x = (0, l.useStateFromStoresArray)([S.default], () => S.default.getInviteSuggestionRows());
                a.useEffect(() => {
                    (0, d.loadInviteSuggestions)({
                        omitUserIds: new Set,
                        applicationId: t.application.id,
                        inviteTargetType: D.InviteTargetTypes.EMBEDDED_APPLICATION
                    })
                }, [t.application.id]), a.useEffect(() => (0, d.searchInviteSuggestions)(g), [g]);
                let L = a.useCallback(async () => {
                    let e = 0,
                        i = 0,
                        n = 0,
                        a = S.default.getInviteSuggestionRows().filter(e => E.includes(e.item.id)).map(t => (function(t, a) {
                            switch (t.type) {
                                case _.RowTypes.DM:
                                case _.RowTypes.FRIEND:
                                    e++;
                                    break;
                                case _.RowTypes.GROUP_DM:
                                    i++;
                                    break;
                                case _.RowTypes.CHANNEL:
                                    n++
                            }
                            return t.type === _.RowTypes.GROUP_DM || t.type === _.RowTypes.CHANNEL ? u.default.sendActivityBookmark(t.item.id, a, c.default.ACTIVITY_DETAIL_PAGE, null) : t.type === _.RowTypes.DM || t.type === _.RowTypes.FRIEND ? o.default.ensurePrivateChannel(t.item.id).then(e => u.default.sendActivityBookmark(e, R, c.default.ACTIVITY_DETAIL_PAGE, null)) : Promise.resolve()
                        })(t, R));
                    await a, v.default.track(w.AnalyticEvents.ACTIVITY_BOOKMARK_SHARED, {
                        user_id: null == I ? void 0 : I.id,
                        application_id: t.application.id,
                        n_users: e,
                        n_gdms: i,
                        n_channels: n
                    }), m.onClose()
                }, [t, E, m, R, I]);
                return (0, n.jsxs)(r.ModalRoot, {
                    ...m,
                    className: j.modalRoot,
                    children: [(0, n.jsxs)(r.ModalHeader, {
                        className: j.header,
                        children: [(0, n.jsx)(r.Heading, {
                            variant: "heading-md/semibold",
                            children: O.default.Messages.EMBEDDED_ACTIVITIES_SHARE_ACTIVITY_WITH.format({
                                activityName: t.application.name
                            })
                        }), (0, n.jsx)(r.ModalCloseButton, {
                            onClick: m.onClose
                        })]
                    }), (0, n.jsxs)(r.ModalContent, {
                        className: j.modalContent,
                        children: [(0, n.jsx)(y.default, {
                            className: j.searchBar,
                            placeholder: O.default.Messages.SEARCH,
                            label: O.default.Messages.SEARCH,
                            searchTerm: g,
                            onChange: e => T(e),
                            onClear: () => T("")
                        }), x.map((e, t) => (0, n.jsxs)(a.Fragment, {
                            children: [0 === t ? null : (0, n.jsx)("div", {
                                className: j.rowDivider
                            }), (0, n.jsx)(F, {
                                row: e,
                                onClick: () => {
                                    let t = [...E];
                                    t.includes(e.item.id) ? t = t.filter(t => t !== e.item.id) : t.push(e.item.id), N(t)
                                },
                                checked: E.includes(e.item.id)
                            })]
                        }, e.item.id))]
                    }), (0, n.jsxs)(r.ModalFooter, {
                        className: j.footer,
                        children: [(0, n.jsx)("div", {
                            className: j.activityInfoOuterContainer,
                            children: (0, n.jsxs)("div", {
                                className: j.activityInfoInnerContainer,
                                children: [(0, n.jsx)("img", {
                                    src: C.url,
                                    className: j.activityInfoImage,
                                    alt: t.application.name
                                }), (0, n.jsxs)("div", {
                                    className: j.activityInfoText,
                                    children: [(0, n.jsx)(r.Text, {
                                        variant: "text-md/semibold",
                                        className: j.ellipsis,
                                        children: t.application.name
                                    }), (0, n.jsx)(r.Text, {
                                        variant: "text-sm/medium",
                                        className: j.ellipsis,
                                        children: t.application.description
                                    }), (0, n.jsx)(r.Text, {
                                        variant: "text-xs/medium",
                                        className: j.ellipsis,
                                        children: (0, n.jsx)(r.Anchor, {
                                            href: R,
                                            children: R
                                        })
                                    })]
                                })]
                            })
                        }), (0, n.jsx)("div", {
                            className: j.footerDivider
                        }), (0, n.jsxs)("div", {
                            className: j.copySendBar,
                            children: [(0, n.jsx)(M, {
                                link: R,
                                applicationId: t.application.id
                            }), (0, n.jsx)(r.Button, {
                                onClick: L,
                                disabled: E.length <= 0,
                                children: O.default.Messages.SEND
                            })]
                        })]
                    })]
                })
            }

            function F(e) {
                let {
                    row: t,
                    onClick: i,
                    checked: a
                } = e, s = null, l = null, o = null;
                switch (t.type) {
                    case _.RowTypes.DM:
                    case _.RowTypes.FRIEND:
                        s = (0, n.jsx)(r.Avatar, {
                            size: r.AvatarSizes.SIZE_40,
                            src: t.item.getAvatarURL(null, 128, !1),
                            "aria-label": t.item.username
                        }), l = x.default.getName(t.item), o = x.default.getUserTag(t.item);
                        break;
                    case _.RowTypes.GROUP_DM: {
                        let e = (0, m.getChannelIconURL)(t.item),
                            i = (0, I.computeChannelName)(t.item, A.default, g.default);
                        s = (0, n.jsx)(r.Avatar, {
                            src: e,
                            "aria-label": i,
                            size: r.AvatarSizes.SIZE_40
                        }), l = (0, I.computeChannelName)(t.item, A.default, g.default);
                        break
                    }
                    case _.RowTypes.CHANNEL: {
                        let e = t.item,
                            i = h.default.getGuild(e.guild_id);
                        if (null == i) return null;
                        if (l = "#".concat((0, I.computeChannelName)(e, A.default, g.default)), o = i.name, null != i.icon) {
                            let t = N.default.getGuildIconURL({
                                id: e.guild_id,
                                icon: i.icon,
                                size: 40
                            });
                            s = (0, n.jsx)(r.Avatar, {
                                src: t,
                                "aria-label": l,
                                size: r.AvatarSizes.SIZE_40
                            })
                        } else {
                            let e = (0, R.getAcronym)(i.name);
                            s = (0, n.jsx)("div", {
                                className: j.acronym,
                                "aria-hidden": !0,
                                children: e
                            })
                        }
                    }
                }
                return (0, n.jsxs)(r.Clickable, {
                    onClick: i,
                    className: j.rowContainer,
                    children: [(0, n.jsxs)("div", {
                        className: j.rowLeft,
                        children: [(0, n.jsx)("div", {
                            className: j.rowAvatar,
                            children: s
                        }), (0, n.jsxs)("div", {
                            className: j.rowNameContainer,
                            children: [(0, n.jsx)(r.Text, {
                                variant: "text-md/semibold",
                                className: j.rowName,
                                children: l
                            }), (0, n.jsx)(r.Text, {
                                variant: "text-xs/medium",
                                className: j.rowSubName,
                                children: o
                            })]
                        })]
                    }), (0, n.jsx)(r.Checkbox, {
                        value: a,
                        type: r.Checkbox.Types.INVERTED,
                        displayOnly: !0,
                        className: j.rowRight
                    })]
                })
            }

            function M(e) {
                let {
                    applicationId: t,
                    link: i
                } = e, s = (0, l.useStateFromStores)([A.default], () => A.default.getCurrentUser()), [o, d] = a.useState(!1);
                return a.useEffect(() => {
                    let e;
                    return o && (e = setTimeout(() => {
                        d(!1)
                    }, 1e3)), () => {
                        null != e && clearTimeout(e)
                    }
                }, [o]), (0, n.jsxs)(r.Button, {
                    look: r.Button.Looks.LINK,
                    color: r.Button.Colors.LINK,
                    onClick: function() {
                        v.default.track(w.AnalyticEvents.ACTIVITY_BOOKMARK_COPY_URL, {
                            user_id: null == s ? void 0 : s.id,
                            application_id: t
                        }), (0, C.copy)(i), d(!0)
                    },
                    innerClassName: j.copyButton,
                    children: [o ? (0, n.jsx)(T.default, {}) : (0, n.jsx)(E.default, {}), o ? O.default.Messages.COPIED : O.default.Messages.COPY_LINK]
                })
            }
        },
        843962: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                getChannelIconURL: function() {
                    return r
                }
            });
            var n = i("697218"),
                a = i("315102"),
                s = i("449008"),
                l = i("49111");

            function r(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
                    i = arguments.length > 2 ? arguments[2] : void 0;
                switch (e.type) {
                    case l.ChannelTypes.DM:
                        let [r] = e.recipients.map(n.default.getUser).filter(s.isNotNullish);
                        if (null == r) return null;
                        return r.getAvatarURL(void 0, t, i);
                    case l.ChannelTypes.GROUP_DM:
                        return a.default.getChannelIconURL({
                            id: e.id,
                            icon: e.icon,
                            applicationId: e.getApplicationId(),
                            size: t
                        })
                }
            }
        },
        705955: function(e, t, i) {
            "use strict";
            let n, a, s, l, r, o, d;
            i.r(t), i.d(t, {
                default: function() {
                    return _
                }
            });
            var u = i("446674"),
                c = i("913144"),
                f = i("116460"),
                p = i("449008"),
                m = i("354023"),
                I = i("42203"),
                h = i("27618"),
                S = i("843823"),
                g = i("49111"),
                A = i("91366");
            let y = new Set,
                T = [],
                E = new Map;

            function v(e) {
                let t = new Set,
                    i = null == l || d === A.InviteTargetTypes.EMBEDDED_APPLICATION ? void 0 : l.id,
                    n = (0, m.getMostRecentDMedUser)(y, i);
                for (let e of (null != n && !h.default.isBlocked(n.id) && t.add(n.id), S.default.getUserAffinitiesUserIds())) t.add(e);
                let a = new Set;
                if (d === A.InviteTargetTypes.EMBEDDED_APPLICATION) {
                    let e = f.default.getChannelHistory();
                    e.map(e => I.default.getChannel(e)).filter(p.isNotNullish).filter(e => e.type === g.ChannelTypes.GUILD_TEXT).slice(0, 3).forEach(e => a.add(e.id))
                }
                return (0, m.generateRowsForQuery)({
                    query: e,
                    omitUserIds: y,
                    suggestedUserIds: t,
                    maxRowsWithoutQuery: 100,
                    omitGuildId: i,
                    suggestedChannelIds: a,
                    inviteTargetType: d
                })
            }

            function N(e) {
                T = e, E = new Map, e.forEach((e, t) => {
                    E.set(e, {
                        index: t
                    })
                })
            }
            class C extends u.default.Store {
                initialize() {
                    this.waitFor(h.default, S.default)
                }
                getInviteSuggestionRows() {
                    return T
                }
                getTotalSuggestionsCount() {
                    return a
                }
                getInitialCounts() {
                    return n
                }
                getSelectedInviteMetadata(e) {
                    let t = E.get(e),
                        i = S.default.getUserAffinitiesUserIds();
                    return null != t ? {
                        rowNum: t.index,
                        isAffinitySuggestion: e.isSuggested,
                        numTotal: T.length,
                        numAffinityConnections: i.size,
                        isFiltered: s
                    } : null
                }
            }
            C.displayName = "InviteSuggestionsStore";
            var _ = new C(c.default, {
                LOAD_INVITE_SUGGESTIONS: function(e) {
                    let {
                        omitUserIds: t,
                        guild: i,
                        channel: u,
                        applicationId: c,
                        inviteTargetType: f
                    } = e;
                    l = null != u ? i : null, r = u, o = c, d = f;
                    let p = h.default.getRelationships(),
                        I = Object.keys(p).filter(e => p[e] === g.RelationshipTypes.BLOCKED),
                        S = (0, m.getUsersAlreadyJoined)({
                            channel: r,
                            applicationId: o,
                            inviteTargetType: f
                        });
                    y = new Set([...t, ...I, ...S]), s = !1;
                    let {
                        rows: A,
                        counts: E
                    } = v("");
                    N(A), n = E, a = T.length
                },
                INVITE_SUGGESTIONS_SEARCH: function(e) {
                    let {
                        query: t
                    } = e;
                    s = "" !== t;
                    let {
                        rows: i
                    } = v(t);
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
            var n = i("446674"),
                a = i("913144"),
                s = i("27618");
            let l = !1,
                r = Object.freeze({
                    userAffinities: [],
                    affinityUserIds: new Set,
                    lastFetched: 0
                }),
                o = {
                    ...r
                };

            function d() {
                o.affinityUserIds = new Set(o.userAffinities.map(e => e.user_id).filter(e => !s.default.isBlocked(e)))
            }
            class u extends n.default.PersistedStore {
                initialize(e) {
                    this.waitFor(s.default), null != e && (o.userAffinities = e.userAffinities, o.affinityUserIds = new Set(e.affinityUserIds), o.lastFetched = e.lastFetched), this.syncWith([s.default], d)
                }
                needsRefresh() {
                    return Date.now() - o.lastFetched > 864e5
                }
                getFetching() {
                    return l
                }
                getState() {
                    return o
                }
                getUserAffinities() {
                    return o.userAffinities
                }
                getUserAffinitiesUserIds() {
                    return o.affinityUserIds
                }
            }
            u.displayName = "UserAffinitiesStore", u.persistKey = "UserAffinitiesStore", u.migrations = [e => null];
            var c = new u(a.default, {
                LOAD_USER_AFFINITIES_SUCCESS: function(e) {
                    var t;
                    let {
                        affinities: i
                    } = e;
                    o.userAffinities = null !== (t = i.user_affinities) && void 0 !== t ? t : [], o.lastFetched = Date.now(), d(), l = !1
                },
                LOAD_USER_AFFINITIES: function() {
                    l = !0
                },
                LOAD_USER_AFFINITIES_FAILURE: function() {
                    l = !1
                },
                LOGOUT: function() {
                    o = {
                        ...r
                    }
                }
            })
        },
        306160: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                SUPPORTS_COPY: function() {
                    return l
                },
                copy: function() {
                    return r
                }
            });
            var n = i("281071"),
                a = i("773336"),
                s = i("50885");
            let l = (() => {
                if (a.isPlatformEmbedded) return null != s.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function r(e) {
                return !!l && (a.isPlatformEmbedded ? (s.default.copy(e), !0) : n.copy(e))
            }
        }
    }
]);