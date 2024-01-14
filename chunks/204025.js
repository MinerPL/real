"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("37983");
n("884691");
var s = n("913144"),
  i = n("316272"),
  l = n("269936"),
  r = n("383294"),
  o = n("49111");
n("361430");
let u = (0, l.makeLazy)({
    createPromise: () => n.el("93116").then(n.bind(n, "93116")),
    webpackId: "93116",
    name: "PopoutWindowChannelCall"
  }),
  d = (0, l.makeLazy)({
    createPromise: () => n.el("846679").then(n.bind(n, "846679")),
    webpackId: "846679",
    name: "PopoutWindowStageChannelCall"
  }),
  c = (0, l.makeLazy)({
    createPromise: () => n.el("620635").then(n.bind(n, "620635")),
    webpackId: "620635",
    name: "PopoutWindowRTCDebug"
  });
class E extends i.default {
  _initialize() {
    s.default.subscribe("CHANNEL_CALL_POPOUT_WINDOW_OPEN", this.handleOpenChannelCallPopout), s.default.subscribe("RTC_DEBUG_POPOUT_WINDOW_OPEN", this.handleOpenRTCDebugPopout)
  }
  _terminate() {
    s.default.unsubscribe("CHANNEL_CALL_POPOUT_WINDOW_OPEN", this.handleOpenChannelCallPopout), s.default.unsubscribe("RTC_DEBUG_POPOUT_WINDOW_OPEN", this.handleOpenRTCDebugPopout)
  }
  handleOpenChannelCallPopout(e) {
    let {
      channel: t
    } = e;
    r.open(o.PopoutWindowKeys.CHANNEL_CALL_POPOUT, e => t.isGuildStageVoice() ? (0, a.jsx)(d, {
      windowKey: e,
      channelId: t.id
    }) : (0, a.jsx)(u, {
      windowKey: e,
      channelId: t.id
    }), {
      defaultWidth: 854,
      defaultHeight: 480
    })
  }
  handleOpenRTCDebugPopout() {
    r.open(o.PopoutWindowKeys.RTC_DEBUG_POPOUT, e => (0, a.jsx)(c, {
      windowKey: e
    }), {
      defaultWidth: 854,
      defaultHeight: 480
    })
  }
}
var f = new E