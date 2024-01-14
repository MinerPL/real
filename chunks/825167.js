"use strict";
n.r(t), n.d(t, {
  useField: function() {
    return a
  },
  useLabel: function() {
    return o
  }
});
var r = n("290895");

function o(e) {
  let {
    id: t,
    label: n,
    "aria-labelledby": o,
    "aria-label": a,
    labelElementType: i = "label"
  } = e;
  t = (0, r.useId)(t);
  let s = (0, r.useId)(),
    c = {};
  return n ? (o = o ? "".concat(s, " ").concat(o) : s, c = {
    id: s,
    htmlFor: "label" === i ? t : void 0
  }) : !o && !a && console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility"), {
    labelProps: c,
    fieldProps: (0, r.useLabels)({
      id: t,
      "aria-label": a,
      "aria-labelledby": o
    })
  }
}

function a(e) {
  let {
    description: t,
    errorMessage: n,
    isInvalid: a,
    validationState: i
  } = e, {
    labelProps: s,
    fieldProps: c
  } = o(e), l = (0, r.useSlotId)([!!t, !!n, a, i]), u = (0, r.useSlotId)([!!t, !!n, a, i]);
  return {
    labelProps: s,
    fieldProps: c = (0, r.mergeProps)(c, {
      "aria-describedby": [l, u, e["aria-describedby"]].filter(Boolean).join(" ") || void 0
    }),
    descriptionProps: {
      id: l
    },
    errorMessageProps: {
      id: u
    }
  }
}