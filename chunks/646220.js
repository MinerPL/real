            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), n("222007");
            var l = n("83800"),
                i = n("939563"),
                r = n("385887"),
                o = n("467123");
            let s = new Set(["line", "blockQuote"]);

            function a(e) {
                let {
                    deleteBackward: t,
                    deleteFragment: n,
                    insertBreak: a,
                    onChange: u
                } = e;
                e.deleteBackward = n => {
                    let l = r.EditorUtils.getCurrentBlock(e);
                    if ((null == l ? void 0 : l[0].type) === "blockQuote") {
                        let t = r.RangeUtils.toPoint(e.selection);
                        if (null != t && r.PathUtils.isFirstChild(l[1], t.path) && 0 === t.offset) {
                            i.SlateTransforms.setNodes(e, {
                                type: "line"
                            }, {
                                at: l[1]
                            });
                            return
                        }
                    }
                    t(n)
                }, e.deleteFragment = t => {
                    if (null != e.selection) {
                        let [o, s] = r.RangeUtils.edges(e.selection), a = [o.path[0]], u = r.EditorUtils.node(e, a), d = [s.path[0]], c = r.PathUtils.equals(a, d) ? null : r.EditorUtils.node(e, d);
                        l.HistoryUtils.withSingleEntry(e, () => {
                            (null == u ? void 0 : u[0].type) === "blockQuote" && r.PointUtils.isAtStart(o, u) && i.SlateTransforms.setNodes(e, {
                                type: "line"
                            }, {
                                at: a
                            }), (null == c ? void 0 : c[0].type) === "blockQuote" && r.PointUtils.isAtEnd(s, c) && i.SlateTransforms.setNodes(e, {
                                type: "line"
                            }, {
                                at: d
                            }), n(t)
                        });
                        return
                    }
                    n(t)
                }, e.insertBreak = () => {
                    let t = r.EditorUtils.getCurrentBlock(e);
                    if ((null == t ? void 0 : t[0].type) === "blockQuote") {
                        let n = r.RangeUtils.toPoint(e.selection);
                        if (null == n) return;
                        ! function(e, t, n) {
                            if (!r.EditorUtils.isEmpty(e, t[0])) return !1;
                            let l = r.EditorUtils.previous(e, {
                                at: t[1]
                            });
                            return !!(null != l && r.NodeUtils.isType(l[0], "blockQuote") && r.EditorUtils.isEmpty(e, l[0]) && r.PointUtils.isAtStart(n, t)) && (i.SlateTransforms.setNodes(e, {
                                type: "line"
                            }, {
                                at: t[1]
                            }), i.SlateTransforms.removeNodes(e, {
                                at: l[1]
                            }), !0)
                        }(e, t, n) && i.SlateTransforms.splitNodes(e, {
                            at: n,
                            always: !0
                        });
                        return
                    }
                    a()
                };
                let d = null,
                    c = !0;
                return e.onChange = () => {
                    let t = r.EditorUtils.richValue(e);
                    (t !== d || e.previewMarkdown !== c) && (l.HistoryUtils.withMergedEntry(e, () => {
                        r.EditorUtils.withoutNormalizing(e, () => (function(e) {
                            let t = !1;
                            for (let a of r.EditorUtils.blocks(e)) {
                                let [u, d] = a;
                                if (!s.has(u.type)) continue;
                                let c = {
                                    path: r.PathUtils.child(d, 0),
                                    offset: 0
                                };
                                if ((0, o.isPointInCodeBlock)(e, c)) {
                                    "blockQuote" === u.type && (i.SlateTransforms.setNodes(e, {
                                        type: "line"
                                    }, {
                                        at: d
                                    }), i.SlateTransforms.insertText(e, "> ", {
                                        at: c
                                    }));
                                    continue
                                }
                                if ("blockQuote" === u.type || r.EditorUtils.areStylesDisabled(e)) continue;
                                let f = u.children[0];
                                if (!r.TextUtils.isText(f)) continue;
                                let p = f.text.match(/^\s*>>> /),
                                    m = f.text.match(/^\s*> /);
                                if ((null != m || null != p || t) && (i.SlateTransforms.setNodes(e, {
                                        type: "blockQuote"
                                    }, {
                                        at: d
                                    }), !t)) {
                                    var n, l;
                                    let o = null !== (l = null !== (n = null == m ? void 0 : m[0].length) && void 0 !== n ? n : null == p ? void 0 : p[0].length) && void 0 !== l ? l : 0,
                                        s = r.PathUtils.child(d, 0);
                                    i.SlateTransforms.delete(e, {
                                        at: {
                                            anchor: {
                                                path: s,
                                                offset: 0
                                            },
                                            focus: {
                                                path: s,
                                                offset: o
                                            }
                                        }
                                    }), t = null != p
                                }
                            }
                        })(e))
                    }), d = t, c = e.previewMarkdown), u()
                }, e
            }