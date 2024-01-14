"use strict";

function a() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
    t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    s = window.GLOBAL_ENV.GUILD_TEMPLATE_HOST;
  return "".concat(t ? "".concat(location.protocol) : "", "//").concat(s).concat("/".concat(e))
}
s.r(t), s.d(t, {
  default: function() {
    return a
  }
})