            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return d
                }
            });
            var l = t("660478"),
                i = t("299039");

            function d(e) {
                if (null == e.threadMetadata) return 0;
                let n = 6e4 * e.threadMetadata.autoArchiveDuration;
                return function(e) {
                    var n;
                    if (null == e.threadMetadata) return 0;
                    let t = null !== (n = l.default.lastMessageId(e.id)) && void 0 !== n ? n : e.id,
                        d = i.default.extractTimestamp(t),
                        u = null != e.threadMetadata.archiveTimestamp ? new Date(e.threadMetadata.archiveTimestamp).getTime() : 0;
                    return Math.max(d, u)
                }(e) + n
            }