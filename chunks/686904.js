            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            }), l("222007");
            var a = l("884691"),
                n = l("448993");

            function s(e, t) {
                let [l, s] = a.useState(!1), [r, d] = a.useState(null), u = async () => {
                    s(!0), d(null);
                    try {
                        let t = await e();
                        return s(!1), d(null), t
                    } catch (l) {
                        let e = new n.APIError(l);
                        return null == t || t(e), d(e), s(!1), null
                    }
                };
                return [u, {
                    loading: l,
                    error: r
                }]
            }