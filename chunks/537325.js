"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var s = n("37983");
n("884691");
var i = n("551042"),
  r = n("565298"),
  a = n("393414"),
  o = n("239380"),
  d = n("42203"),
  u = n("361572"),
  l = n("232054"),
  f = n("49111");
async function _(e, t, _) {
  let c = (0, u.tryParseChannelPath)(e);
  if (null != c && !await (0, l.default)(c)) {
    (0, i.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("657233").then(n.bind(n, "657233"));
      return t => (0, s.jsx)(e, {
        ...t
      })
    });
    return
  }
  if (null == c) {
    (0, a.transitionTo)(e);
    return
  }
  let g = function(e) {
    if (null == e.channelId) return e;
    let t = d.default.getChannel(e.channelId);
    if (null == t) return e;
    let n = (0, r.getGuildIdForGenericRedirect)(t);
    return {
      ...e,
      guildId: null != n ? n : f.ME
    }
  }(c);
  if (null == g.channelId) {
    (0, o.transitionToGuild)(g.guildId);
    return
  }
  null != g.threadId ? (0, a.transitionTo)(f.Routes.CHANNEL_THREAD_VIEW(g.guildId, g.channelId, g.threadId, g.messageId), t, _) : (0, a.transitionTo)(f.Routes.CHANNEL(g.guildId, g.channelId, g.messageId), t, _)
}