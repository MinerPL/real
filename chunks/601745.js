"use strict";
s.r(t), s.d(t, {
  default: function() {
    return R
  }
}), s("222007");
var n = s("37983"),
  i = s("884691"),
  a = s("446674"),
  o = s("583227"),
  l = s("599417"),
  r = s("878720"),
  u = s("330387"),
  d = s("697218"),
  h = s("419522"),
  c = s("892313"),
  E = s("782340"),
  R = i.forwardRef(function(e, t) {
    let {
      onAddedPhone: s,
      onClose: R,
      transitionState: f,
      reason: p
    } = e, I = (0, a.useStateFromStores)([d.default], () => d.default.getCurrentUser()), m = (0, a.useStateFromStores)([u.default], () => u.default.getAction()), [C, _] = i.useState(null), [g, N] = i.useState(null), [y, A] = i.useState(null), [P, T] = i.useState(!1), x = i.useCallback(async e => {
      T(!0);
      try {
        c.default.isPhoneReverification(I, m) ? await r.default.beginReverifyPhone(e, p) : await r.default.beginAddPhone(e, p), A(null), _(e)
      } catch (e) {
        A(new l.default(e))
      }
      T(!1)
    }, [I, p, m]), S = i.useCallback(async e => {
      if (null != C && null != I) {
        T(!0);
        try {
          let {
            token: t
          } = await r.default.verifyPhone(C, e);
          A(null), N(t)
        } catch (e) {
          A(new l.default(e))
        }
        T(!1)
      }
    }, [I, C]), v = i.useCallback(async e => {
      null != g && (c.default.isPhoneReverification(I, m) ? await r.default.reverifyPhone(g, e, p) : await r.default.addPhone(g, e, p), null == s || s(), R())
    }, [s, R, g, p, I, m]);
    return null != g ? (0, n.jsx)(o.default, {
      onClose: R,
      transitionState: f,
      title: E.default.Messages.USER_SETTINGS_EDIT_ACCOUNT_PASSWORD_LABEL,
      handleSubmit: v
    }) : (0, n.jsx)(h.default, {
      onClose: R,
      transitionState: f,
      error: null == y ? void 0 : y.getAnyErrorMessage(),
      working: P,
      validPhone: null != C,
      onAddPhone: x,
      onVerifyPhone: S
    })
  })