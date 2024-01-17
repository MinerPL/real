"use strict";
n.r(t), n.d(t, {
  DefaultColorButton: function() {
    return g
  },
  CustomColorButton: function() {
    return S
  },
  CustomColorPicker: function() {
    return R
  },
  default: function() {
    return N
  }
}), n("222007");
var l = n("37983"),
  r = n("884691"),
  i = n("414456"),
  s = n.n(i),
  a = n("974667"),
  o = n("509043"),
  u = n("77078"),
  c = n("248559"),
  d = n("449918"),
  f = n("526975"),
  h = n("36694"),
  E = n("422403"),
  p = n("664336"),
  C = n("49111"),
  _ = n("782340"),
  m = n("169225");
let v = () => Promise.resolve();

function I(e) {
  let {
    color: t,
    isDefault: n = !1,
    isCustom: r = !1,
    isSelected: i = !1,
    disabled: c = !1,
    style: f = {},
    onClick: p,
    "aria-label": _
  } = e, v = (0, a.useListItem)("color-".concat(t)), I = null != t ? (0, o.int2hex)(t) : f.backgroundColor, g = !1;
  return r && !i ? g = !0 : (r || i) && (g = (0, o.getDarkness)(t) > .1), (0, l.jsx)(u.FocusRing, {
    offset: -2,
    children: (0, l.jsxs)("button", {
      type: "button",
      className: s(m.colorPickerSwatch, {
        [m.disabled]: c,
        [m.default]: n,
        [m.custom]: r,
        [m.noColor]: null == t
      }),
      disabled: c,
      onClick: () => null == p ? void 0 : p(t),
      style: {
        ...f,
        backgroundColor: I
      },
      "aria-label": null != _ ? _ : I,
      ...v,
      children: [r ? (0, l.jsx)(E.default, {
        className: m.colorPickerDropper,
        foreground: m.colorPickerDropperFg,
        width: 14,
        height: 14,
        color: (0, d.getColor)(g ? C.Color.WHITE_500 : C.Color.BLACK_500)
      }) : null, function() {
        let e = 16,
          t = 16;
        if ((r || n) && (e = 32, t = 24), i) return (0, l.jsx)(h.default, {
          width: e,
          height: t,
          color: (0, d.getColor)(g ? C.Color.WHITE_500 : C.Color.BLACK_500)
        })
      }()]
    })
  })
}
class g extends r.PureComponent {
  render() {
    let {
      color: e,
      onChange: t,
      value: n,
      disabled: r
    } = this.props;
    return (0, l.jsx)(I, {
      isDefault: !0,
      color: e,
      isSelected: e === n || 0 === n,
      onClick: t,
      disabled: r
    })
  }
}
class S extends r.PureComponent {
  render() {
    let {
      customColor: e,
      value: t,
      disabled: n,
      "aria-label": r
    } = this.props;
    return (0, l.jsx)(I, {
      isCustom: !0,
      color: e,
      isSelected: t === e,
      disabled: n,
      "aria-label": r
    })
  }
}
let R = r.memo(e => {
  let {
    value: t,
    onChange: n,
    onClose: i,
    suggestedColors: s,
    middle: a,
    footer: d,
    showEyeDropper: h
  } = e, C = (0, c.default)(), [v, I] = r.useState(() => {
    let e = null != t ? t : 0,
      n = (0, o.int2hex)(e);
    return {
      current: e,
      pending: n,
      input: n
    }
  });
  r.useEffect(() => {
    if (null == t || t === v.current) return;
    let e = (0, o.int2hex)(t);
    I({
      current: t,
      pending: e,
      input: e
    })
  }, [t, v]), r.useEffect(() => i, [i]);
  let g = e => {
      let t = "#" === e[0] ? e : "#".concat(e);
      if (!(0, o.isValidHex)(t)) {
        I(e => ({
          ...e,
          input: t
        }));
        return
      }
      let l = (0, o.hex2int)(t);
      I({
        current: l,
        pending: t,
        input: t
      }), n(l)
    },
    S = async () => {
      if (null != C) try {
        let {
          sRGBHex: e
        } = await C.open();
        g(e)
      } catch {}
    }, R = e => {
      I(t => ({
        ...t,
        pending: e,
        input: e
      }))
    }, N = e => {
      n((0, o.hex2int)(e))
    };
  return (0, l.jsxs)(u.Dialog, {
    "aria-label": _.default.Messages.PICK_A_COLOR,
    className: m.customColorPicker,
    children: [(0, l.jsx)(f.default, {
      onChange: e => {
        let {
          hex: t
        } = e;
        return R(t)
      },
      onChangeComplete: e => {
        let {
          hex: t
        } = e;
        return N(t)
      },
      color: v.pending
    }), a, (0, l.jsxs)("div", {
      className: m.customColorPickerInputContainer,
      children: [h && null != C && (0, l.jsx)(p.Icon, {
        onClick: S,
        tooltip: _.default.Messages.PICK_A_COLOR_FROM_THE_PAGE,
        tooltipPosition: "top",
        className: m.customColorPickerEyeDropper,
        icon: E.default
      }), (0, l.jsx)(u.TextInput, {
        className: m.customColorPickerInput,
        value: v.input,
        onChange: g,
        maxLength: 7
      })]
    }), null != s && s.length > 0 && (0, l.jsx)("div", {
      className: m.suggestedColors,
      children: s.map((e, t) => (0, l.jsx)(u.Clickable, {
        "aria-label": "",
        style: {
          backgroundColor: e
        },
        className: m.suggestedColor,
        onClick: () => g(e)
      }, "".concat(e, "-").concat(t)))
    }), d]
  })
});

function N(e) {
  let {
    className: t,
    defaultColor: n,
    customColor: r,
    colors: i,
    value: o,
    disabled: u,
    onChange: c,
    renderDefaultButton: d,
    renderCustomButton: f,
    colorContainerClassName: h
  } = e, E = e => (0, l.jsx)("div", {
    className: m.colorPickerRow,
    children: e.map(e => (0, l.jsx)(I, {
      color: e,
      isSelected: e === o,
      onClick: c,
      disabled: u
    }, e))
  }), p = i.slice(0, i.length / 2), C = i.slice(i.length / 2, i.length), _ = (0, a.default)({
    id: "color-picker",
    isEnabled: !0,
    scrollToStart: v,
    scrollToEnd: v
  });
  return (0, l.jsx)(a.ListNavigatorProvider, {
    navigator: _,
    children: (0, l.jsx)(a.ListNavigatorContainer, {
      children: e => {
        let {
          ref: i,
          ...a
        } = e;
        return (0, l.jsxs)("div", {
          className: s(m.container, t),
          ref: i,
          ...a,
          children: [(0, l.jsx)("div", {
            className: s(m.defaultContainer, h),
            children: d({
              value: o,
              color: n,
              onChange: c,
              disabled: u
            })
          }), (0, l.jsx)("div", {
            className: s(m.customContainer, h),
            children: f({
              value: o,
              customColor: r,
              disabled: u
            })
          }), (0, l.jsxs)("div", {
            className: m.presets,
            children: [E(p), E(C)]
          })]
        })
      }
    })
  })
}