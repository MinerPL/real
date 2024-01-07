            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return T
                }
            }), a("222007");
            var n = a("37983"),
                r = a("884691"),
                s = a("528502"),
                o = a("148217"),
                i = a("590157"),
                u = a("393414"),
                l = a("725484"),
                c = a("503578"),
                d = a("280326"),
                A = a("597077"),
                C = a("607025"),
                f = a("878413"),
                h = a("49111"),
                E = a("111792"),
                T = (0, i.makeAuthenticated)(function() {
                    let e;
                    let [t, a] = r.useState({
                        type: "user-code-input",
                        usePrefilledCode: !0
                    });
                    (0, o.default)(), (0, c.useActivateDeviceStepTracking)(t);
                    let i = r.useCallback(() => {
                            a({
                                type: "user-code-input"
                            })
                        }, [a]),
                        T = r.useCallback(e => {
                            a({
                                type: "authorization",
                                userCodeData: e
                            })
                        }, [a]),
                        I = r.useCallback(e => {
                            a({
                                type: "success",
                                userCodeData: e
                            })
                        }, [a]),
                        p = r.useCallback(e => {
                            a({
                                type: "error",
                                userCodeData: e
                            })
                        }, [a]);
                    switch (t.type) {
                        case "user-code-input":
                            e = (0, n.jsx)(f.UserCodeInput, {
                                usePrefilledCode: t.usePrefilledCode || !1,
                                onUserCodeAccepted: T
                            });
                            break;
                        case "authorization":
                            e = (0, n.jsx)(d.ActivateDeviceAuthorize, {
                                data: t.userCodeData,
                                onDenied: i,
                                onError: p,
                                onSuccess: I
                            });
                            break;
                        case "success":
                            e = (0, n.jsx)(C.ActivateDeviceSuccess, {
                                onComplete: () => (0, u.transitionTo)(h.Routes.ME),
                                data: t.userCodeData
                            });
                            break;
                        case "error":
                            e = (0, n.jsx)(A.ActivateDeviceError, {
                                onTryAgain: i
                            });
                            break;
                        default:
                            e = null
                    }
                    return (0, n.jsxs)("div", {
                        className: E.activatePage,
                        children: [(0, n.jsx)(s.default, {
                            className: E.artwork,
                            preserveAspectRatio: "xMinYMin slice"
                        }), (0, n.jsx)(l.default, {
                            show: !0,
                            className: E.logo
                        }), (0, n.jsx)("div", {
                            className: E.content,
                            children: e
                        })]
                    })
                })