"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
}), s("222007"), s("881410");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("907002"),
  o = s("446674"),
  d = s("669491"),
  u = s("77078"),
  c = s("206230"),
  E = s("461380"),
  _ = s("578706"),
  T = s("677795"),
  I = s("782340"),
  S = s("717580");

function N(e) {
  let {
    checked: t,
    children: s
  } = e;
  return (0, a.jsxs)("div", {
    className: S.row,
    children: [(0, a.jsx)(u.Text, {
      variant: "text-md/normal",
      color: "interactive-active",
      className: S.rowText,
      children: s
    }), t ? (0, a.jsx)(_.default, {
      backgroundColor: d.default.unsafe_rawColors.WHITE_500.css,
      className: i(S.rowIcon, S.rowIconChecked)
    }) : (0, a.jsx)("div", {
      className: i(S.rowIcon, S.rowIconEmpty)
    })]
  })
}

function g(e) {
  let {
    children: t
  } = e, [s, l] = n.useState(!1), i = (0, o.useStateFromStores)([c.default], () => c.default.useReducedMotion), d = t.flatMap(e => e.items.map(e => e.completed)), _ = d.filter(e => e).length / d.length, g = 1 === _, f = (0, r.useSpring)({
    width: "".concat(100 * _, "%"),
    immediate: i
  }), A = [I.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_LINK_PROMO_PAGE.format({
    promoPageGuideUrl: T.SERVER_SUBSCRIPTIONS_PREMIUM_CHECKLIST_EDUCATIONAL_URLS.PROMO_PAGE_GUIDE
  }), I.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_LINK_CASE_STUDIES.format({
    caseStudiesUrl: T.SERVER_SUBSCRIPTIONS_PREMIUM_CHECKLIST_EDUCATIONAL_URLS.CASE_STUDIES
  }), I.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_LINK_SUBSCRIPTION_OFFERING.format({
    subscriptionOfferingGuideUrl: T.SERVER_SUBSCRIPTIONS_PREMIUM_CHECKLIST_EDUCATIONAL_URLS.SUBSCRIPTION_OFFERING_GUIDE
  }), I.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_LINK_TIER_STRUCTURE.format({
    tierStructureGuideUrl: T.SERVER_SUBSCRIPTIONS_PREMIUM_CHECKLIST_EDUCATIONAL_URLS.TIER_STRUCTURE_GUIDE
  })], L = s ? null : (0, a.jsxs)(a.Fragment, {
    children: [!g && t.map((e, t) => {
      let {
        title: s,
        items: l
      } = e;
      return (0, a.jsxs)(n.Fragment, {
        children: [t > 0 && (0, a.jsx)(u.FormDivider, {
          className: S.divider
        }), (0, a.jsx)(u.FormTitle, {
          className: S.categoryTitle,
          children: s
        }), l.map((e, t) => (0, a.jsx)(N, {
          children: e.description,
          checked: e.completed
        }, t))]
      }, t)
    }), (0, a.jsx)(u.FormDivider, {
      className: S.divider
    }), (0, a.jsx)(u.FormTitle, {
      className: S.categoryTitle,
      children: I.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_LEARN_MORE_SECTION_TITLE
    }), A.map((e, t) => (0, a.jsx)("div", {
      className: S.row,
      children: (0, a.jsx)(u.Text, {
        variant: "text-md/normal",
        children: e
      })
    }, t))]
  });
  return (0, a.jsx)("div", {
    className: S.checklist,
    children: (0, a.jsxs)("div", {
      className: S.container,
      children: [(0, a.jsxs)(u.Clickable, {
        className: S.headerBar,
        onClick: () => l(e => !e),
        children: [(0, a.jsx)(u.Heading, {
          variant: "heading-md/semibold",
          className: S.headerText,
          children: I.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_HEADER
        }), (0, a.jsx)(E.default, {
          direction: s ? E.default.Directions.DOWN : E.default.Directions.UP,
          className: S.headerCaret
        })]
      }), !g && (0, a.jsx)("div", {
        className: S.progressBarOuter,
        children: (0, a.jsx)(r.animated.div, {
          className: S.progressBarInner,
          style: f
        })
      }), L]
    })
  })
}