            "use strict";
            n.r(t), n.d(t, {
                isFirstMessageIdInMediaPost: function() {
                    return s
                }
            }), n("65597");
            var a = n("42203");

            function s(e, t) {
                if (e !== t) return !1;
                let n = a.default.getChannel(t);
                if (null == n || !n.isForumPost()) return !1;
                let s = a.default.getChannel(n.parent_id);
                return (null == s ? void 0 : s.isMediaChannel()) === !0
            }