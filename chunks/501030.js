"use strict";
n.r(t), n.d(t, {
  getDirectoryEntryBroadcastInfo: function() {
    return s
  }
});
var l = n("872717"),
  a = n("49111");
async function s(e, t, n) {
  let s = await l.default.get({
    url: a.Endpoints.DIRECTORY_ENTRIES_BROADCAST_INFO(e),
    query: {
      type: t,
      entity_id: n
    }
  });
  return s.body
}