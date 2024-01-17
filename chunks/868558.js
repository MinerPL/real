"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("222007");
var a = n("862337"),
  s = n("913144"),
  i = n("987317"),
  l = n("316272"),
  r = n("373469"),
  o = n("42203"),
  u = n("305961"),
  d = n("603699"),
  c = n("945956"),
  f = n("718517"),
  E = n("773336"),
  _ = n("49111");
let h = new a.Timeout,
  C = new a.Timeout;
class I extends l.default {
  _initialize() {
    s.default.subscribe("IDLE", this.handleIdleUpdate)
  }
  _terminate() {
    h.stop(), C.stop(), s.default.unsubscribe("IDLE", this.handleIdleUpdate)
  }
  handleIdleUpdate() {
    let e = d.default.getIdleSince();
    if (!E.isPlatformEmbedded) return;
    h.stop(), C.stop();
    let t = r.default.getAllActiveStreams();
    for (let e of t)
      if (e.state !== _.ApplicationStreamStates.ENDED) return;
    if (null == e) return;
    let n = c.default.getChannelId();
    if (null == n) return;
    C.start(18e6, () => {
      i.default.selectVoiceChannel(null)
    });
    let a = u.default.getGuild(c.default.getGuildId());
    if (null == a || null == a.afkChannelId || a.afkChannelId === n || null == a.afkTimeout) return;
    let s = o.default.getChannel(n);
    if (null != s) !s.isGuildStageVoice() && h.start(e + a.afkTimeout * f.default.Millis.SECOND - Date.now(), () => {
      null != (a = u.default.getGuild(c.default.getGuildId())) && null != a.afkChannelId && i.default.selectVoiceChannel(a.afkChannelId)
    })
  }
}
var T = new I