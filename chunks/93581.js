            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return S
                }
            }), s("222007"), s("881410");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("907002"),
                o = s("446674"),
                d = s("669491"),
                u = s("77078"),
                c = s("206230"),
                E = s("461380"),
                _ = s("578706"),
                T = s("110569");

            function I(e) {
                let {
                    checked: t,
                    children: s
                } = e;
                return (0, a.jsxs)("div", {
                    className: T.row,
                    children: [(0, a.jsx)(u.Text, {
                        variant: "text-md/normal",
                        color: "interactive-active",
                        className: T.rowText,
                        children: s
                    }), t ? (0, a.jsx)(_.default, {
                        backgroundColor: d.default.unsafe_rawColors.WHITE_500.css,
                        className: i(T.rowIcon, T.rowIconChecked)
                    }) : (0, a.jsx)("div", {
                        className: i(T.rowIcon, T.rowIconEmpty)
                    })]
                })
            }

            function S(e) {
                let {
                    title: t,
                    children: s,
                    buttonLabel: l,
                    buttonCallback: i,
                    disabled: d
                } = e, [_, S] = n.useState(!1), N = (0, o.useStateFromStores)([c.default], () => c.default.useReducedMotion), g = s.flatMap(e => e.items.map(e => e.completed)), f = g.filter(e => e).length / g.length, A = (0, r.useSpring)({
                    width: "".concat(100 * f, "%"),
                    immediate: N
                });
                return (0, a.jsxs)("div", {
                    className: T.container,
                    children: [(0, a.jsxs)(u.Clickable, {
                        className: T.headerBar,
                        onClick: () => S(e => !e),
                        children: [(0, a.jsx)(u.Heading, {
                            variant: "heading-md/semibold",
                            className: T.headerText,
                            children: t
                        }), (0, a.jsx)(E.default, {
                            direction: _ ? E.default.Directions.DOWN : E.default.Directions.UP,
                            className: T.headerCaret
                        })]
                    }), (0, a.jsx)("div", {
                        className: T.progressBarOuter,
                        children: (0, a.jsx)(r.animated.div, {
                            className: T.progressBarInner,
                            style: A
                        })
                    }), !_ && s.map((e, t) => {
                        let {
                            title: s,
                            items: l
                        } = e;
                        return (0, a.jsxs)(n.Fragment, {
                            children: [t > 0 && (0, a.jsx)(u.FormDivider, {
                                className: T.divider
                            }), (0, a.jsx)(u.FormTitle, {
                                className: T.categoryTitle,
                                children: s
                            }), l.map((e, t) => (0, a.jsx)(I, {
                                children: e.description,
                                checked: e.completed
                            }, t))]
                        }, t)
                    }), null !== l && "" !== l && null !== i && (0, a.jsxs)("div", {
                        children: [(0, a.jsx)(u.FormDivider, {
                            className: T.divider
                        }), (0, a.jsx)(u.Button, {
                            className: T.button,
                            size: u.Button.Sizes.SMALL,
                            color: u.Button.Colors.BRAND_NEW,
                            hover: u.Button.Colors.BRAND_NEW,
                            onClick: i,
                            disabled: 1 !== f || d,
                            children: l
                        })]
                    })]
                })
            }