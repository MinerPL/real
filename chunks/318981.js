            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("446674"),
                i = n("913144"),
                r = n("49111");
            let o = {},
                s = {
                    integration: "",
                    query: ""
                };
            class a extends l.default.Store {
                getResults(e, t) {
                    if (null == e || null == t) return null;
                    let n = o[e];
                    return null != n && null != n[t] ? n[t] : null
                }
                getQuery() {
                    return s
                }
            }
            a.displayName = "IntegrationQueryStore";
            var u = new a(i.default, {
                INTEGRATION_QUERY: function(e) {
                    var t;
                    let {
                        integration: n,
                        query: l
                    } = e;
                    o[n] = null !== (t = o[n]) && void 0 !== t ? t : {}, o[n][l] = {
                        loading: !0,
                        results: []
                    }
                },
                INTEGRATION_QUERY_SUCCESS: function(e) {
                    let {
                        integration: t,
                        query: n,
                        results: l
                    } = e;
                    o[t][n] = {
                        loading: !1,
                        results: l.map(e => ({
                            type: r.ChannelTextAreaIntegrations[t].type,
                            meta: e
                        }))
                    }, s = {
                        query: n,
                        integration: t
                    }
                },
                INTEGRATION_QUERY_FAILURE: function(e) {
                    let {
                        integration: t,
                        query: n
                    } = e;
                    delete o[t][n]
                }
            })