"use strict";
n.r(t), n.d(t, {
  useTopCommands: function() {
    return o
  },
  useTopRealCommands: function() {
    return r
  }
});
var i = n("884691"),
  l = n("446674"),
  a = n("872173"),
  s = n("342564");

function o(e) {
  i.useEffect(() => {
    a.FrecencyUserSettingsActionCreators.loadIfNecessary()
  }, []);
  let t = (0, l.useStateFromStores)([s.default], () => s.default.getTopCommandsWithoutLoadingLatest()),
    n = i.useMemo(() => (0, s.getFilteredTopCommands)(t, e), [t, e]);
  return n
}

function r(e) {
  i.useEffect(() => {
    a.FrecencyUserSettingsActionCreators.loadIfNecessary()
  }, []);
  let t = (0, l.useStateFromStores)([s.default], () => s.default.getTopCommandsWithoutLoadingLatest()),
    n = i.useMemo(() => {
      let n = (0, s.getFilteredTopCommands)(t, e);
      return (0, s.getTopRealCommands)(n)
    }, [t, e]);
  return n
}