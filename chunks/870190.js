            "use strict";
            n.r(t), n.d(t, {
                canReportMessage: function() {
                    return d
                },
                canDeleteAndReportMessage: function() {
                    return u
                }
            });
            var a = n("42203"),
                s = n("525065"),
                l = n("957255"),
                i = n("697218"),
                r = n("49111");

            function d(e) {
                return null != e && function(e) {
                    if (null == e) return !1;
                    let t = e.id,
                        n = i.default.getCurrentUser();
                    return null != n && n.id !== t && !0 !== e.system && !0
                }(e.author)
            }

            function u(e) {
                return null != e && d(e) && function(e) {
                    let t = a.default.getChannel(e);
                    if (null == t) return !1;
                    if (t.type === r.ChannelTypes.DM || t.type === r.ChannelTypes.GROUP_DM) return !0;
                    if (l.default.canWithPartialContext(r.Permissions.MANAGE_MESSAGES, {
                            channelId: e
                        })) {
                        let e = s.default.getMemberCount(t.getGuildId());
                        return null != e && e >= 50
                    }
                    return !1
                }(e.getChannelId())
            }