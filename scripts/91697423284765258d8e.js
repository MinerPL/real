(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["66568"], {
        379792: function(e, t, i) {
            "use strict";
            var n = i("727204"),
                l = TypeError,
                s = function(e) {
                    var t, i;
                    this.promise = new e(function(e, n) {
                        if (void 0 !== t || void 0 !== i) throw l("Bad Promise constructor");
                        t = e, i = n
                    }), this.resolve = n(t), this.reject = n(i)
                };
            e.exports.f = function(e) {
                return new s(e)
            }
        },
        718530: function(e, t, i) {
            "use strict";
            var n = i("503486");
            e.exports = n.Promise
        },
        33270: function(e, t, i) {
            "use strict";
            var n = i("418855"),
                l = i("472960"),
                s = i("379792");
            e.exports = function(e, t) {
                if (n(e), l(t) && t.constructor === e) return t;
                var i = s.f(e);
                return (0, i.resolve)(t), i.promise
            }
        },
        499460: function(e, t, i) {
            "use strict";
            var n = i("418855"),
                l = i("338286"),
                s = i("551544"),
                u = i("174669")("species");
            e.exports = function(e, t) {
                var i, a = n(e).constructor;
                return void 0 === a || s(i = n(a)[u]) ? t : l(i)
            }
        },
        506083: function(e, t, i) {
            "use strict";
            var n = i("859514"),
                l = i("140925"),
                s = i("718530"),
                u = i("664144"),
                a = i("434978"),
                o = i("125359"),
                d = i("499460"),
                r = i("33270"),
                _ = i("484784"),
                c = s && s.prototype;
            if (n({
                    target: "Promise",
                    proto: !0,
                    real: !0,
                    forced: !!s && u(function() {
                        c.finally.call({
                            then: function() {}
                        }, function() {})
                    })
                }, {
                    finally: function(e) {
                        var t = d(this, a("Promise")),
                            i = o(e);
                        return this.then(i ? function(i) {
                            return r(t, e()).then(function() {
                                return i
                            })
                        } : e, i ? function(i) {
                            return r(t, e()).then(function() {
                                throw i
                            })
                        } : e)
                    }
                }), !l && o(s)) {
                var g = a("Promise").prototype.finally;
                c.finally !== g && _(c, "finally", g, {
                    unsafe: !0
                })
            }
        },
        519705: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return g
                }
            }), i("222007"), i("702976");
            var n = i("872717"),
                l = i("819855"),
                s = i("913144"),
                u = i("679428"),
                a = i("282109"),
                o = i("568734"),
                d = i("34676"),
                r = i("49111"),
                _ = i("397336"),
                c = i("782340"),
                g = {
                    open(e) {
                        s.default.dispatch({
                            type: "NOTIFICATION_SETTINGS_MODAL_OPEN",
                            guildId: e
                        })
                    },
                    close() {
                        s.default.dispatch({
                            type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
                        })
                    },
                    updateGuildNotificationSettings(e, t, i) {
                        let n = (0, d.getCurrentGuildSettings)(e);
                        u.default.saveUserGuildSettings(e, t), s.default.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                            guildId: e,
                            settings: t
                        }), (0, d.trackGuildNotificationSettingsUpdate)(e, t, n, i)
                    },
                    updateGuildAndChannelNotificationSettings(e, t, i) {
                        let n = Object.keys(t.channel_overrides),
                            l = (0, d.getCurrentGuildSettings)(e),
                            a = (0, d.getManyCurrentChannelSettings)(e, n);
                        u.default.saveUserGuildSettings(e, t), s.default.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",
                            guildId: e,
                            settings: t
                        }), (0, d.trackGuildNotificationSettingsUpdate)(e, t, l, i), Object.keys(t.channel_overrides).forEach(n => {
                            let l = a.get(n);
                            (0, d.trackChannelNotificationSettingsUpdate)(e, n, t.channel_overrides[n], l, i)
                        })
                    },
                    updateGuildNotificationSettingsBulk(e, t) {
                        let i = Object.keys(e),
                            n = (0, d.getManyCurrentGuildSettings)(i);
                        u.default.saveUserGuildSettingsBulk(e), Object.entries(e).forEach(e => {
                            let [i, l] = e, u = n.get(i);
                            s.default.dispatch({
                                type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                                guildId: i,
                                settings: l
                            }), (0, d.trackGuildNotificationSettingsUpdate)(i, l, u, t)
                        })
                    },
                    updateChannelOverrideSettings(e, t, i, n) {
                        let a = (0, d.getCurrentChannelSettings)(e, t);
                        u.default.saveUserGuildSettings(e, {
                            channel_overrides: {
                                [t]: i
                            }
                        }), s.default.dispatch({
                            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                            guildId: e,
                            channelId: t,
                            settings: i
                        }), l.AccessibilityAnnouncer.announce(c.default.Messages.A11Y_ANNOUNCEMENT_CHANNEL_SETTINGS_UPDATED), (0, d.trackChannelNotificationSettingsUpdate)(e, t, i, a, n)
                    },
                    updateChannelOverrideSettingsBulk(e, t, i) {
                        let n = Object.keys(t),
                            l = (0, d.getManyCurrentChannelSettings)(e, n);
                        u.default.saveUserGuildSettings(e, {
                            channel_overrides: t
                        }), s.default.dispatch({
                            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
                            guildId: e,
                            overrides: t
                        }), Object.keys(t).forEach(n => (0, d.trackChannelNotificationSettingsUpdate)(e, n, t[n], l.get(n), i))
                    },
                    setForumThreadsCreated(e, t) {
                        let i = t ? _.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON : _.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF,
                            n = t ? _.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF : _.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON,
                            l = a.default.getChannelFlags(e);
                        this.updateChannelOverrideSettings(e.guild_id, e.id, {
                            flags: l & ~n | i
                        })
                    },
                    setAccountFlag(e, t) {
                        let i = a.default.accountNotificationSettings.flags,
                            l = (0, o.setFlag)(i, e, t);
                        n.default.patch({
                            url: r.Endpoints.ACCOUNT_NOTIFICATION_SETTINGS,
                            body: {
                                flags: l
                            }
                        })
                    }
                }
        },
        689988: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return n
                }
            }), i("70102"), i("222007"), i("704744");
            var n, l = i("913144");
            n = class {
                initialize() {
                    this.initializedCount++, !(this.initializedCount > 1) && (this._initialize(), Object.entries(this.actions).forEach(e => {
                        let [t, i] = e;
                        l.default.subscribe(t, "function" == typeof i ? i : i.callback)
                    }), this.stores.forEach((e, t) => {
                        t.addChangeListener(e), e()
                    }))
                }
                terminate(e) {
                    !(this.initializedCount <= 0) && (e ? this.initializedCount = 0 : this.initializedCount--, 0 === this.initializedCount && (this._terminate(), Object.entries(this.actions).forEach(e => {
                        let [t, i] = e;
                        l.default.unsubscribe(t, "function" == typeof i ? i : i.callback)
                    })))
                }
                _initialize() {}
                _terminate() {}
                constructor() {
                    this.initializedCount = 0, this.actions = {}, this.stores = new Map
                }
            }
        },
        679428: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return v
                }
            }), i("424973"), i("222007");
            var n = i("917351"),
                l = i.n(n),
                s = i("872717"),
                u = i("689988"),
                a = i("605250"),
                o = i("870691"),
                d = i("42203"),
                r = i("49111");
            let _ = {},
                c = new a.default("UserGuildSettingsManager"),
                g = 0;

            function f() {
                _ = {
                    ...o.default.getCollapsedCategories()
                }
            }

            function h() {
                !__OVERLAY__ && (clearTimeout(g), g = setTimeout(() => p(), 15e3))
            }
            async function p(e, t) {
                await E(null != t ? {
                    [null != e ? e : r.ME]: t
                } : {})
            }
            async function E(e) {
                clearTimeout(g);
                let t = 0 !== Object.keys(e).length,
                    i = o.default.getCollapsedCategories(),
                    n = function() {
                        let e = {},
                            t = o.default.getCollapsedCategories();
                        for (let i in t) t[i] !== _[i] && (e[i] = !0);
                        for (let i in _) t[i] !== _[i] && (e[i] = !0);
                        return e
                    }();
                for (let l in n) {
                    let n = d.default.getChannel(l);
                    null != n && null != n.guild_id && (!(n.guild_id in e) && (e[n.guild_id] = {}), null == e[n.guild_id].channel_overrides && (e[n.guild_id].channel_overrides = {}), e[n.guild_id].channel_overrides[n.id] = {
                        ...e[n.guild_id].channel_overrides[n.id],
                        collapsed: n.id in i
                    }, t = !0)
                }
                if (!t) return;
                _ = {
                    ...i
                };
                let u = l.map(e, (e, t) => ({
                    guildId: t,
                    updates: e,
                    attempts: 0
                }));
                for (; u.length > 0;) {
                    let e = u.shift();
                    if (e.guildId !== r.FAVORITES) try {
                        await s.default.patch({
                            url: r.Endpoints.USER_GUILD_SETTINGS(e.guildId),
                            body: e.updates
                        }), await N(1e3)
                    } catch (t) {
                        c.error(t), e.attempts += 1, e.attempts < 3 && u.push(e), await N(5e3)
                    }
                }
            }

            function N(e) {
                return new Promise(t => setTimeout(t, e + Math.ceil(e * Math.random())))
            }

            function S() {
                _ = {
                    ...o.default.getCollapsedCategories()
                }
            }
            class C extends u.default {
                constructor(...e) {
                    super(...e), this.actions = {
                        CATEGORY_COLLAPSE: h,
                        CATEGORY_EXPAND: h,
                        CATEGORY_COLLAPSE_ALL: h,
                        CATEGORY_EXPAND_ALL: h,
                        POST_CONNECTION_OPEN: f,
                        USER_GUILD_SETTINGS_FULL_UPDATE: S
                    }, this.saveUserGuildSettings = p, this.saveUserGuildSettingsBulk = E
                }
            }
            var v = new C
        },
        870691: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return h
                }
            }), i("222007");
            var n = i("446674"),
                l = i("913144"),
                s = i("449008"),
                u = i("42203"),
                a = i("341542"),
                o = i("923959"),
                d = i("49111");
            let r = {},
                _ = 0;

            function c() {
                _ += 1
            }

            function g(e) {
                if (null == r[e]) return !1;
                delete r[e]
            }
            class f extends n.default.PersistedStore {
                initialize(e) {
                    this.waitFor(u.default, a.default), this.removeChangeListener(c), this.addChangeListener(c), r = null != e ? e : {}
                }
                getState() {
                    return r
                }
                isCollapsed(e) {
                    return null != e && "null" !== e && !!r[e] && r[e]
                }
                getCollapsedCategories() {
                    return r
                }
                get version() {
                    return _
                }
            }
            f.displayName = "CategoryCollapseStore", f.persistKey = "collapsedCategories";
            var h = new f(l.default, {
                CONNECTION_OPEN: function(e) {
                    for (let t of (!e.userGuildSettings.partial && (r = {}), e.userGuildSettings.entries))
                        if (null != t.channel_overrides)
                            for (let e of t.channel_overrides) e.collapsed ? r[e.channel_id] = !0 : delete r[e.channel_id]
                },
                USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
                    let {
                        userGuildSettings: t
                    } = e, i = new Set(t.map(e => e.guild_id).filter(s.isNotNullish));
                    for (let e in r) {
                        let t = u.default.getChannel(e);
                        null != t && null != t.guild_id && i.has(t.guild_id) && delete r[t.id]
                    }
                    for (let e of t)
                        for (let t of e.channel_overrides) t.collapsed && (r[t.channel_id] = !0)
                },
                CATEGORY_COLLAPSE: function(e) {
                    let {
                        id: t
                    } = e;
                    if (r[t]) return !1;
                    r[t] = !0
                },
                CATEGORY_EXPAND: function(e) {
                    let {
                        id: t
                    } = e;
                    return g(t)
                },
                CATEGORY_COLLAPSE_ALL: function(e) {
                    let {
                        guildId: t
                    } = e;
                    o.default.getChannels(t)[d.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                        let {
                            channel: t
                        } = e;
                        "null" !== t.id && (r[t.id] = !0)
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
                        delete r[t.id]
                    })
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: {
                            id: t
                        }
                    } = e;
                    return g(t)
                }
            })
        },
        34676: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                MessageNotificationSettings: function() {
                    return _
                },
                trackGuildNotificationSettingsUpdate: function() {
                    return c
                },
                muteConfigToTimestamp: function() {
                    return f
                },
                trackChannelNotificationSettingsUpdate: function() {
                    return h
                },
                getCurrentGuildSettings: function() {
                    return p
                },
                getManyCurrentGuildSettings: function() {
                    return E
                },
                getCurrentChannelSettings: function() {
                    return N
                },
                getManyCurrentChannelSettings: function() {
                    return S
                }
            }), i("702976"), i("222007");
            var n, l, s = i("716241"),
                u = i("42203"),
                a = i("282109"),
                o = i("568734"),
                d = i("49111"),
                r = i("397336");
            (l = n || (n = {})).GUILD = "guild", l.CHANNEL = "channel";
            let _ = Object.freeze({
                [d.UserNotificationSettings.ALL_MESSAGES]: "All",
                [d.UserNotificationSettings.ONLY_MENTIONS]: "Mentions",
                [d.UserNotificationSettings.NO_MESSAGES]: "Nothing",
                [d.UserNotificationSettings.NULL]: null
            });

            function c(e, t, i, n) {
                var l, u;
                let a = function(e) {
                        var t, i, n, l, s, u, a;
                        let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            d = null != o.mute_config && null != o.mute_config.end_time ? new Date(o.mute_config.end_time).getTime() : e.guild_muted_until,
                            r = null != o.message_notifications ? _[o.message_notifications] : e.guild_message_notification_settings;
                        return {
                            guild_muted_until: d,
                            guild_flags: null !== (t = o.flags) && void 0 !== t ? t : e.guild_flags,
                            guild_is_muted: null !== (i = o.muted) && void 0 !== i ? i : e.guild_is_muted,
                            guild_message_notification_settings: r,
                            guild_suppress_roles: null !== (n = o.suppress_roles) && void 0 !== n ? n : e.guild_suppress_roles,
                            guild_receive_mobile_push: null !== (l = o.mobile_push) && void 0 !== l ? l : e.guild_receive_mobile_push,
                            guild_notify_highlights: null !== (s = o.notify_highlights) && void 0 !== s ? s : e.guild_notify_highlights,
                            guild_suppress_everyone: null !== (u = o.suppress_everyone) && void 0 !== u ? u : e.guild_suppress_everyone,
                            guild_scheduled_events_muted: null !== (a = o.mute_scheduled_events) && void 0 !== a ? a : e.guild_scheduled_events_muted
                        }
                    },
                    c = a(i),
                    f = a(p(e), t),
                    h = g(c, f, "RETURN_PREVIOUS_WHEN_CHANGED"),
                    E = null !== (l = h("guild_flags")) && void 0 !== l ? l : 0,
                    N = (null !== (u = f.guild_flags) && void 0 !== u ? u : 0) ^ E,
                    S = 0 === (0, o.removeFlags)(N, r.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_OFF, r.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON);
                s.default.trackWithMetadata(d.AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, {
                    ...f,
                    location: n,
                    guild_id: e,
                    update_type: "guild",
                    guild_flags_old: h("guild_flags"),
                    guild_is_muted_old: h("guild_is_muted"),
                    guild_suppress_roles_old: h("guild_suppress_roles"),
                    guild_notify_highlights_old: h("guild_notify_highlights"),
                    guild_suppress_everyone_old: h("guild_suppress_everyone"),
                    guild_receive_mobile_push_old: h("guild_receive_mobile_push"),
                    guild_scheduled_events_muted_old: h("guild_scheduled_events_muted"),
                    guild_message_notification_settings_old: h("guild_message_notification_settings"),
                    is_opt_in_only_change: S
                })
            }

            function g(e, t, i) {
                return n => {
                    if ("RETURN_PREVIOUS_WHEN_CHANGED" === i) return e[n] !== t[n] ? e[n] : void 0
                }
            }

            function f(e) {
                return null != e && null != e.end_time ? new Date(e.end_time).getTime() : null
            }

            function h(e, t, i, n, l) {
                var a, c;
                let h = function(t) {
                        var i, n;
                        let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            s = null !== (i = l.muted) && void 0 !== i ? i : null == t ? void 0 : t.channel_is_muted,
                            u = null != l.message_notifications ? _[l.message_notifications] : null == t ? void 0 : t.channel_message_notification_settings,
                            a = null == e ? null : !0 === s || null != u;
                        return {
                            channel_is_muted: s,
                            channel_is_overridden: a,
                            channel_flags: null !== (n = l.flags) && void 0 !== n ? n : null == t ? void 0 : t.channel_flags,
                            channel_message_notification_settings: u,
                            channel_muted_until: f(l.mute_config)
                        }
                    },
                    p = h(n),
                    E = h(N(e, t), i),
                    S = g(p, E, "RETURN_PREVIOUS_WHEN_CHANGED"),
                    C = u.default.getChannel(t),
                    v = null !== (a = S("channel_flags")) && void 0 !== a ? a : 0,
                    T = (null !== (c = E.channel_flags) && void 0 !== c ? c : 0) ^ v,
                    m = 0 === (0, o.removeFlags)(T, r.ChannelNotificationSettingsFlags.FAVORITED, r.ChannelNotificationSettingsFlags.OPT_IN_ENABLED);
                s.default.trackWithMetadata(d.AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, {
                    ...E,
                    location: l,
                    guild_id: e,
                    channel_id: t,
                    update_type: "channel",
                    parent_id: null != C ? C.parent_id : null,
                    channel_flags_old: S("channel_flags"),
                    channel_is_muted_old: S("channel_is_muted"),
                    channel_muted_until_old: S("channel_muted_until"),
                    channel_is_overridden_old: S("channel_is_overridden"),
                    channel_message_notification_settings_old: S("channel_message_notification_settings"),
                    is_opt_in_only_change: m
                })
            }

            function p(e) {
                let t = a.default.isMuted(e),
                    i = a.default.getMuteConfig(e);
                return {
                    guild_suppress_everyone: a.default.isSuppressEveryoneEnabled(e),
                    guild_suppress_roles: a.default.isSuppressRolesEnabled(e),
                    guild_scheduled_events_muted: a.default.isMuteScheduledEventsEnabled(e),
                    guild_is_muted: t,
                    guild_muted_until: null != i && null != i.end_time ? new Date(i.end_time).getTime() : null,
                    guild_receive_mobile_push: a.default.isMobilePushEnabled(e),
                    guild_message_notification_settings: _[a.default.getMessageNotifications(e)],
                    guild_notify_highlights: a.default.getNotifyHighlights(e),
                    guild_flags: a.default.getGuildFlags(e)
                }
            }

            function E(e) {
                let t = new Map;
                return e.forEach(e => t.set(e, p(e))), t
            }

            function N(e, t) {
                let i = a.default.isChannelMuted(e, t),
                    n = a.default.getChannelMuteConfig(e, t);
                return {
                    channel_is_muted: i,
                    channel_muted_until: null != n && null != n.end_time ? new Date(n.end_time).getTime() : null,
                    channel_message_notification_settings: _[a.default.getChannelMessageNotifications(e, t)],
                    channel_flags: a.default.getChannelIdFlags(e, t)
                }
            }

            function S(e, t) {
                let i = new Map;
                return t.forEach(t => i.set(t, N(e, t))), i
            }
        }
    }
]);