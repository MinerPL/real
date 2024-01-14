"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var i, r = n("666038"),
  s = n("719923"),
  a = n("49111");
i = class e extends r.default {
  static createFromServer(t) {
    var n, i;
    return new e({
      id: t.id,
      skuId: t.sku_id,
      applicationId: t.application_id,
      userId: t.user_id,
      gifterId: t.gifter_user_id,
      type: t.type,
      branches: null !== (n = t.branches) && void 0 !== n ? n : [],
      startsAt: null != t.starts_at ? new Date(t.starts_at) : null,
      endsAt: null != t.ends_at ? new Date(t.ends_at) : null,
      subscriptionId: t.subscription_id,
      subscriptionPlanId: null != t.subscription_plan ? t.subscription_plan.id : null,
      parentId: null != t.parent_id ? t.parent_id : null,
      consumed: null != t.consumed ? t.consumed : null,
      giftCodeBatchId: null !== (i = t.gift_code_batch_id) && void 0 !== i ? i : null,
      giftStyle: t.gift_style,
      guildId: t.guild_id,
      deleted: t.deleted
    })
  }
  get isGiftable() {
    return this.type === a.EntitlementTypes.USER_GIFT && null == this.gifterId
  }
  isValid(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    if (this.isGiftable || this.deleted) return !1;
    if (this.type === a.EntitlementTypes.PREMIUM_SUBSCRIPTION) {
      let n = t.get(this.skuId);
      if (null != n && !n.premium || !s.default.canInstallPremiumApplications(e)) return !1
    }
    let i = new Date;
    if (null != this.startsAt && i < this.startsAt || null != this.endsAt && i >= this.endsAt) return !1;
    if (null != n) {
      if (0 === this.branches.length) {
        if (this.applicationId !== n) return !1
      } else if (!this.branches.includes(n)) return !1
    }
    return !0
  }
  constructor(e) {
    super(), this.id = e.id, this.skuId = e.skuId, this.applicationId = e.applicationId, this.userId = e.userId, this.gifterId = e.gifterId, this.type = e.type, this.branches = e.branches, this.startsAt = e.startsAt, this.endsAt = e.endsAt, this.subscriptionId = e.subscriptionId, this.subscriptionPlanId = e.subscriptionPlanId, this.parentId = e.parentId, this.consumed = e.consumed, this.giftCodeBatchId = e.giftCodeBatchId, this.giftStyle = e.giftStyle, this.guildId = e.guildId, this.deleted = e.deleted
  }
}