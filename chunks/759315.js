"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("222007");
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("446674"),
  u = n("878720"),
  o = n("345327"),
  d = n("25033"),
  c = n("589252"),
  f = n("124969"),
  E = n("578706"),
  I = n("482931"),
  _ = n("782340"),
  p = n("173791"),
  h = n("926622"),
  N = () => {
    let [e, t] = a.useState(""), [l, N] = a.useState(""), [m, T] = a.useState(!1), [g, A] = a.useState(!1), [S, C] = a.useState(null), [v, x] = a.useState(null), R = (0, r.useStateFromStores)([d.default], () => d.default.getCountryCode()), L = R.code.split(" ")[0], O = async () => {
      try {
        await u.default.resendCode(e)
      } catch (e) {
        x(e.body.message)
      }
    }, M = async () => {
      T(!0);
      try {
        let {
          token: t
        } = await u.default.verifyPhone(L + e, l);
        C(null), x(null), A(!0), u.default.validatePhoneForSupport(t)
      } catch (e) {
        e.body.message ? (C(null), x(e.body.message)) : (C(e.body.phone), x(e.body.code))
      } finally {
        T(!1)
      }
    }, D = (0, s.jsxs)(f.default, {
      children: [(0, s.jsx)(f.Image, {
        src: n("229483")
      }), (0, s.jsxs)(f.Title, {
        className: i(h.marginTop20, p.flex, p.justifyCenter, p.alignCenter),
        children: [_.default.Messages.MEMBER_VERIFICATION_PHONE_VERIFIED, (0, s.jsx)(E.default, {
          className: h.marginLeft8
        })]
      })]
    });
    return g ? D : (0, s.jsxs)(f.default, {
      children: [(0, s.jsx)(f.Title, {
        children: _.default.Messages.ENTER_CODE
      }), (0, s.jsx)(f.SubTitle, {
        className: h.marginTop8,
        children: _.default.Messages.VERIFY_PHONE_FOR_SUPPORT
      }), (0, s.jsxs)(f.Block, {
        className: h.marginTop20,
        children: [(0, s.jsx)(c.default, {
          label: _.default.Messages.FORM_LABEL_PHONE_NUMBER,
          alpha2: R.alpha2,
          countryCode: L,
          value: e,
          autoComplete: "off",
          spellCheck: "false",
          onChange: t,
          forceMode: o.PhoneOrEmailSelectorForceMode.PHONE,
          error: S
        }), (0, s.jsx)(f.Input, {
          className: h.marginTop20,
          label: _.default.Messages.CONFIRMATION_CODE,
          value: l,
          onChange: N,
          maxLength: I.PHONE_VERIFICATION_CODE_NUM_DIGITS,
          error: v
        }), (0, s.jsx)(f.Button, {
          size: f.Button.Sizes.SMALL,
          look: f.Button.Looks.LINK,
          onClick: O,
          children: _.default.Messages.RESEND_CODE
        }), (0, s.jsx)(f.Button, {
          className: h.marginTop20,
          onClick: M,
          submitting: m,
          children: _.default.Messages.DONE
        })]
      })]
    })
  }