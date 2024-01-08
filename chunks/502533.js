            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("446674"),
                o = n("77078"),
                u = n("255397"),
                a = n("191145"),
                r = n("800762"),
                d = n("49111"),
                s = n("782340");

            function c(e, t) {
                let n = (0, l.useStateFromStores)([a.default], () => e === a.default.getSelectedParticipantId(t), [t, e]),
                    c = (0, l.useStateFromStores)([a.default, r.default], () => {
                        let n = r.default.isInChannel(t, e) && r.default.hasVideo(t),
                            i = a.default.getLayout(t),
                            l = i === d.ChannelLayouts.MINIMUM || i === d.ChannelLayouts.NORMAL;
                        return !n || l
                    }, [t, e]);
                return c ? null : (0, i.jsx)(o.MenuItem, {
                    id: "focus-video",
                    label: n ? s.default.Messages.UNFOCUS_PARTICIPANT : s.default.Messages.FOCUS_PARTICIPANT,
                    action: () => u.default.selectParticipant(t, n ? null : e)
                })
            }