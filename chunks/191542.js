"use strict";
let l;
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var i = n("446674"),
  r = n("872717"),
  a = n("913144"),
  s = n("271938"),
  o = n("401848"),
  u = n("49111"),
  d = n("724210");
let c = {},
  f = Object.freeze({});

function h(e) {
  var t;
  return null !== (t = c[e]) && void 0 !== t ? t : f
}

function g(e) {
  var t, n;
  let {
    channelId: l,
    userId: i
  } = e, r = {
    ...h(l)
  };
  clearTimeout(r[i]), r[i] = (t = l, n = i, setTimeout(() => {
    a.default.dispatch({
      type: "TYPING_STOP",
      channelId: t,
      userId: n
    })
  }, 1e4)), c[l] = r
}

function p(e) {
  let {
    channelId: t,
    userId: n
  } = e, l = c[t];
  if (null == l || null == l[n]) return !1;
  let i = {
    ...l
  };
  clearTimeout(i[n]), delete i[n], c[t] = i
}

function m() {
  c = {}
}
class v extends i.default.Store {
  getTypingUsers(e) {
    return h(e)
  }
  isTyping(e, t) {
    return null != h(e)[t]
  }
}
v.displayName = "TypingStore";
var I = new v(a.default, {
  TYPING_START: g,
  TYPING_STOP: p,
  TYPING_START_LOCAL: function(e) {
    let {
      channelId: t
    } = e, n = s.default.getId();
    if (null == n || t === d.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
    null != l && l.channelId !== t && (null != l.timeout && clearTimeout(l.timeout), l = null);
    let i = Date.now(),
      c = 8e3;
    if (null != l && (null != l.timeout || l.prevSend + c > i)) return !1;
    let p = null == l || l.prevSend > i - 2 * c ? 1500 : 0,
      m = setTimeout(() => {
        if (null != l && l.channelId === t && n === s.default.getId() && null != l.timeout) l.timeout = null, !(function(e) {
          let t = h(e);
          return t === f ? 0 : Object.keys(t).length
        }(t) > 5) && r.default.post({
          url: u.Endpoints.TYPING(t),
          oldFormErrors: !0
        }).then(e => {
          if (200 === e.status) {
            var n, l;
            let i = null !== (n = e.body.message_send_cooldown_ms) && void 0 !== n ? n : 0,
              r = null !== (l = e.body.thread_create_cooldown_ms) && void 0 !== l ? l : 0;
            i > 0 && a.default.dispatch({
              type: "SLOWMODE_SET_COOLDOWN",
              channelId: t,
              slowmodeType: o.SlowmodeType.SendMessage,
              cooldownMs: i
            }), r > 0 && a.default.dispatch({
              type: "SLOWMODE_SET_COOLDOWN",
              channelId: t,
              slowmodeType: o.SlowmodeType.CreateThread,
              cooldownMs: r
            })
          }
        })
      }, p);
    return l = {
      channelId: t,
      timeout: m,
      prevSend: i
    }, g({
      channelId: t,
      userId: n
    })
  },
  TYPING_STOP_LOCAL: function(e) {
    let {
      channelId: t
    } = e, n = s.default.getId();
    return null != n && null != l && l.channelId === t && null != l.timeout && (clearTimeout(l.timeout), l = null, p({
      channelId: t,
      userId: n
    }))
  },
  CONNECTION_OPEN: m,
  OVERLAY_INITIALIZE: m,
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
    }(t), null != n && p({
      channelId: t,
      userId: n.id
    })
  }
})