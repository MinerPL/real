            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return f
                }
            }), i("222007"), i("424973"), i("843762");
            var l = i("884691"),
                a = i("446674"),
                n = i("697218"),
                r = i("719923"),
                d = i("686569"),
                o = i("743925"),
                u = i("21002"),
                c = i("673044"),
                s = i("954016");

            function f(e, t) {
                let i = (0, a.useStateFromStores)([n.default], () => n.default.getCurrentUser()),
                    f = (0, o.useActivityShelfData)(e),
                    {
                        enableBigShelf: p,
                        enableMinimalActivityDetails: v,
                        enableSocialProofActivityDetails: m
                    } = d.ExperimentShelfToDetailPage.useExperiment({
                        location: "8814a3_1"
                    }, {
                        autoTrackExposure: !0
                    }),
                    b = p || v || m;
                return l.useMemo(() => {
                    var e;
                    let l = new Map;
                    if (null == i) return [];
                    let a = null;
                    f.forEach(e => {
                        var n;
                        let r = (0, u.default)(e, i),
                            d = null !== (n = l.get(r)) && void 0 !== n ? n : [];
                        t && e.application.id === s.WATCH_YOUTUBE_PROD_APP_ID && !b ? a = e : (d.push(e), l.set(r, d))
                    });
                    let n = null !== (e = l.get(s.ActivityAccessStatus.UNLOCKED)) && void 0 !== e ? e : [];
                    if (!r.default.canUsePremiumActivities(i)) {
                        let e = n.sort((e, t) => Number((0, c.default)(t.activity)) - Number((0, c.default)(e.activity)));
                        l.set(s.ActivityAccessStatus.UNLOCKED, e)
                    }
                    let d = Array.from(l.entries()).sort((e, t) => {
                        let [i] = e, [l] = t;
                        return i <= l ? -1 : 1
                    });
                    return t && null != a && d.unshift([s.ActivityAccessStatus.UNLOCKED, [a]]), d
                }, [i, f, t, b])
            }