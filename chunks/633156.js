"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("222007");
var r = n("37983"),
  s = n("884691"),
  a = n("414456"),
  o = n.n(a),
  l = n("77078"),
  i = n("437822"),
  u = n("152584"),
  d = n("42963"),
  c = n("145131"),
  _ = n("599110"),
  E = n("98013"),
  f = n("439932"),
  A = n("49111"),
  I = n("149806"),
  R = n("782340"),
  N = n("528414");

function p(e) {
  let {
    email: t,
    setEmail: n,
    claimRequired: a,
    onSuccess: _,
    onClose: E
  } = e, [p, S] = s.useState(), [T, C] = s.useState(""), [h, m] = s.useState(""), [L, g] = s.useState(!1);
  s.useEffect(() => d.default.flowStep(I.FlowType.ANY, I.ClaimAccountSteps.CLAIM_ACCOUNT), []);
  let O = async e => {
    e.preventDefault(), g(!0), S(""), m("");
    try {
      await (0, u.saveAccountRequest)({
        email: t,
        password: T
      }), g(!1), _()
    } catch (e) {
      var n, r;
      (null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.email) && S(e.body.email), (null == e ? void 0 : null === (r = e.body) || void 0 === r ? void 0 : r.password) && m(e.body.password), g(!1)
    }
  };
  return (0, r.jsxs)("div", {
    className: o(N.modalLight, (0, f.getThemeClass)(A.ThemeTypes.LIGHT)),
    children: [(0, r.jsxs)(l.ModalHeader, {
      className: N.formHeader,
      direction: c.default.Direction.VERTICAL,
      separator: !1,
      children: [(0, r.jsx)("div", {
        className: N.formImage
      }), (0, r.jsx)(l.Heading, {
        className: N.formTitle,
        variant: "heading-xl/semibold",
        children: R.default.Messages.FINISH_SIGNING_UP
      }), (0, r.jsx)(l.Text, {
        className: N.formBody,
        variant: "text-md/normal",
        color: "header-secondary",
        children: a ? R.default.Messages.CLAIM_ACCOUNT_REQUIRED_BODY : R.default.Messages.CLAIM_ACCOUNT_BODY_2
      }), (0, r.jsx)(l.ModalCloseButton, {
        className: N.closeButton,
        onClick: E
      })]
    }), (0, r.jsx)(l.ModalContent, {
      children: (0, r.jsxs)("form", {
        className: N.formContent,
        onSubmit: O,
        children: [(0, r.jsx)(l.FormItem, {
          title: R.default.Messages.FORM_LABEL_EMAIL,
          className: N.formItem,
          children: (0, r.jsx)(l.TextInput, {
            value: t,
            error: p,
            onChange: e => n(e),
            autoFocus: !0
          })
        }), (0, r.jsx)(l.FormItem, {
          title: R.default.Messages.FORM_LABEL_PASSWORD,
          className: N.formItem,
          children: (0, r.jsx)(l.TextInput, {
            type: "password",
            value: T,
            error: h,
            onChange: e => C(e)
          })
        }), (0, r.jsx)(l.Button, {
          type: "submit",
          size: l.Button.Sizes.LARGE,
          fullWidth: !0,
          submitting: L,
          disabled: 0 === t.length || 0 === T.length,
          children: R.default.Messages.CLAIM_ACCOUNT
        }), a && (0, r.jsx)(l.Button, {
          className: N.logoutButton,
          color: l.Button.Colors.PRIMARY,
          look: l.Button.Looks.LINK,
          size: l.Button.Sizes.NONE,
          onClick: () => {
            i.default.logout(), E()
          },
          children: R.default.Messages.LOGOUT
        })]
      })
    })]
  })
}

function S(e) {
  let {
    email: t,
    claimRequired: n,
    onClose: a
  } = e, i = n ? R.default.Messages.CLAIM_ACCOUNT_REQUIRED_EMAIL_TO : R.default.Messages.CLAIM_ACCOUNT_EMAIL_TO;

  function u() {
    window.open((0, E.getCurrentPlatformDownloadURL)(), "_blank"), _.default.track(A.AnalyticEvents.DOWNLOAD_APP, {
      platform: (0, E.getPlatformReadableName)(),
      ptb: !1,
      released: !0,
      has_e_mail: !0,
      referring_location: "Claim Modal",
      qr_code: !1
    })
  }
  return s.useEffect(() => d.default.flowStep(I.FlowType.ANY, I.ClaimAccountSteps.CLAIM_ACCOUNT_SUCCESS), []), (0, r.jsxs)("div", {
    className: o(N.modalLight, (0, f.getThemeClass)(A.ThemeTypes.LIGHT)),
    children: [(0, r.jsxs)(l.ModalContent, {
      className: N.successContent,
      children: [!n && (0, r.jsx)(l.ModalCloseButton, {
        className: N.closeButton,
        onClick: a
      }), (0, r.jsx)("div", {
        className: N.successImage
      }), (0, r.jsx)(l.Text, {
        className: N.successTitle,
        variant: "text-lg/semibold",
        children: i.format({
          email: t
        })
      }), (0, r.jsx)(l.Text, {
        className: N.successPromotion,
        variant: "text-md/normal",
        children: R.default.Messages.CLAIM_ACCOUNT_PROMOTE_APP_2021_04
      })]
    }), n ? (0, r.jsx)(l.ModalFooter, {
      direction: c.default.Direction.VERTICAL,
      children: (0, r.jsx)(l.Button, {
        size: l.Button.Sizes.LARGE,
        onClick: a,
        children: R.default.Messages.OKAY
      })
    }) : (0, r.jsx)(l.ModalFooter, {
      direction: c.default.Direction.VERTICAL,
      children: (0, r.jsx)(l.Button, {
        color: l.Button.Colors.BRAND,
        size: l.Button.Sizes.LARGE,
        onClick: u,
        children: R.default.Messages.CLAIM_ACCOUNT_GET_APP
      })
    })]
  })
}

function T(e) {
  let {
    onClose: t,
    transitionState: n,
    claimRequired: a = !1
  } = e, [o, i] = s.useState(""), [u, d] = s.useState(!1);
  return u ? (0, r.jsx)(l.ModalRoot, {
    transitionState: n,
    children: (0, r.jsx)(S, {
      email: o,
      claimRequired: a,
      onClose: t
    })
  }) : (0, r.jsx)(l.ModalRoot, {
    transitionState: n,
    children: (0, r.jsx)(p, {
      email: o,
      setEmail: i,
      claimRequired: a,
      onSuccess: () => d(!0),
      onClose: t
    })
  })
}