            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                i = n("77078"),
                u = n("168973"),
                d = n("301603"),
                s = n("632616"),
                r = n("535348"),
                o = n("353927"),
                c = n("782340");

            function f(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.MediaEngineContextTypes.DEFAULT,
                    [n, f, _] = (0, d.default)(e, t),
                    E = (0, l.useStateFromStores)([u.default], () => u.default.disableHideSelfStreamAndVideoConfirmationAlert);
                return n ? (0, a.jsx)(i.MenuCheckboxItem, {
                    id: "self-video-hide",
                    label: c.default.Messages.SHOW_SELF_VIDEO,
                    checked: !f,
                    action: () => {
                        if (E || f) return _(!f);
                        (0, i.openModal)(e => (0, a.jsx)(s.default, {
                            ...e,
                            type: r.SelfStreamAndVideoAlertType.VIDEO,
                            onConfirm: () => _(!f)
                        }))
                    }
                }) : null
            }