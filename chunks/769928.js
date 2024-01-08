            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                s = n("77078"),
                i = n("168973"),
                r = n("236898"),
                u = n("632616"),
                o = n("535348"),
                d = n("782340");

            function c(e, t) {
                let [n, c, f] = (0, r.default)(e, t), h = (0, l.useStateFromStores)([i.default], () => i.default.disableHideSelfStreamAndVideoConfirmationAlert);
                return n ? (0, a.jsx)(s.MenuCheckboxItem, {
                    id: "self-stream-hide",
                    label: d.default.Messages.SHOW_SELF_STREAM,
                    checked: !c,
                    action: () => {
                        if (h || c) return f(!c);
                        (0, s.openModal)(e => (0, a.jsx)(u.default, {
                            ...e,
                            type: o.SelfStreamAndVideoAlertType.STREAM,
                            onConfirm: () => f(!c)
                        }))
                    }
                }) : null
            }