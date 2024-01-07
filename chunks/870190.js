            "use strict";
            s.r(t), s.d(t, {
                canReportMessage: function() {
                    return r
                },
                canDeleteAndReportMessage: function() {
                    return u
                }
            });
            var a = s("42203"),
                n = s("525065"),
                l = s("957255"),
                i = s("697218"),
                d = s("49111");

            function r(e) {
                return null != e && function(e) {
                    if (null == e) return !1;
                    let t = e.id,
                        s = i.default.getCurrentUser();
                    return null != s && s.id !== t && !0 !== e.system && !0
                }(e.author)
            }

            function u(e) {
                return null != e && r(e) && function(e) {
                    let t = a.default.getChannel(e);
                    if (null == t) return !1;
                    if (t.type === d.ChannelTypes.DM || t.type === d.ChannelTypes.GROUP_DM) return !0;
                    if (l.default.canWithPartialContext(d.Permissions.MANAGE_MESSAGES, {
                            channelId: e
                        })) {
                        let e = n.default.getMemberCount(t.getGuildId());
                        return null != e && e >= 50
                    }
                    return !1
                }(e.getChannelId())
            }