            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            }), n("222007");
            var i = n("446674"),
                a = n("913144"),
                l = n("619340"),
                s = n("376556"),
                r = n("450205"),
                u = n("813006"),
                o = n("49111");
            let d = new Set([o.PlatformTypes.CONTACTS]),
                c = !0,
                _ = [],
                E = [],
                f = {},
                h = {},
                p = {},
                T = e => {
                    _ = e.filter(e => !d.has(e.type) && s.default.isSupported(e.type)), E = e.filter(e => d.has(e.type)), c = !1
                };
            class C extends i.default.Store {
                isJoining(e) {
                    return f[e] || !1
                }
                joinErrorMessage(e) {
                    return p[e]
                }
                isFetching() {
                    return c
                }
                getAccounts() {
                    return _
                }
                getLocalAccounts() {
                    return E
                }
                getAccount(e, t) {
                    return _.find(n => (null == e || n.id === e) && n.type === t)
                }
                getLocalAccount(e) {
                    return E.find(t => t.type === e)
                }
                isSuggestedAccountType(e) {
                    return h[e] || !1
                }
            }
            C.displayName = "ConnectedAccountsStore";
            var m = new C(a.default, {
                CONNECTION_OPEN: function(e) {
                    let t = e.connectedAccounts.map(e => new r.default(e));
                    T(t)
                },
                USER_CONNECTIONS_UPDATE: function(e) {
                    if (e.local && null != e.accounts) {
                        let t = e.accounts.map(e => new r.default({
                            ...e,
                            integrations: e.integrations.map(e => ({
                                ...e,
                                guild: new u.default(e.guild)
                            }))
                        }));
                        T(t)
                    } else l.default.fetch()
                },
                USER_CONNECTIONS_INTEGRATION_JOINING: function(e) {
                    f[e.integrationId] = e.joining
                },
                USER_CONNECTION_UPDATE: function(e) {
                    let {
                        platformType: t,
                        id: n,
                        revoked: i,
                        accessToken: a
                    } = e, l = _.find(e => e.id === n && e.type === t);
                    if (null == l) return !1;
                    null != i && (l.revoked = i), null != a && (l.accessToken = a)
                },
                USER_CONNECTIONS_INTEGRATION_JOINING_ERROR: function(e) {
                    p[e.integrationId] = void 0 !== e.error ? e.error : ""
                }
            })