            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var a = n("37983"),
                l = n("884691"),
                s = n("446674"),
                i = n("77078"),
                r = n("987317"),
                u = n("191145"),
                o = n("233322"),
                d = n("157186"),
                c = n("679243"),
                f = n("449008"),
                h = n("387111"),
                p = n("998716"),
                m = n("782340"),
                E = n("704414");
            let C = (e, t) => h.default.getName(e.getGuildId(), e.id, t.user);
            var g = function(e) {
                var t, n;
                let {
                    participants: h,
                    channel: g,
                    hasConnectPermission: S
                } = e, _ = (0, d.useShowMemberVerificationGate)(g.guild_id), I = l.useCallback(() => {
                    _ ? (0, o.openMemberVerificationModal)(g.guild_id, () => r.default.selectVoiceChannel(g.id)) : r.default.selectVoiceChannel(g.id)
                }, [g.id, g.guild_id, _]), T = h.filter(e => e.type === p.StageChannelParticipantTypes.VOICE), v = 4 === T.length ? 2 : 3, x = (0, s.useStateFromStoresArray)([u.default], () => T.map(e => u.default.getParticipant(g.id, e.id)).filter(f.isNotNullish), [g.id, T]);
                return (0, a.jsxs)("div", {
                    className: E.container,
                    children: [(0, a.jsx)("div", {
                        className: E.tiles,
                        style: {
                            maxWidth: 168 * v
                        },
                        children: x.slice(0, 5).map(e => (0, a.jsx)(c.default, {
                            participant: e,
                            channel: g,
                            className: E.tile,
                            paused: !0,
                            inCall: !0,
                            noVideoRender: !0,
                            inPopout: !1,
                            width: 48
                        }, e.id))
                    }), (0, a.jsx)(i.Heading, {
                        className: E.channelName,
                        variant: "heading-xxl/semibold",
                        children: g.name
                    }), (0, a.jsx)("div", {
                        className: E.participantsRow,
                        children: (0, a.jsx)(i.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: (t = g, 0 === (n = T).length ? m.default.Messages.CURRENTLY_IN_STAGE_EMPTY : 1 === n.length ? m.default.Messages.CURRENTLY_IN_STAGE_1.format({
                                a: C(t, n[0])
                            }) : 2 === n.length ? m.default.Messages.CURRENTLY_IN_STAGE_2.format({
                                a: C(t, n[0]),
                                b: C(t, n[1])
                            }) : n.length > 2 ? m.default.Messages.CURRENTLY_IN_STAGE_2_N.format({
                                a: C(t, n[0]),
                                b: C(t, n[1]),
                                n: n.length - 2
                            }) : void 0)
                        })
                    }), (0, a.jsx)(i.Button, {
                        disabled: !S,
                        className: E.joinButton,
                        color: S ? i.Button.Colors.GREEN : i.Button.Colors.PRIMARY,
                        onClick: I,
                        size: i.Button.Sizes.MEDIUM,
                        children: S ? m.default.Messages.STAGE_CHANNEL_JOIN : m.default.Messages.CHANNEL_LOCKED_SHORT
                    })]
                })
            }