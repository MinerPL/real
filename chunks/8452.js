            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("446674"),
                s = n("913144"),
                i = n("957255"),
                l = n("49111");
            class r extends a.default.Store {
                initialize() {
                    this.waitFor(i.default), this.syncWith([i.default], l.NOOP)
                }
                channelNoticePredicate(e, t) {
                    return Date.now() - t >= l.CHANNEL_NOTICE_SHOW_DELAY && i.default.can(l.Permissions.MANAGE_GUILD, e)
                }
            }
            r.displayName = "GuildBoostingNoticeStore";
            var o = new r(s.default)