(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["5506"], {
        666020: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                subscribeMembers: function() {
                    return r
                },
                unsubscribeMembers: function() {
                    return l
                },
                subscribeChannel: function() {
                    return o
                },
                subscribeChannelDimensions: function() {
                    return a
                }
            });
            var i = n("913144"),
                u = n("696605");

            function r(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
                    guildId: e,
                    userIds: t
                })
            }

            function l(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
                    guildId: e,
                    userIds: t
                })
            }

            function o(e, t, n) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_CHANNEL",
                    guildId: e,
                    channelId: t,
                    ranges: n
                })
            }

            function a(e) {
                let {
                    guildId: t,
                    channelId: n,
                    y: i,
                    height: r,
                    rowHeight: l
                } = e;

                function a(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return Math.max(0, Math.ceil(Math.ceil(e / l)) + t)
                }
                let s = [];

                function E(e) {
                    let t = e + (u.MINIMUM_RANGE - 1);
                    return s.push([e, t]), t + 1
                }
                let d = a(.5 * r),
                    c = a(i, -d),
                    I = a(i + r, d);
                for (c > 0 && (c = Math.max(E(0), c)), c = Math.floor(c / u.MINIMUM_RANGE) * u.MINIMUM_RANGE; c <= I;) c = E(c);
                o(t, n, s)
            }
        },
        750560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useSubscribeGuildMembers: function() {
                    return o
                }
            }), n("37983");
            var i = n("884691"),
                u = n("917351"),
                r = n.n(u);
            n("233736");
            var l = n("666020");

            function o(e) {
                i.useEffect(() => (r.forEach(e, (e, t) => (0, l.subscribeMembers)(t, e)), () => {
                    r.forEach(e, (e, t) => (0, l.unsubscribeMembers)(t, e))
                }), [e])
            }
        },
        526887: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ConfettiCannonContext: function() {
                    return E
                },
                ConfettiCannonContextProvider: function() {
                    return d
                }
            });
            var i = n("37983"),
                u = n("884691"),
                r = n("516555"),
                l = n("65597"),
                o = n("206230"),
                a = n("49111");
            let s = {
                    confettiCanvas: null,
                    cannon: null,
                    createConfetti: () => void 0,
                    createConfettiAt: () => void 0,
                    createMultipleConfetti: () => [],
                    createMultipleConfettiAt: () => [],
                    addClickListener: () => a.NOOP,
                    removeClickListener: a.NOOP
                },
                E = u.createContext(s);

            function d(e) {
                let {
                    children: t,
                    confettiCanvas: n,
                    spriteCanvas: a,
                    baseConfig: d,
                    addClickListener: c,
                    removeClickListener: I
                } = e, _ = (0, r.useConfettiCannon)(n, a), T = (0, l.default)([o.default], () => o.default.useReducedMotion), S = u.useMemo(() => T ? s : {
                    confettiCanvas: n,
                    cannon: _,
                    createConfetti: (e, t) => _.createConfetti({
                        ...d,
                        ...e
                    }, t),
                    createConfettiAt: (e, t, n, i) => _.createConfetti({
                        ...d,
                        position: {
                            type: "static",
                            value: {
                                x: e,
                                y: t
                            }
                        },
                        ...n
                    }, i),
                    createMultipleConfetti: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        return _.createMultipleConfetti({
                            ...d,
                            ...e
                        }, t, n)
                    },
                    createMultipleConfettiAt: function(e, t, n) {
                        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                            u = arguments.length > 4 ? arguments[4] : void 0;
                        return _.createMultipleConfetti({
                            ...d,
                            position: {
                                type: "static",
                                value: {
                                    x: e,
                                    y: t
                                }
                            },
                            ...n
                        }, i, u)
                    },
                    addClickListener: c,
                    removeClickListener: I
                }, [c, d, _, n, T, I]);
                return (0, i.jsx)(E.Provider, {
                    value: S,
                    children: t
                })
            }
        },
        929423: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveGuildIdentityChanges: function() {
                    return o
                },
                setCurrentGuild: function() {
                    return a
                },
                initGuildIdentitySettings: function() {
                    return s
                },
                closeGuildIdentitySettings: function() {
                    return E
                },
                resetAndCloseGuildIdentityForm: function() {
                    return d
                },
                setPendingAvatar: function() {
                    return c
                },
                setPendingBanner: function() {
                    return I
                },
                setPendingBio: function() {
                    return _
                },
                setPendingPronouns: function() {
                    return T
                },
                setPendingNickname: function() {
                    return S
                },
                setPendingThemeColors: function() {
                    return f
                },
                resetPendingMemberChanges: function() {
                    return N
                },
                resetPendingProfileChanges: function() {
                    return G
                },
                resetAllPending: function() {
                    return D
                },
                clearErrors: function() {
                    return C
                },
                setDisableSubmit: function() {
                    return L
                }
            });
            var i = n("872717"),
                u = n("913144"),
                r = n("54239"),
                l = n("49111");
            async function o(e, t) {
                let {
                    nick: n,
                    avatar: r
                } = t;
                if (null == e) throw Error("Need guildId");
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                });
                try {
                    let t = await i.default.patch({
                        url: l.Endpoints.SET_GUILD_MEMBER(e),
                        body: {
                            nick: n,
                            avatar: r
                        },
                        oldFormErrors: !0
                    });
                    return u.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
                    }), u.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildMember: t.body,
                        guildId: e
                    }), t
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.username) != null && (e.nick = e.username, delete e.username), u.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
                        errors: t.body
                    })
                }
            }

            function a(e) {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
                    guild: e
                })
            }

            function s(e, t) {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: e,
                    analyticsLocations: t
                })
            }

            function E() {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                }), (0, r.popLayer)()
            }

            function d() {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function c(e) {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: e
                })
            }

            function I(e) {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function _(e) {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: e
                })
            }

            function T(e) {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function S(e) {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: e
                })
            }

            function f(e) {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function N() {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function G() {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function D() {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function C() {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function L(e) {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        424562: function(e, t, n) {
            "use strict";
            let i, u, r, l, o, a, s, E, d;
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var c = n("446674"),
                I = n("913144"),
                _ = n("49111");
            let T = _.FormStates.CLOSED,
                S = {},
                f = !1;

            function N() {
                T = _.FormStates.CLOSED, S = {}, s = null, E = void 0, d = []
            }

            function G() {
                D(), C(), S = {}, T = _.FormStates.OPEN
            }

            function D() {
                i = void 0, o = void 0
            }

            function C() {
                u = void 0, r = void 0, l = void 0, a = void 0
            }
            class L extends c.default.Store {
                getFormState() {
                    return T
                }
                getErrors() {
                    return S
                }
                showNotice() {
                    return void 0 !== i || void 0 !== u || void 0 !== r || void 0 !== l || void 0 !== o || void 0 !== a
                }
                getPendingAvatar() {
                    return i
                }
                getPendingBanner() {
                    return u
                }
                getPendingBio() {
                    return r
                }
                getPendingNickname() {
                    return o
                }
                getPendingPronouns() {
                    return l
                }
                getPendingAccentColor() {
                    return o
                }
                getPendingThemeColors() {
                    return a
                }
                getAllPending() {
                    return {
                        pendingAvatar: i,
                        pendingBanner: u,
                        pendingBio: r,
                        pendingPronouns: l,
                        pendingNickname: o,
                        pendingThemeColors: a
                    }
                }
                getGuild() {
                    return s
                }
                getSource() {
                    return E
                }
                getAnalyticsLocations() {
                    return d
                }
                getIsDisableSubmit() {
                    return f
                }
            }
            L.displayName = "GuildIdentitySettingsStore";
            var v = new L(I.default, {
                GUILD_IDENTITY_SETTINGS_INIT: function(e) {
                    s = e.guild, T = _.FormStates.OPEN, S = {}, E = e.source, d = e.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: N,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    G(), N()
                },
                GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
                    s = e.guild, S = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
                    T = _.FormStates.SUBMITTING, S = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (T !== _.FormStates.SUBMITTING) return !1;
                    T = _.FormStates.OPEN, S = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_PROFILE_UPDATE_FAILURE: function(e) {
                    T = _.FormStates.OPEN, S = e.errors
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: function(e) {
                    let {
                        avatar: t
                    } = e;
                    i = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: function(e) {
                    let {
                        banner: t
                    } = e;
                    u = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(e) {
                    let {
                        bio: t
                    } = e;
                    r = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(e) {
                    let {
                        pronouns: t
                    } = e;
                    l = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(e) {
                    let {
                        nickname: t
                    } = e;
                    o = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(e) {
                    let {
                        themeColors: t
                    } = e;
                    a = t
                },
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: D,
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: C,
                GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: G,
                GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: G,
                GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
                    S = {}
                },
                GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(e) {
                    let {
                        disable: t
                    } = e;
                    f = t
                }
            })
        },
        933326: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("689988"),
                u = n("21121"),
                r = n("162771"),
                l = n("398604"),
                o = n("322224");
            let a = {},
                s = new Set,
                E = async e => {
                    let t = l.default.getGuildScheduledEventsForGuild(e);
                    if (0 !== t.length) {
                        if (!s.has(e)) try {
                            await o.default.getGuildEventsForCurrentUser(e), s.add(e)
                        } catch (e) {}
                    }
                };
            class d extends i.default {
                async getGuildEventUserCounts(e) {
                    if (!(null != a && Date.now() - a[e] < 18e5)) {
                        a[e] = Date.now();
                        try {
                            await o.default.fetchGuildEventsForGuild(e, !0)
                        } catch (e) {}
                    }
                }
                getGuildEventUsers(e, t) {
                    return o.default.fetchUsersForGuildEvent(e, t)
                }
                getGuildEventsForCurrentUser(e) {
                    return E(e)
                }
                handleConnectionOpen() {
                    s.clear(), a = {};
                    let e = (0, u.isInMainTabsExperiment)(),
                        t = r.default.getLastSelectedGuildId();
                    e && null != t && this.getGuildEventUserCounts(t)
                }
                handleGuildUnavailable(e) {
                    let {
                        guildId: t
                    } = e;
                    s.delete(t), delete a[t]
                }
                handleGuildDelete(e) {
                    let {
                        guild: t
                    } = e, n = t.id;
                    s.delete(n), delete a[n]
                }
                handleInviteResolveSuccess(e) {
                    var t;
                    let {
                        invite: n
                    } = e, i = n.guild_scheduled_event, u = null === (t = n.guild) || void 0 === t ? void 0 : t.id;
                    null != i && null != u && E(u)
                }
                handleChannelSelect(e) {
                    let {
                        guildId: t
                    } = e;
                    null != t && this.getGuildEventUserCounts(t)
                }
                constructor(...e) {
                    super(...e), this.actions = {
                        POST_CONNECTION_OPEN: () => this.handleConnectionOpen(),
                        GUILD_DELETE: e => this.handleGuildDelete(e),
                        GUILD_UNAVAILABLE: e => this.handleGuildUnavailable(e),
                        INVITE_RESOLVE_SUCCESS: e => this.handleInviteResolveSuccess(e),
                        CHANNEL_SELECT: e => this.handleChannelSelect(e)
                    }
                }
            }
            var c = new d
        },
        270161: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CREATE_GUILD_EVENT_CORE_PERMISSIONS: function() {
                    return l
                },
                CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: function() {
                    return o
                },
                CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: function() {
                    return a
                }
            });
            var i = n("316693"),
                u = n("923510"),
                r = n("49111");
            let l = r.Permissions.VIEW_CHANNEL,
                o = i.default.combine(l, r.Permissions.CONNECT),
                a = i.default.combine(l, u.MODERATE_STAGE_CHANNEL_PERMISSIONS)
        },
        598639: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("446674"),
                u = n("962199"),
                r = n("305961");

            function l(e, t) {
                return (0, i.useStateFromStoresObject)([r.default, u.default], () => {
                    let n = r.default.getGuild(e),
                        i = null != n;
                    return null == n && null != t && (n = u.default.getCachedGuildByEventId(t)), {
                        isMember: i,
                        guild: n
                    }
                }, [e, t])
            }
        },
        669195: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SHARE_EVENT_DETAILS_LINK: function() {
                    return i
                }
            });
            let i = e => {
                let {
                    guildId: t,
                    guildEventId: n
                } = e;
                return "https://discord.com/events/".concat(t, "/").concat(n)
            }
        },
        369404: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var i = n("37983");
            n("884691");
            var u = n("446674"),
                r = n("77078"),
                l = n("272030"),
                o = n("851387"),
                a = n("233322"),
                s = n("157186"),
                E = n("817963"),
                d = n("393414"),
                c = n("716214"),
                I = n("923959"),
                _ = n("305961"),
                T = n("957255"),
                S = n("599110"),
                f = n("306160"),
                N = n("322224"),
                G = n("152475"),
                D = n("613767"),
                C = n("822516"),
                L = n("669195"),
                v = n("745049"),
                g = n("49111"),
                p = n("782340");

            function M(e) {
                let {
                    guild: t,
                    channel: M,
                    guildScheduledEvent: P,
                    isActive: U,
                    rsvped: h,
                    recurrenceId: A,
                    onActionTaken: R
                } = e, {
                    scheduled_start_time: m,
                    id: O,
                    entity_type: y,
                    guild_id: b
                } = P, {
                    canManageGuildEvent: F
                } = (0, E.useManageResourcePermissions)(null != M ? M : t), V = F(P), Y = (0, G.default)(P), x = (0, D.useIsChannelPublic)(null == M ? void 0 : M.id, P.id), {
                    withinStartWindow: B
                } = (0, C.getEventTimeData)(m), k = (0, u.useStateFromStores)([T.default], () => (null == M ? !void 0 : !M.isGuildVocal()) || T.default.can(g.Permissions.CONNECT, M), [M]), H = (0, s.useShowMemberVerificationGate)(b);

                function w(e) {
                    e.stopPropagation(), h ? N.default.deleteRsvpForGuildEvent(O, b) : N.default.createRsvpForGuildEvent(O, b)
                }
                async function j(e) {
                    e.stopPropagation(), await o.default.joinGuild(b), _.default.addConditionalChangeListener(() => {
                        let t = _.default.getGuild(b);
                        return null == t || (!U && w(e), X(e), !1)
                    })
                }

                function X(e) {
                    e.stopPropagation();
                    let t = I.default.getDefaultChannel(b);
                    (0, r.closeAllModals)(), (0, d.transitionToGuild)(b, null == t ? void 0 : t.id)
                }
                return {
                    onDeleteClick: V ? function(e) {
                        e.stopPropagation(), V && !U && (0, r.openModal)(e => (0, i.jsx)(r.ConfirmModal, {
                            ...e,
                            header: p.default.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
                            confirmText: p.default.Messages.DELETE,
                            cancelText: p.default.Messages.CANCEL,
                            onConfirm: () => N.default.deleteGuildEvent(O, b),
                            children: (0, i.jsx)(r.Text, {
                                variant: "text-md/normal",
                                children: p.default.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY
                            })
                        }))
                    } : void 0,
                    onContextMenu: function(e) {
                        e.stopPropagation(), null != t && (0, l.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("110374").then(n.bind(n, "110374"));
                            return n => (0, i.jsx)(e, {
                                guildEventId: O,
                                recurrenceId: A,
                                channel: M,
                                guild: t,
                                ...n
                            })
                        })
                    },
                    onJoinClick: k || H ? function(e) {
                        if (e.stopPropagation(), H) {
                            null == R || R(), (0, a.openMemberVerificationModal)(b);
                            return
                        }(null == M ? void 0 : M.isGuildStageVoice()) ? ((0, c.connectAndOpen)(M), null == R || R()) : (null == M ? void 0 : M.isGuildVoice()) && (N.default.joinVoiceEvent(M.guild_id, M.id), null == R || R())
                    } : void 0,
                    onRsvpClick: w,
                    onStartClick: V && B ? function(e) {
                        e.stopPropagation(), (0, r.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("298843").then(n.bind(n, "298843"));
                            return t => (0, i.jsx)(e, {
                                ...t,
                                event: P,
                                onSuccess: R
                            })
                        })
                    } : void 0,
                    onInviteClick: function(e) {
                        if (e.stopPropagation(), null != t) {
                            if (!Y || !x) {
                                let e = (0, L.SHARE_EVENT_DETAILS_LINK)({
                                    guildId: b,
                                    guildEventId: O
                                });
                                (0, f.copy)(e), S.default.track(g.AnalyticEvents.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
                                    guild_id: b,
                                    guild_scheduled_event_id: O
                                });
                                return
                            }(0, r.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("310688").then(n.bind(n, "310688"));
                                return n => (0, i.jsx)(e, {
                                    ...n,
                                    guild: t,
                                    channel: M,
                                    guildScheduledEvent: P,
                                    source: g.InstantInviteSources.GUILD_EVENTS
                                })
                            })
                        }
                    },
                    onEndClick: V && y === v.GuildScheduledEventEntityTypes.EXTERNAL && U ? function(e) {
                        if (e.stopPropagation(), !V) return;
                        let t = () => {
                            N.default.endEvent(O, b), (0, r.closeAllModals)()
                        };
                        (0, r.openModal)(e => (0, i.jsx)(r.ConfirmModal, {
                            ...e,
                            header: p.default.Messages.END_EVENT,
                            confirmText: p.default.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
                            cancelText: p.default.Messages.CANCEL,
                            onConfirm: t,
                            children: (0, i.jsx)(r.Text, {
                                variant: "text-md/normal",
                                children: p.default.Messages.GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE
                            })
                        }))
                    } : void 0,
                    onJoinGuildClick: j,
                    onGoToGuildClick: X
                }
            }
        },
        922770: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("446674"),
                u = n("305961"),
                r = n("49111");

            function l(e) {
                return (0, i.useStateFromStores)([u.default], () => {
                    var t;
                    if (null == e) return !1;
                    let n = u.default.getGuild(e);
                    return null !== (t = null == n ? void 0 : n.hasFeature(r.GuildFeatures.HUB)) && void 0 !== t && t
                }, [e])
            }
        },
        817963: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useManageResourcePermissions: function() {
                    return T
                },
                getManageResourcePermissions: function() {
                    return S
                },
                useHasInventoryGuildSettingsPermission: function() {
                    return f
                }
            });
            var i = n("884691"),
                u = n("316693"),
                r = n("446674"),
                l = n("252931"),
                o = n("813006");
            n("923959");
            var a = n("957255"),
                s = n("697218");
            n("991170");
            var E = n("270161"),
                d = n("843455");
            let c = {
                    canCreateExpressions: !1,
                    canCreateGuildEvent: !1,
                    canManageAllExpressions: !1,
                    canManageAllEvents: !1,
                    canManageGuildExpression: () => !1,
                    canManageGuildEvent: () => !1
                },
                I = (e, t, n, i) => {
                    if (null == e) return !1;
                    if (n) return !0;
                    if ("creator_id" in e) return i && null != t && e.creator_id === t.id;
                    if ("userId" in e) return i && null != t && e.userId === t.id;
                    if ("user" in e) {
                        var u;
                        return i && null != t && (null === (u = e.user) || void 0 === u ? void 0 : u.id) === t.id
                    }
                    return !1
                },
                _ = e => {
                    if (null == e) return [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS];
                    let t = E.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
                    return e.isGuildStageVoice() ? t = E.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS : e.isGuildVoice() && (t = E.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS), [u.default.combine(t, d.Permissions.CREATE_EVENTS), u.default.combine(t, d.Permissions.MANAGE_EVENTS)]
                },
                T = e => {
                    let [t, n] = e instanceof o.default ? [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS] : _(e), [u, l, E, T] = (0, r.useStateFromStoresArray)([a.default], () => [a.default.can(d.Permissions.CREATE_GUILD_EXPRESSIONS, e), a.default.can(d.Permissions.MANAGE_GUILD_EXPRESSIONS, e), a.default.can(t, e), a.default.can(n, e)]), S = (0, r.useStateFromStores)([s.default], () => s.default.getCurrentUser()), f = i.useCallback(e => I(e, S, l, u), [u, l, S]), N = i.useCallback(e => I(e, S, T, E), [T, E, S]);
                    return null == e ? c : {
                        canCreateExpressions: u,
                        canCreateGuildEvent: E,
                        canManageAllExpressions: l,
                        canManageAllEvents: T,
                        canManageGuildExpression: f,
                        canManageGuildEvent: N
                    }
                },
                S = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.default,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.default,
                        [i, u] = e instanceof o.default ? [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS] : _(e),
                        r = t.can(d.Permissions.CREATE_GUILD_EXPRESSIONS, e),
                        l = t.can(d.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
                        E = t.can(i, e),
                        T = t.can(u, e),
                        S = n.getCurrentUser();
                    return null == e ? c : {
                        canCreateExpressions: r,
                        canCreateGuildEvent: E,
                        canManageAllExpressions: l,
                        canManageAllEvents: T,
                        canManageGuildExpression: e => I(e, S, l, r),
                        canManageGuildEvent: e => I(e, S, T, E)
                    }
                },
                f = e => {
                    let t = (0, r.useStateFromStores)([a.default], () => a.default.can(d.Permissions.MANAGE_GUILD, e)),
                        {
                            showSettingsToggle: n
                        } = (0, l.useInventoryGuildSettingsExperiment)({
                            guildId: null == e ? void 0 : e.id
                        });
                    return t && n
                }
        },
        38766: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("884691"),
                u = n("79112"),
                r = n("685665"),
                l = n("929423");
            n("424562");
            var o = n("49111"),
                a = n("397336");

            function s(e) {
                let {
                    guild: t,
                    scrollPosition: n,
                    analyticsLocation: s,
                    analyticsLocations: E,
                    openWithoutBackstack: d = !1
                } = e, {
                    analyticsLocations: c
                } = (0, r.default)(), I = (0, i.useCallback)(() => {
                    null != t && (0, l.initGuildIdentitySettings)(t, null != E ? E : c), u.default.open(o.UserSettingsSections.PROFILE_CUSTOMIZATION, null != t ? a.ProfileCustomizationSubsection.GUILD : a.ProfileCustomizationSubsection.USER_PROFILE, {
                        scrollPosition: n,
                        analyticsLocation: s,
                        analyticsLocations: E,
                        openWithoutBackstack: d
                    })
                }, [t, n, s, E, d, c]);
                return I
            }
        }
    }
]);