"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var s = n("446674"),
  l = n("913144");
let a = {
  matureAgree: !1,
  muted: !0
};
class i extends s.default.Store {
  get didMatureAgree() {
    return a.matureAgree
  }
  get isDirectoryMuted() {
    return a.muted
  }
}
i.displayName = "ApplicationStoreSettingsStore";
var r = new i(l.default, {
  APPLICATION_STORE_MATURE_AGREE: function() {
    a.matureAgree = !0
  },
  APPLICATION_STORE_DIRECTORY_MUTE: function() {
    a.muted = !0
  },
  APPLICATION_STORE_DIRECTORY_UNMUTE: function() {
    a.muted = !1
  }
})