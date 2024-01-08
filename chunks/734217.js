            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("759843"),
                i = n("77078"),
                r = n("428958"),
                o = n("139321"),
                u = n("803725"),
                d = n("714319"),
                c = n("782340"),
                f = n("367424");

            function h(e) {
                let {
                    onOpenClips: t,
                    lastClipsSession: n,
                    closePopout: h
                } = e;
                return (s.useEffect(() => () => {
                    (0, u.clearClipsSession)()
                }, []), (0, r.default)({
                    type: l.ImpressionTypes.VIEW,
                    name: l.ImpressionNames.HOTSPOT,
                    properties: {
                        hotspot_location: o.HotspotLocations.CLIPS_CHANNEL_ATTACH_REMINDER
                    }
                }), null == n) ? (0, a.jsx)(a.Fragment, {}) : (0, a.jsxs)("div", {
                    className: f.recentClipsPopout,
                    children: [(0, a.jsx)("div", {
                        className: f.thumbnailStackContainer,
                        children: (0, a.jsx)(d.default, {})
                    }), (0, a.jsx)(i.Heading, {
                        className: f.header,
                        color: "header-primary",
                        variant: "heading-md/extrabold",
                        children: c.default.Messages.CLIPS_SESSION_ENDED_TOOLTIP_HEADER.format({
                            count: n.newClipIds.length
                        })
                    }), (0, a.jsx)(i.Text, {
                        color: "text-normal",
                        className: f.content,
                        variant: "text-sm/medium",
                        children: c.default.Messages.CLIPS_SESSION_ENDED_TOOLTIP_BODY.format({
                            applicationName: n.applicationName
                        })
                    }), (0, a.jsxs)("div", {
                        className: f.buttonsContainer,
                        children: [(0, a.jsx)(i.Button, {
                            color: i.Button.Colors.PRIMARY,
                            look: i.Button.Looks.LINK,
                            onClick: function() {
                                (0, o.hideHotspot)(o.HotspotLocations.CLIPS_CHANNEL_ATTACH_REMINDER), h()
                            },
                            children: c.default.Messages.CLIPS_SESSION_ENDED_TOOLTIP_SECONDARY_CTA
                        }), (0, a.jsx)(i.Button, {
                            color: i.Button.Colors.BRAND,
                            onClick: t,
                            children: c.default.Messages.CLIPS_SESSION_ENDED_TOOLTIP_PRIMARY_CTA
                        })]
                    })]
                })
            }