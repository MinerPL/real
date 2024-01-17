"use strict";
a.r(t), a.d(t, {
  default: function() {
    return i
  }
});
var s = a("884691"),
  n = a("471671"),
  l = a("816454"),
  r = a("250850"),
  i = {
    useForumChannelSeenManager: function(e) {
      let {
        guildId: t,
        channelId: a
      } = e, i = s.useRef(null), o = (0, l.getMainWindowId)(), d = !n.default.isFocused(o);
      return s.useLayoutEffect(() => (null == i.current && (i.current = new r.default({
        guildId: t,
        channelId: a,
        isPaused: d,
        windowId: o
      }), i.current.initialize()), () => {
        var e;
        null === (e = i.current) || void 0 === e || e.terminate(), i.current = null
      }), [a, t, d, o]), i.current
    }
  }