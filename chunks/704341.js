            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("393414"),
                a = n("49111"),
                l = {
                    onOpenHubInvite(e) {
                        let {
                            guild: t
                        } = e;
                        null != t && (0, i.transitionTo)(a.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB(t.id, e.code))
                    }
                }