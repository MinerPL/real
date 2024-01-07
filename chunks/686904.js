            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("222007");
            var l = n("884691"),
                a = n("448993");

            function s(e, t) {
                let [n, s] = l.useState(!1), [i, r] = l.useState(null), u = async () => {
                    s(!0), r(null);
                    try {
                        let t = await e();
                        return s(!1), r(null), t
                    } catch (n) {
                        let e = new a.APIError(n);
                        return null == t || t(e), r(e), s(!1), null
                    }
                };
                return [u, {
                    loading: n,
                    error: i
                }]
            }