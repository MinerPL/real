            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("16470"),
                a = n("446674"),
                u = n("77078"),
                d = n("538282"),
                c = n("374363"),
                f = n("551305"),
                p = n("110006"),
                m = n("378765"),
                h = n("49111"),
                E = n("13030"),
                S = n("782340"),
                g = n("537461"),
                C = i.memo(i.forwardRef(function(e, t) {
                    let {
                        disabled: n,
                        type: r
                    } = e, [C, T] = i.useState(!1), v = (0, a.useStateFromStores)([c.default], () => {
                        var e, t;
                        return C && Object.values(null !== (t = null === (e = c.default.frecencyWithoutFetchingLatest.favoriteGifs) || void 0 === e ? void 0 : e.gifs) && void 0 !== t ? t : {}).length <= 2
                    }), [y, x, I] = (0, d.useExpressionPickerStore)(e => [e.activeView, e.activeViewType, e.pickerId], s.default), N = i.useRef(0), _ = i.useCallback(() => {
                        T(!0), clearTimeout(N.current), N.current = setTimeout(() => {
                            T(!1)
                        }, 1500)
                    }, []);
                    i.useEffect(() => () => {
                        clearTimeout(N.current)
                    }), (0, m.useComponentAction)({
                        event: h.ComponentActions.FAVORITE_GIF,
                        handler: _
                    });
                    let A = i.useCallback(() => {
                        (0, d.toggleExpressionPicker)(E.ExpressionPickerViewType.GIF, r)
                    }, [r]);
                    if (n) return null;
                    let R = y === E.ExpressionPickerViewType.GIF && x === r;
                    return (0, l.jsx)(u.Tooltip, {
                        text: v ? S.default.Messages.GIF_TOOLTIP_FAVORITED_PICKER_BUTTON : null,
                        forceOpen: !0,
                        children: e => (0, l.jsx)("div", {
                            ref: t,
                            className: o(E.CHAT_INPUT_BUTTON_CLASSNAME, g.buttonContainer),
                            ...e,
                            children: (0, l.jsx)(f.default, {
                                innerClassName: g.button,
                                icon: p.default,
                                onClick: A,
                                isActive: R,
                                pulse: C,
                                "aria-label": S.default.Messages.GIF_BUTTON_LABEL,
                                "aria-expanded": R,
                                "aria-haspopup": "dialog",
                                "aria-controls": I
                            })
                        })
                    })
                }))