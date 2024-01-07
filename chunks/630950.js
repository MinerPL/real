            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return f
                }
            });
            var n = s("37983");
            s("884691");
            var a = s("446674"),
                u = s("77078"),
                l = s("272030"),
                i = s("79112"),
                o = s("386045"),
                r = s("719332"),
                c = s("803725"),
                d = s("49111"),
                S = s("782340");

            function f(e) {
                let {
                    onSelect: t
                } = e, {
                    clipsLength: s
                } = (0, a.useStateFromStoresObject)([o.default], () => o.default.getSettings()), f = (0, r.default)();
                return (0, n.jsxs)(u.Menu, {
                    navId: "clips-context",
                    "aria-label": S.default.Messages.CLIPS_SETTINGS,
                    onClose: l.closeContextMenu,
                    onSelect: t,
                    children: [(0, n.jsx)(u.MenuGroup, {
                        children: (0, n.jsx)(u.MenuItem, {
                            id: "clips-duration",
                            label: S.default.Messages.CLIPS_SETTINGS_LENGTH,
                            children: f.map(e => {
                                let {
                                    value: t,
                                    label: a
                                } = e;
                                return (0, n.jsx)(u.MenuRadioItem, {
                                    id: "clips-duration-".concat(t),
                                    group: "clips-duration",
                                    label: a,
                                    action: () => (0, c.updateClipsLength)(t),
                                    checked: t === s
                                }, t)
                            })
                        })
                    }), (0, n.jsx)(u.MenuGroup, {
                        children: (0, n.jsx)(u.MenuItem, {
                            id: "clips-settings",
                            label: S.default.Messages.CLIPS_SETTINGS,
                            action: () => i.default.open(d.UserSettingsSections.CLIPS)
                        })
                    })]
                })
            }