"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var a = n("913144"),
  i = n("689988"),
  l = n("26989"),
  d = n("697218"),
  u = n("509");
let s = null,
  r = () => {
    let e = l.default.getCommunicationDisabledUserMap();
    Object.keys(e).forEach(t => {
      let n = (0, l.getGuildIdFromCommunicationDisabledUserKey)(t),
        a = (0, l.getUserIdFromCommunicationDisabledUserKey)(t),
        i = e[t];
      !(0, u.isCommunicationDisabled)(i) && o(n, a)
    })
  },
  o = (e, t) => {
    var n, i, s, r, o, c;
    let f = l.default.getMember(e, t),
      g = d.default.getUser(t);
    if (null == f || null == g || (0, u.isMemberCommunicationDisabled)(f)) return;
    let p = {
      ...f,
      guildId: e,
      nick: null !== (n = f.nick) && void 0 !== n ? n : g.username,
      avatar: null !== (i = f.avatar) && void 0 !== i ? i : void 0,
      premiumSince: null !== (s = f.premiumSince) && void 0 !== s ? s : void 0,
      isPending: null !== (r = f.isPending) && void 0 !== r && r,
      user: {
        ...g,
        email: null !== (o = g.email) && void 0 !== o ? o : void 0,
        phone: null !== (c = g.phone) && void 0 !== c ? c : void 0
      },
      communicationDisabledUntil: null
    };
    a.default.dispatch({
      type: "GUILD_MEMBER_UPDATE",
      ...p
    })
  };
class c extends i.default {
  _initialize() {
    s = setInterval(() => r(), 1e4)
  }
  _terminate() {
    clearInterval(s)
  }
  constructor(...e) {
    super(...e), this.clearGuildMemberTimeout = o
  }
}
var f = new c