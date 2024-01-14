"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("77078"),
  o = s("998728"),
  d = s("338518");

function u(e) {
  let {
    action: t,
    children: s,
    className: l,
    onExpandChange: u,
    loading: c,
    ...E
  } = e, [_, T] = n.useState(!1), I = e => {
    T(e), null == u || u(e)
  };
  return (0, a.jsx)(r.Collapsible, {
    className: i(d.groupContainer, l),
    isExpanded: _,
    collapsibleContent: (0, a.jsxs)("div", {
      className: d.groupCollapsedContainer,
      children: [_ && (0, a.jsx)("div", {
        className: d.pointer
      }), s]
    }),
    children: e => {
      let {
        onClick: s
      } = e;
      return (0, a.jsx)(o.default, {
        ...E,
        className: d.groupHeaderRow,
        action: c ? (0, a.jsx)(r.Spinner, {
          type: r.Spinner.Type.PULSING_ELLIPSIS
        }) : t,
        onClick: e => {
          I(!_), s(e)
        }
      })
    }
  })
}