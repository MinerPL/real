            "use strict";
            n.r(t), n.d(t, {
                FetchState: function() {
                    return i
                },
                default: function() {
                    return S
                }
            }), n("222007"), n("424973");
            var i, a, l = n("446674"),
                r = n("913144"),
                s = n("653047"),
                u = n("946028");
            (a = i || (i = {}))[a.NOT_FETCHED = 0] = "NOT_FETCHED", a[a.FETCHING = 1] = "FETCHING", a[a.FETCHED = 2] = "FETCHED", a[a.FETCH_FAILED = 3] = "FETCH_FAILED";
            let o = new Map,
                d = new Map,
                c = [],
                E = 0,
                _ = [];
            class I extends l.default.Store {
                getIntegrations(e) {
                    var t;
                    return null !== (t = o.get(e)) && void 0 !== t ? t : _
                }
                getIntegration(e, t) {
                    var n;
                    return null === (n = o.get(e)) || void 0 === n ? void 0 : n.find(e => e.application.id === t)
                }
                getAllIntegrations() {
                    return o
                }
                getIntegrationsFetchState(e) {
                    var t;
                    return null !== (t = d.get(e)) && void 0 !== t ? t : 0
                }
                getApplicationsShelfFetchState() {
                    return E
                }
                getApplicationsShelf() {
                    return c
                }
            }

            function T(e) {
                return e.sort((e, t) => e.application.name.localeCompare(t.application.name))
            }
            I.displayName = "PrivateChannelIntegrationStore";
            let f = new I(r.default, {
                LOGOUT() {
                    o.clear()
                },
                CONNECTION_OPEN() {
                    o.clear(), d.clear()
                },
                CHANNEL_SELECT(e) {
                    let {
                        channelId: t
                    } = e;
                    if (null == t || 3 !== d.get(t)) return !1;
                    d.set(t, 0)
                },
                APPLICATIONS_SHELF_FETCH_START() {
                    E = 1
                },
                APPLICATIONS_SHELF_FETCH_SUCCESS(e) {
                    let {
                        applications: t
                    } = e;
                    c = t.map(s.default.createFromServer).sort((e, t) => e.name.localeCompare(t.name)), E = 2
                },
                APPLICATIONS_SHELF_FETCH_FAIL() {
                    E = 3
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START(e) {
                    let {
                        channelId: t
                    } = e;
                    o.set(t, null), d.set(t, 1)
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS(e) {
                    let {
                        channelId: t,
                        integrations: n
                    } = e;
                    o.set(t, T(n.map(u.createPrivateChannelIntegration))), d.set(t, 2)
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL(e) {
                    let {
                        channelId: t
                    } = e;
                    d.set(t, 3)
                },
                PRIVATE_CHANNEL_INTEGRATION_CREATE(e) {
                    let {
                        integration: t
                    } = e, n = o.get(t.channel_id);
                    if (null == n) return !1;
                    o.set(t.channel_id, T([...n, (0, u.createPrivateChannelIntegration)(t)]))
                },
                PRIVATE_CHANNEL_INTEGRATION_UPDATE(e) {
                    let {
                        integration: t
                    } = e, n = o.get(t.channel_id);
                    if (null == n) return !1;
                    let i = (0, u.createPrivateChannelIntegration)(t),
                        a = n.findIndex(e => e.application.id === i.application.id),
                        l = [...n]; - 1 === a ? l.push(i) : l[a] = i, o.set(i.channel_id, T(l))
                },
                PRIVATE_CHANNEL_INTEGRATION_DELETE(e) {
                    let {
                        channelId: t,
                        applicationId: n
                    } = e, i = o.get(t);
                    if (null == i) return !1;
                    o.set(t, i.filter(e => e.application.id !== n))
                },
                CHANNEL_DELETE(e) {
                    let {
                        channel: t
                    } = e;
                    return o.delete(t.id)
                }
            });
            var S = f