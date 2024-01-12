            "use strict";
            n.r(t), n.d(t, {
                canViewInviteModal: function() {
                    return a
                }
            });
            var s = n("49111");

            function a(e, t, n, a) {
                let l = null != n ? n : t,
                    i = null != l && e.can(s.Permissions.CREATE_INSTANT_INVITE, l);
                return i || null != t && null != t.vanityURLCode || (null == a ? void 0 : a.invite_code) != null
            }