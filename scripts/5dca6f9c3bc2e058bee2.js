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
                    return f
                },
                ackChannel: function() {
                    return _
                },
                bulkAck: function() {
                    return o
                },
                localAck: function() {
                    return C
                },
                enableAutomaticAck: function() {
                    return T
                },
                disableAutomaticAck: function() {
                    return c
                },
                ackGuildFeature: function() {
                    return A
                },
                ackUserFeature: function() {
                    return I
                }
            });
            var l = n("249654"),
                u = n("913144"),
                a = n("401690"),
                i = n("233069"),
                r = n("42203"),
                d = n("245997"),
                s = n("697218"),
                E = n("49111");

            function f(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    l = arguments.length > 3 ? arguments[3] : void 0,
                    a = arguments.length > 4 ? arguments[4] : void 0;
                u.default.dispatch({
                    type: "CHANNEL_ACK",
                    channelId: e,
                    messageId: l,
                    immediate: t,
                    force: n,
                    context: E.CURRENT_APP_CONTEXT,
                    location: a
                })
            }

            function _(e) {
                e.isCategory() ? ! function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        l = r.default.getChannel(e);
                    if (null == l || null == l.guild_id) return;
                    let u = d.default.getCategories(l.guild_id);
                    if (null == u[e]) return;
                    let s = u[e].filter(e => {
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
                        E = [...s];
                    for (let e of (s.forEach(e => {
                            let t = a.default.getActiveJoinedThreadsForParent(l.guild_id, e);
                            for (let e in t) E.push(e)
                        }), E)) f(e, t, n)
                }(e.id, !0, !0) : e.isForumLikeChannel() ? f(e.id, !0, !0, l.default.fromTimestamp(Date.now())) : f(e.id, !0, !0)
            }

            function o(e) {
                u.default.dispatch({
                    type: "BULK_ACK",
                    channels: e,
                    context: E.CURRENT_APP_CONTEXT
                })
            }

            function C(e) {
                u.default.dispatch({
                    type: "CHANNEL_LOCAL_ACK",
                    channelId: e
                })
            }

            function T(e, t) {
                u.default.dispatch({
                    type: "ENABLE_AUTOMATIC_ACK",
                    channelId: e,
                    windowId: t
                })
            }

            function c(e, t) {
                u.default.dispatch({
                    type: "DISABLE_AUTOMATIC_ACK",
                    channelId: e,
                    windowId: t
                })
            }

            function A(e, t, n) {
                u.default.dispatch({
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
                null != l && u.default.dispatch({
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
                u = n("884691"),
                a = n("77078"),
                i = n("390236"),
                r = u.memo(function(e) {
                    var t, n, r, d;
                    let {
                        user: s,
                        size: E = a.AvatarSizes.SIZE_32,
                        animate: f = !1,
                        "aria-hidden": _ = !1,
                        ...o
                    } = e, C = u.useContext(i.default);
                    return (0, l.jsx)(a.Avatar, {
                        src: (t = s, n = (0, a.getAvatarSize)(E), r = f, d = C, t.getAvatarURL(d, n, r)),
                        size: E,
                        "aria-label": _ ? void 0 : s.username,
                        "aria-hidden": _,
                        ...o
                    })
                })
        },
        320954: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("917351"),
                u = n.n(l);

            function a(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
                return u(e).map(e => "null" === e.channel.id ? t[e.channel.id] : [e, t[e.channel.id]]).flattenDeep().filter(n).value()
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
                u = n("157186"),
                a = n("26989"),
                i = n("305961"),
                r = n("88093"),
                d = n("697218"),
                s = n("290182"),
                E = n("116320"),
                f = n("437825"),
                _ = n("972894"),
                o = n("446685"),
                C = n("978499"),
                T = n("617559"),
                c = n("213523"),
                A = n("593195"),
                I = n("361777"),
                L = n("497757"),
                N = n("109264"),
                S = n("991497"),
                h = n("393621"),
                D = n("905999"),
                O = n("660074"),
                U = n("223383"),
                g = n("45029"),
                R = n("990745"),
                G = n("190986"),
                P = n("721618"),
                p = n("733160"),
                M = n("990864"),
                H = n("274652"),
                m = n("357077"),
                v = n("922744"),
                y = n("841307"),
                F = n("745183"),
                x = n("620193"),
                B = n("368121"),
                V = n("944633"),
                w = n("468507"),
                Y = n("228427"),
                j = n("697468"),
                b = n("547896"),
                W = n("619911"),
                K = n("959097"),
                k = n("656038"),
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
                        if ((0, k.default)(e)) return Z.default.Messages.CHANNEL_TOOLTIP_TEXT_LIMITED;
                        return Z.default.Messages.CHANNEL_TOOLTIP_TEXT;
                    case z.ChannelTypes.GUILD_FORUM:
                        let u = e.isMediaChannel();
                        if (e.isNSFW()) return u ? Z.default.Messages.CHANNEL_TOOLTIP_MEDIA_NSFW : Z.default.Messages.CHANNEL_TOOLTIP_FORUM_NSFW;
                        if ((0, k.default)(e)) return u ? Z.default.Messages.CHANNEL_TOOLTIP_MEDIA_LIMITED : Z.default.Messages.CHANNEL_TOOLTIP_FORUM_LIMITED;
                        return u ? Z.default.Messages.MEDIA_CHANNEL : Z.default.Messages.FORUM;
                    case z.ChannelTypes.GUILD_MEDIA:
                        if (e.isNSFW()) return Z.default.Messages.CHANNEL_TOOLTIP_MEDIA_NSFW;
                        if ((0, k.default)(e)) return Z.default.Messages.CHANNEL_TOOLTIP_MEDIA_LIMITED;
                        return Z.default.Messages.MEDIA_CHANNEL;
                    case z.ChannelTypes.GUILD_STAGE_VOICE:
                        if (n) return Z.default.Messages.CHANNEL_TOOLTIP_STAGE_LOCKED;
                        if ((0, k.default)(e)) return Z.default.Messages.CHANNEL_TOOLTIP_STAGE_LIMITED;
                        return Z.default.Messages.CHANNEL_TOOLTIP_STAGE;
                    case z.ChannelTypes.GUILD_VOICE:
                        if (n) return Z.default.Messages.CHANNEL_TOOLTIP_VOICE_LOCKED;
                        if ((0, k.default)(e)) return Z.default.Messages.CHANNEL_TOOLTIP_VOICE_LIMITED;
                        return Z.default.Messages.CHANNEL_TOOLTIP_VOICE;
                    case z.ChannelTypes.GUILD_ANNOUNCEMENT:
                        if (e.isNSFW()) return Z.default.Messages.CHANNEL_TOOLTIP_ANNOUNCEMENTS_NSFW;
                        if ((0, k.default)(e)) return Z.default.Messages.CHANNEL_TOOLTIP_ANNOUNCEMENTS_LIMITED;
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
                let el = (0, u.shouldShowMembershipVerificationGate)(null === (n = t) || void 0 === n ? void 0 : n.id, [i.default, r.default, d.default, a.default]),
                    eu = null != t && (0, l.canSeeGuildHome)(null === (Z = t) || void 0 === Z ? void 0 : Z.id);
                if ((null == e ? void 0 : e.id) === (null === (q = t) || void 0 === q ? void 0 : q.rulesChannelId)) return c.default;
                switch (e.type) {
                    case z.ChannelTypes.GUILD_ANNOUNCEMENT:
                        if (et) {
                            if (e.isNSFW()) return m.default;
                            if ((0, k.default)(e)) return y.default;
                            else return s.default
                        }
                        if (e.isNSFW()) return H.default;
                        if ((0, k.default)(e)) return M.default;
                        return p.default;
                    case z.ChannelTypes.GUILD_STORE:
                        return b.default;
                    case z.ChannelTypes.DM:
                    case z.ChannelTypes.GROUP_DM:
                        return E.default;
                    case z.ChannelTypes.PRIVATE_THREAD:
                        return F.default;
                    case z.ChannelTypes.ANNOUNCEMENT_THREAD:
                    case z.ChannelTypes.PUBLIC_THREAD:
                        if (e.isNSFW()) return v.default;
                        if (e.isForumPost()) return O.default;
                        else return K.default;
                    case z.ChannelTypes.GUILD_TEXT:
                        if (et) {
                            if (e.isNSFW()) return v.default;
                            if ((0, k.default)(e)) return F.default;
                            else return K.default
                        }
                        if (e.isNSFW()) return L.default;
                        if ((0, k.default)(e)) return I.default;
                        return A.default;
                    case z.ChannelTypes.GUILD_FORUM:
                        let ea = e.isMediaChannel();
                        if (e.isNSFW()) return ea ? P.default : D.default;
                        if ((0, k.default)(e)) return ea ? G.default : h.default;
                        else return ea ? R.default : S.default;
                    case z.ChannelTypes.GUILD_MEDIA:
                        if (e.isNSFW()) return P.default;
                        if ((0, k.default)(e)) return G.default;
                        else return R.default;
                    case z.ChannelTypes.GUILD_STAGE_VOICE:
                        if (el) return (0, k.default)(e) ? g.default : j.default;
                        if (J) return g.default;
                        if ((0, k.default)(e)) return j.default;
                        else return Y.default;
                    case z.ChannelTypes.GUILD_VOICE:
                        if (en) return N.default;
                        if (e.isNSFW()) return w.default;
                        if (ee) return W.default;
                        if (el) {
                            if ((0, k.default)(e)) return g.default;
                            return $ ? _.default : V.default
                        }
                        if (J) return g.default;
                        if ((0, k.default)(e)) return $ ? _.default : V.default;
                        else return $ ? f.default : B.default;
                    case z.ChannelTypes.GUILD_DIRECTORY:
                        return T.default;
                    case z.ChannelTypes.GUILD_CATEGORY:
                        return C.default;
                    default:
                        if (X.StaticChannelIds.has(e.id)) {
                            if (e.id === X.StaticChannelId.GUILD_HOME || e.id === X.StaticChannelId.SERVER_GUIDE) {
                                if (eu) return U.default;
                                return x.default
                            }
                            if (e.id === X.StaticChannelId.CHANNEL_BROWSER || e.id === X.StaticChannelId.CUSTOMIZE_COMMUNITY) return o.default
                        }
                        return null
                }
            }

            function J(e) {
                switch (e) {
                    case z.ChannelTypes.GUILD_ANNOUNCEMENT:
                        return p.default;
                    case z.ChannelTypes.GUILD_STORE:
                        return b.default;
                    case z.ChannelTypes.DM:
                    case z.ChannelTypes.GROUP_DM:
                        return E.default;
                    case z.ChannelTypes.PRIVATE_THREAD:
                        return F.default;
                    case z.ChannelTypes.ANNOUNCEMENT_THREAD:
                    case z.ChannelTypes.PUBLIC_THREAD:
                        return K.default;
                    case z.ChannelTypes.GUILD_TEXT:
                    case z.ChannelTypes.GUILD_FORUM:
                    case z.ChannelTypes.GUILD_MEDIA:
                        return A.default;
                    case z.ChannelTypes.GUILD_STAGE_VOICE:
                        return Y.default;
                    case z.ChannelTypes.GUILD_VOICE:
                        return B.default;
                    case z.ChannelTypes.GUILD_CATEGORY:
                        return C.default;
                    default:
                        return null
                }
            }
        },
        143909: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var l = n("37983"),
                u = n("884691"),
                a = n("414456"),
                i = n.n(a),
                r = n("446674"),
                d = n("551042"),
                s = n("77078"),
                E = n("87657"),
                f = n("812204"),
                _ = n("685665"),
                o = n("679653"),
                C = n("419830"),
                T = n("123561"),
                c = n("161778"),
                A = n("233069"),
                I = n("27618"),
                L = n("162771"),
                N = n("697218"),
                S = n("941886"),
                h = n("810567"),
                D = n("904276"),
                O = n("875436"),
                U = n("449008"),
                g = n("16002"),
                R = n("782340"),
                G = n("827916"),
                P = n("855143"),
                p = n("934516");

            function M(e) {
                let {
                    channel: t,
                    ChannelIcon: n,
                    selected: u,
                    onClick: a
                } = e, i = (0, o.default)(t);
                return (0, l.jsxs)(s.Clickable, {
                    className: G.channelRow,
                    onClick: () => a(t.id),
                    children: [u ? (0, l.jsx)(O.default, {
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

            function H(e) {
                let {
                    guildId: t,
                    selectedChannelId: n,
                    onSelectChannelId: a
                } = e, {
                    guildChannels: d
                } = (0, r.useStateFromStoresObject)([T.default], () => T.default.getGuildWithoutChangingCommunityRows(t)), E = u.useMemo(() => {
                    let e = [];
                    return d.forEachChannel(t => {
                        ((0, A.isGuildSelectableChannelType)(t.type) || (0, A.isGuildVocalChannelType)(t.type)) && e.push(t)
                    }), e
                }, [d]);
                return 0 === E.length ? null : (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("div", {
                        className: i(G.divider, G.bottomDivider)
                    }), (0, l.jsx)(s.Text, {
                        variant: "eyebrow",
                        color: "interactive-normal",
                        className: G.contentPadding,
                        children: R.default.Messages.CLIP_SHARE_SELECT_CHANNEL
                    }), (0, l.jsx)(s.List, {
                        sections: [E.length],
                        sectionHeight: 0,
                        renderRow: e => {
                            let {
                                section: t,
                                row: u
                            } = e;
                            if (t > 0) return null;
                            let i = E[u],
                                r = (0, C.getChannelIconComponent)(i);
                            return null == r ? null : (0, l.jsx)(M, {
                                channel: i,
                                ChannelIcon: r,
                                selected: n === i.id,
                                onClick: a
                            }, i.id)
                        },
                        rowHeight: (e, t) => {
                            if (e > 0) return 0;
                            let n = E[t];
                            return null != n ? 56 : 0
                        },
                        renderSection: () => null,
                        className: i(G.channelList, G.contentPadding),
                        fade: !0
                    })]
                })
            }

            function m(e) {
                let {
                    friends: t,
                    searchQuery: n
                } = e, a = u.useMemo(() => 0 === n.length ? t : t.filter(e => e.username.toLowerCase().includes(n.toLowerCase())), [t, n]), d = (0, r.useStateFromStores)([c.default], () => c.default.theme);
                return 0 === a.length ? (0, l.jsxs)(S.default, {
                    theme: d,
                    className: G.emptyStateContainer,
                    children: [(0, l.jsx)(S.default.Image, {
                        width: 415,
                        height: 75,
                        lightSrc: p,
                        darkSrc: P
                    }), (0, l.jsx)(S.default.Text, {
                        note: R.default.Messages.FRIEND_REQUEST_NO_RESULTS_FOUND
                    })]
                }) : (0, l.jsx)(s.List, {
                    sections: [a.length],
                    sectionHeight: 0,
                    renderRow: e => {
                        let {
                            section: t,
                            row: n
                        } = e;
                        if (t > 0) return null;
                        let u = a[n],
                            i = a[n].username;
                        return (0, l.jsxs)("div", {
                            className: G.userRow,
                            children: [(0, l.jsx)(E.default, {
                                user: u
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
                        }, u.id)
                    },
                    rowHeight: (e, t) => {
                        if (e > 0) return 0;
                        let n = a[t];
                        return null != n ? 52 : 0
                    },
                    renderSection: () => null,
                    className: i(G.friendsList, G.contentPadding),
                    fade: !0
                })
            }

            function v(e) {
                let {
                    clip: t,
                    editMetadata: n,
                    transitionState: a,
                    onClose: E
                } = e, [o, C] = u.useState(""), [T, c] = u.useState(!1), [A, S] = u.useState(null), D = (0, r.useStateFromStoresArray)([I.default], () => I.default.getFriendIDs()), O = (0, r.useStateFromStoresArray)([N.default], () => D.map(e => N.default.getUser(e)).filter(U.isNotNullish), [D]), P = (0, r.useStateFromStores)([L.default], () => L.default.getLastSelectedGuildId()), {
                    analyticsLocations: p
                } = (0, _.default)(f.default.CLIPS_SHARE_MODAL);
                async function M() {
                    if (null != A) {
                        c(!0);
                        try {
                            await (0, g.shareClip)(t, {
                                channelId: A,
                                editMetadata: n,
                                analyticsLocations: p
                            }), d.closeAllModals()
                        } catch (e) {} finally {
                            c(!1)
                        }
                    }
                }
                return (0, l.jsxs)(s.ModalRoot, {
                    size: s.ModalSize.SMALL,
                    transitionState: a,
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
                        query: o,
                        onChange: C,
                        size: h.default.Sizes.MEDIUM,
                        onClear: function() {
                            C("")
                        },
                        placeholder: R.default.Messages.INVITE_SEARCH_FOR_FRIENDS
                    }), (0, l.jsx)("div", {
                        className: i(G.divider, G.topDivider)
                    }), (0, l.jsx)(m, {
                        searchQuery: o,
                        friends: O
                    }), null != P && (0, l.jsx)(H, {
                        guildId: P,
                        selectedChannelId: A,
                        onSelectChannelId: S
                    }), (0, l.jsxs)(s.ModalFooter, {
                        children: [(0, l.jsx)(s.Button, {
                            disabled: null == A,
                            submitting: T,
                            color: s.Button.Colors.BRAND,
                            onClick: M,
                            children: R.default.Messages.CLIPS_EDIT_SHARE_CLIP
                        }), (0, l.jsx)(s.Button, {
                            submitting: T,
                            look: s.ButtonLooks.LINK,
                            onClick: E,
                            color: s.ButtonColors.PRIMARY,
                            children: R.default.Messages.BACK
                        })]
                    })]
                })
            }
        },
        123561: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return j
                }
            });
            var l = n("917351"),
                u = n.n(l),
                a = n("446674"),
                i = n("913144"),
                r = n("191225"),
                d = n("203288"),
                s = n("398604"),
                E = n("401690"),
                f = n("755624"),
                _ = n("374363"),
                o = n("271938"),
                C = n("870691"),
                T = n("42203"),
                c = n("816092"),
                A = n("546463"),
                I = n("957255"),
                L = n("660478"),
                N = n("18494"),
                S = n("282109"),
                h = n("449008"),
                D = n("319839"),
                O = n("397336");
            let U = null,
                g = null,
                R = new D.default;

            function G() {
                let e = N.default.getChannelId(),
                    t = N.default.getVoiceChannelId();
                return U = e, g = t, R.clear()
            }

            function P(e) {
                let {
                    guild: {
                        id: t
                    }
                } = e;
                return R.clearGuildId(t)
            }

            function p(e) {
                let {
                    channel: {
                        guild_id: t
                    }
                } = e;
                return R.clearGuildId(t)
            }

            function M(e) {
                let {
                    guildId: t
                } = e;
                return R.clearGuildId(t)
            }

            function H(e) {
                let {
                    channelId: t
                } = e;
                return R.nonPositionalChannelIdUpdate(t)
            }

            function m() {
                return null != U && R.nonPositionalChannelIdUpdate(U)
            }

            function v(e) {
                let {
                    channel: t
                } = e;
                return R.nonPositionalChannelIdUpdate(t.id)
            }

            function y(e) {
                let {
                    id: t
                } = e;
                return R.nonPositionalChannelIdUpdate(t)
            }

            function F() {
                let e = N.default.getChannelId(),
                    t = N.default.getVoiceChannelId(),
                    n = U !== e || g !== t;
                return !!n && (u([U, g, e, t]).uniq().forEach(e => {
                    null != e && R.nonPositionalChannelIdUpdate(e) && (n = !0)
                }), U = e, g = t, !0)
            }

            function x(e) {
                let {
                    id: t
                } = e, n = T.default.getChannel(t);
                return null == n ? R.clearGuildId(t) : R.clearGuildId(n.guild_id)
            }

            function B(e) {
                let {
                    guildId: t
                } = e;
                return R.clearGuildId(t)
            }

            function V() {
                return R.updateSubtitles()
            }

            function w(e) {
                let {
                    guildScheduledEvent: t
                } = e;
                return R.updateSubtitles(t.guild_id)
            }
            class Y extends a.default.Store {
                initialize() {
                    this.waitFor(E.default, o.default, C.default, T.default, c.default, r.default, A.default, d.default, s.default, f.default, I.default, L.default, N.default, S.default, _.default)
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
            Y.displayName = "ChannelListStore";
            var j = new Y(i.default, {
                APPLICATION_FETCH_FAIL: V,
                APPLICATION_FETCH_SUCCESS: V,
                APPLICATION_FETCH: V,
                APPLICATIONS_FETCH_FAIL: V,
                APPLICATIONS_FETCH_SUCCESS: V,
                APPLICATIONS_FETCH: V,
                BACKGROUND_SYNC: G,
                BULK_ACK: function(e) {
                    let {
                        channels: t
                    } = e, n = !1;
                    return u(t).map(e => {
                        var t;
                        return null === (t = T.default.getChannel(e.channelId)) || void 0 === t ? void 0 : t.guild_id
                    }).filter(h.isNotNullish).uniq().forEach(e => {
                        R.clearGuildId(e) && (n = !0)
                    }), n
                },
                CACHE_LOADED_LAZY: G,
                CATEGORY_COLLAPSE_ALL: M,
                CATEGORY_COLLAPSE: x,
                CATEGORY_EXPAND_ALL: M,
                CATEGORY_EXPAND: x,
                CHANNEL_ACK: H,
                CHANNEL_CREATE: p,
                CHANNEL_COLLAPSE: function(e) {
                    var t;
                    let {
                        channelId: n
                    } = e;
                    return R.clearGuildId(null === (t = T.default.getChannel(n)) || void 0 === t ? void 0 : t.guild_id)
                },
                CHANNEL_DELETE: p,
                CHANNEL_LOCAL_ACK: H,
                CHANNEL_RTC_UPDATE_CHAT_OPEN: H,
                CHANNEL_SELECT: F,
                VOICE_CHANNEL_STATUS_UPDATE: function(e) {
                    let t = T.default.getBasicChannel(e.id);
                    if (null != t && null != t.guild_id) return R.clearGuildId(t.guild_id)
                },
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e, n = !1;
                    return u(t).map(e => e.guild_id).uniq().forEach(e => {
                        R.clearGuildId(e) && (n = !0)
                    }), n
                },
                CONNECTION_OPEN_SUPPLEMENTAL: V,
                CONNECTION_OPEN: G,
                CURRENT_USER_UPDATE: G,
                DECAY_READ_STATES: G,
                DEV_TOOLS_DESIGN_TOGGLE_SET: G,
                DISABLE_AUTOMATIC_ACK: H,
                DRAWER_CLOSE: m,
                DRAWER_OPEN: m,
                EMBEDDED_ACTIVITY_INBOUND_UPDATE: function(e) {
                    let {
                        guildId: t,
                        channelId: n
                    } = e;
                    return R.updateSubtitles(t, n)
                },
                EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: V,
                EMBEDDED_ACTIVITY_LAUNCH_START: function(e) {
                    V()
                },
                ENABLE_AUTOMATIC_ACK: H,
                FETCH_GUILD_EVENTS_FOR_GUILD: function(e) {
                    let {
                        guildId: t
                    } = e;
                    return R.updateSubtitles(t)
                },
                GAMES_DATABASE_FETCH_FAIL: V,
                GAMES_DATABASE_FETCH: V,
                GAMES_DATABASE_UPDATE: V,
                GUILD_APPLICATIONS_FETCH_SUCCESS: V,
                GUILD_CREATE: P,
                GUILD_DELETE: P,
                GUILD_MEMBER_UPDATE: function(e) {
                    let {
                        guildId: t,
                        user: n
                    } = e;
                    return o.default.getId() === n.id && R.clearGuildId(t)
                },
                GUILD_ROLE_CREATE: M,
                GUILD_ROLE_DELETE: M,
                GUILD_ROLE_UPDATE: M,
                GUILD_SCHEDULED_EVENT_CREATE: w,
                GUILD_SCHEDULED_EVENT_DELETE: w,
                GUILD_SCHEDULED_EVENT_UPDATE: w,
                GUILD_TOGGLE_COLLAPSE_MUTED: M,
                GUILD_UPDATE: P,
                GUILD_FEED_FETCH_SUCCESS: V,
                LOAD_MESSAGES_SUCCESS: H,
                MESSAGE_ACK: H,
                MESSAGE_CREATE: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return R.nonPositionalChannelIdUpdate(t)
                },
                MESSAGE_DELETE_BULK: H,
                MESSAGE_DELETE: H,
                OVERLAY_INITIALIZE: G,
                PASSIVE_UPDATE_V1: function(e) {
                    return null != e.channels && (R.clearGuildId(e.guildId), !0)
                },
                RESORT_THREADS: H,
                THREAD_CREATE: v,
                THREAD_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return R.nonPositionalChannelUpdate(t)
                },
                THREAD_LIST_SYNC: M,
                THREAD_MEMBER_UPDATE: y,
                THREAD_MEMBERS_UPDATE: y,
                THREAD_UPDATE: v,
                UPDATE_CHANNEL_DIMENSIONS: H,
                USER_GUILD_SETTINGS_CHANNEL_UPDATE: M,
                USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: M,
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
                USER_GUILD_SETTINGS_GUILD_UPDATE: M,
                USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: M,
                IMPERSONATE_STOP: M,
                IMPERSONATE_UPDATE: M,
                VOICE_CATEGORY_COLLAPSE: B,
                VOICE_CATEGORY_EXPAND: B,
                VOICE_CHANNEL_SELECT: F,
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e, n = F(), l = new Set;
                    for (let {
                            channelId: e,
                            oldChannelId: u
                        }
                        of t) null != u && !l.has(u) && (R.nonPositionalChannelIdUpdate(u) && (n = !0), l.add(u)), null != e && !l.has(e) && (R.nonPositionalChannelIdUpdate(e) && (n = !0), l.add(e));
                    return n
                },
                WINDOW_FOCUS: m,
                DISMISS_FAVORITE_SUGGESTION: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return R.nonPositionalChannelIdUpdate(t)
                },
                SET_RECENTLY_ACTIVE_COLLAPSED: G,
                BULK_CLEAR_RECENTS: M,
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    var t;
                    let {
                        settings: n
                    } = e;
                    if (n.type !== O.UserSettingsTypes.PRELOADED_USER_SETTINGS) return !1;
                    let l = null === (t = n.proto.guilds) || void 0 === t ? void 0 : t.guilds,
                        u = !1;
                    return null != l && Object.keys(l).forEach(e => {
                        let t = l[e].guildRecentsDismissedAt;
                        null != t && (u = R.updateRecentsCategory(e) || u)
                    }), u
                },
                GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: M,
                GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: M,
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
                    return T
                }
            });
            var l = n("446674"),
                u = n("913144"),
                a = n("449008"),
                i = n("42203"),
                r = n("341542"),
                d = n("923959"),
                s = n("49111");
            let E = {},
                f = 0;

            function _() {
                f += 1
            }

            function o(e) {
                if (null == E[e]) return !1;
                delete E[e]
            }
            class C extends l.default.PersistedStore {
                initialize(e) {
                    this.waitFor(i.default, r.default), this.removeChangeListener(_), this.addChangeListener(_), E = null != e ? e : {}
                }
                getState() {
                    return E
                }
                isCollapsed(e) {
                    return null != e && "null" !== e && !!E[e] && E[e]
                }
                getCollapsedCategories() {
                    return E
                }
                get version() {
                    return f
                }
            }
            C.displayName = "CategoryCollapseStore", C.persistKey = "collapsedCategories";
            var T = new C(u.default, {
                CONNECTION_OPEN: function(e) {
                    for (let t of (!e.userGuildSettings.partial && (E = {}), e.userGuildSettings.entries))
                        if (null != t.channel_overrides)
                            for (let e of t.channel_overrides) e.collapsed ? E[e.channel_id] = !0 : delete E[e.channel_id]
                },
                USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
                    let {
                        userGuildSettings: t
                    } = e, n = new Set(t.map(e => e.guild_id).filter(a.isNotNullish));
                    for (let e in E) {
                        let t = i.default.getChannel(e);
                        null != t && null != t.guild_id && n.has(t.guild_id) && delete E[t.id]
                    }
                    for (let e of t)
                        for (let t of e.channel_overrides) t.collapsed && (E[t.channel_id] = !0)
                },
                CATEGORY_COLLAPSE: function(e) {
                    let {
                        id: t
                    } = e;
                    if (E[t]) return !1;
                    E[t] = !0
                },
                CATEGORY_EXPAND: function(e) {
                    let {
                        id: t
                    } = e;
                    return o(t)
                },
                CATEGORY_COLLAPSE_ALL: function(e) {
                    let {
                        guildId: t
                    } = e;
                    d.default.getChannels(t)[s.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                        let {
                            channel: t
                        } = e;
                        "null" !== t.id && (E[t.id] = !0)
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
                        delete E[t.id]
                    })
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: {
                            id: t
                        }
                    } = e;
                    return o(t)
                }
            })
        },
        245997: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var l = n("446674"),
                u = n("913144"),
                a = n("320954"),
                i = n("379881"),
                r = n("271938"),
                d = n("42203"),
                s = n("923959"),
                E = n("305961"),
                f = n("49111");
            let _ = null,
                o = {},
                C = null;

            function T() {
                return {
                    _categories: [],
                    null: []
                }
            }
            let c = T();

            function A(e, t) {
                e.index = t
            }

            function I(e) {
                let t = s.default.getChannels(e),
                    n = T(),
                    l = e => {
                        var t;
                        let {
                            channel: l
                        } = e, u = null !== (t = n[null != l.parent_id ? l.parent_id : "null"]) && void 0 !== t ? t : n.null;
                        u.push({
                            channel: l,
                            index: -1
                        })
                    };
                return t[f.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                    let {
                        channel: t
                    } = e;
                    n._categories.push({
                        channel: t,
                        index: -1
                    }), n[t.id] = []
                }), t[0, s.GUILD_SELECTABLE_CHANNELS_KEY].forEach(l), t[0, s.GUILD_VOCAL_CHANNELS_KEY].forEach(l), (0, a.default)(n._categories, n).forEach(A), o[e] = n, n
            }

            function L() {
                o = {}, null != _ && I(_)
            }

            function N(e) {
                let {
                    guild: {
                        id: t
                    }
                } = e;
                o[t] = void 0, _ === t && I(t)
            }

            function S(e) {
                let {
                    channel: {
                        guild_id: t
                    }
                } = e;
                if (null == t) return !1;
                o[t] = void 0, _ === t && I(t)
            }

            function h(e) {
                let {
                    guildId: t
                } = e;
                o[t] = void 0, t === _ && I(t)
            }

            function D(e, t) {
                if (C = t, null == e || null == e.getGuildId()) return !1;
                let n = e.getGuildId();
                return null != n && (o[n] = void 0, n === _ && I(n), !0)
            }

            function O() {
                I(f.FAVORITES)
            }
            class U extends l.default.Store {
                initialize() {
                    this.waitFor(s.default, E.default, r.default, d.default, i.default), this.syncWith([i.default], O)
                }
                getCategories(e) {
                    return null != e ? function(e) {
                        let t = o[e];
                        return null != t ? t : I(e)
                    }(e) : c
                }
            }
            U.displayName = "GuildCategoryStore";
            var g = new U(u.default, {
                CHANNEL_SELECT: function(e) {
                    let {
                        guildId: t
                    } = e;
                    if (_ = null != t ? t : null, null == t || null != o[t]) return !1;
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
                    delete o[t]
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
                        of t) null != e && (o[e] = void 0, n = !0, _ === e && I(e));
                    return n
                },
                GUILD_MEMBER_UPDATE: function(e) {
                    let {
                        guildId: t,
                        user: n
                    } = e;
                    if (r.default.getId() !== n.id) return !1;
                    o[t] = void 0, t === _ && I(t)
                },
                CURRENT_USER_UPDATE: function() {
                    if (null == _) return !1;
                    I(_)
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
                    return null == t && null != C ? D(d.default.getChannel(C), null) : D(d.default.getChannel(t), t)
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