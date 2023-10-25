(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["8240"], {
        295426: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("913144"),
                a = {
                    clearDraft(e, t) {
                        i.default.dispatch({
                            type: "DRAFT_CLEAR",
                            channelId: e,
                            draftType: t
                        })
                    },
                    saveDraft(e, t, n) {
                        i.default.dispatch({
                            type: "DRAFT_SAVE",
                            channelId: e,
                            draft: t,
                            draftType: n
                        })
                    },
                    changeDraft(e, t, n) {
                        i.default.dispatch({
                            type: "DRAFT_CHANGE",
                            channelId: e,
                            draft: t,
                            draftType: n
                        })
                    },
                    changeThreadSettings(e, t) {
                        i.default.dispatch({
                            type: "THREAD_SETTINGS_DRAFT_CHANGE",
                            channelId: e,
                            draft: t
                        })
                    }
                }
        },
        943314: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = (0, n("862205").createExperiment)({
                kind: "user",
                id: "2022-12_forum_activity",
                label: "Increased activity view for Forums, per user",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        531869: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = (0, n("862205").createExperiment)({
                kind: "guild",
                id: "2023-01_forums_activity_2_guild",
                label: "Increased activity view for Forums, per guild",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        696605: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MINIMUM_RANGE: function() {
                    return u
                },
                DEFAULT_RANGES: function() {
                    return s
                },
                default: function() {
                    return o
                }
            });
            var i = n("427964"),
                a = n.n(i),
                l = n("703275"),
                r = n.n(l);
            let u = 100,
                s = [
                    [0, u - 1]
                ];

            function d(e) {
                let t = {};
                return e.forEach((e, n) => {
                    t[n] = e
                }), t
            }
            class o {
                reset() {
                    this._subscriptions = {}
                }
                get(e) {
                    return d(this._get(e))
                }
                _get(e) {
                    var t;
                    return null !== (t = this._subscriptions[e]) && void 0 !== t ? t : new r({
                        max: 5
                    })
                }
                clear(e) {
                    delete this._subscriptions[e]
                }
                subscribe(e, t, n) {
                    let i = this._get(e);
                    return !a.isEqual(i.get(t), n) && (i.set(t, n), this._subscriptions[e] = i, this._onChange(e, d(i)), !0)
                }
                constructor(e) {
                    this._subscriptions = {}, this._onChange = e
                }
            }
        },
        623053: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("427964"),
                a = n.n(i),
                l = n("638800"),
                r = n("605250");
            class u {
                reset() {
                    this._subscriptions = {}, this._unsubscriptions = {}, this._unsubscribe.cancel()
                }
                get(e) {
                    var t;
                    let n = null !== (t = this._subscriptions[e]) && void 0 !== t ? t : {};
                    return a.keys(n)
                }
                clear(e) {
                    delete this._subscriptions[e], delete this._unsubscriptions[e]
                }
                subscribe(e, t) {
                    var n, i;
                    let a = null !== (n = this._subscriptions[e]) && void 0 !== n ? n : {};
                    a[t] = (null !== (i = a[t]) && void 0 !== i ? i : 0) + 1, this._subscriptions[e] = a, 1 === a[t] && this._onChange(e, this.get(e)), this.checkForLeaks(e, t)
                }
                isSubscribed(e, t) {
                    return null != this._subscriptions[e] && null != this._subscriptions[e][t]
                }
                unsubscribe(e, t) {
                    var n, i;
                    if (!this.isSubscribed(e, t)) return;
                    let a = null !== (n = this._unsubscriptions[e]) && void 0 !== n ? n : {};
                    a[t] = (null !== (i = a[t]) && void 0 !== i ? i : 0) + 1, this._unsubscriptions[e] = a, 1 === a[t] && this._unsubscribe.delay(!1)
                }
                checkForLeaks(e, t) {
                    var n, i, a, l;
                    let u = null !== (a = null === (n = this._subscriptions[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== a ? a : 0,
                        s = null !== (l = null === (i = this._unsubscriptions[e]) || void 0 === i ? void 0 : i[t]) && void 0 !== l ? l : 0,
                        d = u - s;
                    d > 5 && new(0, r.default)("GuildMemberSubscriptions").warn("GuildMemberSubscriptions.subscribe(...): Potential reference leak! (".concat(d, " subscriptions)"))
                }
                flushUnsubscriptions() {
                    !a.isEmpty(this._unsubscriptions) && (a.forEach(this._unsubscriptions, (e, t) => {
                        let n = this._subscriptions[t];
                        a.forEach(e, (e, t) => {
                            var i;
                            n[t] = (null !== (i = n[t]) && void 0 !== i ? i : 0) - e, n[t] <= 0 && delete n[t]
                        }), a.isEmpty(n) && delete this._subscriptions[t], this._onChange(t, this.get(t))
                    }), this._unsubscriptions = {})
                }
                constructor(e) {
                    this._subscriptions = {}, this._unsubscriptions = {}, this._unsubscribe = new l.DelayedCall(6e4, () => this.flushUnsubscriptions()), this._onChange = e
                }
            }
        },
        386451: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEFAULT_RANGES: function() {
                    return r.DEFAULT_RANGES
                },
                default: function() {
                    return c
                }
            });
            var i = n("427964"),
                a = n.n(i),
                l = n("638800"),
                r = n("696605"),
                u = n("623053"),
                s = n("6850"),
                d = n("49111");

            function o(e) {
                return null != e && "null" !== e && e !== d.ME && "undefined" !== e && e !== d.FAVORITES
            }
            class c {
                _enqueue(e, t) {
                    this._pending[e] = {
                        ...this._pending[e],
                        ...t
                    }, this._flush.delay()
                }
                reset() {
                    this._subscribed.clear(), this._pending = {}, this._members.reset(), this._channels.reset(), this._threadMemberLists.reset(), this._typing.clear(), this._threads.clear(), this._activities.clear()
                }
                get(e) {
                    return {
                        typing: this._typing.has(e),
                        threads: this._threads.has(e),
                        activities: this._activities.has(e),
                        members: this._members.get(e),
                        channels: this._channels.get(e),
                        thread_member_lists: this._threadMemberLists.get(e)
                    }
                }
                getSubscribedThreadIds() {
                    return this._threadMemberLists.getSubscribedThreadIds()
                }
                isSubscribedToThreads(e) {
                    return this._threads.has(e)
                }
                forEach(e) {
                    this._subscribed.forEach(e)
                }
                clearWithoutFlushing(e, t) {
                    (t || !this._threads.has(e)) && this._subscribed.delete(e), delete this._pending[e], this._members.clear(e), this._channels.clear(e), this._threadMemberLists.clear(e), this._typing.delete(e), t && this._threads.delete(e), this._activities.delete(e)
                }
                flush() {
                    a.forEach(this._pending, (e, t) => {
                        this._subscribed.add(t), this._onChange(t, e)
                    }), this._pending = {}
                }
                subscribeUser(e, t) {
                    o(e) && this._members.subscribe(e, t)
                }
                unsubscribeUser(e, t) {
                    o(e) && this._members.unsubscribe(e, t)
                }
                subscribeChannel(e, t, n) {
                    return !!o(e) && this._channels.subscribe(e, t, n)
                }
                subscribeThreadMemberList(e, t, n) {
                    return !!o(e) && this._threadMemberLists.subscribe(e, t, n)
                }
                unsubscribeThreadMemberList(e, t) {
                    return !!o(e) && this._threadMemberLists.unsubscribe(e, t)
                }
                subscribeToGuild(e) {
                    this._subscribeToFeature(e, this._typing, {
                        typing: !0
                    }), this._subscribeToFeature(e, this._activities, {
                        activities: !0
                    }), this._subscribeToFeature(e, this._threads, {
                        threads: !0
                    })
                }
                _subscribeToFeature(e, t, n) {
                    if (!!o(e)) !t.has(e) && (t.add(e), this._enqueue(e, n))
                }
                constructor(e) {
                    this._members = new u.default((e, t) => this._enqueue(e, {
                        members: t
                    })), this._channels = new r.default((e, t) => this._enqueue(e, {
                        channels: t
                    })), this._threadMemberLists = new s.default((e, t) => this._enqueue(e, {
                        thread_member_lists: t
                    })), this._typing = new Set, this._threads = new Set, this._activities = new Set, this._subscribed = new Set, this._pending = {}, this._flush = new l.DelayedCall(0, () => this.flush()), this._onChange = e
                }
            }
        },
        6850: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("703275"),
                a = n.n(i);
            class l {
                reset() {
                    this._subscriptions = {}
                }
                get(e) {
                    return this._get(e).keys()
                }
                getSubscribedThreadIds() {
                    let e = new Set;
                    for (let t in this._subscriptions)
                        for (let n of this._subscriptions[t].keys()) e.add(n);
                    return e
                }
                _get(e) {
                    var t;
                    return null !== (t = this._subscriptions[e]) && void 0 !== t ? t : new a({
                        max: 3,
                        updateAgeOnGet: !0
                    })
                }
                clear(e) {
                    e in this._subscriptions && (delete this._subscriptions[e], this._onChange(e, []))
                }
                subscribe(e, t, n) {
                    let i = this._get(e);
                    return i.has(t) ? (i.set(t, Date.now()), !1) : (null != n && i.has(n) && i.set(n, Date.now()), i.set(t, Date.now()), this._subscriptions[e] = i, this._onChange(e, i.keys()), !0)
                }
                unsubscribe(e, t) {
                    if (!(e in this._subscriptions)) return !1;
                    let n = this._subscriptions[e];
                    return !!n.has(t) && (n.del(t), this._onChange(e, n.keys()), !0)
                }
                constructor(e) {
                    this._subscriptions = {}, this._onChange = e
                }
            }
        },
        701916: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                collectThreadMetadata: function() {
                    return o
                }
            });
            var i = n("393414"),
                a = n("800843"),
                l = n("610730"),
                r = n("233069"),
                u = n("957255"),
                s = n("299039"),
                d = n("49111");

            function o(e) {
                var t, n, o, c, _;
                let f = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (null == e || !r.THREAD_CHANNEL_TYPES.has(e.type)) return null;
                let h = f ? (0, i.getLastRouteChangeSource)() : void 0;
                return {
                    location: h,
                    thread_approximate_member_count: a.default.getMemberCount(e.id),
                    thread_approximate_message_count: l.default.getCount(e.id),
                    thread_archived: (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.archived) === !0,
                    thread_locked: null !== (c = null === (n = e.threadMetadata) || void 0 === n ? void 0 : n.locked) && void 0 !== c && c,
                    thread_auto_archive_duration_minutes: null !== (_ = null === (o = e.threadMetadata) || void 0 === o ? void 0 : o.autoArchiveDuration) && void 0 !== _ ? _ : 0,
                    thread_approximate_creation_date: s.default.extractTimestamp(e.id),
                    can_send_message: u.default.can(d.Permissions.SEND_MESSAGES, e),
                    parent_channel_type: e.parentChannelThreadType
                }
            }
        },
        507217: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setActiveCommand: function() {
                    return h
                },
                setPreferredCommandId: function() {
                    return E
                },
                updateOptionStates: function() {
                    return g
                },
                updateOptionValidationStates: function() {
                    return A
                },
                updateApplicationGuildCommandPermissions: function() {
                    return T
                },
                querySearchManager: function() {
                    return m
                },
                performAutocomplete: function() {
                    return C
                },
                fetchCommand: function() {
                    return p
                },
                fetchCommands: function() {
                    return S
                },
                fetchCommandsForApplication: function() {
                    return N
                },
                updateRegistry: function() {
                    return M
                },
                fetchApplicationCommandIndex: function() {
                    return v
                }
            });
            var i = n("161179"),
                a = n.n(i),
                l = n("990746"),
                r = n("913144"),
                u = n("798609"),
                s = n("271938"),
                d = n("599110"),
                o = n("299039"),
                c = n("246598"),
                _ = n("524768"),
                f = n("49111");

            function h(e) {
                let {
                    channelId: t,
                    command: n,
                    section: i,
                    location: l,
                    initialValues: u,
                    triggerSection: s,
                    queryLength: d
                } = e;
                null != n && a(n.inputType !== _.ApplicationCommandInputType.PLACEHOLDER, "command should not be placeholder"), r.default.dispatch({
                    type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND",
                    channelId: t,
                    command: n,
                    section: i,
                    initialValues: u,
                    location: l,
                    triggerSection: s,
                    queryLength: d
                })
            }

            function E(e, t) {
                r.default.dispatch({
                    type: "APPLICATION_COMMAND_SET_PREFERRED_COMMAND",
                    channelId: e,
                    commandId: t
                })
            }

            function g(e, t) {
                r.default.dispatch({
                    type: "APPLICATION_COMMAND_UPDATE_OPTIONS",
                    channelId: e,
                    changedOptionStates: t
                })
            }

            function A(e, t) {
                let n = Object.fromEntries(Object.entries(t).map(e => {
                    let [t, n] = e;
                    return [t, {
                        lastValidationResult: n
                    }]
                }));
                g(e, n)
            }

            function T(e, t, n, i) {
                return l.default.put({
                    body: {
                        permissions: i
                    },
                    url: f.Endpoints.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n)
                })
            }
            let m = (e, t, n, i, a) => {
                r.default.dispatch({
                    type: "APPLICATION_COMMAND_SEARCH_STORE_QUERY",
                    context: e,
                    query: t,
                    limit: n,
                    commandType: i,
                    applicationId: a
                })
            };

            function C(e, t, n) {
                var i;
                a(null != t.autocomplete, "Missing autocomplete context");
                let {
                    query: d,
                    name: _
                } = t.autocomplete, h = o.default.fromTimestamp(Date.now());
                r.default.dispatch({
                    type: "APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST",
                    nonce: h,
                    channelId: t.channel.id,
                    query: d,
                    name: _
                }), null == c.default.getAutocompleteChoices(t.channel.id, _, d) && l.default.post({
                    url: f.Endpoints.INTERACTIONS,
                    body: {
                        type: u.InteractionTypes.APPLICATION_COMMAND_AUTOCOMPLETE,
                        application_id: e.applicationId,
                        guild_id: null === (i = t.guild) || void 0 === i ? void 0 : i.id,
                        channel_id: t.channel.id,
                        session_id: s.default.getSessionId(),
                        data: n,
                        nonce: h
                    },
                    timeout: 3e3
                }).catch(() => {
                    r.default.dispatch({
                        type: "INTERACTION_FAILURE",
                        nonce: h
                    })
                })
            }

            function p(e, t, n) {
                r.default.dispatch({
                    type: "APPLICATION_COMMAND_FETCH",
                    channelId: t,
                    commandId: n,
                    guildId: e
                })
            }

            function S(e, t, n) {
                r.default.dispatch({
                    type: "APPLICATION_COMMANDS_FETCH",
                    channelId: t,
                    commandIds: n,
                    guildId: e
                })
            }

            function N(e) {
                let {
                    guildId: t,
                    channelId: n,
                    applicationId: i
                } = e;
                r.default.dispatch({
                    type: "APPLICATION_COMMANDS_FETCH_FOR_APPLICATION",
                    channelId: n,
                    guildId: t,
                    applicationId: i
                })
            }

            function M(e, t, n) {
                r.default.dispatch({
                    type: "APPLICATION_COMMAND_REGISTRY_UPDATE",
                    applications: t,
                    commands: e,
                    channelId: n
                })
            }

            function v(e) {
                let t;
                let n = new AbortController,
                    i = 0;
                switch (e.type) {
                    case "channel":
                        t = f.Endpoints.APPLICATION_COMMAND_INDEX_CHANNEL(e.channelId);
                        break;
                    case "guild":
                        t = f.Endpoints.APPLICATION_COMMAND_INDEX_GUILD(e.guildId);
                        break;
                    case "user":
                        t = f.Endpoints.APPLICATION_COMMAND_INDEX_USER
                }
                let a = async e => {
                    if (!(i >= 3)) return await new Promise(t => setTimeout(t, e)), u()
                }, u = () => l.default.get({
                    url: t,
                    retries: 3 - i - 1,
                    signal: n.signal,
                    onRequestCreated: () => i++
                }).then(t => {
                    if (202 === t.status) return a(3e3);
                    o(!1), r.default.dispatch({
                        type: "APPLICATION_COMMAND_INDEX_FETCH_SUCCESS",
                        target: e,
                        index: t.body
                    })
                }, t => {
                    if (n.signal.aborted) {
                        o(!0);
                        return
                    }
                    if (429 === t.status) return a(1e3 * t.body.retry_after);
                    o(!0), r.default.dispatch({
                        type: "APPLICATION_COMMAND_INDEX_FETCH_FAILURE",
                        target: e
                    })
                }), s = performance.now(), o = e => {
                    let t = performance.now() - s;
                    d.default.track(f.AnalyticEvents.APPLICATION_COMMAND_PERFORMANCE, {
                        duration_ms: t,
                        error: e,
                        aborted: n.signal.aborted,
                        include_applications: !0,
                        retries: Math.max(i - 1, 0),
                        kind: null,
                        command_type: null
                    })
                };
                return r.default.dispatch({
                    type: "APPLICATION_COMMAND_INDEX_FETCH_REQUEST",
                    target: e,
                    abort: n
                }), u()
            }
        },
        246598: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("498225"),
                a = n("913144"),
                l = n("383018");
            let r = new Map,
                u = new Map;

            function s(e) {
                if (!u.has(e)) {
                    var t;
                    u.set(e, {
                        commandId: null === (t = l.default.getActiveCommand(e)) || void 0 === t ? void 0 : t.id,
                        optionName: l.default.getActiveOptionName(e),
                        optionNameToAutocompleteQueries: new Map,
                        optionNameToLastResults: new Map,
                        optionNameToNonce: new Map,
                        optionNameToLastQuery: new Map,
                        lastErrored: !1,
                        lastResponseNonce: void 0
                    })
                }
                return u.get(e)
            }

            function d() {
                return r.clear(), u.clear(), !0
            }

            function o(e) {
                let {
                    channelId: t,
                    command: n
                } = e;
                c(t, null == n ? void 0 : n.id)
            }

            function c(e, t) {
                let n = l.default.getActiveOptionName(e),
                    i = u.get(e);
                return null != i && (t !== i.commandId || n !== i.optionName) && (null != t && t !== i.commandId && (i.optionNameToLastResults.clear(), i.optionNameToNonce.clear(), i.optionNameToLastQuery.clear(), i.optionNameToAutocompleteQueries.clear()), i.lastErrored = !1, i.commandId = t, i.optionName = n, !0)
            }
            class _ extends i.default.Store {
                initialize() {
                    this.waitFor(l.default)
                }
                getLastErrored(e) {
                    return s(e).lastErrored
                }
                getAutocompleteChoices(e, t, n) {
                    var i;
                    let a = s(e);
                    return null === (i = a.optionNameToAutocompleteQueries.get(t)) || void 0 === i ? void 0 : i.get(n)
                }
                getAutocompleteLastChoices(e, t) {
                    let n = s(e);
                    return n.optionNameToLastResults.get(t)
                }
                getLastResponseNonce(e) {
                    return s(e).lastResponseNonce
                }
            }
            _.displayName = "ApplicationCommandAutocompleteStore";
            var f = new _(a.default, {
                CONNECTION_OPEN: d,
                LOGOUT: d,
                CHANNEL_SELECT: d,
                APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST: function(e) {
                    var t;
                    let {
                        nonce: n,
                        channelId: i,
                        query: a,
                        name: l
                    } = e, u = s(i);
                    if (u.optionNameToLastQuery.get(l) === a) return !1;
                    u.optionNameToLastQuery.set(l, a);
                    let d = null === (t = u.optionNameToAutocompleteQueries.get(l)) || void 0 === t ? void 0 : t.get(a);
                    if (null != d) return u.lastErrored = !1, u.optionNameToLastResults.set(l, d), !0;
                    let o = u.optionNameToNonce.get(l);
                    if (null != o && r.delete(o), r.set(n, {
                            channelId: i,
                            query: a,
                            name: l
                        }), u.optionNameToNonce.set(l, n), u.lastErrored) return u.lastErrored = !1, !0
                },
                APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE: function(e) {
                    var t, n;
                    let {
                        choices: i,
                        nonce: a
                    } = e, l = r.get(a);
                    if (null == l) return !1;
                    r.delete(a);
                    let u = null !== (n = null == i ? void 0 : i.map(e => {
                            var t;
                            return {
                                ...e,
                                displayName: null !== (t = e.name_localized) && void 0 !== t ? t : e.name
                            }
                        })) && void 0 !== n ? n : [],
                        d = s(l.channelId);
                    return null == d.optionNameToAutocompleteQueries.get(l.name) && d.optionNameToAutocompleteQueries.set(l.name, new Map), null === (t = d.optionNameToAutocompleteQueries.get(l.name)) || void 0 === t || t.set(l.query, u), d.optionNameToLastQuery.get(l.name) === l.query && (d.lastErrored = !1, d.optionNameToLastResults.set(l.name, u)), d.lastResponseNonce = a, !0
                },
                INTERACTION_FAILURE: function(e) {
                    let {
                        nonce: t
                    } = e;
                    if (null == t) return !1;
                    let n = r.get(t);
                    if (null == n) return !1;
                    r.delete(t);
                    let i = s(n.channelId);
                    return i.lastErrored = !0, !0
                },
                APPLICATION_COMMAND_SET_ACTIVE_COMMAND: o,
                APP_LAUNCHER_SET_ACTIVE_COMMAND: o,
                APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: function(e) {
                    let {
                        channelId: t,
                        command: n
                    } = e;
                    c(t, null == n ? void 0 : n.id)
                }
            })
        },
        383018: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var i = n("498225"),
                a = n("913144"),
                l = n("716241"),
                r = n("982108"),
                u = n("18494"),
                s = n("49111");
            let d = {};

            function o() {
                return d = {}, !0
            }

            function c(e) {
                return !(e in d) && (d[e] = {
                    activeCommand: null,
                    activeCommandSection: null,
                    activeOptionName: null,
                    preferredCommandId: null,
                    optionStates: {},
                    initialValues: {}
                }), d[e]
            }

            function _(e) {
                var t, n, i;
                let {
                    channelId: a,
                    command: r,
                    section: u,
                    initialValues: d,
                    location: o,
                    triggerSection: _,
                    queryLength: f
                } = e, h = c(a);
                if ((null == r ? void 0 : r.id) === (null === (t = h.activeCommand) || void 0 === t ? void 0 : t.id)) return !1;
                h.activeCommand = r, h.activeCommandSection = u, h.activeOptionName = null, h.preferredCommandId = null, h.initialValues = null != d ? d : {};
                let E = {};
                return (null == r ? void 0 : r.options) != null && r.options.forEach(e => {
                    E[e.name] = {
                        isActive: !1,
                        hasValue: !1,
                        lastValidationResult: null,
                        optionValue: null
                    }
                }), h.optionStates = E, null != r && (0, l.trackWithMetadata)(s.AnalyticEvents.APPLICATION_COMMAND_SELECTED, {
                    command_id: null !== (i = null === (n = r.rootCommand) || void 0 === n ? void 0 : n.id) && void 0 !== i ? i : r.id,
                    application_id: r.applicationId,
                    location: o,
                    section: _,
                    query_length: f,
                    command_text_length: r.displayName.length
                }), !0
            }

            function f(e) {
                var t, n;
                let {
                    channelId: i,
                    commandId: a
                } = e, l = c(i);
                return a !== l.preferredCommandId && (null !== l.preferredCommandId || a !== (null !== (n = null === (t = l.activeCommand) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : null)) && (l.activeCommand = null, l.activeOptionName = null, l.preferredCommandId = a, l.optionStates = {}, !0)
            }

            function h(e) {
                let {
                    channelId: t,
                    changedOptionStates: n
                } = e, i = c(t), a = {
                    ...i.optionStates
                };
                for (let [e, t] of Object.entries(n)) {
                    var l, r, u;
                    if (!(e in i.optionStates)) continue;
                    let n = void 0 !== t.hasValue ? t.hasValue : a[e].hasValue;
                    if (!n) {
                        a[e] = {
                            hasValue: !1,
                            isActive: !1,
                            lastValidationResult: null,
                            optionValue: null,
                            location: void 0,
                            length: void 0
                        }, i.activeOptionName === e && (i.activeOptionName = null);
                        continue
                    }
                    let s = a[e];
                    a[e] = {
                        hasValue: !0,
                        isActive: void 0 !== t.isActive ? t.isActive : s.isActive,
                        lastValidationResult: void 0 !== t.lastValidationResult ? t.lastValidationResult : s.lastValidationResult,
                        optionValue: null !== (l = t.optionValue) && void 0 !== l ? l : s.optionValue,
                        location: null !== (r = t.location) && void 0 !== r ? r : s.location,
                        length: null !== (u = t.length) && void 0 !== u ? u : s.length
                    }, void 0 !== t.isActive && (t.isActive ? (null != i.activeOptionName && i.activeOptionName !== e && (a[i.activeOptionName] = {
                        ...a[i.activeOptionName]
                    }, a[i.activeOptionName].isActive = !1), i.activeOptionName = e) : e === i.activeOptionName && (i.activeOptionName = null))
                }
                return i.optionStates = a, !0
            }
            class E extends i.default.Store {
                initialize() {
                    r.default.addChangeListener(() => {
                        let e = u.default.getChannelId();
                        if (null == e) return d = {}, !0;
                        let t = r.default.getCurrentSidebarChannelId(e);
                        if (null != t && t in d) return !1;
                        d = e in d ? {
                            [e]: d[e]
                        } : {}
                    })
                }
                getActiveCommand(e) {
                    let t = c(e);
                    return t.activeCommand
                }
                getActiveCommandSection(e) {
                    let t = c(e);
                    return t.activeCommandSection
                }
                getActiveOptionName(e) {
                    let t = c(e);
                    return t.activeOptionName
                }
                getActiveOption(e) {
                    var t, n, i;
                    let a = c(e);
                    return null !== (i = null === (n = a.activeCommand) || void 0 === n ? void 0 : null === (t = n.options) || void 0 === t ? void 0 : t.find(e => e.name === a.activeOptionName)) && void 0 !== i ? i : null
                }
                getPreferredCommandId(e) {
                    let t = c(e);
                    return t.preferredCommandId
                }
                getOptionStates(e) {
                    let t = c(e);
                    return t.optionStates
                }
                getOptionState(e, t) {
                    let n = c(e);
                    return n.optionStates[t]
                }
                getOption(e, t) {
                    var n, i;
                    let a = c(e);
                    return null === (i = a.activeCommand) || void 0 === i ? void 0 : null === (n = i.options) || void 0 === n ? void 0 : n.find(e => e.name === t)
                }
                getState(e) {
                    return {
                        ...c(e)
                    }
                }
            }
            E.displayName = "ApplicationCommandStore";
            let g = new E(a.default, {
                CONNECTION_OPEN: o,
                CHANNEL_SELECT: o,
                LOGOUT: o,
                APPLICATION_COMMAND_SET_ACTIVE_COMMAND: _,
                APPLICATION_COMMAND_SET_PREFERRED_COMMAND: f,
                APPLICATION_COMMAND_UPDATE_OPTIONS: h,
                APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: function(e) {
                    let {
                        channelId: t,
                        preferredCommandId: n,
                        command: i,
                        section: a,
                        changedOptionStates: l
                    } = e, r = _({
                        type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND",
                        channelId: t,
                        command: i,
                        section: a
                    }), u = f({
                        type: "APPLICATION_COMMAND_SET_PREFERRED_COMMAND",
                        channelId: t,
                        commandId: n
                    }), s = h({
                        type: "APPLICATION_COMMAND_UPDATE_OPTIONS",
                        channelId: t,
                        changedOptionStates: l
                    });
                    return r || u || s
                }
            });
            var A = g
        },
        524768: function(e, t, n) {
            "use strict";
            var i, a, l, r, u, s, d, o, c, _, f, h;
            n.r(t), n.d(t, {
                ApplicationCommandSectionType: function() {
                    return i
                },
                ApplicationCommandInputType: function() {
                    return a
                },
                ApplicationCommandPermissionType: function() {
                    return l
                },
                ApplicationCommandTriggerLocations: function() {
                    return r
                },
                ApplicationCommandTriggerSections: function() {
                    return u
                },
                CommandOrigin: function() {
                    return s
                }
            }), (d = i || (i = {}))[d.BUILT_IN = 0] = "BUILT_IN", d[d.APPLICATION = 1] = "APPLICATION", (o = a || (a = {}))[o.BUILT_IN = 0] = "BUILT_IN", o[o.BUILT_IN_TEXT = 1] = "BUILT_IN_TEXT", o[o.BUILT_IN_INTEGRATION = 2] = "BUILT_IN_INTEGRATION", o[o.BOT = 3] = "BOT", o[o.PLACEHOLDER = 4] = "PLACEHOLDER", (c = l || (l = {}))[c.ROLE = 1] = "ROLE", c[c.USER = 2] = "USER", c[c.CHANNEL = 3] = "CHANNEL", (_ = r || (r = {})).DISCOVERY = "discovery", _.SUGGESTION = "suggestion", _.MENTION = "mention", _.PASTE = "paste", _.RECALL = "recall", _.POPULAR_COMMANDS = "popular_commands", _.MJ_CHAT_BAR = "mj_chat_bar", _.QUERY = "query", (f = u || (u = {}))[f.BUILT_IN = 1] = "BUILT_IN", f[f.FRECENCY = 2] = "FRECENCY", f[f.APP = 3] = "APP", (h = s || (s = {}))[h.CHAT = 0] = "CHAT", h[h.APPLICATION_LAUNCHER = 1] = "APPLICATION_LAUNCHER"
        },
        349778: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isForumActivityExperimentEnabled: function() {
                    return l
                }
            });
            var i = n("943314"),
                a = n("531869");

            function l(e) {
                let t = a.default.getCurrentConfig({
                        guildId: null != e ? e : "",
                        location: "3fde52_1"
                    }),
                    n = i.default.getCurrentConfig({
                        location: "3fde52_2"
                    });
                return !!(t.enabled || n.enabled)
            }
        },
        953371: function(e, t, n) {
            "use strict";
            var i, a, l, r;
            n.r(t), n.d(t, {
                MAX_FORUM_TAGS: function() {
                    return u
                },
                MAX_FORUM_POST_TAGS: function() {
                    return s
                },
                MAX_FORUM_TEMPLATE_LENGTH: function() {
                    return d
                },
                ForumOnboardingCTAs: function() {
                    return i
                },
                COMMUNITY_PORTAL_FORUM_PAGE: function() {
                    return o
                },
                ForumTimestampFormats: function() {
                    return a
                }
            });
            let u = 20,
                s = 5,
                d = 256;
            (l = i || (i = {})).PERMISSIONS = "Permissions", l.GUIDELINES = "Guidelines", l.TAGS = "Tags", l.DEFAULT_REACTION = "Default Reaction", l.CREATE_POST = "Create Post";
            let o = "https://discord.com/community/creating-value-with-conversation";
            (r = a || (a = {}))[r.DURATION_AGO = 0] = "DURATION_AGO", r[r.POSTED_DURATION_AGO = 1] = "POSTED_DURATION_AGO"
        },
        430475: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("498225"),
                a = n("913144"),
                l = n("692038"),
                r = n("10802"),
                u = n("697218");
            let s = {};

            function d(e) {
                let {
                    threads: t,
                    firstMessages: n
                } = e;
                if (null == n) return !1;
                for (let e of t) s[e.id] = {
                    loaded: !0,
                    firstMessage: null
                };
                for (let e of n) o(e.channel_id, e)
            }

            function o(e, t) {
                let n = null == t ? null : (0, l.createMessageRecord)(t);
                s[e] = {
                    loaded: !0,
                    firstMessage: n
                }
            }

            function c(e) {
                let {
                    type: t,
                    channelId: n,
                    messageId: i,
                    userId: a,
                    emoji: l,
                    optimistic: r,
                    burst: d
                } = e, o = s[n];
                if (null == o || null == o.firstMessage || i !== o.firstMessage.id) return !1;
                let c = u.default.getCurrentUser(),
                    _ = null != c && c.id === a;
                if (r && !_) return !1;
                if (s[n] = {
                        ...o
                    }, "MESSAGE_REACTION_ADD" === t) {
                    let {
                        colors: t
                    } = e;
                    s[n].firstMessage = o.firstMessage.addReaction(l, _, a, t, d)
                } else s[n].firstMessage = o.firstMessage.removeReaction(l, _, d)
            }
            class _ extends i.default.Store {
                initialize() {
                    this.waitFor(r.default, u.default)
                }
                isLoading(e) {
                    var t;
                    return (null === (t = s[e]) || void 0 === t ? void 0 : t.loaded) !== !0
                }
                getMessage(e) {
                    return !(e in s) && (s[e] = {
                        loaded: !1,
                        firstMessage: null
                    }), s[e]
                }
            }
            _.displayName = "ForumPostMessagesStore";
            var f = new _(a.default, {
                CONNECTION_OPEN: function() {
                    s = {}
                },
                MESSAGE_CREATE: function(e) {
                    if (e.isPushNotification || e.message.id !== e.message.channel_id) return !1;
                    o(e.message.channel_id, e.message)
                },
                MESSAGE_UPDATE: function(e) {
                    if (e.message.id !== e.message.channel_id) return !1;
                    let t = s[e.message.id];
                    if (null == t || null == t.firstMessage) return !1;
                    s[e.message.id] = {
                        ...t,
                        firstMessage: (0, l.updateMessageRecord)(t.firstMessage, e.message)
                    }
                },
                MESSAGE_DELETE: function(e) {
                    if (e.id !== e.channelId) return !1;
                    s[e.channelId] = {
                        loaded: !0,
                        firstMessage: null
                    }
                },
                THREAD_CREATE: function(e) {
                    let t = s[e.channel.id];
                    if (null != t || !r.default.isSubscribedToThreads(e.channel.guild_id)) return !1;
                    s[e.channel.id] = {
                        loaded: !0,
                        firstMessage: null
                    }
                },
                MESSAGE_REACTION_ADD: c,
                MESSAGE_REACTION_REMOVE: c,
                MESSAGE_REACTION_REMOVE_ALL: function(e) {
                    let {
                        channelId: t,
                        messageId: n
                    } = e, i = s[t];
                    if (null == i || null == i.firstMessage || n !== i.firstMessage.id) return !1;
                    s[t] = {
                        ...i,
                        firstMessage: i.firstMessage.set("reactions", [])
                    }
                },
                MESSAGE_REACTION_REMOVE_EMOJI: function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        emoji: i
                    } = e, a = s[t];
                    if (null == a || null == a.firstMessage || n !== a.firstMessage.id) return !1;
                    s[t] = {
                        ...a,
                        firstMessage: a.firstMessage.removeReactionsForEmoji(i)
                    }
                },
                MESSAGE_REACTION_ADD_MANY: function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        reactions: i
                    } = e, a = s[t];
                    if (null == a || null == a.firstMessage || n !== a.firstMessage.id) return !1;
                    let l = u.default.getCurrentUser(),
                        r = a.firstMessage.addReactionBatch(i, null == l ? void 0 : l.id);
                    s[t] = {
                        ...a,
                        firstMessage: r
                    }
                },
                LOAD_FORUM_POSTS: function(e) {
                    let {
                        threads: t
                    } = e;
                    for (let e in t) o(e, t[e].first_message)
                },
                LOAD_THREADS_SUCCESS: d,
                LOAD_ARCHIVED_THREADS_SUCCESS: d,
                LOAD_MESSAGES_SUCCESS: function(e) {
                    let {
                        channelId: t,
                        messages: n
                    } = e, i = n[n.length - 1];
                    null != i && i.id === t && (s[t] = {
                        loaded: !0,
                        firstMessage: (0, l.createMessageRecord)(i)
                    })
                }
            })
        },
        994810: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("498225"),
                a = n("913144"),
                l = n("42203");
            let r = {};

            function u(e) {
                let t = l.default.getChannel(e);
                return !!(null != t && t.isForumLikeChannel()) || !1
            }

            function s(e) {
                var t;
                let n = null !== (t = r[e]) && void 0 !== t ? t : {
                    query: null,
                    loading: !1,
                    results: null
                };
                return r[e] = n, n
            }
            class d extends i.default.Store {
                getSearchQuery(e) {
                    let t = r[e];
                    return null == t ? void 0 : t.query
                }
                getSearchLoading(e) {
                    var t;
                    let n = r[e];
                    return null !== (t = null == n ? void 0 : n.loading) && void 0 !== t && t
                }
                getSearchResults(e) {
                    let t = r[e];
                    return null == t ? void 0 : t.results
                }
                getHasSearchResults(e) {
                    let t = r[e];
                    return (null == t ? void 0 : t.results) != null && t.results.length > 0
                }
            }
            d.displayName = "ForumSearchStore";
            var o = new d(a.default, {
                CONNECTION_OPEN: function() {
                    r = {}
                },
                THREAD_DELETE: function(e) {
                    var t;
                    let {
                        channel: n
                    } = e, i = n.parent_id;
                    if (null == i) return !1;
                    let a = r[i];
                    if (null == a) return !1;
                    r[i] = {
                        ...a,
                        results: null === (t = a.results) || void 0 === t ? void 0 : t.filter(e => n.id !== e)
                    }
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e, n = delete r[t.id];
                    return n
                },
                FORUM_SEARCH_QUERY_UPDATED: function(e) {
                    let {
                        channelId: t,
                        query: n
                    } = e;
                    if (!u(t)) return !1;
                    let i = s(t);
                    r[t] = {
                        ...i,
                        query: n,
                        results: null
                    }
                },
                FORUM_SEARCH_START: function(e) {
                    let {
                        channelId: t
                    } = e;
                    if (!u(t)) return !1;
                    let n = s(t);
                    r[t] = {
                        ...n,
                        loading: !0
                    }
                },
                FORUM_SEARCH_SUCCESS: function(e) {
                    let {
                        channelId: t,
                        threadIds: n
                    } = e;
                    if (!u(t)) return !1;
                    let i = s(t);
                    r[t] = {
                        ...i,
                        loading: !1,
                        results: n
                    }
                },
                FORUM_SEARCH_FAILURE: function(e) {
                    let {
                        channelId: t
                    } = e;
                    if (!u(t)) return !1;
                    let n = s(t);
                    r[t] = {
                        ...n,
                        loading: !1,
                        results: []
                    }
                },
                FORUM_SEARCH_CLEAR: function(e) {
                    let {
                        channelId: t
                    } = e;
                    if (!u(t)) return !1;
                    let n = delete r[t];
                    return n
                }
            })
        },
        786742: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getForumPostReadStates: function() {
                    return o
                },
                getForumPostReadStatesById: function() {
                    return c
                },
                getForumTimestampFormatter: function() {
                    return f
                },
                canDisplayPostUnreadMessageCount: function() {
                    return h
                },
                isForumPostPinned: function() {
                    return E
                }
            });
            var i = n("497411"),
                a = n("42203"),
                l = n("305961"),
                r = n("660478"),
                u = n("953371"),
                s = n("724210"),
                d = n("782340");

            function o(e, t) {
                let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [r.default];
                return {
                    isNew: !e.isArchivedThread() && n.isNewForumThread(e.id, e.parent_id, t),
                    hasUnreads: !e.isArchivedThread() && n.isForumPostUnread(e.id)
                }
            }

            function c(e) {
                let [t, n, i] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.default, l.default, r.default], u = t.getChannel(e);
                if (null == u) return null;
                let s = n.getGuild(u.guild_id);
                return null == s ? null : o(u, s, [i])
            }
            let _ = () => ({
                minutes: d.default.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_MINUTES,
                hours: d.default.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_HOURS,
                days: d.default.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_DAYS,
                month: d.default.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_MORE_THAN_MONTH
            });

            function f(e, t) {
                if (t === u.ForumTimestampFormats.POSTED_DURATION_AGO && e === i.ThreadSortOrder.CREATION_DATE) return _
            }

            function h(e, t) {
                let [n] = t, i = n.hasTrackedUnread(e), a = n.hasOpenedThread(e), l = null != n.getTrackedAckMessageId(e);
                return i && a && l
            }

            function E(e) {
                var t;
                return (null === (t = a.default.getChannel(e)) || void 0 === t ? void 0 : t.hasFlag(s.ChannelFlags.PINNED)) === !0
            }
        },
        446480: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("925149"),
                a = n("42203"),
                l = n("349778"),
                r = n("688169"),
                u = new class e {
                    constructor() {
                        this.filterTagIds = null, this.sortOrder = null, this.layout = null, this.setFilterTagIds = e => {
                            this.filterTagIds = e
                        }, this.setSortOrder = e => {
                            this.sortOrder = e
                        }, this.setLayout = e => {
                            this.layout = e
                        }, this.getFilterTagIdsAnalytics = () => null != this.filterTagIds ? Array.from(this.filterTagIds) : [], this.getSortOrderAnalytics = e => {
                            var t, n;
                            return null !== (n = this.sortOrder) && void 0 !== n ? n : null === (t = a.default.getChannel(e)) || void 0 === t ? void 0 : t.getDefaultSortOrder()
                        }, this.getLayoutAnalytics = e => {
                            var t;
                            let n = a.default.getChannel(e),
                                u = null !== (t = this.layout) && void 0 !== t ? t : null == n ? void 0 : n.getDefaultLayout(),
                                s = (0, l.isForumActivityExperimentEnabled)(null == n ? void 0 : n.guild_id),
                                d = s && u === i.ForumLayout.LIST ? r.INCREASED_ACTIVITY_LIST_FORUM_LAYOUT : u;
                            return d
                        }
                    }
                }
        },
        589641: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("689988"),
                a = n("689275"),
                l = n("271938"),
                r = n("42203"),
                u = n("786742");
            class s extends i.default {
                handleThreadCreate(e) {
                    let {
                        channel: t
                    } = e;
                    if (t.isForumPost()) {
                        let e = t.ownerId === l.default.getId();
                        this.readStateSnapshots[t.id] = {
                            isNew: !e,
                            hasUnreads: !e
                        }
                    }
                }
                constructor(...e) {
                    super(...e), this.readStateSnapshots = {}, this.actions = {
                        CHANNEL_SELECT: e => this.handleChannelSelect(e),
                        THREAD_CREATE: e => this.handleThreadCreate(e)
                    }, this.handleChannelSelect = e => {
                        let {
                            channelId: t
                        } = e;
                        if (null == t) return;
                        let n = r.default.getChannel(t);
                        null != n && n.isForumLikeChannel() && (this.readStateSnapshots = {}, this.processForumChannel(n.guild_id, t))
                    }, this.processForumChannel = (e, t) => {
                        let n = a.default.getThreadsForParent(e, t);
                        Object.keys(n).forEach(e => {
                            let t = (0, u.getForumPostReadStatesById)(e);
                            null != t && (this.readStateSnapshots[e] = t)
                        })
                    }, this.getReadStateSnapshotAnalytics = e => this.readStateSnapshots[e]
                }
            }
            var d = new s
        },
        369814: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("462567");

            function a(e) {
                return {
                    channelId: e,
                    sessionId: (0, i.v4)()
                }
            }
            var l = new class e {
                getForumChannelSessionId(e) {
                    return null == this.session && (this.session = a(e)), this.session.channelId !== e && (this.session = a(e)), this.session.sessionId
                }
            }
        },
        867965: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                trackForumChannelSeenBatch: function() {
                    return g
                },
                trackForumSearched: function() {
                    return A
                },
                trackForumSearchCleared: function() {
                    return T
                },
                trackForumTagFilterClicked: function() {
                    return m
                },
                trackForumCreateNewPostClick: function() {
                    return C
                },
                trackForumCreateNewPostKeybindUsed: function() {
                    return p
                },
                maybeTrackForumNewPostDraftCreated: function() {
                    return S
                },
                trackForumNewPostCleared: function() {
                    return N
                },
                trackForumPostCreated: function() {
                    return M
                },
                trackForumScrolled: function() {
                    return v
                },
                trackForumMorePostsLoaded: function() {
                    return R
                },
                trackForumPostClicked: function() {
                    return O
                },
                trackForumSortOrderUpdated: function() {
                    return I
                },
                trackForumLayoutUpdated: function() {
                    return D
                },
                trackForumPostLinkCopied: function() {
                    return L
                },
                trackForumOnboardingClicked: function() {
                    return y
                },
                trackForumUpsellModalClicked: function() {
                    return b
                },
                trackForumAddMediaToOriginalPostClicked: function() {
                    return P
                },
                trackForumHelperCardClicked: function() {
                    return F
                },
                trackForumChannelMediaUploaderClicked: function() {
                    return U
                },
                trackForumEnableAutomodClicked: function() {
                    return H
                },
                trackForumPostSidebarViewed: function() {
                    return w
                },
                trackForumUpsellModalViewed: function() {
                    return G
                },
                trackForumCreateNewPostStarted: function() {
                    return k
                }
            });
            var i = n("925149"),
                a = n("716241"),
                l = n("701916"),
                r = n("42203"),
                u = n("474643"),
                s = n("599110"),
                d = n("773336"),
                o = n("349778"),
                c = n("430475"),
                _ = n("994810"),
                f = n("688169"),
                h = n("318321"),
                E = n("49111");

            function g(e) {
                let {
                    guildId: t,
                    channelId: n,
                    sessionId: i,
                    postIds: l,
                    additionalTimes: r
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_SEEN_BATCH, {
                    ...(0, h.collectForumAnalyticsMetadata)({
                        channelId: n,
                        sessionId: i
                    }),
                    guild_id: t,
                    channel_id: n,
                    post_ids: l,
                    additional_seen_time_millis: r
                })
            }

            function A(e) {
                let {
                    guildId: t,
                    channelId: n,
                    numSearchResults: i
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_SEARCHED, {
                    ...(0, h.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n,
                    num_search_results: i
                })
            }

            function T(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_SEARCH_CLEARED, {
                    ...(0, h.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n
                })
            }

            function m(e) {
                let {
                    guildId: t,
                    channelId: n,
                    tagId: i,
                    filterTagIds: l,
                    added: r,
                    location: u
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_TAG_FILTER_CLICKED, {
                    ...(0, h.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n,
                    tag_id: i,
                    filter_tag_ids: l,
                    added: r,
                    location: u
                })
            }

            function C(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_CREATE_NEW_POST_CLICKED, {
                    ...(0, h.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n
                })
            }

            function p(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_CREATE_NEW_POST_KEYBIND_USED, {
                    ...(0, h.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n
                })
            }

            function S(e) {
                var t, n, i, l;
                let {
                    guildId: s,
                    channelId: d
                } = e, o = r.default.getChannel(d);
                if (null == o) return;
                let c = u.default.getThreadSettings(d),
                    _ = null === (t = o.template) || void 0 === t ? void 0 : t.trim(),
                    f = u.default.getDraft(d, u.DraftType.FirstThreadMessage),
                    g = null == f || 0 === f.length || (null == f ? void 0 : f.trim()) === _,
                    A = (null == c ? void 0 : c.appliedTags) == null || (null == c ? void 0 : null === (n = c.appliedTags) || void 0 === n ? void 0 : n.size) === 0,
                    T = (null == c ? void 0 : c.name) == null || (null == c ? void 0 : null === (l = c.name) || void 0 === l ? void 0 : null === (i = l.trim()) || void 0 === i ? void 0 : i.length) === 0;
                (!g || !A || !T) && a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_NEW_POST_DRAFT_CREATED, {
                    ...(0, h.collectForumAnalyticsMetadata)({
                        channelId: d
                    }),
                    guild_id: s,
                    channel_id: d,
                    applied_tag_ids: (0, h.getForumPostDraftAppliedTagIds)(d),
                    num_attachments: (0, h.getForumPostDraftNumAttachments)(d)
                })
            }

            function N(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_NEW_POST_DRAFT_CLEARED, {
                    ...(0, h.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n
                })
            }

            function M(e) {
                let {
                    guildId: t,
                    channelId: n,
                    postId: i
                } = e;

                function l() {
                    a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_POST_CREATED, {
                        ...(0, h.collectForumPostAnalyticsMetadata)({
                            channelId: i
                        }),
                        guild_id: t,
                        channel_id: n
                    })
                }
                let r = c.default.isLoading(i);
                r ? c.default.addConditionalChangeListener(() => {
                    let e = c.default.isLoading(i);
                    return !!e || (l(), !1)
                }) : l()
            }

            function v(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_SCROLLED, {
                    ...(0, h.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n
                })
            }

            function R(e) {
                let {
                    guildId: t,
                    channelId: n,
                    numArchivedThreads: i,
                    hasMoreThreads: l,
                    filterTagIds: u,
                    sortOrder: d
                } = e;
                s.default.track(E.AnalyticEvents.FORUM_CHANNEL_MORE_POSTS_LOADED, {
                    ...(0, a.collectGuildAnalyticsMetadata)(t),
                    ...(0, a.collectChannelAnalyticsMetadata)(r.default.getChannel(n)),
                    ...(0, h.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n,
                    num_archived_threads: i,
                    num_active_threads: (0, h.getNumActiveThreads)(t, n),
                    has_more_threads: l,
                    filter_tag_ids: u,
                    sort_order: d
                })
            }

            function O(e) {
                let {
                    guildId: t,
                    channelId: n,
                    postId: i,
                    location: l
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_POST_CLICKED, {
                    ...(0, h.collectForumPostAnalyticsMetadata)({
                        channelId: i
                    }),
                    guild_id: t,
                    channel_id: n,
                    is_search_result: null != _.default.getSearchResults(n),
                    location: l
                })
            }

            function I(e) {
                let {
                    guildId: t,
                    channelId: n,
                    sortOrder: i
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_POSTS_SORTED, {
                    ...(0, h.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n,
                    sort_type: (0, h.convertSortOrderToReadableString)(i),
                    sort_order: i,
                    forum_channel_sort_order: i
                })
            }

            function D(e) {
                let {
                    guildId: t,
                    channelId: n,
                    forumLayout: l
                } = e, r = (0, o.isForumActivityExperimentEnabled)(t) && l === i.ForumLayout.LIST ? f.INCREASED_ACTIVITY_LIST_FORUM_LAYOUT : l;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_LAYOUT_UPDATED, {
                    ...(0, h.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n,
                    forum_channel_layout: r
                })
            }

            function L(e) {
                let {
                    postId: t,
                    location: n
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_POST_LINK_COPIED, {
                    forum_post_id: t,
                    location: n
                })
            }

            function y(e) {
                let {
                    onboardingCTA: t
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_ONBOARDING_CLICKED, {
                    onboarding_cta_type: t
                })
            }

            function b(e) {
                let {
                    forumDemoId: t
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_UPSELL_MODAL_CLICKED, {
                    forum_demo_id: t
                })
            }

            function P(e) {
                let {
                    added: t
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_CLICKED, {
                    added: t
                })
            }

            function F(e) {
                let {
                    readGuideCta: t
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_HELPER_CARD_CLICKED, {
                    read_guide_cta: t
                })
            }

            function U(e) {
                let {
                    isMobile: t
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_MEDIA_UPLOADER_CLICKED, {
                    is_mobile: t
                })
            }

            function H() {
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_ENABLE_AUTOMOD_CLICKED)
            }

            function w(e) {
                a.default.trackWithMetadata(E.AnalyticEvents.CHANNEL_OPENED, {
                    ...(0, a.collectGuildAnalyticsMetadata)(e.guild_id),
                    ...(0, a.collectChannelAnalyticsMetadata)(e),
                    ...(0, l.collectThreadMetadata)(e, !0),
                    channel_id: e.id,
                    guild_id: e.guild_id,
                    parent_id: e.parent_id,
                    parent_channel_type: e.parentChannelThreadType,
                    channel_view: "Split View",
                    platform: (0, d.getPlatform)()
                })
            }

            function G() {
                a.default.trackWithMetadata(E.AnalyticEvents.OPEN_MODAL, {
                    type: "Forum Channel Upsell Modal",
                    location: {
                        section: E.AnalyticsSections.CHANNEL_WELCOME_CTA
                    }
                })
            }

            function k(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.THREAD_CREATION_STARTED, {
                    ...(0, l.collectThreadMetadata)(r.default.getChannel(n)),
                    channel_id: n,
                    guild_id: t
                })
            }
        },
        318321: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getForumChannelSessionId: function() {
                    return C
                },
                convertSortOrderToReadableString: function() {
                    return p
                },
                getForumPostDraftNumAttachments: function() {
                    return S
                },
                getForumPostDraftAppliedTagIds: function() {
                    return N
                },
                getNumActiveThreads: function() {
                    return M
                },
                collectForumAnalyticsMetadata: function() {
                    return R
                },
                collectForumPostAnalyticsMetadata: function() {
                    return O
                }
            });
            var i = n("497411"),
                a = n("500947"),
                l = n("689275"),
                r = n("755624"),
                u = n("800843"),
                s = n("610730"),
                d = n("42203"),
                o = n("474643"),
                c = n("957255"),
                _ = n("585722"),
                f = n("430475"),
                h = n("446480"),
                E = n("589641"),
                g = n("369814"),
                A = n("49111"),
                T = n("724210"),
                m = n("648564");

            function C(e) {
                return g.default.getForumChannelSessionId(e)
            }

            function p(e) {
                switch (e) {
                    case i.ThreadSortOrder.CREATION_DATE:
                        return m.ThreadSortOrderReadableForAnalytics.CREATION_DATE;
                    case i.ThreadSortOrder.LATEST_ACTIVITY:
                        return m.ThreadSortOrderReadableForAnalytics.LATEST_ACTIVITY;
                    default:
                        throw Error("Unexpected sort order ".concat(e))
                }
            }

            function S(e) {
                return _.default.getUploads(e, o.DraftType.FirstThreadMessage).length
            }

            function N(e) {
                var t, n;
                let i = d.default.getChannel(e);
                if (null == i) return [];
                let a = d.default.getChannel(i.parent_id),
                    l = null == a ? void 0 : a.availableTags;
                if (null == a || null == l) return [];
                let r = null !== (n = null === (t = o.default.getThreadSettings(e)) || void 0 === t ? void 0 : t.appliedTags) && void 0 !== n ? n : new Set,
                    u = new Set(l.map(e => e.id));
                return Array.from(r).filter(e => u.has(e))
            }

            function M(e, t) {
                return Object.keys(l.default.getThreadsForParent(e, t)).length
            }

            function v(e) {
                let {
                    loaded: t,
                    firstMessage: n
                } = f.default.getMessage(e);
                return t ? n : null
            }

            function R(e) {
                var t, n, i, a;
                let {
                    channelId: l,
                    sessionId: r
                } = e, u = d.default.getChannel(l);
                return null != u && u.isForumLikeChannel() ? {
                    forum_channel_has_guidelines: null != u.topic && u.topic.trim().length > 0,
                    forum_channel_default_emoji_reaction_id: null === (t = u.defaultReactionEmoji) || void 0 === t ? void 0 : t.emojiId,
                    forum_channel_default_emoji_reaction_name: null === (n = u.defaultReactionEmoji) || void 0 === n ? void 0 : n.emojiName,
                    forum_channel_available_tag_ids: null !== (a = null === (i = u.availableTags) || void 0 === i ? void 0 : i.map(e => e.id)) && void 0 !== a ? a : [],
                    forum_channel_tag_required: u.hasFlag(T.ChannelFlags.REQUIRE_TAG),
                    forum_channel_can_create_post: c.default.can(A.Permissions.SEND_MESSAGES, u),
                    forum_channel_filter_tag_ids: h.default.getFilterTagIdsAnalytics(),
                    forum_channel_sort_order: h.default.getSortOrderAnalytics(u.id),
                    forum_channel_session_id: null != r ? r : C(u.id),
                    forum_channel_layout: h.default.getLayoutAnalytics(u.id),
                    forum_channel_default_sort_order: u.defaultSortOrder,
                    forum_channel_default_layout: u.defaultForumLayout
                } : null
            }

            function O(e) {
                var t, n, i, l, o, c, _;
                let {
                    channelId: f,
                    sessionId: h
                } = e, g = d.default.getChannel(f);
                if (null == g || !g.isForumPost()) return null;
                let A = d.default.getChannel(g.parent_id);
                return null != A && A.isForumLikeChannel() ? {
                    ...R({
                        channelId: A.id,
                        sessionId: h
                    }),
                    thread_approximate_member_count: u.default.getMemberCount(f),
                    thread_approximate_message_count: s.default.getCount(f),
                    thread_archived: (null === (t = g.threadMetadata) || void 0 === t ? void 0 : t.archived) === !0,
                    thread_locked: null !== (c = null === (n = g.threadMetadata) || void 0 === n ? void 0 : n.locked) && void 0 !== c && c,
                    thread_auto_archive_duration_minutes: null !== (_ = null === (i = g.threadMetadata) || void 0 === i ? void 0 : i.autoArchiveDuration) && void 0 !== _ ? _ : 0,
                    thread_approximate_creation_date: a.default.extractTimestamp(f),
                    forum_post_id: g.id,
                    forum_post_first_message_id: g.id,
                    forum_post_num_reactions: function(e) {
                        let t = v(e);
                        return null == t ? 0 : t.reactions.reduce((e, t) => e + t.count, 0)
                    }(g.id),
                    forum_post_num_unique_reactions: function(e) {
                        let t = v(e);
                        return null == t ? 0 : t.reactions.length
                    }(g.id),
                    forum_post_applied_tag_ids: function(e) {
                        var t, n;
                        let i = d.default.getChannel(e);
                        if (null == i) return [];
                        let a = d.default.getChannel(i.parent_id),
                            l = null == a ? void 0 : a.availableTags;
                        if (null == a || null == l) return [];
                        let r = new Set(l.map(e => e.id));
                        return null !== (n = null === (t = i.appliedTags) || void 0 === t ? void 0 : t.filter(e => r.has(e))) && void 0 !== n ? n : []
                    }(g.id),
                    forum_post_is_pinned: g.hasFlag(T.ChannelFlags.PINNED),
                    forum_post_is_new: null === (l = E.default.getReadStateSnapshotAnalytics(g.id)) || void 0 === l ? void 0 : l.isNew,
                    forum_post_is_unread: null === (o = E.default.getReadStateSnapshotAnalytics(g.id)) || void 0 === o ? void 0 : o.hasUnreads,
                    forum_post_is_following: r.default.hasJoined(g.id),
                    forum_post_attachment_mimetypes: function(e) {
                        var t;
                        let n = v(e);
                        return null == n ? [] : n.attachments.map(e => null !== (t = e.content_type) && void 0 !== t ? t : "unknown")
                    }(g.id)
                } : null
            }
        },
        688169: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                INCREASED_ACTIVITY_LIST_FORUM_LAYOUT: function() {
                    return l
                },
                useForumActivityExperiment: function() {
                    return r
                }
            });
            var i = n("943314"),
                a = n("531869");
            let l = 3;

            function r(e) {
                let t = a.default.useExperiment({
                        guildId: null != e ? e : "",
                        location: "9a247a_1"
                    }),
                    n = i.default.useExperiment({
                        location: "9a247a_2"
                    });
                return !!(t.enabled || n.enabled)
            }
        },
        821343: function(e, t, n) {
            "use strict";
            let i;
            n.r(t), n.d(t, {
                PAGE_SIZE: function() {
                    return A
                },
                default: function() {
                    return b
                }
            });
            var a = n("427964"),
                l = n.n(a),
                r = n("497411"),
                u = n("500947"),
                s = n("498225"),
                d = n("913144"),
                o = n("786742"),
                c = n("867965"),
                _ = n("233069"),
                f = n("42203"),
                h = n("660478"),
                E = n("449008"),
                g = n("755624");
            let A = 25,
                T = !1,
                m = !0,
                C = !1,
                p = !1,
                S = null,
                N = r.ThreadSortOrder.LATEST_ACTIVITY,
                M = [],
                v = 0;

            function R() {
                T = !1, m = !0, C = !1, p = !1, S = null, N = r.ThreadSortOrder.LATEST_ACTIVITY, i = new Set, v = 0, M = []
            }

            function O(e, t) {
                return t === r.ThreadSortOrder.LATEST_ACTIVITY ? h.default.lastMessageId(e.id) : e.id
            }

            function I() {
                if (null == S) return !1;
                let e = !C,
                    t = f.default.getChannel(M[M.length - 1]),
                    n = null == t ? null : O(t, N);
                M = l(f.default.getAllThreadsForParent(S)).filter(e => e.isArchivedThread()).filter(t => {
                    var a;
                    if (0 !== i.size && (null === (a = t.appliedTags) || void 0 === a ? void 0 : a.some(e => i.has(e))) !== !0) return !1;
                    if (e || null == n) return !0;
                    {
                        let e = null == t ? null : O(t, N);
                        return null != e && u.default.compare(e, n) >= 0
                    }
                }).sort((e, t) => u.default.compare(O(e, N), O(t, N))).map(e => e.id).reverse().value()
            }

            function D(e) {
                if (!(M.indexOf(e) >= 0)) return !1;
                M = M.filter(t => t !== e)
            }
            let L = [];
            class y extends s.default.Store {
                initialize() {
                    this.waitFor(f.default, g.default, h.default)
                }
                get canLoadMore() {
                    return C && !T && !p
                }
                get nextOffset() {
                    return v
                }
                get isInitialLoad() {
                    return m
                }
                isLoading(e, t, n) {
                    return S === e && N === t && (0, E.areSetsEqual)(i, n) ? T : (R(), !1)
                }
                getThreads(e, t, n) {
                    return S === e && N === t && (0, E.areSetsEqual)(i, n) ? M : L
                }
            }
            y.displayName = "ArchivedThreadsStore";
            var b = new y(d.default, {
                CONNECTION_OPEN: R,
                THREAD_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return D(t.id)
                },
                THREAD_UPDATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return S === t.parent_id && !!(0, o.isForumPostPinned)(t.id) && void D(t.id)
                },
                CHANNEL_DELETE: function(e) {
                    if (e.channel.id !== S) return !1;
                    R()
                },
                LOAD_ARCHIVED_THREADS: function(e) {
                    (e.channelId !== S || e.sortOrder !== N || !(0, E.areSetsEqual)(e.tagFilter, i)) && R(), S = e.channelId, N = e.sortOrder, i = e.tagFilter instanceof Set ? e.tagFilter : new Set(e.tagFilter), T = !0, m = !1
                },
                LOAD_ARCHIVED_THREADS_SUCCESS: function(e) {
                    if (e.channelId !== S || e.sortOrder !== N || !(0, E.areSetsEqual)(e.tagFilter, i)) return !1;
                    let t = e.threads.filter(e => _.ALL_CHANNEL_TYPES.has(e.type)).map(e => e.id);
                    M = M.concat(t);
                    let n = f.default.getChannel(S);
                    null != n && n.isForumLikeChannel() && (0, c.trackForumMorePostsLoaded)({
                        guildId: n.guild_id,
                        channelId: n.id,
                        numArchivedThreads: M.length,
                        hasMoreThreads: e.hasMore,
                        filterTagIds: Array.from(e.tagFilter),
                        sortOrder: e.sortOrder
                    }), I(), C = e.hasMore, v = e.offset + A, T = !1, m = !1
                },
                LOAD_ARCHIVED_THREADS_FAIL: function(e) {
                    if (e.channelId !== S || e.sortOrder !== N || !(0, E.areSetsEqual)(e.tagFilter, i)) return !1;
                    T = !1, p = !0, m = !1
                },
                RESORT_THREADS: function(e) {
                    return (null == S || null == e.channelId || S === e.channelId) && I()
                }
            })
        },
        263024: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var i = n("989901"),
                a = n("990746"),
                l = n("913144"),
                r = n("404118"),
                u = n("295426"),
                s = n("716241"),
                d = n("507217"),
                o = n("233069"),
                c = n("271938"),
                _ = n("42203"),
                f = n("957255"),
                h = n("449008"),
                E = n("821343"),
                g = n("755624"),
                A = n("487269"),
                T = n("25932"),
                m = n("49111"),
                C = n("724210"),
                p = n("782340");

            function S(e, t) {
                return a.default.patch({
                    url: m.Endpoints.CHANNEL(e.id),
                    body: t
                }).then(t => (l.default.dispatch({
                    type: "THREAD_UPDATE",
                    channel: (0, o.createChannelRecordFromServer)(t.body)
                }), e.isForumPost() && null != e.parent_id && l.default.dispatch({
                    type: "RESORT_THREADS",
                    channelId: e.parent_id
                }), t))
            }

            function N(e, t) {
                l.default.dispatch({
                    type: "THREAD_MEMBER_LOCAL_UPDATE",
                    id: e.id,
                    guildId: e.getGuildId(),
                    userId: c.default.getId(),
                    isJoining: t
                })
            }
            var M = {
                archiveThread(e, t) {
                    let n = {
                        archived: !0
                    };
                    return t && (n.locked = !0), S(e, n)
                },
                async lockThread(e) {
                    let t = e.isArchivedThread();
                    return t && await this.unarchiveThread(e, !1), S(e, {
                        locked: !0,
                        archived: t
                    })
                },
                async unlockThread(e) {
                    let t = e.isArchivedThread();
                    return t && await this.unarchiveThread(e, !0), S(e, {
                        locked: !1,
                        archived: t
                    })
                },
                async unarchiveThread(e, t) {
                    let n = {
                            archived: !1
                        },
                        i = e.isForumPost();
                    t && (n.locked = !1);
                    try {
                        return await S(e, n)
                    } catch (e) {
                        var a, l;
                        throw (null === (a = e.body) || void 0 === a ? void 0 : a.code) === m.AbortCodes.TOO_MANY_THREADS ? r.default.show({
                            title: i ? p.default.Messages.CANNOT_UNARCHIVE_FORUM_POST : p.default.Messages.CANNOT_UNARCHIVE_THREAD,
                            body: i ? p.default.Messages.TOO_MANY_FORUM_POSTS_MESSAGE : p.default.Messages.TOO_MANY_THREADS_MESSAGE
                        }) : (null === (l = e.body) || void 0 === l ? void 0 : l.code) === m.AbortCodes.TOO_MANY_ANNOUNCEMENT_THREADS ? r.default.show({
                            title: p.default.Messages.CANNOT_UNARCHIVE_THREAD,
                            body: p.default.Messages.TOO_MANY_ANNOUNCEMENT_THREADS_MESSAGE
                        }) : 429 === e.status ? r.default.show({
                            title: i ? p.default.Messages.CANNOT_UNARCHIVE_FORUM_POST : p.default.Messages.CANNOT_UNARCHIVE_THREAD,
                            body: p.default.Messages.RATE_LIMITED
                        }) : r.default.show({
                            title: p.default.Messages.ERROR,
                            body: p.default.Messages.ERROR_OCCURRED_TRY_AGAIN
                        }), e
                    }
                },
                async unarchiveThreadIfNecessary(e) {
                    var t;
                    let n = _.default.getChannel(e),
                        i = f.default.can(m.Permissions.MANAGE_THREADS, n);
                    null != n && n.isArchivedThread() && (i || (null === (t = n.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0) && await this.unarchiveThread(n, !1)
                },
                setInvitable: (e, t) => S(e, {
                    invitable: t
                }),
                async joinThread(e, t) {
                    e.isForumPost() && N(e, !0);
                    try {
                        return await a.default.post({
                            url: m.Endpoints.THREAD_MEMBER(e.id),
                            query: {
                                location: t
                            }
                        })
                    } catch (t) {
                        var n;
                        if ((null === (n = t.body) || void 0 === n ? void 0 : n.code) === m.AbortCodes.TOO_MANY_THREAD_MEMBERS) {
                            let t = e.isForumPost();
                            r.default.show({
                                title: t ? p.default.Messages.CANNOT_JOIN_FORUM_POST : p.default.Messages.CANNOT_JOIN_THREAD,
                                body: t ? p.default.Messages.TOO_MANY_MEMBERS_MESSAGE_FORUM_POST : p.default.Messages.TOO_MANY_MEMBERS_MESSAGE
                            })
                        } else r.default.show({
                            title: p.default.Messages.ERROR,
                            body: p.default.Messages.ERROR_OCCURRED_TRY_AGAIN
                        });
                        e.isForumPost() && N(e, !1)
                    }
                },
                async addMember(e, t, n) {
                    try {
                        return await a.default.post({
                            url: m.Endpoints.THREAD_MEMBER(e.id, t),
                            query: {
                                location: n
                            }
                        })
                    } catch (t) {
                        var i;
                        if ((null === (i = t.body) || void 0 === i ? void 0 : i.code) === m.AbortCodes.TOO_MANY_THREAD_MEMBERS) {
                            let t = e.isForumPost();
                            r.default.show({
                                title: t ? p.default.Messages.CANNOT_ADD_USER_TO_FORUM_POST : p.default.Messages.CANNOT_ADD_USER_TO_THREAD,
                                body: t ? p.default.Messages.TOO_MANY_MEMBERS_MESSAGE_FORUM_POST : p.default.Messages.TOO_MANY_MEMBERS_MESSAGE
                            })
                        } else r.default.show({
                            title: p.default.Messages.ERROR,
                            body: p.default.Messages.ERROR_OCCURRED_TRY_AGAIN
                        })
                    }
                },
                leaveThread: (e, t) => (e.isForumPost() && N(e, !1), a.default.delete({
                    url: m.Endpoints.THREAD_MEMBER(e.id),
                    query: {
                        location: t
                    }
                })),
                removeMember: (e, t, n) => a.default.delete({
                    url: m.Endpoints.THREAD_MEMBER(e.id, t),
                    query: {
                        location: n
                    }
                }),
                setAutoArchiveDuration: (e, t) => a.default.patch({
                    url: m.Endpoints.CHANNEL(e.id),
                    body: {
                        auto_archive_duration: t
                    }
                }),
                pin(e) {
                    let t = e.flags | C.ChannelFlags.PINNED;
                    this.updateFlags(e, t, e.isArchivedThread())
                },
                unpin(e) {
                    let t = e.flags & ~C.ChannelFlags.PINNED;
                    this.updateFlags(e, t)
                },
                async updateFlags(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    l.default.dispatch({
                        type: "THREAD_UPDATE",
                        channel: e.merge({
                            flags: t
                        })
                    });
                    let i = {
                        flags: t
                    };
                    n && (i.archived = !1);
                    try {
                        await a.default.patch({
                            url: m.Endpoints.CHANNEL(e.id),
                            body: i
                        })
                    } catch {
                        l.default.dispatch({
                            type: "THREAD_UPDATE",
                            channel: e
                        })
                    }
                },
                async replacePin(e, t) {
                    let n = e.merge({
                            flags: e.flags & ~C.ChannelFlags.PINNED
                        }),
                        i = t.merge({
                            flags: t.flags | C.ChannelFlags.PINNED
                        });
                    l.default.dispatch({
                        type: "THREAD_UPDATE",
                        channel: n
                    }), l.default.dispatch({
                        type: "THREAD_UPDATE",
                        channel: i
                    }), await this.unarchiveThreadIfNecessary(e.id), await this.unarchiveThreadIfNecessary(t.id);
                    try {
                        await a.default.patch({
                            url: m.Endpoints.CHANNEL(e.id),
                            body: {
                                flags: e.flags & ~C.ChannelFlags.PINNED
                            }
                        })
                    } catch {
                        l.default.dispatch({
                            type: "THREAD_UPDATE",
                            channel: e
                        }), l.default.dispatch({
                            type: "THREAD_UPDATE",
                            channel: t
                        });
                        return
                    }
                    try {
                        await a.default.patch({
                            url: m.Endpoints.CHANNEL(t.id),
                            body: {
                                flags: t.flags | C.ChannelFlags.PINNED
                            }
                        })
                    } catch {
                        l.default.dispatch({
                            type: "THREAD_UPDATE",
                            channel: t
                        })
                    }
                },
                openThreadCreationForMobile(e, t, n) {
                    (0, s.trackWithMetadata)(m.AnalyticEvents.THREAD_CREATION_STARTED, {
                        location: n,
                        channel_id: e.id,
                        guild_id: e.guild_id
                    }), u.default.changeThreadSettings(e.id, {
                        parentMessageId: t,
                        isPrivate: !1,
                        location: n
                    }), null == t && (0, d.setActiveCommand)({
                        channelId: e.id,
                        command: null,
                        section: null
                    })
                },
                async setNotificationSettings(e, t) {
                    return (0, A.trackThreadNotificationSettingsUpdated)(e, t), !g.default.hasJoined(e.id) && await this.joinThread(e, "Change Notification Settings"), a.default.patch({
                        url: m.Endpoints.THREAD_MEMBER_SETTINGS(e.id),
                        body: t
                    })
                },
                loadArchivedThreads(e, t, n, r, u) {
                    !E.default.isLoading(t, n, r) && (l.default.dispatch({
                        type: "LOAD_ARCHIVED_THREADS",
                        channelId: t,
                        sortOrder: n,
                        tagFilter: r
                    }), a.default.get({
                        url: m.Endpoints.THREAD_SEARCH(t),
                        query: {
                            archived: !0,
                            sort_by: "last_message_time",
                            sort_order: "desc",
                            limit: E.PAGE_SIZE,
                            tag: r.size > 0 ? Array.from(r).join(",") : void 0,
                            tag_setting: i.ThreadSearchTagSetting.MATCH_SOME,
                            offset: u
                        },
                        retries: 2
                    }).then(i => {
                        let {
                            body: {
                                threads: a,
                                members: s,
                                has_more: d,
                                first_messages: o,
                                most_recent_messages: c
                            }
                        } = i;
                        l.default.dispatch({
                            type: "LOAD_ARCHIVED_THREADS_SUCCESS",
                            guildId: e,
                            channelId: t,
                            offset: u,
                            sortOrder: n,
                            tagFilter: r,
                            threads: a,
                            firstMessages: o,
                            mostRecentMessages: c,
                            members: (null != s ? s : []).map(e => (0, T.default)(e)),
                            owners: a.map(e => e.owner).filter(h.isNotNullish),
                            hasMore: d
                        })
                    }, () => {
                        l.default.dispatch({
                            type: "LOAD_ARCHIVED_THREADS_FAIL",
                            channelId: t,
                            sortOrder: n,
                            tagFilter: r
                        })
                    }))
                },
                async searchThreads(e, t, n, r) {
                    let u = null != r && r.size > 0 ? Array.from(r).join(",") : void 0,
                        {
                            body: {
                                threads: s,
                                members: d,
                                first_messages: o,
                                most_recent_messages: c
                            }
                        } = await a.default.get({
                            url: m.Endpoints.THREAD_SEARCH(t),
                            query: {
                                name: n,
                                tag: u,
                                tag_setting: i.ThreadSearchTagSetting.MATCH_SOME
                            }
                        });
                    return l.default.dispatch({
                        type: "LOAD_THREADS_SUCCESS",
                        threads: s,
                        members: d,
                        guildId: e,
                        firstMessages: o,
                        mostRecentMessages: c
                    }), s.map(e => e.id)
                }
            }
        },
        800843: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var i = n("427964"),
                a = n.n(i),
                l = n("498225"),
                r = n("913144"),
                u = n("560208"),
                s = n("233069"),
                d = n("42203");
            let o = {};

            function c(e) {
                var t;
                null === (t = e.threads) || void 0 === t || t.forEach(_)
            }

            function _(e) {
                if (!s.ALL_CHANNEL_TYPES.has(e.type)) return !1;
                let t = function(e) {
                    if (!(e.id in o)) {
                        var t, n;
                        o[e.id] = {
                            guildId: e.guild_id,
                            parentId: e.parent_id,
                            memberCount: null !== (t = e.memberCount) && void 0 !== t ? t : 0,
                            memberIdsPreview: null !== (n = e.memberIdsPreview) && void 0 !== n ? n : []
                        }
                    }
                    return o[e.id]
                }(e);
                null != e.memberCount && (t.memberCount = e.memberCount), null != e.memberIdsPreview && (t.memberIdsPreview = e.memberIdsPreview)
            }

            function f(e) {
                let {
                    channel: t
                } = e;
                return _(t)
            }

            function h(e) {
                let {
                    threads: t
                } = e;
                t.forEach(E)
            }

            function E(e) {
                if (null != e && !(e.id in o)) {
                    let t = d.default.getChannel(e.id);
                    if (null != t) return _(t), !0
                }
                return !1
            }
            class g extends l.default.Store {
                initialize() {
                    this.waitFor(d.default)
                }
                getMemberCount(e) {
                    var t, n;
                    return null !== (n = null === (t = o[e]) || void 0 === t ? void 0 : t.memberCount) && void 0 !== n ? n : null
                }
                getMemberIdsPreview(e) {
                    var t, n;
                    return null !== (n = null === (t = o[e]) || void 0 === t ? void 0 : t.memberIdsPreview) && void 0 !== n ? n : null
                }
                getInitialOverlayState() {
                    return o
                }
            }
            g.displayName = "ThreadMembersStore";
            var A = new g(r.default, {
                CONNECTION_OPEN: function(e) {
                    o = {}, e.guilds.forEach(c)
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        threadMembers: t
                    } = e;
                    o = {
                        ...t
                    }
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    c(t)
                },
                GUILD_DELETE: function(e) {
                    var t;
                    let {
                        guild: n
                    } = e;
                    t = n.id, o = a.omitBy(o, e => e.guildId === t)
                },
                CHANNEL_DELETE: function(e) {
                    var t;
                    let {
                        channel: n
                    } = e;
                    t = n.id, o = a.omitBy(o, e => e.parentId === t)
                },
                THREAD_CREATE: f,
                THREAD_UPDATE: f,
                THREAD_LIST_SYNC: function(e) {
                    let {
                        threads: t
                    } = e;
                    t.forEach(_)
                },
                THREAD_MEMBERS_UPDATE: function(e) {
                    let t = o[e.id];
                    if (null == t) return !1;
                    null != e.memberIdsPreview && (t.memberIdsPreview = e.memberIdsPreview), t.memberCount = e.memberCount
                },
                SEARCH_FINISH: function(e) {
                    let t = !1;
                    for (let n of e.messages)
                        for (let e of n) t = E(e.thread) || t;
                    return e.threads.forEach(e => {
                        t = E(e) || t
                    }), t
                },
                LOAD_THREADS_SUCCESS: h,
                LOAD_ARCHIVED_THREADS_SUCCESS: h,
                THREAD_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    delete o[t.id]
                },
                LOAD_MESSAGES_SUCCESS: function(e) {
                    let t = !1;
                    for (let n of e.messages) t = E(n.thread) || t;
                    return t
                },
                GUILD_FEED_FETCH_SUCCESS: function(e) {
                    let {
                        data: t
                    } = e, n = !1;
                    for (let e of (0, u.getThreadsFromGuildFeedFetch)(t)) n = E(e) || n;
                    return n
                }
            })
        },
        610730: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            });
            var i = n("427964"),
                a = n.n(i),
                l = n("498225"),
                r = n("913144"),
                u = n("560208"),
                s = n("692038"),
                d = n("233069"),
                o = n("719926"),
                c = n("766274"),
                _ = n("42203"),
                f = n("377253"),
                h = n("648564"),
                E = n("49111");
            let g = new Set,
                A = {},
                T = {};

            function m(e, t) {
                d.ALL_CHANNEL_TYPES.has(e.type) && C(function(e) {
                    if (!(e.id in A)) {
                        var t;
                        A[e.id] = {
                            guildId: e.guild_id,
                            parentId: e.parent_id,
                            count: null !== (t = e.messageCount) && void 0 !== t ? t : 0,
                            mostRecentRawMessage: null,
                            mostRecentMessage: null
                        }
                    }
                    return A[e.id]
                }(e), t)
            }

            function C(e, t) {
                var n;
                let i = (null !== (n = T[e.parentId]) && void 0 !== n ? n : 0) + 1;
                T[e.parentId] = i, t(e)
            }

            function p(e) {
                var t;
                null === (t = e.threads) || void 0 === t || t.forEach(S)
            }

            function S(e) {
                m(e, t => {
                    var n;
                    null != e.messageCount && (t.count = e.messageCount);
                    let i = null !== (n = t.mostRecentRawMessage) && void 0 !== n ? n : t.mostRecentMessage;
                    null != e.lastMessageId && (null == i ? void 0 : i.id) !== e.lastMessageId && (t.mostRecentRawMessage = null, t.mostRecentMessage = null)
                })
            }

            function N(e) {
                if (null != e && !(e.id in A)) {
                    let t = _.default.getChannel(e.id);
                    if (null != t) return S(t), !0
                }
                return !1
            }

            function M(e) {
                let {
                    channel: t
                } = e;
                S(t)
            }

            function v(e) {
                let {
                    threads: t
                } = e;
                t.forEach(N)
            }
            class R extends l.default.Store {
                initialize() {
                    this.waitFor(_.default, f.default)
                }
                getCount(e) {
                    var t, n;
                    return null !== (n = null === (t = A[e]) || void 0 === t ? void 0 : t.count) && void 0 !== n ? n : null
                }
                getMostRecentMessage(e) {
                    var t, n;
                    let i = A[e];
                    return null == i ? null : (null == i.mostRecentMessage && null != i.mostRecentRawMessage && (i.mostRecentMessage = null !== (t = f.default.getMessage(e, i.mostRecentRawMessage.id)) && void 0 !== t ? t : (0, s.createMessageRecord)(i.mostRecentRawMessage), i.mostRecentRawMessage = null), null !== (n = i.mostRecentMessage) && void 0 !== n ? n : null)
                }
                getChannelThreadsVersion(e) {
                    return T[e]
                }
                getInitialOverlayState() {
                    return A
                }
            }
            R.displayName = "ThreadMessageStore";
            var O = new R(r.default, {
                CONNECTION_OPEN: function(e) {
                    T = {}, g.clear(), e.guilds.forEach(p)
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        threadMessages: t
                    } = e;
                    for (let e in A = {
                            ...t
                        }) {
                        let n = t[e].mostRecentMessage;
                        null != n && (t[e].mostRecentMessage = new o.default({
                            ...n,
                            author: new c.default(n.author)
                        }))
                    }
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    p(t)
                },
                GUILD_DELETE: function(e) {
                    var t;
                    let {
                        guild: n
                    } = e;
                    t = n.id, A = a.omitBy(A, e => {
                        let n = e.guildId === t;
                        return n && delete T[e.parentId], n
                    })
                },
                THREAD_CREATE: M,
                THREAD_UPDATE: M,
                THREAD_LIST_SYNC: function(e) {
                    let {
                        threads: t,
                        mostRecentMessages: n
                    } = e;
                    t.forEach(S), null == n || n.forEach(e => {
                        let t = _.default.getChannel(e.channel_id);
                        null != t && e.type !== E.MessageTypes.THREAD_STARTER_MESSAGE && m(t, t => {
                            t.mostRecentRawMessage = e, t.mostRecentMessage = null
                        })
                    })
                },
                LOAD_THREADS_SUCCESS: v,
                LOAD_ARCHIVED_THREADS_SUCCESS: v,
                SEARCH_FINISH: function(e) {
                    let {
                        messages: t,
                        threads: n
                    } = e;
                    for (let e of t)
                        for (let t of e) N(t.thread);
                    n.forEach(N)
                },
                THREAD_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    delete A[t.id]
                },
                CHANNEL_DELETE: function(e) {
                    var t;
                    let {
                        channel: n
                    } = e;
                    t = n.id, A = a.omitBy(A, e => e.parentId === t), delete T[t]
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t,
                        optimistic: n,
                        isPushNotification: i,
                        sendMessageOptions: a
                    } = e;
                    if (n || i || null != a) return !1;
                    let l = _.default.getChannel(t.channel_id);
                    if (null == l || !d.THREAD_CHANNEL_TYPES.has(l.type) || ! function(e, t) {
                            return !(t.type === E.MessageTypes.THREAD_STARTER_MESSAGE || e.isForumPost() && t.id === e.id) && !0
                        }(l, t)) return !1;
                    m(l, e => {
                        e.count = Math.min(e.count + 1, h.MAX_THREAD_MESSAGE_COUNT), e.mostRecentRawMessage = t, e.mostRecentMessage = null
                    })
                },
                MESSAGE_UPDATE: function(e) {
                    var t;
                    let {
                        message: n
                    } = e, i = A[n.channel_id], a = null !== (t = null == i ? void 0 : i.mostRecentRawMessage) && void 0 !== t ? t : null == i ? void 0 : i.mostRecentMessage;
                    if (null == i || null == a || a.id !== n.id) return !1;
                    C(i, e => {
                        null != e.mostRecentMessage && (e.mostRecentMessage = (0, s.updateMessageRecord)(e.mostRecentMessage, n)), null != e.mostRecentRawMessage && (e.mostRecentRawMessage = (0, s.updateServerMessage)(e.mostRecentRawMessage, n))
                    })
                },
                MESSAGE_DELETE: function(e) {
                    let {
                        id: t,
                        channelId: n
                    } = e, i = A[n];
                    if (null == i) return !1;
                    let a = n !== t,
                        l = !g.has(t);
                    C(i, e => {
                        var n;
                        let i = null !== (n = e.mostRecentRawMessage) && void 0 !== n ? n : e.mostRecentMessage;
                        null != i && i.id === t && (e.mostRecentMessage = null, e.mostRecentRawMessage = null), e.count = a && l ? Math.max(e.count - 1, 0) : e.count, g.add(t)
                    })
                },
                MESSAGE_DELETE_BULK: function(e) {
                    let {
                        ids: t,
                        channelId: n
                    } = e, i = A[n];
                    if (null == i) return !1;
                    let a = t.filter(e => {
                        let t = n !== e,
                            i = !g.has(e);
                        return t && i
                    }).length;
                    a > 0 && C(i, e => {
                        var n;
                        let i = null !== (n = e.mostRecentRawMessage) && void 0 !== n ? n : e.mostRecentMessage;
                        null != i && t.includes(i.id) && (e.mostRecentMessage = null, e.mostRecentRawMessage = null), e.count -= a, t.forEach(e => g.add(e))
                    })
                },
                LOAD_MESSAGES_SUCCESS: function(e) {
                    let t = !1;
                    for (let n of e.messages) t = N(n.thread) || t;
                    if (e.isAfter || e.isBefore || e.hasMoreAfter) return t;
                    let n = _.default.getChannel(e.channelId);
                    if (null == n || !d.THREAD_CHANNEL_TYPES.has(n.type)) return t;
                    m(n, t => {
                        if (0 === e.messages.length) t.mostRecentRawMessage = null, t.mostRecentMessage = null, t.count = 0;
                        else {
                            var n;
                            let i = null !== (n = e.messages[0]) && void 0 !== n ? n : null;
                            t.count = e.messages.length >= h.MAX_THREAD_MESSAGE_COUNT ? h.MAX_THREAD_MESSAGE_COUNT : t.count, (null == i ? void 0 : i.type) !== E.MessageTypes.THREAD_STARTER_MESSAGE && (t.mostRecentRawMessage = i, t.mostRecentMessage = null)
                        }
                    })
                },
                GUILD_FEED_FETCH_SUCCESS: function(e) {
                    let {
                        data: t
                    } = e, n = !1;
                    for (let e of (0, u.getThreadsFromGuildFeedFetch)(t)) n = N(e) || n;
                    return n
                }
            })
        },
        487269: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getTimestampString: function() {
                    return E.default
                },
                trackThreadBrowserTab: function() {
                    return T
                },
                trackThreadBrowserOpened: function() {
                    return m
                },
                trackActiveThreadsPopoutOpened: function() {
                    return C
                },
                trackThreadNotificationSettingsUpdated: function() {
                    return p
                },
                useLastMessageTimestamp: function() {
                    return S
                }
            });
            var i = n("377849"),
                a = n.n(i),
                l = n("498225"),
                r = n("716241"),
                u = n("701916"),
                s = n("660478"),
                d = n("282109"),
                o = n("599110"),
                c = n("568734"),
                _ = n("34676"),
                f = n("299039"),
                h = n("755624"),
                E = n("319126"),
                g = n("648564"),
                A = n("49111");

            function T() {
                (0, r.trackWithMetadata)(A.AnalyticEvents.THREAD_BROWSER_TAB_CHANGED)
            }

            function m() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Modal";
                (0, r.trackWithMetadata)(A.AnalyticEvents.OPEN_MODAL, {
                    type: "Thread Browser",
                    location_section: e
                })
            }

            function C() {
                o.default.track(A.AnalyticEvents.OPEN_POPOUT, {
                    type: "Active Threads Popout"
                })
            }

            function p(e, t) {
                var n, i;
                let a = (0, u.collectThreadMetadata)(e);
                if (null == a) return;
                let l = e.getGuildId(),
                    r = e.parent_id,
                    s = (0, _.getCurrentChannelSettings)(l, r),
                    f = e => {
                        if ((0, c.hasFlag)(e, g.ThreadMemberFlags.ALL_MESSAGES)) return _.MessageNotificationSettings[A.UserNotificationSettings.ALL_MESSAGES];
                        if ((0, c.hasFlag)(e, g.ThreadMemberFlags.ONLY_MENTIONS)) return _.MessageNotificationSettings[A.UserNotificationSettings.ONLY_MENTIONS];
                        if ((0, c.hasFlag)(e, g.ThreadMemberFlags.NO_MESSAGES)) return _.MessageNotificationSettings[A.UserNotificationSettings.NO_MESSAGES];
                        return _.MessageNotificationSettings[A.UserNotificationSettings.NULL]
                    },
                    E = null !== (n = h.default.flags(e.id)) && void 0 !== n ? n : 0,
                    T = f(E),
                    m = h.default.isMuted(e.id),
                    C = (0, _.muteConfigToTimestamp)(h.default.getMuteConfig(e.id)),
                    {
                        can_send_message: p,
                        ...S
                    } = a,
                    N = {
                        ...S,
                        channel_id: e.id,
                        guild_id: l,
                        parent_id: r,
                        channel_type: e.type,
                        has_interacted_with_thread: (E & g.ThreadMemberFlags.HAS_INTERACTED) != 0,
                        parent_is_muted: d.default.isGuildOrCategoryOrChannelMuted(l, r),
                        old_thread_notification_setting: T,
                        new_thread_notification_setting: null != t.flags ? f(t.flags) : T,
                        parent_notification_setting: s.channel_message_notification_settings,
                        old_thread_is_muted: m,
                        new_thread_is_muted: null !== (i = t.muted) && void 0 !== i ? i : m,
                        old_thread_muted_until: C,
                        new_thread_muted_until: null != t.mute_config ? (0, _.muteConfigToTimestamp)(t.mute_config) : C
                    };
                o.default.track(A.AnalyticEvents.THREAD_NOTIFICATION_SETTINGS_UPDATED, N)
            }
            n("782340");
            let S = e => {
                var t, n;
                let i = (0, l.useStateFromStores)([s.default], () => s.default.lastMessageId(e.id)),
                    r = null != i ? f.default.extractTimestamp(i) : null,
                    u = null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.createTimestamp,
                    d = null != u ? a(u).valueOf() : null;
                return null !== (n = null != r ? r : d) && void 0 !== n ? n : f.default.extractTimestamp(e.id)
            }
        },
        319126: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("377849"),
                a = n.n(i),
                l = n("782340");
            let r = 3600,
                u = 24 * r,
                s = 30 * u,
                d = 12 * s,
                o = () => ({
                    seconds: l.default.Messages.THREAD_BROWSER_TIMESTAMP_SECONDS,
                    minutes: l.default.Messages.THREAD_BROWSER_TIMESTAMP_MINUTES,
                    hours: l.default.Messages.THREAD_BROWSER_TIMESTAMP_HOURS,
                    days: l.default.Messages.THREAD_BROWSER_TIMESTAMP_DAYS,
                    months: l.default.Messages.THREAD_BROWSER_TIMESTAMP_MORE_THAN_MONTH,
                    years: l.default.Messages.THREAD_BROWSER_TIMESTAMP_MORE_THAN_YEAR
                }),
                c = (e, t) => null != t && null != t[e],
                _ = (e, t, n) => {
                    var i, a, l;
                    return c(e, t) ? null !== (a = null !== (i = t[e]) && void 0 !== i ? i : null == n ? void 0 : n[e]) && void 0 !== a ? a : null : null !== (l = null == n ? void 0 : n[e]) && void 0 !== l ? l : null
                };
            var f = function(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    i = a().diff(a(e), "s"),
                    l = null != t ? t() : void 0,
                    c = o(),
                    f = (e, t) => {
                        let i = _(e, l, n ? c : void 0);
                        return null == i ? null : "string" == typeof i ? i : i.format({
                            count: t
                        })
                    };
                if (i < 60) {
                    let e = (null == l ? void 0 : l.seconds) != null ? f("seconds", i) : f("minutes", 1);
                    if (null != e) return e
                }
                if (i < r) {
                    let e = f("minutes", Math.floor(i / 60));
                    if (null != e) return e
                }
                if (i < u) {
                    let e = f("hours", Math.floor(i / r));
                    if (null != e) return e
                }
                if (i < s) {
                    let e = f("days", Math.floor(i / u));
                    if (null != e) return e
                }
                if (i < d) {
                    let e = f("months", Math.floor(i / s));
                    if (null != e) return e
                }
                if (i >= d && (null == l ? void 0 : l.years) != null) {
                    let e = f("years", Math.floor(i / d));
                    if (null != e) return e
                }
                return a(e).format("LL")
            }
        },
        10802: function(e, t, n) {
            "use strict";
            let i;
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var a = n("498225"),
                l = n("913144"),
                r = n("386451"),
                u = n("662285"),
                s = n("271938"),
                d = n("982108"),
                o = n("42203"),
                c = n("341542"),
                _ = n("26989"),
                f = n("305961"),
                h = n("945956"),
                E = n("27618"),
                g = n("18494"),
                A = n("162771"),
                T = n("49111");
            let m = new r.default((e, t) => {
                (null != f.default.getGuild(e) || c.default.isUnavailable(e)) && l.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_FLUSH",
                    guildId: e,
                    subscriptions: t
                })
            });

            function C(e, t) {
                m.forEach(n => {
                    var a;
                    n !== A.default.getGuildId() && n !== h.default.getGuildId() && n !== (null === (a = o.default.getChannel(g.default.getChannelId())) || void 0 === a ? void 0 : a.getGuildId()) && (null == i || i.guildId !== n) && (m.clearWithoutFlushing(n, e), t && l.default.dispatch({
                        type: "GUILD_SUBSCRIPTIONS_FLUSH",
                        guildId: n,
                        subscriptions: m.get(n)
                    }))
                })
            }

            function p(e, t) {
                return m.subscribeToGuild(e), null != t && d.default.getSection(t) === T.ChannelSections.MEMBERS && S(e, t, r.DEFAULT_RANGES)
            }

            function S(e, t, n) {
                let i = o.default.getChannel(t);
                if (null == i) return !1;
                let a = i.getGuildId();
                return (a !== e && e === T.FAVORITES && m.subscribeToGuild(a), null != i && i.isThread()) ? i.type === T.ChannelTypes.ANNOUNCEMENT_THREAD ? m.subscribeChannel(a, i.parent_id, n) : !!i.isActiveThread() && m.subscribeThreadMemberList(a, t, g.default.getChannelId()) : m.subscribeChannel(a, t, n)
            }

            function N(e) {
                let {
                    type: t
                } = e;
                "CONNECTION_OPEN" === t && C(!0, !1);
                let n = A.default.getGuildId();
                null != n && p(n, g.default.getChannelId(n)), m.forEach(e => {
                    null == f.default.getGuild(e) ? m.clearWithoutFlushing(e, !0) : l.default.dispatch({
                        type: "GUILD_SUBSCRIPTIONS_FLUSH",
                        guildId: e,
                        subscriptions: m.get(e)
                    })
                })
            }

            function M(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e, i = c.default.isUnavailable(t);
                return !i && p(t, n)
            }

            function v() {
                return p(A.default.getGuildId(), g.default.getChannelId())
            }

            function R() {
                let e = u.default.getSyncingWith();
                if (null == e) null != i && (m.unsubscribeUser(i.guildId, i.userId), i = null);
                else {
                    let {
                        userId: t
                    } = e;
                    if (null != i && i.userId === t || E.default.isFriend(t)) return !1;
                    let n = _.default.memberOf(t);
                    if (0 === n.length) return !1;
                    let [a] = n;
                    i = {
                        guildId: a,
                        userId: t
                    }, m.subscribeUser(a, t)
                }
                return !1
            }
            class O extends a.default.Store {
                initialize() {
                    this.waitFor(o.default, f.default, A.default, g.default, h.default, s.default, d.default), this.syncWith([u.default], R), this.syncWith([d.default], v)
                }
                getSubscribedThreadIds() {
                    return m.getSubscribedThreadIds()
                }
                isSubscribedToThreads(e) {
                    return m.isSubscribedToThreads(e)
                }
            }
            O.displayName = "GuildSubscriptionsStore";
            var I = new O(l.default, {
                CONNECTION_OPEN: N,
                CONNECTION_RESUMED: N,
                CONNECTION_CLOSED: function() {
                    C(!1, !1)
                },
                IDLE: function(e) {
                    let {
                        idle: t
                    } = e;
                    if (!t) return !1;
                    C(!1, !0)
                },
                LOGOUT: function() {
                    m.reset()
                },
                VOICE_CHANNEL_SELECT: M,
                CHANNEL_SELECT: M,
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    t.id === A.default.getGuildId() && v()
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    m.clearWithoutFlushing(t.id, !0)
                },
                GUILD_SUBSCRIPTIONS_MEMBERS_ADD: function(e) {
                    let {
                        guildId: t,
                        userIds: n
                    } = e;
                    return n.forEach(e => {
                        e !== s.default.getId() && m.subscribeUser(t, e)
                    }), !1
                },
                GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE: function(e) {
                    let {
                        guildId: t,
                        userIds: n
                    } = e;
                    return n.forEach(e => {
                        m.unsubscribeUser(t, e)
                    }), !1
                },
                GUILD_SUBSCRIPTIONS_CHANNEL: function(e) {
                    let {
                        guildId: t,
                        channelId: n,
                        ranges: i
                    } = e;
                    return S(t, n, i)
                },
                GUILD_SUBSCRIPTIONS: function(e) {
                    let {
                        guildId: t
                    } = e;
                    return m.subscribeToGuild(t)
                },
                CHANNEL_PRELOAD: function(e) {
                    let {
                        guildId: t,
                        channelId: n
                    } = e;
                    return p(t, n)
                },
                THREAD_UPDATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return t.isArchivedThread() ? m.unsubscribeThreadMemberList(t.guild_id, t.id) : !!t.isActiveThread() && g.default.getChannelId() === t.id && void m.subscribeThreadMemberList(t.guild_id, t.id, g.default.getChannelId())
                },
                THREAD_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return m.unsubscribeThreadMemberList(t.guild_id, t.id)
                },
                THREAD_LIST_SYNC: v
            })
        },
        34676: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MessageNotificationSettings: function() {
                    return c
                },
                trackGuildNotificationSettingsUpdate: function() {
                    return _
                },
                muteConfigToTimestamp: function() {
                    return h
                },
                trackChannelNotificationSettingsUpdate: function() {
                    return E
                },
                getCurrentGuildSettings: function() {
                    return g
                },
                getManyCurrentGuildSettings: function() {
                    return A
                },
                getCurrentChannelSettings: function() {
                    return T
                },
                getManyCurrentChannelSettings: function() {
                    return m
                }
            });
            var i, a, l = n("716241"),
                r = n("42203"),
                u = n("282109"),
                s = n("568734"),
                d = n("49111"),
                o = n("397336");
            (i = a || (a = {})).GUILD = "guild", i.CHANNEL = "channel";
            let c = Object.freeze({
                [d.UserNotificationSettings.ALL_MESSAGES]: "All",
                [d.UserNotificationSettings.ONLY_MENTIONS]: "Mentions",
                [d.UserNotificationSettings.NO_MESSAGES]: "Nothing",
                [d.UserNotificationSettings.NULL]: null
            });

            function _(e, t, n, i) {
                var r, u;
                let _ = function(e) {
                        var t, n, i, a, l, r, u;
                        let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            d = null != s.mute_config && null != s.mute_config.end_time ? new Date(s.mute_config.end_time).getTime() : e.guild_muted_until,
                            o = null != s.message_notifications ? c[s.message_notifications] : e.guild_message_notification_settings;
                        return {
                            guild_muted_until: d,
                            guild_flags: null !== (t = s.flags) && void 0 !== t ? t : e.guild_flags,
                            guild_is_muted: null !== (n = s.muted) && void 0 !== n ? n : e.guild_is_muted,
                            guild_message_notification_settings: o,
                            guild_suppress_roles: null !== (i = s.suppress_roles) && void 0 !== i ? i : e.guild_suppress_roles,
                            guild_receive_mobile_push: null !== (a = s.mobile_push) && void 0 !== a ? a : e.guild_receive_mobile_push,
                            guild_notify_highlights: null !== (l = s.notify_highlights) && void 0 !== l ? l : e.guild_notify_highlights,
                            guild_suppress_everyone: null !== (r = s.suppress_everyone) && void 0 !== r ? r : e.guild_suppress_everyone,
                            guild_scheduled_events_muted: null !== (u = s.mute_scheduled_events) && void 0 !== u ? u : e.guild_scheduled_events_muted
                        }
                    },
                    h = _(n),
                    E = _(g(e), t),
                    A = f(h, E, "RETURN_PREVIOUS_WHEN_CHANGED"),
                    T = null !== (r = A("guild_flags")) && void 0 !== r ? r : 0,
                    m = (null !== (u = E.guild_flags) && void 0 !== u ? u : 0) ^ T,
                    C = 0 === (0, s.removeFlags)(m, o.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_OFF, o.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON);
                l.default.trackWithMetadata(d.AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, {
                    ...E,
                    location: i,
                    guild_id: e,
                    update_type: a.GUILD,
                    guild_flags_old: A("guild_flags"),
                    guild_is_muted_old: A("guild_is_muted"),
                    guild_suppress_roles_old: A("guild_suppress_roles"),
                    guild_notify_highlights_old: A("guild_notify_highlights"),
                    guild_suppress_everyone_old: A("guild_suppress_everyone"),
                    guild_receive_mobile_push_old: A("guild_receive_mobile_push"),
                    guild_scheduled_events_muted_old: A("guild_scheduled_events_muted"),
                    guild_message_notification_settings_old: A("guild_message_notification_settings"),
                    is_opt_in_only_change: C
                })
            }

            function f(e, t, n) {
                return i => {
                    if ("RETURN_PREVIOUS_WHEN_CHANGED" === n) return e[i] !== t[i] ? e[i] : void 0
                }
            }

            function h(e) {
                return null != e && null != e.end_time ? new Date(e.end_time).getTime() : null
            }

            function E(e, t, n, i, u) {
                var _, E;
                let g = function(t) {
                        var n, i;
                        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            l = null !== (n = a.muted) && void 0 !== n ? n : null == t ? void 0 : t.channel_is_muted,
                            r = null != a.message_notifications ? c[a.message_notifications] : null == t ? void 0 : t.channel_message_notification_settings,
                            u = null == e ? null : !0 === l || null != r;
                        return {
                            channel_is_muted: l,
                            channel_is_overridden: u,
                            channel_flags: null !== (i = a.flags) && void 0 !== i ? i : null == t ? void 0 : t.channel_flags,
                            channel_message_notification_settings: r,
                            channel_muted_until: h(a.mute_config)
                        }
                    },
                    A = g(i),
                    m = g(T(e, t), n),
                    C = f(A, m, "RETURN_PREVIOUS_WHEN_CHANGED"),
                    p = r.default.getChannel(t),
                    S = null !== (_ = C("channel_flags")) && void 0 !== _ ? _ : 0,
                    N = (null !== (E = m.channel_flags) && void 0 !== E ? E : 0) ^ S,
                    M = 0 === (0, s.removeFlags)(N, o.ChannelNotificationSettingsFlags.FAVORITED, o.ChannelNotificationSettingsFlags.OPT_IN_ENABLED);
                l.default.trackWithMetadata(d.AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, {
                    ...m,
                    location: u,
                    guild_id: e,
                    channel_id: t,
                    update_type: a.CHANNEL,
                    parent_id: null != p ? p.parent_id : null,
                    channel_flags_old: C("channel_flags"),
                    channel_is_muted_old: C("channel_is_muted"),
                    channel_muted_until_old: C("channel_muted_until"),
                    channel_is_overridden_old: C("channel_is_overridden"),
                    channel_message_notification_settings_old: C("channel_message_notification_settings"),
                    is_opt_in_only_change: M
                })
            }

            function g(e) {
                let t = u.default.isMuted(e),
                    n = u.default.getMuteConfig(e);
                return {
                    guild_suppress_everyone: u.default.isSuppressEveryoneEnabled(e),
                    guild_suppress_roles: u.default.isSuppressRolesEnabled(e),
                    guild_scheduled_events_muted: u.default.isMuteScheduledEventsEnabled(e),
                    guild_is_muted: t,
                    guild_muted_until: null != n && null != n.end_time ? new Date(n.end_time).getTime() : null,
                    guild_receive_mobile_push: u.default.isMobilePushEnabled(e),
                    guild_message_notification_settings: c[u.default.getMessageNotifications(e)],
                    guild_notify_highlights: u.default.getNotifyHighlights(e),
                    guild_flags: u.default.getGuildFlags(e)
                }
            }

            function A(e) {
                let t = new Map;
                return e.forEach(e => t.set(e, g(e))), t
            }

            function T(e, t) {
                let n = u.default.isChannelMuted(e, t),
                    i = u.default.getChannelMuteConfig(e, t);
                return {
                    channel_is_muted: n,
                    channel_muted_until: null != i && null != i.end_time ? new Date(i.end_time).getTime() : null,
                    channel_message_notification_settings: c[u.default.getChannelMessageNotifications(e, t)],
                    channel_flags: u.default.getGuildChannelFlags(e, t)
                }
            }

            function m(e, t) {
                let n = new Map;
                return t.forEach(t => n.set(t, T(e, t))), n
            }
        }
    }
]);