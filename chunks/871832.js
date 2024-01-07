            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                i = n("159997"),
                l = n("33942"),
                r = n("773336"),
                o = n("50885"),
                u = n("18520"),
                d = n("49111"),
                c = (0, u.default)((e, t, n, r, o, u, d, c, E, f, _, h, C) => {
                    let T = "OAuth2Authorize_".concat(e, "_").concat(f, "_").concat(_);
                    return new Promise(I => {
                        let S = e => {
                            let {
                                location: t
                            } = e;
                            I(t)
                        };
                        (0, s.openModal)(s => (0, a.jsx)(l.OAuth2AuthorizeModal, {
                            ...s,
                            authorization: t,
                            clientId: e,
                            scopes: null != n ? n : [],
                            callback: S,
                            responseType: o,
                            redirectUri: u,
                            codeChallenge: d,
                            codeChallengeMethod: c,
                            state: E,
                            permissions: r,
                            guildId: f,
                            channelId: _,
                            prompt: h,
                            disableGuildSelect: "boolean" == typeof C ? C : "true" === C
                        }), {
                            modalKey: T,
                            onCloseRequest: () => {
                                (0, s.closeModal)(T), I(void 0)
                            }
                        }, (0, i.default)(t.application) ? s.POPOUT_MODAL_CONTEXT : s.DEFAULT_MODAL_CONTEXT)
                    })
                }, function(e) {
                    if (r.isPlatformEmbedded) {
                        let t = (0, i.default)(e) ? d.PopoutWindowKeys.CHANNEL_CALL_POPOUT : null;
                        (0, r.isWindows)() ? o.default.minimize(t): o.default.restore(t), o.default.focus(t)
                    }
                })