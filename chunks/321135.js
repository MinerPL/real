            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
            var i = n("37983");
            n("884691");
            var a = n("446674"),
                l = n("77078"),
                r = n("168973"),
                s = n("301603"),
                u = n("632616"),
                o = n("535348"),
                d = n("353927"),
                c = n("782340");

            function E(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.MediaEngineContextTypes.DEFAULT,
                    [n, E, f] = (0, s.default)(e, t),
                    _ = (0, a.useStateFromStores)([r.default], () => r.default.disableHideSelfStreamAndVideoConfirmationAlert);
                return n ? (0, i.jsx)(l.MenuCheckboxItem, {
                    id: "self-video-hide",
                    label: c.default.Messages.SHOW_SELF_VIDEO,
                    checked: !E,
                    action: () => {
                        if (_ || E) return f(!E);
                        (0, l.openModal)(e => (0, i.jsx)(u.default, {
                            ...e,
                            type: o.SelfStreamAndVideoAlertType.VIDEO,
                            onConfirm: () => f(!E)
                        }))
                    }
                }) : null
            }