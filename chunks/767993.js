            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                l = n("669491"),
                i = n("819855"),
                r = n("77078"),
                o = n("716241"),
                u = n("161778"),
                d = n("925877"),
                c = n("599110"),
                f = n("49111"),
                h = n("782340"),
                C = n("578000"),
                p = n("632215");

            function m(e) {
                let {
                    onClose: t,
                    onConfirm: m,
                    onCancel: E,
                    channel: g,
                    analyticsType: S,
                    popoutText: _,
                    animation: A
                } = e;
                s.useEffect(() => {
                    c.default.track(f.AnalyticEvents.OPEN_POPOUT, {
                        type: S,
                        ...(0, o.collectChannelAnalyticsMetadata)(g)
                    })
                }, [S, g]);
                let T = s.useCallback(() => {
                        null == m || m(), t()
                    }, [m, t]),
                    M = s.useCallback(() => {
                        null == E || E(), t()
                    }, [E, t]),
                    N = s.useRef(null);
                return s.useEffect(() => {
                    let e;
                    let t = u.default.theme,
                        a = !1;
                    return null != A && (async () => {
                        let [{
                            default: s
                        }, l] = await Promise.all([n.el("245749").then(n.t.bind(n, "245749", 23)), (0, i.isThemeDark)(t) ? A.dark() : A.light()]);
                        !a && (e = s.loadAnimation({
                            container: N.current,
                            renderer: "svg",
                            loop: !0,
                            autoplay: !0,
                            animationData: l
                        }))
                    })(), () => {
                        a = !0, null != e && (e.destroy(), e = void 0)
                    }
                }, [A]), (0, a.jsx)(r.Dialog, {
                    "aria-labelledby": "content-warning-popout-label",
                    children: (0, a.jsxs)("form", {
                        className: C.contentWarningPopout,
                        onSubmit: T,
                        children: [(0, a.jsxs)("div", {
                            className: C.body,
                            children: [null != A && (0, a.jsx)("div", {
                                className: C.animation,
                                ref: N
                            }), (0, a.jsxs)("div", {
                                className: C.content,
                                children: [(0, a.jsx)("div", {
                                    className: C.header,
                                    children: h.default.Messages.SELF_XSS_HEADER
                                }), (0, a.jsx)(r.Text, {
                                    id: "content-warning-popout-label",
                                    className: p.markup,
                                    variant: "text-sm/normal",
                                    children: _.body
                                }), (0, a.jsxs)("div", {
                                    className: C.buttonWrapper,
                                    children: [(0, a.jsxs)("div", {
                                        className: C.buttonContainer,
                                        children: [(0, a.jsx)(r.Button, {
                                            className: C.button,
                                            color: r.Button.Colors.PRIMARY,
                                            onClick: M,
                                            children: h.default.Messages.EDIT_MESSAGE
                                        }), (0, a.jsx)(r.Text, {
                                            variant: "text-xs/normal",
                                            className: C.buttonHint,
                                            children: h.default.Messages.EVERYONE_POPOUT_ESC.format()
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: C.buttonContainer,
                                        children: [(0, a.jsx)(r.Button, {
                                            className: C.button,
                                            onClick: T,
                                            type: "submit",
                                            autoFocus: !0,
                                            children: h.default.Messages.EVERYONE_POPOUT_SEND_NOW
                                        }), (0, a.jsx)(r.Text, {
                                            variant: "text-xs/normal",
                                            className: C.buttonHint,
                                            children: h.default.Messages.EVERYONE_POPOUT_ENTER.format()
                                        })]
                                    })]
                                })]
                            })]
                        }), null != _.footer && "" !== _.footer ? (0, a.jsxs)("div", {
                            className: C.footer,
                            children: [(0, a.jsx)(d.default, {
                                color: l.default.unsafe_rawColors.PRIMARY_400.css,
                                className: C.icon
                            }), (0, a.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                children: _.footer
                            })]
                        }) : null]
                    })
                })
            }