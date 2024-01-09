            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var i = n("37983");
            n("884691");
            var l = n("446674"),
                r = n("77078"),
                s = n("561288"),
                a = n("191145"),
                o = n("271938"),
                u = n("99795"),
                d = n("782340");

            function c(e, t) {
                let n = (0, l.useStateFromStores)([o.default], () => o.default.getId() === e, [e]),
                    [c, f] = (0, l.useStateFromStoresArray)([a.default], () => [a.default.getParticipants(t), a.default.getParticipant(t, e)], [t, e]);
                return n || 0 === c.length ? null : null == f ? (0, i.jsx)(r.MenuItem, {
                    id: "ring",
                    label: d.default.Messages.RING,
                    action: () => s.default.ring(t, [e])
                }) : f.type === u.ParticipantTypes.USER && f.ringing ? (0, i.jsx)(r.MenuItem, {
                    id: "stop-ringing",
                    label: d.default.Messages.STOP_RINGING,
                    action: () => s.default.stopRinging(t, [e])
                }) : null
            }