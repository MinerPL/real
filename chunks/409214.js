"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  r = n("414456"),
  s = n.n(r),
  a = n("748820"),
  o = n("509043"),
  u = n("669491"),
  c = n("77078"),
  d = n("634634"),
  f = n("449918"),
  h = n("973262"),
  E = n("832132"),
  C = n("771325"),
  p = n("49111"),
  _ = n("782340"),
  v = n("727125");

function m(e) {
  let {
    onChange: t,
    onClose: n,
    color: r,
    suggestedColors: m,
    disabled: R,
    label: I,
    colorPickerMiddle: g,
    colorPickerFooter: S,
    showEyeDropper: N
  } = e, L = i.useRef(null), T = (0, c.useToken)(u.default.colors.BACKGROUND_PRIMARY).hex(), x = u.default.colors.BACKGROUND_ACCENT.css, A = (0, C.isColorDark)(r), M = (0, o.int2hex)(r), P = M === T ? x : M, b = (0, f.getColor)(A ? p.Color.WHITE_500 : p.Color.PRIMARY_530), j = (0, d.default)(g), y = (0, d.default)(S), [O, w] = i.useState((0, a.v4)());
  return i.useEffect(() => {
    (j !== g || y !== S) && w((0, a.v4)())
  }, [S, g, y, j]), (0, l.jsx)(c.Popout, {
    positionKey: O,
    renderPopout: e => (0, l.jsx)(h.CustomColorPicker, {
      ...e,
      value: r,
      onChange: t,
      suggestedColors: m,
      middle: g,
      footer: S,
      showEyeDropper: N
    }),
    onRequestClose: n,
    children: e => {
      let {
        onClick: t,
        ...n
      } = e;
      return (0, l.jsxs)("div", {
        ref: L,
        className: s(v.colorSwatch, {
          [v.disabled]: R
        }),
        children: [(0, l.jsx)(c.Clickable, {
          ...n,
          tabIndex: R ? -1 : 0,
          onClick: R ? p.NOOP : t,
          style: {
            backgroundColor: M,
            borderColor: P
          },
          className: v.swatch,
          "aria-label": _.default.Messages.USER_SETTINGS_PROFILE_COLOR_SELECT_COLOR,
          focusProps: {
            ringTarget: L
          },
          children: (0, l.jsx)(E.default, {
            className: v.editPencilIcon,
            width: 14,
            height: 14,
            color: b
          })
        }), I]
      })
    }
  })
}