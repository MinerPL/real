"use strict";
n.r(t), n.d(t, {
  default: function() {
    return y
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  s = n.n(a),
  i = n("65597"),
  r = n("151426"),
  o = n("95410"),
  u = n("77078"),
  d = n("272030"),
  c = n("206230"),
  f = n("716241"),
  h = n("183137"),
  C = n("551254"),
  p = n("991148"),
  m = n("907038"),
  E = n("10641"),
  g = n("393414"),
  I = n("923959"),
  S = n("305961"),
  _ = n("381546"),
  N = n("956089"),
  T = n("599110"),
  A = n("708402"),
  L = n("49111"),
  v = n("724210"),
  x = n("500307"),
  R = n("782340"),
  M = n("864080");

function O(e) {
  let {
    guildId: t,
    selected: n,
    handleClick: a
  } = e, d = (0, C.useIsEligibleForSubscriptionsInGuildShop)(t, "guild_shop_channel_row"), p = (0, i.default)([S.default], () => S.default.getGuild(t)), A = (null == p ? void 0 : p.hasFeature(L.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) === !0, v = "false" === o.default.get(x.GUILD_SHOP_CHANNEL_ROW_CLICK, "false"), O = (0, i.default)([c.default], () => c.default.useReducedMotion);
  return (0, l.jsx)(u.ClickableContainer, {
    tag: "div",
    onClick: a,
    className: s(M.previewChannelRow, {
      [M.selected]: n,
      [M.phantomPreview]: v
    }),
    "aria-label": R.default.Messages.GUILD_SHOP_CHANNEL_LABEL,
    children: (0, l.jsxs)("div", {
      className: M.previewChannelRowContent,
      children: [(0, l.jsx)(m.default, {
        className: M.shopIcon
      }), (0, l.jsx)("div", {
        className: M.channelLabel,
        children: R.default.Messages.GUILD_SHOP_CHANNEL_LABEL
      }), (0, l.jsxs)("div", {
        className: M.gifSection,
        children: [O ? (0, l.jsx)(N.TextBadge, {
          color: u.tokens.unsafe_rawColors.BRAND_260.css,
          text: R.default.Messages.NEW,
          className: M.newBadge
        }) : (0, l.jsx)("img", {
          src: (0, h.getAssetCDNUrl)("server_products/storefront/money.gif"),
          className: M.money,
          alt: ""
        }), n && (0, l.jsx)(u.Clickable, {
          className: M.closeButton,
          onClick: e => {
            if (e.stopPropagation(), (0, E.markDismissibleContentAsDismissed)(r.DismissibleContent.SERVER_SHOP_PHANTOM_PREVIEW), T.default.track(L.AnalyticEvents.GUILD_SHOP_PREVIEW_CLICK, {
                ...(0, f.collectGuildAnalyticsMetadata)(t),
                action_taken: x.GuildShopPreviewClickActions.DISMISS_CHANNEL_ROW
              }), !d || !A) {
              var n;
              (0, g.replaceWith)(L.Routes.CHANNEL(t, null === (n = I.default.getDefaultChannel(t)) || void 0 === n ? void 0 : n.id))
            }
          },
          "aria-label": R.default.Messages.DISMISS,
          children: (0, l.jsx)(_.default, {
            width: 16,
            height: 16
          })
        })]
      })]
    })
  })
}

function y(e) {
  let {
    guild: t,
    selected: a
  } = e, s = (0, p.useGuildShopPreviewVisible)(t, "guild_shop_channel_row"), i = () => {
    o.default.set(x.GUILD_SHOP_CHANNEL_ROW_CLICK, "true"), (0, g.transitionTo)(L.Routes.CHANNEL(t.id, v.StaticChannelRoute.GUILD_SHOP))
  };
  return s ? (0, l.jsx)(O, {
    guildId: t.id,
    selected: a,
    handleClick: i
  }) : (0, l.jsx)(A.default, {
    renderIcon: e => (0, l.jsx)(m.default, {
      width: 20,
      height: 20,
      className: e
    }),
    text: R.default.Messages.GUILD_SHOP_CHANNEL_LABEL,
    selected: a,
    onClick: i,
    onContextMenu: e => {
      null != t && (0, d.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("367289").then(n.bind(n, "367289"));
        return n => (0, l.jsx)(e, {
          ...n,
          guild: t
        })
      })
    }
  })
}