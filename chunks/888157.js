"use strict";
n.r(t), n.d(t, {
  Preview: function() {
    return s
  }
});
var r = n("884691"),
  o = n.n(r),
  a = n("834124"),
  i = n("62752");
let s = e => {
  let t;
  let n = (0, a.usePreview)();
  if (!n.display) return null;
  let {
    display: r,
    ...s
  } = n;
  return t = "children" in e ? "function" == typeof e.children ? e.children(s) : e.children : e.generator(s), o.createElement(i.Context.Provider, {
    value: s
  }, t)
}