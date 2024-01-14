"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
}), n("70102"), n("702976");
var i, r = n("316693"),
  s = n("666038"),
  a = n("234251"),
  o = n("315102"),
  l = n("299039"),
  u = n("49111"),
  c = n("680894"),
  d = n("646718");
new(i = class extends s.default {
  get createdAt() {
    return new Date(l.default.extractTimestamp(this.id))
  }
  hasVerifiedEmailOrPhone() {
    return !0 === this.verified || null != this.phone
  }
  getAvatarURL(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      i = null != e ? this.guildMemberAvatars[e] : void 0;
    return null != i && null != e ? o.default.getGuildMemberAvatarURLSimple({
      guildId: e,
      avatar: i,
      userId: this.id,
      canAnimate: n
    }) : o.default.getUserAvatarURL(this, n, t)
  }
  addGuildAvatarHash(e, t) {
    if (this.guildMemberAvatars[e] === t) return this;
    let n = {
      ...this.guildMemberAvatars,
      [e]: t
    };
    return this.merge({
      guildMemberAvatars: n
    })
  }
  removeGuildAvatarHash(e) {
    if (void 0 === this.guildMemberAvatars[e]) return this;
    let t = {
      ...this.guildMemberAvatars,
      [e]: void 0
    };
    return this.merge({
      guildMemberAvatars: t
    })
  }
  getAvatarSource(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = arguments.length > 2 ? arguments[2] : void 0;
    if (null != e) {
      let i = this.guildMemberAvatars[e];
      if (null != i) return o.default.getAnimatableSourceWithFallback(t, t => o.default.makeSource(o.default.getGuildMemberAvatarURLSimple({
        guildId: e,
        avatar: i,
        userId: this.id,
        canAnimate: t,
        size: n
      })))
    }
    return o.default.getAnimatableSourceWithFallback(t, e => o.default.getUserAvatarSource({
      id: this.id,
      avatar: this.avatar,
      discriminator: this.discriminator,
      bot: this.bot
    }, e, n))
  }
  isClaimed() {
    return null != this.email || null != this.phone
  }
  isPhoneVerified() {
    return null != this.phone
  }
  toString() {
    return "" !== this.username ? this.username : "???"
  }
  get tag() {
    return "".concat(this.username, "#").concat("".concat(this.discriminator).padStart(4, "0"))
  }
  hasPurchasedFlag(e) {
    return (this.purchasedFlags & e) === e
  }
  hasPremiumUsageFlag(e) {
    return (this.premiumUsageFlags & e) === e
  }
  hasHadSKU(e) {
    let t = d.SKU_ID_PURCHASED_FLAGS[e];
    return null != t && this.hasPurchasedFlag(t)
  }
  hasHadPremium() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
      t = this.hasHadSKU(d.PremiumSubscriptionSKUs.TIER_0),
      n = this.hasHadSKU(d.PremiumSubscriptionSKUs.TIER_1),
      i = this.hasHadSKU(d.PremiumSubscriptionSKUs.TIER_2);
    if (e === d.PremiumTypes.TIER_1) return n;
    if (e === d.PremiumTypes.TIER_2) return i;
    if (e === d.PremiumTypes.TIER_0) return t;
    else return t || n || i
  }
  hasFreePremium() {
    return this.isStaff() || this.hasFlag(u.UserFlags.PARTNER) || this.isStaffPersonal()
  }
  hasUrgentMessages() {
    return this.hasFlag(u.UserFlags.HAS_UNREAD_URGENT_MESSAGES)
  }
  isNonUserBot() {
    return this.isSystemUser() || this.bot && this.discriminator === u.NON_USER_BOT_DISCRIMINATOR
  }
  isLocalBot() {
    return this.bot && this.id === u.LOCAL_BOT_ID
  }
  isVerifiedBot() {
    return this.isSystemUser() || this.isLocalBot() || this.hasFlag(u.UserFlags.VERIFIED_BOT)
  }
  isSystemUser() {
    return !0 === this.system
  }
  isClyde() {
    return this.id === c.CLYDE_AI_USER_ID
  }
  hasAvatarForGuild(e) {
    return null != e && null != this.guildMemberAvatars[e]
  }
  isPomelo() {
    return "0" === this.discriminator
  }
  get avatarDecoration() {
    return this.avatarDecorationData
  }
  set avatarDecoration(e) {
    this.avatarDecorationData = (0, a.parseAvatarDecorationData)(e)
  }
  constructor(e) {
    var t, n, i, s, a, o, l, c, d, f, E, h, p, _, S, m, T, g, I, C, v, A, R, N, O, D, y, P, L;
    super(), this.hasFlag = e => !1, this.isStaff = () => !1, this.isStaffPersonal = () => !1, this.hasAnyStaffLevel = () => !1;
    let b = null !== (n = e.premium_type) && void 0 !== n ? n : e.premiumType;
    this.id = e.id, this.username = null !== (i = e.username) && void 0 !== i ? i : "", this.discriminator = null !== (s = e.discriminator) && void 0 !== s ? s : u.NON_USER_BOT_DISCRIMINATOR, this.avatar = null !== (a = e.avatar) && void 0 !== a ? a : null, this.avatarDecoration = null !== (o = e.avatar_decoration_data) && void 0 !== o ? o : e.avatarDecorationData, this.email = null !== (l = e.email) && void 0 !== l ? l : null, this.verified = null !== (c = e.verified) && void 0 !== c && c, this.bot = null !== (d = e.bot) && void 0 !== d && d, this.system = null !== (f = e.system) && void 0 !== f && f, this.mfaEnabled = null !== (h = null !== (E = e.mfa_enabled) && void 0 !== E ? E : e.mfaEnabled) && void 0 !== h && h, this.mobile = null !== (p = e.mobile) && void 0 !== p && p, this.desktop = null !== (_ = e.desktop) && void 0 !== _ && _, this.premiumType = b === u.PREMIUM_TYPE_NONE ? null : b, this.flags = null !== (S = e.flags) && void 0 !== S ? S : 0, this.publicFlags = null !== (T = null !== (m = e.public_flags) && void 0 !== m ? m : e.publicFlags) && void 0 !== T ? T : 0, this.purchasedFlags = null !== (I = null !== (g = e.purchased_flags) && void 0 !== g ? g : e.purchasedFlags) && void 0 !== I ? I : 0, this.premiumUsageFlags = null !== (v = null !== (C = e.premium_usage_flags) && void 0 !== C ? C : e.premiumUsageFlags) && void 0 !== v ? v : 0, this.phone = null !== (A = e.phone) && void 0 !== A ? A : null, this.nsfwAllowed = null !== (R = e.nsfw_allowed) && void 0 !== R ? R : e.nsfwAllowed, this.guildMemberAvatars = null !== (N = e.guildMemberAvatars) && void 0 !== N ? N : {}, this.hasBouncedEmail = null !== (D = null !== (O = e.has_bounced_email) && void 0 !== O ? O : e.hasBouncedEmail) && void 0 !== D && D, this.personalConnectionId = null !== (P = null !== (y = e.personal_connection_id) && void 0 !== y ? y : e.personalConnectionId) && void 0 !== P ? P : null, this.globalName = null !== (L = e.global_name) && void 0 !== L ? L : e.globalName, Object.defineProperties(this, {
      hasFlag: {
        writable: !1,
        configurable: !1,
        value: e => {
          if (e <= 1073741824) return ((this.flags | this.publicFlags) & e) === e;
          let t = r.default.deserialize(this.flags),
            n = r.default.deserialize(this.publicFlags),
            i = r.default.deserialize(e);
          return r.default.has(r.default.combine(t, n), i)
        }
      },
      isStaff: {
        writable: !1,
        configurable: !1,
        value: () => this.hasFlag(u.UserFlags.STAFF)
      },
      isStaffPersonal: {
        writable: !1,
        configurable: !1,
        value: () => !this.hasFlag(u.UserFlags.STAFF) && null != this.personalConnectionId
      },
      hasAnyStaffLevel: {
        writable: !1,
        configurable: !1,
        value: () => this.hasFlag(u.UserFlags.STAFF) || this.hasFlag(u.UserFlags.COLLABORATOR) || this.hasFlag(u.UserFlags.RESTRICTED_COLLABORATOR)
      }
    }), (null === (t = this.globalName) || void 0 === t ? void 0 : t.length) === 0 && (this.globalName = null)
  }
})({
  id: "0"
})