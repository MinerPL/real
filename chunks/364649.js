"use strict";
n.r(t), n.d(t, {
  useCheckbox: function() {
    return c
  },
  useCheckboxGroup: function() {
    return p
  },
  useCheckboxGroupItem: function() {
    return f
  }
}), n("222007");
var r = n("884691"),
  o = n("814842"),
  a = n("290895"),
  i = n("825167"),
  s = n("219870");

function c(e, t, n) {
  let {
    inputProps: a,
    isSelected: i,
    isPressed: s,
    isDisabled: c,
    isReadOnly: l,
    isInvalid: u
  } = (0, o.useToggle)(e, t, n), {
    isIndeterminate: d
  } = e;
  return (0, r.useEffect)(() => {
    n.current && (n.current.indeterminate = d)
  }), {
    inputProps: {
      ...a,
      checked: i
    },
    isSelected: i,
    isPressed: s,
    isDisabled: c,
    isReadOnly: l,
    isInvalid: u
  }
}
let l = new WeakMap,
  u = new WeakMap,
  d = new WeakMap;

function p(e, t) {
  let {
    isDisabled: n,
    name: r
  } = e, {
    labelProps: o,
    fieldProps: s,
    descriptionProps: c,
    errorMessageProps: p
  } = (0, i.useField)({
    ...e,
    labelElementType: "span"
  });
  u.set(t, c.id), d.set(t, p.id);
  let f = (0, a.filterDOMProps)(e, {
    labelable: !0
  });
  return l.set(t, r), {
    groupProps: (0, a.mergeProps)(f, {
      role: "group",
      "aria-disabled": n || void 0,
      ...s
    }),
    labelProps: o,
    descriptionProps: c,
    errorMessageProps: p
  }
}

function f(e, t, n) {
  let r = (0, s.useToggleState)({
      isReadOnly: e.isReadOnly || t.isReadOnly,
      isSelected: t.isSelected(e.value),
      onChange(n) {
        n ? t.addValue(e.value) : t.removeValue(e.value), e.onChange && e.onChange(n)
      }
    }),
    o = c({
      ...e,
      isReadOnly: e.isReadOnly || t.isReadOnly,
      isDisabled: e.isDisabled || t.isDisabled,
      name: e.name || l.get(t)
    }, r, n);
  return {
    ...o,
    inputProps: {
      ...o.inputProps,
      "aria-describedby": [e["aria-describedby"], t.isInvalid ? d.get(t) : null, u.get(t)].filter(Boolean).join(" ") || void 0
    }
  }
}