"use strict";
let n;
u.r(t), u.d(t, {
  default: function() {
    return A
  }
});
var r = u("446674"),
  l = u("872717"),
  a = u("913144"),
  i = u("718517"),
  o = u("271938"),
  d = u("401848"),
  s = u("49111"),
  f = u("724210");
let c = 10 * i.default.Millis.SECOND,
  m = 1.5 * i.default.Millis.SECOND,
  g = {},
  S = Object.freeze({});

function T(e) {
  var t;
  return null !== (t = g[e]) && void 0 !== t ? t : S
}

function h(e) {
  var t, u;
  let {
    channelId: n,
    userId: r
  } = e, l = {
    ...T(n)
  };
  clearTimeout(l[r]), l[r] = (t = n, u = r, setTimeout(() => {
    a.default.dispatch({
      type: "TYPING_STOP",
      channelId: t,
      userId: u
    })
  }, c)), g[n] = l
}

function E(e) {
  let {
    channelId: t,
    userId: u
  } = e, n = g[t];
  if (null == n || null == n[u]) return !1;
  let r = {
    ...n
  };
  clearTimeout(r[u]), delete r[u], g[t] = r
}

function _() {
  g = {}
}
class v extends r.default.Store {
  getTypingUsers(e) {
    return T(e)
  }
  isTyping(e, t) {
    return null != T(e)[t]
  }
}
v.displayName = "TypingStore";
var A = new v(a.default, {
  TYPING_START: h,
  TYPING_STOP: E,
  TYPING_START_LOCAL: function(e) {
    let {
      channelId: t
    } = e, u = o.default.getId();
    if (null == u || t === f.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
    null != n && n.channelId !== t && (null != n.timeout && clearTimeout(n.timeout), n = null);
    let r = Date.now(),
      i = .8 * c;
    if (null != n && (null != n.timeout || n.prevSend + i > r)) return !1;
    let g = null == n || n.prevSend > r - 2 * i ? m : 0,
      E = setTimeout(() => {
        if (null != n && n.channelId === t && u === o.default.getId() && null != n.timeout) n.timeout = null, !(function(e) {
          let t = T(e);
          return t === S ? 0 : Object.keys(t).length
        }(t) > 5) && l.default.post({
          url: s.Endpoints.TYPING(t),
          oldFormErrors: !0
        }).then(e => {
          if (200 === e.status) {
            var u, n;
            let r = null !== (u = e.body.message_send_cooldown_ms) && void 0 !== u ? u : 0,
              l = null !== (n = e.body.thread_create_cooldown_ms) && void 0 !== n ? n : 0;
            r > 0 && a.default.dispatch({
              type: "SLOWMODE_SET_COOLDOWN",
              channelId: t,
              slowmodeType: d.SlowmodeType.SendMessage,
              cooldownMs: r
            }), l > 0 && a.default.dispatch({
              type: "SLOWMODE_SET_COOLDOWN",
              channelId: t,
              slowmodeType: d.SlowmodeType.CreateThread,
              cooldownMs: l
            })
          }
        })
      }, g);
    return n = {
      channelId: t,
      timeout: E,
      prevSend: r
    }, h({
      channelId: t,
      userId: u
    })
  },
  TYPING_STOP_LOCAL: function(e) {
    let {
      channelId: t
    } = e, u = o.default.getId();
    return null != u && null != n && n.channelId === t && null != n.timeout && (clearTimeout(n.timeout), n = null, E({
      channelId: t,
      userId: u
    }))
  },
  CONNECTION_OPEN: _,
  OVERLAY_INITIALIZE: _,
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t,
      message: {
        author: u
      },
      optimistic: r
    } = e;
    return r && ! function(e) {
      if (null == n || n.channelId !== e) return;
      null != n.timeout && clearTimeout(n.timeout), n = null
    }(t), null != u && E({
      channelId: t,
      userId: u.id
    })
  }
})