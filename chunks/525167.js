"use strict";
i.r(t), i.d(t, {
  default: function() {
    return a
  }
});
var l = i("49111");

function a(e, t) {
  let i;
  let a = window.GLOBAL_ENV.CDN_HOST,
    n = window.GLOBAL_ENV.API_ENDPOINT;
  return i = null != a ? "".concat(location.protocol, "//").concat(a, "/app-assets/").concat(e, "/store/").concat(t, ".mp4") : "".concat(location.protocol).concat(n).concat(l.Endpoints.STORE_ASSET(e, t, "mp4"))
}