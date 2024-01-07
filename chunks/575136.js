            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return c
                },
                useEmbeddedAppsByChannel: function() {
                    return s
                },
                useEmbeddedApps: function() {
                    return f
                },
                useEmbeddedAppsWithPresence: function() {
                    return p
                }
            }), i("222007"), i("424973");
            var l = i("884691"),
                a = i("446674"),
                n = i("442939"),
                r = i("824563"),
                d = i("697218"),
                o = i("449008"),
                u = i("191225");

            function c(e, t) {
                let i = (0, a.useStateFromStoresArray)([u.default], () => null != e && null != e.id && "" !== e.id ? u.default.getEmbeddedActivitiesForChannel(e.id) : u.NO_ACTIVITIES),
                    l = f(i, t);
                return l
            }

            function s(e) {
                let t = (0, a.useStateFromStores)([u.default], () => null != e ? u.default.getEmbeddedActivitiesForGuild(e) : u.NO_ACTIVITIES),
                    i = f(t),
                    n = l.useMemo(() => {
                        let e = new Map;
                        return i.forEach(t => {
                            var i;
                            let l = t.embeddedActivity.channelId,
                                a = null !== (i = e.get(l)) && void 0 !== i ? i : [];
                            a.push(t), e.set(l, a)
                        }), e
                    }, [i]);
                return n
            }

            function f(e, t) {
                let i = e.map(e => e.application_id),
                    r = (0, n.default)(i),
                    u = new Set([]);
                for (let t of e)
                    for (let e of t.connections.keys()) u.add(e);
                let c = (0, a.useStateFromStoresArray)([d.default], () => {
                        let e = [];
                        for (let t of u) e.push(d.default.getUser(t));
                        return e
                    }, [u]),
                    s = l.useMemo(() => {
                        let i = new Map;
                        c.forEach(e => {
                            null != e && i.set(e.id, e)
                        });
                        let l = e.map((e, l) => {
                            let a = r[l],
                                n = [];
                            if (null != n)
                                for (let l of e.connections.keys()) {
                                    let e = i.get(l);
                                    if (null != e && null != t) {
                                        let i = t(e);
                                        null != i && n.push(i)
                                    }
                                }
                            return null == a ? null : {
                                embeddedActivity: e,
                                application: a,
                                userParticipantAvatarUrls: n
                            }
                        }).filter(o.isNotNullish);
                        return l
                    }, [e, r, c, t]);
                return s
            }

            function p(e) {
                let t = (0, a.useStateFromStores)([r.default], () => {
                    let t = new Map;
                    return e.forEach(e => {
                        var i, l;
                        let a = r.default.findActivity(null == e ? void 0 : e.embeddedActivity.connections.values().next().value.user_id, t => {
                            var i;
                            return t.application_id === (null == e ? void 0 : null === (i = e.application) || void 0 === i ? void 0 : i.id)
                        });
                        t.set(null == e ? void 0 : null === (i = e.application) || void 0 === i ? void 0 : i.id, {
                            ...e,
                            embeddedActivity: {
                                ...null == e ? void 0 : e.embeddedActivity,
                                details: null !== (l = null == a ? void 0 : a.details) && void 0 !== l ? l : ""
                            }
                        })
                    }), t
                }, [e], a.statesWillNeverBeEqual);
                return t
            }