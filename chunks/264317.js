            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return c
                }
            }), a("222007");
            var l = a("884691"),
                n = a("16470"),
                s = a("418009"),
                r = a("850391"),
                i = a("538282"),
                o = a("186859"),
                u = a("13030");

            function c(e) {
                var t, a;
                let [c, d] = l.useState(null), [E, _, f, A] = (0, i.useExpressionPickerStore)(e => [e.activeView, e.activeViewType, e.lastActiveView, e.pickerId], n.default), m = r.ChatInputTypes.CREATE_POLL, L = null != E && null != _ && _ === m;
                let T = (t = f, a = e, null != t && o.POLLS_SUPPORTED_EXPRESSION_PICKER_VIEW_TYPES.has(t) ? t : a === s.PollLayoutTypes.DEFAULT ? u.ExpressionPickerViewType.EMOJI : u.ExpressionPickerViewType.GIF),
                    C = l.useCallback(e => {
                        d(t => (t === e ? (0, i.toggleExpressionPicker)(T, m) : (0, i.openExpressionPicker)(T, m), e))
                    }, [T, m]),
                    p = l.useCallback(() => {
                        (0, i.closeExpressionPicker)(m)
                    }, [m]);
                return l.useEffect(() => () => {
                    (0, i.closeExpressionPicker)(m)
                }, [m]), {
                    showPollExpressionPicker: L,
                    togglePollExpressionPicker: C,
                    closePollExpressionPicker: p,
                    pollExpressionPickerId: A,
                    chatInputType: m,
                    lastActiveParentIndex: c
                }
            }