"use strict";
n.r(t), n.d(t, {
  setUseSystemTheme: function() {
    return i
  }
});
var a = n("913144");

function i(e) {
  a.default.dispatch({
    type: "UNSYNCED_USER_SETTINGS_UPDATE",
    settings: {
      useSystemTheme: e
    }
  })
}