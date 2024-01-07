            "use strict";
            s.r(t), s.d(t, {
                isUserTeamAdministrator: function() {
                    return n
                }
            });
            var a = s("162948");

            function n(e, t) {
                var s, n, l;
                if (t.owner_user_id === e) return !0;
                return (null === (n = t, l = e, s = n.members.find(e => e.user.id === l)) || void 0 === s ? void 0 : s.role) === a.TeamMemberRoles.ADMIN
            }