(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["90563"], {
        666020: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                subscribeMembers: function() {
                    return l
                },
                unsubscribeMembers: function() {
                    return r
                },
                subscribeChannel: function() {
                    return a
                },
                subscribeChannelDimensions: function() {
                    return o
                }
            });
            var i = n("913144"),
                u = n("696605");

            function l(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
                    guildId: e,
                    userIds: t
                })
            }

            function r(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
                    guildId: e,
                    userIds: t
                })
            }

            function a(e, t, n) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_CHANNEL",
                    guildId: e,
                    channelId: t,
                    ranges: n
                })
            }

            function o(e) {
                let {
                    guildId: t,
                    channelId: n,
                    y: i,
                    height: l,
                    rowHeight: r
                } = e;

                function o(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return Math.max(0, Math.ceil(Math.ceil(e / r)) + t)
                }
                let s = [];

                function d(e) {
                    let t = e + (u.MINIMUM_RANGE - 1);
                    return s.push([e, t]), t + 1
                }
                let c = o(.5 * l),
                    E = o(i, -c),
                    I = o(i + l, c);
                for (E > 0 && (E = Math.max(d(0), E)), E = Math.floor(E / u.MINIMUM_RANGE) * u.MINIMUM_RANGE; E <= I;) E = d(E);
                a(t, n, s)
            }
        },
        504318: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PencilIcon: function() {
                    return r
                }
            });
            var i = n("920040");
            n("773670");
            var u = n("912557"),
                l = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = u.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
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
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "m13.957 5.457 4.586 4.586a1 1 0 0 0 1.414 0l1.379-1.379a2 2 0 0 0 0-2.828l-3.172-3.172a2 2 0 0 0-2.828 0l-1.379 1.379a1 1 0 0 0 0 1.414ZM2.111 20.156l.727-4.218a3 3 0 0 1 .835-1.611l7.87-7.87a1 1 0 0 1 1.414 0l4.586 4.586a1 1 0 0 1 0 1.414l-7.87 7.87a3 3 0 0 1-1.611.835l-4.218.727a1.5 1.5 0 0 1-1.733-1.733Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        424823: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlusSmallIcon: function() {
                    return r
                }
            });
            var i = n("920040");
            n("773670");
            var u = n("912557"),
                l = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = u.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
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
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        197801: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SettingsIcon: function() {
                    return r
                }
            });
            var i = n("920040");
            n("773670");
            var u = n("912557"),
                l = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = u.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
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
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M10.558 1.094c-.453.059-.705.532-.636.983.178 1.166-.187 2.202-.983 2.532-.796.33-1.787-.144-2.485-1.094-.27-.369-.783-.524-1.146-.246a11.065 11.065 0 0 0-2.04 2.04c-.277.362-.121.874.247 1.145.95.698 1.424 1.689 1.094 2.485-.33.796-1.365 1.161-2.532.983-.451-.07-.924.183-.983.636a11.102 11.102 0 0 0 0 2.884c.059.453.532.705.983.636 1.167-.178 2.202.188 2.532.983.33.796-.144 1.787-1.094 2.486-.368.27-.524.782-.246 1.145a11.064 11.064 0 0 0 2.04 2.04c.362.277.874.122 1.145-.247.698-.95 1.689-1.424 2.485-1.094.796.33 1.161 1.366.983 2.532-.07.452.183.924.636.983a11.1 11.1 0 0 0 2.884 0c.454-.06.706-.532.636-.983-.178-1.166.188-2.202.984-2.532.795-.33 1.786.144 2.485 1.094.27.368.782.524 1.145.246a11.066 11.066 0 0 0 2.04-2.04c.277-.362.122-.874-.247-1.145-.95-.698-1.424-1.689-1.094-2.485.33-.796 1.366-1.161 2.532-.983.451.07.924-.183.983-.636a11.102 11.102 0 0 0 0-2.884c-.059-.453-.532-.705-.983-.636-1.166.178-2.202-.187-2.532-.983-.33-.796.144-1.787 1.094-2.485.369-.271.524-.783.246-1.146a11.065 11.065 0 0 0-2.039-2.039c-.363-.278-.875-.122-1.145.246-.699.95-1.69 1.424-2.485 1.094-.796-.33-1.162-1.365-.983-2.532.069-.451-.183-.924-.637-.983a11.104 11.104 0 0 0-2.884 0ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        750560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useSubscribeGuildMembers: function() {
                    return a
                }
            }), n("920040");
            var i = n("773670"),
                u = n("427964"),
                l = n.n(u);
            n("708001");
            var r = n("666020");

            function a(e) {
                i.useEffect(() => (l.forEach(e, (e, t) => (0, r.subscribeMembers)(t, e)), () => {
                    l.forEach(e, (e, t) => (0, r.unsubscribeMembers)(t, e))
                }), [e])
            }
        },
        526887: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ConfettiCannonContext: function() {
                    return d
                },
                ConfettiCannonContextProvider: function() {
                    return c
                }
            });
            var i = n("920040"),
                u = n("773670"),
                l = n("641900"),
                r = n("744196"),
                a = n("206230"),
                o = n("49111");
            let s = {
                    confettiCanvas: null,
                    cannon: null,
                    createConfetti: () => void 0,
                    createConfettiAt: () => void 0,
                    createMultipleConfetti: () => [],
                    createMultipleConfettiAt: () => [],
                    addClickListener: () => o.NOOP,
                    removeClickListener: o.NOOP
                },
                d = u.createContext(s);

            function c(e) {
                let {
                    children: t,
                    confettiCanvas: n,
                    spriteCanvas: o,
                    baseConfig: c,
                    addClickListener: E,
                    removeClickListener: I
                } = e, f = (0, l.useConfettiCannon)(n, o), _ = (0, r.default)([a.default], () => a.default.useReducedMotion), T = u.useMemo(() => _ ? s : {
                    confettiCanvas: n,
                    cannon: f,
                    createConfetti: (e, t) => f.createConfetti({
                        ...c,
                        ...e
                    }, t),
                    createConfettiAt: (e, t, n, i) => f.createConfetti({
                        ...c,
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
                        return f.createMultipleConfetti({
                            ...c,
                            ...e
                        }, t, n)
                    },
                    createMultipleConfettiAt: function(e, t, n) {
                        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                            u = arguments.length > 4 ? arguments[4] : void 0;
                        return f.createMultipleConfetti({
                            ...c,
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
                    addClickListener: E,
                    removeClickListener: I
                }, [E, c, f, n, _, I]);
                return (0, i.jsx)(d.Provider, {
                    value: T,
                    children: t
                })
            }
        },
        929423: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveGuildIdentityChanges: function() {
                    return a
                },
                setCurrentGuild: function() {
                    return o
                },
                initGuildIdentitySettings: function() {
                    return s
                },
                closeGuildIdentitySettings: function() {
                    return d
                },
                resetAndCloseGuildIdentityForm: function() {
                    return c
                },
                setPendingAvatar: function() {
                    return E
                },
                setPendingBanner: function() {
                    return I
                },
                setPendingBio: function() {
                    return f
                },
                setPendingPronouns: function() {
                    return _
                },
                setPendingNickname: function() {
                    return T
                },
                setPendingThemeColors: function() {
                    return S
                },
                resetPendingMemberChanges: function() {
                    return N
                },
                resetPendingProfileChanges: function() {
                    return G
                },
                resetAllPending: function() {
                    return C
                },
                clearErrors: function() {
                    return v
                },
                setDisableSubmit: function() {
                    return L
                }
            });
            var i = n("990746"),
                u = n("913144"),
                l = n("54239"),
                r = n("49111");
            async function a(e, t) {
                let {
                    nick: n,
                    avatar: l
                } = t;
                if (null == e) throw Error("Need guildId");
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                });
                try {
                    let t = await i.default.patch({
                        url: r.Endpoints.SET_GUILD_MEMBER(e),
                        body: {
                            nick: n,
                            avatar: l
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

            function o(e) {
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

            function d() {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                }), (0, l.popLayer)()
            }

            function c() {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function E(e) {
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

            function f(e) {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: e
                })
            }

            function _(e) {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function T(e) {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: e
                })
            }

            function S(e) {
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

            function C() {
                u.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function v() {
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
            let i, u, l, r, a, o, s, d, c;
            n.r(t), n.d(t, {
                default: function() {
                    return D
                }
            });
            var E = n("498225"),
                I = n("913144"),
                f = n("49111");
            let _ = f.FormStates.CLOSED,
                T = {},
                S = !1;

            function N() {
                _ = f.FormStates.CLOSED, T = {}, s = null, d = void 0, c = []
            }

            function G() {
                C(), v(), T = {}, _ = f.FormStates.OPEN
            }

            function C() {
                i = void 0, a = void 0
            }

            function v() {
                u = void 0, l = void 0, r = void 0, o = void 0
            }
            class L extends E.default.Store {
                getFormState() {
                    return _
                }
                getErrors() {
                    return T
                }
                showNotice() {
                    return void 0 !== i || void 0 !== u || void 0 !== l || void 0 !== r || void 0 !== a || void 0 !== o
                }
                getPendingAvatar() {
                    return i
                }
                getPendingBanner() {
                    return u
                }
                getPendingBio() {
                    return l
                }
                getPendingNickname() {
                    return a
                }
                getPendingPronouns() {
                    return r
                }
                getPendingAccentColor() {
                    return a
                }
                getPendingThemeColors() {
                    return o
                }
                getAllPending() {
                    return {
                        pendingAvatar: i,
                        pendingBanner: u,
                        pendingBio: l,
                        pendingPronouns: r,
                        pendingNickname: a,
                        pendingThemeColors: o
                    }
                }
                getGuild() {
                    return s
                }
                getSource() {
                    return d
                }
                getAnalyticsLocations() {
                    return c
                }
                getIsDisableSubmit() {
                    return S
                }
            }
            L.displayName = "GuildIdentitySettingsStore";
            var D = new L(I.default, {
                GUILD_IDENTITY_SETTINGS_INIT: function(e) {
                    s = e.guild, _ = f.FormStates.OPEN, T = {}, d = e.source, c = e.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: N,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    G(), N()
                },
                GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
                    s = e.guild, T = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
                    _ = f.FormStates.SUBMITTING, T = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (_ !== f.FormStates.SUBMITTING) return !1;
                    _ = f.FormStates.OPEN, T = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_PROFILE_UPDATE_FAILURE: function(e) {
                    _ = f.FormStates.OPEN, T = e.errors
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
                    l = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(e) {
                    let {
                        pronouns: t
                    } = e;
                    r = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(e) {
                    let {
                        nickname: t
                    } = e;
                    a = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(e) {
                    let {
                        themeColors: t
                    } = e;
                    o = t
                },
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: C,
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: v,
                GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: G,
                GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: G,
                GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
                    T = {}
                },
                GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(e) {
                    let {
                        disable: t
                    } = e;
                    S = t
                }
            })
        },
        933326: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("689988"),
                u = n("21121"),
                l = n("162771"),
                r = n("398604"),
                a = n("322224");
            let o = {},
                s = new Set,
                d = async e => {
                    let t = r.default.getGuildScheduledEventsForGuild(e);
                    if (0 !== t.length) {
                        if (!s.has(e)) try {
                            await a.default.getGuildEventsForCurrentUser(e), s.add(e)
                        } catch (e) {}
                    }
                };
            class c extends i.default {
                async getGuildEventUserCounts(e) {
                    if (!(null != o && Date.now() - o[e] < 18e5)) {
                        o[e] = Date.now();
                        try {
                            await a.default.fetchGuildEventsForGuild(e, !0)
                        } catch (e) {}
                    }
                }
                getGuildEventUsers(e, t) {
                    return a.default.fetchUsersForGuildEvent(e, t)
                }
                getGuildEventsForCurrentUser(e) {
                    return d(e)
                }
                handleConnectionOpen() {
                    s.clear(), o = {};
                    let e = (0, u.isInMainTabsExperiment)(),
                        t = l.default.getLastSelectedGuildId();
                    e && null != t && this.getGuildEventUserCounts(t)
                }
                handleGuildUnavailable(e) {
                    let {
                        guildId: t
                    } = e;
                    s.delete(t), delete o[t]
                }
                handleGuildDelete(e) {
                    let {
                        guild: t
                    } = e, n = t.id;
                    s.delete(n), delete o[n]
                }
                handleInviteResolveSuccess(e) {
                    var t;
                    let {
                        invite: n
                    } = e, i = n.guild_scheduled_event, u = null === (t = n.guild) || void 0 === t ? void 0 : t.id;
                    null != i && null != u && d(u)
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
            var E = new c
        },
        270161: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CREATE_GUILD_EVENT_CORE_PERMISSIONS: function() {
                    return r
                },
                CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: function() {
                    return a
                },
                CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: function() {
                    return o
                }
            });
            var i = n("754013"),
                u = n("923510"),
                l = n("49111");
            let r = l.Permissions.VIEW_CHANNEL,
                a = i.default.combine(r, l.Permissions.CONNECT),
                o = i.default.combine(r, u.MODERATE_STAGE_CHANNEL_PERMISSIONS)
        },
        598639: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("498225"),
                u = n("962199"),
                l = n("305961");

            function r(e, t) {
                return (0, i.useStateFromStoresObject)([l.default, u.default], () => {
                    let n = l.default.getGuild(e),
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
                    return p
                }
            });
            var i = n("920040");
            n("773670");
            var u = n("498225"),
                l = n("77078"),
                r = n("272030"),
                a = n("851387"),
                o = n("233322"),
                s = n("157186"),
                d = n("817963"),
                c = n("393414"),
                E = n("716214"),
                I = n("923959"),
                f = n("305961"),
                _ = n("957255"),
                T = n("599110"),
                S = n("306160"),
                N = n("322224"),
                G = n("152475"),
                C = n("613767"),
                v = n("822516"),
                L = n("669195"),
                D = n("745049"),
                h = n("49111"),
                g = n("782340");

            function p(e) {
                let {
                    guild: t,
                    channel: p,
                    guildScheduledEvent: M,
                    isActive: R,
                    rsvped: P,
                    recurrenceId: U,
                    onActionTaken: A
                } = e, {
                    scheduled_start_time: m,
                    id: O,
                    entity_type: y,
                    guild_id: V
                } = M, {
                    canManageGuildEvent: x
                } = (0, d.useManageResourcePermissions)(null != p ? p : t), b = x(M), w = (0, G.default)(M), B = (0, C.useIsChannelPublic)(null == p ? void 0 : p.id, M.id), {
                    withinStartWindow: F
                } = (0, v.getEventTimeData)(m), H = (0, u.useStateFromStores)([_.default], () => (null == p ? !void 0 : !p.isGuildVocal()) || _.default.can(h.Permissions.CONNECT, p), [p]), Y = (0, s.useShowMemberVerificationGate)(V);

                function j(e) {
                    e.stopPropagation(), P ? N.default.deleteRsvpForGuildEvent(O, V) : N.default.createRsvpForGuildEvent(O, V)
                }
                async function k(e) {
                    e.stopPropagation(), await a.default.joinGuild(V), f.default.addConditionalChangeListener(() => {
                        let t = f.default.getGuild(V);
                        return null == t || (!R && j(e), Z(e), !1)
                    })
                }

                function Z(e) {
                    e.stopPropagation();
                    let t = I.default.getDefaultChannel(V);
                    (0, l.closeAllModals)(), (0, c.transitionToGuild)(V, null == t ? void 0 : t.id)
                }
                return {
                    onDeleteClick: b ? function(e) {
                        e.stopPropagation(), b && !R && (0, l.openModal)(e => (0, i.jsx)(l.ConfirmModal, {
                            ...e,
                            header: g.default.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
                            confirmText: g.default.Messages.DELETE,
                            cancelText: g.default.Messages.CANCEL,
                            onConfirm: () => N.default.deleteGuildEvent(O, V),
                            children: (0, i.jsx)(l.Text, {
                                variant: "text-md/normal",
                                children: g.default.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY
                            })
                        }))
                    } : void 0,
                    onContextMenu: function(e) {
                        e.stopPropagation(), null != t && (0, r.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("110374").then(n.bind(n, "110374"));
                            return n => (0, i.jsx)(e, {
                                guildEventId: O,
                                recurrenceId: U,
                                channel: p,
                                guild: t,
                                ...n
                            })
                        })
                    },
                    onJoinClick: H || Y ? function(e) {
                        if (e.stopPropagation(), Y) {
                            null == A || A(), (0, o.openMemberVerificationModal)(V);
                            return
                        }(null == p ? void 0 : p.isGuildStageVoice()) ? ((0, E.connectAndOpen)(p), null == A || A()) : (null == p ? void 0 : p.isGuildVoice()) && (N.default.joinVoiceEvent(p.guild_id, p.id), null == A || A())
                    } : void 0,
                    onRsvpClick: j,
                    onStartClick: b && F ? function(e) {
                        e.stopPropagation(), (0, l.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("298843").then(n.bind(n, "298843"));
                            return t => (0, i.jsx)(e, {
                                ...t,
                                event: M,
                                onSuccess: A
                            })
                        })
                    } : void 0,
                    onInviteClick: function(e) {
                        if (e.stopPropagation(), null != t) {
                            if (!w || !B) {
                                let e = (0, L.SHARE_EVENT_DETAILS_LINK)({
                                    guildId: V,
                                    guildEventId: O
                                });
                                (0, S.copy)(e), T.default.track(h.AnalyticEvents.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
                                    guild_id: V,
                                    guild_scheduled_event_id: O
                                });
                                return
                            }(0, l.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("310688").then(n.bind(n, "310688"));
                                return n => (0, i.jsx)(e, {
                                    ...n,
                                    guild: t,
                                    channel: p,
                                    guildScheduledEvent: M,
                                    source: h.InstantInviteSources.GUILD_EVENTS
                                })
                            })
                        }
                    },
                    onEndClick: b && y === D.GuildScheduledEventEntityTypes.EXTERNAL && R ? function(e) {
                        if (e.stopPropagation(), !b) return;
                        let t = () => {
                            N.default.endEvent(O, V), (0, l.closeAllModals)()
                        };
                        (0, l.openModal)(e => (0, i.jsx)(l.ConfirmModal, {
                            ...e,
                            header: g.default.Messages.END_EVENT,
                            confirmText: g.default.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
                            cancelText: g.default.Messages.CANCEL,
                            onConfirm: t,
                            children: (0, i.jsx)(l.Text, {
                                variant: "text-md/normal",
                                children: g.default.Messages.GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE
                            })
                        }))
                    } : void 0,
                    onJoinGuildClick: k,
                    onGoToGuildClick: Z
                }
            }
        },
        922770: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("498225"),
                u = n("305961"),
                l = n("49111");

            function r(e) {
                return (0, i.useStateFromStores)([u.default], () => {
                    var t;
                    if (null == e) return !1;
                    let n = u.default.getGuild(e);
                    return null !== (t = null == n ? void 0 : n.hasFeature(l.GuildFeatures.HUB)) && void 0 !== t && t
                }, [e])
            }
        },
        817963: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useManageResourcePermissions: function() {
                    return _
                },
                getManageResourcePermissions: function() {
                    return T
                },
                useHasInventoryGuildSettingsPermission: function() {
                    return S
                }
            });
            var i = n("773670"),
                u = n("754013"),
                l = n("498225"),
                r = n("252931"),
                a = n("813006");
            n("923959");
            var o = n("957255"),
                s = n("697218");
            n("991170");
            var d = n("270161"),
                c = n("809924");
            let E = {
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
                f = e => {
                    if (null == e) return [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS];
                    let t = d.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
                    return e.isGuildStageVoice() ? t = d.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS : e.isGuildVoice() && (t = d.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS), [u.default.combine(t, c.Permissions.CREATE_EVENTS), u.default.combine(t, c.Permissions.MANAGE_EVENTS)]
                },
                _ = e => {
                    let [t, n] = e instanceof a.default ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS] : f(e), [u, r, d, _] = (0, l.useStateFromStoresArray)([o.default], () => [o.default.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e), o.default.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e), o.default.can(t, e), o.default.can(n, e)]), T = (0, l.useStateFromStores)([s.default], () => s.default.getCurrentUser()), S = i.useCallback(e => I(e, T, r, u), [u, r, T]), N = i.useCallback(e => I(e, T, _, d), [_, d, T]);
                    return null == e ? E : {
                        canCreateExpressions: u,
                        canCreateGuildEvent: d,
                        canManageAllExpressions: r,
                        canManageAllEvents: _,
                        canManageGuildExpression: S,
                        canManageGuildEvent: N
                    }
                },
                T = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.default,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.default,
                        [i, u] = e instanceof a.default ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS] : f(e),
                        l = t.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e),
                        r = t.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
                        d = t.can(i, e),
                        _ = t.can(u, e),
                        T = n.getCurrentUser();
                    return null == e ? E : {
                        canCreateExpressions: l,
                        canCreateGuildEvent: d,
                        canManageAllExpressions: r,
                        canManageAllEvents: _,
                        canManageGuildExpression: e => I(e, T, r, l),
                        canManageGuildEvent: e => I(e, T, _, d)
                    }
                },
                S = e => {
                    let t = (0, l.useStateFromStores)([o.default], () => o.default.can(c.Permissions.MANAGE_GUILD, e)),
                        {
                            showSettingsToggle: n
                        } = (0, r.useInventoryGuildSettingsExperiment)({
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
            var i = n("773670"),
                u = n("79112"),
                l = n("685665"),
                r = n("929423");
            n("424562");
            var a = n("49111"),
                o = n("397336");

            function s(e) {
                let {
                    guild: t,
                    scrollPosition: n,
                    analyticsLocation: s,
                    analyticsLocations: d,
                    openWithoutBackstack: c = !1
                } = e, {
                    analyticsLocations: E
                } = (0, l.default)(), I = (0, i.useCallback)(() => {
                    null != t && (0, r.initGuildIdentitySettings)(t, null != d ? d : E), u.default.open(a.UserSettingsSections.PROFILE_CUSTOMIZATION, null != t ? o.ProfileCustomizationSubsection.GUILD : o.ProfileCustomizationSubsection.USER_PROFILE, {
                        scrollPosition: n,
                        analyticsLocation: s,
                        analyticsLocations: d,
                        openWithoutBackstack: c
                    })
                }, [t, n, s, d, c, E]);
                return I
            }
        },
        474571: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("920040");
            n("773670");
            var u = n("469563"),
                l = n("197801"),
                r = n("75196"),
                a = (0, u.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: u = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return 16 === t || 16 === n ? (0, i.jsx)("svg", {
                        ...(0, r.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: (0, i.jsx)("path", {
                            fill: u,
                            className: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                        })
                    }) : (0, i.jsx)("svg", {
                        ...(0, r.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: u,
                            className: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                        })
                    })
                }, l.SettingsIcon)
        },
        987772: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("920040");
            n("773670");
            var u = n("469563"),
                l = n("504318"),
                r = n("75196"),
                a = (0, u.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: u = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                            className: l,
                            fill: u
                        })
                    })
                }, l.PencilIcon)
        },
        151185: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("920040");
            n("773670");
            var u = n("469563"),
                l = n("424823"),
                r = n("75196"),
                a = (0, u.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: u = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: u,
                            className: l,
                            d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                        })
                    })
                }, l.PlusSmallIcon)
        }
    }
]);