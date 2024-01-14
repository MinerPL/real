"use strict";
n.r(t), n.d(t, {
  MenuSliderControl: function() {
    return l
  }
});
var i = n("37983"),
  r = n("884691"),
  s = n("837443"),
  a = n("92730");
let o = e => "".concat(e.toFixed(0), "%"),
  l = r.forwardRef(function(e, t) {
    let {
      value: n,
      minValue: l = 0,
      maxValue: u = 100,
      onChange: c,
      renderValue: d = o,
      "aria-label": f
    } = e, E = r.useRef(null);
    return r.useImperativeHandle(t, () => ({
      focus: () => {
        var e;
        return null === (e = E.current) || void 0 === e ? void 0 : e.focus()
      },
      blur: () => {
        var e;
        return null === (e = E.current) || void 0 === e ? void 0 : e.blur()
      },
      activate: () => !1
    }), []), (0, i.jsx)("div", {
      className: a.sliderContainer,
      children: (0, i.jsx)(s.Slider, {
        ref: E,
        mini: !0,
        handleSize: 16,
        className: a.slider,
        initialValue: n,
        minValue: l,
        maxValue: u,
        onValueChange: c,
        asValueChanges: c,
        onValueRender: d,
        orientation: "horizontal",
        "aria-label": f
      })
    })
  })