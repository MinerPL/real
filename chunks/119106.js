            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var a = n("37983"),
                l = n("884691"),
                s = n("77078"),
                i = n("987317"),
                r = n("233322"),
                o = n("157186"),
                u = n("491519"),
                d = n("679243"),
                c = n("99795"),
                f = n("782340"),
                h = n("704414"),
                p = function(e) {
                    var t, n;
                    let {
                        participants: p,
                        channel: m,
                        hasConnectPermission: E
                    } = e, C = p.filter(c.isUserParticipant), g = (0, o.useShowMemberVerificationGate)(m.guild_id), S = l.useCallback(() => {
                        g ? (0, r.openMemberVerificationModal)(m.guild_id, () => i.default.selectVoiceChannel(m.id)) : i.default.selectVoiceChannel(m.id)
                    }, [m.id, m.guild_id, g]), _ = 4 === C.length ? 2 : 3;
                    return (0, a.jsxs)("div", {
                        className: h.container,
                        children: [(0, a.jsx)("div", {
                            className: h.tiles,
                            style: {
                                maxWidth: 168 * _
                            },
                            children: C.slice(0, 5).map(e => (0, a.jsx)(d.default, {
                                participant: e,
                                channel: m,
                                className: h.tile,
                                paused: !0,
                                inCall: !0,
                                noVideoRender: !0,
                                inPopout: !1,
                                width: 48
                            }, e.id))
                        }), (0, a.jsx)(s.Heading, {
                            className: h.channelName,
                            variant: "heading-xxl/semibold",
                            children: m.name
                        }), (0, a.jsx)("div", {
                            className: h.participantsRow,
                            children: (0, a.jsx)(s.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                children: (t = m, 0 === (n = C).length ? f.default.Messages.CURRENTLY_IN_VOICE_EMPTY : 1 === n.length ? f.default.Messages.CURRENTLY_IN_VOICE_1.format({
                                    a: (0, u.default)(t, n[0])
                                }) : 2 === n.length ? f.default.Messages.CURRENTLY_IN_VOICE_2.format({
                                    a: (0, u.default)(t, n[0]),
                                    b: (0, u.default)(t, n[1])
                                }) : n.length > 2 ? f.default.Messages.CURRENTLY_IN_VOICE_2_N.format({
                                    a: (0, u.default)(t, n[0]),
                                    b: (0, u.default)(t, n[1]),
                                    n: n.length - 2
                                }) : void 0)
                            })
                        }), (0, a.jsx)(s.Button, {
                            disabled: !E,
                            className: h.joinButton,
                            color: E ? s.Button.Colors.GREEN : s.Button.Colors.PRIMARY,
                            onClick: S,
                            size: s.Button.Sizes.MEDIUM,
                            children: E ? f.default.Messages.JOIN_VOICE : f.default.Messages.CHANNEL_LOCKED_SHORT
                        })]
                    })
                }