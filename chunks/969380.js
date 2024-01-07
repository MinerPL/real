            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            }), l("222007");
            var i = l("884691"),
                a = l("550368");
            let n = ["embedded_cover", "embedded_background"];

            function s(e) {
                let {
                    applicationId: t,
                    size: l,
                    names: s = n
                } = e, [r, c] = i.useState(null), [d, o] = i.useState(!0), u = (0, a.getAssetImage)(t, r, l);
                return i.useEffect(() => {
                    (0, a.fetchAssetIds)(t, s).then(e => {
                        for (let t of (o(!1), e))
                            if (null != t && "" !== t) {
                                c(t);
                                return
                            }
                    })
                }, [t]), {
                    url: u,
                    state: d ? "loading" : null != u ? "fetched" : "not-found"
                }
            }