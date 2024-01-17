"use strict";
s.r(t), s.d(t, {
  default: function() {
    return P
  }
});
var a = s("37983"),
  n = s("884691"),
  l = s("77078"),
  i = s("895530"),
  r = s("437825"),
  u = s("36694"),
  o = s("530311"),
  d = s("824326"),
  c = s("833458"),
  _ = s("155207"),
  E = s("781896"),
  I = s("430025"),
  T = s("137783"),
  f = s("439937"),
  S = s("31225"),
  R = s("49111"),
  m = s("782340"),
  p = s("786832");
let N = [{
    feature: R.SKUFeatureTypes.SINGLE_PLAYER,
    getText: () => m.default.Messages.APPLICATION_STORE_SINGLE_PLAYER,
    getTooltip: () => m.default.Messages.APPLICATION_STORE_SINGLE_PLAYER_TOOLTIP,
    IconComponent: E.default
  }, {
    feature: R.SKUFeatureTypes.LOCAL_MULTIPLAYER,
    getText: () => m.default.Messages.APPLICATION_STORE_LOCAL_MULTIPLAYER,
    getTooltip: () => m.default.Messages.APPLICATION_STORE_LOCAL_MULTIPLAYER_TOOLTIP,
    IconComponent: _.default
  }, {
    feature: R.SKUFeatureTypes.ONLINE_MULTIPLAYER,
    getText: () => m.default.Messages.APPLICATION_STORE_ONLINE_MULTIPLAYER,
    getTooltip: () => m.default.Messages.APPLICATION_STORE_ONLINE_MULTIPLAYER_TOOLTIP,
    IconComponent: _.default
  }, {
    feature: R.SKUFeatureTypes.PVP,
    getText: () => m.default.Messages.APPLICATION_STORE_PVP,
    getTooltip: () => m.default.Messages.APPLICATION_STORE_PVP_TOOLTIP,
    IconComponent: c.default
  }, {
    feature: R.SKUFeatureTypes.LOCAL_COOP,
    getText: () => m.default.Messages.APPLICATION_STORE_LOCAL_COOP,
    getTooltip: () => m.default.Messages.APPLICATION_STORE_LOCAL_COOP_TOOLTIP,
    IconComponent: _.default
  }, {
    feature: R.SKUFeatureTypes.ONLINE_COOP,
    getText: () => m.default.Messages.APPLICATION_STORE_ONLINE_COOP,
    getTooltip: () => m.default.Messages.APPLICATION_STORE_ONLINE_COOP_TOOLTIP,
    IconComponent: _.default
  }, {
    feature: R.SKUFeatureTypes.CROSS_PLATFORM,
    getText: () => m.default.Messages.APPLICATION_STORE_CROSS_PLATFORM,
    getTooltip: () => m.default.Messages.APPLICATION_STORE_CROSS_PLATFORM_TOOLTIP,
    IconComponent: S.default
  }, {
    feature: R.SKUFeatureTypes.RICH_PRESENCE,
    getText: () => m.default.Messages.APPLICATION_STORE_RICH_PRESENCE,
    getTooltip: () => m.default.Messages.APPLICATION_STORE_RICH_PRESENCE_TOOLTIP,
    IconComponent: T.default
  }, {
    feature: R.SKUFeatureTypes.DISCORD_GAME_INVITES,
    getText: () => m.default.Messages.APPLICATION_STORE_DISCORD_GAME_INVITES,
    getTooltip: () => m.default.Messages.APPLICATION_STORE_DISCORD_GAME_INVITES_TOOLTIP,
    IconComponent: I.default
  }, {
    feature: R.SKUFeatureTypes.SPECTATOR_MODE,
    getText: () => m.default.Messages.APPLICATION_STORE_SPECTATOR_MODE,
    getTooltip: () => m.default.Messages.APPLICATION_STORE_SPECTATOR_MODE_TOOLTIP,
    IconComponent: r.default
  }, {
    feature: R.SKUFeatureTypes.CONTROLLER_SUPPORT,
    getText: () => m.default.Messages.APPLICATION_STORE_CONTROLLER_SUPPORT,
    getTooltip: () => m.default.Messages.APPLICATION_STORE_CONTROLLER_SUPPORT_TOOLTIP,
    IconComponent: d.default
  }, {
    feature: R.SKUFeatureTypes.CLOUD_SAVES,
    getText: () => m.default.Messages.APPLICATION_STORE_CLOUD_SAVES,
    getTooltip: () => m.default.Messages.APPLICATION_STORE_CLOUD_SAVES_TOOLTIP,
    IconComponent: o.default
  }, {
    feature: R.SKUFeatureTypes.SECURE_NETWORKING,
    getText: () => m.default.Messages.APPLICATION_STORE_SECURE_NETWORKING,
    getTooltip: () => m.default.Messages.APPLICATION_STORE_SECURE_NETWORKING_TOOLTIP,
    IconComponent: f.default
  }],
  A = e => {
    let {
      IconComponent: t,
      text: s,
      tooltip: n
    } = e;
    return (0, a.jsxs)("div", {
      className: p.row,
      children: [(0, a.jsx)(l.Tooltip, {
        text: n,
        children: e => (0, a.jsx)(t, {
          className: p.featureIcon,
          ...e
        })
      }), (0, a.jsx)("span", {
        className: p.featureText,
        children: s
      }), (0, a.jsx)(u.default, {
        className: p.checkmarkIcon
      })]
    })
  };
class g extends n.PureComponent {
  render() {
    let {
      sku: e
    } = this.props, t = N.filter(t => {
      let {
        feature: s
      } = t;
      return e.features.has(s)
    }).map(e => {
      let {
        feature: t,
        IconComponent: s,
        getText: n,
        getTooltip: l
      } = e;
      return (0, a.jsx)(A, {
        IconComponent: s,
        text: n(),
        tooltip: l()
      }, t)
    });
    return 0 === t.length ? null : (0, a.jsxs)("div", {
      className: p.features,
      children: [(0, a.jsx)(i.default, {
        children: m.default.Messages.APPLICATION_STORE_SECTION_TITLE_FEATURES
      }), t]
    })
  }
}
var P = g