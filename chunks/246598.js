            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var i = n("446674"),
                l = n("913144"),
                a = n("383018");
            let s = new Map,
                r = new Map;

            function u(e) {
                if (!r.has(e)) {
                    var t;
                    r.set(e, {
                        commandId: null === (t = a.default.getActiveCommand(e)) || void 0 === t ? void 0 : t.id,
                        optionName: a.default.getActiveOptionName(e),
                        optionNameToAutocompleteQueries: new Map,
                        optionNameToLastResults: new Map,
                        optionNameToNonce: new Map,
                        optionNameToLastQuery: new Map,
                        lastErrored: !1,
                        lastResponseNonce: void 0
                    })
                }
                return r.get(e)
            }

            function d() {
                return s.clear(), r.clear(), !0
            }

            function o(e) {
                let {
                    channelId: t,
                    command: n
                } = e;
                c(t, null == n ? void 0 : n.id)
            }

            function c(e, t) {
                let n = a.default.getActiveOptionName(e),
                    i = r.get(e);
                return null != i && (t !== i.commandId || n !== i.optionName) && (null != t && t !== i.commandId && (i.optionNameToLastResults.clear(), i.optionNameToNonce.clear(), i.optionNameToLastQuery.clear(), i.optionNameToAutocompleteQueries.clear()), i.lastErrored = !1, i.commandId = t, i.optionName = n, !0)
            }
            class _ extends i.default.Store {
                initialize() {
                    this.waitFor(a.default)
                }
                getLastErrored(e) {
                    return u(e).lastErrored
                }
                getAutocompleteChoices(e, t, n) {
                    var i;
                    let l = u(e);
                    return null === (i = l.optionNameToAutocompleteQueries.get(t)) || void 0 === i ? void 0 : i.get(n)
                }
                getAutocompleteLastChoices(e, t) {
                    let n = u(e);
                    return n.optionNameToLastResults.get(t)
                }
                getLastResponseNonce(e) {
                    return u(e).lastResponseNonce
                }
            }
            _.displayName = "ApplicationCommandAutocompleteStore";
            var f = new _(l.default, {
                CONNECTION_OPEN: d,
                LOGOUT: d,
                CHANNEL_SELECT: d,
                APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST: function(e) {
                    var t;
                    let {
                        nonce: n,
                        channelId: i,
                        query: l,
                        name: a
                    } = e, r = u(i);
                    if (r.optionNameToLastQuery.get(a) === l) return !1;
                    r.optionNameToLastQuery.set(a, l);
                    let d = null === (t = r.optionNameToAutocompleteQueries.get(a)) || void 0 === t ? void 0 : t.get(l);
                    if (null != d) return r.lastErrored = !1, r.optionNameToLastResults.set(a, d), !0;
                    let o = r.optionNameToNonce.get(a);
                    if (null != o && s.delete(o), s.set(n, {
                            channelId: i,
                            query: l,
                            name: a
                        }), r.optionNameToNonce.set(a, n), r.lastErrored) return r.lastErrored = !1, !0
                },
                APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE: function(e) {
                    var t, n;
                    let {
                        choices: i,
                        nonce: l
                    } = e, a = s.get(l);
                    if (null == a) return !1;
                    s.delete(l);
                    let r = null !== (n = null == i ? void 0 : i.map(e => {
                            var t;
                            return {
                                ...e,
                                displayName: null !== (t = e.name_localized) && void 0 !== t ? t : e.name
                            }
                        })) && void 0 !== n ? n : [],
                        d = u(a.channelId);
                    return null == d.optionNameToAutocompleteQueries.get(a.name) && d.optionNameToAutocompleteQueries.set(a.name, new Map), null === (t = d.optionNameToAutocompleteQueries.get(a.name)) || void 0 === t || t.set(a.query, r), d.optionNameToLastQuery.get(a.name) === a.query && (d.lastErrored = !1, d.optionNameToLastResults.set(a.name, r)), d.lastResponseNonce = l, !0
                },
                INTERACTION_FAILURE: function(e) {
                    let {
                        nonce: t
                    } = e;
                    if (null == t) return !1;
                    let n = s.get(t);
                    if (null == n) return !1;
                    s.delete(t);
                    let i = u(n.channelId);
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