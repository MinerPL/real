"use strict";
let i, r;
n.r(t), n.d(t, {
  default: function() {
    return l
  },
  setVideoToggleAnalyticsParams: function() {
    return u
  }
});
var s = n("599110"),
  a = n("49111"),
  o = n("353927");

function l(e, t, n) {
  s.default.track(a.AnalyticEvents.VIDEO_TOGGLED, {
    video_toggle_reason: t,
    toggled_user_id: e,
    rtc_connection_id: null == i ? void 0 : i(),
    media_session_id: null == r ? void 0 : r(),
    video_health_manager_window_length: null,
    video_health_manager_poor_fps_ratio: null,
    video_health_manager_fps_threshold: null,
    is_video_shown: n,
    video_health_manager_backoff_time_seconds: null
  })
}

function u(e, t) {
  i = e, r = t
}