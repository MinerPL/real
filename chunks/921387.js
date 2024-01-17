"use strict";
n.r(t), n.d(t, {
  FetchState: function() {
    return l
  },
  default: function() {
    return d
  }
});
var s, l, a = n("35092"),
  i = n("913144");
(s = l || (l = {}))[s.NOT_FETCHED = 0] = "NOT_FETCHED", s[s.FETCHING = 1] = "FETCHING", s[s.FETCHED = 2] = "FETCHED", s[s.FAILED = 3] = "FAILED";
let r = {},
  o = {};
class u extends a.default.Store {
  getMediaPostEmbed(e) {
    if (null != e) return r[e]
  }
  getEmbedFetchState(e) {
    var t;
    return null !== (t = o[e]) && void 0 !== t ? t : 0
  }
  getMediaPostEmbeds() {
    return r
  }
}
u.displayName = "MediaPostEmbedStore";
var d = new u(i.default, {
  CONNECTION_OPEN: function() {
    r = {}, o = {}
  },
  MEDIA_POST_EMBED_FETCH: function(e) {
    let {
      threadId: t
    } = e;
    o[t] = 1
  },
  MEDIA_POST_EMBED_FETCH_SUCCESS: function(e) {
    let {
      threadId: t,
      mediaPostEmbed: n
    } = e;
    r = {
      ...r,
      [t]: n
    }, o[t] = 2
  },
  MEDIA_POST_EMBED_FETCH_FAILURE: function(e) {
    let {
      threadId: t
    } = e;
    o[t] = 3
  },
  LOGOUT: function(e) {
    !e.isSwitchingAccount && (r = {}, o = {})
  }
})