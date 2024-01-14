"use strict";
a.r(t), a.d(t, {
  shouldFetchGuildFeed: function() {
    return d
  },
  default: function() {
    return r
  }
});
var l = a("884691"),
  n = a("446674"),
  s = a("713810"),
  i = a("185014");

function d(e, t) {
  let a = i.default.getLastFetchedMillis(e);
  if (!t && null != a && Date.now() - a < 72e5) return !1;
  let {
    loading: l
  } = i.default.getFetchStatus(e);
  return l === i.LoadingStatus.NONE && !0
}

function r(e) {
  let {
    guildId: t,
    highlightedItemData: a
  } = e, {
    loading: r,
    error: u
  } = (0, n.useStateFromStores)([i.default], () => i.default.getFetchStatus(t), [t]), o = l.useCallback(e => {
    let {
      force: l,
      flushSeenItems: n
    } = e;
    async function i() {
      try {
        await (0, s.fetchGuildFeed)({
          guildId: t,
          flushSeenItems: n,
          refresh: !0,
          highlightedItemData: a
        })
      } catch (e) {
        console.error(e)
      }
    }
    d(t, null != l && l) && i()
  }, [t, a]), c = l.useCallback(() => {
    d(t, !0) && e();
    async function e() {
      try {
        await (0, s.fetchGuildFeed)({
          guildId: t,
          refresh: !1
        })
      } catch (e) {
        console.error(e)
      }
    }
  }, [t]);
  return l.useEffect(() => {
    o({
      force: null != a
    })
  }, [o, a]), {
    fetchFresh: o,
    fetchPage: c,
    loading: r,
    error: u
  }
}