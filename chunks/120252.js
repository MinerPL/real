"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var s = n("803182"),
  i = n("872717"),
  r = n("913144"),
  a = n("619443"),
  o = n("233069"),
  d = n("42203"),
  u = n("18494"),
  l = n("49111"),
  f = n("724210");
let _ = {},
  c = !1;

function g(e) {
  if (null == e || e === f.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID || (0, f.isStaticChannelRoute)(e) || null != d.default.getChannel(e)) return Promise.resolve();
  if (c || (c = !0, r.default.subscribe("CONNECTION_OPEN", () => {
      _ = {};
      let e = u.default.getChannelId(),
        t = d.default.getChannel(e);
      null != e && null == t && g(e)
    })), !a.default.isConnected()) return Promise.resolve();
  let t = _[e];
  if (null != t) return "LOADING" === t.type ? t.promise : Promise.resolve();
  let n = (0, s.matchPath)(location.pathname, {
      path: l.Routes.CHANNEL(":guildId", ":channelId", ":messageId"),
      exact: !0
    }),
    m = i.default.get(l.Endpoints.CHANNEL(e)).then(t => {
      let {
        body: s
      } = t;
      if (_[e] = {
          type: "LOADED"
        }, o.THREAD_CHANNEL_TYPES.has(s.type)) {
        var i;
        r.default.dispatch({
          type: "THREAD_CREATE",
          channel: (0, o.createChannelRecordFromServer)(s),
          messageId: null == n ? void 0 : null === (i = n.params) || void 0 === i ? void 0 : i.messageId
        })
      }
    }).catch(() => {
      var t;
      _[e] = {
        type: "NOT_FOUND"
      }, r.default.dispatch({
        type: "CHANNEL_DELETE",
        channel: {
          id: e,
          guild_id: null == n ? void 0 : null === (t = n.params) || void 0 === t ? void 0 : t.guildId,
          parent_id: void 0
        }
      })
    });
  return _[e] = {
    type: "LOADING",
    promise: m
  }, m
}
var m = {
  loadThread: g
}