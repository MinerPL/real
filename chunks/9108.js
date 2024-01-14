"use strict";
l.r(t), l.d(t, {
  useNuxCardHeight: function() {
    return g
  },
  default: function() {
    return p
  }
});
var n = l("37983");
l("884691");
var a = l("414456"),
  s = l.n(a),
  i = l("151426"),
  d = l("77078"),
  r = l("10641"),
  o = l("592407"),
  u = l("584027"),
  c = l("945330"),
  h = l("512395"),
  f = l("49111"),
  m = l("994428"),
  C = l("782340"),
  N = l("20458"),
  x = l("652720");

function g(e) {
  let t = (0, h.useShouldShowOnboardingAdminUpsellForGuild)(e);
  return t ? 250 : 152
}

function p(e) {
  let {
    guild: t
  } = e, l = (0, h.useShouldShowOnboardingAdminUpsellForGuild)(t.id), a = (0, r.useIsDismissibleContentDismissed)(i.DismissibleContent.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL), g = l && !a ? i.DismissibleContent.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL : i.DismissibleContent.CHANNEL_BROWSER_NUX;
  (0, r.requestMarkDismissibleContentAsShown)(g);
  let p = l ? (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      children: [(0, n.jsx)(d.Heading, {
        className: N.heading,
        color: "always-white",
        variant: "heading-lg/semibold",
        children: C.default.Messages.CHANNEL_BROWSER_ADMIN_NUX_TITLE
      }), (0, n.jsx)(d.Text, {
        variant: "text-md/normal",
        color: "always-white",
        children: C.default.Messages.CHANNEL_BROWSER_ADMIN_NUX_DESCRIPTION
      }), (0, n.jsx)(d.Button, {
        className: N.checkItOut,
        onClick: () => {
          o.default.open(t.id, f.GuildSettingsSections.ONBOARDING), (0, r.markDismissibleContentAsDismissed)(g, {
            dismissAction: m.ContentDismissActionType.PRIMARY
          })
        },
        look: d.Button.Looks.INVERTED,
        children: (0, n.jsx)(d.Text, {
          variant: "text-md/medium",
          color: "none",
          children: C.default.Messages.CHANNEL_BROWSER_ADMIN_NUX_CTA
        })
      })]
    }), (0, n.jsx)(u.OnboardingPreview, {
      isTooltip: !0
    })]
  }) : (0, n.jsxs)("div", {
    className: N.nuxContent,
    children: [(0, n.jsx)("img", {
      width: 180,
      className: N.image,
      src: x,
      alt: "",
      "aria-hidden": !0
    }), (0, n.jsxs)("div", {
      children: [(0, n.jsx)(d.Heading, {
        className: N.heading,
        variant: "heading-lg/semibold",
        color: "header-primary",
        children: C.default.Messages.CHANNEL_BROWSER_NUX_TITLE
      }), (0, n.jsx)(d.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: C.default.Messages.CHANNEL_BROWSER_NUX_DESCRIPTION
      }), (0, n.jsx)(d.Text, {
        className: N.tip,
        variant: "text-md/normal",
        color: "header-secondary",
        children: C.default.Messages.CHANNEL_BROWSER_NUX_DESCRIPTION_2.format()
      })]
    })]
  });
  return (0, n.jsxs)("div", {
    className: s(N.container, {
      [N.adminUpsell]: l
    }),
    children: [(0, n.jsx)(d.Clickable, {
      className: N.closeButton,
      onClick: () => {
        (0, r.markDismissibleContentAsDismissed)(g, {
          dismissAction: m.ContentDismissActionType.DISMISS
        })
      },
      children: (0, n.jsx)(c.default, {})
    }), p]
  })
}