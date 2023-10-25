(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["55884"], {
        855143: function(e, t, n) {
            "use strict";
            e.exports = n.p + "01864c39871ce619d855.svg"
        },
        934516: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a72746e7108167af95c8.svg"
        },
        267363: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ack: function() {
                    return c
                },
                ackChannel: function() {
                    return E
                },
                bulkAck: function() {
                    return f
                },
                localAck: function() {
                    return C
                },
                enableAutomaticAck: function() {
                    return _
                },
                disableAutomaticAck: function() {
                    return h
                },
                ackGuildFeature: function() {
                    return A
                },
                ackUserFeature: function() {
                    return T
                }
            });
            var l = n("500947"),
                i = n("913144"),
                a = n("401690"),
                r = n("233069"),
                u = n("42203"),
                o = n("245997"),
                d = n("697218"),
                s = n("49111");

            function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    l = arguments.length > 3 ? arguments[3] : void 0,
                    a = arguments.length > 4 ? arguments[4] : void 0;
                i.default.dispatch({
                    type: "CHANNEL_ACK",
                    channelId: e,
                    messageId: l,
                    immediate: t,
                    force: n,
                    context: s.CURRENT_APP_CONTEXT,
                    location: a
                })
            }

            function E(e) {
                e.isCategory() ? ! function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        l = u.default.getChannel(e);
                    if (null == l || null == l.guild_id) return;
                    let i = o.default.getCategories(l.guild_id);
                    if (null == i[e]) return;
                    let d = i[e].filter(e => {
                            let {
                                channel: t
                            } = e;
                            return (0, r.isGuildReadableType)(t.type)
                        }).map(e => {
                            let {
                                channel: t
                            } = e;
                            return t.id
                        }),
                        s = [...d];
                    for (let e of (d.forEach(e => {
                            let t = a.default.getActiveJoinedThreadsForParent(l.guild_id, e);
                            for (let e in t) s.push(e)
                        }), s)) c(e, t, n)
                }(e.id, !0, !0) : e.isForumLikeChannel() ? c(e.id, !0, !0, l.default.fromTimestamp(Date.now())) : c(e.id, !0, !0)
            }

            function f(e) {
                i.default.dispatch({
                    type: "BULK_ACK",
                    channels: e,
                    context: s.CURRENT_APP_CONTEXT
                })
            }

            function C(e) {
                i.default.dispatch({
                    type: "CHANNEL_LOCAL_ACK",
                    channelId: e
                })
            }

            function _(e, t) {
                i.default.dispatch({
                    type: "ENABLE_AUTOMATIC_ACK",
                    channelId: e,
                    windowId: t
                })
            }

            function h(e, t) {
                i.default.dispatch({
                    type: "DISABLE_AUTOMATIC_ACK",
                    channelId: e,
                    windowId: t
                })
            }

            function A(e, t, n) {
                i.default.dispatch({
                    type: "GUILD_FEATURE_ACK",
                    id: e,
                    ackType: t,
                    ackedId: n,
                    local: !1
                })
            }

            function T(e, t) {
                var n;
                let l = null === (n = d.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                null != l && i.default.dispatch({
                    type: "USER_NON_CHANNEL_ACK",
                    ackType: e,
                    ackedId: t,
                    local: !1
                })
            }
        },
        87657: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("920040"),
                i = n("773670"),
                a = n("77078"),
                r = n("390236"),
                u = i.memo(function(e) {
                    var t, n, u, o;
                    let {
                        user: d,
                        size: s = a.AvatarSizes.SIZE_32,
                        animate: c = !1,
                        "aria-hidden": E = !1,
                        ...f
                    } = e, C = i.useContext(r.default);
                    return (0, l.jsx)(a.Avatar, {
                        src: (t = d, n = (0, a.getAvatarSize)(s), u = c, o = C, t.getAvatarURL(o, n, u)),
                        size: s,
                        "aria-label": E ? void 0 : d.username,
                        "aria-hidden": E,
                        ...f
                    })
                })
        },
        427027: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChannelsVoiceNormalIcon: function() {
                    return r
                }
            });
            var l = n("920040");
            n("773670");
            var i = n("912557"),
                a = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.737.324L5.917 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.917l4.286 4.676a1 1 0 0 0 .737.324H11a1 1 0 0 0 1-1V3Zm3.1 17.754c-.58.138-1.1-.33-1.1-.926v-.032c0-.497.369-.912.849-1.043a7.003 7.003 0 0 0 0-13.506C14.369 5.116 14 4.7 14 4.204v-.032c0-.596.52-1.064 1.1-.926a9.004 9.004 0 0 1 0 17.508Zm.057-4.242c-.57.273-1.157-.203-1.157-.835v-.14c0-.424.277-.789.633-1.02A2.997 2.997 0 0 0 16 12a2.997 2.997 0 0 0-1.367-2.517c-.356-.231-.633-.596-.633-1.02v-.14c0-.632.587-1.108 1.157-.835a5 5 0 0 1 0 9.024Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        733154: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChatIcon: function() {
                    return r
                }
            });
            var l = n("920040");
            n("773670");
            var i = n("912557"),
                a = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.97.57 3.808 1.554 5.357a.517.517 0 0 1-.04.617l-2.067 2.369C.882 20.989 1.34 22 2.2 22H12Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        434657: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LockIcon: function() {
                    return r
                }
            });
            var l = n("920040");
            n("773670");
            var i = n("912557"),
                a = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M15 8V6a3 3 0 1 0-6 0v2h6ZM7 8H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3h-2V6A5 5 0 0 0 7 6v2Zm6 7.732A2 2 0 0 0 12 12a2 2 0 0 0-1 3.732V17a1 1 0 1 0 2 0v-1.268Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        287083: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StageIcon: function() {
                    return r
                }
            });
            var l = n("920040");
            n("773670");
            var i = n("912557"),
                a = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M19.615 18.25c-.335-.364-.35-.914-.079-1.328a9 9 0 1 0-15.072 0c.27.414.256.964-.079 1.328l-.019.02c-.407.442-1.113.428-1.452-.068A10.949 10.949 0 0 1 1 12C1 5.925 5.925 1 12 1s11 4.925 11 11c0 2.3-.706 4.436-1.914 6.202-.339.496-1.045.51-1.452.068l-.02-.02Zm-2.785-3.017c.428.463 1.176.42 1.454-.145a7 7 0 1 0-12.568 0c.278.565 1.026.608 1.454.145l.054-.06c.304-.329.342-.817.168-1.23a5 5 0 1 1 9.216 0c-.174.413-.136.901.168 1.23l.054.06ZM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-8.669 8.03c-.252.725.12 1.5.808 1.84A10.955 10.955 0 0 0 12 23c1.745 0 3.395-.406 4.861-1.13.69-.34 1.06-1.115.808-1.84a6.003 6.003 0 0 0-11.338 0Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        320954: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("427964"),
                i = n.n(l);

            function a(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
                return i(e).map(e => "null" === e.channel.id ? t[e.channel.id] : [e, t[e.channel.id]]).flattenDeep().filter(n).value()
            }
        },
        143909: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return w
                }
            });
            var l = n("920040"),
                i = n("773670"),
                a = n("575482"),
                r = n.n(a),
                u = n("498225"),
                o = n("551042"),
                d = n("77078"),
                s = n("87657"),
                c = n("812204"),
                E = n("685665"),
                f = n("679653"),
                C = n("419830"),
                _ = n("123561"),
                h = n("161778"),
                A = n("233069"),
                T = n("27618"),
                S = n("162771"),
                L = n("697218"),
                I = n("941886"),
                g = n("810567"),
                N = n("904276"),
                D = n("875436"),
                m = n("449008"),
                R = n("16002"),
                U = n("782340"),
                p = n("435202"),
                v = n("855143"),
                O = n("934516");

            function G(e) {
                let {
                    channel: t,
                    ChannelIcon: n,
                    selected: i,
                    onClick: a
                } = e, r = (0, f.default)(t);
                return (0, l.jsxs)(d.Clickable, {
                    className: p.channelRow,
                    onClick: () => a(t.id),
                    children: [i ? (0, l.jsx)(D.default, {
                        className: p.radioIcon
                    }) : (0, l.jsx)(N.default, {
                        className: p.radioIcon
                    }), (0, l.jsx)(n, {
                        className: p.icon,
                        width: 16,
                        height: 16
                    }), (0, l.jsx)(d.Text, {
                        variant: "text-md/medium",
                        color: "interactive-active",
                        children: r
                    })]
                })
            }

            function P(e) {
                let {
                    guildId: t,
                    selectedChannelId: n,
                    onSelectChannelId: a
                } = e, {
                    guildChannels: o
                } = (0, u.useStateFromStoresObject)([_.default], () => _.default.getGuildWithoutChangingCommunityRows(t)), s = i.useMemo(() => {
                    let e = [];
                    return o.forEachChannel(t => {
                        ((0, A.isGuildSelectableChannelType)(t.type) || (0, A.isGuildVocalChannelType)(t.type)) && e.push(t)
                    }), e
                }, [o]);
                return 0 === s.length ? null : (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("div", {
                        className: r(p.divider, p.bottomDivider)
                    }), (0, l.jsx)(d.Text, {
                        variant: "eyebrow",
                        color: "interactive-normal",
                        className: p.contentPadding,
                        children: U.default.Messages.CLIP_SHARE_SELECT_CHANNEL
                    }), (0, l.jsx)(d.List, {
                        sections: [s.length],
                        sectionHeight: 0,
                        renderRow: e => {
                            let {
                                section: t,
                                row: i
                            } = e;
                            if (t > 0) return null;
                            let r = s[i],
                                u = (0, C.getChannelIconComponent)(r);
                            return null == u ? null : (0, l.jsx)(G, {
                                channel: r,
                                ChannelIcon: u,
                                selected: n === r.id,
                                onClick: a
                            }, r.id)
                        },
                        rowHeight: (e, t) => {
                            if (e > 0) return 0;
                            let n = s[t];
                            return null != n ? 56 : 0
                        },
                        renderSection: () => null,
                        className: r(p.channelList, p.contentPadding),
                        fade: !0
                    })]
                })
            }

            function x(e) {
                let {
                    friends: t,
                    searchQuery: n
                } = e, a = i.useMemo(() => 0 === n.length ? t : t.filter(e => e.username.toLowerCase().includes(n.toLowerCase())), [t, n]), o = (0, u.useStateFromStores)([h.default], () => h.default.theme);
                return 0 === a.length ? (0, l.jsxs)(I.default, {
                    theme: o,
                    className: p.emptyStateContainer,
                    children: [(0, l.jsx)(I.default.Image, {
                        width: 415,
                        height: 75,
                        lightSrc: O,
                        darkSrc: v
                    }), (0, l.jsx)(I.default.Text, {
                        note: U.default.Messages.FRIEND_REQUEST_NO_RESULTS_FOUND
                    })]
                }) : (0, l.jsx)(d.List, {
                    sections: [a.length],
                    sectionHeight: 0,
                    renderRow: e => {
                        let {
                            section: t,
                            row: n
                        } = e;
                        if (t > 0) return null;
                        let i = a[n],
                            r = a[n].username;
                        return (0, l.jsxs)("div", {
                            className: p.userRow,
                            children: [(0, l.jsx)(s.default, {
                                user: i
                            }), (0, l.jsx)(d.Text, {
                                className: p.username,
                                variant: "text-md/normal",
                                children: r
                            }), (0, l.jsx)(d.Button, {
                                className: p.friendShareButton,
                                look: d.ButtonLooks.OUTLINED,
                                size: d.ButtonSizes.SMALL,
                                color: d.ButtonColors.BRAND,
                                children: (0, l.jsx)(d.Text, {
                                    variant: "text-sm/medium",
                                    children: U.default.Messages.SHARE
                                })
                            })]
                        }, i.id)
                    },
                    rowHeight: (e, t) => {
                        if (e > 0) return 0;
                        let n = a[t];
                        return null != n ? 52 : 0
                    },
                    renderSection: () => null,
                    className: r(p.friendsList, p.contentPadding),
                    fade: !0
                })
            }

            function w(e) {
                let {
                    clip: t,
                    editMetadata: n,
                    transitionState: a,
                    onClose: s
                } = e, [f, C] = i.useState(""), [_, h] = i.useState(!1), [A, I] = i.useState(null), N = (0, u.useStateFromStoresArray)([T.default], () => T.default.getFriendIDs()), D = (0, u.useStateFromStoresArray)([L.default], () => N.map(e => L.default.getUser(e)).filter(m.isNotNullish), [N]), v = (0, u.useStateFromStores)([S.default], () => S.default.getLastSelectedGuildId()), {
                    analyticsLocations: O
                } = (0, E.default)(c.default.CLIPS_SHARE_MODAL);
                async function G() {
                    if (null != A) {
                        h(!0);
                        try {
                            await (0, R.shareClip)(t, {
                                channelId: A,
                                editMetadata: n,
                                analyticsLocations: O
                            }), o.closeAllModals()
                        } catch (e) {} finally {
                            h(!1)
                        }
                    }
                }
                return (0, l.jsxs)(d.ModalRoot, {
                    size: d.ModalSize.SMALL,
                    transitionState: a,
                    children: [(0, l.jsx)(d.Heading, {
                        className: r(p.title, p.contentPadding),
                        variant: "heading-lg/semibold",
                        color: "interactive-active",
                        children: U.default.Messages.CLIP_SHARE_MODAL_TITLE
                    }), (0, l.jsx)(d.Text, {
                        variant: "text-md/normal",
                        color: "text-normal",
                        className: r(p.subtitle, p.contentPadding),
                        children: U.default.Messages.CLIP_SHARE_MODAL_SUBTITLE
                    }), (0, l.jsx)(g.default, {
                        className: p.searchBar,
                        query: f,
                        onChange: C,
                        size: g.default.Sizes.MEDIUM,
                        onClear: function() {
                            C("")
                        },
                        placeholder: U.default.Messages.INVITE_SEARCH_FOR_FRIENDS
                    }), (0, l.jsx)("div", {
                        className: r(p.divider, p.topDivider)
                    }), (0, l.jsx)(x, {
                        searchQuery: f,
                        friends: D
                    }), null != v && (0, l.jsx)(P, {
                        guildId: v,
                        selectedChannelId: A,
                        onSelectChannelId: I
                    }), (0, l.jsxs)(d.ModalFooter, {
                        children: [(0, l.jsx)(d.Button, {
                            disabled: null == A,
                            submitting: _,
                            color: d.Button.Colors.BRAND,
                            onClick: G,
                            children: U.default.Messages.CLIPS_EDIT_SHARE_CLIP
                        }), (0, l.jsx)(d.Button, {
                            submitting: _,
                            look: d.ButtonLooks.LINK,
                            onClick: s,
                            color: d.ButtonColors.PRIMARY,
                            children: U.default.Messages.BACK
                        })]
                    })]
                })
            }
        },
        677315: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useGuildHomeExperiment: function() {
                    return c
                },
                canSeeGuildHome: function() {
                    return E
                },
                GuildFeedRenderSelectorExperiment: function() {
                    return f
                },
                GuildFeedRefreshButtonExperiment: function() {
                    return C
                },
                GuildHomeBadgeExperiment: function() {
                    return _
                },
                GuildHomeFeedbackExperiment: function() {
                    return h
                },
                GuildHomeDeprecationExperiment: function() {
                    return A
                }
            });
            var l = n("498225"),
                i = n("203288"),
                a = n("862205"),
                r = n("21121"),
                u = n("923959"),
                o = n("305961"),
                d = n("49111");

            function s(e, t, n) {
                let l = t.getChannels(e)[u.GUILD_SELECTABLE_CHANNELS_KEY].filter(t => {
                    let {
                        channel: l
                    } = t;
                    return !n.isChannelGated(e, l.id)
                });
                return l.length > 5
            }

            function c(e) {
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                let t = (0, l.useStateFromStores)([u.default, i.default], () => null != e && s(e.id, u.default, i.default));
                return !__OVERLAY__ && !!t && null != e && e.hasFeature(d.GuildFeatures.GUILD_HOME_DEPRECATION_OVERRIDE)
            }

            function E(e) {
                if (__OVERLAY__ || e === d.ME || e === d.FAVORITES || (0, r.isInMainTabsExperiment)()) return !1;
                let t = o.default.getGuild(e);
                return !!(null != t && s(e, u.default, i.default)) && t.hasFeature(d.GuildFeatures.GUILD_HOME_DEPRECATION_OVERRIDE)
            }
            let f = (0, a.createExperiment)({
                    kind: "user",
                    id: "2022-01_home_feed_toggle",
                    label: "Show Guild Feed Sorting Selector",
                    defaultConfig: {
                        showSelector: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Yes Selector",
                        config: {
                            showSelector: !0
                        }
                    }]
                }),
                C = (0, a.createExperiment)({
                    kind: "user",
                    id: "2022-06_home_refresh_button",
                    label: "Show refresh button",
                    defaultConfig: {
                        showRefreshButton: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Yes button",
                        config: {
                            showRefreshButton: !0
                        }
                    }]
                }),
                _ = (0, a.createExperiment)({
                    kind: "user",
                    id: "2022-08_home_badge",
                    label: "Show badge on home channel",
                    defaultConfig: {
                        showBadge: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "show badge",
                        config: {
                            showBadge: !0
                        }
                    }]
                });
            (0, a.createExperiment)({
                kind: "user",
                id: "2022-08_home_drawer_autoclose",
                label: "Auto close home drawer",
                defaultConfig: {
                    autoCloseDrawer: !1,
                    animation: !1,
                    delay: null
                },
                treatments: [{
                    id: 1,
                    label: "normal animation",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !0,
                        delay: null
                    }
                }, {
                    id: 2,
                    label: "no animate",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !1,
                        delay: null
                    }
                }, {
                    id: 3,
                    label: "150 delayed animation",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !0,
                        delay: 150
                    }
                }, {
                    id: 4,
                    label: "250 delayed animation",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !0,
                        delay: 250
                    }
                }, {
                    id: 5,
                    label: "500 delayed animation",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !0,
                        delay: 500
                    }
                }]
            }), (0, a.createExperiment)({
                kind: "user",
                id: "2022-09_welcome_header",
                label: "Show welcome header for home",
                defaultConfig: {
                    showWelcomeHeader: !1
                },
                treatments: [{
                    id: 1,
                    label: "show welcome header",
                    config: {
                        showWelcomeHeader: !0
                    }
                }]
            });
            let h = (0, a.createExperiment)({
                    kind: "user",
                    id: "2022-12_home_feedback_ux",
                    label: "Show post feedback for home",
                    defaultConfig: {
                        showFeedback: !1
                    },
                    treatments: [{
                        id: 100,
                        label: "show feedback",
                        config: {
                            showFeedback: !0
                        }
                    }]
                }),
                A = (0, a.createExperiment)({
                    kind: "guild",
                    id: "2023-03_home_deprecation",
                    label: "Home Deprecation",
                    defaultConfig: {
                        showDeprecationNotice: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Show notice",
                        config: {
                            showDeprecationNotice: !0
                        }
                    }]
                })
        },
        123561: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return j
                }
            });
            var l = n("427964"),
                i = n.n(l),
                a = n("498225"),
                r = n("913144"),
                u = n("191225"),
                o = n("203288"),
                d = n("398604"),
                s = n("401690"),
                c = n("755624"),
                E = n("374363"),
                f = n("271938"),
                C = n("870691"),
                _ = n("42203"),
                h = n("816092"),
                A = n("546463"),
                T = n("957255"),
                S = n("660478"),
                L = n("18494"),
                I = n("282109"),
                g = n("449008"),
                N = n("319839"),
                D = n("397336");
            let m = null,
                R = null,
                U = new N.default;

            function p() {
                let e = L.default.getChannelId(),
                    t = L.default.getVoiceChannelId();
                return m = e, R = t, U.clear()
            }

            function v(e) {
                let {
                    guild: {
                        id: t
                    }
                } = e;
                return U.clearGuildId(t)
            }

            function O(e) {
                let {
                    channel: {
                        guild_id: t
                    }
                } = e;
                return U.clearGuildId(t)
            }

            function G(e) {
                let {
                    guildId: t
                } = e;
                return U.clearGuildId(t)
            }

            function P(e) {
                let {
                    channelId: t
                } = e;
                return U.nonPositionalChannelIdUpdate(t)
            }

            function x() {
                return null != m && U.nonPositionalChannelIdUpdate(m)
            }

            function w(e) {
                let {
                    channel: t
                } = e;
                return U.nonPositionalChannelIdUpdate(t.id)
            }

            function H(e) {
                let {
                    id: t
                } = e;
                return U.nonPositionalChannelIdUpdate(t)
            }

            function M() {
                let e = L.default.getChannelId(),
                    t = L.default.getVoiceChannelId(),
                    n = m !== e || R !== t;
                return !!n && (i([m, R, e, t]).uniq().forEach(e => {
                    null != e && U.nonPositionalChannelIdUpdate(e) && (n = !0)
                }), m = e, R = t, !0)
            }

            function y(e) {
                let {
                    id: t
                } = e, n = _.default.getChannel(t);
                return null == n ? U.clearGuildId(t) : U.clearGuildId(n.guild_id)
            }

            function V(e) {
                let {
                    guildId: t
                } = e;
                return U.clearGuildId(t)
            }

            function b() {
                return U.updateSubtitles()
            }

            function B(e) {
                let {
                    guildScheduledEvent: t
                } = e;
                return U.updateSubtitles(t.guild_id)
            }
            class F extends a.default.Store {
                initialize() {
                    this.waitFor(s.default, f.default, C.default, _.default, h.default, u.default, A.default, o.default, d.default, c.default, T.default, S.default, L.default, I.default, E.default)
                }
                getGuild(e, t) {
                    let n = U.getGuild(e, t);
                    return {
                        guildChannelsVersion: n.version,
                        guildChannels: n
                    }
                }
                getGuildWithoutChangingCommunityRows(e) {
                    let t = U.getGuildWithoutCommunityRows(e);
                    return {
                        guildChannelsVersion: t.version,
                        guildChannels: t
                    }
                }
                recentsChannelCount(e) {
                    if (null == e) return 0;
                    let t = U.getGuildWithoutCommunityRows(e),
                        n = t.getCategoryFromSection(t.recentsSectionNumber);
                    return n.getShownChannelIds().length
                }
            }
            F.displayName = "ChannelListStore";
            var j = new F(r.default, {
                APPLICATION_FETCH_FAIL: b,
                APPLICATION_FETCH_SUCCESS: b,
                APPLICATION_FETCH: b,
                APPLICATIONS_FETCH_FAIL: b,
                APPLICATIONS_FETCH_SUCCESS: b,
                APPLICATIONS_FETCH: b,
                BACKGROUND_SYNC: p,
                BULK_ACK: function(e) {
                    let {
                        channels: t
                    } = e, n = !1;
                    return i(t).map(e => {
                        var t;
                        return null === (t = _.default.getChannel(e.channelId)) || void 0 === t ? void 0 : t.guild_id
                    }).filter(g.isNotNullish).uniq().forEach(e => {
                        U.clearGuildId(e) && (n = !0)
                    }), n
                },
                CACHE_LOADED_LAZY: p,
                CATEGORY_COLLAPSE_ALL: G,
                CATEGORY_COLLAPSE: y,
                CATEGORY_EXPAND_ALL: G,
                CATEGORY_EXPAND: y,
                CHANNEL_ACK: P,
                CHANNEL_CREATE: O,
                CHANNEL_COLLAPSE: function(e) {
                    var t;
                    let {
                        channelId: n
                    } = e;
                    return U.clearGuildId(null === (t = _.default.getChannel(n)) || void 0 === t ? void 0 : t.guild_id)
                },
                CHANNEL_DELETE: O,
                CHANNEL_LOCAL_ACK: P,
                CHANNEL_RTC_UPDATE_CHAT_OPEN: P,
                CHANNEL_SELECT: M,
                VOICE_CHANNEL_STATUS_UPDATE: function(e) {
                    let t = _.default.getBasicChannel(e.id);
                    if (null != t && null != t.guild_id) return U.clearGuildId(t.guild_id)
                },
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e, n = !1;
                    return i(t).map(e => e.guild_id).uniq().forEach(e => {
                        U.clearGuildId(e) && (n = !0)
                    }), n
                },
                CONNECTION_OPEN_SUPPLEMENTAL: b,
                CONNECTION_OPEN: p,
                CURRENT_USER_UPDATE: p,
                DECAY_READ_STATES: p,
                DEV_TOOLS_DESIGN_TOGGLE_SET: p,
                DISABLE_AUTOMATIC_ACK: P,
                DRAWER_CLOSE: x,
                DRAWER_OPEN: x,
                EMBEDDED_ACTIVITY_INBOUND_UPDATE: function(e) {
                    let {
                        guildId: t,
                        channelId: n
                    } = e;
                    return U.updateSubtitles(t, n)
                },
                EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: b,
                EMBEDDED_ACTIVITY_LAUNCH_START: function(e) {
                    b()
                },
                ENABLE_AUTOMATIC_ACK: P,
                FETCH_GUILD_EVENTS_FOR_GUILD: function(e) {
                    let {
                        guildId: t
                    } = e;
                    return U.updateSubtitles(t)
                },
                GAMES_DATABASE_FETCH_FAIL: b,
                GAMES_DATABASE_FETCH: b,
                GAMES_DATABASE_UPDATE: b,
                GUILD_APPLICATIONS_FETCH_SUCCESS: b,
                GUILD_CREATE: v,
                GUILD_DELETE: v,
                GUILD_MEMBER_UPDATE: function(e) {
                    let {
                        guildId: t,
                        user: n
                    } = e;
                    return f.default.getId() === n.id && U.clearGuildId(t)
                },
                GUILD_ROLE_CREATE: G,
                GUILD_ROLE_DELETE: G,
                GUILD_ROLE_UPDATE: G,
                GUILD_SCHEDULED_EVENT_CREATE: B,
                GUILD_SCHEDULED_EVENT_DELETE: B,
                GUILD_SCHEDULED_EVENT_UPDATE: B,
                GUILD_TOGGLE_COLLAPSE_MUTED: G,
                GUILD_UPDATE: v,
                GUILD_FEED_FETCH_SUCCESS: b,
                LOAD_MESSAGES_SUCCESS: P,
                MESSAGE_ACK: P,
                MESSAGE_CREATE: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return U.nonPositionalChannelIdUpdate(t)
                },
                MESSAGE_DELETE_BULK: P,
                MESSAGE_DELETE: P,
                OVERLAY_INITIALIZE: p,
                PASSIVE_UPDATE_V1: function(e) {
                    return null != e.channels && (U.clearGuildId(e.guildId), !0)
                },
                RESORT_THREADS: P,
                THREAD_CREATE: w,
                THREAD_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return U.nonPositionalChannelUpdate(t)
                },
                THREAD_LIST_SYNC: G,
                THREAD_MEMBER_UPDATE: H,
                THREAD_MEMBERS_UPDATE: H,
                THREAD_UPDATE: w,
                UPDATE_CHANNEL_DIMENSIONS: P,
                USER_GUILD_SETTINGS_CHANNEL_UPDATE: G,
                USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: G,
                USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
                    let {
                        userGuildSettings: t
                    } = e;
                    t.forEach(e => {
                        let {
                            guild_id: t
                        } = e;
                        return U.clearGuildId(t)
                    })
                },
                USER_GUILD_SETTINGS_GUILD_UPDATE: G,
                USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: G,
                IMPERSONATE_STOP: G,
                IMPERSONATE_UPDATE: G,
                VOICE_CATEGORY_COLLAPSE: V,
                VOICE_CATEGORY_EXPAND: V,
                VOICE_CHANNEL_SELECT: M,
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e, n = M(), l = new Set;
                    for (let {
                            channelId: e,
                            oldChannelId: i
                        }
                        of t) null != i && !l.has(i) && (U.nonPositionalChannelIdUpdate(i) && (n = !0), l.add(i)), null != e && !l.has(e) && (U.nonPositionalChannelIdUpdate(e) && (n = !0), l.add(e));
                    return n
                },
                WINDOW_FOCUS: x,
                DISMISS_FAVORITE_SUGGESTION: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return U.nonPositionalChannelIdUpdate(t)
                },
                SET_RECENTLY_ACTIVE_COLLAPSED: p,
                BULK_CLEAR_RECENTS: G,
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    var t;
                    let {
                        settings: n
                    } = e;
                    if (n.type !== D.UserSettingsTypes.PRELOADED_USER_SETTINGS) return !1;
                    let l = null === (t = n.proto.guilds) || void 0 === t ? void 0 : t.guilds,
                        i = !1;
                    return null != l && Object.keys(l).forEach(e => {
                        let t = l[e].guildRecentsDismissedAt;
                        null != t && (i = U.updateRecentsCategory(e) || i)
                    }), i
                },
                GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: G,
                GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: G,
                UPDATE_CHANNEL_LIST_SUBTITLES: function(e) {
                    let {
                        guildId: t
                    } = e;
                    U.updateSubtitles(t)
                }
            })
        },
        870691: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var l = n("498225"),
                i = n("913144"),
                a = n("449008"),
                r = n("42203"),
                u = n("341542"),
                o = n("923959"),
                d = n("49111");
            let s = {},
                c = 0;

            function E() {
                c += 1
            }

            function f(e) {
                if (null == s[e]) return !1;
                delete s[e]
            }
            class C extends l.default.PersistedStore {
                initialize(e) {
                    this.waitFor(r.default, u.default), this.removeChangeListener(E), this.addChangeListener(E), s = null != e ? e : {}
                }
                getState() {
                    return s
                }
                isCollapsed(e) {
                    return null != e && "null" !== e && !!s[e] && s[e]
                }
                getCollapsedCategories() {
                    return s
                }
                get version() {
                    return c
                }
            }
            C.displayName = "CategoryCollapseStore", C.persistKey = "collapsedCategories";
            var _ = new C(i.default, {
                CONNECTION_OPEN: function(e) {
                    for (let t of (!e.userGuildSettings.partial && (s = {}), e.userGuildSettings.entries))
                        if (null != t.channel_overrides)
                            for (let e of t.channel_overrides) e.collapsed ? s[e.channel_id] = !0 : delete s[e.channel_id]
                },
                USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
                    let {
                        userGuildSettings: t
                    } = e, n = new Set(t.map(e => e.guild_id).filter(a.isNotNullish));
                    for (let e in s) {
                        let t = r.default.getChannel(e);
                        null != t && null != t.guild_id && n.has(t.guild_id) && delete s[t.id]
                    }
                    for (let e of t)
                        for (let t of e.channel_overrides) t.collapsed && (s[t.channel_id] = !0)
                },
                CATEGORY_COLLAPSE: function(e) {
                    let {
                        id: t
                    } = e;
                    if (s[t]) return !1;
                    s[t] = !0
                },
                CATEGORY_EXPAND: function(e) {
                    let {
                        id: t
                    } = e;
                    return f(t)
                },
                CATEGORY_COLLAPSE_ALL: function(e) {
                    let {
                        guildId: t
                    } = e;
                    o.default.getChannels(t)[d.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                        let {
                            channel: t
                        } = e;
                        "null" !== t.id && (s[t.id] = !0)
                    })
                },
                CATEGORY_EXPAND_ALL: function(e) {
                    let {
                        guildId: t
                    } = e;
                    o.default.getChannels(t)[d.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                        let {
                            channel: t
                        } = e;
                        delete s[t.id]
                    })
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: {
                            id: t
                        }
                    } = e;
                    return f(t)
                }
            })
        },
        245997: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var l = n("498225"),
                i = n("913144"),
                a = n("320954"),
                r = n("379881"),
                u = n("271938"),
                o = n("42203"),
                d = n("923959"),
                s = n("305961"),
                c = n("49111");
            let E = null,
                f = {},
                C = null;

            function _() {
                return {
                    _categories: [],
                    null: []
                }
            }
            let h = _();

            function A(e, t) {
                e.index = t
            }

            function T(e) {
                let t = d.default.getChannels(e),
                    n = _(),
                    l = e => {
                        var t;
                        let {
                            channel: l
                        } = e, i = null !== (t = n[null != l.parent_id ? l.parent_id : "null"]) && void 0 !== t ? t : n.null;
                        i.push({
                            channel: l,
                            index: -1
                        })
                    };
                return t[c.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                    let {
                        channel: t
                    } = e;
                    n._categories.push({
                        channel: t,
                        index: -1
                    }), n[t.id] = []
                }), t[0, d.GUILD_SELECTABLE_CHANNELS_KEY].forEach(l), t[0, d.GUILD_VOCAL_CHANNELS_KEY].forEach(l), (0, a.default)(n._categories, n).forEach(A), f[e] = n, n
            }

            function S() {
                f = {}, null != E && T(E)
            }

            function L(e) {
                let {
                    guild: {
                        id: t
                    }
                } = e;
                f[t] = void 0, E === t && T(t)
            }

            function I(e) {
                let {
                    channel: {
                        guild_id: t
                    }
                } = e;
                if (null == t) return !1;
                f[t] = void 0, E === t && T(t)
            }

            function g(e) {
                let {
                    guildId: t
                } = e;
                f[t] = void 0, t === E && T(t)
            }

            function N(e, t) {
                if (C = t, null == e || null == e.getGuildId()) return !1;
                let n = e.getGuildId();
                return null != n && (f[n] = void 0, n === E && T(n), !0)
            }

            function D() {
                T(c.FAVORITES)
            }
            class m extends l.default.Store {
                initialize() {
                    this.waitFor(d.default, s.default, u.default, o.default, r.default), this.syncWith([r.default], D)
                }
                getCategories(e) {
                    return null != e ? function(e) {
                        let t = f[e];
                        return null != t ? t : T(e)
                    }(e) : h
                }
            }
            m.displayName = "GuildCategoryStore";
            var R = new m(i.default, {
                CHANNEL_SELECT: function(e) {
                    let {
                        guildId: t
                    } = e;
                    if (E = null != t ? t : null, null == t || null != f[t]) return !1;
                    T(t)
                },
                CONNECTION_OPEN: S,
                OVERLAY_INITIALIZE: S,
                CACHE_LOADED_LAZY: S,
                GUILD_CREATE: L,
                GUILD_UPDATE: L,
                GUILD_DELETE: function(e) {
                    let {
                        guild: {
                            id: t
                        }
                    } = e;
                    delete f[t]
                },
                CHANNEL_CREATE: I,
                CHANNEL_DELETE: I,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e, n = !1;
                    for (let {
                            guild_id: e
                        }
                        of t) null != e && (f[e] = void 0, n = !0, E === e && T(e));
                    return n
                },
                GUILD_MEMBER_UPDATE: function(e) {
                    let {
                        guildId: t,
                        user: n
                    } = e;
                    if (u.default.getId() !== n.id) return !1;
                    f[t] = void 0, t === E && T(t)
                },
                CURRENT_USER_UPDATE: function() {
                    if (null == E) return !1;
                    T(E)
                },
                GUILD_ROLE_CREATE: g,
                GUILD_ROLE_UPDATE: g,
                GUILD_ROLE_DELETE: g,
                IMPERSONATE_UPDATE: g,
                IMPERSONATE_STOP: g,
                VOICE_CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return null == t && null != C ? N(o.default.getChannel(C), null) : N(o.default.getChannel(t), t)
                },
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e;
                    return t.reduce((e, t) => {
                        let {
                            channelId: n,
                            sessionId: l
                        } = t;
                        return u.default.getSessionId() !== l ? e : N(o.default.getChannel(n), n) || e
                    }, !1)
                }
            })
        },
        941886: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EmptyStateImage: function() {
                    return _
                },
                EmptyStateText: function() {
                    return h
                },
                default: function() {
                    return A
                }
            });
            var l = n("920040"),
                i = n("773670"),
                a = n("575482"),
                r = n.n(a),
                u = n("819855"),
                o = n("77078"),
                d = n("145131"),
                s = n("49111"),
                c = n("740344"),
                E = n("84811");
            let {
                Provider: f,
                Consumer: C
            } = i.createContext(s.ThemeTypes.DARK);
            class _ extends i.PureComponent {
                render() {
                    let {
                        lightSrc: e,
                        darkSrc: t,
                        width: n,
                        height: i,
                        offsetX: a,
                        offsetY: o,
                        style: s
                    } = this.props;
                    return (0, l.jsx)(C, {
                        children: f => (0, l.jsx)(d.default.Child, {
                            grow: 0,
                            className: r(c.image, E.marginBottom40),
                            style: {
                                ...s,
                                width: n,
                                height: i,
                                marginLeft: a,
                                marginTop: o,
                                backgroundImage: "url(".concat((0, u.isThemeDark)(f) ? t : e, ")")
                            }
                        })
                    })
                }
            }
            let h = e => {
                let {
                    children: t,
                    className: n,
                    noteClassName: i,
                    note: a,
                    style: u
                } = e;
                return (0, l.jsxs)(d.default.Child, {
                    grow: 0,
                    direction: d.default.Direction.VERTICAL,
                    style: u,
                    children: [null != t && (0, l.jsx)(o.H, {
                        className: r(n, c.title),
                        children: t
                    }), null != a ? (0, l.jsx)("div", {
                        className: r(i, c.text, E.marginTop8),
                        children: a
                    }) : null]
                })
            };
            class A extends i.PureComponent {
                render() {
                    let {
                        children: e,
                        theme: t,
                        className: n,
                        style: i
                    } = this.props;
                    return (0, l.jsx)(f, {
                        value: t,
                        children: (0, l.jsx)(d.default, {
                            direction: d.default.Direction.VERTICAL,
                            align: d.default.Align.CENTER,
                            justify: d.default.Justify.CENTER,
                            className: r(c.wrapper, n),
                            style: i,
                            children: e
                        })
                    })
                }
            }
            A.Text = h, A.Image = _
        },
        109264: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("920040");
            n("773670");
            var i = n("469563"),
                a = n("733154"),
                r = n("75196"),
                u = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: a,
                        ...u
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, r.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            className: a,
                            fill: i,
                            d: "M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z"
                        })
                    })
                }, a.ChatIcon)
        },
        45029: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("920040");
            n("773670");
            var i = n("469563"),
                a = n("434657"),
                r = n("75196"),
                u = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        className: a,
                        foreground: u,
                        ...o
                    } = e;
                    return (0, l.jsx)("svg", {
                        width: t,
                        height: n,
                        className: a,
                        viewBox: "0 0 24 24",
                        ...(0, r.default)(o),
                        children: (0, l.jsx)("path", {
                            className: u,
                            fill: i,
                            d: "M17 11V7C17 4.243 14.756 2 12 2C9.242 2 7 4.243 7 7V11C5.897 11 5 11.896 5 13V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V13C19 11.896 18.103 11 17 11ZM12 18C11.172 18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18ZM15 11H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V11Z",
                            "aria-hidden": !0
                        })
                    })
                }, a.LockIcon)
        },
        368121: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("920040");
            n("773670");
            var i = n("469563"),
                a = n("427027"),
                r = n("75196"),
                u = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: a,
                        ...u
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, r.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            className: a,
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                            "aria-hidden": !0
                        })
                    })
                }, a.ChannelsVoiceNormalIcon)
        },
        228427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("920040");
            n("773670");
            var i = n("469563"),
                a = n("287083"),
                r = n("75196"),
                u = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: n = 32,
                        color: i = "currentColor",
                        ...a
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, r.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                            fill: i
                        })
                    })
                }, a.StageIcon)
        }
    }
]);