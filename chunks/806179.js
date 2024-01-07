            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983"),
                l = n("884691"),
                u = n("77078"),
                o = n("244201"),
                r = n("401642"),
                a = n("599110"),
                s = n("49111"),
                d = n("782340");

            function c(e, t, n) {
                let c = l.useContext(a.AnalyticsContext),
                    E = (0, o.useWindowDispatch)();
                return (0, i.jsx)(u.MenuItem, {
                    id: "user-profile",
                    label: d.default.Messages.PROFILE,
                    action: () => {
                        (0, r.openUserProfileModal)({
                            userId: e,
                            guildId: null != t ? t : void 0,
                            channelId: null != n ? n : void 0,
                            analyticsLocation: c.location
                        }), E.dispatch(s.ComponentActions.POPOUT_CLOSE)
                    }
                })
            }