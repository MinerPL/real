            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var a = n("37983"),
                r = n("884691"),
                i = n("77078"),
                s = n("421963"),
                c = n("659500"),
                o = n("158945"),
                d = n("49111"),
                p = n("782340"),
                l = n("352630"),
                u = n("954035");
            let h = new Set([i.ModalTransitionState.ENTERING, i.ModalTransitionState.ENTERED]);

            function f(e) {
                let {
                    onClose: t,
                    onCaptchaVerify: n,
                    onReject: f,
                    transitionState: _,
                    headerText: E,
                    bodyText: m,
                    rqtoken: v,
                    ...C
                } = e, y = (0, o.default)(f);
                return (r.useEffect(() => {
                    c.ComponentDispatch.subscribe(d.ComponentActions.LAYER_POP_ESCAPE_KEY, t)
                }, [t]), null != _ && h.has(_)) ? (0, a.jsx)(i.ModalRoot, {
                    transitionState: _,
                    "aria-label": "CAPTCHA",
                    className: l.modal,
                    children: (0, a.jsxs)(i.ModalContent, {
                        className: l.container,
                        children: [(0, a.jsx)(i.ModalCloseButton, {
                            className: l.close,
                            onClick: t
                        }), (0, a.jsx)("div", {
                            className: l.content,
                            children: _ !== i.ModalTransitionState.ENTERED ? (0, a.jsx)(i.Spinner, {
                                type: i.Spinner.Type.SPINNING_CIRCLE
                            }) : (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("div", {
                                    children: (0, a.jsx)("img", {
                                        src: u,
                                        alt: ""
                                    })
                                }), (0, a.jsx)("div", {
                                    className: l.title,
                                    "aria-hidden": !0,
                                    children: null != E ? E : p.default.Messages.GENERIC_CAPTCHA_HEADER
                                }), (0, a.jsx)("div", {
                                    children: null != m ? m : p.default.Messages.GENERIC_CAPTCHA_DESCRIPTION
                                }), (0, a.jsx)("div", {
                                    className: l.captchaContainer,
                                    children: (0, a.jsx)(s.default, {
                                        onVerify: e => {
                                            y(), n(e, v), t()
                                        },
                                        ...C
                                    })
                                })]
                            })
                        })]
                    })
                }) : null
            }