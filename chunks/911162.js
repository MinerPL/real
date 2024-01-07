            "use strict";
            n.r(t), n.d(t, {
                isFirstMessageIdInMediaPost: function() {
                    return a
                }
            }), n("65597");
            var s = n("42203");

            function a(e, t) {
                if (e !== t) return !1;
                let n = s.default.getChannel(t);
                if (null == n || !n.isForumPost()) return !1;
                let a = s.default.getChannel(n.parent_id);
                return (null == a ? void 0 : a.isMediaChannel()) === !0
            }