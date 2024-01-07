            "use strict";
            a.r(t), a.d(t, {
                ActivateDeviceAuthorize: function() {
                    return i
                }
            });
            var n = a("37983");
            a("884691");
            var r = a("33942"),
                s = a("916537"),
                o = a("213967");

            function i(e) {
                let {
                    data: t,
                    onDenied: a,
                    onError: i,
                    onSuccess: u
                } = e, l = (0, s.useDeviceCodeAuthorizeCallback)(t, a, i, u);
                return (0, n.jsx)("div", {
                    className: o.content,
                    children: (0, n.jsx)(r.OAuth2Authorize, {
                        clientId: t.clientId,
                        scopes: t.scopes,
                        showLogout: !0,
                        isTrustedName: !0,
                        callbackWithoutPost: l
                    })
                })
            }