            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return m
                }
            }), a("222007");
            var n = a("37983"),
                l = a("884691"),
                i = a("446674"),
                r = a("77078"),
                s = a("442939"),
                u = a("915639"),
                o = a("953109"),
                d = a("299039"),
                c = a("782340"),
                f = a("258818");

            function m(e) {
                var t, a;
                let {
                    clip: m
                } = e, [v] = (0, s.default)([null !== (t = m.applicationId) && void 0 !== t ? t : ""]), E = (0, i.useStateFromStores)([u.default], () => u.default.locale), p = l.useMemo(() => new Date(d.default.extractTimestamp(m.id)), [m.id]);
                return (0, n.jsxs)("div", {
                    className: f.root,
                    children: [(0, n.jsxs)("div", {
                        className: f.nameSection,
                        children: [(0, n.jsx)(o.default, {
                            game: v
                        }), (0, n.jsx)(r.Text, {
                            className: f.name,
                            variant: "text-md/medium",
                            color: "interactive-active",
                            children: null !== (a = null == v ? void 0 : v.name) && void 0 !== a ? a : m.applicationName
                        })]
                    }), (0, n.jsxs)("div", {
                        className: f.timeContainer,
                        children: [(0, n.jsxs)("div", {
                            children: [(0, n.jsx)(r.FormTitle, {
                                className: f.timeTitle,
                                children: c.default.Messages.CLIPS_EDIT_DATE_TITLE
                            }), (0, n.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                color: "interactive-active",
                                children: p.toLocaleDateString(E, {
                                    year: "2-digit",
                                    month: "2-digit",
                                    day: "2-digit"
                                })
                            })]
                        }), (0, n.jsxs)("div", {
                            children: [(0, n.jsx)(r.FormTitle, {
                                className: f.timeTitle,
                                children: c.default.Messages.CLIPS_EDIT_TIME_TITLE
                            }), (0, n.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                color: "interactive-active",
                                children: p.toLocaleTimeString(E, {
                                    hour: "numeric",
                                    minute: "numeric"
                                })
                            })]
                        })]
                    })]
                })
            }