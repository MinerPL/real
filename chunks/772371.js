            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                i = n("77078"),
                u = n("755624"),
                r = n("263024"),
                s = n("414833"),
                d = n("648564"),
                o = n("782340");

            function f(e) {
                let t = (0, s.useThreadNotificationSetting)(e),
                    n = (0, l.useStateFromStores)([u.default], () => u.default.hasJoined(e.id));
                return n ? (0, a.jsx)(i.MenuItem, {
                    id: "thread-notifications",
                    label: o.default.Messages.NOTIFICATION_SETTINGS,
                    children: (0, d.getThreadNotificationOptions)().map(n => {
                        let {
                            setting: l,
                            label: u
                        } = n;
                        return (0, a.jsx)(i.MenuRadioItem, {
                            group: "thread-notifications",
                            id: "".concat(l),
                            label: u,
                            action: () => r.default.setNotificationSettings(e, {
                                flags: l
                            }),
                            checked: l === t
                        }, l)
                    })
                }) : (0, a.jsx)(i.MenuItem, {
                    id: "notifications-disabled",
                    label: o.default.Messages.NOTIFICATION_SETTINGS,
                    disabled: !0
                })
            }