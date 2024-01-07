            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("65597"),
                a = n("77078"),
                i = n("926994"),
                d = n("495194"),
                r = n("945956"),
                s = n("800762"),
                o = n("889486"),
                c = n("261552"),
                f = n("742898"),
                E = n("424024"),
                C = n("49111"),
                S = n("782340");

            function h(e) {
                let t = (0, u.default)([r.default], () => r.default.getChannelId() === e.id),
                    h = (0, c.default)(),
                    _ = (null == h ? void 0 : h.channelId) === e.id,
                    N = (0, d.useIsVoiceChannelLocked)(e) && !e.isPrivate(),
                    T = (0, d.default)(e),
                    v = (0, u.default)([s.default], () => s.default.isInChannel(e.id)),
                    g = !v && T || N,
                    I = (0, f.default)();
                if (!_ && 0 === I.length) return null;
                let m = t => {
                    if (!t.twoWayLink || t.revoked) {
                        (0, i.default)(t.type, "Console Transfer Item");
                        return
                    }
                    t.type === C.PlatformTypes.XBOX ? (0, a.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("613895").then(n.bind(n, "613895"));
                        return n => (0, l.jsx)(t, {
                            ...n,
                            channel: e
                        })
                    }) : (t.type === C.PlatformTypes.PLAYSTATION || t.type === C.PlatformTypes.PLAYSTATION_STAGING) && (0, a.openModalLazy)(async () => {
                        let {
                            default: u
                        } = await n.el("962512").then(n.bind(n, "962512"));
                        return n => (0, l.jsx)(u, {
                            ...n,
                            platform: t.type,
                            channel: e
                        })
                    })
                };
                return (0, l.jsx)(l.Fragment, {
                    children: _ ? (0, l.jsx)(a.MenuItem, {
                        label: S.default.Messages.TRANSFER_VOICE_TO_DEVICE,
                        id: "handoff",
                        action: () => {
                            (0, o.handoffRemote)(h)
                        },
                        icon: (0, E.default)(void 0),
                        disabled: g
                    }) : I.map(e => (0, l.jsx)(a.MenuItem, {
                        id: "transfer-".concat(e.type, "-").concat(e.id),
                        label: function(e, t) {
                            if (e === C.PlatformTypes.XBOX) return t ? S.default.Messages.TRANSFER_VOICE_TO_XBOX : S.default.Messages.JOIN_ON_XBOX;
                            if (e === C.PlatformTypes.PLAYSTATION) return t ? S.default.Messages.CONSOLE_PLAYSTATION_TRANSFER_VOICE : S.default.Messages.CONSOLE_PLAYSTATION_JOIN_VOICE;
                            if (e === C.PlatformTypes.PLAYSTATION_STAGING) return t ? S.default.Messages.CONSOLE_PLAYSTATION_STAGING_TRANSFER_VOICE : S.default.Messages.CONSOLE_PLAYSTATION_STAGING_JOIN_VOICE
                        }(e.type, t),
                        action: () => m(e),
                        icon: (0, E.default)(e.type),
                        disabled: g
                    }, e.id))
                })
            }