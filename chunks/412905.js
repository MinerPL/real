            "use strict";
            n.r(t), n.d(t, {
                isNotSupported: function() {
                    return _
                },
                enable: function() {
                    return h
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("77078"),
                a = n("913144"),
                u = n("605250"),
                o = n("42887"),
                d = n("599110"),
                r = n("49111"),
                l = n("180524"),
                c = n("782340");
            let p = new u.default("AudioActionCreators");

            function f() {
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

            function _() {
                return !o.default.isSupported() && ((0, i.openModal)(e => (0, s.jsx)(i.ConfirmModal, {
                    header: c.default.Messages.UNSUPPORTED_BROWSER,
                    confirmText: c.default.Messages.DOWNLOAD_APP,
                    cancelText: c.default.Messages.CANCEL,
                    onConfirm: f,
                    confirmButtonColor: i.Button.Colors.BRAND,
                    ...e,
                    children: (0, s.jsx)(i.Text, {
                        variant: "text-md/normal",
                        children: c.default.Messages.UNSUPPORTED_BROWSER_DETAILS
                    })
                })), !0)
            }

            function m(e) {
                d.default.track(r.AnalyticEvents.PERMISSIONS_ACKED, {
                    type: "audio",
                    action: e
                })
            }

            function h() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return _() ? Promise.resolve(!1) : (d.default.track(r.AnalyticEvents.PERMISSIONS_REQUESTED, {
                    type: "audio"
                }), o.default.getMediaEngine().enable().then(() => {
                    a.default.dispatch({
                        type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
                        enabled: !0,
                        unmute: e
                    }), m(l.NativePermissionStates.ACCEPTED)
                }, e => {
                    switch (e) {
                        case r.UserMediaErrors.NO_DEVICES_FOUND:
                            m(l.NativePermissionStates.NO_DEVICES);
                            break;
                        case r.UserMediaErrors.PERMISSION_DENIED:
                            m(l.NativePermissionStates.DENIED);
                            break;
                        case r.UserMediaErrors.PERMISSION_DISMISSED:
                            m(l.NativePermissionStates.DISMISSED);
                            break;
                        default:
                            m(l.NativePermissionStates.ERROR), p.warn("unknown getUserMedia error: ".concat(e))
                    }
                }).then(() => !0))
            }