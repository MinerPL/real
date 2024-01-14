"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
});
var a = s("37983");
s("884691");
var n = s("77078"),
  l = s("191814"),
  i = s("677795"),
  r = s("782340"),
  o = s("988511"),
  d = s("627150"),
  u = s("370730"),
  c = s("350233");

function E(e) {
  let {
    imageSrc: t,
    description: s
  } = e;
  return (0, a.jsxs)("div", {
    className: o.howItWorksCard,
    children: [(0, a.jsx)("div", {
      className: o.howItWorksImageContainer,
      children: (0, a.jsx)("img", {
        className: o.howItWorksImage,
        src: t,
        alt: ""
      })
    }), (0, a.jsx)("div", {
      className: o.howItWorksDescription,
      children: (0, a.jsx)(n.Text, {
        variant: "text-sm/normal",
        color: "header-primary",
        children: s
      })
    })]
  })
}

function _() {
  let e = [{
    imageSrc: c,
    description: r.default.Messages.GUILD_ROLE_SUBSCRIPTION_HOW_IT_WORKS_STEP_1
  }, {
    imageSrc: d,
    description: r.default.Messages.GUILD_ROLE_SUBSCRIPTION_HOW_IT_WORKS_STEP_2
  }, {
    imageSrc: u,
    description: r.default.Messages.GUILD_ROLE_SUBSCRIPTION_HOW_IT_WORKS_STEP_3
  }];
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(n.Heading, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      children: r.default.Messages.GUILD_ROLE_SUBSCRIPTION_HOW_IT_WORKS_TITLE
    }), (0, a.jsx)(l.default, {
      size: 24
    }), (0, a.jsx)("div", {
      className: o.howItWorksContainer,
      children: e.map(e => (0, a.jsx)(E, {
        imageSrc: e.imageSrc,
        description: e.description
      }, e.imageSrc))
    }), (0, a.jsx)(l.default, {
      size: 24
    }), (0, a.jsx)(n.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: r.default.Messages.GUILD_ROLE_SUBSCRIPTION_HOW_IT_WORKS_FOOTER.format({
        creatorPortalUrl: i.CREATOR_REVENUE_PORTAL_URL
      })
    })]
  })
}