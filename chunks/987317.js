            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var s = n("913144"),
                i = n("700507"),
                r = n("76393");
            n("924492");
            var a = n("383294"),
                o = n("393414"),
                d = n("742171"),
                u = n("42203"),
                l = n("247013"),
                f = n("42887"),
                _ = n("18494"),
                c = n("162771"),
                g = n("697218"),
                m = n("404008"),
                h = n("450481"),
                v = n("49111"),
                E = {
                    selectChannel(e) {
                        let {
                            guildId: t,
                            channelId: n,
                            messageId: i,
                            jumpType: r,
                            preserveDrawerState: a,
                            source: o
                        } = e;
                        s.default.dispatch({
                            type: "CHANNEL_SELECT",
                            guildId: t === v.ME ? null : t,
                            channelId: n,
                            messageId: i,
                            jumpType: r,
                            preserveDrawerState: a,
                            source: o
                        })
                    },
                    selectPrivateChannel(e) {
                        (0, o.transitionTo)(v.Routes.CHANNEL(v.ME, e))
                    },
                    selectVoiceChannel(e) {
                        var t;
                        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            i = u.default.getChannel(e),
                            r = null == i ? void 0 : i.getGuildId();
                        if ((null == i ? void 0 : i.isGuildVocal()) && (null == i ? void 0 : i.isNSFW()) && (!(null === (t = g.default.getCurrentUser()) || void 0 === t ? void 0 : t.nsfwAllowed) || !l.default.didAgree(r))) {
                            (0, o.transitionTo)(v.Routes.CHANNEL(r, e));
                            return
                        }
                        f.default.isSupported() && (null != e && f.default.getMediaEngine().interact(), (0, h.selectVoiceChannelAdditional)(e, r, n, s))
                    },
                    disconnect() {
                        let e = r.default.getRemoteSessionId();
                        if (null != e && i.remoteDisconnect(e), (0, d.isOldVoiceUIEnabled)()) {
                            let e = u.default.getChannel(_.default.getChannelId()),
                                t = _.default.getChannelId() === _.default.getVoiceChannelId() && (null == e ? void 0 : e.isThread()) === !0;
                            if (this.selectVoiceChannel(null), a.close(v.PopoutWindowKeys.CHANNEL_CALL_POPOUT), t) {
                                let e = c.default.getGuildId();
                                null != e && (0, o.transitionTo)((0, m.previousTextChannelRouteForGuild)(e))
                            }
                        } else this.selectVoiceChannel(null)
                    }
                }