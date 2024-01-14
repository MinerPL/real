"use strict";
a.r(s), a.d(s, {
  default: function() {
    return E
  }
}), a("222007");
var t = a("37983"),
  l = a("884691"),
  i = a("414456"),
  r = a.n(i),
  d = a("77078"),
  n = a("149632"),
  o = a("49111"),
  c = a("782340"),
  u = a("627819"),
  E = e => {
    let {
      headerId: s,
      guild: a,
      onAgreedChange: i
    } = e, [E, S] = l.useState(!1), [R, m] = l.useState(!1), [_, x] = l.useState(!1);
    l.useEffect(() => {
      E && R && _ ? i(!0) : i(!1)
    }, [E, R, _, i]);
    let C = c.default.Messages.SERVER_DISCOVERY_RULES_COMPLY_GUIDELINES.format({
      onCommunityGuidelinesClick: () => (0, n.navigateToAndTrackHelpCenterClick)({
        articleId: o.HelpdeskArticles.PUBLIC_GUILD_GUILDLINES,
        guildId: a.id,
        modalStep: n.DiscoverySetupModalSteps.AGREE_TO_RULES
      }),
      onDiscoveryGuidelinesClick: () => (0, n.navigateToAndTrackHelpCenterClick)({
        articleId: o.HelpdeskArticles.SERVER_DISCOVERY_GUIDELINES,
        guildId: a.id,
        modalStep: n.DiscoverySetupModalSteps.AGREE_TO_RULES
      })
    });
    return (0, t.jsxs)("div", {
      className: u.container,
      children: [(0, t.jsxs)("div", {
        className: u.content,
        children: [(0, t.jsx)("div", {
          className: r(u.stepImage, u.checkImage)
        }), (0, t.jsx)(d.Heading, {
          variant: "heading-xl/semibold",
          className: u.header,
          id: s,
          children: c.default.Messages.SERVER_DISCOVERY_AGREE_TO_RULES
        }), (0, t.jsx)(d.Text, {
          color: "none",
          variant: "text-md/normal",
          className: u.headerCaption,
          children: c.default.Messages.SERVER_DISCOVERY_RULES_PAGE_SUBHEADING
        })]
      }), (0, t.jsxs)("div", {
        className: u.form,
        children: [(0, t.jsx)(d.FormTitle, {
          required: !0,
          children: c.default.Messages.SERVER_DISCOVERY_RULES_FORM_LABEL
        }), (0, t.jsx)("div", {
          className: u.checkboxWrapper,
          children: (0, t.jsxs)(d.Checkbox, {
            type: d.Checkbox.Types.ROW,
            value: E,
            align: d.Checkbox.Aligns.TOP,
            onChange: () => S(!E),
            children: [(0, t.jsx)(d.Text, {
              variant: "text-md/semibold",
              className: u.checkboxTitle,
              children: c.default.Messages.SERVER_DISCOVERY_RULES_HEALTHY_ENV_HEADING
            }), (0, t.jsx)(d.Text, {
              variant: "text-sm/normal",
              children: c.default.Messages.SERVER_DISCOVERY_RULES_HEALTHY_ENV_DESCRIPTION
            })]
          })
        }), (0, t.jsx)("div", {
          className: u.checkboxWrapper,
          children: (0, t.jsxs)(d.Checkbox, {
            type: d.Checkbox.Types.ROW,
            align: d.Checkbox.Aligns.TOP,
            value: R,
            onChange: () => m(!R),
            children: [(0, t.jsx)(d.Text, {
              variant: "text-md/semibold",
              className: u.checkboxTitle,
              children: c.default.Messages.SERVER_DISCOVERY_RULES_SEXUAL_CONTENT_HEADING
            }), (0, t.jsx)(d.Text, {
              variant: "text-sm/normal",
              children: c.default.Messages.SERVER_DISCOVERY_RULES_SEXUAL_CONTENT_DESCRIPTION
            })]
          })
        }), (0, t.jsx)("div", {
          className: u.checkboxWrapper,
          children: (0, t.jsxs)(d.Checkbox, {
            type: d.Checkbox.Types.ROW,
            align: d.Checkbox.Aligns.TOP,
            value: _,
            onChange: () => x(!_),
            children: [(0, t.jsx)(d.Text, {
              variant: "text-md/semibold",
              className: u.checkboxTitle,
              children: C
            }), (0, t.jsx)(d.Text, {
              variant: "text-sm/normal",
              children: c.default.Messages.SERVER_DISCOVERY_RULES_COMPLY_GUIDELINES_DESCRIPTION
            })]
          })
        })]
      })]
    })
  }