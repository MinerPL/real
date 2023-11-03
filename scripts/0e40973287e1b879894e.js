(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["72561"], {
        777273: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                fetchUserAffinities: function() {
                    return r
                }
            });
            var n = a("872717"),
                s = a("913144"),
                i = a("843823"),
                l = a("49111");

            function r() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return i.default.needsRefresh() ? (s.default.dispatch({
                    type: "LOAD_USER_AFFINITIES"
                }), n.default.get({
                    url: l.Endpoints.USER_AFFINITIES,
                    retries: e ? 3 : 0,
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: t
                    } = e;
                    s.default.dispatch({
                        type: "LOAD_USER_AFFINITIES_SUCCESS",
                        affinities: t
                    })
                }, () => {
                    s.default.dispatch({
                        type: "LOAD_USER_AFFINITIES_FAILURE"
                    })
                })) : Promise.resolve()
            }
        },
        505088: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                CircleXIcon: function() {
                    return l
                }
            });
            var n = a("37983");
            a("884691");
            var s = a("669491"),
                i = a("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: a = 24,
                    secondaryColor: l = "transparent",
                    secondaryColorClass: r = "",
                    color: u = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...d
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, i.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof l ? l : l.css,
                        className: r
                    }), (0, n.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm4.707-15.707a1 1 0 0 0-1.414 0L12 10.586 8.707 7.293a1 1 0 0 0-1.414 1.414L10.586 12l-3.293 3.293a1 1 0 1 0 1.414 1.414L12 13.414l3.293 3.293a1 1 0 0 0 1.414-1.414L13.414 12l3.293-3.293a1 1 0 0 0 0-1.414Z",
                        clipRule: "evenodd",
                        className: o
                    })]
                })
            }
        },
        159747: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return U
                }
            });
            var n = a("37983"),
                s = a("884691"),
                i = a("759843"),
                l = a("446674"),
                r = a("77078"),
                u = a("450911"),
                o = a("685073"),
                d = a("819689"),
                c = a("812204"),
                f = a("685665"),
                p = a("428958"),
                m = a("843962"),
                h = a("679653"),
                I = a("305961"),
                E = a("705955"),
                A = a("27618"),
                C = a("697218"),
                v = a("646240"),
                g = a("578706"),
                T = a("83900"),
                x = a("599110"),
                N = a("315102"),
                R = a("306160"),
                y = a("354023"),
                _ = a("159885"),
                S = a("158998"),
                L = a("969380"),
                w = a("49111"),
                j = a("91366"),
                D = a("782340"),
                F = a("764786");

            function U(e) {
                let {
                    activityItem: t,
                    analyticsLocations: a,
                    ...m
                } = e, h = (0, l.useStateFromStores)([C.default], () => C.default.getCurrentUser()), {
                    analyticsLocations: I
                } = (0, f.default)(a);
                (0, p.default)({
                    type: i.ImpressionTypes.MODAL,
                    name: i.ImpressionNames.ACTIVITY_BOOKMARK_SHARE_MODAL,
                    properties: {
                        application_id: t.application.id,
                        location_stack: I
                    }
                });
                let [A, g] = s.useState(""), [T, N] = s.useState([]), R = (0, L.default)({
                    applicationId: t.application.id,
                    size: 256
                }), _ = "".concat(window.location.origin).concat(w.Routes.ACTIVITY_DETAILS(t.application.id)), S = (0, l.useStateFromStoresArray)([E.default], () => E.default.getInviteSuggestionRows());
                s.useEffect(() => {
                    (0, o.loadInviteSuggestions)({
                        omitUserIds: new Set,
                        applicationId: t.application.id,
                        inviteTargetType: j.InviteTargetTypes.EMBEDDED_APPLICATION
                    })
                }, [t.application.id]), s.useEffect(() => (0, o.searchInviteSuggestions)(A), [A]);
                let U = s.useCallback(async () => {
                    let e = 0,
                        a = 0,
                        n = 0,
                        s = E.default.getInviteSuggestionRows().filter(e => T.includes(e.item.id)).map(t => (function(t, s) {
                            switch (t.type) {
                                case y.RowTypes.DM:
                                case y.RowTypes.FRIEND:
                                    e++;
                                    break;
                                case y.RowTypes.GROUP_DM:
                                    a++;
                                    break;
                                case y.RowTypes.CHANNEL:
                                    n++
                            }
                            return t.type === y.RowTypes.GROUP_DM || t.type === y.RowTypes.CHANNEL ? d.default.sendActivityBookmark(t.item.id, s, c.default.ACTIVITY_DETAIL_PAGE, null) : t.type === y.RowTypes.DM || t.type === y.RowTypes.FRIEND ? u.default.ensurePrivateChannel(t.item.id).then(e => d.default.sendActivityBookmark(e, _, c.default.ACTIVITY_DETAIL_PAGE, null)) : Promise.resolve()
                        })(t, _));
                    await s, x.default.track(w.AnalyticEvents.ACTIVITY_BOOKMARK_SHARED, {
                        user_id: null == h ? void 0 : h.id,
                        application_id: t.application.id,
                        n_users: e,
                        n_gdms: a,
                        n_channels: n
                    }), m.onClose()
                }, [t, T, m, _, h]);
                return (0, n.jsxs)(r.ModalRoot, {
                    ...m,
                    className: F.modalRoot,
                    children: [(0, n.jsxs)(r.ModalHeader, {
                        className: F.header,
                        children: [(0, n.jsx)(r.Heading, {
                            variant: "heading-md/semibold",
                            children: D.default.Messages.EMBEDDED_ACTIVITIES_SHARE_ACTIVITY_WITH.format({
                                activityName: t.application.name
                            })
                        }), (0, n.jsx)(r.ModalCloseButton, {
                            onClick: m.onClose
                        })]
                    }), (0, n.jsxs)(r.ModalContent, {
                        className: F.modalContent,
                        children: [(0, n.jsx)(v.default, {
                            className: F.searchBar,
                            placeholder: D.default.Messages.SEARCH,
                            label: D.default.Messages.SEARCH,
                            searchTerm: A,
                            onChange: e => g(e),
                            onClear: () => g("")
                        }), S.map((e, t) => (0, n.jsxs)(s.Fragment, {
                            children: [0 === t ? null : (0, n.jsx)("div", {
                                className: F.rowDivider
                            }), (0, n.jsx)(O, {
                                row: e,
                                onClick: () => {
                                    let t = [...T];
                                    t.includes(e.item.id) ? t = t.filter(t => t !== e.item.id) : t.push(e.item.id), N(t)
                                },
                                checked: T.includes(e.item.id)
                            })]
                        }, e.item.id))]
                    }), (0, n.jsxs)(r.ModalFooter, {
                        className: F.footer,
                        children: [(0, n.jsx)("div", {
                            className: F.activityInfoOuterContainer,
                            children: (0, n.jsxs)("div", {
                                className: F.activityInfoInnerContainer,
                                children: [(0, n.jsx)("img", {
                                    src: R.url,
                                    className: F.activityInfoImage,
                                    alt: t.application.name
                                }), (0, n.jsxs)("div", {
                                    className: F.activityInfoText,
                                    children: [(0, n.jsx)(r.Text, {
                                        variant: "text-md/semibold",
                                        className: F.ellipsis,
                                        children: t.application.name
                                    }), (0, n.jsx)(r.Text, {
                                        variant: "text-sm/medium",
                                        className: F.ellipsis,
                                        children: t.application.description
                                    }), (0, n.jsx)(r.Text, {
                                        variant: "text-xs/medium",
                                        className: F.ellipsis,
                                        children: (0, n.jsx)(r.Anchor, {
                                            href: _,
                                            children: _
                                        })
                                    })]
                                })]
                            })
                        }), (0, n.jsx)("div", {
                            className: F.footerDivider
                        }), (0, n.jsxs)("div", {
                            className: F.copySendBar,
                            children: [(0, n.jsx)(M, {
                                link: _,
                                applicationId: t.application.id
                            }), (0, n.jsx)(r.Button, {
                                onClick: U,
                                disabled: T.length <= 0,
                                children: D.default.Messages.SEND
                            })]
                        })]
                    })]
                })
            }

            function O(e) {
                let {
                    row: t,
                    onClick: a,
                    checked: s
                } = e, i = null, l = null, u = null;
                switch (t.type) {
                    case y.RowTypes.DM:
                    case y.RowTypes.FRIEND:
                        i = (0, n.jsx)(r.Avatar, {
                            size: r.AvatarSizes.SIZE_40,
                            src: t.item.getAvatarURL(null, 128, !1),
                            "aria-label": t.item.username
                        }), l = S.default.getName(t.item), u = S.default.getUserTag(t.item);
                        break;
                    case y.RowTypes.GROUP_DM: {
                        let e = (0, m.getChannelIconURL)(t.item),
                            a = (0, h.computeChannelName)(t.item, C.default, A.default);
                        i = (0, n.jsx)(r.Avatar, {
                            src: e,
                            "aria-label": a,
                            size: r.AvatarSizes.SIZE_40
                        }), l = (0, h.computeChannelName)(t.item, C.default, A.default);
                        break
                    }
                    case y.RowTypes.CHANNEL: {
                        let e = t.item,
                            a = I.default.getGuild(e.guild_id);
                        if (null == a) return null;
                        if (l = "#".concat((0, h.computeChannelName)(e, C.default, A.default)), u = a.name, null != a.icon) {
                            let t = N.default.getGuildIconURL({
                                id: e.guild_id,
                                icon: a.icon,
                                size: 40
                            });
                            i = (0, n.jsx)(r.Avatar, {
                                src: t,
                                "aria-label": l,
                                size: r.AvatarSizes.SIZE_40
                            })
                        } else {
                            let e = (0, _.getAcronym)(a.name);
                            i = (0, n.jsx)("div", {
                                className: F.acronym,
                                "aria-hidden": !0,
                                children: e
                            })
                        }
                    }
                }
                return (0, n.jsxs)(r.Clickable, {
                    onClick: a,
                    className: F.rowContainer,
                    children: [(0, n.jsxs)("div", {
                        className: F.rowLeft,
                        children: [(0, n.jsx)("div", {
                            className: F.rowAvatar,
                            children: i
                        }), (0, n.jsxs)("div", {
                            className: F.rowNameContainer,
                            children: [(0, n.jsx)(r.Text, {
                                variant: "text-md/semibold",
                                className: F.rowName,
                                children: l
                            }), (0, n.jsx)(r.Text, {
                                variant: "text-xs/medium",
                                className: F.rowSubName,
                                children: u
                            })]
                        })]
                    }), (0, n.jsx)(r.Checkbox, {
                        value: s,
                        type: r.Checkbox.Types.INVERTED,
                        displayOnly: !0,
                        className: F.rowRight
                    })]
                })
            }

            function M(e) {
                let {
                    applicationId: t,
                    link: a
                } = e, i = (0, l.useStateFromStores)([C.default], () => C.default.getCurrentUser()), [u, o] = s.useState(!1);
                return s.useEffect(() => {
                    let e;
                    return u && (e = setTimeout(() => {
                        o(!1)
                    }, 1e3)), () => {
                        null != e && clearTimeout(e)
                    }
                }, [u]), (0, n.jsxs)(r.Button, {
                    look: r.Button.Looks.LINK,
                    color: r.Button.Colors.LINK,
                    onClick: function() {
                        x.default.track(w.AnalyticEvents.ACTIVITY_BOOKMARK_COPY_URL, {
                            user_id: null == i ? void 0 : i.id,
                            application_id: t
                        }), (0, R.copy)(a), o(!0)
                    },
                    innerClassName: F.copyButton,
                    children: [u ? (0, n.jsx)(g.default, {}) : (0, n.jsx)(T.default, {}), u ? D.default.Messages.COPIED : D.default.Messages.COPY_LINK]
                })
            }
        },
        843962: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                getChannelIconURL: function() {
                    return r
                }
            });
            var n = a("697218"),
                s = a("315102"),
                i = a("449008"),
                l = a("49111");

            function r(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
                    a = arguments.length > 2 ? arguments[2] : void 0;
                switch (e.type) {
                    case l.ChannelTypes.DM:
                        let [r] = e.recipients.map(n.default.getUser).filter(i.isNotNullish);
                        if (null == r) return null;
                        return r.getAvatarURL(void 0, t, a);
                    case l.ChannelTypes.GROUP_DM:
                        return s.default.getChannelIconURL({
                            id: e.id,
                            icon: e.icon,
                            applicationId: e.getApplicationId(),
                            size: t
                        })
                }
            }
        },
        843823: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return c
                }
            });
            var n = a("446674"),
                s = a("913144"),
                i = a("27618");
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
                u.affinityUserIds = new Set(u.userAffinities.map(e => e.user_id).filter(e => !i.default.isBlocked(e)))
            }
            class d extends n.default.PersistedStore {
                initialize(e) {
                    this.waitFor(i.default), null != e && (u.userAffinities = e.userAffinities, u.affinityUserIds = new Set(e.affinityUserIds), u.lastFetched = e.lastFetched), this.syncWith([i.default], o)
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
            var c = new d(s.default, {
                LOAD_USER_AFFINITIES_SUCCESS: function(e) {
                    var t;
                    let {
                        affinities: a
                    } = e;
                    u.userAffinities = null !== (t = a.user_affinities) && void 0 !== t ? t : [], u.lastFetched = Date.now(), o(), l = !1
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
        287850: function(e, t, a) {
            "use strict";
            let n, s, i;
            a.r(t), a.d(t, {
                default: function() {
                    return j
                }
            });
            var l, r, u = a("866227"),
                o = a.n(u),
                d = a("446674"),
                c = a("407846"),
                f = a("913144"),
                p = a("21121"),
                m = a("934306"),
                h = a("288518"),
                I = a("486503"),
                E = a("233069"),
                A = a("42203"),
                C = a("305961"),
                v = a("660478"),
                g = a("282109"),
                T = a("697218"),
                x = a("299039"),
                N = a("724210");
            (l = r || (r = {})).DEFAULT = "DEFAULT", l.FAVORITE = "FAVORITE";
            let R = new c.default(e => {
                let {
                    isRequest: t,
                    isFavorite: a
                } = e;
                return t ? [] : [a ? r.FAVORITE : r.DEFAULT]
            }, e => {
                let {
                    lastMessageId: t
                } = e;
                return -t
            });

            function y(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
                    var t, a;
                    let n = null !== (a = null !== (t = v.default.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== a ? a : e.id,
                        s = e.isMessageRequestTimestamp;
                    if (null != s) {
                        let e = o(s).valueOf(),
                            t = x.default.fromTimestamp(e);
                        return x.default.compare(n, t) > 0 ? n : t
                    }
                    return n
                }(e);
                return {
                    channelId: e.id,
                    lastMessageId: t,
                    isFavorite: g.default.isMessagesFavorite(e.id) && (0, p.isInMainTabsExperiment)(),
                    isRequest: h.default.isMessageRequest(e.id) || I.default.isSpam(e.id)
                }
            }

            function _() {
                R.clear(), Object.values(A.default.getMutablePrivateChannels()).forEach(e => {
                    R.set(e.id, y(e))
                }), (0, p.isInMainTabsExperiment)() && (0, m.isSplitMessagesTab)() && g.default.getAddedToMessages().forEach(e => {
                    let t = A.default.getChannel(e);
                    null != t && (0, E.isGuildTextChannelType)(t.type) && R.set(t.id, y(t))
                })
            }

            function S() {
                let e = A.default.getMutablePrivateChannels();
                for (let t in e) R.set(t, y(e[t]))
            }
            let L = (n = [], s = [], i = [], () => {
                let e = R.values(r.FAVORITE),
                    t = R.values(r.DEFAULT);
                return (n !== e || s !== t) && (i = [], e.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return i.push(t)
                }), n = e, t.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return i.push(t)
                }), s = t), i
            });
            class w extends d.default.Store {
                initialize() {
                    this.waitFor(A.default, C.default, T.default, h.default, g.default), this.syncWith([g.default, h.default], _)
                }
                getPrivateChannelIds() {
                    return L()
                }
                getSortedChannels() {
                    return [R.values(r.FAVORITE), R.values(r.DEFAULT)]
                }
                serializeForOverlay() {
                    let e = {};
                    return R.values().forEach(t => {
                        let {
                            channelId: a,
                            lastMessageId: n
                        } = t;
                        e[a] = n
                    }), e
                }
            }
            w.displayName = "PrivateChannelSortStore";
            var j = new w(f.default, {
                CONNECTION_OPEN: _,
                CONNECTION_OPEN_SUPPLEMENTAL: _,
                OVERLAY_INITIALIZE: _,
                CACHE_LOADED: S,
                CACHE_LOADED_LAZY: S,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    t.forEach(e => {
                        ((0, E.isPrivate)(e.type) || R.has(e.id)) && R.set(e.id, y(e))
                    })
                },
                CHANNEL_CREATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (!(0, E.isPrivate)(t.type) || t.id === N.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
                    R.set(t.id, y(t))
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return R.delete(t.id)
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        channelId: t,
                        message: a
                    } = e;
                    if (!R.has(t)) return !1;
                    let n = A.default.getChannel(t);
                    return null != n && R.set(t, y(n, a.id))
                },
                GUILD_CREATE: function(e) {
                    let t = e.guild.id;
                    return R.delete(t)
                }
            })
        },
        646240: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return p
                }
            });
            var n = a("37983"),
                s = a("884691"),
                i = a("414456"),
                l = a.n(i),
                r = a("77078"),
                u = a("381546"),
                o = a("229915"),
                d = a("782340"),
                c = a("913893");
            class f extends s.Component {
                render() {
                    let {
                        autoFocus: e,
                        label: t,
                        placeholder: a,
                        searchTerm: s,
                        inputClassName: i,
                        className: f,
                        onChange: p,
                        onFocus: m,
                        onBlur: h,
                        onKeyPress: I,
                        autoComplete: E,
                        forwardedRef: A,
                        closeIconClassName: C,
                        searchIconClassName: v,
                        cta: g
                    } = this.props, T = null != s && s.length > 0, x = null != A ? A : this._textInputRef;
                    return (0, n.jsx)(r.FocusRing, {
                        focusTarget: x,
                        ringTarget: this._containerRef,
                        children: (0, n.jsxs)("div", {
                            className: l(c.searchBox, f),
                            ref: this._containerRef,
                            children: [(0, n.jsx)(r.TextInput, {
                                inputRef: x,
                                focusProps: {
                                    enabled: !1
                                },
                                name: "search",
                                maxLength: 100,
                                className: c.searchBoxInputWrapper,
                                inputClassName: l(c.searchBoxInput, i),
                                onChange: p,
                                onFocus: m,
                                onBlur: h,
                                onKeyPress: I,
                                value: T ? s : "",
                                placeholder: a,
                                autoFocus: e,
                                "aria-label": t,
                                autoComplete: E ? "on" : "off"
                            }), null != g ? (0, n.jsx)(r.Text, {
                                color: "text-muted",
                                variant: "text-xs/normal",
                                className: c.cta,
                                children: g
                            }) : null, T ? (0, n.jsx)(r.Clickable, {
                                onClick: this.handleClear,
                                className: c.clear,
                                "aria-label": d.default.Messages.SEARCH_CLEAR,
                                children: (0, n.jsx)(u.default, {
                                    className: l(c.clearIcon, C)
                                })
                            }) : (0, n.jsx)(o.default, {
                                className: l(c.searchIcon, v),
                                "aria-label": d.default.Messages.SEARCH
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._textInputRef = s.createRef(), this._containerRef = s.createRef(), this.handleClear = () => {
                        let {
                            onClear: e,
                            forwardedRef: t
                        } = this.props, {
                            current: a
                        } = null != t ? t : this._textInputRef;
                        null != a && a.focus(), null != e && e()
                    }
                }
            }
            f.defaultProps = {
                autoComplete: !1
            };
            var p = s.forwardRef((e, t) => (0, n.jsx)(f, {
                forwardedRef: t,
                ...e
            }))
        },
        381546: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var n = a("37983");
            a("884691");
            var s = a("469563"),
                i = a("505088"),
                l = a("75196"),
                r = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: a = 24,
                        color: s = "currentColor",
                        foreground: i,
                        backgroundColor: r,
                        ...u
                    } = e;
                    return (0, n.jsxs)("svg", {
                        ...(0, l.default)(u),
                        width: t,
                        height: a,
                        viewBox: "0 0 14 14",
                        children: [null != r ? (0, n.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: r
                        }) : null, (0, n.jsx)("path", {
                            fill: s,
                            className: i,
                            d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                        })]
                    })
                }, i.CircleXIcon)
        },
        306160: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                SUPPORTS_COPY: function() {
                    return l
                },
                copy: function() {
                    return r
                }
            });
            var n = a("281071"),
                s = a("773336"),
                i = a("50885");
            let l = (() => {
                if (s.isPlatformEmbedded) return null != i.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function r(e) {
                return !!l && (s.isPlatformEmbedded ? (i.default.copy(e), !0) : n.copy(e))
            }
        },
        281071: function(e, t, a) {
            "use strict";

            function n(e) {
                let t = document.body;
                if (null == t) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                let a = document.createRange(),
                    n = window.getSelection(),
                    s = document.createElement("textarea");
                s.value = e, s.contentEditable = "true", s.style.visibility = "none", t.appendChild(s), a.selectNodeContents(s), null == n || n.removeAllRanges(), null == n || n.addRange(a), s.focus(), s.setSelectionRange(0, e.length);
                let i = document.execCommand("copy");
                return t.removeChild(s), i
            }
            a.r(t), a.d(t, {
                copy: function() {
                    return n
                }
            })
        }
    }
]);