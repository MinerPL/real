            "use strict";
            let n, a;
            l.r(t), l.d(t, {
                default: function() {
                    return P
                }
            }), l("222007"), l("424973");
            var s = l("917351"),
                i = l.n(s),
                r = l("446674"),
                o = l("913144"),
                d = l("611183"),
                u = l("957255"),
                c = l("45894"),
                f = l("900938"),
                m = l("49111");
            let I = [],
                N = [],
                T = null,
                E = null,
                h = null,
                g = !1,
                p = !1,
                S = m.FormStates.CLOSED,
                O = {},
                _ = !1,
                A = null,
                C = new Set;

            function x(e) {
                let {
                    section: t
                } = e;
                if (t !== m.GuildSettingsSections.INTEGRATIONS) return !1;
                if (a = m.IntegrationSettingsSections.OVERVIEW, null == n) {
                    let e = f.default.getGuildId();
                    null != e && d.default.fetchForGuild(e), R(!1)
                }
            }

            function R(e) {
                if (null != (n = f.default.getProps().guild) && u.default.can(m.Permissions.MANAGE_GUILD, n)) {
                    let e = f.default.getProps().integrations;
                    null == e && (p = !0), I = null != e ? e : []
                } else I = [];
                if (N = null != n && u.default.can(m.Permissions.MANAGE_WEBHOOKS, n) ? c.default.getWebhooksForGuild(n.id) : [], !e && null != E) {
                    let e = v(E.id);
                    null != e && (E = e)
                }
                if (null != h) {
                    let e = L(h.id);
                    null != e && (h = e)
                }
                T = null, S = m.FormStates.OPEN, O = {}, _ = !1
            }
            let M = i.debounce(() => {
                _ && (null != E ? i.isEqual(E, v(E.id)) && (_ = !1) : null != h && i.isEqual(h, L(h.id)) && (_ = !1), !_ && b.emitChange())
            }, 500);

            function v(e) {
                return I.find(t => {
                    let {
                        id: l
                    } = t;
                    return l === e
                })
            }

            function L(e) {
                return N.find(t => {
                    let {
                        id: l
                    } = t;
                    return l === e
                })
            }
            class j extends r.default.Store {
                initialize() {
                    this.waitFor(f.default, c.default, u.default)
                }
                hasChanges() {
                    return _
                }
                get guild() {
                    return n
                }
                get integrations() {
                    return I
                }
                get integrationIdsWithCommands() {
                    return C
                }
                get webhooks() {
                    return N
                }
                get editedCommandId() {
                    return T
                }
                get editedIntegration() {
                    return E
                }
                get editedWebhook() {
                    return h
                }
                get formState() {
                    return S
                }
                getErrors() {
                    return O
                }
                getSection() {
                    return a
                }
                getSectionId() {
                    return A
                }
                getIntegration(e) {
                    return v(e)
                }
                getWebhook(e) {
                    return L(e)
                }
                isFetching() {
                    return p || g
                }
                showNotice() {
                    return this.hasChanges()
                }
                getApplication(e) {
                    var t;
                    return null === (t = I.find(t => {
                        var l;
                        return (null === (l = t.application) || void 0 === l ? void 0 : l.id) === e
                    })) || void 0 === t ? void 0 : t.application
                }
            }
            j.displayName = "GuildSettingsIntegrationsStore";
            let b = new j(o.default, __OVERLAY__ ? {} : {
                INTEGRATION_SETTINGS_INIT: function() {
                    return R(!1)
                },
                INTEGRATION_SETTINGS_SAVE_SUCCESS: function() {
                    return R(!0)
                },
                GUILD_SETTINGS_INIT: x,
                GUILD_SETTINGS_SET_SECTION: x,
                INTEGRATION_SETTINGS_SET_SECTION: function(e) {
                    let {
                        section: t,
                        sectionId: l
                    } = e;
                    a = t, A = l
                },
                INTEGRATION_SETTINGS_START_EDITING_COMMAND: function(e) {
                    let {
                        commandId: t
                    } = e;
                    T = t, E = null, h = null, O = {}, _ = !0
                },
                INTEGRATION_SETTINGS_STOP_EDITING_COMMAND: function(e) {
                    let {
                        commandId: t
                    } = e;
                    if (null == T || T !== t) return !1;
                    T = null, O = {}, _ = !1
                },
                INTEGRATION_SETTINGS_START_EDITING_INTEGRATION: function(e) {
                    let {
                        integrationId: t
                    } = e, l = v(t);
                    if (null == l) return !1;
                    E = l, T = null, h = null, O = {}, _ = !1
                },
                INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION: function() {
                    E = null, O = {}, _ = !1
                },
                INTEGRATION_SETTINGS_UPDATE_INTEGRATION: function(e) {
                    let {
                        settings: t
                    } = e;
                    if (null == E) return !1;
                    E = {
                        ...E
                    }, null != t.enableEmoticons && E.enable_emoticons !== t.enableEmoticons && (E.enable_emoticons = t.enableEmoticons, _ = !0), null != t.expireBehavior && E.expire_behavior !== t.expireBehavior && (E.expire_behavior = t.expireBehavior, _ = !0), null != t.expireGracePeriod && E.expire_grace_period !== t.expireGracePeriod && (E.expire_grace_period = t.expireGracePeriod, _ = !0), _ && M()
                },
                INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function(e) {
                    let {
                        settings: t
                    } = e;
                    if (null == h) return !1;
                    h = {
                        ...h
                    }, null != t.name && h.name !== t.name && (h.name = t.name, _ = !0), void 0 !== t.avatar && h.avatar !== t.avatar && (h.avatar = t.avatar, _ = !0), null != t.channelId && h.channel_id !== t.channelId && (h.channel_id = t.channelId, _ = !0), _ && M()
                },
                INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function(e) {
                    let {
                        webhookId: t
                    } = e, l = L(t);
                    if (null == l) return !1;
                    h = l, T = null, E = null, O = {}, _ = !1
                },
                INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function() {
                    h = null, O = {}, _ = !1
                },
                GUILD_SETTINGS_CLOSE: function() {
                    n = null, I = [], N = [], T = null, E = null, h = null, S = m.FormStates.CLOSED, _ = !1
                },
                GUILD_SETTINGS_LOADED_INTEGRATIONS: function(e) {
                    let {
                        guildId: t,
                        integrations: l
                    } = e;
                    if (null == n || t !== n.id || S === m.FormStates.SUBMITTING) return !1;
                    for (let e of (p = !1, l)) {
                        let t = I.find(t => {
                            let {
                                id: l
                            } = t;
                            if (l === e.id) return !0
                        });
                        if (null == t) {
                            var a, s;
                            I.push(e), e.type === (null == E ? void 0 : E.type) && (null === (a = e.account) || void 0 === a ? void 0 : a.id) === (null === (s = E.account) || void 0 === s ? void 0 : s.id) && (E = e)
                        }
                    }
                    for (let e = I.length - 1; e >= 0; e--) {
                        let t = I[e],
                            n = l.find(e => {
                                let {
                                    id: l
                                } = e;
                                if (l === t.id) return !0
                            });
                        if (null != n) {
                            let l = {
                                ...t,
                                ...n
                            };
                            (null == E ? void 0 : E.id) === l.id && (!1 === l.enabled ? E = null : !_ && (E = l)), I[e] = l
                        } else(null == E ? void 0 : E.id) === t.id && (E = null), I.splice(e, 1)
                    }
                    I = [...I], M()
                },
                GUILD_SETTINGS_LOADED_INTEGRATIONS_WITH_COMMANDS: function(e) {
                    let {
                        guildId: t,
                        integrationIds: l
                    } = e;
                    if (null == n || t !== n.id || S === m.FormStates.SUBMITTING) return !1;
                    C = new Set(l)
                },
                WEBHOOKS_UPDATE: function(e) {
                    let {
                        guildId: t,
                        channelId: l,
                        webhooks: a
                    } = e;
                    if (null == n || t !== n.id || null == a || S === m.FormStates.SUBMITTING) return !1;
                    g = !1;
                    for (let e = N.length - 1; e >= 0; e--) {
                        let t = N[e];
                        if (null != l && (null == t ? void 0 : t.channel_id) !== l) continue;
                        let n = a.find(e => {
                            let {
                                id: l
                            } = e;
                            if (l === t.id) return !0
                        });
                        if (null != n) {
                            let l = {
                                ...t,
                                ...n
                            };
                            N[e] = l, !_ && (null == h ? void 0 : h.id) === l.id && (h = l)
                        } else(null == h ? void 0 : h.id) === t.id && (h = null), N.splice(e, 1)
                    }
                    for (let e of a) {
                        let t = N.find(t => {
                            let {
                                id: l
                            } = t;
                            if (l === e.id) return !0
                        });
                        null == t && N.push(e)
                    }
                    N = [...N], M()
                },
                INTEGRATION_SETTINGS_SUBMITTING: function() {
                    S = m.FormStates.SUBMITTING, O = {}
                },
                INTEGRATION_SETTINGS_SAVE_FAILURE: function(e) {
                    var t;
                    if (S !== m.FormStates.SUBMITTING) return !1;
                    S = m.FormStates.OPEN, O = null !== (t = e.errors) && void 0 !== t ? t : {}
                }
            });
            var P = b