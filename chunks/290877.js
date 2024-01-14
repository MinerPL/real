"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("446674"),
  s = n("913144");
let l = {
  matureAgree: !1,
  muted: !0
};
class i extends a.default.Store {
  get didMatureAgree() {
    return l.matureAgree
  }
  get isDirectoryMuted() {
    return l.muted
  }
}
i.displayName = "ApplicationStoreSettingsStore";
var r = new i(s.default, {
  APPLICATION_STORE_MATURE_AGREE: function() {
    l.matureAgree = !0
  },
  APPLICATION_STORE_DIRECTORY_MUTE: function() {
    l.muted = !0
  },
  APPLICATION_STORE_DIRECTORY_UNMUTE: function() {
    l.muted = !1
  }
})