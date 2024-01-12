            "use strict";
            n.r(t), n.d(t, {
                canViewInviteModal: function() {
                    return a
                }
            });
            var l = n("49111");

            function a(e, t, n, a) {
                let s = null != n ? n : t,
                    i = null != s && e.can(l.Permissions.CREATE_INSTANT_INVITE, s);
                return i || null != t && null != t.vanityURLCode || (null == a ? void 0 : a.invite_code) != null
            }