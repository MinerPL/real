            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return I
                }
            }), i("70102");
            var n = i("37983");
            i("884691");
            var l = i("77078"),
                a = i("987317"),
                u = i("76393"),
                r = i("393414"),
                d = i("755624"),
                o = i("263024"),
                s = i("271938"),
                c = i("18494"),
                f = i("800762"),
                _ = i("792367"),
                E = i("49111"),
                I = {
                    async handleVoiceConnect(e) {
                        let {
                            channel: t,
                            connected: I,
                            needSubscriptionToAccess: A,
                            locked: T = !1,
                            routeDirectlyToChannel: C = !1,
                            bypassChangeModal: v,
                            bypassGuildIdCheck: S = !1
                        } = e;
                        t.isThread() && (await o.default.unarchiveThreadIfNecessary(t.id), !d.default.hasJoined(t.id) && await o.default.joinThread(t, "Join Voice"));
                        let N = u.default.getRemoteSessionId(),
                            h = f.default.getVoiceStateForSession(s.default.getId(), N),
                            p = (null == h ? void 0 : h.channelId) === t.id,
                            y = p || c.default.getChannelId() === f.default.getCurrentClientVoiceChannelId(t.guild_id);
                        return !v && !T && (0, _.shouldShowVoiceChannelChangeConfirmation)(t) ? new Promise(e => {
                            (0, l.openModalLazy)(async () => {
                                let {
                                    default: l
                                } = await i.el("371895").then(i.bind(i, "371895"));
                                return i => (0, n.jsx)(l, {
                                    channel: t,
                                    onConfirm: () => e(this.handleVoiceConnect({
                                        channel: t,
                                        connected: I,
                                        needSubscriptionToAccess: A,
                                        routeDirectlyToChannel: C,
                                        locked: T,
                                        bypassChangeModal: !0
                                    })),
                                    ...i
                                })
                            })
                        }) : (!T && !I && a.default.selectVoiceChannel(t.id), !__OVERLAY__ && (I || y || A || C) && ! function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                i = e.getGuildId();
                            if (null == i && !t) throw Error("VoiceChannel, transitionTo: Channel does not have a guildId");
                            (0, r.transitionTo)(E.Routes.CHANNEL(i, e.id))
                        }(t, S), !0)
                    }
                }