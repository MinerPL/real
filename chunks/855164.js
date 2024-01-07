            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("151426"),
                l = n("551042"),
                s = n("135230"),
                r = n("926994"),
                u = n("10641"),
                o = n("42887"),
                d = n("599110"),
                c = n("129978"),
                _ = n("171644"),
                E = n("49111"),
                f = n("782340"),
                h = n("274520");
            let p = "game_console_alert_modal",
                T = "game_console_ptt_alert_modal";
            var C = {
                maybeShowPTTAlert(e) {
                    if (o.default.getMode() !== E.InputModes.PUSH_TO_TALK || (0, u.isDismissibleContentDismissed)(a.DismissibleContent.CONSOLE_PTT_DISABLE_ALERT)) return Promise.resolve();
                    let t = {
                            [E.PlatformTypes.XBOX]: f.default.Messages.PTT_NOT_SUPPORTED_XBOX,
                            [E.PlatformTypes.PLAYSTATION]: f.default.Messages.PTT_NOT_SUPPORTED_PLAYSTATION,
                            [E.PlatformTypes.PLAYSTATION_STAGING]: f.default.Messages.PTT_NOT_SUPPORTED_PLAYSTATION
                        },
                        n = t[e];
                    return null == n ? Promise.resolve() : new Promise(e => {
                        let t = () => {
                                (0, u.markDismissibleContentAsDismissed)(a.DismissibleContent.CONSOLE_PTT_DISABLE_ALERT), e()
                            },
                            r = e => (0, i.jsx)(s.default, {
                                ...e,
                                title: n,
                                body: f.default.Messages.PTT_NOT_SUPPORTED_ALERT_BODY,
                                onConfirm: t,
                                titleClassName: h.title
                            });
                        (0, l.hasModalOpen)(T) ? (0, l.updateModal)(T, r) : (0, l.openModal)(r, {
                            modalKey: T
                        })
                    })
                },
                showSelfDismissableAlert(e) {
                    let {
                        title: t,
                        body: n,
                        errorCodeMessage: a,
                        reconnectPlatformType: u
                    } = e, o = (0, i.jsx)(c.SelfDismissibleAlertBody, {
                        body: n,
                        errorCodeMessage: a,
                        dismissCallback: () => (0, l.closeModal)(p)
                    });

                    function f() {
                        null != u && ((0, r.default)(u), d.default.track(E.AnalyticEvents.ACCOUNT_LINK_STEP, {
                            previous_step: _.GAME_CONSOLE_ALERT_MODAL_LOCATION,
                            current_step: "desktop oauth",
                            platform_type: u
                        }))
                    }
                    let h = e => (0, i.jsx)(s.default, {
                        ...e,
                        title: t,
                        body: o,
                        onConfirm: f
                    });
                    (0, l.hasModalOpen)(p) ? (0, l.updateModal)(p, h) : (0, l.openModal)(h, {
                        modalKey: p
                    })
                }
            }