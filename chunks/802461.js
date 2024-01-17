"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var s = n("446674"),
  i = n("913144"),
  r = n("718517");
let a = {
    captionsById: new Map
  },
  o = a,
  d = !1,
  u = null;
class l extends s.default.PersistedStore {
  initialize(e) {
    o = null != e ? {
      captionsById: new Map(e.captionsById)
    } : a
  }
  getState() {
    return o
  }
  getCaptionsForEmojiById(e) {
    var t;
    let {
      emojiId: n
    } = e;
    return null !== (t = o.captionsById.get(n)) && void 0 !== t ? t : []
  }
  getIsFetching() {
    return d
  }
  getEmojiCaptionsTTL() {
    return u
  }
  hasPersistedState() {
    return o.captionsById.size > 0
  }
  clear() {
    o = a, d = !1, u = null
  }
}
l.displayName = "EmojiCaptionsStore", l.persistKey = "EmojiCaptionsStore";
var f = new l(i.default, {
  LOGOUT: function() {
    o = a, d = !1, u = null
  },
  EMOJI_CAPTIONS_FETCH: function(e) {
    let {} = e;
    !d && (d = !0)
  },
  EMOJI_CAPTIONS_FETCH_SUCCESS: function(e) {
    let {
      emojiCaptions: t
    } = e;
    o.captionsById = new Map(Object.entries(t)), d = !1, u = Date.now() + 360 * r.default.Millis.MINUTE
  },
  EMOJI_CAPTIONS_FETCH_ERROR: function(e) {
    let {
      is4XXError: t
    } = e;
    d = !1;
    u = Date.now() + (t ? 10 : 1) * r.default.Millis.MINUTE
  },
  POST_CONNECTION_OPEN: function(e) {
    let {} = e;
    d = !1
  }
})