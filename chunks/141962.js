"use strict";
i.r(t), i.d(t, {
  default: function() {
    return c
  }
}), i("222007");
var n = i("37983");
i("884691");
var l = i("77078"),
  a = i("913144"),
  u = i("135230"),
  r = i("550766"),
  d = i("648456"),
  o = i("782340");
class s extends d.default {
  showErrorModal(e) {
    let {
      code: t,
      message: i
    } = e;
    (0, l.openModalLazy)(async () => e => (0, n.jsx)(u.default, {
      title: o.default.Messages.EMBEDDED_ACTIVITIES_ERROR_TITLE.format({
        code: t
      }),
      body: i,
      ...e
    }))
  }
  showLaunchErrorModal(e) {
    (0, l.openModalLazy)(async () => t => (0, n.jsx)(u.default, {
      title: o.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAILURE,
      body: e,
      ...t
    }))
  }
  leaveActivity(e) {
    let {
      channelId: t,
      applicationId: i
    } = e;
    a.default.wait(() => (0, r.stopEmbeddedActivity)({
      channelId: t,
      applicationId: i
    }))
  }
  constructor(...e) {
    super(...e), this.handleRPCDisconnect = e => {
      let {
        reason: t,
        application: i
      } = e;
      this.superHandleRPCDisconnect({
        reason: t,
        application: i
      })
    }
  }
}
var c = new s