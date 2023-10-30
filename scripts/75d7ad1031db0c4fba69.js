(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["58628"], {
        685073: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                loadInviteSuggestions: function() {
                    return l
                },
                searchInviteSuggestions: function() {
                    return s
                }
            });
            var i = n("913144"),
                a = n("777273");

            function l(e) {
                let {
                    omitUserIds: t,
                    guild: n,
                    channel: l,
                    applicationId: s,
                    inviteTargetType: r
                } = e;
                return (0, a.fetchUserAffinities)().then(() => {
                    i.default.dispatch({
                        type: "LOAD_INVITE_SUGGESTIONS",
                        omitUserIds: null != t ? t : new Set,
                        guild: n,
                        channel: l,
                        applicationId: s,
                        inviteTargetType: r
                    })
                })
            }

            function s(e) {
                i.default.dispatch({
                    type: "INVITE_SUGGESTIONS_SEARCH",
                    query: e
                })
            }
        },
        777273: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchUserAffinities: function() {
                    return r
                }
            });
            var i = n("872717"),
                a = n("913144"),
                l = n("843823"),
                s = n("49111");

            function r() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return l.default.needsRefresh() ? (a.default.dispatch({
                    type: "LOAD_USER_AFFINITIES"
                }), i.default.get({
                    url: s.Endpoints.USER_AFFINITIES,
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
        505088: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleXIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm4.707-15.707a1 1 0 0 0-1.414 0L12 10.586 8.707 7.293a1 1 0 0 0-1.414 1.414L10.586 12l-3.293 3.293a1 1 0 1 0 1.414 1.414L12 13.414l3.293 3.293a1 1 0 0 0 1.414-1.414L13.414 12l3.293-3.293a1 1 0 0 0 0-1.414Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        753809: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LinkIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M16.293 14.707a1 1 0 0 1 0-1.414l2.5-2.5a3.95 3.95 0 1 0-5.586-5.586l-2.5 2.5a1 1 0 1 1-1.414-1.414l2.5-2.5a5.95 5.95 0 0 1 8.414 8.414l-2.5 2.5a1 1 0 0 1-1.414 0ZM7.707 9.293a1 1 0 0 1 0 1.414l-2.5 2.5a3.95 3.95 0 0 0 5.586 5.586l2.5-2.5a1 1 0 0 1 1.414 1.414l-2.5 2.5a5.95 5.95 0 1 1-8.414-8.414l2.5-2.5a1 1 0 0 1 1.414 0Zm7 1.414a1 1 0 1 0-1.414-1.414l-4 4a1 1 0 0 0 1.414 1.414l4-4Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        159747: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var i = n("37983"),
                a = n("884691"),
                l = n("759843"),
                s = n("446674"),
                r = n("77078"),
                o = n("450911"),
                u = n("685073"),
                c = n("819689"),
                d = n("812204"),
                f = n("685665"),
                p = n("428958"),
                m = n("843962"),
                h = n("679653"),
                I = n("305961"),
                g = n("705955"),
                v = n("27618"),
                C = n("697218"),
                x = n("646240"),
                y = n("578706"),
                S = n("83900"),
                A = n("599110"),
                T = n("315102"),
                R = n("306160"),
                E = n("354023"),
                N = n("159885"),
                _ = n("158998"),
                w = n("969380"),
                L = n("49111"),
                j = n("91366"),
                U = n("782340"),
                D = n("764786");

            function M(e) {
                let {
                    activityItem: t,
                    analyticsLocations: n,
                    ...m
                } = e, h = (0, s.useStateFromStores)([C.default], () => C.default.getCurrentUser()), {
                    analyticsLocations: I
                } = (0, f.default)(n);
                (0, p.default)({
                    type: l.ImpressionTypes.MODAL,
                    name: l.ImpressionNames.ACTIVITY_BOOKMARK_SHARE_MODAL,
                    properties: {
                        application_id: t.application.id,
                        location_stack: I
                    }
                });
                let [v, y] = a.useState(""), [S, T] = a.useState([]), R = (0, w.default)({
                    applicationId: t.application.id,
                    size: 256
                }), N = "".concat(window.location.origin).concat(L.Routes.ACTIVITY_DETAILS(t.application.id)), _ = (0, s.useStateFromStoresArray)([g.default], () => g.default.getInviteSuggestionRows());
                a.useEffect(() => {
                    (0, u.loadInviteSuggestions)({
                        omitUserIds: new Set,
                        applicationId: t.application.id,
                        inviteTargetType: j.InviteTargetTypes.EMBEDDED_APPLICATION
                    })
                }, [t.application.id]), a.useEffect(() => (0, u.searchInviteSuggestions)(v), [v]);
                let M = a.useCallback(async () => {
                    let e = 0,
                        n = 0,
                        i = 0,
                        a = g.default.getInviteSuggestionRows().filter(e => S.includes(e.item.id)).map(t => (function(t, a) {
                            switch (t.type) {
                                case E.RowTypes.DM:
                                case E.RowTypes.FRIEND:
                                    e++;
                                    break;
                                case E.RowTypes.GROUP_DM:
                                    n++;
                                    break;
                                case E.RowTypes.CHANNEL:
                                    i++
                            }
                            return t.type === E.RowTypes.GROUP_DM || t.type === E.RowTypes.CHANNEL ? c.default.sendActivityBookmark(t.item.id, a, d.default.ACTIVITY_DETAIL_PAGE, null) : t.type === E.RowTypes.DM || t.type === E.RowTypes.FRIEND ? o.default.ensurePrivateChannel(t.item.id).then(e => c.default.sendActivityBookmark(e, N, d.default.ACTIVITY_DETAIL_PAGE, null)) : Promise.resolve()
                        })(t, N));
                    await a, A.default.track(L.AnalyticEvents.ACTIVITY_BOOKMARK_SHARED, {
                        user_id: null == h ? void 0 : h.id,
                        application_id: t.application.id,
                        n_users: e,
                        n_gdms: n,
                        n_channels: i
                    }), m.onClose()
                }, [t, S, m, N, h]);
                return (0, i.jsxs)(r.ModalRoot, {
                    ...m,
                    className: D.modalRoot,
                    children: [(0, i.jsxs)(r.ModalHeader, {
                        className: D.header,
                        children: [(0, i.jsx)(r.Heading, {
                            variant: "heading-md/semibold",
                            children: U.default.Messages.EMBEDDED_ACTIVITIES_SHARE_ACTIVITY_WITH.format({
                                activityName: t.application.name
                            })
                        }), (0, i.jsx)(r.ModalCloseButton, {
                            onClick: m.onClose
                        })]
                    }), (0, i.jsxs)(r.ModalContent, {
                        className: D.modalContent,
                        children: [(0, i.jsx)(x.default, {
                            className: D.searchBar,
                            placeholder: U.default.Messages.SEARCH,
                            label: U.default.Messages.SEARCH,
                            searchTerm: v,
                            onChange: e => y(e),
                            onClear: () => y("")
                        }), _.map((e, t) => (0, i.jsxs)(a.Fragment, {
                            children: [0 === t ? null : (0, i.jsx)("div", {
                                className: D.rowDivider
                            }), (0, i.jsx)(O, {
                                row: e,
                                onClick: () => {
                                    let t = [...S];
                                    t.includes(e.item.id) ? t = t.filter(t => t !== e.item.id) : t.push(e.item.id), T(t)
                                },
                                checked: S.includes(e.item.id)
                            })]
                        }, e.item.id))]
                    }), (0, i.jsxs)(r.ModalFooter, {
                        className: D.footer,
                        children: [(0, i.jsx)("div", {
                            className: D.activityInfoOuterContainer,
                            children: (0, i.jsxs)("div", {
                                className: D.activityInfoInnerContainer,
                                children: [(0, i.jsx)("img", {
                                    src: R.url,
                                    className: D.activityInfoImage,
                                    alt: t.application.name
                                }), (0, i.jsxs)("div", {
                                    className: D.activityInfoText,
                                    children: [(0, i.jsx)(r.Text, {
                                        variant: "text-md/semibold",
                                        className: D.ellipsis,
                                        children: t.application.name
                                    }), (0, i.jsx)(r.Text, {
                                        variant: "text-sm/medium",
                                        className: D.ellipsis,
                                        children: t.application.description
                                    }), (0, i.jsx)(r.Text, {
                                        variant: "text-xs/medium",
                                        className: D.ellipsis,
                                        children: (0, i.jsx)(r.Anchor, {
                                            href: N,
                                            children: N
                                        })
                                    })]
                                })]
                            })
                        }), (0, i.jsx)("div", {
                            className: D.footerDivider
                        }), (0, i.jsxs)("div", {
                            className: D.copySendBar,
                            children: [(0, i.jsx)(F, {
                                link: N,
                                applicationId: t.application.id
                            }), (0, i.jsx)(r.Button, {
                                onClick: M,
                                disabled: S.length <= 0,
                                children: U.default.Messages.SEND
                            })]
                        })]
                    })]
                })
            }

            function O(e) {
                let {
                    row: t,
                    onClick: n,
                    checked: a
                } = e, l = null, s = null, o = null;
                switch (t.type) {
                    case E.RowTypes.DM:
                    case E.RowTypes.FRIEND:
                        l = (0, i.jsx)(r.Avatar, {
                            size: r.AvatarSizes.SIZE_40,
                            src: t.item.getAvatarURL(null, 128, !1),
                            "aria-label": t.item.username
                        }), s = _.default.getName(t.item), o = _.default.getUserTag(t.item);
                        break;
                    case E.RowTypes.GROUP_DM: {
                        let e = (0, m.getChannelIconURL)(t.item),
                            n = (0, h.computeChannelName)(t.item, C.default, v.default);
                        l = (0, i.jsx)(r.Avatar, {
                            src: e,
                            "aria-label": n,
                            size: r.AvatarSizes.SIZE_40
                        }), s = (0, h.computeChannelName)(t.item, C.default, v.default);
                        break
                    }
                    case E.RowTypes.CHANNEL: {
                        let e = t.item,
                            n = I.default.getGuild(e.guild_id);
                        if (null == n) return null;
                        if (s = "#".concat((0, h.computeChannelName)(e, C.default, v.default)), o = n.name, null != n.icon) {
                            let t = T.default.getGuildIconURL({
                                id: e.guild_id,
                                icon: n.icon,
                                size: 40
                            });
                            l = (0, i.jsx)(r.Avatar, {
                                src: t,
                                "aria-label": s,
                                size: r.AvatarSizes.SIZE_40
                            })
                        } else {
                            let e = (0, N.getAcronym)(n.name);
                            l = (0, i.jsx)("div", {
                                className: D.acronym,
                                "aria-hidden": !0,
                                children: e
                            })
                        }
                    }
                }
                return (0, i.jsxs)(r.Clickable, {
                    onClick: n,
                    className: D.rowContainer,
                    children: [(0, i.jsxs)("div", {
                        className: D.rowLeft,
                        children: [(0, i.jsx)("div", {
                            className: D.rowAvatar,
                            children: l
                        }), (0, i.jsxs)("div", {
                            className: D.rowNameContainer,
                            children: [(0, i.jsx)(r.Text, {
                                variant: "text-md/semibold",
                                className: D.rowName,
                                children: s
                            }), (0, i.jsx)(r.Text, {
                                variant: "text-xs/medium",
                                className: D.rowSubName,
                                children: o
                            })]
                        })]
                    }), (0, i.jsx)(r.Checkbox, {
                        value: a,
                        type: r.Checkbox.Types.INVERTED,
                        displayOnly: !0,
                        className: D.rowRight
                    })]
                })
            }

            function F(e) {
                let {
                    applicationId: t,
                    link: n
                } = e, l = (0, s.useStateFromStores)([C.default], () => C.default.getCurrentUser()), [o, u] = a.useState(!1);
                return a.useEffect(() => {
                    let e;
                    return o && (e = setTimeout(() => {
                        u(!1)
                    }, 1e3)), () => {
                        null != e && clearTimeout(e)
                    }
                }, [o]), (0, i.jsxs)(r.Button, {
                    look: r.Button.Looks.LINK,
                    color: r.Button.Colors.LINK,
                    onClick: function() {
                        A.default.track(L.AnalyticEvents.ACTIVITY_BOOKMARK_COPY_URL, {
                            user_id: null == l ? void 0 : l.id,
                            application_id: t
                        }), (0, R.copy)(n), u(!0)
                    },
                    innerClassName: D.copyButton,
                    children: [o ? (0, i.jsx)(y.default, {}) : (0, i.jsx)(S.default, {}), o ? U.default.Messages.COPIED : U.default.Messages.COPY_LINK]
                })
            }
        },
        843962: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getChannelIconURL: function() {
                    return r
                }
            });
            var i = n("697218"),
                a = n("315102"),
                l = n("449008"),
                s = n("49111");

            function r(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                switch (e.type) {
                    case s.ChannelTypes.DM:
                        let [r] = e.recipients.map(i.default.getUser).filter(l.isNotNullish);
                        if (null == r) return null;
                        return r.getAvatarURL(void 0, t, n);
                    case s.ChannelTypes.GROUP_DM:
                        return a.default.getChannelIconURL({
                            id: e.id,
                            icon: e.icon,
                            applicationId: e.getApplicationId(),
                            size: t
                        })
                }
            }
        },
        705955: function(e, t, n) {
            "use strict";
            let i, a, l, s, r, o, u;
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var c = n("446674"),
                d = n("913144"),
                f = n("116460"),
                p = n("449008"),
                m = n("354023"),
                h = n("42203"),
                I = n("27618"),
                g = n("843823"),
                v = n("49111"),
                C = n("91366");
            let x = new Set,
                y = [],
                S = new Map;

            function A(e) {
                let t = new Set,
                    n = null == s || u === C.InviteTargetTypes.EMBEDDED_APPLICATION ? void 0 : s.id,
                    i = (0, m.getMostRecentDMedUser)(x, n);
                for (let e of (null != i && !I.default.isBlocked(i.id) && t.add(i.id), g.default.getUserAffinitiesUserIds())) t.add(e);
                let a = new Set;
                if (u === C.InviteTargetTypes.EMBEDDED_APPLICATION) {
                    let e = f.default.getChannelHistory();
                    e.map(e => h.default.getChannel(e)).filter(p.isNotNullish).filter(e => e.type === v.ChannelTypes.GUILD_TEXT).slice(0, 3).forEach(e => a.add(e.id))
                }
                return (0, m.generateRowsForQuery)({
                    query: e,
                    omitUserIds: x,
                    suggestedUserIds: t,
                    maxRowsWithoutQuery: 100,
                    omitGuildId: n,
                    suggestedChannelIds: a,
                    inviteTargetType: u
                })
            }

            function T(e) {
                y = e, S = new Map, e.forEach((e, t) => {
                    S.set(e, {
                        index: t
                    })
                })
            }
            class R extends c.default.Store {
                initialize() {
                    this.waitFor(I.default, g.default)
                }
                getInviteSuggestionRows() {
                    return y
                }
                getTotalSuggestionsCount() {
                    return a
                }
                getInitialCounts() {
                    return i
                }
                getSelectedInviteMetadata(e) {
                    let t = S.get(e),
                        n = g.default.getUserAffinitiesUserIds();
                    return null != t ? {
                        rowNum: t.index,
                        isAffinitySuggestion: e.isSuggested,
                        numTotal: y.length,
                        numAffinityConnections: n.size,
                        isFiltered: l
                    } : null
                }
            }
            R.displayName = "InviteSuggestionsStore";
            var E = new R(d.default, {
                LOAD_INVITE_SUGGESTIONS: function(e) {
                    let {
                        omitUserIds: t,
                        guild: n,
                        channel: c,
                        applicationId: d,
                        inviteTargetType: f
                    } = e;
                    s = null != c ? n : null, r = c, o = d, u = f;
                    let p = I.default.getRelationships(),
                        h = Object.keys(p).filter(e => p[e] === v.RelationshipTypes.BLOCKED),
                        g = (0, m.getUsersAlreadyJoined)({
                            channel: r,
                            applicationId: o,
                            inviteTargetType: f
                        });
                    x = new Set([...t, ...h, ...g]), l = !1;
                    let {
                        rows: C,
                        counts: S
                    } = A("");
                    T(C), i = S, a = y.length
                },
                INVITE_SUGGESTIONS_SEARCH: function(e) {
                    let {
                        query: t
                    } = e;
                    l = "" !== t;
                    let {
                        rows: n
                    } = A(t);
                    T(n)
                }
            })
        },
        843823: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("446674"),
                a = n("913144"),
                l = n("27618");
            let s = !1,
                r = Object.freeze({
                    userAffinities: [],
                    affinityUserIds: new Set,
                    lastFetched: 0
                }),
                o = {
                    ...r
                };

            function u() {
                o.affinityUserIds = new Set(o.userAffinities.map(e => e.user_id).filter(e => !l.default.isBlocked(e)))
            }
            class c extends i.default.PersistedStore {
                initialize(e) {
                    this.waitFor(l.default), null != e && (o.userAffinities = e.userAffinities, o.affinityUserIds = new Set(e.affinityUserIds), o.lastFetched = e.lastFetched), this.syncWith([l.default], u)
                }
                needsRefresh() {
                    return Date.now() - o.lastFetched > 864e5
                }
                getFetching() {
                    return s
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
            c.displayName = "UserAffinitiesStore", c.persistKey = "UserAffinitiesStore", c.migrations = [e => null];
            var d = new c(a.default, {
                LOAD_USER_AFFINITIES_SUCCESS: function(e) {
                    var t;
                    let {
                        affinities: n
                    } = e;
                    o.userAffinities = null !== (t = n.user_affinities) && void 0 !== t ? t : [], o.lastFetched = Date.now(), u(), s = !1
                },
                LOAD_USER_AFFINITIES: function() {
                    s = !0
                },
                LOAD_USER_AFFINITIES_FAILURE: function() {
                    s = !1
                },
                LOGOUT: function() {
                    o = {
                        ...r
                    }
                }
            })
        },
        646240: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var i = n("37983"),
                a = n("884691"),
                l = n("414456"),
                s = n.n(l),
                r = n("77078"),
                o = n("381546"),
                u = n("229915"),
                c = n("782340"),
                d = n("913893");
            class f extends a.Component {
                render() {
                    let {
                        autoFocus: e,
                        label: t,
                        placeholder: n,
                        searchTerm: a,
                        inputClassName: l,
                        className: f,
                        onChange: p,
                        onFocus: m,
                        onBlur: h,
                        onKeyPress: I,
                        autoComplete: g,
                        forwardedRef: v,
                        closeIconClassName: C,
                        searchIconClassName: x,
                        cta: y
                    } = this.props, S = null != a && a.length > 0, A = null != v ? v : this._textInputRef;
                    return (0, i.jsx)(r.FocusRing, {
                        focusTarget: A,
                        ringTarget: this._containerRef,
                        children: (0, i.jsxs)("div", {
                            className: s(d.searchBox, f),
                            ref: this._containerRef,
                            children: [(0, i.jsx)(r.TextInput, {
                                inputRef: A,
                                focusProps: {
                                    enabled: !1
                                },
                                name: "search",
                                maxLength: 100,
                                className: d.searchBoxInputWrapper,
                                inputClassName: s(d.searchBoxInput, l),
                                onChange: p,
                                onFocus: m,
                                onBlur: h,
                                onKeyPress: I,
                                value: S ? a : "",
                                placeholder: n,
                                autoFocus: e,
                                "aria-label": t,
                                autoComplete: g ? "on" : "off"
                            }), null != y ? (0, i.jsx)(r.Text, {
                                color: "text-muted",
                                variant: "text-xs/normal",
                                className: d.cta,
                                children: y
                            }) : null, S ? (0, i.jsx)(r.Clickable, {
                                onClick: this.handleClear,
                                className: d.clear,
                                "aria-label": c.default.Messages.SEARCH_CLEAR,
                                children: (0, i.jsx)(o.default, {
                                    className: s(d.clearIcon, C)
                                })
                            }) : (0, i.jsx)(u.default, {
                                className: s(d.searchIcon, x),
                                "aria-label": c.default.Messages.SEARCH
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._textInputRef = a.createRef(), this._containerRef = a.createRef(), this.handleClear = () => {
                        let {
                            onClear: e,
                            forwardedRef: t
                        } = this.props, {
                            current: n
                        } = null != t ? t : this._textInputRef;
                        null != n && n.focus(), null != e && e()
                    }
                }
            }
            f.defaultProps = {
                autoComplete: !1
            };
            var p = a.forwardRef((e, t) => (0, i.jsx)(f, {
                forwardedRef: t,
                ...e
            }))
        },
        381546: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("469563"),
                l = n("505088"),
                s = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: l,
                        backgroundColor: r,
                        ...o
                    } = e;
                    return (0, i.jsxs)("svg", {
                        ...(0, s.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 14 14",
                        children: [null != r ? (0, i.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: r
                        }) : null, (0, i.jsx)("path", {
                            fill: a,
                            className: l,
                            d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                        })]
                    })
                }, l.CircleXIcon)
        },
        83900: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("469563"),
                l = n("753809"),
                s = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: l,
                        ...r
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, i.jsx)("path", {
                                className: l,
                                fill: a,
                                d: "M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0 5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24 2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24zm2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0 5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24 2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24.973.973 0 0 1 0-1.42z"
                            }), (0, i.jsx)("rect", {
                                width: "24",
                                height: "24"
                            })]
                        })
                    })
                }, l.LinkIcon)
        },
        306160: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SUPPORTS_COPY: function() {
                    return s
                },
                copy: function() {
                    return r
                }
            });
            var i = n("281071"),
                a = n("773336"),
                l = n("50885");
            let s = (() => {
                if (a.isPlatformEmbedded) return null != l.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function r(e) {
                return !!s && (a.isPlatformEmbedded ? (l.default.copy(e), !0) : i.copy(e))
            }
        },
        281071: function(e, t, n) {
            "use strict";

            function i(e) {
                let t = document.body;
                if (null == t) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                let n = document.createRange(),
                    i = window.getSelection(),
                    a = document.createElement("textarea");
                a.value = e, a.contentEditable = "true", a.style.visibility = "none", t.appendChild(a), n.selectNodeContents(a), null == i || i.removeAllRanges(), null == i || i.addRange(n), a.focus(), a.setSelectionRange(0, e.length);
                let l = document.execCommand("copy");
                return t.removeChild(a), l
            }
            n.r(t), n.d(t, {
                copy: function() {
                    return i
                }
            })
        }
    }
]);