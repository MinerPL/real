"use strict";
s.r(t), s.d(t, {
  default: function() {
    return R
  }
});
var a = s("37983");
s("884691");
var n = s("819855"),
  l = s("77078"),
  i = s("841098"),
  r = s("191814"),
  o = s("677795"),
  d = s("782340"),
  u = s("737599"),
  c = s("201894"),
  E = s("722838"),
  _ = s("497002"),
  T = s("437250"),
  I = s("382531"),
  S = s("865332"),
  N = s("439044"),
  g = s("912839"),
  f = s("600719");

function A(e) {
  return (0, n.isThemeDark)(e) ? u.revenueSharePercentageDark : u.revenueSharePercentageLight
}

function L() {
  let e = (0, i.default)(),
    t = {
      backgroundColor: (0, n.isThemeDark)(e) ? "#2e3638" : "var(--background-primary)"
    };
  return (0, a.jsxs)("div", {
    className: u.earningsPreviewContainer,
    style: t,
    children: [(0, a.jsxs)("div", {
      children: [(0, a.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: d.default.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_NEW_SUBS
      }), (0, a.jsx)(r.default, {
        size: 8
      }), (0, a.jsx)(l.Heading, {
        variant: "heading-md/bold",
        className: A(e),
        children: d.default.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_REVENUE_INCREASE
      })]
    }), (0, a.jsx)("img", {
      className: u.roundAvatar,
      src: S,
      alt: d.default.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_1_PREVIEW_IMG_ALT
    })]
  })
}

function m() {
  let e = (0, i.default)();

  function t(e) {
    let {
      length: t,
      horizontal: s
    } = e;
    return (0, a.jsx)("div", {
      className: s ? u.horizontalConnector : u.verticalConnector,
      style: {
        ...s ? {
          width: t
        } : {
          height: t
        },
        border: "1px solid #49494933"
      }
    })
  }
  return (0, a.jsxs)("div", {
    className: u.avatarGridContainer,
    "aria-label": d.default.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_1_GRID_ARIA_LABEL,
    children: [(0, a.jsxs)("div", {
      className: u.avatarCard,
      children: [(0, a.jsx)(t, {
        length: 24
      }), (0, a.jsx)("img", {
        className: u.roundAvatar,
        src: (0, n.isThemeDark)(e) ? c : E,
        alt: ""
      }), (0, a.jsx)(t, {
        horizontal: !0,
        length: 12
      })]
    }), (0, a.jsxs)("div", {
      className: u.avatarCard,
      children: [(0, a.jsx)(t, {
        length: 24
      }), (0, a.jsx)("img", {
        className: u.roundAvatar,
        src: _,
        alt: ""
      })]
    }), (0, a.jsxs)("div", {
      className: u.avatarCard,
      children: [(0, a.jsx)(t, {
        length: 12
      }), (0, a.jsx)("img", {
        className: u.roundAvatar,
        src: T,
        alt: ""
      }), (0, a.jsx)(t, {
        horizontal: !0,
        length: 12
      })]
    }), (0, a.jsxs)("div", {
      className: u.avatarCard,
      children: [(0, a.jsx)(t, {
        length: 12
      }), (0, a.jsx)("img", {
        className: u.roundAvatar,
        src: I,
        alt: ""
      })]
    })]
  })
}

function C() {
  return (0, a.jsxs)("div", {
    className: u.earningBenefitCard,
    children: [(0, a.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: d.default.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_1
    }), (0, a.jsx)(r.default, {
      size: 32
    }), (0, a.jsx)(L, {}), (0, a.jsx)(r.default, {
      size: 24
    }), (0, a.jsx)(m, {})]
  })
}

function O() {
  return (0, a.jsxs)("div", {
    className: u.followerBenefitCard,
    children: [(0, a.jsx)(l.Text, {
      className: u.followerBenefitText,
      variant: "text-md/normal",
      color: "header-secondary",
      children: d.default.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_2
    }), (0, a.jsx)("img", {
      className: u.roleSubscriptionSocial,
      src: f,
      alt: d.default.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_2_IMG_1_ALT
    }), (0, a.jsx)("img", {
      className: u.roleSubscriptionLanyardIllo,
      src: g,
      alt: d.default.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_2_IMG_2_ALT
    })]
  })
}

function h() {
  let e = (0, i.default)();
  return (0, a.jsxs)("div", {
    className: u.revenueShareBenefitCard,
    children: [(0, a.jsxs)("div", {
      children: [(0, a.jsxs)(l.Heading, {
        className: A(e),
        style: {
          fontSize: "50px",
          lineHeight: "52px"
        },
        variant: "heading-xxl/extrabold",
        children: [o.CREATOR_REVENUE_SHARE_PERCENTAGE, "%"]
      }), (0, a.jsx)(l.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: d.default.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_3
      })]
    }), (0, a.jsx)("img", {
      className: u.roleSubscriptionEarningIllo,
      src: N,
      alt: d.default.Messages.GUILD_ROLE_SUBSCRIPTION_CREATOR_BENEFIT_3_IMG_ALT
    })]
  })
}

function R() {
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(l.Heading, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      children: d.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFITS_FOR_CREATORS_TITLE
    }), (0, a.jsx)(r.default, {
      size: 24
    }), (0, a.jsxs)("div", {
      className: u.creatorBenefitsContainer,
      children: [(0, a.jsx)(C, {}), (0, a.jsx)(O, {}), (0, a.jsx)(h, {})]
    })]
  })
}