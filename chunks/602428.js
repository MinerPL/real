            "use strict";
            n.r(t), n.d(t, {
                getFailedContent: function() {
                    return _
                },
                InteractionStatusMessage: function() {
                    return N
                },
                default: function() {
                    return L
                }
            });
            var l = n("37983"),
                a = n("884691"),
                u = n("414456"),
                i = n.n(u),
                o = n("775560"),
                s = n("446674"),
                r = n("77078"),
                d = n("812684"),
                c = n("809810"),
                E = n("752598"),
                p = n("423487"),
                m = n("258078"),
                T = n("49111"),
                f = n("782340"),
                S = n("932640");

            function C(e) {
                return {
                    text: e,
                    icon: (0, l.jsx)(r.Dots, {
                        className: S.icon,
                        dotRadius: 3.5,
                        themed: !0
                    })
                }
            }

            function _(e) {
                return {
                    text: null != e ? e : f.default.Messages.APPLICATION_COMMAND_FAILED,
                    color: m.default.Colors.ERROR,
                    icon: (0, l.jsx)(p.default, {
                        width: 16,
                        height: 16,
                        className: i(S.icon, S.errorIcon)
                    })
                }
            }

            function N(e) {
                let {
                    className: t,
                    icon: n,
                    text: a,
                    color: u
                } = e;
                return (0, l.jsxs)("div", {
                    className: i(S.wrapper, t),
                    children: [n, (0, l.jsx)(m.default, {
                        size: m.default.Sizes.SIZE_14,
                        color: u,
                        children: a
                    })]
                })
            }
            var L = a.memo(function(e) {
                let {
                    message: t,
                    className: n,
                    component: u
                } = e, i = (0, o.useForceUpdate)(), r = (0, s.useStateFromStores)([c.default], () => c.default.getInteraction(t), [t]);
                a.useEffect(() => {
                    let e = null;
                    if (t.hasFlag(T.MessageFlags.LOADING) && null != r) {
                        let n = (0, E.getInteractionTimeoutTimestamp)(t.id) - Date.now();
                        n > 0 && (e = setTimeout(() => i(), 1e3 + n))
                    }
                    return () => {
                        clearTimeout(e)
                    }
                }, [i, r, t]);
                let p = null;
                if (null == u) p = function(e, t) {
                    let n = (0, E.getInteractionStatusViewState)(t, e);
                    switch (n) {
                        case E.InteractionStatusViewState.SENDING:
                            return C(f.default.Messages.APPLICATION_COMMAND_SENDING);
                        case E.InteractionStatusViewState.CREATED:
                            return C(f.default.Messages.APPLICATION_COMMAND_WAITING.format({
                                applicationName: t.author.username
                            }));
                        case E.InteractionStatusViewState.TIMED_OUT:
                            return _(f.default.Messages.APPLICATION_COMMAND_TIMED_OUT);
                        case E.InteractionStatusViewState.FAILED:
                            return _(t.interactionError)
                    }
                }(r, t);
                else {
                    let e = (0, d.getActionRowErrorText)(r, t, u);
                    null != e && (p = _(e))
                }
                if (null == p) return null;
                let {
                    text: m,
                    icon: S,
                    color: L
                } = p;
                return (0, l.jsx)(N, {
                    icon: S,
                    text: m,
                    className: n,
                    color: L
                })
            })