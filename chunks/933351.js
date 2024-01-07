            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return N
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("917351"),
                o = s("476042"),
                d = s("669491"),
                u = s("77078"),
                c = s("673220"),
                E = s("782340"),
                _ = s("977618");

            function T(e) {
                let {
                    title: t,
                    children: s,
                    onEdit: n,
                    onRemove: l
                } = e;
                return (0, a.jsxs)("div", {
                    className: _.backgroundContainer,
                    children: [(0, a.jsxs)("div", {
                        className: _.containerPadding,
                        children: [(0, a.jsx)(u.FormTitle, {
                            tag: "h3",
                            className: _.containerTitle,
                            children: t
                        }), s]
                    }), (0, a.jsxs)(u.FormSection, {
                        className: _.containerFooter,
                        children: [(0, a.jsx)(u.Button, {
                            className: i(_.removeButton, _.button),
                            size: u.Button.Sizes.SMALL,
                            look: u.Button.Looks.BLANK,
                            onClick: l,
                            children: E.default.Messages.REMOVE
                        }), (0, a.jsx)(u.Button, {
                            className: _.button,
                            size: u.Button.Sizes.SMALL,
                            color: u.Button.Colors.PRIMARY,
                            onClick: n,
                            children: E.default.Messages.EDIT
                        })]
                    })]
                })
            }
            let I = "FORM_FIELD";

            function S(e) {
                let {
                    index: t,
                    field: s,
                    isDropHovered: l,
                    onDrop: u
                } = e, E = (0, r.debounce)(async (e, t, s) => {
                    await u(e, t, s)
                }), S = n.useRef(null), [, N] = (0, o.useDrag)({
                    type: I,
                    item: {
                        index: t,
                        field: s
                    },
                    end: (e, t) => {
                        null != e && !t.didDrop() && E(e.field, null, !0)
                    }
                }), [, g] = (0, o.useDrop)({
                    accept: I,
                    hover: (e, s) => {
                        var a;
                        let {
                            index: n
                        } = e, l = null === (a = S.current) || void 0 === a ? void 0 : a.getBoundingClientRect(), i = s.getClientOffset();
                        if (null == l || null == i) return;
                        let r = (l.bottom - l.top) / 2,
                            o = i.y - l.top;
                        (!(n < t) || !(o < r)) && (!(n > t) || !(o < r)) && n !== t && E(e.field, t, !1)
                    },
                    drop: e => {
                        E(e.field, t, !0)
                    }
                });
                return n.useLayoutEffect(() => (N(g(S)), () => {
                    g(null), N(null)
                }), [N, g]), (0, a.jsxs)("div", {
                    ref: S,
                    "data-dnd-name": "field-".concat(t),
                    className: i(_.dragContainer, {
                        [_.dropHovered]: l
                    }),
                    children: [(0, a.jsx)("div", {
                        className: _.dragIconContainer,
                        children: (0, a.jsx)(c.default, {
                            className: _.dragIcon,
                            color: d.default.unsafe_rawColors.PRIMARY_400.css
                        })
                    }), (0, a.jsx)(T, {
                        ...e
                    })]
                })
            }

            function N(e) {
                return (0, a.jsx)("div", {
                    className: _.spacingContainer,
                    children: e.isDragEnabled ? (0, a.jsx)(S, {
                        ...e
                    }) : (0, a.jsx)(T, {
                        ...e
                    })
                })
            }