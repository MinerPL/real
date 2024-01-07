            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("151426"),
                i = n("120363"),
                r = n("708402"),
                o = n("155207"),
                u = n("645266"),
                d = n("782340");

            function c(e) {
                let {
                    guild: t,
                    selected: n
                } = e, c = a.useCallback(() => {
                    (0, u.goToMemberSafetyDashboard)(t.id)
                }, [t.id]), f = (0, i.useChannelListUpsellLocationTrackerRef)(t.id, s.DismissibleContent.MEMBERS_LAUNCH_UPSELL);
                return (0, l.jsx)("div", {
                    ref: f,
                    children: (0, l.jsx)(r.default, {
                        renderIcon: e => (0, l.jsx)(o.default, {
                            className: e
                        }),
                        text: d.default.Messages.MEMBER_SAFETY_CHANNEL_TITLE,
                        selected: n,
                        onClick: c
                    })
                })
            }