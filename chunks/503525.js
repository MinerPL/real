            "use strict";
            n.r(t), n.d(t, {
                useActivitiesWhatsNewCount: function() {
                    return c
                },
                getActivitiesWhatsNewCount: function() {
                    return E
                }
            });
            var a = n("446674"),
                s = n("992204"),
                i = n("334788"),
                l = n("891654"),
                r = n("885412"),
                o = n("629388"),
                u = n("337697"),
                d = n("954016");

            function c() {
                return (0, a.useStateFromStores)([s.default], () => E(s.default))
            }

            function E(e) {
                let t = 0,
                    n = e.getAcknowledged();
                return u.ExperimentBirthdayGoodbye.getCurrentConfig({
                    location: "1d9280_1"
                }).enabled ? (!n.has(d.WhatsNewSection.FREE) && t++, t) : (i.ExperimentBirthdayActivitiesGdmTile.getCurrentConfig({
                    location: "1d9280_2"
                }).enabled && !n.has(d.WhatsNewSection.GDM_ACTIVITIES) && t++, o.ExperimentBirthdayActivitiesPuttPartyTile.getCurrentConfig({
                    location: "1d9280_3"
                }).enabled && !n.has(d.WhatsNewSection.PUTT_PARTY) && t++, l.ExperimentBirthdayActivitiesJamspaceTile.getCurrentConfig({
                    location: "1d9280_4"
                }).enabled && !n.has(d.WhatsNewSection.JAMSPACE) && t++, r.ExperimentBirthdayActivitiesPokerTile.getCurrentConfig({
                    location: "1d9280_5"
                }).enabled && !n.has(d.WhatsNewSection.POKER) && t++, !n.has(d.WhatsNewSection.DISCORD_TURNS_8) && t <= 0 && t++, t)
            }