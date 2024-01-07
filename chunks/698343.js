            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                i = n("151426"),
                l = n("77078"),
                r = n("901582"),
                o = n("812204"),
                u = n("685665"),
                d = n("509802"),
                c = n("911574"),
                E = n("350522"),
                f = n("476765"),
                _ = n("386133"),
                h = n("49111"),
                C = n("782340"),
                T = n("607626");

            function I() {
                let {
                    AnalyticsLocationProvider: e
                } = (0, u.default)(o.default.ACTIVE_NOW_COLUMN), t = (0, s.useStateFromStores)([E.default], () => E.default.hasConsented(h.Consents.PERSONALIZATION)), n = t ? [] : [i.DismissibleContent.NOW_PLAYING_CONSENT_CARD], I = (0, f.useUID)();
                return (0, a.jsx)(e, {
                    children: (0, a.jsx)(r.default, {
                        section: h.AnalyticsSections.ACTIVE_NOW_COLUMN,
                        children: (0, a.jsx)("aside", {
                            className: T.container,
                            "aria-labelledby": I,
                            children: (0, a.jsxs)(l.Scroller, {
                                className: T.scroller,
                                children: [(0, a.jsx)(l.Heading, {
                                    variant: "heading-lg/semibold",
                                    className: T.header,
                                    id: I,
                                    children: C.default.Messages.GAME_FEED_CURRENT_HEADER_TITLE
                                }), (0, a.jsx)(d.default, {
                                    contentTypes: n,
                                    children: e => {
                                        let {
                                            visibleContent: t,
                                            markAsDismissed: n
                                        } = e;
                                        if (t === i.DismissibleContent.NOW_PLAYING_CONSENT_CARD) return (0, a.jsx)(c.default, {
                                            className: T.consentCard,
                                            markAsDismissed: n
                                        })
                                    }
                                }), (0, a.jsx)(_.default, {})]
                            })
                        })
                    })
                })
            }