            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return c
                }
            }), a("222007");
            var n = a("37983");
            a("884691");
            var u = a("446674"),
                r = a("77078"),
                d = a("168973"),
                l = a("301603"),
                s = a("632616"),
                i = a("535348"),
                o = a("353927"),
                f = a("782340");

            function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.MediaEngineContextTypes.DEFAULT,
                    [a, c, m] = (0, l.default)(e, t),
                    M = (0, u.useStateFromStores)([d.default], () => d.default.disableHideSelfStreamAndVideoConfirmationAlert);
                return a ? (0, n.jsx)(r.MenuCheckboxItem, {
                    id: "self-video-hide",
                    label: f.default.Messages.SHOW_SELF_VIDEO,
                    checked: !c,
                    action: () => {
                        if (M || c) return m(!c);
                        (0, r.openModal)(e => (0, n.jsx)(s.default, {
                            ...e,
                            type: i.SelfStreamAndVideoAlertType.VIDEO,
                            onConfirm: () => m(!c)
                        }))
                    }
                }) : null
            }