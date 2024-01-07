            "use strict";
            n.r(t), n.d(t, {
                SelectChannelOption: function() {
                    return d
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("656038"),
                a = n("360723"),
                l = n("533403"),
                u = n("368121"),
                r = n("944633"),
                c = n("449008"),
                o = n("575136"),
                g = n("473134");

            function d(e) {
                let {
                    channel: t,
                    users: n
                } = e, d = (0, o.default)(t);
                return (0, s.jsxs)("div", {
                    className: g.channelInfo,
                    children: [(0, i.default)(t) ? (0, s.jsx)(r.default, {
                        className: g.speakerIcon
                    }) : (0, s.jsx)(u.default, {
                        className: g.speakerIcon
                    }), (0, s.jsx)("div", {
                        className: g.channelName,
                        children: t.name
                    }), d.length > 0 ? (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("div", {
                            className: g.divider
                        }), (0, s.jsx)(a.default, {
                            embeddedApps: d,
                            className: g.channelItemActivities
                        }), (0, s.jsx)("div", {
                            className: g.channelActivitiesText,
                            children: d.map(e => {
                                var t;
                                return null === (t = e.application) || void 0 === t ? void 0 : t.name
                            }).filter(c.isNotNullish).join(", ")
                        })]
                    }) : null, (0, s.jsx)("div", {
                        className: g.voiceUserContainer,
                        children: (0, s.jsx)(l.default, {
                            users: n,
                            max: 4
                        })
                    })]
                })
            }