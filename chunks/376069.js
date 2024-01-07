            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("25261");

            function r(e) {
                let {
                    selected: t,
                    muted: n = !1,
                    highlighted: a = !1,
                    wrapContent: r = !1,
                    avatar: o,
                    decorators: u,
                    name: d,
                    subText: c,
                    avatarClassName: f,
                    innerClassName: h
                } = e;
                return (0, l.jsxs)("div", {
                    className: s(h, i.layout, {
                        [i.muted]: !t && n,
                        [i.highlighted]: a,
                        [i.wrappedLayout]: r
                    }),
                    children: [(0, l.jsx)("div", {
                        className: s(i.avatar, f),
                        children: o
                    }), (0, l.jsxs)("div", {
                        className: i.content,
                        children: [(0, l.jsxs)("div", {
                            className: i.nameAndDecorators,
                            children: [(0, l.jsx)("div", {
                                className: s(i.name, {
                                    [i.wrappedName]: r
                                }),
                                children: d
                            }), u]
                        }), null != c ? (0, l.jsx)("div", {
                            className: i.subText,
                            children: c
                        }) : null]
                    })]
                })
            }