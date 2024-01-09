            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                s = n("77078"),
                u = n("126501"),
                l = n("816092"),
                o = n("782340");

            function r(e) {
                let t = (0, i.useStateFromStores)([l.default], () => l.default.isCollapsed(e.id), [e.id]);
                return __OVERLAY__ ? null : (0, a.jsx)(s.MenuCheckboxItem, {
                    id: "hide-voice-names",
                    label: o.default.Messages.VOICE_CHANNEL_HIDE_NAMES,
                    action: () => u.default.update(e.id),
                    checked: t
                })
            }