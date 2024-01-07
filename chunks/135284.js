            "use strict";
            l.r(t), l.d(t, {
                useClipProtocolURL: function() {
                    return i
                }
            });
            var a = l("884691"),
                n = l("49671");

            function i(e) {
                let t = (0, a.useMemo)(() => null == n.default.clips.getClipProtocolURLFromPath ? null : n.default.clips.getClipProtocolURLFromPath(e.filepath), [e.filepath]);
                return t
            }