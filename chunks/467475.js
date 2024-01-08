            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("65597"),
                i = n("42203"),
                a = n("724210");

            function o(e) {
                let t = (0, r.default)([i.default], () => {
                    let t = i.default.getChannel(e);
                    return (null == t ? void 0 : t.parent_id) != null && t.isForumPost() ? i.default.getChannel(null == t ? void 0 : t.parent_id) : null
                });
                return (null == t ? void 0 : t.hasFlag(a.ChannelFlags.HIDE_MEDIA_DOWNLOAD_OPTIONS)) === !0
            }