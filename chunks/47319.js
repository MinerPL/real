            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("222007");
            var s = n("446674"),
                i = n("913144"),
                r = n("619340"),
                a = n("376556"),
                o = n("450205"),
                d = n("813006"),
                u = n("49111");
            let l = new Set([u.PlatformTypes.CONTACTS]),
                f = !0,
                _ = [],
                c = [],
                g = {},
                m = {},
                h = {},
                v = e => {
                    _ = e.filter(e => !l.has(e.type) && a.default.isSupported(e.type)), c = e.filter(e => l.has(e.type)), f = !1
                };
            class E extends s.default.Store {
                isJoining(e) {
                    return g[e] || !1
                }
                joinErrorMessage(e) {
                    return h[e]
                }
                isFetching() {
                    return f
                }
                getAccounts() {
                    return _
                }
                getLocalAccounts() {
                    return c
                }
                getAccount(e, t) {
                    return _.find(n => (null == e || n.id === e) && n.type === t)
                }
                getLocalAccount(e) {
                    return c.find(t => t.type === e)
                }
                isSuggestedAccountType(e) {
                    return m[e] || !1
                }
            }
            E.displayName = "ConnectedAccountsStore";
            var p = new E(i.default, {
                CONNECTION_OPEN: function(e) {
                    let t = e.connectedAccounts.map(e => new o.default(e));
                    v(t)
                },
                USER_CONNECTIONS_UPDATE: function(e) {
                    if (e.local && null != e.accounts) {
                        let t = e.accounts.map(e => new o.default({
                            ...e,
                            integrations: e.integrations.map(e => ({
                                ...e,
                                guild: new d.default(e.guild)
                            }))
                        }));
                        v(t)
                    } else r.default.fetch()
                },
                USER_CONNECTIONS_INTEGRATION_JOINING: function(e) {
                    g[e.integrationId] = e.joining
                },
                USER_CONNECTION_UPDATE: function(e) {
                    let {
                        platformType: t,
                        id: n,
                        revoked: s,
                        accessToken: i
                    } = e, r = _.find(e => e.id === n && e.type === t);
                    if (null == r) return !1;
                    null != s && (r.revoked = s), null != i && (r.accessToken = i)
                },
                USER_CONNECTIONS_INTEGRATION_JOINING_ERROR: function(e) {
                    h[e.integrationId] = void 0 !== e.error ? e.error : ""
                }
            })