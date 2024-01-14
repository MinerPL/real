"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  i = n("65597"),
  l = n("77078"),
  r = n("327037"),
  o = n("330387"),
  u = n("476765"),
  d = n("49111"),
  c = n("782340"),
  E = n("305502");

function f(e) {
  let {
    transitionState: t
  } = e, f = (0, i.default)([o.default], () => o.default.getAction()), [_, h] = s.useState(!1), C = (0, u.useUID)();
  async function T() {
    if (h(!0), f === d.UserRequiredActions.AGREEMENTS) {
      let e = await (0, r.acceptAgreements)();
      h(e)
    }
    return null
  }
  return (0, a.jsxs)(l.ModalRoot, {
    "aria-labelledby": C,
    transitionState: t,
    children: [(0, a.jsx)("div", {
      id: C
    }), (0, a.jsx)(l.ModalHeader, {
      separator: !1,
      children: (0, a.jsx)(l.Heading, {
        variant: "heading-lg/semibold",
        children: c.default.Messages.NEW_TERMS_TITLE
      })
    }), (0, a.jsxs)(l.ModalContent, {
      children: [(0, a.jsx)(l.Text, {
        variant: "text-md/normal",
        children: f === d.UserRequiredActions.AGREEMENTS ? c.default.Messages.TERMS_OF_SERVICE_UPDATE_03_27_2023_DESCRIPTION.format() : null
      }), (0, a.jsxs)("div", {
        className: E.container,
        children: [(0, a.jsxs)("ul", {
          className: E.links,
          children: [(0, a.jsx)("li", {
            children: c.default.Messages.TERMS_OF_SERVICE.format({
              url: d.MarketingURLs.TERMS
            })
          }), (0, a.jsx)("li", {
            children: c.default.Messages.PAID_SERVICES_TERMS.format({
              url: d.MarketingURLs.PAID_TERMS
            })
          }), (0, a.jsx)("li", {
            children: c.default.Messages.PRIVACY_POLICY.format({
              url: d.MarketingURLs.PRIVACY
            })
          }), (0, a.jsx)("li", {
            children: c.default.Messages.COMMUNITY_GUIDELINES.format({
              url: d.MarketingURLs.GUIDELINES
            })
          })]
        }), (0, a.jsx)("img", {
          className: E.image,
          alt: "",
          src: n("275974")
        })]
      })]
    }), (0, a.jsx)(l.ModalFooter, {
      children: (0, a.jsx)(l.Button, {
        submitting: _,
        onClick: T,
        color: l.Button.Colors.GREEN,
        children: c.default.Messages.AGREE
      })
    })]
  })
}