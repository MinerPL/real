"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var s = n("37983");
n("884691");
var a = n("759843"),
  l = n("77078"),
  i = n("143618"),
  r = n("377114"),
  u = n("965153"),
  o = n("98352"),
  d = n("124969"),
  c = n("701909"),
  f = n("49111"),
  E = n("782340"),
  I = n("939564"),
  _ = n("926622");
let p = e => {
  let {
    title: t,
    menuType: o
  } = e, d = () => {
    (0, l.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("650672").then(n.bind(n, "650672"));
      return t => (0, s.jsx)(e, {
        ...t,
        onSuccess: c,
        headerText: E.default.Messages.ENTER_EMAIL,
        confirmButtonText: E.default.Messages.NEXT,
        confirmButtonColor: l.Button.Colors.BRAND_NEW,
        impressionName: a.ImpressionNames.URF_ENTER_EMAIL
      })
    })
  }, c = e => {
    let t = async () => {
      await (0, u.sendUnauthenticatedReportPincode)(o, e)
    }, d = async t => await (0, u.verifyUnauthenticatedReport)(o, e, t), c = e => {
      let t = null == e ? void 0 : e.token;
      o === i.UnauthenticatedReportNames.MESSAGE ? (0, r.showUnauthenticatedReportModalForMessage)(t) : o === i.UnauthenticatedReportNames.USER && (0, r.showUnauthenticatedReportModalForUser)(t)
    };
    t(), (0, l.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("644512").then(n.bind(n, "644512"));
      return n => (0, s.jsx)(e, {
        ...n,
        onFormSubmit: d,
        onResend: t,
        onSuccess: c,
        headerText: E.default.Messages.MEMBER_VERIFICATION_EMAIL_VERIFICATION_EMAIL_SENT,
        confirmButtonText: E.default.Messages.VERIFY,
        confirmButtonColor: l.Button.Colors.BRAND_NEW,
        impressionName: a.ImpressionNames.URF_CONFIRM_EMAIL_CODE
      })
    })
  };
  return (0, s.jsx)("div", {
    className: I.buttonColumn,
    children: (0, s.jsx)(l.Button, {
      className: _.reportButton,
      fullWidth: !0,
      color: l.Button.Colors.BRAND_NEW,
      hover: l.Button.Colors.BRAND_NEW,
      onClick: () => d(),
      children: t
    })
  })
};
var h = () => {
  let e = (0, o.useIsUnauthenticatedReportFormEnabled)("URF - Landing Page");
  return e && (0, s.jsxs)(d.default, {
    children: [(0, s.jsx)(d.Title, {
      className: _.marginBottom8,
      children: E.default.Messages.URF_LANDING_PAGE_TITLE
    }), (0, s.jsx)(d.SubTitle, {
      className: _.marginBottom8,
      children: E.default.Messages.URF_LANDING_PAGE_SUBTITLE.format({
        supportURL: c.default.getArticleURL(f.HelpdeskArticles.COPYRIGHT_AND_IP_POLICY)
      })
    }), (0, s.jsxs)("div", {
      className: I.container,
      children: [(0, s.jsx)(p, {
        title: E.default.Messages.URF_LANDING_PAGE_REPORT_MESSAGE_BUTTON,
        menuType: i.UnauthenticatedReportNames.MESSAGE
      }), (0, s.jsx)(p, {
        title: E.default.Messages.URF_LANDING_PAGE_REPORT_USER_PROFILE_BUTTON,
        menuType: i.UnauthenticatedReportNames.USER
      })]
    })]
  })
}