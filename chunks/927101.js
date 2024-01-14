"use strict";
n.r(t), n.d(t, {
  useMultiAccountUsers: function() {
    return o
  }
});
var a = n("884691"),
  s = n("446674"),
  i = n("913144"),
  l = n("694787"),
  r = n("770032");

function o() {
  let e = (0, s.useStateFromStoresObject)([r.default], () => ({
    isLoading: r.default.getIsValidatingUsers(),
    multiAccountUsers: r.default.getUsers()
  }));
  return a.useEffect(() => {
    i.default.wait(() => {
      l.validateMultiAccountTokens()
    })
  }, []), e
}