"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("222007");
var l, r, u = n("872717"),
  i = n("666038"),
  o = n("813006"),
  a = n("315102"),
  s = n("159885"),
  d = n("886167"),
  c = n("49111");
(l || (l = {})).GUILD = "GUILD";
let E = async e => {
  let t = null;
  try {
    var n;
    let l = await u.default.get({
      url: c.Endpoints.EMOJI_SOURCE_DATA(e),
      oldFormErrors: !0,
      timeout: 5e3
    });
    (null == l ? void 0 : null === (n = l.body) || void 0 === n ? void 0 : n.guild) != null && (t = {
      guild: r.createFromServer(l.body.guild),
      type: l.body.type
    })
  } catch {}
  return t
};
r = class e extends i.default {
  getIconURL(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return a.default.getGuildIconURL({
      id: this.id,
      size: e,
      icon: this.icon,
      canAnimate: t
    })
  }
  getIconSource(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return a.default.getAnimatableSourceWithFallback(t, t => a.default.getGuildIconSource({
      id: this.id,
      size: e,
      icon: this.icon,
      canAnimate: t
    }))
  }
  hasFeature(e) {
    return this.features.has(e)
  }
  isDiscoverable() {
    return this.hasFeature(c.GuildFeatures.DISCOVERABLE)
  }
  get acronym() {
    return (0, s.getAcronym)(this.name)
  }
  static async getGuildFromEmojiId(e) {
    let t = await E(e),
      n = null != t && (null == t ? void 0 : t.type) === "GUILD";
    return n ? t.guild : null
  }
  static _mapCommon(e) {
    var t;
    return {
      id: e.id,
      name: e.name,
      icon: e.icon,
      description: e.description,
      features: new Set(null !== (t = e.features) && void 0 !== t ? t : new Set)
    }
  }
  static createFromGuildRecord(t) {
    return new e({
      ...e._mapCommon(t),
      premiumTier: t.premiumTier,
      premiumSubscriberCount: t.premiumSubscriberCount,
      presenceCount: null,
      memberCount: null,
      emojis: null,
      inventorySettings: t.inventorySettings
    })
  }
  static createFromDiscoverableGuild(t) {
    return new e({
      ...e._mapCommon(t),
      premiumTier: null,
      premiumSubscriberCount: t.premiumSubscriptionCount,
      presenceCount: t.presenceCount,
      memberCount: t.memberCount,
      emojis: t.emojis,
      inventorySettings: void 0
    })
  }
  static createFromServer(t) {
    return new e({
      ...e._mapCommon(t),
      premiumTier: t.premium_tier,
      premiumSubscriberCount: t.premium_subscription_count,
      presenceCount: t.approximate_presence_count,
      memberCount: t.approximate_member_count,
      emojis: t.emojis,
      inventorySettings: (0, d.guildInventorySettingsFromServer)(t.inventory_settings)
    })
  }
  static createFromGuildType(t) {
    return t instanceof e ? t : t instanceof o.default ? e.createFromGuildRecord(t) : e.createFromDiscoverableGuild(t)
  }
  constructor(e) {
    super(), this.id = e.id, this.name = e.name, this.icon = e.icon, this.description = e.description, this.features = e.features, this.premiumTier = e.premiumTier, this.premiumSubscriberCount = e.premiumSubscriberCount, this.presenceCount = e.presenceCount, this.memberCount = e.memberCount, this.emojis = e.emojis, this.inventorySettings = e.inventorySettings
  }
}