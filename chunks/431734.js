            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return h
                }
            });
            var n = a("37983"),
                l = a("884691"),
                i = a("414456"),
                r = a.n(i),
                s = a("446674"),
                u = a("77078"),
                o = a("308289"),
                d = a("697218"),
                c = a("564875"),
                f = a("449008"),
                m = a("387111"),
                v = a("782340"),
                E = a("887642");

            function p(e) {
                let {
                    user: t
                } = e, a = m.default.useName(null, null, t);
                return (0, n.jsxs)("div", {
                    className: E.userItem,
                    children: [(0, n.jsx)(o.default, {
                        user: t
                    }), (0, n.jsx)(u.Text, {
                        color: "header-primary",
                        variant: "text-sm/medium",
                        children: a
                    })]
                })
            }

            function h(e) {
                let {
                    clip: t,
                    className: a
                } = e, i = (0, s.useStateFromStoresArray)([d.default], () => t.users.map(d.default.getUser).filter(f.isNotNullish)), o = l.useCallback(e => {
                    let {
                        row: t
                    } = e, a = i[t];
                    return null == a ? null : (0, n.jsx)(p, {
                        user: a
                    }, t)
                }, [i]);
                return (0, n.jsxs)("div", {
                    className: r(a, E.root),
                    children: [(0, n.jsx)("div", {
                        className: E.header,
                        children: (0, n.jsxs)(u.FormTitle, {
                            className: E.title,
                            children: [v.default.Messages.CLIPS_EDIT_USER_LIST_TITLE, (0, n.jsxs)("div", {
                                className: E.userCountPill,
                                children: [(0, n.jsx)(u.Text, {
                                    color: "text-normal",
                                    variant: "text-xs/medium",
                                    children: i.length
                                }), (0, n.jsx)(c.default, {
                                    className: E.userCountIcon
                                })]
                            })]
                        })
                    }), (0, n.jsx)(u.List, {
                        className: E.userList,
                        sectionHeight: 0,
                        rowHeight: 40,
                        sections: [i.length],
                        renderRow: o
                    })]
                })
            }