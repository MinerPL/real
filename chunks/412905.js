            "use strict";
            n.r(t), n.d(t, {
                isNotSupported: function() {
                    return E
                },
                enable: function() {
                    return S
                },
                trackToggleSelfMute: function() {
                    return D
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("77078"),
                a = n("913144"),
                u = n("605250"),
                o = n("42887"),
                d = n("227602"),
                r = n("471671"),
                l = n("599110"),
                c = n("360782"),
                p = n("49111"),
                f = n("180524"),
                _ = n("782340");
            let m = new u.default("AudioActionCreators");

            function h() {
                (0, i.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("649486").then(n.bind(n, "649486"));
                    return t => (0, s.jsx)(e, {
                        source: "Unsupported Browser",
                        ...t
                    })
                })
            }

            function E() {
                return !o.default.isSupported() && ((0, i.openModal)(e => (0, s.jsx)(i.ConfirmModal, {
                    header: _.default.Messages.UNSUPPORTED_BROWSER,
                    confirmText: _.default.Messages.DOWNLOAD_APP,
                    cancelText: _.default.Messages.CANCEL,
                    onConfirm: h,
                    confirmButtonColor: i.Button.Colors.BRAND,
                    ...e,
                    children: (0, s.jsx)(i.Text, {
                        variant: "text-md/normal",
                        children: _.default.Messages.UNSUPPORTED_BROWSER_DETAILS
                    })
                })), !0)
            }

            function g(e) {
                l.default.track(p.AnalyticEvents.PERMISSIONS_ACKED, {
                    type: "audio",
                    action: e
                })
            }

            function S() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return E() ? Promise.resolve(!1) : (l.default.track(p.AnalyticEvents.PERMISSIONS_REQUESTED, {
                    type: "audio"
                }), o.default.getMediaEngine().enable().then(() => {
                    a.default.dispatch({
                        type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
                        enabled: !0,
                        unmute: e
                    }), g(f.NativePermissionStates.ACCEPTED)
                }, e => {
                    switch (e) {
                        case p.UserMediaErrors.NO_DEVICES_FOUND:
                            g(f.NativePermissionStates.NO_DEVICES);
                            break;
                        case p.UserMediaErrors.PERMISSION_DENIED:
                            g(f.NativePermissionStates.DENIED);
                            break;
                        case p.UserMediaErrors.PERMISSION_DISMISSED:
                            g(f.NativePermissionStates.DISMISSED);
                            break;
                        default:
                            g(f.NativePermissionStates.ERROR), m.warn("unknown getUserMedia error: ".concat(e))
                    }
                }).then(() => !0))
            }

            function D(e) {
                let {
                    usedKeybind: t = !1
                } = e, n = d.default.getKeybindForAction(p.GlobalKeybindActions.TOGGLE_MUTE, !1, !0);
                l.default.track(p.AnalyticEvents.INPUT_MUTE_TOGGLED, {
                    enabled: !o.default.isSelfMute(),
                    custom_keybind_assigned: null != n && n.id !== d.DEFAULT_MUTE_KEYBIND.id,
                    used_keybind: t,
                    app_in_focus: r.default.isFocused(),
                    overlay_activated: null != (0, c.default)()
                })
            }