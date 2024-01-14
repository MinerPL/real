"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("37983");
n("884691");
var s = n("759843"),
  l = n("872717"),
  i = n("77078"),
  r = n("363396"),
  d = n("79798"),
  u = n("145131"),
  o = n("701909"),
  c = n("49111"),
  f = n("988268"),
  g = n("782340"),
  E = n("25170"),
  m = n("348044");

function h(e) {
  let {
    transitionState: t,
    onClose: n,
    channel: h,
    message: p
  } = e;
  return (0, a.jsxs)(i.ModalRoot, {
    transitionState: t,
    "aria-labelledby": "clyde-authorize-modal",
    size: i.ModalSize.DYNAMIC,
    impression: {
      impressionName: s.ImpressionNames.USER_CLYDE_AI_CONSENT_MODAL
    },
    children: [(0, a.jsxs)(i.ModalHeader, {
      direction: u.default.Direction.HORIZONTAL,
      className: E.header,
      separator: !1,
      children: [(0, a.jsx)("img", {
        src: m,
        className: E.clydeIcon,
        alt: ""
      }), (0, a.jsx)(i.Text, {
        variant: "text-lg/bold",
        children: g.default.Messages.CLYDE_MODAL_TITLE
      }), (0, a.jsx)(d.default, {
        type: f.BotTagTypes.AI
      })]
    }), (0, a.jsxs)(i.ModalContent, {
      className: E.container,
      children: [(0, a.jsx)("div", {
        className: E.divider
      }), (0, a.jsx)(i.Text, {
        variant: "text-xs/bold",
        className: E.subheading,
        children: g.default.Messages.CLYDE_MODAL_ABOUT_SUBHEADING
      }), (0, a.jsx)(i.Text, {
        variant: "text-xs/normal",
        children: g.default.Messages.CLYDE_MODAL_ABOUT_SECTION
      }), (0, a.jsx)(i.Text, {
        variant: "text-xs/bold",
        className: E.subheading,
        children: g.default.Messages.CLYDE_MODAL_PRIVACY_SUBHEADING
      }), (0, a.jsx)(i.Text, {
        variant: "text-xs/normal",
        children: g.default.Messages.CLYDE_MODAL_PRIVACY_SECTION.format({
          guidelinesURL: c.MarketingURLs.GUIDELINES,
          privacyPolicyURL: c.MarketingURLs.PRIVACY
        })
      }), (0, a.jsx)(i.Text, {
        variant: "text-xs/bold",
        className: E.subheading,
        children: g.default.Messages.CLYDE_MODAL_DISCLAIMER_SUBHEADING
      }), (0, a.jsx)(i.Text, {
        variant: "text-xs/normal",
        children: g.default.Messages.CLYDE_MODAL_DISCLAIMER_SECTION
      }), (0, a.jsx)(i.Text, {
        variant: "text-xs/normal",
        className: E.subheading,
        children: g.default.Messages.CLYDE_MODAL_LEARN_MORE.format({
          learnMoreURL: o.default.getArticleURL(c.HelpdeskArticles.CLYDE_AI)
        })
      })]
    }), (0, a.jsxs)(i.ModalFooter, {
      direction: u.default.Direction.HORIZONTAL,
      className: E.footer,
      children: [(0, a.jsx)(i.Button, {
        size: i.ButtonSizes.MEDIUM,
        look: i.ButtonLooks.BLANK,
        className: E.cancelButton,
        onClick: n,
        children: g.default.Messages.CANCEL
      }), (0, a.jsx)(i.Button, {
        size: i.ButtonSizes.MEDIUM,
        onClick: () => {
          l.default.put({
            url: c.Endpoints.USER_CLYDE_CONSENT,
            body: {
              consent: !0
            }
          }).then(() => {
            (0, r.retrySendMessage)(h, p), n()
          }).catch(() => {
            n()
          })
        },
        children: g.default.Messages.CONTINUE
      })]
    })]
  })
}