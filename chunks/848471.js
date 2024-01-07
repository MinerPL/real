            "use strict";
            n.r(t), n.d(t, {
                ToolbarButtons: function() {
                    return I
                },
                default: function() {
                    return N
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("371621"),
                a = n("77078"),
                u = n("244201"),
                d = n("520089"),
                c = n("769215"),
                f = n("204591"),
                p = n("685020"),
                m = n("265363"),
                h = n("140567"),
                E = n("983782"),
                S = n("791776"),
                g = n("83800"),
                C = n("916429"),
                T = n("939563"),
                v = n("385887"),
                y = n("395364"),
                x = n("223797");

            function I(e) {
                var t;
                let {
                    editorRef: n,
                    options: i,
                    iconClassName: r,
                    dividerClassName: s
                } = e, a = null === (t = n.current) || void 0 === t ? void 0 : t.getSlateEditor();
                return null == a ? null : (0, l.jsxs)("div", {
                    className: x.buttons,
                    children: [(0, l.jsx)(_, {
                        slateEditor: a,
                        markdownSyntax: "bold",
                        children: (0, l.jsx)(c.default, {
                            className: o(x.icon, r)
                        })
                    }), (0, l.jsx)(_, {
                        slateEditor: a,
                        markdownSyntax: "italics",
                        children: (0, l.jsx)(p.default, {
                            className: o(x.icon, r)
                        })
                    }), (0, l.jsx)(_, {
                        slateEditor: a,
                        markdownSyntax: "strikethrough",
                        children: (0, l.jsx)(h.default, {
                            className: o(x.icon, r)
                        })
                    }), (0, l.jsx)("div", {
                        className: o(x.divider, s)
                    }), !(null == i ? void 0 : i.disableBlockQuotes) && (0, l.jsx)(A, {
                        slateEditor: a,
                        blockType: "blockQuote",
                        children: (0, l.jsx)(d.default, {
                            className: o(x.icon, r)
                        })
                    }), (0, l.jsx)(_, {
                        slateEditor: a,
                        markdownSyntax: "inlineCode",
                        children: (0, l.jsx)(f.default, {
                            className: o(x.icon, r)
                        })
                    }), (0, l.jsx)(_, {
                        slateEditor: a,
                        markdownSyntax: "spoiler",
                        children: (0, l.jsx)(m.default, {
                            className: o(x.icon, r)
                        })
                    })]
                })
            }
            var N = i.forwardRef(function(e, t) {
                var n;
                let {
                    editorRef: r,
                    containerRef: o,
                    options: a
                } = e, d = i.useRef(null), [c, f] = i.useState(!1), p = i.useRef(), m = i.useContext(u.default), h = i.useCallback(() => {
                    f(!1), clearTimeout(p.current)
                }, []), g = i.useCallback(e => {
                    var t;
                    let n = m.renderWindow,
                        l = e.target instanceof n.Node && (null === (t = d.current) || void 0 === t ? void 0 : t.contains(e.target));
                    !l && h()
                }, [m, h]), C = i.useCallback(e => {
                    let t = m.renderWindow;
                    if (e.target instanceof t.Element) {
                        if (0 !== e.button) h();
                        else {
                            var n;
                            let l = e.target instanceof t.Node && (null === (n = d.current) || void 0 === n ? void 0 : n.contains(e.target));
                            clearTimeout(p.current), p.current = setTimeout(() => {
                                var t;
                                let n = null === (t = (0, S.eventOwnerDocument)(e)) || void 0 === t ? void 0 : t.activeElement,
                                    i = o.current;
                                f(l || null != n && null != i && i.contains(n))
                            }, 100)
                        }
                    } else h()
                }, [m, o, h]);
                i.useImperativeHandle(t, () => ({
                    hide: h
                }), [h]), i.useEffect(() => {
                    let e = m.renderWindow;
                    return e.document.addEventListener("keydown", h), e.document.addEventListener("mousedown", g), e.document.addEventListener("mouseup", C), e.addEventListener("focus", h), e.addEventListener("blur", h), () => {
                        e.document.removeEventListener("keydown", h), e.document.removeEventListener("mousedown", g), e.document.removeEventListener("mouseup", C), e.removeEventListener("focus", h), e.removeEventListener("blur", h), clearTimeout(p.current)
                    }
                }, [m, h, g, C]);
                let {
                    x: T,
                    y
                } = i.useMemo(() => {
                    var e, t, n, l;
                    let i = null === (e = r.current) || void 0 === e ? void 0 : e.getSlateEditor();
                    if ((null == i ? void 0 : i.selection) == null || v.RangeUtils.isCollapsed(i.selection) || !c) return {
                        x: null,
                        y: null
                    };
                    let a = s.ReactEditor.findDocumentOrShadowRoot(i),
                        u = a.getSelection();
                    if (null == u || null == u.focusNode || null == u.anchorNode || u.isCollapsed) return {
                        x: null,
                        y: null
                    };
                    let d = a.createRange();
                    d.setStart(u.focusNode, u.focusOffset), d.setEnd(u.focusNode, u.focusOffset);
                    let f = d.getBoundingClientRect(),
                        p = a.createRange();
                    p.setStart(u.anchorNode, u.anchorOffset), p.setEnd(u.anchorNode, u.anchorOffset);
                    let m = p.getBoundingClientRect(),
                        h = a.createRange();
                    h.setStart(u.anchorNode, u.anchorOffset), h.setEnd(u.focusNode, u.focusOffset);
                    let E = h.getBoundingClientRect(),
                        S = f.x === m.x,
                        g = S ? E.x : Math.min(f.x, m.x),
                        C = S ? E.x + E.width : Math.max(f.x, m.x),
                        T = null !== (l = null === (n = o.current) || void 0 === n ? void 0 : null === (t = n.getBoundingClientRect()) || void 0 === t ? void 0 : t.y) && void 0 !== l ? l : 0,
                        y = Math.max(T, Math.min(m.y, f.y));
                    return {
                        x: g + (C - g) / 2,
                        y
                    }
                }, [o, c, r]), [N, _] = i.useState(0), [A, O] = i.useState(0);
                if (i.useLayoutEffect(() => {
                        if (null == T || null == y || null == d.current) return;
                        let e = d.current.getBoundingClientRect();
                        O(e.width / 2), _(e.height + 12)
                    }, [T, y]), null == T || null == y) return null;
                let M = null === (n = r.current) || void 0 === n ? void 0 : n.getSlateEditor();
                return null == M ? null : (0, l.jsx)(E.default, {
                    children: (0, l.jsxs)("div", {
                        id: "slate-toolbar",
                        ref: d,
                        className: x.toolbar,
                        style: {
                            top: y - N,
                            left: T - A
                        },
                        onMouseDown: e => {
                            e.stopPropagation()
                        },
                        onMouseUp: e => {
                            e.stopPropagation()
                        },
                        children: [(0, l.jsx)(R, {
                            slateEditor: M
                        }), (0, l.jsx)(I, {
                            editorRef: r,
                            options: a
                        })]
                    })
                })
            });

            function _(e) {
                let {
                    slateEditor: t,
                    markdownSyntax: n,
                    children: i
                } = e, r = !1;
                if ((null == t ? void 0 : t.selection) != null) {
                    let [e, l] = v.RangeUtils.edges(t.selection);
                    r = null != (0, C.parseSelectedSyntax)(t, e, l).before[n]
                }
                return (0, l.jsx)(a.Button, {
                    className: x.button,
                    innerClassName: x.buttonInner,
                    color: r ? x.active : x.inactive,
                    hover: x.hover,
                    look: a.Button.Looks.FILLED,
                    size: a.Button.Sizes.NONE,
                    onClick: () => {
                        null != t && g.HistoryUtils.withSingleEntry(t, () => (0, C.toggleMarkdownStyle)(t, n))
                    },
                    children: i
                })
            }

            function A(e) {
                let {
                    blockType: t,
                    slateEditor: n,
                    children: i
                } = e, r = null != n ? v.EditorUtils.getCurrentBlock(n) : null, o = null != r && v.NodeUtils.isType(r[0], t);
                return (0, l.jsx)(a.Button, {
                    className: x.button,
                    innerClassName: x.buttonInner,
                    color: o ? x.active : x.inactive,
                    hover: x.hover,
                    look: a.Button.Looks.FILLED,
                    size: a.Button.Sizes.NONE,
                    onClick: () => {
                        null != n && g.HistoryUtils.withSingleEntry(n, () => (0, C.toggleBlockStyle)(n, t))
                    },
                    children: i
                })
            }

            function R(e) {
                var t;
                let {
                    slateEditor: n
                } = e, [l, r] = null !== (t = v.EditorUtils.getSelectedVoid(n)) && void 0 !== t ? t : [null, null], o = i.useCallback(e => {
                    if ((null == n ? void 0 : n.selection) == null || null == r) return;
                    let t = n.selection;
                    g.HistoryUtils.withSingleEntry(n, () => {
                        T.SlateTransforms.voidToText(n, e, r), T.SlateTransforms.select(n, t)
                    })
                }, [n, r]);
                return null == l ? null : (0, y.default)(l, {
                    replace: o
                })
            }