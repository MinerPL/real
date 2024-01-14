"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var l = n("37983"),
  i = n("884691"),
  r = n("414456"),
  o = n.n(r),
  s = n("272030"),
  a = n("406291"),
  u = n("782340"),
  d = n("755203");

function c(e) {
  var t;
  let r, c, f, {
      className: p,
      activeCommand: m,
      activeOption: h,
      optionStates: E
    } = e,
    S = i.useCallback(e => {
      var t;
      let i = null == m ? void 0 : null === (t = m.rootCommand) || void 0 === t ? void 0 : t.id;
      if (null == i) {
        e.preventDefault();
        return
      }(0, s.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("443070").then(n.bind(n, "443070"));
        return t => (0, l.jsx)(e, {
          ...t,
          id: i,
          label: u.default.Messages.COPY_ID_COMMAND
        })
      })
    }, [null == m ? void 0 : null === (t = m.rootCommand) || void 0 === t ? void 0 : t.id]);
  if (null == m) return null;
  if (null != h) {
    let e = E[h.name].lastValidationResult;
    r = h.displayName, c = h.displayDescription, f = (null == e ? void 0 : e.success) ? null : null == e ? void 0 : e.error
  } else r = "".concat(a.COMMAND_SENTINEL).concat(m.displayName), c = m.displayDescription, f = null;
  return (0, l.jsxs)("div", {
    className: o(p, d.bar),
    onContextMenu: S,
    children: [(0, l.jsx)("span", {
      className: d.name,
      children: r
    }), null != f ? (0, l.jsx)("span", {
      className: d.error,
      children: f
    }) : (0, l.jsx)("span", {
      className: d.description,
      children: c
    })]
  })
}