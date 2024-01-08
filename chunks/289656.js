            "use strict";
            n.r(t), n.d(t, {
                getVideoButtonLabel: function() {
                    return r
                }
            });
            var a = n("49111"),
                s = n("782340");

            function r(e) {
                let {
                    enabled: t,
                    join: n,
                    channel: r,
                    cameraUnavailable: i,
                    hasPermission: l,
                    channelLimit: u = -1,
                    channelLimitReached: o = !1
                } = e, d = t ? s.default.Messages.CAMERA_OFF : s.default.Messages.CAMERA_ON;
                if (n) {
                    let e = (null == r ? void 0 : r.isManaged()) || !(null == r ? void 0 : r.isPrivate());
                    d = e ? s.default.Messages.CONNECT_TO_VIDEO : s.default.Messages.JOIN_VIDEO_CALL
                }
                return i && (d = s.default.Messages.CAMERA_UNAVAILABLE), !l && (d = s.default.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE), o && !t && (d = (null == r ? void 0 : r.isGuildStageVoice()) ? u >= a.MAX_STAGE_VIDEO_USER_LIMIT_TIER3 ? s.default.Messages.CAMERA_DISABLED_STAGE_LIMIT_REACHED_MAX : s.default.Messages.CAMERA_DISABLED_STAGE_LIMIT_REACHED : s.default.Messages.CAMERA_DISABLED_LIMIT_REACHED.format({
                    limit: u
                })), d
            }