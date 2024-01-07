            "use strict";
            a.r(t), a.d(t, {
                updateGuildSelfMember: function() {
                    return i
                }
            }), a("702976");
            var r = a("872717"),
                n = a("913144"),
                o = a("479756"),
                l = a("38654"),
                s = a("49111");

            function i(e, t) {
                let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (l.default.isFullServerPreview(e)) {
                    (0, o.updateImpersonatedData)(e, {
                        memberOptions: t
                    });
                    return
                }
                return n.default.dispatch({
                    type: "GUILD_MEMBER_UPDATE_LOCAL",
                    guildId: e,
                    roles: t.roles,
                    flags: t.flags
                }), r.default.patch({
                    url: s.Endpoints.SET_GUILD_MEMBER(e),
                    body: t,
                    oldFormErrors: !!a || void 0
                })
            }