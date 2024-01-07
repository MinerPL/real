            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var l = n("884691"),
                a = n("851387"),
                r = n("987317"),
                s = n("448993"),
                i = n("597517"),
                u = n("887143"),
                o = n("244480"),
                c = n("834052"),
                d = n("533613");

            function f(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    [f, E] = l.useState(!1),
                    [h, g] = l.useState(null),
                    _ = l.useMemo(() => c.default.getStageInstanceByChannel(null == e ? void 0 : e.id), [null == e ? void 0 : e.id]),
                    S = (0, u.useCanSendStageStartNotification)(e),
                    v = async l => {
                        let {
                            topic: u,
                            privacyLevel: c,
                            sendStartNotification: f
                        } = l;
                        if (null != e && "" !== u && null != c) {
                            E(!0), g(null), null != n && (a.default.selectGuild(n), r.default.selectVoiceChannel(e.id));
                            try {
                                let n;
                                null != _ ? n = await o.editStage(e, u, c) : (n = await o.startStage(e, u, c, null != f && f), S && i.hideHotspot(d.HotspotLocations.LIVE_STAGE_NOTIFICATION_BADGE)), t(n)
                            } catch (t) {
                                let e = new s.APIError(t);
                                g(e), E(!1)
                            }
                        }
                    };
                return {
                    loading: f,
                    error: h,
                    onSave: v
                }
            }