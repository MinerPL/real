            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                s = n("77078"),
                i = n("884155"),
                r = n("316133"),
                u = n("49111"),
                o = n("782340"),
                d = n("162088");

            function c(e) {
                let {
                    channel: t
                } = e, n = (0, l.useStateFromStores)([r.default], () => r.default.getVoiceStatesForChannel(t));
                return (0, a.jsxs)("div", {
                    className: d.root,
                    children: [(0, a.jsx)(s.Text, {
                        variant: "text-xs/bold",
                        className: d.header,
                        children: o.default.Messages.CHANNEL_CALL_MEMBERS_POPOUT_HEADER.format({
                            count: n.length
                        })
                    }), (0, a.jsx)(s.Scroller, {
                        className: d.scroller,
                        children: (0, a.jsx)(i.default, {
                            allowDragging: !1,
                            allowPreviews: !1,
                            className: d.voiceUsers,
                            channel: t,
                            voiceStates: n,
                            collapsed: !1,
                            location: u.AnalyticsLocations.CHANNEL_CALL
                        })
                    })]
                })
            }