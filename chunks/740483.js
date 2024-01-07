            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return T
                }
            }), a("222007");
            var s = a("37983"),
                n = a("884691"),
                l = a("414456"),
                r = a.n(l),
                i = a("16470"),
                o = a("65597"),
                u = a("77078"),
                d = a("538282"),
                c = a("13162"),
                m = a("166465"),
                h = a("882641"),
                f = a("13030"),
                g = a("365058"),
                x = a("782340"),
                C = a("537461"),
                T = n.memo(n.forwardRef(function(e, t) {
                    let {
                        disabled: a,
                        type: l,
                        className: T,
                        onClick: _
                    } = e, S = (0, o.default)([m.default], () => m.default.getHasPackAddedNotification(), []);
                    n.useEffect(() => {
                        S && setTimeout(() => {
                            (0, c.dismissPackAddedNotification)()
                        }, g.INVENTORY_PACK_ADDED_NOTIFICATION_DURATION)
                    }, [S]);
                    let [p, E] = (0, d.useExpressionPickerStore)(e => [e.activeView, e.activeViewType], i.default), N = n.useCallback(() => {
                        (0, d.toggleMultiExpressionPicker)(l), null == _ || _()
                    }, [l, _]);
                    return a ? null : (0, s.jsx)(u.Tooltip, {
                        color: u.TooltipColors.GREEN,
                        text: S ? x.default.Messages.INVENTORY_PACK_ADDED.format({
                            number: 1
                        }) : null,
                        forceOpen: !0,
                        children: e => (0, s.jsx)("div", {
                            className: r(f.CHAT_INPUT_BUTTON_CLASSNAME, C.buttonContainer),
                            ref: t,
                            ...e,
                            children: (0, s.jsx)(h.default, {
                                className: r(C.emojiButton, T),
                                onClick: N,
                                active: (p === f.ExpressionPickerViewType.GIF || p === f.ExpressionPickerViewType.EMOJI || p === f.ExpressionPickerViewType.STICKER) && E === l,
                                tabIndex: 0,
                                focusProps: {
                                    offset: {
                                        top: 4,
                                        bottom: 4,
                                        left: -4,
                                        right: -4
                                    }
                                }
                            })
                        })
                    })
                }))