            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return f
                }
            }), s("70102");
            var a, n, r = s("37983");
            s("884691");
            var l = s("414456"),
                i = s.n(l),
                u = s("446674"),
                o = s("77078"),
                d = s("87657"),
                c = s("471671"),
                _ = s("782340"),
                E = s("898555");
            (n = a || (a = {}))[n.STAFF_NOTES = 1] = "STAFF_NOTES";
            let I = u.default.connectStores([c.default], () => ({
                    animate: c.default.isFocused()
                }))(e => {
                    let {
                        user: t,
                        className: s,
                        animate: a
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: i(E.staffReviewHeader, s),
                        children: [(0, r.jsx)(d.default, {
                            size: o.AvatarSizes.SIZE_32,
                            user: t,
                            animate: a
                        }), (0, r.jsxs)("div", {
                            className: E.headerText,
                            children: [(0, r.jsx)("div", {
                                className: E.label,
                                children: _.default.Messages.APPLICATION_STORE_STAFF_PICK
                            }), (0, r.jsx)("div", {
                                className: E.username,
                                children: t.username
                            })]
                        })]
                    })
                }),
                T = e => {
                    let {
                        data: t,
                        className: s
                    } = e;
                    if (1 === t.type) {
                        if (null == t.staffNotes) return null;
                        let {
                            user: e,
                            content: a
                        } = t.staffNotes;
                        return null == e ? null : (0, r.jsxs)("div", {
                            className: s,
                            children: [(0, r.jsx)(I, {
                                user: e,
                                className: E.header
                            }), (0, r.jsx)("div", {
                                className: E.notes,
                                children: a
                            })]
                        })
                    }
                    throw Error("Unknown type")
                };
            T.Types = a;
            var f = T