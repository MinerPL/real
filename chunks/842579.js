            "use strict";
            a.r(e), a.d(e, {
                BirthdayActivitiesRouteGuard: function() {
                    return r
                }
            });
            var t = a("37983"),
                C = a("90915"),
                s = a("446674"),
                l = a("697218"),
                i = a("955153"),
                n = a("49111");

            function r(L) {
                let {
                    children: e
                } = L, a = (0, s.useStateFromStores)([l.default], () => l.default.getCurrentUser()), {
                    enabled: r
                } = i.BirthdayActivitiesExperiment.useExperiment({
                    location: "1f3236_1"
                }, {
                    autoTrackExposure: !0
                });
                return null == a ? null : r ? (0, t.jsx)(t.Fragment, {
                    children: e
                }) : (0, t.jsx)(C.Redirect, {
                    to: n.Routes.ME
                })
            }