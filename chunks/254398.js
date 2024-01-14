"use strict";
r.r(t), r.d(t, {
  makeTenorProxyURL: function() {
    return a
  }
}), r("511434"), r("313619"), r("654714"), r("287168"), r("956660"), r("222007"), r("70102");
var n = r("49111");
let i = /^\/([a-zA-Z0-9-_]+\/[a-z0-9-]+\.gif)$/;

function a(e) {
  let t = new URL("".concat(window.location.protocol).concat(e)),
    {
      ASSET_ENDPOINT: r
    } = window.GLOBAL_ENV;
  if (null == t.pathname.match(i)) throw Error("Unexpected Tenor GIF path.");
  let a = "".concat(n.Endpoints.TENOR_ASSET_PATH).concat(t.pathname);
  return "".concat(location.protocol).concat(r).concat(a)
}