            "use strict";
            n.r(t), n.d(t, {
                getSKUIdFromURL: function() {
                    return f
                },
                canUserInstall: function() {
                    return m
                },
                getReadablePreorderReleaseDate: function() {
                    return _
                }
            }), n("781738"), n("222007");
            var a = n("866227"),
                s = n.n(a),
                l = n("803182"),
                i = n("773336"),
                r = n("271560"),
                o = n("49111");
            n("782340");
            let u = {},
                d = {},
                c = Object.freeze({
                    ALL: -1,
                    ...o.SKUGenres
                });

            function f(e) {
                let t = (0, l.matchPath)(e, {
                    path: o.Routes.APPLICATION_STORE_LISTING_SKU(":skuId", ":slug")
                });
                return null != t ? t.params.skuId : null
            }

            function m(e) {
                let t = (0, r.nativePlatformTypeToSKUOperatingSystem)((0, i.getPlatform)());
                return e.type === o.SKUTypes.DURABLE_PRIMARY && null != t && e.supportedOperatingSystems.includes(t)
            }
            Object.keys(c).forEach(e => {
                let t = e.toLowerCase().replace(/_/g, "-"),
                    n = c[e];
                u[t] = n, d[n] = t
            });
            let E = [
                ["YYYY-MM-DD", "MMMM DD, Y"],
                ["YYYY-MM", "MMMM Y"],
                ["MM-DD", "MMMM DD"],
                ["MM", "MMMM"],
                ["YYYY", "Y"]
            ];

            function _(e) {
                let {
                    preorderReleaseAt: t,
                    preorderApproximateReleaseDate: n
                } = e;
                if (null != t) return t.format("MMMM DD");
                if (null == n) return null;
                for (let e = 0; e < E.length; e++) {
                    let [t, a] = E[e], l = s(n, t, !0);
                    if (l.isValid()) return l.format(a)
                }
                return n
            }