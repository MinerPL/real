"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
}), n("222007");
var s = n("446674"),
  i = n("913144");
let r = {
    captionsById: new Map
  },
  a = r,
  o = !1,
  d = null;
class u extends s.default.PersistedStore {
  initialize(e) {
    a = null != e ? {
      captionsById: new Map(e.captionsById)
    } : r
  }
  getState() {
    return a
  }
  getCaptionsForEmojiById(e) {
    var t;
    let {
      emojiId: n
    } = e;
    return null !== (t = a.captionsById.get(n)) && void 0 !== t ? t : []
  }
  getIsFetching() {
    return o
  }
  getEmojiCaptionsTTL() {
    return d
  }
  hasPersistedState() {
    return a.captionsById.size > 0
  }
  clear() {
    a = r, o = !1, d = null
  }
}
u.displayName = "EmojiCaptionsStore", u.persistKey = "EmojiCaptionsStore";
var l = new u(i.default, {
  LOGOUT: function() {
    a = r, o = !1, d = null
  },
  EMOJI_CAPTIONS_FETCH: function(e) {
    let {} = e;
    !o && (o = !0)
  },
  EMOJI_CAPTIONS_FETCH_SUCCESS: function(e) {
    let {
      emojiCaptions: t
    } = e;
    a.captionsById = new Map(Object.entries(t)), o = !1, d = Date.now() + 216e5
  },
  EMOJI_CAPTIONS_FETCH_ERROR: function(e) {
    let {
      is4XXError: t
    } = e;
    o = !1;
    d = Date.now() + 6e4 * (t ? 10 : 1)
  },
  POST_CONNECTION_OPEN: function(e) {
    let {} = e;
    o = !1
  }
})