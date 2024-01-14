"use strict";
l.r(e), l.d(e, {
  sync: function() {
    return c
  }
}), l("70102");
var n = l("913144"),
  a = l("605250"),
  i = l("149190"),
  s = l("49111");
let o = new a.default("CloudSync");
class u {
  constructor(t) {
    this.message = t
  }
}
async function c(t, e) {
  let l, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
  n.default.dispatch({
    type: "GAME_CLOUD_SYNC_START",
    applicationId: t,
    branchId: e
  });
  try {
    if ((l = await i.syncApplication(t, e, a)).type === s.CloudSyncResultTypes.CONFLICT) throw n.default.dispatch({
      type: "GAME_CLOUD_SYNC_CONFLICT",
      applicationId: t,
      branchId: e,
      next: l.next,
      remote: l.remote
    }), new u("Conflict in cloud sync.");
    (l.type === s.CloudSyncResultTypes.PULL || l.type === s.CloudSyncResultTypes.PUSH) && o.info("Sync complete", l)
  } catch (l) {
    if (l instanceof u) throw l;
    throw n.default.dispatch({
      type: "GAME_CLOUD_SYNC_ERROR",
      applicationId: t,
      branchId: e
    }), o.error("Failed to cloud sync:", l), Error("Failed to cloud sync.")
  }
  return n.default.dispatch({
    type: "GAME_CLOUD_SYNC_COMPLETE",
    applicationId: t,
    branchId: e
  }), l
}