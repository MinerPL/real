            "use strict";
            l.r(t), l.d(t, {
                canAttachClipsToChannel: function() {
                    return s
                }
            });
            var a = l("42203"),
                n = l("957255"),
                i = l("49111");

            function s(e) {
                let t = a.default.getChannel(e),
                    l = null == t ? void 0 : t.isPrivate(),
                    s = null == t ? void 0 : t.isForumChannel();
                return l || n.default.can(i.Permissions.ATTACH_FILES, t) && n.default.can(i.Permissions.SEND_MESSAGES, t) && !s
            }