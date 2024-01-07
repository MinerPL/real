            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                s = n("263024"),
                i = n("300322"),
                r = n("49111"),
                o = n("782340");

            function u(e) {
                var t, n;
                let u = (0, i.useIsThreadModerator)(e);
                if (!u || e.type !== r.ChannelTypes.PRIVATE_THREAD) return null;
                let d = null === (n = null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.invitable) || void 0 === n || n;
                return (0, a.jsx)(l.MenuCheckboxItem, {
                    id: "toggle-thread-invitable",
                    label: o.default.Messages.THREAD_INVITABLE_TOGGLE_LABEL,
                    checked: d,
                    action: () => s.default.setInvitable(e, !d)
                })
            }