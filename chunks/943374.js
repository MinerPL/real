"use strict";
l.r(t), l.d(t, {
  default: function() {
    return T
  }
});
var n = l("37983");
l("884691");
var a = l("819855"),
  s = l("77078"),
  i = l("841098"),
  r = l("145131"),
  o = l("701909"),
  d = l("421475"),
  u = l("49111"),
  c = l("782340"),
  f = l("866516"),
  m = l("277482"),
  I = l("57213");

function T(e) {
  let {
    followedChannelWebhooks: t,
    editedWebhook: l,
    selectableWebhookChannels: T,
    errors: N,
    canNavigate: E
  } = e, h = (0, i.default)();
  return (0, n.jsxs)(s.FormSection, {
    children: [(0, n.jsx)(s.FormText, {
      type: s.FormTextTypes.DESCRIPTION,
      children: c.default.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_DESCRIPTION.format({
        helpdeskArticle: o.default.getArticleURL(u.HelpdeskArticles.CHANNEL_FOLLOWING)
      })
    }), (0, n.jsx)(s.FormDivider, {
      className: f.headerDivider
    }), t.length > 0 ? (0, n.jsx)(d.default, {
      webhooks: t,
      editedWebhook: l,
      selectableWebhookChannels: T,
      errors: N,
      canNavigate: E
    }) : function(e, t) {
      let l = (0, a.isThemeDark)(e) ? m : I;
      return (0, n.jsxs)(r.default, {
        direction: r.default.Direction.VERTICAL,
        align: r.default.Align.CENTER,
        children: [(0, n.jsx)("img", {
          alt: "",
          src: l,
          className: f.emptyStateImage
        }), (0, n.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          children: c.default.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_EMPTY
        }), (0, n.jsx)(s.Button, {
          className: f.emptyStateButton,
          onClick: t,
          children: c.default.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_EMPTY_BUTTON
        })]
      })
    }(h, () => open(o.default.getArticleURL(u.HelpdeskArticles.CHANNEL_FOLLOWING)))]
  })
}