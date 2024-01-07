            "use strict";
            n.r(t), n.d(t, {
                FetchState: function() {
                    return l
                },
                default: function() {
                    return v
                }
            }), n("222007"), n("424973");
            var l, i, r = n("446674"),
                s = n("913144"),
                a = n("653047"),
                o = n("946028");
            (i = l || (l = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED", i[i.FETCH_FAILED = 3] = "FETCH_FAILED";
            let c = new Map,
                u = new Map,
                d = [],
                f = 0,
                h = [];
            class C extends r.default.Store {
                getIntegrations(e) {
                    var t;
                    return null !== (t = c.get(e)) && void 0 !== t ? t : h
                }
                getIntegration(e, t) {
                    var n;
                    return null === (n = c.get(e)) || void 0 === n ? void 0 : n.find(e => e.application.id === t)
                }
                getAllIntegrations() {
                    return c
                }
                getIntegrationsFetchState(e) {
                    var t;
                    return null !== (t = u.get(e)) && void 0 !== t ? t : 0
                }
                getApplicationsShelfFetchState() {
                    return f
                }
                getApplicationsShelf() {
                    return d
                }
            }

            function E(e) {
                return e.sort((e, t) => e.application.name.localeCompare(t.application.name))
            }
            C.displayName = "PrivateChannelIntegrationStore";
            let p = new C(s.default, {
                LOGOUT() {
                    c.clear()
                },
                CONNECTION_OPEN() {
                    c.clear(), u.clear()
                },
                CHANNEL_SELECT(e) {
                    let {
                        channelId: t
                    } = e;
                    if (null == t || 3 !== u.get(t)) return !1;
                    u.set(t, 0)
                },
                APPLICATIONS_SHELF_FETCH_START() {
                    f = 1
                },
                APPLICATIONS_SHELF_FETCH_SUCCESS(e) {
                    let {
                        applications: t
                    } = e;
                    d = t.map(a.default.createFromServer).sort((e, t) => e.name.localeCompare(t.name)), f = 2
                },
                APPLICATIONS_SHELF_FETCH_FAIL() {
                    f = 3
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START(e) {
                    let {
                        channelId: t
                    } = e;
                    c.set(t, null), u.set(t, 1)
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS(e) {
                    let {
                        channelId: t,
                        integrations: n
                    } = e;
                    c.set(t, E(n.map(o.createPrivateChannelIntegration))), u.set(t, 2)
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL(e) {
                    let {
                        channelId: t
                    } = e;
                    u.set(t, 3)
                },
                PRIVATE_CHANNEL_INTEGRATION_CREATE(e) {
                    let {
                        integration: t
                    } = e, n = c.get(t.channel_id);
                    if (null == n) return !1;
                    c.set(t.channel_id, E([...n, (0, o.createPrivateChannelIntegration)(t)]))
                },
                PRIVATE_CHANNEL_INTEGRATION_UPDATE(e) {
                    let {
                        integration: t
                    } = e, n = c.get(t.channel_id);
                    if (null == n) return !1;
                    let l = (0, o.createPrivateChannelIntegration)(t),
                        i = n.findIndex(e => e.application.id === l.application.id),
                        r = [...n]; - 1 === i ? r.push(l) : r[i] = l, c.set(l.channel_id, E(r))
                },
                PRIVATE_CHANNEL_INTEGRATION_DELETE(e) {
                    let {
                        channelId: t,
                        applicationId: n
                    } = e, l = c.get(t);
                    if (null == l) return !1;
                    c.set(t, l.filter(e => e.application.id !== n))
                },
                CHANNEL_DELETE(e) {
                    let {
                        channel: t
                    } = e;
                    return c.delete(t.id)
                }
            });
            var v = p