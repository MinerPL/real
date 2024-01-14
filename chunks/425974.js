"use strict";
a.r(t), a.d(t, {
  default: function() {
    return u
  }
});
var l = a("884691"),
  n = a("446674"),
  s = a("558130"),
  i = a("887446"),
  d = a("599110"),
  r = a("49111");

function u(e, t, a) {
  let u = (0, n.useStateFromStores)([s.default], () => {
    let t = s.default.getActiveChannelsFetchStatus(e);
    return null != t && !t.loading
  }, [e]);
  l.useEffect(() => {
    u && d.default.track(r.AnalyticEvents.ACTIVE_CHANNELS_LOADED, {
      guild_id: e,
      text_channels_shown: t.length,
      voice_channels_shown: a.length,
      home_session_id: i.default.getHomeSessionId(e)
    })
  }, [e, u])
}