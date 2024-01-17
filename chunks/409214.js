"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("222007");
var l = n("37983"),
  r = n("884691"),
  i = n("414456"),
  s = n.n(i),
  a = n("748820"),
  o = n("509043"),
  u = n("669491"),
  c = n("77078"),
  d = n("634634"),
  f = n("449918"),
  h = n("973262"),
  E = n("832132"),
  p = n("771325"),
  C = n("49111"),
  _ = n("782340"),
  m = n("727125");

function v(e) {
  let {
    onChange: t,
    onClose: n,
    color: i,
    suggestedColors: v,
    disabled: I,
    label: g,
    colorPickerMiddle: S,
    colorPickerFooter: R,
    showEyeDropper: N
  } = e, L = r.useRef(null), T = (0, c.useToken)(u.default.colors.BACKGROUND_PRIMARY).hex(), x = u.default.colors.BACKGROUND_ACCENT.css, A = (0, p.isColorDark)(i), M = (0, o.int2hex)(i), y = M === T ? x : M, P = (0, f.getColor)(A ? C.Color.WHITE_500 : C.Color.PRIMARY_530), b = (0, d.default)(S), j = (0, d.default)(R), [O, F] = r.useState((0, a.v4)());
  return r.useEffect(() => {
    (b !== S || j !== R) && F((0, a.v4)())
  }, [R, S, j, b]), (0, l.jsx)(c.Popout, {
    positionKey: O,
    renderPopout: e => (0, l.jsx)(h.CustomColorPicker, {
      ...e,
      value: i,
      onChange: t,
      suggestedColors: v,
      middle: S,
      footer: R,
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
        className: s(m.colorSwatch, {
          [m.disabled]: I
        }),
        children: [(0, l.jsx)(c.Clickable, {
          ...n,
          tabIndex: I ? -1 : 0,
          onClick: I ? C.NOOP : t,
          style: {
            backgroundColor: M,
            borderColor: y
          },
          className: m.swatch,
          "aria-label": _.default.Messages.USER_SETTINGS_PROFILE_COLOR_SELECT_COLOR,
          focusProps: {
            ringTarget: L
          },
          children: (0, l.jsx)(E.default, {
            className: m.editPencilIcon,
            width: 14,
            height: 14,
            color: P
          })
        }), g]
      })
    }
  })
}