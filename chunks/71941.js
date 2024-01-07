            "use strict";
            s.r(t), s.d(t, {
                Tab: function() {
                    return l
                },
                default: function() {
                    return u
                }
            });
            var a, l, i = s("37983");
            s("884691");
            var d = s("414456"),
                r = s.n(d),
                n = s("77078"),
                o = s("782340"),
                c = s("805986");

            function u(e) {
                let {
                    selectedTab: t,
                    onClick: s,
                    submitted: a
                } = e;
                return (0, i.jsxs)("div", {
                    className: c.tabs,
                    children: [(0, i.jsx)(T, {
                        tab: 0,
                        selectedTab: t,
                        label: o.default.Messages.NOTIF_MIGRATION_INTRO_TAB,
                        disabled: a,
                        onClick: s
                    }), (0, i.jsx)(T, {
                        tab: 1,
                        selectedTab: t,
                        label: o.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_TAB,
                        disabled: a,
                        onClick: s
                    }), (0, i.jsx)(T, {
                        tab: 2,
                        selectedTab: t,
                        label: o.default.Messages.NOTIF_MIGRATION_REVIEW_TAB,
                        disabled: !a,
                        onClick: s
                    })]
                })
            }

            function T(e) {
                let {
                    tab: t,
                    selectedTab: s,
                    label: a,
                    disabled: l,
                    onClick: d
                } = e;
                return l ? (0, i.jsxs)("div", {
                    className: r(c.tab, {
                        [c.current]: s === t
                    }),
                    children: [(0, i.jsx)("div", {
                        className: c.progressBar
                    }), (0, i.jsx)(n.Text, {
                        variant: "text-xs/semibold",
                        color: s === t ? "text-brand" : "text-muted",
                        children: a
                    })]
                }) : (0, i.jsxs)(n.Clickable, {
                    onClick: () => d(t),
                    className: r(c.tab, {
                        [c.current]: s === t
                    }),
                    children: [(0, i.jsx)("div", {
                        className: c.progressBar
                    }), (0, i.jsx)(n.Text, {
                        variant: "text-xs/semibold",
                        color: s === t ? "text-brand" : "text-muted",
                        children: a
                    })]
                })
            }(a = l || (l = {}))[a.Intro = 0] = "Intro", a[a.Customize = 1] = "Customize", a[a.Review = 2] = "Review"