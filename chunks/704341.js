            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var s = n("393414"),
                i = n("49111"),
                r = {
                    onOpenHubInvite(e) {
                        let {
                            guild: t
                        } = e;
                        null != t && (0, s.transitionTo)(i.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB(t.id, e.code))
                    }
                }