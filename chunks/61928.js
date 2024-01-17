"use strict";
n.r(t), n.d(t, {
  EMAIL_VERIFICATION_MODAL_KEY: function() {
    return L
  },
  default: function() {
    return v
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  i = n("759843"),
  l = n("446674"),
  r = n("872717"),
  o = n("77078"),
  u = n("437822"),
  d = n("54239"),
  c = n("152584"),
  f = n("135230"),
  E = n("84339"),
  _ = n("485328"),
  h = n("428958"),
  C = n("878720"),
  I = n("161778"),
  T = n("330387"),
  S = n("642400"),
  m = n("668596"),
  p = n("892313"),
  A = n("126667"),
  g = n("601745"),
  N = n("49111"),
  R = n("482931"),
  O = n("782340");
let L = "Email Verification";

function v() {
  let {
    action: e,
    theme: t
  } = (0, l.useStateFromStoresObject)([T.default, I.default], () => ({
    action: T.default.getAction(),
    theme: I.default.theme
  })), n = p.default.getVerificationTypes(e), [v, M] = s.useState(0), P = (0, E.default)(n);
  (0, h.default)({
    type: i.ImpressionTypes.MODAL,
    name: i.ImpressionNames.USER_ACTION_REQUIRED,
    properties: {
      verification_type: n[0],
      verification_types: n
    }
  }, {}, [n.toString()]);
  let D = () => {
    (0, c.accountDetailsInit)(), (0, o.openModal)(e => (0, a.jsx)(A.default, {
      ...e
    }), {
      modalKey: L,
      Layer: m.default
    })
  };
  return s.useEffect(() => (_.default.disable(), () => {
    _.default.enable()
  }), []), s.useEffect(() => {
    (null == P ? void 0 : P[0]) === N.VerificationTypes.PHONE && (null == n ? void 0 : n[0]) === N.VerificationTypes.EMAIL && (0, o.openModal)(e => (0, a.jsx)(f.default, {
      ...e,
      title: O.default.Messages.PHONE_THEN_EMAIL_INTERSTITIAL_TITLE,
      body: O.default.Messages.PHONE_THEN_EMAIL_INTERSTITIAL_BODY,
      confirmText: O.default.Messages.PHONE_THEN_EMAIL_INTERSTITIAL_CONFIRM
    }), {
      modalKey: "PHONE_THEN_EMAIL_INTERSTITIAL_MODAL_KEY",
      Layer: m.default,
      onCloseCallback: D
    })
  }, [n, P]), (0, a.jsx)(S.default, {
    types: n,
    captchaKey: v,
    onCaptchaVerify: e => {
      r.default.post({
        url: N.Endpoints.CAPTCHA,
        body: {
          captcha_key: e
        },
        oldFormErrors: !0
      }).then(d.popLayer, () => {
        M(e => e + 1)
      })
    },
    theme: t,
    onClick: e => {
      e === N.VerificationTypes.EMAIL_OR_PHONE || e === N.VerificationTypes.EMAIL || e === N.VerificationTypes.REVERIFY_EMAIL ? D() : (0, o.openModal)(e => (0, a.jsx)(g.default, {
        reason: C.ChangePhoneReason.USER_ACTION_REQUIRED,
        ...e
      }), {
        modalKey: R.PHONE_VERIFICATION_MODAL_KEY,
        Layer: m.default
      })
    },
    onLogout: () => (0, o.openModal)(e => (0, a.jsx)(o.ConfirmModal, {
      header: O.default.Messages.LOGOUT,
      confirmText: O.default.Messages.LOGOUT,
      cancelText: O.default.Messages.CANCEL,
      onConfirm: () => u.default.logout(),
      ...e,
      children: (0, a.jsx)(o.Text, {
        variant: "text-md/normal",
        children: O.default.Messages.USER_SETTINGS_CONFIRM_LOGOUT
      })
    }), {
      Layer: m.default
    })
  })
}