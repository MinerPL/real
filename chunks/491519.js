            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("26989"),
                l = n("387111"),
                s = n("99795"),
                i = n("782340");

            function r(e, t, n) {
                var r, o;
                if (t.type === s.ParticipantTypes.ACTIVITY) return null !== (o = null == n ? void 0 : n.name) && void 0 !== o ? o : null;
                let u = a.default.isGuestOrLurker(e.guild_id, null === (r = t.user) || void 0 === r ? void 0 : r.id);
                return l.default.getName(e.getGuildId(), e.id, t.user) + (u ? " ".concat(i.default.Messages.GUEST_NAME_SUFFIX) : "")
            }