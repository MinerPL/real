            "use strict";
            l.r(t), l.d(t, {
                shareClip: function() {
                    return m
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("77078"),
                i = l("42203"),
                s = l("474643"),
                r = l("599110"),
                o = l("299039"),
                d = l("412861"),
                u = l("13136"),
                c = l("803725"),
                f = l("80028"),
                p = l("49111");
            async function m(e, t) {
                let {
                    channelId: m,
                    editMetadata: h,
                    analyticsLocations: E
                } = t, v = i.default.getChannel(m);
                if (null != v) try {
                    var _;
                    let t = await (0, c.exportClip)(e, h),
                        l = null !== (_ = e.name) && void 0 !== _ ? _ : (0, f.CLIP_NAME_TEMPLATE)(o.default.extractTimestamp(e.id)),
                        a = (0, u.default)(l);
                    (0, d.promptToUpload)([new File([t], "".concat("" !== a ? a : "clip", ".mp4"), {
                        type: "video/mp4"
                    })], v, s.DraftType.ChannelMessage, {
                        filesMetadata: [{
                            clip: e
                        }]
                    }), r.default.track(p.AnalyticEvents.CLIP_SHARED, {
                        location_stack: E,
                        guild_id: v.guild_id,
                        channel_id: v.id,
                        channel_type: v.type,
                        application_id: e.applicationId,
                        clip_id: e.id
                    })
                } catch (e) {
                    throw f.ClipsLogger.error(e), e
                } else(0, n.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await l.el("143909").then(l.bind(l, "143909"));
                    return l => (0, a.jsx)(t, {
                        ...l,
                        clip: e,
                        editMetadata: h
                    })
                })
            }