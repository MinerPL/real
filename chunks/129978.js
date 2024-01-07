            "use strict";
            n.r(t), n.d(t, {
                SelfDismissibleAlertBody: function() {
                    return u
                }
            });
            var i = n("37983"),
                a = n("884691"),
                l = n("446674"),
                s = n("76393"),
                r = n("347279");

            function u(e) {
                let {
                    body: t,
                    dismissCallback: n,
                    errorCodeMessage: u
                } = e, o = (0, l.useStateFromStores)([s.default], () => s.default.getRemoteSessionId());
                return (a.useEffect(() => {
                    null != o && n()
                }, [o, n]), null == u) ? (0, i.jsx)(i.Fragment, {
                    children: t
                }) : (0, i.jsxs)(i.Fragment, {
                    children: [t, (0, i.jsx)("div", {
                        className: r.errorCodeMessage,
                        children: u
                    })]
                })
            }