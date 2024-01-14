"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("446674"),
  i = s("152584"),
  r = s("45299"),
  o = s("880397"),
  d = s("783142"),
  u = s("790618"),
  c = s("648661");

function S() {
  let e = (0, l.useStateFromStores)([u.default], () => u.default.getIsDisableSubmit()),
    [t, s] = n.useState(!1),
    S = n.useCallback(async () => {
      var e, t, a;
      s(!0);
      let n = u.default.getAllPending(),
        l = (0, o.getAccountUpdateForUpdateRequest)(n),
        r = (0, o.getProfileChangesForUpdateRequest)(n),
        S = !0;
      if (Object.keys(l).length > 0) {
        let s = await (0, i.saveAccountChanges)(l);
        S = S && null !== (t = null == s ? void 0 : s.ok) && void 0 !== t && t, (null == s ? void 0 : s.ok) ? (0, i.resetPendingAccountChanges)() : (null == s ? void 0 : null === (e = s.body) || void 0 === e ? void 0 : e.username) != null && (0, c.showInvalidUsernameToast)()
      }
      if (Object.keys(r).length > 0) {
        let e = await (0, d.saveProfileChanges)(r);
        S = S && null !== (a = null == e ? void 0 : e.ok) && void 0 !== a && a, (null == e ? void 0 : e.ok) && (0, d.resetPendingProfileChanges)()
      }
      S && (0, i.clearErrors)(), s(!1)
    }, []),
    E = n.useCallback(() => {
      (0, i.resetAllPending)()
    }, []);
  return (0, a.jsx)(r.default, {
    submitting: t,
    onSave: S,
    onReset: E,
    disabled: e
  })
}