"use strict";
a.r(t), a.d(t, {
  default: function() {
    return n
  }
});
var l = a("666038");
class i extends l.default {
  static createFromServer(e) {
    return new i({
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
var n = i