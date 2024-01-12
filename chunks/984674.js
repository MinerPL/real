            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var s = n("660478"),
                i = n("299039");

            function r(e) {
                if (null == e.threadMetadata) return 0;
                let t = 6e4 * e.threadMetadata.autoArchiveDuration;
                return function(e) {
                    var t;
                    if (null == e.threadMetadata) return 0;
                    let n = null !== (t = s.default.lastMessageId(e.id)) && void 0 !== t ? t : e.id,
                        r = i.default.extractTimestamp(n),
                        a = null != e.threadMetadata.archiveTimestamp ? new Date(e.threadMetadata.archiveTimestamp).getTime() : 0;
                    return Math.max(r, a)
                }(e) + t
            }