"use strict";
n.r(t), n.d(t, {
  GuildVerificationPopoutTypes: function() {
    return a
  },
  default: function() {
    return g
  }
});
var l, a, s = n("37983");
n("884691");
var i = n("446674"),
  r = n("77078"),
  o = n("437822"),
  u = n("774146"),
  d = n("878720"),
  c = n("88093"),
  f = n("697218"),
  h = n("476765"),
  C = n("49111"),
  p = n("482931"),
  m = n("782340"),
  E = n("913447");
(l = a || (a = {}))[l.VOICE = 0] = "VOICE";
var g = e => {
  let {
    type: t,
    guildId: l,
    closePopout: a
  } = e, g = (0, h.useUID)(), {
    notClaimed: I,
    notEmailVerified: S,
    notPhoneVerified: _,
    newAccount: N,
    newMember: T
  } = (0, i.useStateFromStores)([c.default], () => c.default.getCheck(l), [l]), A = 0 === t ? m.default.Messages.GUILD_VERIFICATION_VOICE_HEADER : null, L = null, v = null;
  return (0 === t && (I ? (L = m.default.Messages.GUILD_VERIFICATION_VOICE_NOT_CLAIMED, v = m.default.Messages.CLAIM_ACCOUNT) : _ ? (L = m.default.Messages.GUILD_VERIFICATION_VOICE_NOT_PHONE_VERIFIED, v = m.default.Messages.VERIFY_PHONE) : S ? (L = m.default.Messages.GUILD_VERIFICATION_VOICE_NOT_VERIFIED, v = m.default.Messages.RESEND_VERIFICATION_EMAIL) : T ? (L = m.default.Messages.GUILD_VERIFICATION_VOICE_MEMBER_AGE.format({
    min: C.VerificationCriteria.MEMBER_AGE
  }), v = m.default.Messages.OKAY) : N && (L = m.default.Messages.GUILD_VERIFICATION_VOICE_ACCOUNT_AGE.format({
    min: C.VerificationCriteria.ACCOUNT_AGE
  }), v = m.default.Messages.OKAY)), null == A || null == L) ? null : (0, s.jsxs)(r.Dialog, {
    className: E.container,
    "aria-labelledby": g,
    children: [(0, s.jsx)("img", {
      alt: "",
      className: E.image,
      src: n("748301")
    }), (0, s.jsxs)("div", {
      className: E.content,
      children: [(0, s.jsx)(r.Heading, {
        variant: "heading-md/semibold",
        id: g,
        children: A
      }), (0, s.jsx)(r.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: L
      }), (0, s.jsxs)("div", {
        className: E.buttonContainer,
        children: [null != v ? (0, s.jsx)(r.Button, {
          onClick: () => {
            I ? u.openClaimAccountModal() : _ ? (0, r.openModalLazy)(async () => {
              let {
                default: e
              } = await n.el("601745").then(n.bind(n, "601745"));
              return t => (0, s.jsx)(e, {
                reason: d.ChangePhoneReason.GUILD_PHONE_REQUIRED,
                ...t
              })
            }, {
              modalKey: p.PHONE_VERIFICATION_MODAL_KEY
            }) : S && (o.default.verifyResend(), (0, r.openModal)(e => {
              var t;
              return (0, s.jsx)(r.ConfirmModal, {
                header: m.default.Messages.VERIFICATION_EMAIL_TITLE,
                confirmText: m.default.Messages.OKAY,
                confirmButtonColor: r.Button.Colors.BRAND,
                ...e,
                children: (0, s.jsx)(r.Text, {
                  variant: "text-md/normal",
                  children: m.default.Messages.VERIFICATION_EMAIL_BODY.format({
                    email: null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.email
                  })
                })
              })
            })), a()
          },
          className: E.primaryButton,
          children: v
        }) : null, I || _ || S ? (0, s.jsx)(r.Button, {
          onClick: a,
          look: r.Button.Looks.BLANK,
          className: E.cancel,
          children: m.default.Messages.NEVERMIND
        }) : null]
      })]
    })]
  })
}