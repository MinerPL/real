"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  i = n("627445"),
  l = n.n(i),
  r = n("446674"),
  o = n("437822"),
  u = n("152584"),
  d = n("648661"),
  c = n("330387"),
  f = n("790618"),
  E = n("697218"),
  _ = n("67211"),
  h = n("892313"),
  C = n("49111"),
  I = e => {
    let {
      transitionState: t,
      onClose: n
    } = e, i = (0, r.useStateFromStores)([f.default], () => f.default.getErrors()), I = (0, r.useStateFromStores)([f.default], () => f.default.getFormState()), T = (0, r.useStateFromStores)([E.default], () => {
      let e = E.default.getCurrentUser();
      return l(null != e, "EmailVerificationModal: user cannot be undefined"), e
    }), S = (0, r.useStateFromStores)([c.default], () => c.default.getAction()), m = !h.default.isEmailReverification(S), p = null != T.email, [A, g] = s.useState(!0), N = I === C.FormStates.SUBMITTING;

    function R(e) {
      var t, n;
      return null !== (n = null == i ? void 0 : null === (t = i[e]) || void 0 === t ? void 0 : t[0]) && void 0 !== n ? n : ""
    }
    let O = R("email"),
      L = R("password");
    return (0, a.jsx)(_.default, {
      transitionState: t,
      email: T.email,
      emailError: O,
      passwordError: L,
      submitting: N,
      canResend: A && !N && p && 0 === O.length && 0 === L.length,
      canChange: m,
      onChangeEmailClick: function() {
        g(!1)
      },
      onVerify: function(e, t) {
        (0, u.saveAccountChanges)({
          email: e,
          password: t
        }).then(e => {
          var t;
          !(null == e ? void 0 : e.ok) && (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.username) != null && (0, d.showInvalidUsernameToast)()
        }), g(!0)
      },
      onResend: function() {
        o.default.verifyResend()
      },
      onClose: n
    })
  }