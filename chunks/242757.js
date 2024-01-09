            "use strict";
            n.r(t), n.d(t, {
                canViewInviteModal: function() {
                    return i
                }
            });
            var a = n("49111");

            function i(e, t, n, i) {
                let s = null != n ? n : t,
                    u = null != s && e.can(a.Permissions.CREATE_INSTANT_INVITE, s);
                return u || null != t && null != t.vanityURLCode || (null == i ? void 0 : i.invite_code) != null
            }