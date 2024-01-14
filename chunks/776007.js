"use strict";
n.r(t), n.d(t, {
  useSortApplicationsViaFrecency: function() {
    return s
  }
}), n("222007");
var l = n("884691"),
  i = n("446674"),
  r = n("872173"),
  o = n("605393");

function s(e) {
  l.useEffect(() => {
    r.FrecencyUserSettingsActionCreators.loadIfNecessary()
  }, []);
  let t = (0, i.useStateFromStores)([o.default], () => o.default.getApplicationFrecencyWithoutLoadingLatest()),
    n = l.useMemo(() => {
      let n = [...e];
      return n.sort((e, n) => {
        var l, i;
        let r = (null !== (l = t.getScore(n.id)) && void 0 !== l ? l : 0) - (null !== (i = t.getScore(e.id)) && void 0 !== i ? i : 0);
        return 0 !== r ? r : e.name.localeCompare(n.name)
      }), n
    }, [e, t]);
  return n
}