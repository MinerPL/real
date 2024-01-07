            "use strict";
            n.r(t), n.d(t, {
                checkModifiers: function() {
                    return f
                },
                default: function() {
                    return p
                }
            }), n("222007");
            var l = n("717837"),
                i = n.n(l),
                r = n("627445"),
                o = n.n(r),
                s = n("83800"),
                a = n("916429"),
                u = n("939563"),
                d = n("385887"),
                c = n("49111");

            function f(e, t) {
                let {
                    cmd: n = !1,
                    ctrl: l = !1,
                    alt: i = !1,
                    shift: r = !1
                } = t;
                return (null == n || e.metaKey === n) && (null == l || e.ctrlKey === l) && (null == i || e.altKey === i) && (null == r || e.shiftKey === r)
            }

            function p(e) {
                return e.onKeyDown = t => {
                    var n, l, r, p;
                    let m = e.isMac;
                    switch (t.which) {
                        case c.KeyboardKeys.B:
                            if (!d.EditorUtils.isEditorEmpty(e) && f(t, {
                                    ctrl: !m,
                                    cmd: m
                                })) return (0, a.toggleMarkdownStyle)(e, "bold"), !0;
                            break;
                        case c.KeyboardKeys.I:
                            if (!d.EditorUtils.isEditorEmpty(e) && f(t, {
                                    ctrl: !m,
                                    cmd: m
                                })) return (0, a.toggleMarkdownStyle)(e, "italics"), !0;
                            break;
                        case c.KeyboardKeys.U:
                            if (!d.EditorUtils.isEditorEmpty(e) && f(t, {
                                    ctrl: !m,
                                    cmd: m
                                })) return (0, a.toggleMarkdownStyle)(e, "underline"), !0;
                            break;
                        case c.KeyboardKeys.S:
                            if (!d.EditorUtils.isEditorEmpty(e) && f(t, {
                                    ctrl: !m,
                                    cmd: m,
                                    shift: !0
                                })) return (0, a.toggleMarkdownStyle)(e, "strikethrough"), !0;
                            break;
                        case c.KeyboardKeys.TAB:
                            if (null != e.selection && f(t, {
                                    shift: null
                                })) {
                                let [l, i] = d.RangeUtils.edges(e.selection), r = d.EditorUtils.blocks(e).slice(l.path[0], i.path[0] + 1), o = !0;
                                for (let [e] of r)
                                    if ("line" !== e.type || !(null === (n = e.codeBlockState) || void 0 === n ? void 0 : n.isInCodeBlock)) {
                                        o = !1;
                                        break
                                    } if (o) {
                                    if (!t.shiftKey && d.RangeUtils.isCollapsed(e.selection)) return u.SlateTransforms.insertText(e, "  "), !0;
                                    let n = !t.shiftKey;
                                    return s.HistoryUtils.withSingleEntry(e, () => {
                                        var t, l, i, o;
                                        let s = null !== (i = null === (t = e.selection) || void 0 === t ? void 0 : t.anchor) && void 0 !== i ? i : d.EditorUtils.start(e, []),
                                            a = null !== (o = null === (l = e.selection) || void 0 === l ? void 0 : l.focus) && void 0 !== o ? o : d.EditorUtils.end(e, []);
                                        for (let [t, l] of r) {
                                            let i = t.children[0];
                                            if (!d.TextUtils.isText(t.children[0])) continue;
                                            let r = d.PathUtils.child(l, 0),
                                                o = {
                                                    path: r,
                                                    offset: 0
                                                };
                                            if (n) u.SlateTransforms.insertText(e, "  ", {
                                                at: o
                                            }), d.PathUtils.equals(s.path, r) && 0 !== s.offset && (s = {
                                                path: r,
                                                offset: s.offset + 2
                                            }), d.PathUtils.equals(a.path, r) && 0 !== a.offset && (a = {
                                                path: r,
                                                offset: a.offset + 2
                                            });
                                            else if (i.text.startsWith("  ")) {
                                                let t = {
                                                    path: d.PathUtils.child(l, 0),
                                                    offset: 2
                                                };
                                                u.SlateTransforms.delete(e, {
                                                    at: {
                                                        anchor: o,
                                                        focus: t
                                                    }
                                                }), d.PathUtils.equals(s.path, r) && (s = {
                                                    path: r,
                                                    offset: Math.max(0, s.offset - 2)
                                                }), d.PathUtils.equals(a.path, r) && (a = {
                                                    path: r,
                                                    offset: Math.max(0, a.offset - 2)
                                                })
                                            }
                                        }
                                        u.SlateTransforms.select(e, {
                                            anchor: s,
                                            focus: a
                                        })
                                    }), !0
                                }
                            }
                            break;
                        case c.KeyboardKeys.ARROW_LEFT:
                        case c.KeyboardKeys.ARROW_RIGHT: {
                            let n, o;
                            if (f(t, {
                                    shift: null
                                })) n = "character";
                            else if (f(t, {
                                    ctrl: !m,
                                    alt: m,
                                    shift: null
                                })) n = "word";
                            else if (m && f(t, {
                                    cmd: !0,
                                    shift: null
                                })) return !1;
                            else return !1;
                            t.shiftKey && (o = "focus");
                            let s = e.children[null !== (p = null === (r = e.selection) || void 0 === r ? void 0 : null === (l = r.focus) || void 0 === l ? void 0 : l.path[0]) && void 0 !== p ? p : 0],
                                a = "rtl" === i(d.NodeUtils.string(s)),
                                h = t.which === c.KeyboardKeys.ARROW_LEFT == !a;
                            return u.SlateTransforms.keyboardMove(e, {
                                reverse: h,
                                unit: n,
                                edge: o
                            }), !0
                        }
                        case c.KeyboardKeys.A:
                            if (m && f(t, {
                                    ctrl: !0
                                })) {
                                let t = d.EditorUtils.getCurrentBlock(e);
                                if (null != t) {
                                    let [, n] = t, l = d.PathUtils.child(n, 0), i = {
                                        path: l,
                                        offset: 0
                                    };
                                    return u.SlateTransforms.select(e, {
                                        anchor: i,
                                        focus: i
                                    }), !0
                                }
                            }
                            break;
                        case c.KeyboardKeys.E:
                            if (m && f(t, {
                                    ctrl: !0
                                })) {
                                let t = d.EditorUtils.getCurrentBlock(e);
                                if (null != t) {
                                    let [n, l] = t, i = d.PathUtils.child(l, n.children.length - 1), [r] = d.EditorUtils.node(e, i), o = {
                                        path: i,
                                        offset: r.text.length
                                    };
                                    return u.SlateTransforms.select(e, {
                                        anchor: o,
                                        focus: o
                                    }), !0
                                }
                            }
                            break;
                        case c.KeyboardKeys.BACKSPACE:
                        case c.KeyboardKeys.DELETE:
                        case c.KeyboardKeys.K:
                            let h = t.which === c.KeyboardKeys.BACKSPACE;
                            if ((!m && t.which !== c.KeyboardKeys.K && f(t, {
                                    ctrl: !0,
                                    shift: !0
                                }) || m && t.which !== c.KeyboardKeys.K && f(t, {
                                    cmd: !0
                                }) || m && t.which === c.KeyboardKeys.K && f(t, {
                                    ctrl: !0
                                })) && null != e.selection) {
                                let [t, n] = d.RangeUtils.edges(e.selection), [l, i] = d.EditorUtils.node(e, [h ? t.path[0] : n.path[0]]);
                                if (o(d.ElementUtils.isElement(l) && d.EditorUtils.isBlock(e, l), "Top-most node of selection is not a block"), h && !d.PointUtils.isAtStart(t, [l, i]) || !h && !d.PointUtils.isAtEnd(n, [l, i])) return h ? e.deleteBackward("line") : e.deleteForward("line"), !0
                            }
                    }
                    return !1
                }, e
            }