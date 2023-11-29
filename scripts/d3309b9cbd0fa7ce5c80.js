(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["55438"], {
        448105: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n = t.length,
                    i = e.length;
                if (i > n) return !1;
                if (i === n) return e === t;
                e: for (var a = 0, s = 0; a < i; a++) {
                    for (var l = e.charCodeAt(a); s < n;)
                        if (t.charCodeAt(s++) === l) continue e;
                    return !1
                }
                return !0
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
                s = n("843823"),
                l = n("49111");

            function r() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return s.default.needsRefresh() ? (a.default.dispatch({
                    type: "LOAD_USER_AFFINITIES"
                }), i.default.get({
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
        505088: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleXIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: l = "transparent",
                    secondaryColorClass: r = "",
                    color: u = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...d
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, s.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof l ? l : l.css,
                        className: r
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm4.707-15.707a1 1 0 0 0-1.414 0L12 10.586 8.707 7.293a1 1 0 0 0-1.414 1.414L10.586 12l-3.293 3.293a1 1 0 1 0 1.414 1.414L12 13.414l3.293 3.293a1 1 0 0 0 1.414-1.414L13.414 12l3.293-3.293a1 1 0 0 0 0-1.414Z",
                        clipRule: "evenodd",
                        className: o
                    })]
                })
            }
        },
        159747: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            }), n("222007"), n("424973");
            var i = n("37983"),
                a = n("884691"),
                s = n("759843"),
                l = n("446674"),
                r = n("77078"),
                u = n("450911"),
                o = n("685073"),
                d = n("819689"),
                c = n("812204"),
                f = n("685665"),
                p = n("428958"),
                m = n("843962"),
                h = n("679653"),
                E = n("305961"),
                I = n("705955"),
                A = n("27618"),
                g = n("697218"),
                C = n("646240"),
                v = n("578706"),
                S = n("83900"),
                T = n("599110"),
                N = n("315102"),
                _ = n("306160"),
                y = n("354023"),
                R = n("159885"),
                x = n("158998"),
                L = n("969380"),
                U = n("49111"),
                D = n("91366"),
                w = n("782340"),
                F = n("764786");

            function O(e) {
                let {
                    activityItem: t,
                    analyticsLocations: n,
                    ...m
                } = e, h = (0, l.useStateFromStores)([g.default], () => g.default.getCurrentUser()), {
                    analyticsLocations: E
                } = (0, f.default)(n);
                (0, p.default)({
                    type: s.ImpressionTypes.MODAL,
                    name: s.ImpressionNames.ACTIVITY_BOOKMARK_SHARE_MODAL,
                    properties: {
                        application_id: t.application.id,
                        location_stack: E
                    }
                });
                let [A, v] = a.useState(""), [S, N] = a.useState([]), _ = (0, L.default)({
                    applicationId: t.application.id,
                    size: 256
                }), R = "".concat(window.location.origin).concat(U.Routes.ACTIVITY_DETAILS(t.application.id)), x = (0, l.useStateFromStoresArray)([I.default], () => I.default.getInviteSuggestionRows());
                a.useEffect(() => {
                    (0, o.loadInviteSuggestions)({
                        omitUserIds: new Set,
                        applicationId: t.application.id,
                        inviteTargetType: D.InviteTargetTypes.EMBEDDED_APPLICATION
                    })
                }, [t.application.id]), a.useEffect(() => (0, o.searchInviteSuggestions)(A), [A]);
                let O = a.useCallback(async () => {
                    let e = 0,
                        n = 0,
                        i = 0,
                        a = I.default.getInviteSuggestionRows().filter(e => S.includes(e.item.id)).map(t => (function(t, a) {
                            switch (t.type) {
                                case y.RowTypes.DM:
                                case y.RowTypes.FRIEND:
                                    e++;
                                    break;
                                case y.RowTypes.GROUP_DM:
                                    n++;
                                    break;
                                case y.RowTypes.CHANNEL:
                                    i++
                            }
                            return t.type === y.RowTypes.GROUP_DM || t.type === y.RowTypes.CHANNEL ? d.default.sendActivityBookmark(t.item.id, a, c.default.ACTIVITY_DETAIL_PAGE, null) : t.type === y.RowTypes.DM || t.type === y.RowTypes.FRIEND ? u.default.ensurePrivateChannel(t.item.id).then(e => d.default.sendActivityBookmark(e, R, c.default.ACTIVITY_DETAIL_PAGE, null)) : Promise.resolve()
                        })(t, R));
                    await a, T.default.track(U.AnalyticEvents.ACTIVITY_BOOKMARK_SHARED, {
                        user_id: null == h ? void 0 : h.id,
                        application_id: t.application.id,
                        n_users: e,
                        n_gdms: n,
                        n_channels: i
                    }), m.onClose()
                }, [t, S, m, R, h]);
                return (0, i.jsxs)(r.ModalRoot, {
                    ...m,
                    className: F.modalRoot,
                    children: [(0, i.jsxs)(r.ModalHeader, {
                        className: F.header,
                        children: [(0, i.jsx)(r.Heading, {
                            variant: "heading-md/semibold",
                            children: w.default.Messages.EMBEDDED_ACTIVITIES_SHARE_ACTIVITY_WITH.format({
                                activityName: t.application.name
                            })
                        }), (0, i.jsx)(r.ModalCloseButton, {
                            onClick: m.onClose
                        })]
                    }), (0, i.jsxs)(r.ModalContent, {
                        className: F.modalContent,
                        children: [(0, i.jsx)(C.default, {
                            className: F.searchBar,
                            placeholder: w.default.Messages.SEARCH,
                            label: w.default.Messages.SEARCH,
                            searchTerm: A,
                            onChange: e => v(e),
                            onClear: () => v("")
                        }), x.map((e, t) => (0, i.jsxs)(a.Fragment, {
                            children: [0 === t ? null : (0, i.jsx)("div", {
                                className: F.rowDivider
                            }), (0, i.jsx)(j, {
                                row: e,
                                onClick: () => {
                                    let t = [...S];
                                    t.includes(e.item.id) ? t = t.filter(t => t !== e.item.id) : t.push(e.item.id), N(t)
                                },
                                checked: S.includes(e.item.id)
                            })]
                        }, e.item.id))]
                    }), (0, i.jsxs)(r.ModalFooter, {
                        className: F.footer,
                        children: [(0, i.jsx)("div", {
                            className: F.activityInfoOuterContainer,
                            children: (0, i.jsxs)("div", {
                                className: F.activityInfoInnerContainer,
                                children: [(0, i.jsx)("img", {
                                    src: _.url,
                                    className: F.activityInfoImage,
                                    alt: t.application.name
                                }), (0, i.jsxs)("div", {
                                    className: F.activityInfoText,
                                    children: [(0, i.jsx)(r.Text, {
                                        variant: "text-md/semibold",
                                        className: F.ellipsis,
                                        children: t.application.name
                                    }), (0, i.jsx)(r.Text, {
                                        variant: "text-sm/medium",
                                        className: F.ellipsis,
                                        children: t.application.description
                                    }), (0, i.jsx)(r.Text, {
                                        variant: "text-xs/medium",
                                        className: F.ellipsis,
                                        children: (0, i.jsx)(r.Anchor, {
                                            href: R,
                                            children: R
                                        })
                                    })]
                                })]
                            })
                        }), (0, i.jsx)("div", {
                            className: F.footerDivider
                        }), (0, i.jsxs)("div", {
                            className: F.copySendBar,
                            children: [(0, i.jsx)(M, {
                                link: R,
                                applicationId: t.application.id
                            }), (0, i.jsx)(r.Button, {
                                onClick: O,
                                disabled: S.length <= 0,
                                children: w.default.Messages.SEND
                            })]
                        })]
                    })]
                })
            }

            function j(e) {
                let {
                    row: t,
                    onClick: n,
                    checked: a
                } = e, s = null, l = null, u = null;
                switch (t.type) {
                    case y.RowTypes.DM:
                    case y.RowTypes.FRIEND:
                        s = (0, i.jsx)(r.Avatar, {
                            size: r.AvatarSizes.SIZE_40,
                            src: t.item.getAvatarURL(null, 128, !1),
                            "aria-label": t.item.username
                        }), l = x.default.getName(t.item), u = x.default.getUserTag(t.item);
                        break;
                    case y.RowTypes.GROUP_DM: {
                        let e = (0, m.getChannelIconURL)(t.item),
                            n = (0, h.computeChannelName)(t.item, g.default, A.default);
                        s = (0, i.jsx)(r.Avatar, {
                            src: e,
                            "aria-label": n,
                            size: r.AvatarSizes.SIZE_40
                        }), l = (0, h.computeChannelName)(t.item, g.default, A.default);
                        break
                    }
                    case y.RowTypes.CHANNEL: {
                        let e = t.item,
                            n = E.default.getGuild(e.guild_id);
                        if (null == n) return null;
                        if (l = "#".concat((0, h.computeChannelName)(e, g.default, A.default)), u = n.name, null != n.icon) {
                            let t = N.default.getGuildIconURL({
                                id: e.guild_id,
                                icon: n.icon,
                                size: 40
                            });
                            s = (0, i.jsx)(r.Avatar, {
                                src: t,
                                "aria-label": l,
                                size: r.AvatarSizes.SIZE_40
                            })
                        } else {
                            let e = (0, R.getAcronym)(n.name);
                            s = (0, i.jsx)("div", {
                                className: F.acronym,
                                "aria-hidden": !0,
                                children: e
                            })
                        }
                    }
                }
                return (0, i.jsxs)(r.Clickable, {
                    onClick: n,
                    className: F.rowContainer,
                    children: [(0, i.jsxs)("div", {
                        className: F.rowLeft,
                        children: [(0, i.jsx)("div", {
                            className: F.rowAvatar,
                            children: s
                        }), (0, i.jsxs)("div", {
                            className: F.rowNameContainer,
                            children: [(0, i.jsx)(r.Text, {
                                variant: "text-md/semibold",
                                className: F.rowName,
                                children: l
                            }), (0, i.jsx)(r.Text, {
                                variant: "text-xs/medium",
                                className: F.rowSubName,
                                children: u
                            })]
                        })]
                    }), (0, i.jsx)(r.Checkbox, {
                        value: a,
                        type: r.Checkbox.Types.INVERTED,
                        displayOnly: !0,
                        className: F.rowRight
                    })]
                })
            }

            function M(e) {
                let {
                    applicationId: t,
                    link: n
                } = e, s = (0, l.useStateFromStores)([g.default], () => g.default.getCurrentUser()), [u, o] = a.useState(!1);
                return a.useEffect(() => {
                    let e;
                    return u && (e = setTimeout(() => {
                        o(!1)
                    }, 1e3)), () => {
                        null != e && clearTimeout(e)
                    }
                }, [u]), (0, i.jsxs)(r.Button, {
                    look: r.Button.Looks.LINK,
                    color: r.Button.Colors.LINK,
                    onClick: function() {
                        T.default.track(U.AnalyticEvents.ACTIVITY_BOOKMARK_COPY_URL, {
                            user_id: null == s ? void 0 : s.id,
                            application_id: t
                        }), (0, _.copy)(n), o(!0)
                    },
                    innerClassName: F.copyButton,
                    children: [u ? (0, i.jsx)(v.default, {}) : (0, i.jsx)(S.default, {}), u ? w.default.Messages.COPIED : w.default.Messages.COPY_LINK]
                })
            }
        },
        843962: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getChannelIconURL: function() {
                    return r
                }
            }), n("222007");
            var i = n("697218"),
                a = n("315102"),
                s = n("449008"),
                l = n("49111");

            function r(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                switch (e.type) {
                    case l.ChannelTypes.DM:
                        let [r] = e.recipients.map(i.default.getUser).filter(s.isNotNullish);
                        if (null == r) return null;
                        return r.getAvatarURL(void 0, t, n);
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
        866353: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StickerSendability: function() {
                    return a
                },
                getStickerSendability: function() {
                    return o
                },
                isSendableSticker: function() {
                    return d
                }
            });
            var i, a, s = n("991170"),
                l = n("719923"),
                r = n("24373"),
                u = n("49111");
            (i = a || (a = {}))[i.SENDABLE = 0] = "SENDABLE", i[i.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", i[i.NONSENDABLE = 2] = "NONSENDABLE", i[i.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
            let o = (e, t, n) => {
                    if (null == t) return 2;
                    let i = l.default.canUseCustomStickersEverywhere(t);
                    if ((0, r.isStandardSticker)(e)) return 0;
                    if ((0, r.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? 0 : null == n.guild_id || s.default.can({
                        permission: u.Permissions.USE_EXTERNAL_STICKERS,
                        user: t,
                        context: n
                    }) ? i ? 0 : 1 : 2 : 3;
                    return 2
                },
                d = (e, t, n) => 0 === o(e, t, n)
        },
        865372: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            }), n("424973");
            var i = n("917351"),
                a = n.n(i),
                s = n("446674"),
                l = n("913144"),
                r = n("80507"),
                u = n("374363"),
                o = n("364685"),
                d = n("49111"),
                c = n("397336");
            let f = {
                pendingUsages: []
            };
            d.Durations.DAY;
            let p = new r.default({
                    computeBonus: () => 100,
                    computeWeight: e => {
                        let t = 0;
                        return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
                    },
                    lookupKey: e => o.default.getStickerById(e),
                    afterCompute: () => {},
                    numFrequentlyItems: 20
                }),
                m = () => {
                    o.default.isLoaded && p.compute()
                },
                h = () => {
                    m()
                };

            function E() {
                var e;
                let t = null === (e = u.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
                if (null == t) return !1;
                p.overwriteHistory(a.mapValues(t, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), f.pendingUsages)
            }
            class I extends s.default.PersistedStore {
                initialize(e) {
                    this.waitFor(o.default), null != e && (f = e), this.syncWith([o.default], h), this.syncWith([u.default], E)
                }
                getState() {
                    return f
                }
                hasPendingUsage() {
                    return f.pendingUsages.length > 0
                }
                get stickerFrecencyWithoutFetchingLatest() {
                    return p
                }
            }
            I.displayName = "StickersPersistedStore", I.persistKey = "StickersPersistedStoreV2";
            var A = new I(l.default, {
                STICKER_TRACK_USAGE: e => {
                    let {
                        stickerIds: t
                    } = e;
                    null == t || t.forEach(e => {
                        p.track(e), f.pendingUsages.push({
                            key: e,
                            timestamp: Date.now()
                        })
                    }), m()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: {
                            type: t
                        },
                        wasSaved: n
                    } = e;
                    if (t !== c.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
                    f.pendingUsages = []
                }
            })
        },
        843823: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var i = n("446674"),
                a = n("913144"),
                s = n("27618");
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
                u.affinityUserIds = new Set(u.userAffinities.map(e => e.user_id).filter(e => !s.default.isBlocked(e)))
            }
            class d extends i.default.PersistedStore {
                initialize(e) {
                    this.waitFor(s.default), null != e && (u.userAffinities = e.userAffinities, u.affinityUserIds = new Set(e.affinityUserIds), u.lastFetched = e.lastFetched), this.syncWith([s.default], o)
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
            var c = new d(a.default, {
                LOAD_USER_AFFINITIES_SUCCESS: function(e) {
                    var t;
                    let {
                        affinities: n
                    } = e;
                    u.userAffinities = null !== (t = n.user_affinities) && void 0 !== t ? t : [], u.lastFetched = Date.now(), o(), l = !1
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
        287850: function(e, t, n) {
            "use strict";
            let i, a, s;
            n.r(t), n.d(t, {
                default: function() {
                    return D
                }
            }), n("222007"), n("424973");
            var l, r, u = n("866227"),
                o = n.n(u),
                d = n("446674"),
                c = n("407846"),
                f = n("913144"),
                p = n("21121"),
                m = n("934306"),
                h = n("288518"),
                E = n("486503"),
                I = n("233069"),
                A = n("42203"),
                g = n("305961"),
                C = n("660478"),
                v = n("282109"),
                S = n("697218"),
                T = n("299039"),
                N = n("724210");
            (r = l || (l = {})).DEFAULT = "DEFAULT", r.FAVORITE = "FAVORITE";
            let _ = new c.default(e => {
                let {
                    isRequest: t,
                    isFavorite: n
                } = e;
                return t ? [] : [n ? "FAVORITE" : "DEFAULT"]
            }, e => {
                let {
                    lastMessageId: t
                } = e;
                return -t
            });

            function y(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
                    var t, n;
                    let i = null !== (n = null !== (t = C.default.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
                        a = e.isMessageRequestTimestamp;
                    if (null != a) {
                        let e = o(a).valueOf(),
                            t = T.default.fromTimestamp(e);
                        return T.default.compare(i, t) > 0 ? i : t
                    }
                    return i
                }(e);
                return {
                    channelId: e.id,
                    lastMessageId: t,
                    isFavorite: v.default.isMessagesFavorite(e.id) && (0, p.isInMainTabsExperiment)(),
                    isRequest: h.default.isMessageRequest(e.id) || E.default.isSpam(e.id)
                }
            }

            function R() {
                _.clear(), Object.values(A.default.getMutablePrivateChannels()).forEach(e => {
                    _.set(e.id, y(e))
                }), (0, p.isInMainTabsExperiment)() && (0, m.isSplitMessagesTab)() && v.default.getAddedToMessages().forEach(e => {
                    let t = A.default.getChannel(e);
                    null != t && (0, I.isGuildTextChannelType)(t.type) && _.set(t.id, y(t))
                })
            }

            function x() {
                let e = A.default.getMutablePrivateChannels();
                for (let t in e) _.set(t, y(e[t]))
            }
            let L = (i = [], a = [], s = [], () => {
                let e = _.values("FAVORITE"),
                    t = _.values("DEFAULT");
                return (i !== e || a !== t) && (s = [], e.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return s.push(t)
                }), i = e, t.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return s.push(t)
                }), a = t), s
            });
            class U extends d.default.Store {
                initialize() {
                    this.waitFor(A.default, g.default, S.default, h.default, v.default), this.syncWith([v.default, h.default], R)
                }
                getPrivateChannelIds() {
                    return L()
                }
                getSortedChannels() {
                    return [_.values("FAVORITE"), _.values("DEFAULT")]
                }
                serializeForOverlay() {
                    let e = {};
                    return _.values().forEach(t => {
                        let {
                            channelId: n,
                            lastMessageId: i
                        } = t;
                        e[n] = i
                    }), e
                }
            }
            U.displayName = "PrivateChannelSortStore";
            var D = new U(f.default, {
                CONNECTION_OPEN: R,
                CONNECTION_OPEN_SUPPLEMENTAL: R,
                OVERLAY_INITIALIZE: R,
                CACHE_LOADED: x,
                CACHE_LOADED_LAZY: x,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    t.forEach(e => {
                        ((0, I.isPrivate)(e.type) || _.has(e.id)) && _.set(e.id, y(e))
                    })
                },
                CHANNEL_CREATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (!(0, I.isPrivate)(t.type) || t.id === N.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
                    _.set(t.id, y(t))
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return _.delete(t.id)
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        channelId: t,
                        message: n
                    } = e;
                    if (!_.has(t)) return !1;
                    let i = A.default.getChannel(t);
                    return null != i && _.set(t, y(i, n.id))
                },
                GUILD_CREATE: function(e) {
                    let t = e.guild.id;
                    return _.delete(t)
                }
            })
        },
        646240: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("222007");
            var i = n("37983"),
                a = n("884691"),
                s = n("414456"),
                l = n.n(s),
                r = n("77078"),
                u = n("381546"),
                o = n("229915"),
                d = n("782340"),
                c = n("913893");
            class f extends a.Component {
                render() {
                    let {
                        autoFocus: e,
                        label: t,
                        placeholder: n,
                        searchTerm: a,
                        inputClassName: s,
                        className: f,
                        onChange: p,
                        onFocus: m,
                        onBlur: h,
                        onKeyPress: E,
                        autoComplete: I,
                        forwardedRef: A,
                        closeIconClassName: g,
                        searchIconClassName: C,
                        cta: v
                    } = this.props, S = null != a && a.length > 0, T = null != A ? A : this._textInputRef;
                    return (0, i.jsx)(r.FocusRing, {
                        focusTarget: T,
                        ringTarget: this._containerRef,
                        children: (0, i.jsxs)("div", {
                            className: l(c.searchBox, f),
                            ref: this._containerRef,
                            children: [(0, i.jsx)(r.TextInput, {
                                inputRef: T,
                                focusProps: {
                                    enabled: !1
                                },
                                name: "search",
                                maxLength: 100,
                                className: c.searchBoxInputWrapper,
                                inputClassName: l(c.searchBoxInput, s),
                                onChange: p,
                                onFocus: m,
                                onBlur: h,
                                onKeyPress: E,
                                value: S ? a : "",
                                placeholder: n,
                                autoFocus: e,
                                "aria-label": t,
                                autoComplete: I ? "on" : "off"
                            }), null != v ? (0, i.jsx)(r.Text, {
                                color: "text-muted",
                                variant: "text-xs/normal",
                                className: c.cta,
                                children: v
                            }) : null, S ? (0, i.jsx)(r.Clickable, {
                                onClick: this.handleClear,
                                className: c.clear,
                                "aria-label": d.default.Messages.SEARCH_CLEAR,
                                children: (0, i.jsx)(u.default, {
                                    className: l(c.clearIcon, g)
                                })
                            }) : (0, i.jsx)(o.default, {
                                className: l(c.searchIcon, C),
                                "aria-label": d.default.Messages.SEARCH
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
                s = n("505088"),
                l = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: s,
                        backgroundColor: r,
                        ...u
                    } = e;
                    return (0, i.jsxs)("svg", {
                        ...(0, l.default)(u),
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
                            className: s,
                            d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                        })]
                    })
                }, s.CircleXIcon, void 0, {
                    size: 24
                })
        },
        306160: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SUPPORTS_COPY: function() {
                    return l
                },
                copy: function() {
                    return r
                }
            }), n("70102");
            var i = n("281071"),
                a = n("773336"),
                s = n("50885");
            let l = (() => {
                if (a.isPlatformEmbedded) return null != s.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function r(e) {
                return !!l && (a.isPlatformEmbedded ? (s.default.copy(e), !0) : i.copy(e))
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
                let s = document.execCommand("copy");
                return t.removeChild(a), s
            }
            n.r(t), n.d(t, {
                copy: function() {
                    return i
                }
            }), n("70102")
        }
    }
]);