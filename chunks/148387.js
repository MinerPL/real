"use strict";
n.r(t), n.d(t, {
  InvitePropertiesType: function() {
    return i
  },
  default: function() {
    return h
  }
});
var l, i, r = n("450911"),
  a = n("819689"),
  s = n("605250"),
  o = n("42203"),
  u = n("718517"),
  d = n("231987");
let c = 1 * u.default.Millis.SECOND + 10;
(l = i || (i = {}))[l.GROUP_DM = 0] = "GROUP_DM", l[l.USER = 1] = "USER", l[l.CHANNEL = 2] = "CHANNEL";
class f extends d.default {
  _sendInvite(e, t, n, l, i) {
    a.default.sendInvite(e.id, t, n, l).then(() => i(null, !0), () => i(null, !1))
  }
  drain(e, t) {
    let {
      location: n,
      suggested: l
    } = e;
    switch (e.type) {
      case 0:
      case 2:
        this._sendInvite(e.channel, e.inviteKey, n, l, t);
        break;
      case 1:
        r.default.ensurePrivateChannel(e.user.id).then(i => {
          let r = o.default.getChannel(i);
          null != r && this._sendInvite(r, e.inviteKey, n, l, t)
        }, () => t(null, !1))
    }
  }
  constructor() {
    super(new s.default("InviteQueue"), c)
  }
}
var h = new f