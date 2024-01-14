"use strict";
n.r(t), n.d(t, {
  showAppLauncherPopup: function() {
    return i
  },
  dismissAppLauncherPopup: function() {
    return r
  },
  showAppDetail: function() {
    return o
  },
  dismissAppDetail: function() {
    return s
  }
});
var l = n("913144");

function i() {
  l.default.dispatch({
    type: "APP_LAUNCHER_SHOW_POPUP"
  })
}

function r() {
  l.default.dispatch({
    type: "APP_LAUNCHER_DISMISS_POPUP"
  })
}

function o(e) {
  l.default.dispatch({
    type: "APP_LAUNCHER_SHOW_APP_DETAIL",
    appDetail: e
  })
}

function s() {
  l.default.dispatch({
    type: "APP_LAUNCHER_DISMISS_APP_DETAIL"
  })
}