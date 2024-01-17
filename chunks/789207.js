"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var a = n("872717"),
  l = n("913144"),
  s = n("49111"),
  i = {
    setGuildFilter(e) {
      let {
        guildFilter: t,
        roleFilter: n,
        everyoneFilter: a
      } = e;
      l.default.dispatch({
        type: "SET_RECENT_MENTIONS_FILTER",
        guildFilter: t,
        roleFilter: n,
        everyoneFilter: a
      })
    },
    clearMentions() {
      l.default.dispatch({
        type: "CLEAR_MENTIONS"
      })
    },
    truncateMentions(e) {
      l.default.dispatch({
        type: "TRUNCATE_MENTIONS",
        size: e
      })
    },
    fetchRecentMentions(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.MAX_MENTIONS_PER_FETCH,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
        r = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
      l.default.dispatch({
        type: "LOAD_RECENT_MENTIONS",
        guildId: n
      }), a.default.get({
        url: s.Endpoints.MENTIONS,
        query: {
          before: e,
          limit: t,
          guild_id: n,
          roles: i,
          everyone: r
        },
        retries: 2,
        oldFormErrors: !0
      }).then(t => {
        let {
          body: n
        } = t;
        l.default.dispatch({
          type: "LOAD_RECENT_MENTIONS_SUCCESS",
          messages: n,
          isAfter: null != e,
          hasMoreAfter: n.length >= s.MAX_MENTIONS_PER_FETCH
        })
      }, () => {
        l.default.dispatch({
          type: "LOAD_RECENT_MENTIONS_FAILURE"
        })
      })
    },
    deleteRecentMention(e) {
      a.default.delete({
        url: s.Endpoints.MENTIONS_MESSAGE_ID(e),
        retries: 2,
        oldFormErrors: !0
      }), l.default.dispatch({
        type: "RECENT_MENTION_DELETE",
        id: e
      })
    },
    setRecentMentionsStale() {
      l.default.dispatch({
        type: "SET_RECENT_MENTIONS_STALE"
      })
    }
  }