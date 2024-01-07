            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("222007");
            var a = n("884691"),
                s = n("550368");
            let l = ["embedded_cover", "embedded_background"];

            function i(e) {
                let {
                    applicationId: t,
                    size: n,
                    names: i = l
                } = e, [r, o] = a.useState(null), [u, d] = a.useState(!0), c = (0, s.getAssetImage)(t, r, n);
                return a.useEffect(() => {
                    (0, s.fetchAssetIds)(t, i).then(e => {
                        for (let t of (d(!1), e))
                            if (null != t && "" !== t) {
                                o(t);
                                return
                            }
                    })
                }, [t]), {
                    url: c,
                    state: u ? "loading" : null != c ? "fetched" : "not-found"
                }
            }