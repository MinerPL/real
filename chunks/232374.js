            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var a = n("151426"),
                s = n("77078"),
                i = n("446674"),
                l = n("509802"),
                r = n("778588"),
                o = n("697218"),
                u = n("197881"),
                d = n("158998"),
                c = () => {
                    let e = (0, i.useStateFromStores)([o.default], () => o.default.getCurrentUser()),
                        t = (0, i.useStateFromStores)([r.default], () => r.default.hasLayers()),
                        n = (0, s.useModalsStore)(s.hasAnyModalOpenSelector),
                        c = n || t || u.ProcessArgs.isDisallowPopupsSet(),
                        E = (0, d.ageEligibleForPremiumUpsell)(e) ? [a.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK] : [],
                        [f] = (0, l.useDismissibleContentGroup)(c ? [] : E, void 0, !0);
                    return f
                }