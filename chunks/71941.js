            "use strict";
            a.r(s), a.d(s, {
                Tab: function() {
                    return l
                },
                default: function() {
                    return o
                }
            });
            var t, l, i = a("37983");
            a("884691");
            var n = a("414456"),
                d = a.n(n),
                c = a("77078"),
                r = a("782340"),
                h = a("805986");

            function o(e) {
                let {
                    selectedTab: s,
                    onClick: a,
                    submitted: t
                } = e;
                return (0, i.jsxs)("div", {
                    className: h.tabs,
                    children: [(0, i.jsx)(x, {
                        tab: 0,
                        selectedTab: s,
                        label: r.default.Messages.NOTIF_MIGRATION_INTRO_TAB,
                        disabled: t,
                        onClick: a
                    }), (0, i.jsx)(x, {
                        tab: 1,
                        selectedTab: s,
                        label: r.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_TAB,
                        disabled: t,
                        onClick: a
                    }), (0, i.jsx)(x, {
                        tab: 2,
                        selectedTab: s,
                        label: r.default.Messages.NOTIF_MIGRATION_TIPS_TAB,
                        disabled: !t,
                        onClick: a
                    })]
                })
            }

            function x(e) {
                let {
                    tab: s,
                    selectedTab: a,
                    label: t,
                    disabled: l,
                    onClick: n
                } = e;
                return l ? (0, i.jsxs)("div", {
                    className: d(h.tab, {
                        [h.current]: a === s
                    }),
                    children: [(0, i.jsx)("div", {
                        className: h.progressBar
                    }), (0, i.jsx)(c.Text, {
                        variant: "text-xs/medium",
                        color: a === s ? "text-brand" : "text-muted",
                        children: t
                    })]
                }) : (0, i.jsxs)(c.Clickable, {
                    onClick: () => n(s),
                    className: d(h.tab, {
                        [h.current]: a === s
                    }),
                    children: [(0, i.jsx)("div", {
                        className: h.progressBar
                    }), (0, i.jsx)(c.Text, {
                        variant: "text-xs/medium",
                        color: a === s ? "text-brand" : "text-muted",
                        children: t
                    })]
                })
            }(t = l || (l = {}))[t.Intro = 0] = "Intro", t[t.Customize = 1] = "Customize", t[t.Tips = 2] = "Tips"