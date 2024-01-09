            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("65597"),
                l = n("77078"),
                s = n("926994"),
                u = n("495194"),
                d = n("945956"),
                r = n("800762"),
                o = n("889486"),
                c = n("261552"),
                f = n("742898"),
                S = n("424024"),
                E = n("49111"),
                _ = n("782340");

            function N(e) {
                let t = (0, a.default)([d.default], () => d.default.getChannelId() === e.id),
                    N = (0, c.default)(),
                    g = (null == N ? void 0 : N.channelId) === e.id,
                    h = (0, u.useIsVoiceChannelLocked)(e) && !e.isPrivate(),
                    C = (0, u.default)(e),
                    T = (0, a.default)([r.default], () => r.default.isInChannel(e.id)),
                    I = !T && C || h,
                    O = (0, f.default)();
                if (!g && 0 === O.length) return null;
                let A = t => {
                    if (!t.twoWayLink || t.revoked) {
                        (0, s.default)(t.type, "Console Transfer Item");
                        return
                    }
                    t.type === E.PlatformTypes.XBOX ? (0, l.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("613895").then(n.bind(n, "613895"));
                        return n => (0, i.jsx)(t, {
                            ...n,
                            channel: e
                        })
                    }) : (t.type === E.PlatformTypes.PLAYSTATION || t.type === E.PlatformTypes.PLAYSTATION_STAGING) && (0, l.openModalLazy)(async () => {
                        let {
                            default: a
                        } = await n.el("962512").then(n.bind(n, "962512"));
                        return n => (0, i.jsx)(a, {
                            ...n,
                            platform: t.type,
                            channel: e
                        })
                    })
                };
                return (0, i.jsx)(i.Fragment, {
                    children: g ? (0, i.jsx)(l.MenuItem, {
                        label: _.default.Messages.TRANSFER_VOICE_TO_DEVICE,
                        id: "handoff",
                        action: () => {
                            (0, o.handoffRemote)(N)
                        },
                        icon: (0, S.default)(void 0),
                        disabled: I
                    }) : O.map(e => (0, i.jsx)(l.MenuItem, {
                        id: "transfer-".concat(e.type, "-").concat(e.id),
                        label: function(e, t) {
                            if (e === E.PlatformTypes.XBOX) return t ? _.default.Messages.TRANSFER_VOICE_TO_XBOX : _.default.Messages.JOIN_ON_XBOX;
                            if (e === E.PlatformTypes.PLAYSTATION) return t ? _.default.Messages.CONSOLE_PLAYSTATION_TRANSFER_VOICE : _.default.Messages.CONSOLE_PLAYSTATION_JOIN_VOICE;
                            if (e === E.PlatformTypes.PLAYSTATION_STAGING) return t ? _.default.Messages.CONSOLE_PLAYSTATION_STAGING_TRANSFER_VOICE : _.default.Messages.CONSOLE_PLAYSTATION_STAGING_JOIN_VOICE
                        }(e.type, t),
                        action: () => A(e),
                        icon: (0, S.default)(e.type),
                        disabled: I
                    }, e.id))
                })
            }