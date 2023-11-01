(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["2500"], {
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
                    return E
                },
                ackChannel: function() {
                    return f
                },
                bulkAck: function() {
                    return _
                },
                localAck: function() {
                    return c
                },
                enableAutomaticAck: function() {
                    return C
                },
                disableAutomaticAck: function() {
                    return T
                },
                ackGuildFeature: function() {
                    return A
                },
                ackUserFeature: function() {
                    return I
                }
            });
            var l = n("249654"),
                a = n("913144"),
                u = n("401690"),
                i = n("233069"),
                r = n("42203"),
                d = n("245997"),
                s = n("697218"),
                o = n("49111");

            function E(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    l = arguments.length > 3 ? arguments[3] : void 0,
                    u = arguments.length > 4 ? arguments[4] : void 0;
                a.default.dispatch({
                    type: "CHANNEL_ACK",
                    channelId: e,
                    messageId: l,
                    immediate: t,
                    force: n,
                    context: o.CURRENT_APP_CONTEXT,
                    location: u
                })
            }

            function f(e) {
                e.isCategory() ? ! function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        l = r.default.getChannel(e);
                    if (null == l || null == l.guild_id) return;
                    let a = d.default.getCategories(l.guild_id);
                    if (null == a[e]) return;
                    let s = a[e].filter(e => {
                            let {
                                channel: t
                            } = e;
                            return (0, i.isGuildReadableType)(t.type)
                        }).map(e => {
                            let {
                                channel: t
                            } = e;
                            return t.id
                        }),
                        o = [...s];
                    for (let e of (s.forEach(e => {
                            let t = u.default.getActiveJoinedThreadsForParent(l.guild_id, e);
                            for (let e in t) o.push(e)
                        }), o)) E(e, t, n)
                }(e.id, !0, !0) : e.isForumLikeChannel() ? E(e.id, !0, !0, l.default.fromTimestamp(Date.now())) : E(e.id, !0, !0)
            }

            function _(e) {
                a.default.dispatch({
                    type: "BULK_ACK",
                    channels: e,
                    context: o.CURRENT_APP_CONTEXT
                })
            }

            function c(e) {
                a.default.dispatch({
                    type: "CHANNEL_LOCAL_ACK",
                    channelId: e
                })
            }

            function C(e, t) {
                a.default.dispatch({
                    type: "ENABLE_AUTOMATIC_ACK",
                    channelId: e,
                    windowId: t
                })
            }

            function T(e, t) {
                a.default.dispatch({
                    type: "DISABLE_AUTOMATIC_ACK",
                    channelId: e,
                    windowId: t
                })
            }

            function A(e, t, n) {
                a.default.dispatch({
                    type: "GUILD_FEATURE_ACK",
                    id: e,
                    ackType: t,
                    ackedId: n,
                    local: !1
                })
            }

            function I(e, t) {
                var n;
                let l = null === (n = s.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                null != l && a.default.dispatch({
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
                a = n("884691"),
                u = n("77078"),
                i = n("390236"),
                r = a.memo(function(e) {
                    var t, n, r, d;
                    let {
                        user: s,
                        size: o = u.AvatarSizes.SIZE_32,
                        animate: E = !1,
                        "aria-hidden": f = !1,
                        ..._
                    } = e, c = a.useContext(i.default);
                    return (0, l.jsx)(u.Avatar, {
                        src: (t = s, n = (0, u.getAvatarSize)(o), r = E, d = c, t.getAvatarURL(d, n, r)),
                        size: o,
                        "aria-label": f ? void 0 : s.username,
                        "aria-hidden": f,
                        ..._
                    })
                })
        },
        320954: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("917351"),
                a = n.n(l);

            function u(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
                return a(e).map(e => "null" === e.channel.id ? t[e.channel.id] : [e, t[e.channel.id]]).flattenDeep().filter(n).value()
            }
        },
        419830: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getChannelIconTooltipText: function() {
                    return q
                },
                getChannelIconComponent: function() {
                    return Q
                },
                getSimpleChannelIconComponent: function() {
                    return J
                }
            });
            var l = n("677315"),
                a = n("157186"),
                u = n("26989"),
                i = n("305961"),
                r = n("88093"),
                d = n("697218"),
                s = n("290182"),
                o = n("116320"),
                E = n("437825"),
                f = n("972894"),
                _ = n("446685"),
                c = n("978499"),
                C = n("617559"),
                T = n("213523"),
                A = n("593195"),
                I = n("361777"),
                L = n("497757"),
                N = n("109264"),
                S = n("991497"),
                h = n("393621"),
                D = n("905999"),
                O = n("660074"),
                g = n("223383"),
                U = n("45029"),
                R = n("990745"),
                G = n("190986"),
                p = n("721618"),
                P = n("733160"),
                m = n("990864"),
                M = n("274652"),
                H = n("357077"),
                y = n("922744"),
                v = n("841307"),
                F = n("745183"),
                x = n("620193"),
                w = n("368121"),
                b = n("944633"),
                B = n("468507"),
                V = n("228427"),
                k = n("697468"),
                Y = n("547896"),
                j = n("619911"),
                W = n("959097"),
                K = n("656038"),
                X = n("724210"),
                z = n("49111"),
                Z = n("782340");

            function q(e, t, n, l) {
                if (null == e) return null;
                if (e.id === (null == t ? void 0 : t.rulesChannelId)) return Z.default.Messages.CHANNEL_TOOLTIP_RULES;
                switch (e.type) {
                    case z.ChannelTypes.GUILD_TEXT:
                        if (l) return Z.default.Messages.CHANNEL_TOOLTIP_TEXT_ACTIVE_THREADS;
                        if (e.isNSFW()) return Z.default.Messages.CHANNEL_TOOLTIP_TEXT_NSFW;
                        if ((0, K.default)(e)) return Z.default.Messages.CHANNEL_TOOLTIP_TEXT_LIMITED;
                        return Z.default.Messages.CHANNEL_TOOLTIP_TEXT;
                    case z.ChannelTypes.GUILD_FORUM:
                        let a = e.isMediaChannel();
                        if (e.isNSFW()) return a ? Z.default.Messages.CHANNEL_TOOLTIP_MEDIA_NSFW : Z.default.Messages.CHANNEL_TOOLTIP_FORUM_NSFW;
                        if ((0, K.default)(e)) return a ? Z.default.Messages.CHANNEL_TOOLTIP_MEDIA_LIMITED : Z.default.Messages.CHANNEL_TOOLTIP_FORUM_LIMITED;
                        return a ? Z.default.Messages.MEDIA_CHANNEL : Z.default.Messages.FORUM;
                    case z.ChannelTypes.GUILD_MEDIA:
                        if (e.isNSFW()) return Z.default.Messages.CHANNEL_TOOLTIP_MEDIA_NSFW;
                        if ((0, K.default)(e)) return Z.default.Messages.CHANNEL_TOOLTIP_MEDIA_LIMITED;
                        return Z.default.Messages.MEDIA_CHANNEL;
                    case z.ChannelTypes.GUILD_STAGE_VOICE:
                        if (n) return Z.default.Messages.CHANNEL_TOOLTIP_STAGE_LOCKED;
                        if ((0, K.default)(e)) return Z.default.Messages.CHANNEL_TOOLTIP_STAGE_LIMITED;
                        return Z.default.Messages.CHANNEL_TOOLTIP_STAGE;
                    case z.ChannelTypes.GUILD_VOICE:
                        if (n) return Z.default.Messages.CHANNEL_TOOLTIP_VOICE_LOCKED;
                        if ((0, K.default)(e)) return Z.default.Messages.CHANNEL_TOOLTIP_VOICE_LIMITED;
                        return Z.default.Messages.CHANNEL_TOOLTIP_VOICE;
                    case z.ChannelTypes.GUILD_ANNOUNCEMENT:
                        if (e.isNSFW()) return Z.default.Messages.CHANNEL_TOOLTIP_ANNOUNCEMENTS_NSFW;
                        if ((0, K.default)(e)) return Z.default.Messages.CHANNEL_TOOLTIP_ANNOUNCEMENTS_LIMITED;
                        return Z.default.Messages.CHANNEL_TOOLTIP_ANNOUNCEMENTS;
                    case z.ChannelTypes.GUILD_STORE:
                        return Z.default.Messages.CHANNEL_TOOLTIP_STORE;
                    case z.ChannelTypes.DM:
                        return Z.default.Messages.DM;
                    case z.ChannelTypes.GROUP_DM:
                        return Z.default.Messages.GROUP_DM;
                    case z.ChannelTypes.GUILD_DIRECTORY:
                        return Z.default.Messages.CHANNEL_TOOLTIP_DIRECTORY;
                    case z.ChannelTypes.PUBLIC_THREAD:
                        return Z.default.Messages.THREAD;
                    case z.ChannelTypes.PRIVATE_THREAD:
                        return Z.default.Messages.PRIVATE_THREAD;
                    default:
                        return null
                }
            }

            function Q(e, t) {
                var n, Z, q;
                let Q = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    {
                        locked: J = !1,
                        video: $ = !1,
                        stream: ee = !1,
                        hasActiveThreads: et = !1,
                        textFocused: en = !1
                    } = Q;
                if (null == e) return null;
                null == t && (t = i.default.getGuild(e.getGuildId()));
                let el = (0, a.shouldShowMembershipVerificationGate)(null === (n = t) || void 0 === n ? void 0 : n.id, [i.default, r.default, d.default, u.default]),
                    ea = null != t && (0, l.canSeeGuildHome)(null === (Z = t) || void 0 === Z ? void 0 : Z.id);
                if ((null == e ? void 0 : e.id) === (null === (q = t) || void 0 === q ? void 0 : q.rulesChannelId)) return T.default;
                switch (e.type) {
                    case z.ChannelTypes.GUILD_ANNOUNCEMENT:
                        if (et) {
                            if (e.isNSFW()) return H.default;
                            if ((0, K.default)(e)) return v.default;
                            else return s.default
                        }
                        if (e.isNSFW()) return M.default;
                        if ((0, K.default)(e)) return m.default;
                        return P.default;
                    case z.ChannelTypes.GUILD_STORE:
                        return Y.default;
                    case z.ChannelTypes.DM:
                    case z.ChannelTypes.GROUP_DM:
                        return o.default;
                    case z.ChannelTypes.PRIVATE_THREAD:
                        return F.default;
                    case z.ChannelTypes.ANNOUNCEMENT_THREAD:
                    case z.ChannelTypes.PUBLIC_THREAD:
                        if (e.isNSFW()) return y.default;
                        if (e.isForumPost()) return O.default;
                        else return W.default;
                    case z.ChannelTypes.GUILD_TEXT:
                        if (et) {
                            if (e.isNSFW()) return y.default;
                            if ((0, K.default)(e)) return F.default;
                            else return W.default
                        }
                        if (e.isNSFW()) return L.default;
                        if ((0, K.default)(e)) return I.default;
                        return A.default;
                    case z.ChannelTypes.GUILD_FORUM:
                        let eu = e.isMediaChannel();
                        if (e.isNSFW()) return eu ? p.default : D.default;
                        if ((0, K.default)(e)) return eu ? G.default : h.default;
                        else return eu ? R.default : S.default;
                    case z.ChannelTypes.GUILD_MEDIA:
                        if (e.isNSFW()) return p.default;
                        if ((0, K.default)(e)) return G.default;
                        else return R.default;
                    case z.ChannelTypes.GUILD_STAGE_VOICE:
                        if (el) return (0, K.default)(e) ? U.default : k.default;
                        if (J) return U.default;
                        if ((0, K.default)(e)) return k.default;
                        else return V.default;
                    case z.ChannelTypes.GUILD_VOICE:
                        if (en) return N.default;
                        if (e.isNSFW()) return B.default;
                        if (ee) return j.default;
                        if (el) {
                            if ((0, K.default)(e)) return U.default;
                            return $ ? f.default : b.default
                        }
                        if (J) return U.default;
                        if ((0, K.default)(e)) return $ ? f.default : b.default;
                        else return $ ? E.default : w.default;
                    case z.ChannelTypes.GUILD_DIRECTORY:
                        return C.default;
                    case z.ChannelTypes.GUILD_CATEGORY:
                        return c.default;
                    default:
                        if (X.StaticChannelIds.has(e.id)) {
                            if (e.id === X.StaticChannelId.GUILD_HOME || e.id === X.StaticChannelId.SERVER_GUIDE) {
                                if (ea) return g.default;
                                return x.default
                            }
                            if (e.id === X.StaticChannelId.CHANNEL_BROWSER || e.id === X.StaticChannelId.CUSTOMIZE_COMMUNITY) return _.default
                        }
                        return null
                }
            }

            function J(e) {
                switch (e) {
                    case z.ChannelTypes.GUILD_ANNOUNCEMENT:
                        return P.default;
                    case z.ChannelTypes.GUILD_STORE:
                        return Y.default;
                    case z.ChannelTypes.DM:
                    case z.ChannelTypes.GROUP_DM:
                        return o.default;
                    case z.ChannelTypes.PRIVATE_THREAD:
                        return F.default;
                    case z.ChannelTypes.ANNOUNCEMENT_THREAD:
                    case z.ChannelTypes.PUBLIC_THREAD:
                        return W.default;
                    case z.ChannelTypes.GUILD_TEXT:
                    case z.ChannelTypes.GUILD_FORUM:
                    case z.ChannelTypes.GUILD_MEDIA:
                        return A.default;
                    case z.ChannelTypes.GUILD_STAGE_VOICE:
                        return V.default;
                    case z.ChannelTypes.GUILD_VOICE:
                        return w.default;
                    case z.ChannelTypes.GUILD_CATEGORY:
                        return c.default;
                    default:
                        return null
                }
            }
        },
        143909: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            });
            var l = n("37983"),
                a = n("884691"),
                u = n("414456"),
                i = n.n(u),
                r = n("446674"),
                d = n("551042"),
                s = n("77078"),
                o = n("87657"),
                E = n("812204"),
                f = n("685665"),
                _ = n("679653"),
                c = n("419830"),
                C = n("123561"),
                T = n("161778"),
                A = n("233069"),
                I = n("27618"),
                L = n("162771"),
                N = n("697218"),
                S = n("941886"),
                h = n("810567"),
                D = n("904276"),
                O = n("875436"),
                g = n("449008"),
                U = n("16002"),
                R = n("782340"),
                G = n("827916"),
                p = n("855143"),
                P = n("934516");

            function m(e) {
                let {
                    channel: t,
                    ChannelIcon: n,
                    selected: a,
                    onClick: u
                } = e, i = (0, _.default)(t);
                return (0, l.jsxs)(s.Clickable, {
                    className: G.channelRow,
                    onClick: () => u(t.id),
                    children: [a ? (0, l.jsx)(O.default, {
                        className: G.radioIcon
                    }) : (0, l.jsx)(D.default, {
                        className: G.radioIcon
                    }), (0, l.jsx)(n, {
                        className: G.icon,
                        width: 16,
                        height: 16
                    }), (0, l.jsx)(s.Text, {
                        variant: "text-md/medium",
                        color: "interactive-active",
                        children: i
                    })]
                })
            }

            function M(e) {
                let {
                    guildId: t,
                    selectedChannelId: n,
                    onSelectChannelId: u
                } = e, {
                    guildChannels: d
                } = (0, r.useStateFromStoresObject)([C.default], () => C.default.getGuildWithoutChangingCommunityRows(t)), o = a.useMemo(() => {
                    let e = [];
                    return d.forEachChannel(t => {
                        ((0, A.isGuildSelectableChannelType)(t.type) || (0, A.isGuildVocalChannelType)(t.type)) && e.push(t)
                    }), e
                }, [d]);
                return 0 === o.length ? null : (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("div", {
                        className: i(G.divider, G.bottomDivider)
                    }), (0, l.jsx)(s.Text, {
                        variant: "eyebrow",
                        color: "interactive-normal",
                        className: G.contentPadding,
                        children: R.default.Messages.CLIP_SHARE_SELECT_CHANNEL
                    }), (0, l.jsx)(s.List, {
                        sections: [o.length],
                        sectionHeight: 0,
                        renderRow: e => {
                            let {
                                section: t,
                                row: a
                            } = e;
                            if (t > 0) return null;
                            let i = o[a],
                                r = (0, c.getChannelIconComponent)(i);
                            return null == r ? null : (0, l.jsx)(m, {
                                channel: i,
                                ChannelIcon: r,
                                selected: n === i.id,
                                onClick: u
                            }, i.id)
                        },
                        rowHeight: (e, t) => {
                            if (e > 0) return 0;
                            let n = o[t];
                            return null != n ? 56 : 0
                        },
                        renderSection: () => null,
                        className: i(G.channelList, G.contentPadding),
                        fade: !0
                    })]
                })
            }

            function H(e) {
                let {
                    friends: t,
                    searchQuery: n
                } = e, u = a.useMemo(() => 0 === n.length ? t : t.filter(e => e.username.toLowerCase().includes(n.toLowerCase())), [t, n]), d = (0, r.useStateFromStores)([T.default], () => T.default.theme);
                return 0 === u.length ? (0, l.jsxs)(S.default, {
                    theme: d,
                    className: G.emptyStateContainer,
                    children: [(0, l.jsx)(S.default.Image, {
                        width: 415,
                        height: 75,
                        lightSrc: P,
                        darkSrc: p
                    }), (0, l.jsx)(S.default.Text, {
                        note: R.default.Messages.FRIEND_REQUEST_NO_RESULTS_FOUND
                    })]
                }) : (0, l.jsx)(s.List, {
                    sections: [u.length],
                    sectionHeight: 0,
                    renderRow: e => {
                        let {
                            section: t,
                            row: n
                        } = e;
                        if (t > 0) return null;
                        let a = u[n],
                            i = u[n].username;
                        return (0, l.jsxs)("div", {
                            className: G.userRow,
                            children: [(0, l.jsx)(o.default, {
                                user: a
                            }), (0, l.jsx)(s.Text, {
                                className: G.username,
                                variant: "text-md/normal",
                                children: i
                            }), (0, l.jsx)(s.Button, {
                                className: G.friendShareButton,
                                look: s.ButtonLooks.OUTLINED,
                                size: s.ButtonSizes.SMALL,
                                color: s.ButtonColors.BRAND,
                                children: (0, l.jsx)(s.Text, {
                                    variant: "text-sm/medium",
                                    children: R.default.Messages.SHARE
                                })
                            })]
                        }, a.id)
                    },
                    rowHeight: (e, t) => {
                        if (e > 0) return 0;
                        let n = u[t];
                        return null != n ? 52 : 0
                    },
                    renderSection: () => null,
                    className: i(G.friendsList, G.contentPadding),
                    fade: !0
                })
            }

            function y(e) {
                let {
                    clip: t,
                    editMetadata: n,
                    transitionState: u,
                    onClose: o
                } = e, [_, c] = a.useState(""), [C, T] = a.useState(!1), [A, S] = a.useState(null), D = (0, r.useStateFromStoresArray)([I.default], () => I.default.getFriendIDs()), O = (0, r.useStateFromStoresArray)([N.default], () => D.map(e => N.default.getUser(e)).filter(g.isNotNullish), [D]), p = (0, r.useStateFromStores)([L.default], () => L.default.getLastSelectedGuildId()), {
                    analyticsLocations: P
                } = (0, f.default)(E.default.CLIPS_SHARE_MODAL);
                async function m() {
                    if (null != A) {
                        T(!0);
                        try {
                            await (0, U.shareClip)(t, {
                                channelId: A,
                                editMetadata: n,
                                analyticsLocations: P
                            }), d.closeAllModals()
                        } catch (e) {} finally {
                            T(!1)
                        }
                    }
                }
                return (0, l.jsxs)(s.ModalRoot, {
                    size: s.ModalSize.SMALL,
                    transitionState: u,
                    children: [(0, l.jsx)(s.Heading, {
                        className: i(G.title, G.contentPadding),
                        variant: "heading-lg/semibold",
                        color: "interactive-active",
                        children: R.default.Messages.CLIP_SHARE_MODAL_TITLE
                    }), (0, l.jsx)(s.Text, {
                        variant: "text-md/normal",
                        color: "text-normal",
                        className: i(G.subtitle, G.contentPadding),
                        children: R.default.Messages.CLIP_SHARE_MODAL_SUBTITLE
                    }), (0, l.jsx)(h.default, {
                        className: G.searchBar,
                        query: _,
                        onChange: c,
                        size: h.default.Sizes.MEDIUM,
                        onClear: function() {
                            c("")
                        },
                        placeholder: R.default.Messages.INVITE_SEARCH_FOR_FRIENDS
                    }), (0, l.jsx)("div", {
                        className: i(G.divider, G.topDivider)
                    }), (0, l.jsx)(H, {
                        searchQuery: _,
                        friends: O
                    }), null != p && (0, l.jsx)(M, {
                        guildId: p,
                        selectedChannelId: A,
                        onSelectChannelId: S
                    }), (0, l.jsxs)(s.ModalFooter, {
                        children: [(0, l.jsx)(s.Button, {
                            disabled: null == A,
                            submitting: C,
                            color: s.Button.Colors.BRAND,
                            onClick: m,
                            children: R.default.Messages.CLIPS_EDIT_SHARE_CLIP
                        }), (0, l.jsx)(s.Button, {
                            submitting: C,
                            look: s.ButtonLooks.LINK,
                            onClick: o,
                            color: s.ButtonColors.PRIMARY,
                            children: R.default.Messages.BACK
                        })]
                    })]
                })
            }
        },
        677315: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useGuildHomeExperiment: function() {
                    return E
                },
                canSeeGuildHome: function() {
                    return f
                },
                GuildFeedRenderSelectorExperiment: function() {
                    return _
                },
                GuildFeedRefreshButtonExperiment: function() {
                    return c
                },
                GuildHomeBadgeExperiment: function() {
                    return C
                },
                GuildHomeFeedbackExperiment: function() {
                    return T
                },
                GuildHomeDeprecationExperiment: function() {
                    return A
                }
            });
            var l = n("446674"),
                a = n("203288"),
                u = n("862205"),
                i = n("21121"),
                r = n("923959"),
                d = n("305961"),
                s = n("49111");

            function o(e, t, n) {
                let l = t.getChannels(e)[r.GUILD_SELECTABLE_CHANNELS_KEY].filter(t => {
                    let {
                        channel: l
                    } = t;
                    return !n.isChannelGated(e, l.id)
                });
                return l.length > 5
            }

            function E(e) {
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                let t = (0, l.useStateFromStores)([r.default, a.default], () => null != e && o(e.id, r.default, a.default));
                return !__OVERLAY__ && !!t && null != e && e.hasFeature(s.GuildFeatures.GUILD_HOME_DEPRECATION_OVERRIDE)
            }

            function f(e) {
                if (__OVERLAY__ || e === s.ME || e === s.FAVORITES || (0, i.isInMainTabsExperiment)()) return !1;
                let t = d.default.getGuild(e);
                return !!(null != t && o(e, r.default, a.default)) && t.hasFeature(s.GuildFeatures.GUILD_HOME_DEPRECATION_OVERRIDE)
            }
            let _ = (0, u.createExperiment)({
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
                c = (0, u.createExperiment)({
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
                C = (0, u.createExperiment)({
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
            (0, u.createExperiment)({
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
            }), (0, u.createExperiment)({
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
            let T = (0, u.createExperiment)({
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
                A = (0, u.createExperiment)({
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
                    return k
                }
            });
            var l = n("917351"),
                a = n.n(l),
                u = n("446674"),
                i = n("913144"),
                r = n("191225"),
                d = n("203288"),
                s = n("398604"),
                o = n("401690"),
                E = n("755624"),
                f = n("374363"),
                _ = n("271938"),
                c = n("870691"),
                C = n("42203"),
                T = n("816092"),
                A = n("546463"),
                I = n("957255"),
                L = n("660478"),
                N = n("18494"),
                S = n("282109"),
                h = n("449008"),
                D = n("319839"),
                O = n("397336");
            let g = null,
                U = null,
                R = new D.default;

            function G() {
                let e = N.default.getChannelId(),
                    t = N.default.getVoiceChannelId();
                return g = e, U = t, R.clear()
            }

            function p(e) {
                let {
                    guild: {
                        id: t
                    }
                } = e;
                return R.clearGuildId(t)
            }

            function P(e) {
                let {
                    channel: {
                        guild_id: t
                    }
                } = e;
                return R.clearGuildId(t)
            }

            function m(e) {
                let {
                    guildId: t
                } = e;
                return R.clearGuildId(t)
            }

            function M(e) {
                let {
                    channelId: t
                } = e;
                return R.nonPositionalChannelIdUpdate(t)
            }

            function H() {
                return null != g && R.nonPositionalChannelIdUpdate(g)
            }

            function y(e) {
                let {
                    channel: t
                } = e;
                return R.nonPositionalChannelIdUpdate(t.id)
            }

            function v(e) {
                let {
                    id: t
                } = e;
                return R.nonPositionalChannelIdUpdate(t)
            }

            function F() {
                let e = N.default.getChannelId(),
                    t = N.default.getVoiceChannelId(),
                    n = g !== e || U !== t;
                return !!n && (a([g, U, e, t]).uniq().forEach(e => {
                    null != e && R.nonPositionalChannelIdUpdate(e) && (n = !0)
                }), g = e, U = t, !0)
            }

            function x(e) {
                let {
                    id: t
                } = e, n = C.default.getChannel(t);
                return null == n ? R.clearGuildId(t) : R.clearGuildId(n.guild_id)
            }

            function w(e) {
                let {
                    guildId: t
                } = e;
                return R.clearGuildId(t)
            }

            function b() {
                return R.updateSubtitles()
            }

            function B(e) {
                let {
                    guildScheduledEvent: t
                } = e;
                return R.updateSubtitles(t.guild_id)
            }
            class V extends u.default.Store {
                initialize() {
                    this.waitFor(o.default, _.default, c.default, C.default, T.default, r.default, A.default, d.default, s.default, E.default, I.default, L.default, N.default, S.default, f.default)
                }
                getGuild(e, t) {
                    let n = R.getGuild(e, t);
                    return {
                        guildChannelsVersion: n.version,
                        guildChannels: n
                    }
                }
                getGuildWithoutChangingCommunityRows(e) {
                    let t = R.getGuildWithoutCommunityRows(e);
                    return {
                        guildChannelsVersion: t.version,
                        guildChannels: t
                    }
                }
                recentsChannelCount(e) {
                    if (null == e) return 0;
                    let t = R.getGuildWithoutCommunityRows(e),
                        n = t.getCategoryFromSection(t.recentsSectionNumber);
                    return n.getShownChannelIds().length
                }
            }
            V.displayName = "ChannelListStore";
            var k = new V(i.default, {
                APPLICATION_FETCH_FAIL: b,
                APPLICATION_FETCH_SUCCESS: b,
                APPLICATION_FETCH: b,
                APPLICATIONS_FETCH_FAIL: b,
                APPLICATIONS_FETCH_SUCCESS: b,
                APPLICATIONS_FETCH: b,
                BACKGROUND_SYNC: G,
                BULK_ACK: function(e) {
                    let {
                        channels: t
                    } = e, n = !1;
                    return a(t).map(e => {
                        var t;
                        return null === (t = C.default.getChannel(e.channelId)) || void 0 === t ? void 0 : t.guild_id
                    }).filter(h.isNotNullish).uniq().forEach(e => {
                        R.clearGuildId(e) && (n = !0)
                    }), n
                },
                CACHE_LOADED_LAZY: G,
                CATEGORY_COLLAPSE_ALL: m,
                CATEGORY_COLLAPSE: x,
                CATEGORY_EXPAND_ALL: m,
                CATEGORY_EXPAND: x,
                CHANNEL_ACK: M,
                CHANNEL_CREATE: P,
                CHANNEL_COLLAPSE: function(e) {
                    var t;
                    let {
                        channelId: n
                    } = e;
                    return R.clearGuildId(null === (t = C.default.getChannel(n)) || void 0 === t ? void 0 : t.guild_id)
                },
                CHANNEL_DELETE: P,
                CHANNEL_LOCAL_ACK: M,
                CHANNEL_RTC_UPDATE_CHAT_OPEN: M,
                CHANNEL_SELECT: F,
                VOICE_CHANNEL_STATUS_UPDATE: function(e) {
                    let t = C.default.getBasicChannel(e.id);
                    if (null != t && null != t.guild_id) return R.clearGuildId(t.guild_id)
                },
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e, n = !1;
                    return a(t).map(e => e.guild_id).uniq().forEach(e => {
                        R.clearGuildId(e) && (n = !0)
                    }), n
                },
                CONNECTION_OPEN_SUPPLEMENTAL: b,
                CONNECTION_OPEN: G,
                CURRENT_USER_UPDATE: G,
                DECAY_READ_STATES: G,
                DEV_TOOLS_DESIGN_TOGGLE_SET: G,
                DISABLE_AUTOMATIC_ACK: M,
                DRAWER_CLOSE: H,
                DRAWER_OPEN: H,
                EMBEDDED_ACTIVITY_INBOUND_UPDATE: function(e) {
                    let {
                        guildId: t,
                        channelId: n
                    } = e;
                    return R.updateSubtitles(t, n)
                },
                EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: b,
                EMBEDDED_ACTIVITY_LAUNCH_START: function(e) {
                    b()
                },
                ENABLE_AUTOMATIC_ACK: M,
                FETCH_GUILD_EVENTS_FOR_GUILD: function(e) {
                    let {
                        guildId: t
                    } = e;
                    return R.updateSubtitles(t)
                },
                GAMES_DATABASE_FETCH_FAIL: b,
                GAMES_DATABASE_FETCH: b,
                GAMES_DATABASE_UPDATE: b,
                GUILD_APPLICATIONS_FETCH_SUCCESS: b,
                GUILD_CREATE: p,
                GUILD_DELETE: p,
                GUILD_MEMBER_UPDATE: function(e) {
                    let {
                        guildId: t,
                        user: n
                    } = e;
                    return _.default.getId() === n.id && R.clearGuildId(t)
                },
                GUILD_ROLE_CREATE: m,
                GUILD_ROLE_DELETE: m,
                GUILD_ROLE_UPDATE: m,
                GUILD_SCHEDULED_EVENT_CREATE: B,
                GUILD_SCHEDULED_EVENT_DELETE: B,
                GUILD_SCHEDULED_EVENT_UPDATE: B,
                GUILD_TOGGLE_COLLAPSE_MUTED: m,
                GUILD_UPDATE: p,
                GUILD_FEED_FETCH_SUCCESS: b,
                LOAD_MESSAGES_SUCCESS: M,
                MESSAGE_ACK: M,
                MESSAGE_CREATE: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return R.nonPositionalChannelIdUpdate(t)
                },
                MESSAGE_DELETE_BULK: M,
                MESSAGE_DELETE: M,
                OVERLAY_INITIALIZE: G,
                PASSIVE_UPDATE_V1: function(e) {
                    return null != e.channels && (R.clearGuildId(e.guildId), !0)
                },
                RESORT_THREADS: M,
                THREAD_CREATE: y,
                THREAD_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return R.nonPositionalChannelUpdate(t)
                },
                THREAD_LIST_SYNC: m,
                THREAD_MEMBER_UPDATE: v,
                THREAD_MEMBERS_UPDATE: v,
                THREAD_UPDATE: y,
                UPDATE_CHANNEL_DIMENSIONS: M,
                USER_GUILD_SETTINGS_CHANNEL_UPDATE: m,
                USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: m,
                USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
                    let {
                        userGuildSettings: t
                    } = e;
                    t.forEach(e => {
                        let {
                            guild_id: t
                        } = e;
                        return R.clearGuildId(t)
                    })
                },
                USER_GUILD_SETTINGS_GUILD_UPDATE: m,
                USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: m,
                IMPERSONATE_STOP: m,
                IMPERSONATE_UPDATE: m,
                VOICE_CATEGORY_COLLAPSE: w,
                VOICE_CATEGORY_EXPAND: w,
                VOICE_CHANNEL_SELECT: F,
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e, n = F(), l = new Set;
                    for (let {
                            channelId: e,
                            oldChannelId: a
                        }
                        of t) null != a && !l.has(a) && (R.nonPositionalChannelIdUpdate(a) && (n = !0), l.add(a)), null != e && !l.has(e) && (R.nonPositionalChannelIdUpdate(e) && (n = !0), l.add(e));
                    return n
                },
                WINDOW_FOCUS: H,
                DISMISS_FAVORITE_SUGGESTION: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return R.nonPositionalChannelIdUpdate(t)
                },
                SET_RECENTLY_ACTIVE_COLLAPSED: G,
                BULK_CLEAR_RECENTS: m,
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    var t;
                    let {
                        settings: n
                    } = e;
                    if (n.type !== O.UserSettingsTypes.PRELOADED_USER_SETTINGS) return !1;
                    let l = null === (t = n.proto.guilds) || void 0 === t ? void 0 : t.guilds,
                        a = !1;
                    return null != l && Object.keys(l).forEach(e => {
                        let t = l[e].guildRecentsDismissedAt;
                        null != t && (a = R.updateRecentsCategory(e) || a)
                    }), a
                },
                GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: m,
                GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: m,
                UPDATE_CHANNEL_LIST_SUBTITLES: function(e) {
                    let {
                        guildId: t
                    } = e;
                    R.updateSubtitles(t)
                }
            })
        },
        870691: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var l = n("446674"),
                a = n("913144"),
                u = n("449008"),
                i = n("42203"),
                r = n("341542"),
                d = n("923959"),
                s = n("49111");
            let o = {},
                E = 0;

            function f() {
                E += 1
            }

            function _(e) {
                if (null == o[e]) return !1;
                delete o[e]
            }
            class c extends l.default.PersistedStore {
                initialize(e) {
                    this.waitFor(i.default, r.default), this.removeChangeListener(f), this.addChangeListener(f), o = null != e ? e : {}
                }
                getState() {
                    return o
                }
                isCollapsed(e) {
                    return null != e && "null" !== e && !!o[e] && o[e]
                }
                getCollapsedCategories() {
                    return o
                }
                get version() {
                    return E
                }
            }
            c.displayName = "CategoryCollapseStore", c.persistKey = "collapsedCategories";
            var C = new c(a.default, {
                CONNECTION_OPEN: function(e) {
                    for (let t of (!e.userGuildSettings.partial && (o = {}), e.userGuildSettings.entries))
                        if (null != t.channel_overrides)
                            for (let e of t.channel_overrides) e.collapsed ? o[e.channel_id] = !0 : delete o[e.channel_id]
                },
                USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
                    let {
                        userGuildSettings: t
                    } = e, n = new Set(t.map(e => e.guild_id).filter(u.isNotNullish));
                    for (let e in o) {
                        let t = i.default.getChannel(e);
                        null != t && null != t.guild_id && n.has(t.guild_id) && delete o[t.id]
                    }
                    for (let e of t)
                        for (let t of e.channel_overrides) t.collapsed && (o[t.channel_id] = !0)
                },
                CATEGORY_COLLAPSE: function(e) {
                    let {
                        id: t
                    } = e;
                    if (o[t]) return !1;
                    o[t] = !0
                },
                CATEGORY_EXPAND: function(e) {
                    let {
                        id: t
                    } = e;
                    return _(t)
                },
                CATEGORY_COLLAPSE_ALL: function(e) {
                    let {
                        guildId: t
                    } = e;
                    d.default.getChannels(t)[s.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                        let {
                            channel: t
                        } = e;
                        "null" !== t.id && (o[t.id] = !0)
                    })
                },
                CATEGORY_EXPAND_ALL: function(e) {
                    let {
                        guildId: t
                    } = e;
                    d.default.getChannels(t)[s.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                        let {
                            channel: t
                        } = e;
                        delete o[t.id]
                    })
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: {
                            id: t
                        }
                    } = e;
                    return _(t)
                }
            })
        },
        245997: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return U
                }
            });
            var l = n("446674"),
                a = n("913144"),
                u = n("320954"),
                i = n("379881"),
                r = n("271938"),
                d = n("42203"),
                s = n("923959"),
                o = n("305961"),
                E = n("49111");
            let f = null,
                _ = {},
                c = null;

            function C() {
                return {
                    _categories: [],
                    null: []
                }
            }
            let T = C();

            function A(e, t) {
                e.index = t
            }

            function I(e) {
                let t = s.default.getChannels(e),
                    n = C(),
                    l = e => {
                        var t;
                        let {
                            channel: l
                        } = e, a = null !== (t = n[null != l.parent_id ? l.parent_id : "null"]) && void 0 !== t ? t : n.null;
                        a.push({
                            channel: l,
                            index: -1
                        })
                    };
                return t[E.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                    let {
                        channel: t
                    } = e;
                    n._categories.push({
                        channel: t,
                        index: -1
                    }), n[t.id] = []
                }), t[0, s.GUILD_SELECTABLE_CHANNELS_KEY].forEach(l), t[0, s.GUILD_VOCAL_CHANNELS_KEY].forEach(l), (0, u.default)(n._categories, n).forEach(A), _[e] = n, n
            }

            function L() {
                _ = {}, null != f && I(f)
            }

            function N(e) {
                let {
                    guild: {
                        id: t
                    }
                } = e;
                _[t] = void 0, f === t && I(t)
            }

            function S(e) {
                let {
                    channel: {
                        guild_id: t
                    }
                } = e;
                if (null == t) return !1;
                _[t] = void 0, f === t && I(t)
            }

            function h(e) {
                let {
                    guildId: t
                } = e;
                _[t] = void 0, t === f && I(t)
            }

            function D(e, t) {
                if (c = t, null == e || null == e.getGuildId()) return !1;
                let n = e.getGuildId();
                return null != n && (_[n] = void 0, n === f && I(n), !0)
            }

            function O() {
                I(E.FAVORITES)
            }
            class g extends l.default.Store {
                initialize() {
                    this.waitFor(s.default, o.default, r.default, d.default, i.default), this.syncWith([i.default], O)
                }
                getCategories(e) {
                    return null != e ? function(e) {
                        let t = _[e];
                        return null != t ? t : I(e)
                    }(e) : T
                }
            }
            g.displayName = "GuildCategoryStore";
            var U = new g(a.default, {
                CHANNEL_SELECT: function(e) {
                    let {
                        guildId: t
                    } = e;
                    if (f = null != t ? t : null, null == t || null != _[t]) return !1;
                    I(t)
                },
                CONNECTION_OPEN: L,
                OVERLAY_INITIALIZE: L,
                CACHE_LOADED_LAZY: L,
                GUILD_CREATE: N,
                GUILD_UPDATE: N,
                GUILD_DELETE: function(e) {
                    let {
                        guild: {
                            id: t
                        }
                    } = e;
                    delete _[t]
                },
                CHANNEL_CREATE: S,
                CHANNEL_DELETE: S,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e, n = !1;
                    for (let {
                            guild_id: e
                        }
                        of t) null != e && (_[e] = void 0, n = !0, f === e && I(e));
                    return n
                },
                GUILD_MEMBER_UPDATE: function(e) {
                    let {
                        guildId: t,
                        user: n
                    } = e;
                    if (r.default.getId() !== n.id) return !1;
                    _[t] = void 0, t === f && I(t)
                },
                CURRENT_USER_UPDATE: function() {
                    if (null == f) return !1;
                    I(f)
                },
                GUILD_ROLE_CREATE: h,
                GUILD_ROLE_UPDATE: h,
                GUILD_ROLE_DELETE: h,
                IMPERSONATE_UPDATE: h,
                IMPERSONATE_STOP: h,
                VOICE_CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return null == t && null != c ? D(d.default.getChannel(c), null) : D(d.default.getChannel(t), t)
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
                        return r.default.getSessionId() !== l ? e : D(d.default.getChannel(n), n) || e
                    }, !1)
                }
            })
        }
    }
]);