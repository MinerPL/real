            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                s = n("64016"),
                i = n("255228"),
                r = n("263024"),
                o = n("414833"),
                u = n("648564");

            function d(e) {
                let {
                    channel: t,
                    closePopout: n,
                    onSelect: d,
                    navId: c,
                    label: f
                } = e, E = (0, s.default)(t, "Notifications Bell"), _ = (0, i.default)(t), h = (0, o.useThreadNotificationSetting)(t);
                return (0, l.jsxs)(a.Menu, {
                    navId: c,
                    onClose: n,
                    "aria-label": f,
                    onSelect: d,
                    children: [(0, l.jsxs)(a.MenuGroup, {
                        children: [t.isForumPost() ? E : null, _]
                    }), (0, l.jsx)(a.MenuGroup, {
                        children: (0, u.getThreadNotificationOptions)().map(e => {
                            let {
                                setting: n,
                                label: s
                            } = e;
                            return (0, l.jsx)(a.MenuRadioItem, {
                                group: "thread-notifications",
                                id: "".concat(n),
                                label: s,
                                action: () => r.default.setNotificationSettings(t, {
                                    flags: n
                                }),
                                checked: n === h
                            }, n)
                        })
                    })]
                })
            }