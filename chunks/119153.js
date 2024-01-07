            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("963662"),
                i = n("139321"),
                l = n("393414"),
                r = n("716214"),
                o = n("49111"),
                u = n("782340"),
                d = n("963301"),
                c = e => {
                    let {
                        channel: t,
                        guild: n
                    } = e;
                    return (0, a.jsx)(s.default, {
                        guild: n,
                        onDismissed: () => {
                            (0, i.hideHotspot)(i.HotspotLocations.HUB_STUDY_ROOM_NOTICE)
                        },
                        onClick: () => {
                            (0, i.hideHotspot)(i.HotspotLocations.HUB_STUDY_ROOM_NOTICE), null != t && null != t.getGuildId() && ((0, r.connectAndOpen)(t), (0, l.transitionToGuild)(t.getGuildId(), t.id))
                        },
                        title: u.default.Messages.HUB_STUDY_ROOM_NOTICE_TITLE,
                        message: u.default.Messages.HUB_STUDY_ROOM_NOTICE_DESCRIPTION,
                        cta: u.default.Messages.HUB_STUDY_ROOM_NOTICE_VOICE_CTA,
                        image: d,
                        type: o.ChannelNoticeTypes.HUB_STUDY_ROOM
                    })
                }