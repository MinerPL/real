"use strict";
n.r(t), n.d(t, {
  useToggle: function() {
    return i
  }
});
var r = n("290895"),
  o = n("780095"),
  a = n("495912");

function i(e, t, n) {
  let {
    isDisabled: i = !1,
    isRequired: s = !1,
    isReadOnly: c = !1,
    value: l,
    name: u,
    children: d,
    "aria-label": p,
    "aria-labelledby": f,
    validationState: m = "valid",
    isInvalid: h
  } = e;
  !(null != d) && !(null != p || null != f) && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let {
    pressProps: g,
    isPressed: v
  } = (0, a.usePress)({
    isDisabled: i
  }), {
    focusableProps: y
  } = (0, o.useFocusable)(e, n), b = (0, r.mergeProps)(g, y), x = (0, r.filterDOMProps)(e, {
    labelable: !0
  });
  return (0, r.useFormReset)(n, t.isSelected, t.setSelected), {
    inputProps: (0, r.mergeProps)(x, {
      "aria-invalid": h || "invalid" === m || void 0,
      "aria-errormessage": e["aria-errormessage"],
      "aria-controls": e["aria-controls"],
      "aria-readonly": c || void 0,
      "aria-required": s || void 0,
      onChange: e => {
        e.stopPropagation(), t.setSelected(e.target.checked)
      },
      disabled: i,
      ...null == l ? {} : {
        value: l
      },
      name: u,
      type: "checkbox",
      ...b
    }),
    isSelected: t.isSelected,
    isPressed: v,
    isDisabled: i,
    isReadOnly: c,
    isInvalid: h || "invalid" === m
  }
}