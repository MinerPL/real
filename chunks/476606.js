"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
}), n("222007");
var l = n("884691"),
  i = n("721698"),
  r = n("718517"),
  o = n("482626");

function s(e) {
  let {
    section: t,
    commandsByActiveSection: n
  } = e, [s, a] = l.useState(o.CommandListSortOrder.ALPHABETICAL), u = l.useMemo(() => {
    var e, l;
    return null !== (l = null === (e = n.find(e => e.section.id === t.id)) || void 0 === e ? void 0 : e.data) && void 0 !== l ? l : []
  }, [n, t.id]), {
    popularSortedCommands: d,
    canSort: c
  } = function(e) {
    let {
      alphabeticalSortedCommands: t
    } = e;
    return l.useMemo(() => {
      let e = !1,
        n = t.map((t, n) => (e = e || null != t.global_popularity_rank, {
          command: t,
          alphabeticalSortIndex: n
        }));
      return e ? (n.sort((e, t) => {
        let n = e.command.global_popularity_rank,
          l = t.command.global_popularity_rank;
        if (null != n && null != l) {
          if (n !== l) return n - l
        } else if (null != n) return -1;
        else if (null != l) return 1;
        return e.alphabeticalSortIndex - t.alphabeticalSortIndex
      }), {
        popularSortedCommands: n.map(e => {
          let {
            command: t
          } = e;
          return t
        }),
        canSort: !0
      }) : {
        popularSortedCommands: t,
        canSort: !1
      }
    }, [t])
  }({
    alphabeticalSortedCommands: u
  });
  l.useEffect(() => {
    let e = t.id;
    i.getApplication(e, {
      dontRefetchMs: r.default.Millis.DAY
    })
  }, [t.id]), l.useEffect(() => {
    c && a(o.CommandListSortOrder.POPULAR)
  }, [c]);
  let f = u;
  switch (s) {
    case o.CommandListSortOrder.POPULAR:
      f = d;
      break;
    case o.CommandListSortOrder.ALPHABETICAL:
      f = u
  }
  return {
    sortOrder: s,
    setSortOrder: a,
    commands: f,
    canSort: c
  }
}