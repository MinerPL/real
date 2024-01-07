            "use strict";
            n.r(t), n.d(t, {
                getDefaultKeyBinding: function() {
                    return i
                },
                updateContent: function() {
                    return I
                },
                deleteContent: function() {
                    return _
                },
                miscCommand: function() {
                    return N
                },
                getFirstTextBlock: function() {
                    return y
                },
                applyTokensAsEntities: function() {
                    return x
                },
                createEmptyEditorState: function() {
                    return b
                },
                clearContent: function() {
                    return F
                },
                replaceAllContent: function() {
                    return R
                },
                setCollapsedSelection: function() {
                    return L
                },
                setCollapsedEndSelection: function() {
                    return D
                },
                setCollapsedStartSelection: function() {
                    return j
                },
                setToStartSelection: function() {
                    return k
                },
                setToEndSelection: function() {
                    return w
                },
                truncateContent: function() {
                    return U
                },
                scrollCursorIntoView: function() {
                    return P
                },
                isEmpty: function() {
                    return G
                }
            }), n("222007"), n("424973");
            var l = n("98159"),
                r = n("952352"),
                i = n.n(r),
                a = n("401816"),
                s = n.n(a),
                u = n("958551"),
                o = n.n(u),
                c = n("661183"),
                d = n.n(c),
                f = n("823821"),
                E = n.n(f),
                g = n("928429"),
                m = n.n(g),
                A = n("234553"),
                C = n.n(A),
                T = n("65994"),
                S = n.n(T),
                h = n("718144"),
                M = n.n(h),
                p = n("640330"),
                v = n.n(p);

            function O(e, t, n, r) {
                let i = r.getCurrentContent(),
                    a = null;
                null != e && (a = (i = i.createEntity(...e)).getLastCreatedEntityKey());
                let s = i.getFirstBlock(),
                    u = new l.SelectionState({
                        anchorKey: s.getKey(),
                        anchorOffset: t,
                        focusKey: s.getKey(),
                        focusOffset: n
                    });
                return i = l.Modifier.applyEntity(i, u, a), l.EditorState.set(r, {
                    currentContent: i
                })
            }

            function I(e, t, n, r) {
                let i, a;
                let u = t.getCurrentContent(),
                    o = u.getFirstBlock(),
                    c = o.getText();
                "number" == typeof n ? (n > c.length && (n = c.length), null != r && r > c.length && (r = c.length), i = new l.SelectionState({
                    anchorKey: o.getKey(),
                    anchorOffset: n,
                    focusKey: o.getKey(),
                    focusOffset: null != r && 0 !== r ? r : n
                })) : i = t.getSelection();
                let d = t.getCurrentInlineStyle(),
                    f = s(u, i);
                return i.isCollapsed() ? (u = l.Modifier.insertText(u, i, e, d, f), a = "insert-characters") : (u = l.Modifier.replaceText(u, i, e, d, f), a = "replace-characters"), l.EditorState.push(t, u, a)
            }

            function _(e, t) {
                switch (e) {
                    case "delete":
                        return M(t);
                    case "delete-word":
                        return E(t);
                    case "backspace":
                        return S(t);
                    case "backspace-word":
                        return d(t);
                    case "backspace-to-start-of-line":
                        return o(t);
                    default:
                        return t
                }
            }

            function N(e, t) {
                switch (e) {
                    case "transpose-characters":
                        return v(t);
                    case "move-selection-to-start-of-block":
                        return C(t);
                    case "move-selection-to-end-of-block":
                        return m(t);
                    default:
                        return t
                }
            }

            function y(e) {
                return e.getCurrentContent().getFirstBlock().getText()
            }

            function x(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    l = t.getCurrentContent(),
                    r = l.getFirstBlock(),
                    i = r.getText(),
                    a = [];
                return r.findEntityRanges(e => null !== e.getEntity(), (e, t) => {
                    let n = l.getEntity(r.getEntityAt(e)).getType(),
                        s = i.substring(e, t);
                    a.push({
                        processed: !1,
                        type: n,
                        start: e,
                        end: t,
                        text: s
                    })
                }), e.forEach(e => {
                    let l = !1;
                    if (a.forEach(n => {
                            let {
                                type: r,
                                start: i,
                                end: a
                            } = e, s = e.getFullMatch();
                            !n.processed && (n.type === r && n.start === i && n.text === s ? (n.processed = !0, l = !0) : (i >= n.start && i < n.end || a > n.start && a <= n.end) && (n.processed = !0, t = O(null, n.start, n.end, t)))
                        }), l) return;
                    let r = n[e.type];
                    t = O([e.type, null != r && r.mutable ? "MUTABLE" : "IMMUTABLE", {
                        token: e
                    }], e.start, e.end, t)
                }), a.forEach(e => {
                    !e.processed && (t = O(null, e.start, e.end, t))
                }), t
            }

            function b(e) {
                return l.EditorState.createEmpty(new l.CompositeDecorator(e))
            }

            function F(e) {
                let t = l.EditorState.push(e, l.ContentState.createFromText("")),
                    n = e.getSelection();
                return null != n && n.hasFocus && (t = l.EditorState.moveFocusToEnd(t)), t
            }

            function R(e, t) {
                let n = y(t);
                return I(e, t, 0, n.length)
            }

            function L(e, t) {
                let n = t.getSelection();
                return n = (n = n.set("focusOffset", e)).set("anchorOffset", e), l.EditorState.forceSelection(t, n)
            }

            function D(e) {
                let t = e.getCurrentContent().getFirstBlock().getText();
                return L(t.length, e)
            }

            function j(e) {
                return L(0, e)
            }

            function k(e) {
                let t = e.getSelection();
                return t = (t = t.set("focusOffset", 0)).set("isBackward", !0), l.EditorState.forceSelection(e, t)
            }

            function w(e) {
                let t = y(e),
                    n = e.getSelection();
                return n = (n = n.set("focusOffset", t.length)).set("isBackward", !1), l.EditorState.forceSelection(e, n)
            }

            function U(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 512,
                    n = y(e);
                if (n.length > t) {
                    let r = e.getSelection();
                    e = I("", e, t, n.length), r.getAnchorOffset() > t && (r = r.set("anchorOffset", t)), r.getFocusOffset() > t && (r = r.set("focusOffset", t)), e = l.EditorState.forceSelection(e, r)
                }
                return e
            }

            function P(e) {
                let t = window.getSelection();
                if (null == t || "Caret" !== t.type || null == e) return;
                let n = t.getRangeAt(0);
                if (! function(e, t) {
                        for (; null != e;) {
                            if (e === t) return !0;
                            e = e.parentNode
                        }
                        return !1
                    }(n.commonAncestorContainer, e)) return;
                let l = n.getClientRects()[0],
                    r = e.getClientRects()[0];
                if (null == l || null == r) return;
                let i = l.left - r.left,
                    a = i + e.scrollLeft;
                a < e.scrollLeft ? e.scrollLeft = a - 10 : a > e.scrollLeft + e.offsetWidth && (e.scrollLeft = a - e.offsetWidth + 3)
            }

            function G(e) {
                return 0 === y(e).length
            }