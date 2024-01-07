            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return I
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("77078"),
                o = s("904276"),
                d = s("875436"),
                u = s("797944"),
                c = s("275252"),
                E = s("998728"),
                _ = s("782340"),
                T = s("116891");

            function I(e) {
                var t, s, l;
                let {
                    changeTitle: I,
                    value: S,
                    options: N,
                    className: g,
                    onChange: f
                } = e, [A, L] = n.useState(S), [m, C] = n.useState(!1), [O, h] = n.useState(!1), R = n.useRef(null);
                n.useEffect(() => {
                    L(S)
                }, [S]), n.useEffect(() => () => {
                    clearTimeout(R.current)
                }, []);
                let D = N.find(e => e.value === A),
                    M = e => {
                        !e.disabled && e.value !== A && (h(!0), null == f || f(e), L(e.value), R.current = setTimeout(() => {
                            h(!1), C(!1)
                        }, 1e3))
                    };
                return (0, a.jsx)(c.default, {
                    title: m ? I : null !== (t = null == D ? void 0 : D.title) && void 0 !== t ? t : I,
                    description: m ? "(".concat(null !== (s = null == D ? void 0 : D.title) && void 0 !== s ? s : _.default.Messages.NONE, ")") : null !== (l = null == D ? void 0 : D.description) && void 0 !== l ? l : "",
                    highlightColor: m ? u.HighlightColors.NONE : null == D ? void 0 : D.highlightColor,
                    action: (0, a.jsx)(r.Button, {
                        look: r.Button.Looks.LINK,
                        size: r.Button.Sizes.MIN,
                        color: r.Button.Colors.LINK,
                        children: _.default.Messages.CHANGE
                    }),
                    loading: O,
                    className: g,
                    children: N.map((e, t) => (0, a.jsx)(E.default, {
                        title: e.title,
                        description: e.description,
                        highlightColor: e.highlightColor,
                        className: i(T.groupCollapsedRow, A === e.value && T.selected),
                        selected: A === e.value,
                        action: A === e.value ? (0, a.jsx)(d.default, {
                            className: T.radioItem
                        }) : (0, a.jsx)(o.default, {
                            className: T.radioItem
                        }),
                        onClick: () => M(e),
                        disabled: e.disabled
                    }, "".concat(e.title, "-").concat(t)))
                })
            }