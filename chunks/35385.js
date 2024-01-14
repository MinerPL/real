"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  r = n("414456"),
  o = n.n(r),
  s = n("16470"),
  a = n("65597"),
  u = n("77078"),
  d = n("538282"),
  c = n("13162"),
  f = n("166465"),
  p = n("882641"),
  m = n("13030"),
  h = n("365058"),
  E = n("782340"),
  S = n("537461"),
  g = i.memo(i.forwardRef(function(e, t) {
    let {
      disabled: n,
      type: r
    } = e, g = (0, a.default)([f.default], () => f.default.getHasPackAddedNotification(), []);
    i.useEffect(() => {
      g && setTimeout(() => {
        (0, c.dismissPackAddedNotification)()
      }, h.INVENTORY_PACK_ADDED_NOTIFICATION_DURATION)
    }, [g]);
    let [C, T, v] = (0, d.useExpressionPickerStore)(e => [e.activeView, e.activeViewType, e.pickerId], s.default), y = i.useCallback(() => {
      (0, d.toggleExpressionPicker)(m.ExpressionPickerViewType.EMOJI, r)
    }, [r]);
    return n ? null : (0, l.jsx)(u.Tooltip, {
      color: u.TooltipColors.GREEN,
      text: g ? E.default.Messages.INVENTORY_PACK_ADDED.format({
        number: 1
      }) : null,
      forceOpen: !0,
      children: e => (0, l.jsx)("div", {
        className: o(m.CHAT_INPUT_BUTTON_CLASSNAME, S.buttonContainer),
        ref: t,
        ...e,
        children: (0, l.jsx)(p.default, {
          className: S.emojiButton,
          onClick: y,
          active: C === m.ExpressionPickerViewType.EMOJI && T === r,
          "aria-controls": v,
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