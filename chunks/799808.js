            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("77078"),
                s = n("990766"),
                i = n("773356"),
                l = n("349171"),
                u = n("292687"),
                o = n("305961"),
                d = n("42887"),
                c = n("697218"),
                f = n("773336"),
                E = n("49111"),
                h = n("686298");

            function p(e, t, p) {
                let S = u.default.getWindowOpen(E.PopoutWindowKeys.CHANNEL_CALL_POPOUT) ? E.PopoutWindowKeys.CHANNEL_CALL_POPOUT : null;
                if ((0, l.default)(S), f.isPlatformEmbedded)(0, r.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("451863").then(n.bind(n, "451863"));
                    return n => (0, a.jsx)(t, {
                        ...n,
                        guildId: e,
                        analyticsLocation: p
                    })
                });
                else {
                    var _;
                    let n = (0, i.default)(h.ApplicationStreamPresets.PRESET_CUSTOM, h.ApplicationStreamResolutions.RESOLUTION_1080, h.ApplicationStreamFPS.FPS_30, c.default.getCurrentUser(), null === (_ = o.default.getGuild(e)) || void 0 === _ ? void 0 : _.premiumTier) ? {
                        width: 1920,
                        height: 1080
                    } : {
                        width: 1280,
                        height: 720
                    };
                    d.default.getMediaEngine().getDesktopSource(n, !0).then(n => {
                        (0, s.startStream)(e, t, {
                            pid: null,
                            sourceId: n,
                            sourceName: null
                        })
                    })
                }
            }