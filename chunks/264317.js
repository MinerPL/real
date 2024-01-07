            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            }), a("222007");
            var l = a("884691"),
                n = a("16470"),
                s = a("418009"),
                r = a("850391"),
                i = a("538282"),
                o = a("13030");

            function u(e) {
                let [t, a] = l.useState(null), [u, c, d, E] = (0, i.useExpressionPickerStore)(e => [e.activeView, e.activeViewType, e.lastActiveView, e.pickerId], n.default), f = r.ChatInputTypes.CREATE_POLL, _ = null != u && null != c && c === f, A = null != d ? d : e === s.PollLayoutTypes.DEFAULT ? o.ExpressionPickerViewType.EMOJI : o.ExpressionPickerViewType.GIF, m = l.useCallback(e => {
                    a(e), (0, i.toggleExpressionPicker)(A, f)
                }, [A, f]), L = l.useCallback(() => {
                    (0, i.closeExpressionPicker)(f)
                }, [f]);
                return l.useEffect(() => () => {
                    (0, i.closeExpressionPicker)(f)
                }, [f]), {
                    showPollExpressionPicker: _,
                    togglePollExpressionPicker: m,
                    closePollExpressionPicker: L,
                    pollExpressionPickerId: E,
                    chatInputType: f,
                    lastActiveParentIndex: t
                }
            }