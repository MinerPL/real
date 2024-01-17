"use strict";
let l;
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var i = n("446674"),
  r = n("872717"),
  a = n("913144"),
  s = n("718517"),
  o = n("271938"),
  u = n("401848"),
  d = n("49111"),
  c = n("724210");
let f = 10 * s.default.Millis.SECOND,
  h = 1.5 * s.default.Millis.SECOND,
  g = {},
  p = Object.freeze({});

function m(e) {
  var t;
  return null !== (t = g[e]) && void 0 !== t ? t : p
}

function v(e) {
  var t, n;
  let {
    channelId: l,
    userId: i
  } = e, r = {
    ...m(l)
  };
  clearTimeout(r[i]), r[i] = (t = l, n = i, setTimeout(() => {
    a.default.dispatch({
      type: "TYPING_STOP",
      channelId: t,
      userId: n
    })
  }, f)), g[l] = r
}

function I(e) {
  let {
    channelId: t,
    userId: n
  } = e, l = g[t];
  if (null == l || null == l[n]) return !1;
  let i = {
    ...l
  };
  clearTimeout(i[n]), delete i[n], g[t] = i
}

function E() {
  g = {}
}
class _ extends i.default.Store {
  getTypingUsers(e) {
    return m(e)
  }
  isTyping(e, t) {
    return null != m(e)[t]
  }
}
_.displayName = "TypingStore";
var T = new _(a.default, {
  TYPING_START: v,
  TYPING_STOP: I,
  TYPING_START_LOCAL: function(e) {
    let {
      channelId: t
    } = e, n = o.default.getId();
    if (null == n || t === c.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
    null != l && l.channelId !== t && (null != l.timeout && clearTimeout(l.timeout), l = null);
    let i = Date.now(),
      s = .8 * f;
    if (null != l && (null != l.timeout || l.prevSend + s > i)) return !1;
    let g = null == l || l.prevSend > i - 2 * s ? h : 0,
      I = setTimeout(() => {
        if (null != l && l.channelId === t && n === o.default.getId() && null != l.timeout) l.timeout = null, !(function(e) {
          let t = m(e);
          return t === p ? 0 : Object.keys(t).length
        }(t) > 5) && r.default.post({
          url: d.Endpoints.TYPING(t),
          oldFormErrors: !0
        }).then(e => {
          if (200 === e.status) {
            var n, l;
            let i = null !== (n = e.body.message_send_cooldown_ms) && void 0 !== n ? n : 0,
              r = null !== (l = e.body.thread_create_cooldown_ms) && void 0 !== l ? l : 0;
            i > 0 && a.default.dispatch({
              type: "SLOWMODE_SET_COOLDOWN",
              channelId: t,
              slowmodeType: u.SlowmodeType.SendMessage,
              cooldownMs: i
            }), r > 0 && a.default.dispatch({
              type: "SLOWMODE_SET_COOLDOWN",
              channelId: t,
              slowmodeType: u.SlowmodeType.CreateThread,
              cooldownMs: r
            })
          }
        })
      }, g);
    return l = {
      channelId: t,
      timeout: I,
      prevSend: i
    }, v({
      channelId: t,
      userId: n
    })
  },
  TYPING_STOP_LOCAL: function(e) {
    let {
      channelId: t
    } = e, n = o.default.getId();
    return null != n && null != l && l.channelId === t && null != l.timeout && (clearTimeout(l.timeout), l = null, I({
      channelId: t,
      userId: n
    }))
  },
  CONNECTION_OPEN: E,
  OVERLAY_INITIALIZE: E,
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t,
      message: {
        author: n
      },
      optimistic: i
    } = e;
    return i && ! function(e) {
      if (null == l || l.channelId !== e) return;
      null != l.timeout && clearTimeout(l.timeout), l = null
    }(t), null != n && I({
      channelId: t,
      userId: n.id
    })
  }
})