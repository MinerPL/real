"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
}), n("702976");
var s, i = n("866227"),
  r = n.n(i),
  a = n("666038");
s = class e extends a.default {
  static createFromServer(t) {
    var n;
    return new e({
      ...t,
      maxUses: t.max_uses,
      maxAge: t.max_age,
      createdAt: r(null !== (n = t.created_at) && void 0 !== n ? n : void 0),
      targetType: t.target_type,
      targetUser: t.target_user,
      targetApplication: t.target_application
    })
  }
  isExpired() {
    let e = this.maxAge;
    if (e > 0) {
      let t = r(this.createdAt);
      if (t.add(e, "seconds").isBefore(Date.now())) return !0
    }
    return !1
  }
  getExpiresAt() {
    if (this.maxAge > 0) {
      let e = r(this.createdAt);
      return e.add(this.maxAge, "seconds").toDate()
    }
    return 1 / 0
  }
  toString() {
    return this.code
  }
  constructor(e) {
    super(), this.code = e.code || "", this.temporary = e.temporary || !1, this.revoked = e.revoked || !1, this.uses = e.uses || 0, this.maxUses = e.maxUses || 0, this.maxAge = e.maxAge || 0, this.createdAt = e.createdAt || new Date, this.channel = e.channel, this.guild = e.guild, this.inviter = e.inviter || null, this.targetType = e.targetType || null, this.targetUser = e.targetUser || null, this.targetApplication = e.targetApplication || null, this.type = e.type || null, this.flags = e.flags || 0
  }
}