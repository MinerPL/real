"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var s, i, r = n("872717"),
  a = n("782340");
(s || (s = {})).ASSET_SIZE = "BINARY_TYPE_MAX_SIZE", (i || (i = {})).ASSET = "asset";
class o extends r.default.V8APIError {
  constructor(e, t) {
    var n;
    super(e, t, a.default.Messages.VIDEO_BACKGROUND_ERROR_UPLOAD);
    let s = this.getFieldErrors("asset");
    null != s && (null === (n = s[0]) || void 0 === n ? void 0 : n.code) === "BINARY_TYPE_MAX_SIZE" && (this.message = a.default.Messages.VIDEO_BACKGROUND_ERROR_UPLOAD_FILE_SIZE)
  }
}
var d = o