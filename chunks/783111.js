"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var r = n("666038");
class u extends r.default {
  static createFromServer(e) {
    return new u({
      id: e.id,
      guildId: e.guild_id,
      userId: null != e.user ? e.user.id : e.user_id,
      user: e.user,
      ended: e.ended,
      endsAt: null != e.ends_at && "" !== e.ends_at ? new Date(e.ends_at) : null
    })
  }
  constructor(e) {
    super(), this.id = e.id, this.guildId = e.guildId, this.userId = e.userId, this.user = e.user, this.ended = e.ended, this.endsAt = null != e.endsAt ? e.endsAt : null
  }
}
var i = u