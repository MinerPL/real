"use strict";
s.r(t), s.d(t, {
  default: function() {
    return x
  }
});
var l = s("37983");
s("884691");
var i = s("414456"),
  r = s.n(i),
  a = s("77078"),
  n = s("716241"),
  d = s("183137"),
  o = s("592407"),
  u = s("181114"),
  c = s("538137"),
  C = s("599110"),
  _ = s("500307"),
  f = s("49111"),
  h = s("782340"),
  L = s("326386");

function S(e) {
  let {
    pills: t
  } = e;
  return (0, l.jsx)("div", {
    className: L.row,
    children: t.map(e => (0, l.jsx)("div", {
      className: L.pill,
      children: (0, l.jsx)(a.Text, {
        variant: "text-sm/normal",
        children: e
      })
    }, e))
  })
}

function x(e) {
  let {
    guildId: t,
    showCTA: s,
    responsive: i = !0
  } = e, x = [
    [h.default.Messages.GUILD_STORE_PREVIEW_CHIP_ROLE_ACCESS, h.default.Messages.GUILD_STORE_PREVIEW_CHIP_GAME_TUTORIALS],
    [h.default.Messages.GUILD_STORE_PREVIEW_CHIP_DOPE_WALLPAPERS, h.default.Messages.GUILD_STORE_PREVIEW_CHIP_PFP_ART],
    [h.default.Messages.GUILD_STORE_PREVIEW_CHIP_FILTER_PRESETS, h.default.Messages.GUILD_STORE_PREVIEW_CHIP_SONG_DROPS],
    [h.default.Messages.GUILD_STORE_PREVIEW_CHIP_COSPLAY_PICS, h.default.Messages.GUILD_STORE_PREVIEW_CHIP_3D_MODELS]
  ];
  return (0, l.jsx)("div", {
    className: r({
      [L.responsive]: i
    }),
    children: (0, l.jsxs)("div", {
      className: L.container,
      children: [(0, l.jsxs)("div", {
        className: L.content,
        children: [(0, l.jsx)("div", {
          className: L.pillContainer,
          children: x.map((e, t) => (0, l.jsx)(S, {
            pills: e
          }, "pill-row-".concat(t)))
        }), (0, l.jsxs)("div", {
          className: L.ctaContent,
          children: [(0, l.jsx)(a.Text, {
            variant: "text-lg/medium",
            color: "header-primary",
            children: h.default.Messages.GUILD_STORE_PREVIEW_MURAL_TITLE
          }), s && (0, l.jsxs)(u.default, {
            size: a.Button.Sizes.MEDIUM,
            className: L.getStartedButton,
            innerClassName: L.getStartedButtonContents,
            shineSize: u.default.ShineSizes.SMALL,
            onClick: () => {
              C.default.track(f.AnalyticEvents.GUILD_SHOP_PREVIEW_CLICK, {
                ...(0, n.collectGuildAnalyticsMetadata)(t),
                action_taken: _.GuildShopPreviewClickActions.GET_STARTED_CLICK
              }), o.default.open(t, f.GuildSettingsSections.GUILD_PRODUCTS)
            },
            children: [h.default.Messages.GUILD_SHOP_PREVIEW_CTA_BUTTON, (0, l.jsx)(c.default, {
              className: L.getStartedArrow
            })]
          })]
        })]
      }), (0, l.jsxs)("div", {
        className: L.muralImageContainer,
        children: [(0, l.jsx)("img", {
          src: (0, d.getAssetCDNUrl)("server_products/storefront/preview-mural.png"),
          alt: "",
          className: L.muralImage
        }), (0, l.jsx)("img", {
          src: (0, d.getAssetCDNUrl)("server_products/storefront/preview-mural-reduced.png"),
          alt: "",
          className: L.muralImageReducedWidth
        })]
      })]
    })
  })
}