            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var i = n("37983");
            n("884691");
            var l = n("446674"),
                u = n("77078"),
                o = n("168973"),
                a = n("301603"),
                r = n("632616"),
                d = n("535348"),
                s = n("353927"),
                c = n("782340");

            function f(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.MediaEngineContextTypes.DEFAULT,
                    [n, f, E] = (0, a.default)(e, t),
                    _ = (0, l.useStateFromStores)([o.default], () => o.default.disableHideSelfStreamAndVideoConfirmationAlert);
                return n ? (0, i.jsx)(u.MenuCheckboxItem, {
                    id: "self-video-hide",
                    label: c.default.Messages.SHOW_SELF_VIDEO,
                    checked: !f,
                    action: () => {
                        if (_ || f) return E(!f);
                        (0, u.openModal)(e => (0, i.jsx)(r.default, {
                            ...e,
                            type: d.SelfStreamAndVideoAlertType.VIDEO,
                            onConfirm: () => E(!f)
                        }))
                    }
                }) : null
            }