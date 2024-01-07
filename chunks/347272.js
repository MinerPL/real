            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("669491"),
                i = n("77078"),
                l = n("774223"),
                r = n("9759"),
                o = n("813531"),
                u = n("484140"),
                d = n("395635"),
                c = n("782340"),
                E = n("472036");

            function f() {
                let {
                    canViewBroadcasts: e
                } = r.default.useExperiment({
                    location: "broadcast_list_no_track"
                }, {
                    autoTrackExposure: !1
                }), t = (0, o.default)();
                return 0 === t.length ? null : (r.default.trackExposure({
                    location: "broadcast_list"
                }), e) ? (0, a.jsxs)("div", {
                    className: E.container,
                    children: [(0, a.jsx)("div", {
                        className: E.header,
                        children: (0, a.jsxs)("div", {
                            className: E.inline,
                            children: [(0, a.jsx)(l.default, {
                                color: s.default.colors.HEADER_PRIMARY.css,
                                height: 20,
                                width: 20
                            }), (0, a.jsx)(i.Heading, {
                                variant: "heading-md/semibold",
                                children: c.default.Messages.LIVE_BROADCASTS
                            }), (0, a.jsx)(d.default, {}), (0, a.jsxs)(i.Heading, {
                                variant: "heading-md/semibold",
                                children: ["— ", t.length.toLocaleString()]
                            })]
                        })
                    }), t.map(e => (0, a.jsx)(u.default, {
                        broadcast: e
                    }, e.userId))]
                }) : null
            }