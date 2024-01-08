            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i, a, l = n("872717"),
                s = n("782340");
            (i || (i = {})).ASSET_SIZE = "BINARY_TYPE_MAX_SIZE", (a || (a = {})).ASSET = "asset";
            class r extends l.default.V8APIError {
                constructor(e, t) {
                    var n;
                    super(e, t, s.default.Messages.VIDEO_BACKGROUND_ERROR_UPLOAD);
                    let i = this.getFieldErrors("asset");
                    null != i && (null === (n = i[0]) || void 0 === n ? void 0 : n.code) === "BINARY_TYPE_MAX_SIZE" && (this.message = s.default.Messages.VIDEO_BACKGROUND_ERROR_UPLOAD_FILE_SIZE)
                }
            }
            var u = r