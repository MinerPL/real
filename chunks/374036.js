"use strict";
E.r(_), E.d(_, {
  default: function() {
    return T
  }
});
var t = E("37983"),
  o = E("884691"),
  n = E("868233"),
  r = E("446674"),
  i = E("773336"),
  a = E("370492"),
  I = E("584369");
let s = (0, n.makeLazy)({
  createPromise: () => E.el("304207").then(E.bind(E, "304207")),
  webpackId: "304207"
});

function T(e) {
  let {
    mobile: _
  } = e, {
    devToolsEnabled: E,
    displayTools: n
  } = (0, r.useStateFromStoresObject)([I.default], () => ({
    devToolsEnabled: I.default.devToolsEnabled,
    displayTools: I.default.displayTools
  })), T = o.useCallback(e => {
    let _ = (0, i.isMac)() ? e.metaKey : e.ctrlKey;
    _ && e.altKey && "KeyO" === e.code && (0, a.toggleDisplayDevTools)()
  }, []);
  return (o.useLayoutEffect(() => (window.addEventListener("keydown", T), () => {
    window.removeEventListener("keydown", T)
  }), [T]), _ ? E : n) ? (0, t.jsx)(s, {
    mobile: _
  }) : null
}