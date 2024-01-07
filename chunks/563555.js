            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return d
                }
            }), s("222007");
            var a = s("37983"),
                u = s("884691"),
                n = s("730290"),
                o = s("90915"),
                c = s("8222"),
                r = s("267570"),
                h = s("941281"),
                i = s("782340");

            function d() {
                let e;
                let t = (0, o.useLocation)(),
                    [s, d] = u.useState(!1),
                    [l, f] = u.useState(!1);
                return u.useEffect(() => {
                    (async function e() {
                        let e = (0, n.parse)(t.search);
                        try {
                            var s;
                            await (0, c.acceptWhitelist)(null !== (s = e.token) && void 0 !== s ? s : ""), d(!0)
                        } catch {
                            f(!0)
                        }
                    })()
                }, [t.search]), e = s ? (0, a.jsx)(h.OAuth2Success, {
                    message: i.default.Messages.WHITELISTED,
                    showsCloseWindowText: !0
                }) : l ? (0, a.jsx)(h.OAuth2Error, {
                    message: i.default.Messages.WHITELIST_FAILED,
                    showsCloseWindowText: !0
                }) : (0, a.jsx)(h.default, {
                    message: i.default.Messages.WHITELISTING,
                    spinner: !0
                }), (0, a.jsx)(r.OAuth2Page, {
                    children: e
                })
            }