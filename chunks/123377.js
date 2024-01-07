            "use strict";
            let a, l;
            n.r(t), n.d(t, {
                CopiableField: function() {
                    return m
                }
            }), n("222007");
            var s = n("37983"),
                i = n("884691"),
                r = n("414456"),
                u = n.n(r),
                o = n("862337"),
                c = n("77078"),
                d = n("413709"),
                f = n("599110"),
                T = n("306160"),
                E = n("49111"),
                A = n("782340"),
                _ = n("491701");

            function m(e) {
                var t;
                let {
                    className: n,
                    copyValue: r,
                    copyMetaData: m,
                    children: S,
                    disableCopy: C,
                    showCopyIcon: N
                } = e, [g, p] = i.useState(0), [v, I] = i.useState(!1), [M, h] = i.useState(!1);
                if (i.useEffect(() => (a = new o.Timeout, l = new o.Timeout, function() {
                        a.stop(), l.stop()
                    }), []), !T.SUPPORTS_COPY || C) return (0, s.jsx)(s.Fragment, {
                    children: S
                });
                let O = [A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_1, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_2, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_3, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_4, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_5, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_6, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_7, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_8, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_9, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_10, A.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_11],
                    U = Math.min(Math.max(g - 1, 0), O.length - 1),
                    R = null !== (t = O[U]) && void 0 !== t ? t : O[0],
                    x = g >= O.length - 1,
                    y = x ? c.TooltipColors.RED : c.TooltipColors.GREEN,
                    j = v ? y : c.TooltipColors.PRIMARY,
                    P = () => {
                        a.stop(), h(!1)
                    },
                    H = e => {
                        (0, T.copy)(r), f.default.track(E.AnalyticEvents.TEXT_COPIED, {
                            type: m
                        }), "function" == typeof e && e(), !M && p(g + 1), h(!0), I(!0), a.start(1e3, () => h(!1)), l.start(2e3, () => p(0))
                    };
                return (0, s.jsx)(c.Tooltip, {
                    delay: 500,
                    color: j,
                    forceOpen: M,
                    text: v ? (0, s.jsx)(c.Shaker, {
                        isShaking: x,
                        children: R
                    }) : A.default.Messages.ACCOUNT_CLICK_TO_COPY,
                    onAnimationRest: (e, t) => {
                        !M && v && t.phase === E.SpringTransitionPhases.LEAVE && I(!1)
                    },
                    "aria-label": A.default.Messages.ACCOUNT_CLICK_TO_COPY,
                    children: e => {
                        let {
                            onClick: t,
                            onMouseEnter: a,
                            ...l
                        } = e;
                        return (0, s.jsx)(c.Clickable, {
                            ...l,
                            className: _.clickTarget,
                            onMouseEnter: () => {
                                v ? P() : "function" == typeof a && a()
                            },
                            onClick: () => {
                                H(t)
                            },
                            children: (0, s.jsxs)("div", {
                                className: u(n, _.copiableWrapper),
                                children: [(0, s.jsx)("div", {
                                    className: _.childWrapper,
                                    children: S
                                }), N ? (0, s.jsx)("div", {
                                    className: _.copyIconWrapper,
                                    children: (0, s.jsx)(d.default, {
                                        width: 18,
                                        height: 18,
                                        className: _.copyIcon
                                    })
                                }) : null]
                            })
                        })
                    }
                })
            }