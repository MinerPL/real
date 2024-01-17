"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("222007"), n("424973");
var l = n("884691"),
  i = n("446674"),
  r = n("721698"),
  o = n("349503"),
  s = n("718517"),
  a = n("482626");

function u(e) {
  let {
    section: t,
    commandsByActiveSection: n
  } = e, [u, d] = l.useState(a.CommandListSortOrder.ALPHABETICAL), {
    discoverableApplication: c,
    fetching: f
  } = (0, i.useStateFromStoresObject)([o.default], () => {
    let e = t.id,
      n = o.default.getApplication(e),
      l = !o.default.isInvalidApplication(e),
      i = l && o.default.isFetching(e);
    return {
      discoverableApplication: n,
      fetching: i
    }
  }), p = l.useMemo(() => {
    var e, l;
    return null !== (l = null === (e = n.find(e => e.section.id === t.id)) || void 0 === e ? void 0 : e.data) && void 0 !== l ? l : []
  }, [n, t.id]), {
    popularSortedCommands: m,
    globalPopularCommandIds: h
  } = function(e) {
    let {
      discoverableApplication: t,
      alphabeticalSortedCommands: n
    } = e, i = l.useMemo(() => {
      var e;
      let n = null == t ? void 0 : null === (e = t.directory_entry) || void 0 === e ? void 0 : e.popular_application_command_ids;
      return null != n ? new Set(n) : null
    }, [t]), r = l.useMemo(() => {
      let e = new Map;
      return n.forEach(t => {
        e.set(t.id, t)
      }), e
    }, [n]), o = l.useMemo(() => {
      if (null == i) return n;
      let e = [];
      i.forEach(t => {
        let n = r.get(t);
        null != n && e.push(n)
      });
      let t = n.filter(e => !i.has(e.id));
      return [...e, ...t]
    }, [i, n, r]);
    return {
      globalPopularCommandIds: i,
      popularSortedCommands: o
    }
  }({
    discoverableApplication: c,
    alphabeticalSortedCommands: p
  }), E = null != h && h.size > 0;
  l.useEffect(() => {
    let e = t.id;
    r.getApplication(e, {
      dontRefetchMs: s.default.Millis.DAY
    })
  }, [t.id]), l.useEffect(() => {
    null != h && d(a.CommandListSortOrder.POPULAR)
  }, [h]);
  let S = p;
  switch (u) {
    case a.CommandListSortOrder.POPULAR:
      S = m;
      break;
    case a.CommandListSortOrder.ALPHABETICAL:
      S = p
  }
  return {
    sortOrder: u,
    setSortOrder: d,
    commands: S,
    canSort: E,
    fetching: f
  }
}