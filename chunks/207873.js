            "use strict";
            n.r(t), n.d(t, {
                validateOpenInviteDialog: function() {
                    return u
                }
            });
            var a = n("242757"),
                s = n("305961"),
                i = n("957255"),
                l = n("861309"),
                r = n("613652"),
                o = n("492249");

            function u() {
                let e = (0, r.default)();
                if (null == e) throw new l.default(o.RPCErrors.INVALID_CHANNEL, "Invalid channel");
                let t = s.default.getGuild(e.getGuildId());
                if (null == t) throw new l.default(o.RPCErrors.INVALID_CHANNEL, "Invalid guild ".concat(e.getGuildId()));
                if (!(0, a.canViewInviteModal)(i.default, t, e)) throw new l.default(o.RPCErrors.INVALID_PERMISSIONS, "No invite permissions for ".concat(e.id));
                return {
                    channel: e,
                    guild: t
                }
            }