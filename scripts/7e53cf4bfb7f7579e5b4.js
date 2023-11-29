(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["20092"], {
        777273: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                fetchUserAffinities: function() {
                    return r
                }
            });
            var a = s("872717"),
                l = s("913144"),
                n = s("843823"),
                i = s("49111");

            function r() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return n.default.needsRefresh() ? (l.default.dispatch({
                    type: "LOAD_USER_AFFINITIES"
                }), a.default.get({
                    url: i.Endpoints.USER_AFFINITIES,
                    retries: e ? 3 : 0,
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: t
                    } = e;
                    l.default.dispatch({
                        type: "LOAD_USER_AFFINITIES_SUCCESS",
                        affinities: t
                    })
                }, () => {
                    l.default.dispatch({
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
            }), s("222007");
            var a = s("697218"),
                l = s("315102"),
                n = s("449008"),
                i = s("49111");

            function r(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
                    s = arguments.length > 2 ? arguments[2] : void 0;
                switch (e.type) {
                    case i.ChannelTypes.DM:
                        let [r] = e.recipients.map(a.default.getUser).filter(n.isNotNullish);
                        if (null == r) return null;
                        return r.getAvatarURL(void 0, t, s);
                    case i.ChannelTypes.GROUP_DM:
                        return l.default.getChannelIconURL({
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
                    return F
                }
            }), s("222007"), s("424973");
            var a = s("37983"),
                l = s("884691"),
                n = s("446674"),
                i = s("77078"),
                r = s("450911"),
                u = s("685073"),
                d = s("819689"),
                o = s("812204"),
                c = s("843962"),
                f = s("679653"),
                E = s("305961"),
                h = s("705955"),
                m = s("27618"),
                p = s("697218"),
                I = s("646240"),
                A = s("578706"),
                C = s("83900"),
                R = s("599110"),
                _ = s("315102"),
                g = s("306160"),
                N = s("354023"),
                v = s("159885"),
                S = s("158998"),
                T = s("335189"),
                y = s("49111"),
                L = s("782340"),
                x = s("627269");

            function F(e) {
                let {
                    guildId: t,
                    ...s
                } = e, [c, f] = l.useState(""), [E, m] = l.useState([]), [p, A] = l.useState(""), {
                    onClose: C
                } = s, _ = "".concat(window.location.origin).concat(y.Endpoints.CLYDE_PROFILES(p)), g = (0, n.useStateFromStoresArray)([h.default], () => h.default.getInviteSuggestionRows());
                l.useEffect(() => {
                    (0, u.loadInviteSuggestions)({
                        omitUserIds: new Set
                    })
                }, []), l.useEffect(() => {
                    (0, T.createClydeProfile)(t).then(e => {
                        null != e ? A(null == e ? void 0 : e.clyde_profile_id) : ((0, i.showToast)((0, i.createToast)(L.default.Messages.CLYDE_PROFILE_ERROR_MESSAGE_GENERIC, i.ToastType.FAILURE)), C())
                    })
                }, [t, C]), l.useEffect(() => (0, u.searchInviteSuggestions)(c), [c]);
                let v = l.useCallback(async () => {
                    let e = 0,
                        a = 0,
                        l = 0,
                        n = h.default.getInviteSuggestionRows().filter(e => E.includes(e.item.id)).map(t => (function(t, s) {
                            switch (t.type) {
                                case N.RowTypes.DM:
                                case N.RowTypes.FRIEND:
                                    e++;
                                    break;
                                case N.RowTypes.GROUP_DM:
                                    a++;
                                    break;
                                case N.RowTypes.CHANNEL:
                                    l++
                            }
                            return t.type === N.RowTypes.GROUP_DM || t.type === N.RowTypes.CHANNEL ? d.default.sendClydeProfileOverride(t.item.id, s, o.default.CLYDE_PROFILE_SHARE_MODAL, null) : t.type === N.RowTypes.DM || t.type === N.RowTypes.FRIEND ? r.default.ensurePrivateChannel(t.item.id).then(e => d.default.sendClydeProfileOverride(e, _, o.default.CLYDE_PROFILE_SHARE_MODAL, null)) : Promise.resolve()
                        })(t, _));
                    await n, R.default.track(y.AnalyticEvents.CLYDE_AI_SHARE_LINK_SENT, {
                        guild_id: t,
                        clyde_profile_id: p,
                        num_users: e,
                        num_gdms: a,
                        num_channels: l
                    }), s.onClose()
                }, [E, s, _, t, p]);
                return (0, a.jsxs)(i.ModalRoot, {
                    ...s,
                    className: x.modalRoot,
                    children: [(0, a.jsxs)(i.ModalHeader, {
                        className: x.header,
                        children: [(0, a.jsx)(i.Heading, {
                            variant: "heading-md/semibold",
                            children: L.default.Messages.CLYDE_PROFILE_SHARE_HEADER
                        }), (0, a.jsx)(i.ModalCloseButton, {
                            onClick: s.onClose
                        })]
                    }), (0, a.jsxs)(i.ModalContent, {
                        className: x.modalContent,
                        children: [(0, a.jsx)(I.default, {
                            className: x.searchBar,
                            placeholder: L.default.Messages.SEARCH,
                            label: L.default.Messages.SEARCH,
                            searchTerm: c,
                            onChange: e => f(e),
                            onClear: () => f("")
                        }), g.map((e, t) => (0, a.jsxs)(l.Fragment, {
                            children: [0 === t ? null : (0, a.jsx)("div", {
                                className: x.rowDivider
                            }), (0, a.jsx)(D, {
                                row: e,
                                onClick: () => {
                                    let t = [...E];
                                    t.includes(e.item.id) ? t = t.filter(t => t !== e.item.id) : t.push(e.item.id), m(t)
                                },
                                checked: E.includes(e.item.id)
                            })]
                        }, e.item.id))]
                    }), (0, a.jsxs)(i.ModalFooter, {
                        className: x.footer,
                        children: [(0, a.jsx)("div", {
                            className: x.footerDivider
                        }), (0, a.jsxs)("div", {
                            className: x.copySendBar,
                            children: [(0, a.jsx)(w, {
                                link: _,
                                clydeProfileId: p,
                                guildId: t
                            }), (0, a.jsx)(i.Button, {
                                onClick: v,
                                disabled: E.length <= 0 || "" === p,
                                children: L.default.Messages.SEND
                            })]
                        })]
                    })]
                })
            }

            function D(e) {
                let {
                    row: t,
                    onClick: s,
                    checked: l
                } = e, n = null, r = null, u = null;
                switch (t.type) {
                    case N.RowTypes.DM:
                    case N.RowTypes.FRIEND:
                        n = (0, a.jsx)(i.Avatar, {
                            size: i.AvatarSizes.SIZE_40,
                            src: t.item.getAvatarURL(null, 128, !1),
                            "aria-label": t.item.username
                        }), r = S.default.getName(t.item), u = S.default.getUserTag(t.item);
                        break;
                    case N.RowTypes.GROUP_DM: {
                        let e = (0, c.getChannelIconURL)(t.item),
                            s = (0, f.computeChannelName)(t.item, p.default, m.default);
                        n = (0, a.jsx)(i.Avatar, {
                            src: e,
                            "aria-label": s,
                            size: i.AvatarSizes.SIZE_40
                        }), r = (0, f.computeChannelName)(t.item, p.default, m.default);
                        break
                    }
                    case N.RowTypes.CHANNEL: {
                        let e = t.item,
                            s = E.default.getGuild(e.guild_id);
                        if (null == s) return null;
                        if (r = "#".concat((0, f.computeChannelName)(e, p.default, m.default)), u = s.name, null != s.icon) {
                            let t = _.default.getGuildIconURL({
                                id: e.guild_id,
                                icon: s.icon,
                                size: 40
                            });
                            n = (0, a.jsx)(i.Avatar, {
                                src: t,
                                "aria-label": r,
                                size: i.AvatarSizes.SIZE_40
                            })
                        } else {
                            let e = (0, v.getAcronym)(s.name);
                            n = (0, a.jsx)("div", {
                                className: x.acronym,
                                "aria-hidden": !0,
                                children: e
                            })
                        }
                    }
                }
                return (0, a.jsxs)(i.Clickable, {
                    onClick: s,
                    className: x.rowContainer,
                    children: [(0, a.jsxs)("div", {
                        className: x.rowLeft,
                        children: [(0, a.jsx)("div", {
                            className: x.rowAvatar,
                            children: n
                        }), (0, a.jsxs)("div", {
                            className: x.rowNameContainer,
                            children: [(0, a.jsx)(i.Text, {
                                variant: "text-md/semibold",
                                className: x.rowName,
                                children: r
                            }), (0, a.jsx)(i.Text, {
                                variant: "text-xs/medium",
                                className: x.rowSubName,
                                children: u
                            })]
                        })]
                    }), (0, a.jsx)(i.Checkbox, {
                        value: l,
                        type: i.Checkbox.Types.INVERTED,
                        displayOnly: !0,
                        className: x.rowRight
                    })]
                })
            }

            function w(e) {
                let {
                    link: t,
                    guildId: s,
                    clydeProfileId: n
                } = e, [r, u] = l.useState(!1);
                return l.useEffect(() => {
                    let e;
                    return r && (e = setTimeout(() => {
                        u(!1)
                    }, 1e3)), () => {
                        null != e && clearTimeout(e)
                    }
                }, [r]), (0, a.jsxs)(i.Button, {
                    look: i.Button.Looks.LINK,
                    color: i.Button.Colors.LINK,
                    onClick: function() {
                        (0, g.copy)(t), u(!0), R.default.track(y.AnalyticEvents.CLYDE_AI_SHARE_LINK_COPIED, {
                            guild_id: s,
                            clyde_profile_id: n
                        })
                    },
                    innerClassName: x.copyButton,
                    children: [r ? (0, a.jsx)(A.default, {}) : (0, a.jsx)(C.default, {}), r ? L.default.Messages.COPIED : L.default.Messages.COPY_LINK]
                })
            }
        },
        843823: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return c
                }
            }), s("222007");
            var a = s("446674"),
                l = s("913144"),
                n = s("27618");
            let i = !1,
                r = Object.freeze({
                    userAffinities: [],
                    affinityUserIds: new Set,
                    lastFetched: 0
                }),
                u = {
                    ...r
                };

            function d() {
                u.affinityUserIds = new Set(u.userAffinities.map(e => e.user_id).filter(e => !n.default.isBlocked(e)))
            }
            class o extends a.default.PersistedStore {
                initialize(e) {
                    this.waitFor(n.default), null != e && (u.userAffinities = e.userAffinities, u.affinityUserIds = new Set(e.affinityUserIds), u.lastFetched = e.lastFetched), this.syncWith([n.default], d)
                }
                needsRefresh() {
                    return Date.now() - u.lastFetched > 864e5
                }
                getFetching() {
                    return i
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
            o.displayName = "UserAffinitiesStore", o.persistKey = "UserAffinitiesStore", o.migrations = [e => null];
            var c = new o(l.default, {
                LOAD_USER_AFFINITIES_SUCCESS: function(e) {
                    var t;
                    let {
                        affinities: s
                    } = e;
                    u.userAffinities = null !== (t = s.user_affinities) && void 0 !== t ? t : [], u.lastFetched = Date.now(), d(), i = !1
                },
                LOAD_USER_AFFINITIES: function() {
                    i = !0
                },
                LOAD_USER_AFFINITIES_FAILURE: function() {
                    i = !1
                },
                LOGOUT: function() {
                    u = {
                        ...r
                    }
                }
            })
        },
        287850: function(e, t, s) {
            "use strict";
            let a, l, n;
            s.r(t), s.d(t, {
                default: function() {
                    return D
                }
            }), s("222007"), s("424973");
            var i, r, u = s("866227"),
                d = s.n(u),
                o = s("446674"),
                c = s("407846"),
                f = s("913144"),
                E = s("21121"),
                h = s("934306"),
                m = s("288518"),
                p = s("486503"),
                I = s("233069"),
                A = s("42203"),
                C = s("305961"),
                R = s("660478"),
                _ = s("282109"),
                g = s("697218"),
                N = s("299039"),
                v = s("724210");
            (r = i || (i = {})).DEFAULT = "DEFAULT", r.FAVORITE = "FAVORITE";
            let S = new c.default(e => {
                let {
                    isRequest: t,
                    isFavorite: s
                } = e;
                return t ? [] : [s ? "FAVORITE" : "DEFAULT"]
            }, e => {
                let {
                    lastMessageId: t
                } = e;
                return -t
            });

            function T(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
                    var t, s;
                    let a = null !== (s = null !== (t = R.default.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== s ? s : e.id,
                        l = e.isMessageRequestTimestamp;
                    if (null != l) {
                        let e = d(l).valueOf(),
                            t = N.default.fromTimestamp(e);
                        return N.default.compare(a, t) > 0 ? a : t
                    }
                    return a
                }(e);
                return {
                    channelId: e.id,
                    lastMessageId: t,
                    isFavorite: _.default.isMessagesFavorite(e.id) && (0, E.isInMainTabsExperiment)(),
                    isRequest: m.default.isMessageRequest(e.id) || p.default.isSpam(e.id)
                }
            }

            function y() {
                S.clear(), Object.values(A.default.getMutablePrivateChannels()).forEach(e => {
                    S.set(e.id, T(e))
                }), (0, E.isInMainTabsExperiment)() && (0, h.isSplitMessagesTab)() && _.default.getAddedToMessages().forEach(e => {
                    let t = A.default.getChannel(e);
                    null != t && (0, I.isGuildTextChannelType)(t.type) && S.set(t.id, T(t))
                })
            }

            function L() {
                let e = A.default.getMutablePrivateChannels();
                for (let t in e) S.set(t, T(e[t]))
            }
            let x = (a = [], l = [], n = [], () => {
                let e = S.values("FAVORITE"),
                    t = S.values("DEFAULT");
                return (a !== e || l !== t) && (n = [], e.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return n.push(t)
                }), a = e, t.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return n.push(t)
                }), l = t), n
            });
            class F extends o.default.Store {
                initialize() {
                    this.waitFor(A.default, C.default, g.default, m.default, _.default), this.syncWith([_.default, m.default], y)
                }
                getPrivateChannelIds() {
                    return x()
                }
                getSortedChannels() {
                    return [S.values("FAVORITE"), S.values("DEFAULT")]
                }
                serializeForOverlay() {
                    let e = {};
                    return S.values().forEach(t => {
                        let {
                            channelId: s,
                            lastMessageId: a
                        } = t;
                        e[s] = a
                    }), e
                }
            }
            F.displayName = "PrivateChannelSortStore";
            var D = new F(f.default, {
                CONNECTION_OPEN: y,
                CONNECTION_OPEN_SUPPLEMENTAL: y,
                OVERLAY_INITIALIZE: y,
                CACHE_LOADED: L,
                CACHE_LOADED_LAZY: L,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    t.forEach(e => {
                        ((0, I.isPrivate)(e.type) || S.has(e.id)) && S.set(e.id, T(e))
                    })
                },
                CHANNEL_CREATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (!(0, I.isPrivate)(t.type) || t.id === v.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
                    S.set(t.id, T(t))
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return S.delete(t.id)
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        channelId: t,
                        message: s
                    } = e;
                    if (!S.has(t)) return !1;
                    let a = A.default.getChannel(t);
                    return null != a && S.set(t, T(a, s.id))
                },
                GUILD_CREATE: function(e) {
                    let t = e.guild.id;
                    return S.delete(t)
                }
            })
        },
        646240: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return E
                }
            }), s("222007");
            var a = s("37983"),
                l = s("884691"),
                n = s("414456"),
                i = s.n(n),
                r = s("77078"),
                u = s("381546"),
                d = s("229915"),
                o = s("782340"),
                c = s("913893");
            class f extends l.Component {
                render() {
                    let {
                        autoFocus: e,
                        label: t,
                        placeholder: s,
                        searchTerm: l,
                        inputClassName: n,
                        className: f,
                        onChange: E,
                        onFocus: h,
                        onBlur: m,
                        onKeyPress: p,
                        autoComplete: I,
                        forwardedRef: A,
                        closeIconClassName: C,
                        searchIconClassName: R,
                        cta: _
                    } = this.props, g = null != l && l.length > 0, N = null != A ? A : this._textInputRef;
                    return (0, a.jsx)(r.FocusRing, {
                        focusTarget: N,
                        ringTarget: this._containerRef,
                        children: (0, a.jsxs)("div", {
                            className: i(c.searchBox, f),
                            ref: this._containerRef,
                            children: [(0, a.jsx)(r.TextInput, {
                                inputRef: N,
                                focusProps: {
                                    enabled: !1
                                },
                                name: "search",
                                maxLength: 100,
                                className: c.searchBoxInputWrapper,
                                inputClassName: i(c.searchBoxInput, n),
                                onChange: E,
                                onFocus: h,
                                onBlur: m,
                                onKeyPress: p,
                                value: g ? l : "",
                                placeholder: s,
                                autoFocus: e,
                                "aria-label": t,
                                autoComplete: I ? "on" : "off"
                            }), null != _ ? (0, a.jsx)(r.Text, {
                                color: "text-muted",
                                variant: "text-xs/normal",
                                className: c.cta,
                                children: _
                            }) : null, g ? (0, a.jsx)(r.Clickable, {
                                onClick: this.handleClear,
                                className: c.clear,
                                "aria-label": o.default.Messages.SEARCH_CLEAR,
                                children: (0, a.jsx)(u.default, {
                                    className: i(c.clearIcon, C)
                                })
                            }) : (0, a.jsx)(d.default, {
                                className: i(c.searchIcon, R),
                                "aria-label": o.default.Messages.SEARCH
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._textInputRef = l.createRef(), this._containerRef = l.createRef(), this.handleClear = () => {
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
            var E = l.forwardRef((e, t) => (0, a.jsx)(f, {
                forwardedRef: t,
                ...e
            }))
        }
    }
]);