            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var i = n("374014"),
                a = n("373469"),
                u = n("271938"),
                r = n("824563"),
                o = n("945956"),
                s = n("568307"),
                d = n("800762"),
                l = n("299039"),
                c = n("80028"),
                p = n("49111"),
                f = n("782340");

            function m(e) {
                let {
                    sourceName: t,
                    sourceApplicationId: n
                } = function(e) {
                    var t, n;
                    if (null != e) {
                        let {
                            ownerId: t
                        } = i.decodeStreamKey(e);
                        if (t !== u.default.getId()) {
                            let e = r.default.getActivities(t).find(e => e.type === p.ActivityTypes.PLAYING);
                            return {
                                sourceName: null == e ? void 0 : e.name,
                                sourceApplicationId: null == e ? void 0 : e.application_id
                            }
                        }
                    }
                    let o = a.default.getStreamerActiveStreamMetadata(),
                        d = null == o ? void 0 : o.pid,
                        l = null != o ? null != d ? s.default.getGameForPID(d) : null : s.default.getVisibleGame();
                    return {
                        sourceName: null !== (t = null == o ? void 0 : o.sourceName) && void 0 !== t ? t : null == l ? void 0 : l.name,
                        sourceApplicationId: null !== (n = null == o ? void 0 : o.id) && void 0 !== n ? n : null == l ? void 0 : l.id
                    }
                }(e), m = o.default.getChannelId(), _ = [u.default.getId()];
                return null != m && (_ = Object.keys(d.default.getVoiceStatesForChannel(m))), {
                    id: l.default.fromTimestamp(Date.now()),
                    version: c.CURRENT_CLIP_METADATA_VERSION,
                    applicationName: null != t ? t : f.default.Messages.CLIPS_UNKNOWN_SOURCE,
                    applicationId: n,
                    users: _,
                    clipMethod: "manual",
                    length: 0,
                    thumbnail: ""
                }
            }