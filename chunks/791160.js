"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var s = n("299285"),
  i = n("49111");

function r(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    r = s.default.getApplication(e.applicationId),
    a = e.getPrice(),
    o = e.getPrice(null, !1),
    d = {
      sku_id: e.id,
      sku_type: e.type,
      application_id: e.applicationId,
      application_name: null != r ? r.name : null,
      store_title: e.name,
      distribution_type: e.premium ? "premium" : "distribution"
    },
    u = null;
  n && (u = {
    price: null != a ? a.amount : null,
    regular_price: null != o ? o.amount : null,
    currency: null != a ? a.currency : null
  });
  let l = null;
  return t && (l = {
    has_single_player: e.hasFeature(i.SKUFeatureTypes.SINGLE_PLAYER),
    has_online_multiplayer: e.hasFeature(i.SKUFeatureTypes.ONLINE_MULTIPLAYER),
    has_local_multiplayer: e.hasFeature(i.SKUFeatureTypes.LOCAL_MULTIPLAYER),
    has_pvp_features: e.hasFeature(i.SKUFeatureTypes.PVP),
    has_local_coop: e.hasFeature(i.SKUFeatureTypes.LOCAL_COOP),
    has_online_coop: e.hasFeature(i.SKUFeatureTypes.ONLINE_COOP),
    has_cross_platform: e.hasFeature(i.SKUFeatureTypes.CROSS_PLATFORM),
    has_rich_presence: e.hasFeature(i.SKUFeatureTypes.RICH_PRESENCE),
    has_game_invites: e.hasFeature(i.SKUFeatureTypes.DISCORD_GAME_INVITES),
    has_spectator_mode: e.hasFeature(i.SKUFeatureTypes.SPECTATOR_MODE),
    has_controller_support: e.hasFeature(i.SKUFeatureTypes.CONTROLLER_SUPPORT),
    has_cloud_saves: e.hasFeature(i.SKUFeatureTypes.CLOUD_SAVES),
    has_secure_networking: e.hasFeature(i.SKUFeatureTypes.SECURE_NETWORKING)
  }), {
    ...d,
    ...u,
    ...l
  }
}