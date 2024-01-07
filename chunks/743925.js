            "use strict";
            i.r(t), i.d(t, {
                useActivityShelfData: function() {
                    return f
                }
            }), i("222007");
            var l = i("884691"),
                a = i("446674"),
                n = i("442939"),
                r = i("697218"),
                d = i("167726"),
                o = i("449008"),
                u = i("773336"),
                c = i("191225"),
                s = i("334368");

            function f(e) {
                let t = (0, a.useStateFromStores)([r.default], r.default.getCurrentUser),
                    i = (0, a.useStateFromStoresArray)([c.default], () => c.default.getShelfActivities(e)),
                    f = (0, a.useStateFromStores)([d.default], () => d.default.testModeEmbeddedApplicationId),
                    p = i.map(e => e.application_id),
                    v = null != f ? [f, ...p] : p,
                    m = (0, n.default)(v),
                    b = l.useMemo(() => m.filter(o.isNotNullish), [m]),
                    A = l.useMemo(() => null != f && b.length > 0 && b[0].id === f && null != b[0].embeddedActivityConfig ? [{
                        activity: b[0].embeddedActivityConfig,
                        application: b[0]
                    }] : [], [b, f]),
                    E = l.useMemo(() => i.map(e => {
                        let t = b.find(t => t.id === e.application_id);
                        return null == t ? null : {
                            activity: e,
                            application: t
                        }
                    }).filter(o.isNotNullish), [i, b]);
                return l.useMemo(() => [...A, ...E].filter(e => {
                    var t;
                    let {
                        activity: i
                    } = e;
                    return (null !== (t = i.supported_platforms) && void 0 !== t ? t : []).includes((0, s.default)((0, u.getOS)()))
                }).filter(e => {
                    let {
                        activity: i
                    } = e;
                    return !i.requires_age_gate || (null == t ? void 0 : t.nsfwAllowed) === !0 || (null == t ? void 0 : t.nsfwAllowed) == null
                }), [null == t ? void 0 : t.nsfwAllowed, E, A])
            }