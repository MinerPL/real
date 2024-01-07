            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var n = a("65597"),
                l = a("42203"),
                s = a("724210");

            function i(e) {
                let t = (0, n.default)([l.default], () => {
                    let t = l.default.getChannel(e);
                    return (null == t ? void 0 : t.parent_id) != null && t.isForumPost() ? l.default.getChannel(null == t ? void 0 : t.parent_id) : null
                });
                return (null == t ? void 0 : t.hasFlag(s.ChannelFlags.HIDE_MEDIA_DOWNLOAD_OPTIONS)) === !0
            }