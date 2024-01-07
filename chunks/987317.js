            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var i = n("913144"),
                a = n("700507"),
                l = n("76393");
            n("924492");
            var s = n("383294"),
                r = n("393414"),
                u = n("742171"),
                o = n("42203"),
                d = n("247013"),
                c = n("42887"),
                _ = n("18494"),
                E = n("162771"),
                f = n("697218"),
                h = n("404008"),
                p = n("450481"),
                T = n("49111"),
                C = {
                    selectChannel(e) {
                        let {
                            guildId: t,
                            channelId: n,
                            messageId: a,
                            jumpType: l,
                            preserveDrawerState: s,
                            source: r
                        } = e;
                        i.default.dispatch({
                            type: "CHANNEL_SELECT",
                            guildId: t === T.ME ? null : t,
                            channelId: n,
                            messageId: a,
                            jumpType: l,
                            preserveDrawerState: s,
                            source: r
                        })
                    },
                    selectPrivateChannel(e) {
                        (0, r.transitionTo)(T.Routes.CHANNEL(T.ME, e))
                    },
                    selectVoiceChannel(e) {
                        var t;
                        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            a = o.default.getChannel(e),
                            l = null == a ? void 0 : a.getGuildId();
                        if ((null == a ? void 0 : a.isGuildVocal()) && (null == a ? void 0 : a.isNSFW()) && (!(null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.nsfwAllowed) || !d.default.didAgree(l))) {
                            (0, r.transitionTo)(T.Routes.CHANNEL(l, e));
                            return
                        }
                        c.default.isSupported() && (null != e && c.default.getMediaEngine().interact(), (0, p.selectVoiceChannelAdditional)(e, l, n, i))
                    },
                    disconnect() {
                        let e = l.default.getRemoteSessionId();
                        if (null != e && a.remoteDisconnect(e), (0, u.isOldVoiceUIEnabled)()) {
                            let e = o.default.getChannel(_.default.getChannelId()),
                                t = _.default.getChannelId() === _.default.getVoiceChannelId() && (null == e ? void 0 : e.isThread()) === !0;
                            if (this.selectVoiceChannel(null), s.close(T.PopoutWindowKeys.CHANNEL_CALL_POPOUT), t) {
                                let e = E.default.getGuildId();
                                null != e && (0, r.transitionTo)((0, h.previousTextChannelRouteForGuild)(e))
                            }
                        } else this.selectVoiceChannel(null)
                    }
                }