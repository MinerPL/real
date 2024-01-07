            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("414456"),
                s = l.n(a),
                i = l("446674"),
                r = l("716214"),
                o = l("800762"),
                u = l("295999"),
                d = l("782340"),
                c = l("953212"),
                f = e => {
                    let {
                        guildId: t,
                        channelId: l,
                        color: a,
                        look: f,
                        isProfile: m
                    } = e, p = (0, i.useStateFromStores)([o.default], () => o.default.isInChannel(l), [l]);
                    return (0, n.jsx)(u.default, {
                        className: s(c.button, {
                            [c.popout]: !m
                        }),
                        color: a,
                        look: f,
                        disabled: p,
                        onClick: () => r.connectOrLurkStage(t, l),
                        fullWidth: !0,
                        children: d.default.Messages.STAGE_CHANNEL_JOIN_BUTTON
                    }, "stage")
                }