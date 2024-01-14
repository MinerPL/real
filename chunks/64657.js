"use strict";
n.r(t), n.d(t, {
  useHubUnreadCount: function() {
    return o
  }
});
var l = n("249654"),
  a = n("446674"),
  s = n("209397"),
  i = n("513688"),
  r = n("660478");

function o(e) {
  return (0, a.useStateFromStores)([s.default, r.default], () => {
    var t;
    if (null == e) return 0;
    let n = r.default.ackMessageId(e.id);
    if (null == n) return 0;
    let a = Object.values(null !== (t = s.default.getDirectoryEntries(e.id)) && void 0 !== t ? t : {}).filter(e => {
      let t = l.default.fromTimestamp(new Date(e.createdAt).getTime());
      return (0, i.hasMinimumMemberCount)(e) && t > n
    });
    return Math.min(i.MAX_CATEGORY_SERVERS, a.length)
  }, [e])
}