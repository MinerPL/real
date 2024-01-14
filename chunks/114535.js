"use strict";
n.r(t), n.d(t, {
  useCurrentChangelog: function() {
    return u
  }
});
var l = n("884691"),
  a = n("65597"),
  s = n("776156"),
  r = n("915639"),
  o = n("34966"),
  i = n("234222");

function c(e, t) {
  let {
    changelog: n,
    loadState: r,
    defaultChangelog: c,
    defaultLoadState: u
  } = (0, a.useStateFromStoresObject)([o.default], () => {
    let n = null != e ? o.default.getChangelog(e, t) : null,
      l = null != e ? o.default.getChangelog(e, "en-US") : null,
      a = null != e && o.default.getChangelogLoadStatus(e, "en-US"),
      s = null != e && o.default.getChangelogLoadStatus(e, t);
    return {
      changelog: n,
      loadState: s,
      defaultChangelog: l,
      defaultLoadState: a
    }
  }, [e, t]);
  return (l.useEffect(() => {
    null != e && null == n && r === i.ChangelogLoadState.NOT_LOADED && s.default.fetchChangelog(e, t)
  }, [e, n, r, t]), null == e) ? {
    id: e,
    changelog: null,
    loaded: !1
  } : null == n && r === i.ChangelogLoadState.LOADED_FAILURE ? {
    id: e,
    changelog: c,
    loaded: u !== i.ChangelogLoadState.NOT_LOADED
  } : {
    id: e,
    changelog: n,
    loaded: r !== i.ChangelogLoadState.NOT_LOADED
  }
}

function u() {
  let e = (0, a.default)([r.default], () => r.default.locale),
    t = (0, a.default)([o.default], () => o.default.latestChangelogId()),
    n = (0, a.default)([o.default], () => o.default.getConfig()),
    l = null != n && 0 === Object.keys(n).length,
    s = null != n && Object.keys(n).length > 0 && null == t,
    i = (0, a.default)([o.default], () => o.default.overrideId()),
    {
      changelog: u,
      loaded: d
    } = c(t, e),
    {
      changelog: h,
      loaded: p
    } = c(i, e);
  return null == i || null == h && p ? {
    id: t,
    changelog: u,
    loaded: !!l || d,
    clientTooOld: s
  } : {
    id: i,
    changelog: h,
    loaded: p,
    clientTooOld: !1
  }
}