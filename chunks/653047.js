"use strict";
n.r(t), n.d(t, {
  createExecutable: function() {
    return d
  },
  default: function() {
    return i
  }
}), n("702976");
var i, r = n("266088"),
  s = n("666038"),
  a = n("315102"),
  o = n("331082"),
  l = n("766274"),
  u = n("954016");
let c = {
  [u.POKER_NIGHT_APPLICATION_ID]: 7,
  [u.END_GAME_APPLICATION_ID]: 12
};

function d(e) {
  let t = {
    os: e.os,
    name: e.name
  };
  return null != e.arguments && (t.arguments = e.arguments), null != e.is_launcher && (t.isLauncher = e.is_launcher), t
}
i = class e extends s.default {
  static createFromServer(t) {
    var n, i;
    return new e({
      ...t,
      thirdPartySkus: t.third_party_skus,
      overlayWarn: t.overlay_warn,
      overlayCompatibilityHook: t.overlay_compatibility_hook,
      overlayMethods: null !== (n = t.overlay_methods) && void 0 !== n ? n : r.ApplicationOverlayMethodFlags.DEFAULT,
      hook: t.hook,
      primarySkuId: t.primary_sku_id,
      storeListingSkuId: t.store_listing_sku_id,
      guildId: t.guild_id,
      guild: t.guild,
      publishers: null != t.publishers ? t.publishers.map(o.default.createFromServer) : [],
      developers: null != t.developers ? t.developers.map(o.default.createFromServer) : [],
      eulaId: t.eula_id,
      slug: t.slug,
      coverImage: t.cover_image,
      bot: null != t.bot ? new l.default(t.bot) : null,
      flags: null !== (i = t.flags) && void 0 !== i ? i : 0,
      maxParticipants: t.max_participants,
      tags: t.tags,
      embeddedActivityConfig: t.embedded_activity_config,
      roleConnectionsVerificationUrl: t.role_connections_verification_url
    })
  }
  getIconURL(e) {
    return null != this.icon ? a.default.getGameAssetURL({
      id: this.id,
      hash: this.icon,
      size: e
    }) : null
  }
  getIconSource(e) {
    return null != this.icon ? a.default.getGameAssetSource({
      id: this.id,
      hash: this.icon,
      size: e
    }) : null
  }
  getSplashURL(e) {
    return null != this.splash ? a.default.getGameAssetURL({
      id: this.id,
      hash: this.splash,
      size: e,
      keepAspectRatio: !0
    }) : null
  }
  getCoverImageURL(e) {
    return null != this.coverImage ? a.default.getApplicationIconURL({
      id: this.id,
      icon: this.coverImage,
      size: e
    }) : null
  }
  getMaxParticipants() {
    var e, t;
    return null !== (t = null !== (e = this.maxParticipants) && void 0 !== e ? e : c[this.id]) && void 0 !== t ? t : 0
  }
  get destinationSkuId() {
    return null != this.storeListingSkuId ? this.storeListingSkuId : this.primarySkuId
  }
  get supportsOutOfProcessOverlay() {
    return e.supportsOutOfProcessOverlay(this.overlayMethods)
  }
  static supportsOutOfProcessOverlay(e) {
    let t = r.ApplicationOverlayMethodFlags.OUT_OF_PROCESS;
    return null != e && (e & t) === t
  }
  constructor(e) {
    var t, n, i, s;
    super(), this.id = e.id, this.name = e.name, this.icon = e.icon || null, this.splash = e.splash || null, this.overlay = e.overlay || !1, this.overlayWarn = e.overlayWarn || !1, this.overlayCompatibilityHook = e.overlayCompatibilityHook || !1, this.overlayMethods = null !== (t = e.overlayMethods) && void 0 !== t ? t : r.ApplicationOverlayMethodFlags.DEFAULT, this.hook = null === (n = e.hook) || void 0 === n || n, this.aliases = e.aliases || [], this.publishers = e.publishers || [], this.developers = e.developers || [], this.primarySkuId = e.primarySkuId, this.storeListingSkuId = e.storeListingSkuId, this.guildId = e.guildId || null, this.guild = e.guild || null, this.thirdPartySkus = e.thirdPartySkus || [], this.executables = (e.executables || []).map(d), this.hashes = e.hashes || [], this.description = e.description || null, this.eulaId = e.eulaId || null, this.slug = e.slug || null, this.bot = e.bot || null, this.coverImage = e.coverImage || null, this.flags = null !== (i = e.flags) && void 0 !== i ? i : 0, this.tags = null !== (s = e.tags) && void 0 !== s ? s : [], this.maxParticipants = e.maxParticipants, this.embeddedActivityConfig = e.embedded_activity_config, this.type = e.type, this.team = e.team, this.roleConnectionsVerificationUrl = e.roleConnectionsVerificationUrl
  }
}