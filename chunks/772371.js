            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                s = n("77078"),
                i = n("755624"),
                r = n("263024"),
                o = n("414833"),
                u = n("648564"),
                d = n("782340");

            function c(e) {
                let t = (0, o.useThreadNotificationSetting)(e),
                    n = (0, l.useStateFromStores)([i.default], () => i.default.hasJoined(e.id));
                return n ? (0, a.jsx)(s.MenuItem, {
                    id: "thread-notifications",
                    label: d.default.Messages.NOTIFICATION_SETTINGS,
                    children: (0, u.getThreadNotificationOptions)().map(n => {
                        let {
                            setting: l,
                            label: i
                        } = n;
                        return (0, a.jsx)(s.MenuRadioItem, {
                            group: "thread-notifications",
                            id: "".concat(l),
                            label: i,
                            action: () => r.default.setNotificationSettings(e, {
                                flags: l
                            }),
                            checked: l === t
                        }, l)
                    })
                }) : (0, a.jsx)(s.MenuItem, {
                    id: "notifications-disabled",
                    label: d.default.Messages.NOTIFICATION_SETTINGS,
                    disabled: !0
                })
            }