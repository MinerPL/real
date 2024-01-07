            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return s
                }
            });
            var i, u, r = n("872717"),
                o = n("782340");
            (i || (i = {})).ASSET_SIZE = "BINARY_TYPE_MAX_SIZE", (u || (u = {})).ASSET = "asset";
            class a extends r.default.V8APIError {
                constructor(t, e) {
                    var n;
                    super(t, e, o.default.Messages.VIDEO_BACKGROUND_ERROR_UPLOAD);
                    let i = this.getFieldErrors("asset");
                    null != i && (null === (n = i[0]) || void 0 === n ? void 0 : n.code) === "BINARY_TYPE_MAX_SIZE" && (this.message = o.default.Messages.VIDEO_BACKGROUND_ERROR_UPLOAD_FILE_SIZE)
                }
            }
            var s = a