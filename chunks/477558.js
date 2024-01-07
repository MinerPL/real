            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                l = n("446674"),
                i = n("233322"),
                r = n("157186"),
                o = n("716214"),
                u = n("42203"),
                d = n("26989"),
                c = n("305961"),
                f = n("697218"),
                m = n("933326"),
                E = n("398604"),
                _ = n("322224"),
                h = n("914169"),
                p = n("843455");

            function I(e) {
                let {
                    code: t
                } = e, [n, I, T] = t.split("-"), {
                    guildScheduledEvent: g,
                    guild: C,
                    channel: S,
                    isMember: A
                } = (0, l.useStateFromStoresObject)([E.default, c.default, u.default, d.default, f.default], () => {
                    var e, t;
                    let a = null !== (t = E.default.getGuildScheduledEvent(I)) && void 0 !== t ? t : void 0,
                        s = c.default.getGuild(n),
                        l = u.default.getChannel(null == a ? void 0 : a.channel_id),
                        i = d.default.isMember(n, null === (e = f.default.getCurrentUser()) || void 0 === e ? void 0 : e.id);
                    return {
                        guildScheduledEvent: a,
                        guild: s,
                        channel: l,
                        isMember: i
                    }
                }, [n, I]);
                return s.useEffect(() => {
                    (null == g ? void 0 : g.id) == null && _.default.fetchGuildEvent(n, I), m.default.getGuildEventUserCounts(n, I, null != T ? [T] : []), m.default.getGuildEventsForCurrentUser(n)
                }, [I, n, null == g ? void 0 : g.id, T]), (0, a.jsx)(h.default, {
                    guild: C,
                    channel: S,
                    guildScheduledEvent: g,
                    isMember: A,
                    onAcceptInstantInvite: p.NOOP,
                    onTransitionToInviteChannel: function() {
                        if ((0, r.shouldShowMembershipVerificationGate)(n)) {
                            (0, i.openMemberVerificationModal)(n);
                            return
                        }(null == S ? void 0 : S.isGuildStageVoice()) ? (0, o.connectAndOpen)(S) : (null == S ? void 0 : S.isGuildVoice()) && _.default.joinVoiceEvent(S.guild_id, S.id)
                    },
                    recurrenceId: T
                })
            }