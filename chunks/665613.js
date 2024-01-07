            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("222007"), n("106442"), n("175143");
            var l = n("987295"),
                i = n("939563"),
                r = n("385887");

            function o(e) {
                let {
                    apply: t,
                    deleteBackward: n,
                    deleteForward: o,
                    deleteFragment: a,
                    insertText: d
                } = e;
                return e.apply = n => {
                    var l;
                    if ("set_selection" === n.type && (null === (l = e.composition) || void 0 === l ? void 0 : l.startedInsideInline) && r.RangeUtils.isRange(n.properties) && r.RangeUtils.isRange(n.newProperties) && r.RangeUtils.isCollapsed(n.newProperties)) {
                        let t = r.EditorUtils.getParentInline(e, n.properties),
                            l = r.EditorUtils.getParentInline(e, n.newProperties);
                        if (null != t && (null == l || !r.PathUtils.equals(t[1], l[1]))) return
                    }
                    t(n)
                }, e.insertText = t => {
                    if (null != e.selection) {
                        let n = r.EditorUtils.getCurrentInline(e);
                        if (null != n) {
                            i.SlateTransforms.insertText(e, t);
                            return
                        }
                    }
                    d(t)
                }, e.deleteBackward = t => {
                    !s(e, t, !0) && n(t)
                }, e.deleteForward = t => {
                    !s(e, t, !1) && o(t)
                }, e.deleteFragment = t => {
                    if (null != e.selection && r.RangeUtils.isExpanded(e.selection)) {
                        var n, l, o, s;
                        let u = e.selection.anchor,
                            d = e.selection.focus,
                            c = r.EditorUtils.getParentInline(e, u),
                            f = r.EditorUtils.getParentInline(e, d);
                        if (null != c && null != f && r.PathUtils.equals(c[1], f[1])) {
                            a(t);
                            return
                        }
                        let p = r.RangeUtils.isForward(e.selection);
                        if (null != c) {
                            let [, t] = c, [i, o] = r.EditorUtils.edges(e, t);
                            p && r.PointUtils.equals(u, i) ? u = null !== (n = r.EditorUtils.before(e, i)) && void 0 !== n ? n : r.EditorUtils.start(e, []) : !p && r.PointUtils.equals(u, o) && (u = null !== (l = r.EditorUtils.after(e, o)) && void 0 !== l ? l : r.EditorUtils.end(e, []))
                        }
                        if (null != f) {
                            let [, t] = f, [n, l] = r.EditorUtils.edges(e, t);
                            !p && r.PointUtils.equals(d, n) ? d = null !== (o = r.EditorUtils.before(e, n)) && void 0 !== o ? o : r.EditorUtils.start(e, []) : p && r.PointUtils.equals(d, l) && (d = null !== (s = r.EditorUtils.after(e, l)) && void 0 !== s ? s : r.EditorUtils.end(e, []))
                        }
                        i.SlateTransforms.delete(e, {
                            at: {
                                anchor: u,
                                focus: d
                            },
                            reverse: "backward" === t,
                            select: !0
                        });
                        return
                    }
                    a(t)
                }, l.Editor.positions = u, e
            }

            function s(e, t, n) {
                let l = r.EditorUtils.getCurrentInline(e),
                    o = r.EditorUtils.getCurrentBlock(e),
                    s = r.RangeUtils.toPoint(e.selection);
                if (null == s || null == o || "block" === t) return !0;
                if ("line" === t && null == l) return !1;
                let a = l;
                if (null == a) {
                    let t = (n ? r.EditorUtils.before : r.EditorUtils.after)(e, s);
                    null != t && null != (a = r.EditorUtils.getParentInline(e, t)) && (s = t)
                }
                if (null != a) {
                    let [l, o] = a;
                    if (r.EditorUtils.isEmpty(e, l) || r.EditorUtils.isVoid(e, l)) i.SlateTransforms.removeInline(e, o);
                    else {
                        let [l, a] = r.EditorUtils.edges(e, o);
                        i.SlateTransforms.delete(e, {
                            at: s,
                            unit: t,
                            reverse: n,
                            select: !0,
                            bounds: {
                                anchor: l,
                                focus: a
                            }
                        })
                    }
                    return !0
                }
                let u = !1;
                if (null != o) {
                    let [, t] = o, [l, i] = r.EditorUtils.edges(e, t);
                    u = n && r.PointUtils.equals(s, l) || !n && r.PointUtils.equals(s, i)
                }
                if ("word" === t && !u) {
                    let l = r.EditorUtils.getCurrentText(e);
                    if (null != l) {
                        let [, o] = l, [a, u] = r.EditorUtils.edges(e, o);
                        return i.SlateTransforms.delete(e, {
                            at: s,
                            unit: t,
                            reverse: n,
                            select: !0,
                            bounds: {
                                anchor: a,
                                focus: u
                            }
                        }), !0
                    }
                }
                return i.SlateTransforms.delete(e, {
                    at: s,
                    unit: t,
                    reverse: n,
                    select: !0
                }), !0
            }
            let a = l.Editor.positions;

            function* u(e) {
                var t, n, l, i, o, s, u, d;
                let c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        at: f = e.selection,
                        unit: p = "offset",
                        reverse: m = !1,
                        voids: h = !1
                    } = null != c ? c : {};
                if ("word" !== p) {
                    for (let t of a(e, {
                            ...c,
                            voids: h || "block" === p
                        })) yield t;
                    return
                }
                if (null == f) return;
                let E = r.EditorUtils.range(e, f),
                    [S, g] = r.RangeUtils.edges(E),
                    C = r.EditorUtils.richValue(e),
                    T = m ? -1 : 1,
                    v = null !== (l = null === (t = S.path) || void 0 === t ? void 0 : t[0]) && void 0 !== l ? l : 0,
                    y = null !== (i = null === (n = g.path) || void 0 === n ? void 0 : n[0]) && void 0 !== i ? i : C.length - 1,
                    x = m ? v : y,
                    I = m ? y : v;
                for (;;) {
                    let t = C[I],
                        n = null !== (u = I === v ? null === (o = S.path) || void 0 === o ? void 0 : o[1] : null) && void 0 !== u ? u : 0,
                        l = null !== (d = I === y ? null === (s = g.path) || void 0 === s ? void 0 : s[1] : null) && void 0 !== d ? d : t.children.length - 1,
                        i = m ? l : n,
                        f = m ? n : l,
                        p = i;
                    for (;;) {
                        let n, l;
                        let i = t.children[p],
                            o = [I, p];
                        if (n = r.PathUtils.equals(o, S.path) || r.PathUtils.isAncestor(o, S.path) ? !m && r.EditorUtils.isEnd(e, S, o) ? null : S : r.EditorUtils.start(e, o), l = r.PathUtils.equals(o, g.path) || r.PathUtils.isAncestor(o, g.path) ? m && r.EditorUtils.isStart(e, g, o) ? null : g : r.EditorUtils.end(e, o), null != n && null != l) {
                            if (r.TextUtils.isText(i) && 0 === i.text.length) {
                                let e = {
                                    path: o,
                                    offset: 0
                                };
                                yield e, yield e
                            } else if (r.EditorUtils.isInline(e, i) && r.TextUtils.isText(i.children[0]) && 0 === i.children[0].text.length) {
                                let e = {
                                    path: r.PathUtils.child(o, 0),
                                    offset: 0
                                };
                                yield e, yield e
                            } else {
                                let t = {
                                    anchor: n,
                                    focus: l
                                };
                                for (let n of a(e, {
                                        ...c,
                                        at: t
                                    })) yield n
                            }
                        }
                        if (p === f) break;
                        p += T
                    }
                    if (I === x) break;
                    I += T
                }
            }