"use strict";
l.r(t), l.d(t, {
  default: function() {
    return f
  }
});
var n = l("570277"),
  a = l.n(n),
  s = l("229353"),
  r = l("49671"),
  i = l("42887"),
  u = l("773336"),
  o = l("706530"),
  d = l("353927"),
  c = l("782340");

function f() {
  if (!i.default.supports(d.Features.SOUNDSHARE)) return s.GO_LIVE_SCREENSHARE_NO_SOUND;
  if ((0, u.isWindows)() && !a.satisfies(null === r.default || void 0 === r.default ? void 0 : r.default.os.release, o.WINDOWS_SOUNDSHARE_VERSION)) return c.default.Messages.GO_LIVE_SCREENSHARE_UPDATE_WINDOWS_FOR_SOUNDSHARE;
  if ((0, u.isMac)() && !a.satisfies(null === r.default || void 0 === r.default ? void 0 : r.default.os.release, o.DARWIN_SOUNDSHARE_VERSION)) return c.default.Messages.GO_LIVE_SCREENSHARE_UPDATE_MACOS_FOR_SOUNDSHARE;
  return null
}