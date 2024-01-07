            "use strict";
            let a, s, i;
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            }), n("424973"), n("222007");
            var l = n("917351"),
                r = n.n(l),
                o = n("446674"),
                u = n("913144"),
                d = n("611183"),
                c = n("492114"),
                E = n("305961"),
                f = n("957255"),
                _ = n("45894"),
                h = n("49111");
            let C = [],
                T = null,
                I = !1,
                S = h.FormStates.CLOSED,
                N = {},
                A = !1,
                m = null;

            function p() {
                if (a = null != (s = c.default.getChannel()) ? E.default.getGuild(s.guild_id) : null, C = null != s && null != a && f.default.can(h.Permissions.MANAGE_WEBHOOKS, s) ? _.default.getWebhooksForChannel(a.id, s.id) : [], null != T) {
                    let e = R(T.id);
                    null != e && (T = e)
                }
                S = h.FormStates.OPEN, N = {}, A = !1
            }
            let g = r.debounce(() => {
                A && ((null == T || r.isEqual(T, R(T.id))) && (A = !1), !A && L.emitChange())
            }, 500);

            function R(e) {
                return C.find(t => {
                    let {
                        id: n
                    } = t;
                    return n === e
                })
            }
            class O extends o.default.Store {
                initialize() {
                    this.waitFor(c.default, E.default, _.default, f.default)
                }
                hasChanges() {
                    return A
                }
                get webhooks() {
                    return C
                }
                get editedWebhook() {
                    return T
                }
                get formState() {
                    return S
                }
                getWebhook(e) {
                    return R(e)
                }
                showNotice() {
                    return this.hasChanges()
                }
                getProps() {
                    return {
                        submitting: S === h.FormStates.SUBMITTING,
                        webhooks: C,
                        editedWebhook: T,
                        section: i,
                        sectionId: m,
                        hasChanges: this.hasChanges(),
                        isFetching: I,
                        errors: N
                    }
                }
            }
            O.displayName = "ChannelSettingsIntegrationsStore";
            let L = new O(u.default, __OVERLAY__ ? {} : {
                INTEGRATION_SETTINGS_INIT: p,
                INTEGRATION_SETTINGS_SAVE_SUCCESS: p,
                CHANNEL_SETTINGS_SET_SECTION: function(e) {
                    let {
                        section: t
                    } = e;
                    if (t !== h.ChannelSettingsSections.INTEGRATIONS) return !1;
                    if (i = h.IntegrationSettingsSections.OVERVIEW, null == a) {
                        let e = c.default.getChannel(),
                            t = null == e ? void 0 : e.getGuildId();
                        null != e && null != t && (d.default.fetchForChannel(t, e.id), I = !0), p()
                    }
                },
                INTEGRATION_SETTINGS_SET_SECTION: function(e) {
                    let {
                        section: t,
                        sectionId: n
                    } = e;
                    i = t, m = n
                },
                INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function(e) {
                    let {
                        webhookId: t
                    } = e, n = R(t);
                    if (null == n) return !1;
                    T = n, N = {}, A = !1
                },
                INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function() {
                    T = null, N = {}, A = !1
                },
                INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function(e) {
                    let {
                        settings: t
                    } = e;
                    if (null == T) return !1;
                    T = {
                        ...T
                    }, null != t.name && T.name !== t.name && (T.name = t.name, A = !0), void 0 !== t.avatar && T.avatar !== t.avatar && (T.avatar = t.avatar, A = !0), null != t.channelId && T.channel_id !== t.channelId && (T.channel_id = t.channelId, A = !0), A && g()
                },
                CHANNEL_SETTINGS_CLOSE: function() {
                    s = null, a = null, C = [], T = null, S = h.FormStates.CLOSED
                },
                WEBHOOKS_UPDATE: function(e) {
                    let {
                        guildId: t,
                        channelId: n,
                        webhooks: i
                    } = e;
                    if (null == a || t !== a.id || null == s || n !== s.id || null == i || S === h.FormStates.SUBMITTING) return !1;
                    I = !1;
                    for (let e = C.length - 1; e >= 0; e--) {
                        let t = C[e];
                        if (null != n && (null == t ? void 0 : t.channel_id) !== n) continue;
                        let a = i.find(e => {
                            let {
                                id: n
                            } = e;
                            if (n === t.id) return !0
                        });
                        if (null != a) {
                            let n = {
                                ...t,
                                ...a
                            };
                            C[e] = n, !A && (null == T ? void 0 : T.id) === n.id && (T = n)
                        } else(null == T ? void 0 : T.id) === t.id && (T = null), C.splice(e, 1)
                    }
                    for (let e of i) {
                        let t = C.find(t => {
                            let {
                                id: n
                            } = t;
                            if (n === e.id) return !0
                        });
                        null == t && C.push(e)
                    }
                    C = [...C], g()
                },
                INTEGRATION_SETTINGS_SUBMITTING: function() {
                    S = h.FormStates.SUBMITTING, N = {}
                },
                INTEGRATION_SETTINGS_SAVE_FAILURE: function(e) {
                    var t;
                    if (S !== h.FormStates.SUBMITTING) return !1;
                    S = h.FormStates.OPEN, N = null !== (t = e.errors) && void 0 !== t ? t : {}
                }
            });
            var v = L