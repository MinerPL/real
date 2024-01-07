            "use strict";
            n.r(t), n.d(t, {
                canStreamInChannel: function() {
                    return p
                },
                getStreamCTAString: function() {
                    return T
                },
                canWatchStream: function() {
                    return C
                },
                useCanWatchStream: function() {
                    return m
                },
                getStreamEligibleChannels: function() {
                    return S
                }
            }), n("424973"), n("222007");
            var i, a, l = n("316693"),
                s = n("446674"),
                r = n("76393"),
                u = n("923959"),
                o = n("305961"),
                d = n("957255"),
                c = n("800762"),
                _ = n("404008"),
                E = n("49111"),
                f = n("782340");
            let h = (e, t) => e.isPrivate() || t.can(l.default.combine(E.Permissions.CONNECT, E.Permissions.VIEW_CHANNEL), e);

            function p(e, t, n) {
                var i;
                let a = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                if (e.isPrivate()) return !0;
                let l = t.getGuild(e.getGuildId()),
                    s = null !== (i = null == l ? void 0 : l.maxStageVideoChannelUsers) && void 0 !== i ? i : 0;
                return (!e.isGuildStageVoice() || !(s <= 0)) && (!a || !!h(e, n)) && !!n.can(E.Permissions.STREAM, e) && null != l && l.afkChannelId !== e.id && !0
            }

            function T(e) {
                switch (e) {
                    case 0:
                        return f.default.Messages.CONSOLE_STREAM_UNAVAILABLE;
                    case 1:
                        return f.default.Messages.UNABLE_TO_JOIN_CHANNEL_FULL_MODAL_HEADER;
                    case 2:
                        return f.default.Messages.STREAM_NO_PERMISSION_CTA;
                    default:
                        return f.default.Messages.WATCH_STREAM
                }
            }

            function C(e, t, n, i, a) {
                let l;
                if (null == e) return [!1, 2];
                let s = t.isInChannel(e.id),
                    r = (0, _.isChannelFull)(e, t, n),
                    u = h(e, i),
                    o = null != a.getAwaitingRemoteSessionInfo() || null != a.getRemoteSessionId();
                o ? l = 0 : u || s ? r && !s && (l = 1) : l = 2;
                let d = !__OVERLAY__ && !o && (s || u && !r);
                return [d, l]
            }

            function m(e) {
                return (0, s.useStateFromStoresArray)([c.default, o.default, d.default, r.default], () => C(e, c.default, o.default, d.default, r.default))
            }

            function S(e, t, n) {
                let i = [];
                for (let {
                        channel: a
                    }
                    of e[u.GUILD_VOCAL_CHANNELS_KEY]) p(a, t, n) && i.push(a);
                return i
            }(a = i || (i = {}))[a.REMOTE_MODE = 0] = "REMOTE_MODE", a[a.CHANNEL_FULL = 1] = "CHANNEL_FULL", a[a.NO_PERMISSION = 2] = "NO_PERMISSION"