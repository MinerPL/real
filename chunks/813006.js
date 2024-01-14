"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
}), n("222007");
var i, r = n("666038"),
  s = n("315102"),
  a = n("605136"),
  o = n("299039"),
  l = n("159885"),
  u = n("49111"),
  c = n("958706"),
  d = n("646718");
i = class extends r.default {
  getSafetyAlertsChannelId() {
    var e;
    return null !== (e = this.safetyAlertsChannelId) && void 0 !== e ? e : this.publicUpdatesChannelId
  }
  getIconURL(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return s.default.getGuildIconURL({
      id: this.id,
      size: e,
      icon: this.icon,
      canAnimate: t
    })
  }
  getIconSource(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return s.default.getAnimatableSourceWithFallback(t, t => s.default.getGuildIconSource({
      id: this.id,
      size: e,
      icon: this.icon,
      canAnimate: t
    }))
  }
  getApplicationId() {
    return this.application_id
  }
  toString() {
    var e;
    return null !== (e = this.name) && void 0 !== e ? e : ""
  }
  get acronym() {
    return (0, l.getAcronym)(this.name)
  }
  isOwner(e) {
    let t = "string" == typeof e ? e : null != e ? e.id : null;
    return this.ownerId === t
  }
  isOwnerWithRequiredMfaLevel(e) {
    return (!!e.mfaEnabled || this.mfaLevel !== u.MFALevels.ELEVATED) && this.isOwner(e)
  }
  isNew() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 7,
      t = o.default.extractTimestamp(this.id);
    return Date.now() - t < 864e5 * e
  }
  isLurker() {
    return null == this.joinedAt
  }
  hasFeature(e) {
    return this.features.has(e)
  }
  getRole(e) {
    return this.roles[e]
  }
  getMaxEmojiSlots() {
    return Math.max(this.hasFeature(u.GuildFeatures.MORE_EMOJI) ? 200 : c.EMOJI_MAX_SLOTS, d.BoostedGuildFeatures[this.premiumTier].limits.emoji)
  }
  getMaxRoleSubscriptionEmojiSlots() {
    return 25
  }
  getMaxSoundboardSlots() {
    return d.BoostedGuildFeatures[this.premiumTier].limits.soundboardSounds
  }
  isCommunity() {
    return this.hasFeature(u.GuildFeatures.COMMUNITY)
  }
  hasVerificationGate() {
    return this.hasFeature(u.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) && this.hasFeature(u.GuildFeatures.COMMUNITY)
  }
  hasCommunityInfoSubheader() {
    return this.hasFeature(u.GuildFeatures.COMMUNITY) && this.hasFeature(u.GuildFeatures.DISCOVERABLE)
  }
  canHaveRaidActivityAlerts() {
    return !this.hasFeature(u.GuildFeatures.COMMUNITY) && this.hasFeature(u.GuildFeatures.NON_COMMUNITY_RAID_ALERTS) || this.hasFeature(u.GuildFeatures.COMMUNITY) && !this.hasFeature(u.GuildFeatures.RAID_ALERTS_DISABLED)
  }
  upsertRole(e) {
    return this.update("roles", t => (t[e.id] = e, (0, a.sortClientRoles)(this.id, Object.values(t))))
  }
  deleteRole(e) {
    return this.update("roles", t => (delete t[e], t))
  }
  updateJoinedAt(e) {
    return this.set("joinedAt", "string" == typeof e ? new Date(e) : e)
  }
  constructor(e) {
    var t, n, i;
    super();
    let r = new Set(Array.from(e.features || []));
    this.id = e.id, this.name = e.name || "", this.description = e.description || null, this.ownerId = e.ownerId || null, this.icon = e.icon || null, this.splash = e.splash || null, this.banner = e.banner || null, this.homeHeader = e.homeHeader || null, this.features = r, this.preferredLocale = e.preferredLocale || "en-US", this.roles = e.roles || {}, this.afkChannelId = e.afkChannelId || null, this.afkTimeout = e.afkTimeout, this.systemChannelId = e.systemChannelId || null, this.verificationLevel = e.verificationLevel || u.VerificationLevels.NONE, this.joinedAt = null != e.joinedAt ? new Date(e.joinedAt) : e.joinedAt, this.defaultMessageNotifications = e.defaultMessageNotifications || u.UserNotificationSettings.ALL_MESSAGES, this.mfaLevel = e.mfaLevel || u.MFALevels.NONE, this.application_id = e.application_id || null, this.explicitContentFilter = e.explicitContentFilter || u.GuildExplicitContentFilterTypes.DISABLED, this.vanityURLCode = e.vanityURLCode || void 0, this.premiumTier = e.premiumTier || u.BoostedGuildTiers.NONE, this.premiumSubscriberCount = e.premiumSubscriberCount || 0, this.premiumProgressBarEnabled = e.premiumProgressBarEnabled || !1, this.systemChannelFlags = e.systemChannelFlags, this.discoverySplash = e.discoverySplash || null, this.rulesChannelId = e.rulesChannelId || null, this.safetyAlertsChannelId = e.safetyAlertsChannelId || null, this.publicUpdatesChannelId = e.publicUpdatesChannelId || null, this.maxStageVideoChannelUsers = e.maxStageVideoChannelUsers || -1, this.maxVideoChannelUsers = e.maxVideoChannelUsers || -1, this.maxMembers = e.maxMembers || -1, this.nsfwLevel = null !== (t = e.nsfwLevel) && void 0 !== t ? t : u.GuildNSFWContentLevel.DEFAULT, this.hubType = e.hubType, this.latestOnboardingQuestionId = null !== (n = e.latestOnboardingQuestionId) && void 0 !== n ? n : null, this.inventorySettings = null !== (i = e.inventorySettings) && void 0 !== i ? i : null
  }
}