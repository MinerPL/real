"use strict";
E.r(_), E.d(_, {
  default: function() {
    return S
  }
}), E("222007"), E("424973");
var t = E("37983");
E("884691");
var o = E("446674"),
  n = E("77078"),
  r = E("313915"),
  i = E("603699"),
  a = E("697218"),
  I = E("983782"),
  s = E("843455"),
  T = E("232425");

function S() {
  var e;
  let _ = (0, o.useStateFromStores)([r.default], () => r.default.isIdleStatusIndicatorEnabled),
    E = (0, o.useStateFromStores)([a.default], () => {
      var e, _;
      return null !== (_ = null === (e = a.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== _ && _
    }),
    [S, N] = (0, o.useStateFromStoresArray)([i.default], () => [i.default.isIdle(), i.default.isAFK()]),
    O = [];
  return !S && !N && O.push("ACTIVE"), S && O.push("IDLE"), N && O.push("AFK"), E && _ ? (0, t.jsx)(I.default, {
    children: (0, t.jsxs)("div", {
      className: T.container,
      children: [(0, t.jsxs)("div", {
        className: T.status,
        children: [(0, t.jsx)(n.Status, {
          status: O.includes("ACTIVE") ? s.StatusTypes.ONLINE : s.StatusTypes.IDLE,
          className: T.statusIndicator
        }), (0, t.jsx)(n.Text, {
          variant: "text-md/normal",
          children: "IDLE STATUS:"
        }), (0, t.jsx)("div", {
          className: T.statusText,
          children: (0, t.jsx)(n.Text, {
            variant: "text-md/bold",
            children: O.join(" + ")
          })
        })]
      }), S && (0, t.jsxs)(n.Text, {
        variant: "text-md/normal",
        children: ["Idle since:", " ", new Date(null !== (e = i.default.getIdleSince()) && void 0 !== e ? e : 0).toLocaleDateString(void 0, {
          year: "numeric",
          day: "numeric",
          month: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        })]
      })]
    })
  }) : null
}