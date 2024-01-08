            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                s = n.n(l),
                i = n("446674"),
                r = n("77078"),
                u = n("614175"),
                o = n("84460"),
                d = n("181114"),
                c = n("82636"),
                f = n("981913"),
                h = n("782340"),
                p = n("808554");

            function m(e) {
                let t, {
                        isActivityActive: n,
                        ...l
                    } = e,
                    {
                        enabled: m
                    } = u.ActivitiesGameNightExperiment.useExperiment({
                        location: "9ab33d_1"
                    }, {
                        autoTrackExposure: !1
                    }),
                    E = (0, i.useStateFromStores)([o.default], () => o.default.getIsEnabled(), []);
                return (E && (t = "yellow"), m) ? (0, a.jsxs)(d.default, {
                    disabled: l.disabled,
                    onClick: l.onClick,
                    onMouseEnter: l.onMouseEnter,
                    onMouseLeave: l.onMouseLeave,
                    look: r.Button.Looks.BLANK,
                    size: r.Button.Sizes.XLARGE,
                    className: s(p.gameNightButton, {
                        [p.gameNightActivityIsActive]: n && !l.disabled,
                        [p.gameNightDeveloperActivityShelf]: E
                    }),
                    innerClassName: p.gameNightButtonInner,
                    children: [(0, a.jsx)(c.default, {
                        className: p.gameNightRocket
                    }), h.default.Messages.EMBEDDED_ACTIVITIES_GAME_NIGHT]
                }) : (0, a.jsx)(f.CenterControlButton, {
                    isActive: n,
                    color: t,
                    iconComponent: c.default,
                    ...l
                })
            }