"use strict";
E.r(_), E.d(_, {
  default: function() {
    return L
  }
}), E("222007");
var t = E("37983"),
  o = E("884691"),
  n = E("414456"),
  r = E.n(n),
  i = E("446674"),
  a = E("77078"),
  I = E("368694"),
  s = E("313915"),
  T = E("578706"),
  S = E("381546"),
  N = E("655804"),
  O = E("238500"),
  A = E("983782"),
  R = E("939011"),
  l = E("953014");

function L() {
  let {
    debugTrackedData: e,
    impressions: _
  } = (0, R.useImpressionStore)(e => ({
    debugTrackedData: e.debugTrackedData,
    impressions: e.impressions
  })), E = (0, i.useStateFromStores)([s.default], () => s.default.isAnalyticsDebuggerEnabled), n = (0, i.useStateFromStores)([I.default], () => I.default.isDeveloper), [L, u] = o.useState(!1), {
    name: C,
    ...D
  } = null != e ? e : {}, c = null != C;
  return n && E ? (0, t.jsx)(A.default, {
    children: (0, t.jsxs)("div", {
      className: r(l.container, {
        [l.containerMinimized]: L,
        [l.notTracked]: !c
      }),
      children: [(0, t.jsx)(a.Clickable, {
        className: l.minimizeButton,
        onClick: () => {
          u(!L)
        },
        children: L ? (0, t.jsx)(N.default, {}) : (0, t.jsx)(O.default, {})
      }), (0, t.jsxs)("div", {
        className: r(l.content, {
          [l.contentMinimized]: L
        }),
        children: [(0, t.jsxs)(a.Text, {
          className: r(l.label, {
            [l.notTracked]: !c
          }),
          variant: "text-xxs/normal",
          children: [c ? (0, t.jsx)(T.default, {
            className: l.iconTracked
          }) : (0, t.jsx)(S.default, {
            className: l.iconNotTracked
          }), null != C ? C : "(untracked)"]
        }), (0, t.jsx)("div", {
          className: l.current,
          children: JSON.stringify(D, void 0, 2)
        }), (0, t.jsx)(a.Text, {
          className: r(l.label, {
            [l.notTracked]: !c
          }),
          variant: "text-xxs/normal",
          children: "impressions stack"
        }), (0, t.jsx)("div", {
          className: l.stack,
          children: JSON.stringify(_, void 0, 2)
        })]
      })]
    })
  }) : null
}