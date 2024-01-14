"use strict";
A.r(t), A.d(t, {
  DefaultColorButton: function() {
    return I
  },
  CustomColorButton: function() {
    return v
  },
  CustomColorPicker: function() {
    return E
  },
  default: function() {
    return x
  }
}), A("222007");
var a = A("37983"),
  l = A("884691"),
  n = A("414456"),
  r = A.n(n),
  s = A("974667"),
  o = A("509043"),
  i = A("77078"),
  u = A("248559"),
  d = A("449918"),
  c = A("526975"),
  f = A("36694"),
  C = A("422403"),
  g = A("664336"),
  h = A("49111"),
  T = A("782340"),
  m = A("169225");
let p = () => Promise.resolve();

function U(e) {
  let {
    color: t,
    isDefault: A = !1,
    isCustom: l = !1,
    isSelected: n = !1,
    disabled: u = !1,
    style: c = {},
    onClick: g,
    "aria-label": T
  } = e, p = (0, s.useListItem)("color-".concat(t)), U = null != t ? (0, o.int2hex)(t) : c.backgroundColor, I = !1;
  return l && !n ? I = !0 : (l || n) && (I = (0, o.getDarkness)(t) > .1), (0, a.jsx)(i.FocusRing, {
    offset: -2,
    children: (0, a.jsxs)("button", {
      type: "button",
      className: r(m.colorPickerSwatch, {
        [m.disabled]: u,
        [m.default]: A,
        [m.custom]: l,
        [m.noColor]: null == t
      }),
      disabled: u,
      onClick: () => null == g ? void 0 : g(t),
      style: {
        ...c,
        backgroundColor: U
      },
      "aria-label": null != T ? T : U,
      ...p,
      children: [l ? (0, a.jsx)(C.default, {
        className: m.colorPickerDropper,
        foreground: m.colorPickerDropperFg,
        width: 14,
        height: 14,
        color: (0, d.getColor)(I ? h.Color.WHITE_500 : h.Color.BLACK_500)
      }) : null, function() {
        let e = 16,
          t = 16;
        if ((l || A) && (e = 32, t = 24), n) return (0, a.jsx)(f.default, {
          width: e,
          height: t,
          color: (0, d.getColor)(I ? h.Color.WHITE_500 : h.Color.BLACK_500)
        })
      }()]
    })
  })
}
class I extends l.PureComponent {
  render() {
    let {
      color: e,
      onChange: t,
      value: A,
      disabled: l
    } = this.props;
    return (0, a.jsx)(U, {
      isDefault: !0,
      color: e,
      isSelected: e === A || 0 === A,
      onClick: t,
      disabled: l
    })
  }
}
class v extends l.PureComponent {
  render() {
    let {
      customColor: e,
      value: t,
      disabled: A,
      "aria-label": l
    } = this.props;
    return (0, a.jsx)(U, {
      isCustom: !0,
      color: e,
      isSelected: t === e,
      disabled: A,
      "aria-label": l
    })
  }
}
let E = l.memo(e => {
  let {
    value: t,
    onChange: A,
    onClose: n,
    suggestedColors: r,
    middle: s,
    footer: d,
    showEyeDropper: f
  } = e, h = (0, u.default)(), [p, U] = l.useState(() => {
    let e = null != t ? t : 0,
      A = (0, o.int2hex)(e);
    return {
      current: e,
      pending: A,
      input: A
    }
  });
  l.useEffect(() => {
    if (null == t || t === p.current) return;
    let e = (0, o.int2hex)(t);
    U({
      current: t,
      pending: e,
      input: e
    })
  }, [t, p]), l.useEffect(() => n, [n]);
  let I = e => {
      let t = "#" === e[0] ? e : "#".concat(e);
      if (!(0, o.isValidHex)(t)) {
        U(e => ({
          ...e,
          input: t
        }));
        return
      }
      let a = (0, o.hex2int)(t);
      U({
        current: a,
        pending: t,
        input: t
      }), A(a)
    },
    v = async () => {
      if (null != h) try {
        let {
          sRGBHex: e
        } = await h.open();
        I(e)
      } catch {}
    }, E = e => {
      U(t => ({
        ...t,
        pending: e,
        input: e
      }))
    }, x = e => {
      A((0, o.hex2int)(e))
    };
  return (0, a.jsxs)(i.Dialog, {
    "aria-label": T.default.Messages.PICK_A_COLOR,
    className: m.customColorPicker,
    children: [(0, a.jsx)(c.default, {
      onChange: e => {
        let {
          hex: t
        } = e;
        return E(t)
      },
      onChangeComplete: e => {
        let {
          hex: t
        } = e;
        return x(t)
      },
      color: p.pending
    }), s, (0, a.jsxs)("div", {
      className: m.customColorPickerInputContainer,
      children: [f && null != h && (0, a.jsx)(g.Icon, {
        onClick: v,
        tooltip: T.default.Messages.PICK_A_COLOR_FROM_THE_PAGE,
        tooltipPosition: "top",
        className: m.customColorPickerEyeDropper,
        icon: C.default
      }), (0, a.jsx)(i.TextInput, {
        className: m.customColorPickerInput,
        value: p.input,
        onChange: I,
        maxLength: 7
      })]
    }), null != r && r.length > 0 && (0, a.jsx)("div", {
      className: m.suggestedColors,
      children: r.map((e, t) => (0, a.jsx)(i.Clickable, {
        "aria-label": "",
        style: {
          backgroundColor: e
        },
        className: m.suggestedColor,
        onClick: () => I(e)
      }, "".concat(e, "-").concat(t)))
    }), d]
  })
});

function x(e) {
  let {
    className: t,
    defaultColor: A,
    customColor: l,
    colors: n,
    value: o,
    disabled: i,
    onChange: u,
    renderDefaultButton: d,
    renderCustomButton: c,
    colorContainerClassName: f
  } = e, C = e => (0, a.jsx)("div", {
    className: m.colorPickerRow,
    children: e.map(e => (0, a.jsx)(U, {
      color: e,
      isSelected: e === o,
      onClick: u,
      disabled: i
    }, e))
  }), g = n.slice(0, n.length / 2), h = n.slice(n.length / 2, n.length), T = (0, s.default)({
    id: "color-picker",
    isEnabled: !0,
    scrollToStart: p,
    scrollToEnd: p
  });
  return (0, a.jsx)(s.ListNavigatorProvider, {
    navigator: T,
    children: (0, a.jsx)(s.ListNavigatorContainer, {
      children: e => {
        let {
          ref: n,
          ...s
        } = e;
        return (0, a.jsxs)("div", {
          className: r(m.container, t),
          ref: n,
          ...s,
          children: [(0, a.jsx)("div", {
            className: r(m.defaultContainer, f),
            children: d({
              value: o,
              color: A,
              onChange: u,
              disabled: i
            })
          }), (0, a.jsx)("div", {
            className: r(m.customContainer, f),
            children: c({
              value: o,
              customColor: l,
              disabled: i
            })
          }), (0, a.jsxs)("div", {
            className: m.presets,
            children: [C(g), C(h)]
          })]
        })
      }
    })
  })
}