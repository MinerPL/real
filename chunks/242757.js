            "use strict";
            n.r(t), n.d(t, {
                canViewInviteModal: function() {
                    return s
                }
            });
            var i = n("49111");

            function s(e, t, n, s) {
                let a = null != n ? n : t,
                    l = null != a && e.can(i.Permissions.CREATE_INSTANT_INVITE, a);
                return l || null != t && null != t.vanityURLCode || (null == s ? void 0 : s.invite_code) != null
            }