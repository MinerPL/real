"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  r = n("414456"),
  o = n.n(r),
  s = n("16470"),
  a = n("77078"),
  u = n("200197"),
  d = n("538282"),
  c = n("551305"),
  f = n("595086"),
  p = n("88497"),
  m = n("13030"),
  h = n("782340"),
  E = n("537461"),
  S = i.memo(i.forwardRef(function(e, t) {
    let n, {
        disabled: r,
        type: p
      } = e,
      [S, g] = (0, d.useExpressionPickerStore)(e => [e.activeView, e.pickerId], s.default),
      C = i.useContext(u.default),
      [T, v] = i.useState(!1),
      y = S === m.ExpressionPickerViewType.STICKER,
      x = i.useCallback(() => {
        (0, d.toggleExpressionPicker)(m.ExpressionPickerViewType.STICKER, p)
      }, [p]);
    i.useEffect(() => {
      let e = () => {
          requestAnimationFrame(() => {
            v(!0)
          })
        },
        t = () => {
          requestAnimationFrame(() => {
            v(!1)
          })
        };
      return C.addListener("sticker-suggestions-shown", e), C.addListener("sticker-suggestions-hidden", t), () => {
        C.removeListener("sticker-suggestions-shown", e), C.removeListener("sticker-suggestions-hidden", t)
      }
    }, [C]);
    let I = (0, a.useRedesignIconContext)().enabled;
    return r ? null : (n = (0, l.jsx)(f.default, {
      className: I ? "" : E.stickerIcon,
      winking: T,
      color: "currentColor"
    }), (0, l.jsx)("div", {
      className: o(m.CHAT_INPUT_BUTTON_CLASSNAME, E.buttonContainer),
      ref: t,
      children: (0, l.jsx)(c.default, {
        innerClassName: o(E.button, E.stickerButton, {
          [E.stickerButtonWithNotification]: !1,
          [E.stickerButtonTilted]: T && !y
        }),
        onClick: x,
        isActive: y,
        "aria-label": h.default.Messages.STICKER_BUTTON_LABEL,
        "aria-expanded": y,
        "aria-haspopup": "dialog",
        "aria-controls": g,
        sparkle: !1,
        notification: null,
        children: n
      })
    }))
  }))