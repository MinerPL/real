"use strict";
n.r(t), n.d(t, {
  getBuildPlatform: function() {
    return o
  }
}), n("70102");
var i, r, s = n("773336"),
  a = n("49111");

function o() {
  switch ((0, s.getPlatform)()) {
    case s.PlatformTypes.WINDOWS:
      let e = "x86",
        t = window.DiscordNative;
      if (null != t && (e = window.DiscordNative.os.arch), "x86" === e || "ia32" === e) return a.BuildPlatformTypes.WIN32;
      return a.BuildPlatformTypes.WIN64;
    case s.PlatformTypes.OSX:
      return a.BuildPlatformTypes.MACOS;
    case s.PlatformTypes.LINUX:
      return a.BuildPlatformTypes.LINUX;
    default:
      throw Error("Unsupported build type")
  }
}(r = i || (i = {})).X86 = "x86", r.IA32 = "ia32"