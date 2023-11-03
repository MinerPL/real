(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["70077"], {
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
                    return A
                },
                ackGuildFeature: function() {
                    return T
                },
                ackUserFeature: function() {
                    return h
                }
            });
            var l = n("249654"),
                i = n("913144"),
                u = n("401690"),
                a = n("233069"),
                r = n("42203"),
                d = n("245997"),
                o = n("697218"),
                s = n("49111");

            function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    l = arguments.length > 3 ? arguments[3] : void 0,
                    u = arguments.length > 4 ? arguments[4] : void 0;
                i.default.dispatch({
                    type: "CHANNEL_ACK",
                    channelId: e,
                    messageId: l,
                    immediate: t,
                    force: n,
                    context: s.CURRENT_APP_CONTEXT,
                    location: u
                })
            }

            function E(e) {
                e.isCategory() ? ! function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        l = r.default.getChannel(e);
                    if (null == l || null == l.guild_id) return;
                    let i = d.default.getCategories(l.guild_id);
                    if (null == i[e]) return;
                    let o = i[e].filter(e => {
                            let {
                                channel: t
                            } = e;
                            return (0, a.isGuildReadableType)(t.type)
                        }).map(e => {
                            let {
                                channel: t
                            } = e;
                            return t.id
                        }),
                        s = [...o];
                    for (let e of (o.forEach(e => {
                            let t = u.default.getActiveJoinedThreadsForParent(l.guild_id, e);
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

            function A(e, t) {
                i.default.dispatch({
                    type: "DISABLE_AUTOMATIC_ACK",
                    channelId: e,
                    windowId: t
                })
            }

            function T(e, t, n) {
                i.default.dispatch({
                    type: "GUILD_FEATURE_ACK",
                    id: e,
                    ackType: t,
                    ackedId: n,
                    local: !1
                })
            }

            function h(e, t) {
                var n;
                let l = null === (n = o.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
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
                    return r
                }
            });
            var l = n("37983"),
                i = n("884691"),
                u = n("77078"),
                a = n("390236"),
                r = i.memo(function(e) {
                    var t, n, r, d;
                    let {
                        user: o,
                        size: s = u.AvatarSizes.SIZE_32,
                        animate: c = !1,
                        "aria-hidden": E = !1,
                        ...f
                    } = e, C = i.useContext(a.default);
                    return (0, l.jsx)(u.Avatar, {
                        src: (t = o, n = (0, u.getAvatarSize)(s), r = c, d = C, t.getAvatarURL(d, n, r)),
                        size: s,
                        "aria-label": E ? void 0 : o.username,
                        "aria-hidden": E,
                        ...f
                    })
                })
        },
        733154: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChatIcon: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                u = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...d
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, u.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.97.57 3.808 1.554 5.357a.517.517 0 0 1-.04.617l-2.067 2.369C.882 20.989 1.34 22 2.2 22H12Z",
                        className: r
                    })
                })
            }
        },
        287083: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StageIcon: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                u = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...d
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, u.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M19.615 18.25c-.335-.364-.35-.914-.079-1.328a9 9 0 1 0-15.072 0c.27.414.256.964-.079 1.328l-.019.02c-.407.442-1.113.428-1.452-.068A10.949 10.949 0 0 1 1 12C1 5.925 5.925 1 12 1s11 4.925 11 11c0 2.3-.706 4.436-1.914 6.202-.339.496-1.045.51-1.452.068l-.02-.02Z",
                        className: r
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M16.83 15.233c.428.463 1.176.42 1.454-.145a7 7 0 1 0-12.568 0c.278.565 1.026.608 1.454.145l.054-.06c.304-.329.342-.817.168-1.23a5 5 0 1 1 9.216 0c-.174.413-.136.901.168 1.23l.054.06Z",
                        className: r
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.331 20.03c-.252.725.12 1.5.808 1.84A10.955 10.955 0 0 0 12 23c1.745 0 3.395-.406 4.861-1.13.69-.34 1.06-1.115.808-1.84a6.003 6.003 0 0 0-11.338 0Z",
                        className: r
                    })]
                })
            }
        },
        390300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VoiceNormalIcon: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                u = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...d
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, u.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.737.324L5.917 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.917l4.286 4.676a1 1 0 0 0 .737.324H11a1 1 0 0 0 1-1V3ZM15.1 20.754c-.58.138-1.1-.33-1.1-.926v-.032c0-.497.369-.912.849-1.043a7.003 7.003 0 0 0 0-13.506C14.369 5.116 14 4.7 14 4.204v-.032c0-.596.52-1.064 1.1-.926a9.004 9.004 0 0 1 0 17.508Z",
                        className: r
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M15.157 16.512c-.57.273-1.157-.203-1.157-.835v-.14c0-.424.277-.789.633-1.02A2.997 2.997 0 0 0 16 12a2.997 2.997 0 0 0-1.367-2.517c-.356-.231-.633-.596-.633-1.02v-.14c0-.632.587-1.108 1.157-.835a5 5 0 0 1 0 9.024Z",
                        className: r
                    })]
                })
            }
        },
        320954: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("917351"),
                i = n.n(l);

            function u(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
                return i(e).map(e => "null" === e.channel.id ? t[e.channel.id] : [e, t[e.channel.id]]).flattenDeep().filter(n).value()
            }
        },
        143909: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return H
                }
            });
            var l = n("37983"),
                i = n("884691"),
                u = n("414456"),
                a = n.n(u),
                r = n("446674"),
                d = n("551042"),
                o = n("77078"),
                s = n("87657"),
                c = n("812204"),
                E = n("685665"),
                f = n("679653"),
                C = n("419830"),
                _ = n("123561"),
                A = n("161778"),
                T = n("233069"),
                h = n("27618"),
                S = n("162771"),
                L = n("697218"),
                I = n("941886"),
                N = n("810567"),
                g = n("904276"),
                D = n("875436"),
                U = n("449008"),
                R = n("16002"),
                p = n("782340"),
                O = n("827916"),
                v = n("855143"),
                m = n("934516");

            function P(e) {
                let {
                    channel: t,
                    ChannelIcon: n,
                    selected: i,
                    onClick: u
                } = e, a = (0, f.default)(t);
                return (0, l.jsxs)(o.Clickable, {
                    className: O.channelRow,
                    onClick: () => u(t.id),
                    children: [i ? (0, l.jsx)(D.default, {
                        className: O.radioIcon
                    }) : (0, l.jsx)(g.default, {
                        className: O.radioIcon
                    }), (0, l.jsx)(n, {
                        className: O.icon,
                        width: 16,
                        height: 16
                    }), (0, l.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "interactive-active",
                        children: a
                    })]
                })
            }

            function G(e) {
                let {
                    guildId: t,
                    selectedChannelId: n,
                    onSelectChannelId: u
                } = e, {
                    guildChannels: d
                } = (0, r.useStateFromStoresObject)([_.default], () => _.default.getGuildWithoutChangingCommunityRows(t)), s = i.useMemo(() => {
                    let e = [];
                    return d.forEachChannel(t => {
                        ((0, T.isGuildSelectableChannelType)(t.type) || (0, T.isGuildVocalChannelType)(t.type)) && e.push(t)
                    }), e
                }, [d]);
                return 0 === s.length ? null : (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("div", {
                        className: a(O.divider, O.bottomDivider)
                    }), (0, l.jsx)(o.Text, {
                        variant: "eyebrow",
                        color: "interactive-normal",
                        className: O.contentPadding,
                        children: p.default.Messages.CLIP_SHARE_SELECT_CHANNEL
                    }), (0, l.jsx)(o.List, {
                        sections: [s.length],
                        sectionHeight: 0,
                        renderRow: e => {
                            let {
                                section: t,
                                row: i
                            } = e;
                            if (t > 0) return null;
                            let a = s[i],
                                r = (0, C.getChannelIconComponent)(a);
                            return null == r ? null : (0, l.jsx)(P, {
                                channel: a,
                                ChannelIcon: r,
                                selected: n === a.id,
                                onClick: u
                            }, a.id)
                        },
                        rowHeight: (e, t) => {
                            if (e > 0) return 0;
                            let n = s[t];
                            return null != n ? 56 : 0
                        },
                        renderSection: () => null,
                        className: a(O.channelList, O.contentPadding),
                        fade: !0
                    })]
                })
            }

            function x(e) {
                let {
                    friends: t,
                    searchQuery: n
                } = e, u = i.useMemo(() => 0 === n.length ? t : t.filter(e => e.username.toLowerCase().includes(n.toLowerCase())), [t, n]), d = (0, r.useStateFromStores)([A.default], () => A.default.theme);
                return 0 === u.length ? (0, l.jsxs)(I.default, {
                    theme: d,
                    className: O.emptyStateContainer,
                    children: [(0, l.jsx)(I.default.Image, {
                        width: 415,
                        height: 75,
                        lightSrc: m,
                        darkSrc: v
                    }), (0, l.jsx)(I.default.Text, {
                        note: p.default.Messages.FRIEND_REQUEST_NO_RESULTS_FOUND
                    })]
                }) : (0, l.jsx)(o.List, {
                    sections: [u.length],
                    sectionHeight: 0,
                    renderRow: e => {
                        let {
                            section: t,
                            row: n
                        } = e;
                        if (t > 0) return null;
                        let i = u[n],
                            a = u[n].username;
                        return (0, l.jsxs)("div", {
                            className: O.userRow,
                            children: [(0, l.jsx)(s.default, {
                                user: i
                            }), (0, l.jsx)(o.Text, {
                                className: O.username,
                                variant: "text-md/normal",
                                children: a
                            }), (0, l.jsx)(o.Button, {
                                className: O.friendShareButton,
                                look: o.ButtonLooks.OUTLINED,
                                size: o.ButtonSizes.SMALL,
                                color: o.ButtonColors.BRAND,
                                children: (0, l.jsx)(o.Text, {
                                    variant: "text-sm/medium",
                                    children: p.default.Messages.SHARE
                                })
                            })]
                        }, i.id)
                    },
                    rowHeight: (e, t) => {
                        if (e > 0) return 0;
                        let n = u[t];
                        return null != n ? 52 : 0
                    },
                    renderSection: () => null,
                    className: a(O.friendsList, O.contentPadding),
                    fade: !0
                })
            }

            function H(e) {
                let {
                    clip: t,
                    editMetadata: n,
                    transitionState: u,
                    onClose: s
                } = e, [f, C] = i.useState(""), [_, A] = i.useState(!1), [T, I] = i.useState(null), g = (0, r.useStateFromStoresArray)([h.default], () => h.default.getFriendIDs()), D = (0, r.useStateFromStoresArray)([L.default], () => g.map(e => L.default.getUser(e)).filter(U.isNotNullish), [g]), v = (0, r.useStateFromStores)([S.default], () => S.default.getLastSelectedGuildId()), {
                    analyticsLocations: m
                } = (0, E.default)(c.default.CLIPS_SHARE_MODAL);
                async function P() {
                    if (null != T) {
                        A(!0);
                        try {
                            await (0, R.shareClip)(t, {
                                channelId: T,
                                editMetadata: n,
                                analyticsLocations: m
                            }), d.closeAllModals()
                        } catch (e) {} finally {
                            A(!1)
                        }
                    }
                }
                return (0, l.jsxs)(o.ModalRoot, {
                    size: o.ModalSize.SMALL,
                    transitionState: u,
                    children: [(0, l.jsx)(o.Heading, {
                        className: a(O.title, O.contentPadding),
                        variant: "heading-lg/semibold",
                        color: "interactive-active",
                        children: p.default.Messages.CLIP_SHARE_MODAL_TITLE
                    }), (0, l.jsx)(o.Text, {
                        variant: "text-md/normal",
                        color: "text-normal",
                        className: a(O.subtitle, O.contentPadding),
                        children: p.default.Messages.CLIP_SHARE_MODAL_SUBTITLE
                    }), (0, l.jsx)(N.default, {
                        className: O.searchBar,
                        query: f,
                        onChange: C,
                        size: N.default.Sizes.MEDIUM,
                        onClear: function() {
                            C("")
                        },
                        placeholder: p.default.Messages.INVITE_SEARCH_FOR_FRIENDS
                    }), (0, l.jsx)("div", {
                        className: a(O.divider, O.topDivider)
                    }), (0, l.jsx)(x, {
                        searchQuery: f,
                        friends: D
                    }), null != v && (0, l.jsx)(G, {
                        guildId: v,
                        selectedChannelId: T,
                        onSelectChannelId: I
                    }), (0, l.jsxs)(o.ModalFooter, {
                        children: [(0, l.jsx)(o.Button, {
                            disabled: null == T,
                            submitting: _,
                            color: o.Button.Colors.BRAND,
                            onClick: P,
                            children: p.default.Messages.CLIPS_EDIT_SHARE_CLIP
                        }), (0, l.jsx)(o.Button, {
                            submitting: _,
                            look: o.ButtonLooks.LINK,
                            onClick: s,
                            color: o.ButtonColors.PRIMARY,
                            children: p.default.Messages.BACK
                        })]
                    })]
                })
            }
        },
        123561: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return b
                }
            });
            var l = n("917351"),
                i = n.n(l),
                u = n("446674"),
                a = n("913144"),
                r = n("191225"),
                d = n("203288"),
                o = n("398604"),
                s = n("401690"),
                c = n("755624"),
                E = n("374363"),
                f = n("271938"),
                C = n("870691"),
                _ = n("42203"),
                A = n("816092"),
                T = n("546463"),
                h = n("957255"),
                S = n("660478"),
                L = n("18494"),
                I = n("282109"),
                N = n("449008"),
                g = n("319839"),
                D = n("397336");
            let U = null,
                R = null,
                p = new g.default;

            function O() {
                let e = L.default.getChannelId(),
                    t = L.default.getVoiceChannelId();
                return U = e, R = t, p.clear()
            }

            function v(e) {
                let {
                    guild: {
                        id: t
                    }
                } = e;
                return p.clearGuildId(t)
            }

            function m(e) {
                let {
                    channel: {
                        guild_id: t
                    }
                } = e;
                return p.clearGuildId(t)
            }

            function P(e) {
                let {
                    guildId: t
                } = e;
                return p.clearGuildId(t)
            }

            function G(e) {
                let {
                    channelId: t
                } = e;
                return p.nonPositionalChannelIdUpdate(t)
            }

            function x() {
                return null != U && p.nonPositionalChannelIdUpdate(U)
            }

            function H(e) {
                let {
                    channel: t
                } = e;
                return p.nonPositionalChannelIdUpdate(t.id)
            }

            function M(e) {
                let {
                    id: t
                } = e;
                return p.nonPositionalChannelIdUpdate(t)
            }

            function w() {
                let e = L.default.getChannelId(),
                    t = L.default.getVoiceChannelId(),
                    n = U !== e || R !== t;
                return !!n && (i([U, R, e, t]).uniq().forEach(e => {
                    null != e && p.nonPositionalChannelIdUpdate(e) && (n = !0)
                }), U = e, R = t, !0)
            }

            function y(e) {
                let {
                    id: t
                } = e, n = _.default.getChannel(t);
                return null == n ? p.clearGuildId(t) : p.clearGuildId(n.guild_id)
            }

            function j(e) {
                let {
                    guildId: t
                } = e;
                return p.clearGuildId(t)
            }

            function B() {
                return p.updateSubtitles()
            }

            function V(e) {
                let {
                    guildScheduledEvent: t
                } = e;
                return p.updateSubtitles(t.guild_id)
            }
            class F extends u.default.Store {
                initialize() {
                    this.waitFor(s.default, f.default, C.default, _.default, A.default, r.default, T.default, d.default, o.default, c.default, h.default, S.default, L.default, I.default, E.default)
                }
                getGuild(e, t) {
                    let n = p.getGuild(e, t);
                    return {
                        guildChannelsVersion: n.version,
                        guildChannels: n
                    }
                }
                getGuildWithoutChangingCommunityRows(e) {
                    let t = p.getGuildWithoutCommunityRows(e);
                    return {
                        guildChannelsVersion: t.version,
                        guildChannels: t
                    }
                }
                recentsChannelCount(e) {
                    if (null == e) return 0;
                    let t = p.getGuildWithoutCommunityRows(e),
                        n = t.getCategoryFromSection(t.recentsSectionNumber);
                    return n.getShownChannelIds().length
                }
            }
            F.displayName = "ChannelListStore";
            var b = new F(a.default, {
                APPLICATION_FETCH_FAIL: B,
                APPLICATION_FETCH_SUCCESS: B,
                APPLICATION_FETCH: B,
                APPLICATIONS_FETCH_FAIL: B,
                APPLICATIONS_FETCH_SUCCESS: B,
                APPLICATIONS_FETCH: B,
                BACKGROUND_SYNC: O,
                BULK_ACK: function(e) {
                    let {
                        channels: t
                    } = e, n = !1;
                    return i(t).map(e => {
                        var t;
                        return null === (t = _.default.getChannel(e.channelId)) || void 0 === t ? void 0 : t.guild_id
                    }).filter(N.isNotNullish).uniq().forEach(e => {
                        p.clearGuildId(e) && (n = !0)
                    }), n
                },
                CACHE_LOADED_LAZY: O,
                CATEGORY_COLLAPSE_ALL: P,
                CATEGORY_COLLAPSE: y,
                CATEGORY_EXPAND_ALL: P,
                CATEGORY_EXPAND: y,
                CHANNEL_ACK: G,
                CHANNEL_CREATE: m,
                CHANNEL_COLLAPSE: function(e) {
                    var t;
                    let {
                        channelId: n
                    } = e;
                    return p.clearGuildId(null === (t = _.default.getChannel(n)) || void 0 === t ? void 0 : t.guild_id)
                },
                CHANNEL_DELETE: m,
                CHANNEL_LOCAL_ACK: G,
                CHANNEL_RTC_UPDATE_CHAT_OPEN: G,
                CHANNEL_SELECT: w,
                VOICE_CHANNEL_STATUS_UPDATE: function(e) {
                    let t = _.default.getBasicChannel(e.id);
                    if (null != t && null != t.guild_id) return p.clearGuildId(t.guild_id)
                },
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e, n = !1;
                    return i(t).map(e => e.guild_id).uniq().forEach(e => {
                        p.clearGuildId(e) && (n = !0)
                    }), n
                },
                CONNECTION_OPEN_SUPPLEMENTAL: B,
                CONNECTION_OPEN: O,
                CURRENT_USER_UPDATE: O,
                DECAY_READ_STATES: O,
                DEV_TOOLS_DESIGN_TOGGLE_SET: O,
                DISABLE_AUTOMATIC_ACK: G,
                DRAWER_CLOSE: x,
                DRAWER_OPEN: x,
                EMBEDDED_ACTIVITY_INBOUND_UPDATE: function(e) {
                    let {
                        guildId: t,
                        channelId: n
                    } = e;
                    return p.updateSubtitles(t, n)
                },
                EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: B,
                EMBEDDED_ACTIVITY_LAUNCH_START: function(e) {
                    B()
                },
                ENABLE_AUTOMATIC_ACK: G,
                FETCH_GUILD_EVENTS_FOR_GUILD: function(e) {
                    let {
                        guildId: t
                    } = e;
                    return p.updateSubtitles(t)
                },
                GAMES_DATABASE_FETCH_FAIL: B,
                GAMES_DATABASE_FETCH: B,
                GAMES_DATABASE_UPDATE: B,
                GUILD_APPLICATIONS_FETCH_SUCCESS: B,
                GUILD_CREATE: v,
                GUILD_DELETE: v,
                GUILD_MEMBER_UPDATE: function(e) {
                    let {
                        guildId: t,
                        user: n
                    } = e;
                    return f.default.getId() === n.id && p.clearGuildId(t)
                },
                GUILD_ROLE_CREATE: P,
                GUILD_ROLE_DELETE: P,
                GUILD_ROLE_UPDATE: P,
                GUILD_SCHEDULED_EVENT_CREATE: V,
                GUILD_SCHEDULED_EVENT_DELETE: V,
                GUILD_SCHEDULED_EVENT_UPDATE: V,
                GUILD_TOGGLE_COLLAPSE_MUTED: P,
                GUILD_UPDATE: v,
                GUILD_FEED_FETCH_SUCCESS: B,
                LOAD_MESSAGES_SUCCESS: G,
                MESSAGE_ACK: G,
                MESSAGE_CREATE: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return p.nonPositionalChannelIdUpdate(t)
                },
                MESSAGE_DELETE_BULK: G,
                MESSAGE_DELETE: G,
                OVERLAY_INITIALIZE: O,
                PASSIVE_UPDATE_V1: function(e) {
                    return null != e.channels && (p.clearGuildId(e.guildId), !0)
                },
                RESORT_THREADS: G,
                THREAD_CREATE: H,
                THREAD_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return p.nonPositionalChannelUpdate(t)
                },
                THREAD_LIST_SYNC: P,
                THREAD_MEMBER_UPDATE: M,
                THREAD_MEMBERS_UPDATE: M,
                THREAD_UPDATE: H,
                UPDATE_CHANNEL_DIMENSIONS: G,
                USER_GUILD_SETTINGS_CHANNEL_UPDATE: P,
                USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: P,
                USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
                    let {
                        userGuildSettings: t
                    } = e;
                    t.forEach(e => {
                        let {
                            guild_id: t
                        } = e;
                        return p.clearGuildId(t)
                    })
                },
                USER_GUILD_SETTINGS_GUILD_UPDATE: P,
                USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: P,
                IMPERSONATE_STOP: P,
                IMPERSONATE_UPDATE: P,
                VOICE_CATEGORY_COLLAPSE: j,
                VOICE_CATEGORY_EXPAND: j,
                VOICE_CHANNEL_SELECT: w,
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e, n = w(), l = new Set;
                    for (let {
                            channelId: e,
                            oldChannelId: i
                        }
                        of t) null != i && !l.has(i) && (p.nonPositionalChannelIdUpdate(i) && (n = !0), l.add(i)), null != e && !l.has(e) && (p.nonPositionalChannelIdUpdate(e) && (n = !0), l.add(e));
                    return n
                },
                WINDOW_FOCUS: x,
                DISMISS_FAVORITE_SUGGESTION: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return p.nonPositionalChannelIdUpdate(t)
                },
                SET_RECENTLY_ACTIVE_COLLAPSED: O,
                BULK_CLEAR_RECENTS: P,
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
                        null != t && (i = p.updateRecentsCategory(e) || i)
                    }), i
                },
                GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: P,
                GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: P,
                UPDATE_CHANNEL_LIST_SUBTITLES: function(e) {
                    let {
                        guildId: t
                    } = e;
                    p.updateSubtitles(t)
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
            var l = n("446674"),
                i = n("913144"),
                u = n("449008"),
                a = n("42203"),
                r = n("341542"),
                d = n("923959"),
                o = n("49111");
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
                    this.waitFor(a.default, r.default), this.removeChangeListener(E), this.addChangeListener(E), s = null != e ? e : {}
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
                    } = e, n = new Set(t.map(e => e.guild_id).filter(u.isNotNullish));
                    for (let e in s) {
                        let t = a.default.getChannel(e);
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
                    d.default.getChannels(t)[o.ChannelTypes.GUILD_CATEGORY].forEach(e => {
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
                    d.default.getChannels(t)[o.ChannelTypes.GUILD_CATEGORY].forEach(e => {
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
            var l = n("446674"),
                i = n("913144"),
                u = n("320954"),
                a = n("379881"),
                r = n("271938"),
                d = n("42203"),
                o = n("923959"),
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
            let A = _();

            function T(e, t) {
                e.index = t
            }

            function h(e) {
                let t = o.default.getChannels(e),
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
                }), t[0, o.GUILD_SELECTABLE_CHANNELS_KEY].forEach(l), t[0, o.GUILD_VOCAL_CHANNELS_KEY].forEach(l), (0, u.default)(n._categories, n).forEach(T), f[e] = n, n
            }

            function S() {
                f = {}, null != E && h(E)
            }

            function L(e) {
                let {
                    guild: {
                        id: t
                    }
                } = e;
                f[t] = void 0, E === t && h(t)
            }

            function I(e) {
                let {
                    channel: {
                        guild_id: t
                    }
                } = e;
                if (null == t) return !1;
                f[t] = void 0, E === t && h(t)
            }

            function N(e) {
                let {
                    guildId: t
                } = e;
                f[t] = void 0, t === E && h(t)
            }

            function g(e, t) {
                if (C = t, null == e || null == e.getGuildId()) return !1;
                let n = e.getGuildId();
                return null != n && (f[n] = void 0, n === E && h(n), !0)
            }

            function D() {
                h(c.FAVORITES)
            }
            class U extends l.default.Store {
                initialize() {
                    this.waitFor(o.default, s.default, r.default, d.default, a.default), this.syncWith([a.default], D)
                }
                getCategories(e) {
                    return null != e ? function(e) {
                        let t = f[e];
                        return null != t ? t : h(e)
                    }(e) : A
                }
            }
            U.displayName = "GuildCategoryStore";
            var R = new U(i.default, {
                CHANNEL_SELECT: function(e) {
                    let {
                        guildId: t
                    } = e;
                    if (E = null != t ? t : null, null == t || null != f[t]) return !1;
                    h(t)
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
                        of t) null != e && (f[e] = void 0, n = !0, E === e && h(e));
                    return n
                },
                GUILD_MEMBER_UPDATE: function(e) {
                    let {
                        guildId: t,
                        user: n
                    } = e;
                    if (r.default.getId() !== n.id) return !1;
                    f[t] = void 0, t === E && h(t)
                },
                CURRENT_USER_UPDATE: function() {
                    if (null == E) return !1;
                    h(E)
                },
                GUILD_ROLE_CREATE: N,
                GUILD_ROLE_UPDATE: N,
                GUILD_ROLE_DELETE: N,
                IMPERSONATE_UPDATE: N,
                IMPERSONATE_STOP: N,
                VOICE_CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return null == t && null != C ? g(d.default.getChannel(C), null) : g(d.default.getChannel(t), t)
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
                        return r.default.getSessionId() !== l ? e : g(d.default.getChannel(n), n) || e
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
                    return A
                },
                default: function() {
                    return T
                }
            });
            var l = n("37983"),
                i = n("884691"),
                u = n("414456"),
                a = n.n(u),
                r = n("819855"),
                d = n("77078"),
                o = n("145131"),
                s = n("49111"),
                c = n("430098"),
                E = n("926622");
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
                        offsetX: u,
                        offsetY: d,
                        style: s
                    } = this.props;
                    return (0, l.jsx)(C, {
                        children: f => (0, l.jsx)(o.default.Child, {
                            grow: 0,
                            className: a(c.image, E.marginBottom40),
                            style: {
                                ...s,
                                width: n,
                                height: i,
                                marginLeft: u,
                                marginTop: d,
                                backgroundImage: "url(".concat((0, r.isThemeDark)(f) ? t : e, ")")
                            }
                        })
                    })
                }
            }
            let A = e => {
                let {
                    children: t,
                    className: n,
                    noteClassName: i,
                    note: u,
                    style: r
                } = e;
                return (0, l.jsxs)(o.default.Child, {
                    grow: 0,
                    direction: o.default.Direction.VERTICAL,
                    style: r,
                    children: [null != t && (0, l.jsx)(d.H, {
                        className: a(n, c.title),
                        children: t
                    }), null != u ? (0, l.jsx)("div", {
                        className: a(i, c.text, E.marginTop8),
                        children: u
                    }) : null]
                })
            };
            class T extends i.PureComponent {
                render() {
                    let {
                        children: e,
                        theme: t,
                        className: n,
                        style: i
                    } = this.props;
                    return (0, l.jsx)(f, {
                        value: t,
                        children: (0, l.jsx)(o.default, {
                            direction: o.default.Direction.VERTICAL,
                            align: o.default.Align.CENTER,
                            justify: o.default.Justify.CENTER,
                            className: a(c.wrapper, n),
                            style: i,
                            children: e
                        })
                    })
                }
            }
            T.Text = A, T.Image = _
        },
        109264: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                u = n("733154"),
                a = n("75196"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: u,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, a.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            className: u,
                            fill: i,
                            d: "M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z"
                        })
                    })
                }, u.ChatIcon)
        },
        368121: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                u = n("390300"),
                a = n("75196"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: u,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, a.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            className: u,
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                            "aria-hidden": !0
                        })
                    })
                }, u.VoiceNormalIcon)
        },
        228427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                u = n("287083"),
                a = n("75196"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: n = 32,
                        color: i = "currentColor",
                        ...u
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, a.default)(u),
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
                }, u.StageIcon)
        }
    }
]);