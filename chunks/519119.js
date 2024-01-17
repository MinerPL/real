"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("37983");
n("884691");
var s = n("77078"),
  i = n("716241"),
  l = n("5667"),
  r = n("58608"),
  o = n("599110"),
  u = n("701909"),
  d = n("49111"),
  c = n("782340"),
  f = n("45243");

function E(e) {
  let {
    guildId: t,
    markAsDismissed: E
  } = e, _ = (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(s.Text, {
      color: "always-white",
      variant: "text-sm/normal",
      className: f.upsellBody,
      children: c.default.Messages.MEDIA_CHANNEL_UPSELL_BODY
    }), (0, a.jsx)(s.Text, {
      color: "always-white",
      variant: "text-sm/normal",
      children: c.default.Messages.MEDIA_CHANNEL_LEARN_MORE.format({
        hcArticleUrl: u.default.getCreatorSupportArticleURL(d.HelpdeskArticles.MEDIA_CHANNEL)
      })
    })]
  });
  return (0, a.jsx)(l.default, {
    header: c.default.Messages.MEDIA_CHANNEL_UPSELL_TITLE,
    content: _,
    asset: (0, a.jsx)(r.default, {
      className: f.video,
      src: "https://cdn.discordapp.com/assets/media_channel/media_channel_upsell_demo.mp4",
      autoPlay: !0,
      loop: !0
    }),
    buttonCTA: c.default.Messages.MEDIA_CHANNEL_UPSELL_CREATE_NOW_CTA,
    onClick: () => {
      o.default.track(d.AnalyticEvents.MEDIA_CHANNEL_UPSELL_CLICKED, {
        ...(0, i.collectGuildAnalyticsMetadata)(t)
      }), (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("581354").then(n.bind(n, "581354"));
        return n => (0, a.jsx)(e, {
          ...n,
          channelType: d.ChannelTypes.GUILD_MEDIA,
          guildId: t
        })
      })
    },
    secondaryButtonCTA: c.default.Messages.DISMISS,
    markAsDismissed: E
  })
}