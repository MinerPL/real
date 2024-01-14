"use strict";
l.r(t), l.d(t, {
  getDirectoryEntryBroadcastInfo: function() {
    return s
  }
});
var n = l("872717"),
  a = l("49111");
async function s(e, t, l) {
  let s = await n.default.get({
    url: a.Endpoints.DIRECTORY_ENTRIES_BROADCAST_INFO(e),
    query: {
      type: t,
      entity_id: l
    }
  });
  return s.body
}