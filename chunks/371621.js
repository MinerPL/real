            "use strict";
            r.r(t), r.d(t, {
                Editable: function() {
                    return td
                },
                ReactEditor: function() {
                    return em
                },
                Slate: function() {
                    return tm
                },
                useFocused: function() {
                    return tg
                },
                useSelected: function() {
                    return eq
                },
                useSlateStatic: function() {
                    return eT
                },
                withReact: function() {
                    return tO
                }
            }), r("222007"), r("70102"), r("843762"), r("424973"), r("808653"), r("106442"), r("175143"), r("781738"), r("101997");
            var n = r("717837"),
                u = r.n(n),
                a = r("478098"),
                o = r.n(a),
                i = r("229042"),
                s = r.n(i),
                l = r("884691"),
                c = r.n(l),
                d = r("390266"),
                f = r("987295"),
                D = r("871477"),
                h = r("165826"),
                v = r("817736"),
                p = r.n(v);

            function C(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function g(e, t) {
                if (null == e) return {};
                var r, n, u = function(e, t) {
                    if (null == e) return {};
                    var r, n, u = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && (u[r] = e[r]);
                    return u
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++) {
                        if (r = a[n], !(t.indexOf(r) >= 0)) Object.prototype.propertyIsEnumerable.call(e, r) && (u[r] = e[r])
                    }
                }
                return u
            }
            var B = 0;
            class E {
                constructor() {
                    this.id = "".concat(B++)
                }
            }
            var m = new WeakMap,
                A = new WeakMap,
                F = new WeakMap,
                b = new WeakMap,
                y = new WeakMap,
                w = new WeakMap,
                O = new WeakMap,
                x = new WeakMap,
                k = new WeakMap,
                P = new WeakMap,
                R = new WeakMap,
                S = new WeakMap,
                T = new WeakMap,
                j = new WeakMap,
                N = new WeakMap,
                M = new WeakMap,
                z = new WeakMap,
                W = new WeakMap,
                _ = new WeakMap,
                L = new WeakMap,
                I = new WeakMap,
                q = Symbol("placeholder"),
                V = Symbol("mark-placeholder"),
                H = globalThis.Text,
                K = e => e && e.ownerDocument && e.ownerDocument.defaultView || null,
                U = e => X(e) && 8 === e.nodeType,
                $ = e => X(e) && 1 === e.nodeType,
                X = e => {
                    var t = K(e);
                    return !!t && e instanceof t.Node
                },
                J = e => {
                    var t = e && e.anchorNode && K(e.anchorNode);
                    return !!t && e instanceof t.Selection
                },
                Y = e => X(e) && 3 === e.nodeType,
                G = e => e.clipboardData && "" !== e.clipboardData.getData("text/plain") && 1 === e.clipboardData.types.length,
                Z = e => {
                    var [t, r] = e;
                    if ($(t) && t.childNodes.length) {
                        var n = r === t.childNodes.length,
                            u = n ? r - 1 : r;
                        for ([t, u] = ee(t, u, n ? "backward" : "forward"), n = u < r; $(t) && t.childNodes.length;) {
                            var a = n ? t.childNodes.length - 1 : 0;
                            t = et(t, a, n ? "backward" : "forward")
                        }
                        r = n && null != t.textContent ? t.textContent.length : 0
                    }
                    return [t, r]
                },
                Q = e => {
                    for (var t = e && e.parentNode; t;) {
                        if ("[object ShadowRoot]" === t.toString()) return !0;
                        t = t.parentNode
                    }
                    return !1
                },
                ee = (e, t, r) => {
                    for (var {
                            childNodes: n
                        } = e, u = n[t], a = t, o = !1, i = !1;
                        (U(u) || $(u) && 0 === u.childNodes.length || $(u) && "false" === u.getAttribute("contenteditable")) && (!o || !i);) {
                        ;
                        if (a >= n.length) {
                            o = !0, a = t - 1, r = "backward";
                            continue
                        }
                        if (a < 0) {
                            i = !0, a = t + 1, r = "forward";
                            continue
                        }
                        u = n[a], t = a, a += "forward" === r ? 1 : -1
                    }
                    return [u, t]
                },
                et = (e, t, r) => {
                    var [n] = ee(e, t, r);
                    return n
                },
                er = e => {
                    var t = "";
                    if (Y(e) && e.nodeValue) return e.nodeValue;
                    if ($(e)) {
                        for (var r of Array.from(e.childNodes)) t += er(r);
                        var n = getComputedStyle(e).getPropertyValue("display");
                        ("block" === n || "list" === n || "BR" === e.tagName) && (t += "\n")
                    }
                    return t
                },
                en = /data-slate-fragment="(.+?)"/m,
                eu = e => {
                    var [, t] = e.getData("text/html").match(en) || [];
                    return t
                },
                ea = (e, t, r) => {
                    var {
                        target: n
                    } = t;
                    if ($(n) && n.matches('[contentEditable="false"]')) return !1;
                    var {
                        document: u
                    } = em.getWindow(e);
                    if (u.contains(n)) return em.hasDOMNode(e, n, {
                        editable: !0
                    });
                    var a = r.find(e => {
                        var {
                            addedNodes: t,
                            removedNodes: r
                        } = e;
                        for (var u of t)
                            if (u === n || u.contains(n)) return !0;
                        for (var a of r)
                            if (a === n || a.contains(n)) return !0
                    });
                    return !!a && a !== t && ea(e, a, r)
                },
                eo = parseInt(c.version.split(".")[0], 10) >= 17,
                ei = "undefined" != typeof navigator && "undefined" != typeof window && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
                es = "undefined" != typeof navigator && /Mac OS X/.test(navigator.userAgent),
                el = "undefined" != typeof navigator && /Android/.test(navigator.userAgent),
                ec = "undefined" != typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
                ed = "undefined" != typeof navigator && /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
                ef = "undefined" != typeof navigator && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent),
                eD = "undefined" != typeof navigator && /Chrome/i.test(navigator.userAgent),
                eh = "undefined" != typeof navigator && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent),
                ev = el && "undefined" != typeof navigator && /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent),
                ep = "undefined" != typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent),
                eC = "undefined" != typeof navigator && /.*UCBrowser/.test(navigator.userAgent),
                eg = "undefined" != typeof navigator && /.*Wechat/.test(navigator.userAgent),
                eB = !!("undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement),
                eE = (!eh || !ev) && !ef && "undefined" != typeof globalThis && globalThis.InputEvent && "function" == typeof globalThis.InputEvent.prototype.getTargetRanges,
                em = {
                    isComposing: e => !!S.get(e),
                    getWindow(e) {
                        var t = F.get(e);
                        if (!t) throw Error("Unable to find a host window element for this editor");
                        return t
                    },
                    findKey(e, t) {
                        var r = x.get(t);
                        return !r && (r = new E, x.set(t, r)), r
                    },
                    findPath(e, t) {
                        for (var r = [], n = t;;) {
                            var u = A.get(n);
                            if (null == u) {
                                if (f.Editor.isEditor(n)) return r;
                                break
                            }
                            var a = m.get(n);
                            if (null == a) break;
                            r.unshift(a), n = u
                        }
                        throw Error("Unable to find the path for Slate node: ".concat(f.Scrubber.stringify(t)))
                    },
                    findDocumentOrShadowRoot(e) {
                        var t = em.toDOMNode(e, e),
                            r = t.getRootNode();
                        return (r instanceof Document || r instanceof ShadowRoot) && null != r.getSelection ? r : t.ownerDocument
                    },
                    isFocused: e => !!R.get(e),
                    isReadOnly: e => !!P.get(e),
                    blur(e) {
                        var t = em.toDOMNode(e, e),
                            r = em.findDocumentOrShadowRoot(e);
                        R.set(e, !1), r.activeElement === t && t.blur()
                    },
                    focus(e) {
                        var t = em.toDOMNode(e, e),
                            r = em.findDocumentOrShadowRoot(e);
                        R.set(e, !0), r.activeElement !== t && t.focus({
                            preventScroll: !0
                        })
                    },
                    deselect(e) {
                        var {
                            selection: t
                        } = e, r = em.findDocumentOrShadowRoot(e).getSelection();
                        r && r.rangeCount > 0 && r.removeAllRanges(), t && f.Transforms.deselect(e)
                    },
                    hasDOMNode(e, t) {
                        var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                editable: u = !1
                            } = n,
                            a = em.toDOMNode(e, e);
                        try {
                            r = $(t) ? t : t.parentElement
                        } catch (e) {
                            if (!e.message.includes('Permission denied to access property "nodeType"')) throw e
                        }
                        return !!r && r.closest("[data-slate-editor]") === a && (!u || !!r.isContentEditable || "boolean" == typeof r.isContentEditable && r.closest('[contenteditable="false"]') === a || !!r.getAttribute("data-slate-zero-width"))
                    },
                    insertData(e, t) {
                        e.insertData(t)
                    },
                    insertFragmentData: (e, t) => e.insertFragmentData(t),
                    insertTextData: (e, t) => e.insertTextData(t),
                    setFragmentData(e, t, r) {
                        e.setFragmentData(t, r)
                    },
                    toDOMNode(e, t) {
                        var r = k.get(e),
                            n = f.Editor.isEditor(t) ? b.get(e) : null == r ? void 0 : r.get(em.findKey(e, t));
                        if (!n) throw Error("Cannot resolve a DOM node from Slate node: ".concat(f.Scrubber.stringify(t)));
                        return n
                    },
                    toDOMPoint(e, t) {
                        var [r] = f.Editor.node(e, t.path), n = em.toDOMNode(e, r);
                        f.Editor.void(e, {
                            at: t
                        }) && (t = {
                            path: t.path,
                            offset: 0
                        });
                        for (var u = Array.from(n.querySelectorAll("[data-slate-string], [data-slate-zero-width]")), a = 0, o = 0; o < u.length; o++) {
                            var i = u[o],
                                s = i.childNodes[0];
                            if (null != s && null != s.textContent) {
                                var {
                                    length: l
                                } = s.textContent, c = i.getAttribute("data-slate-length"), d = a + (null == c ? l : parseInt(c, 10)), D = u[o + 1];
                                if (t.offset === d && null != D && D.hasAttribute("data-slate-mark-placeholder")) {
                                    var h, v, p = D.childNodes[0];
                                    h = [p instanceof H ? p : D, null !== (v = D.textContent) && void 0 !== v && v.startsWith("\uFEFF") ? 1 : 0];
                                    break
                                }
                                if (t.offset <= d) {
                                    h = [s, Math.min(l, Math.max(0, t.offset - a))];
                                    break
                                }
                                a = d
                            }
                        }
                        if (!h) throw Error("Cannot resolve a DOM point from Slate point: ".concat(f.Scrubber.stringify(t)));
                        return h
                    },
                    toDOMRange(e, t) {
                        var {
                            anchor: r,
                            focus: n
                        } = t, u = f.Range.isBackward(t), a = em.toDOMPoint(e, r), o = f.Range.isCollapsed(t) ? a : em.toDOMPoint(e, n), i = em.getWindow(e).document.createRange(), [s, l] = u ? o : a, [c, d] = u ? a : o, D = !!($(s) ? s : s.parentElement).getAttribute("data-slate-zero-width"), h = !!($(c) ? c : c.parentElement).getAttribute("data-slate-zero-width");
                        return i.setStart(s, D ? 1 : l), i.setEnd(c, h ? 1 : d), i
                    },
                    toSlateNode(e, t) {
                        var r = $(t) ? t : t.parentElement;
                        r && !r.hasAttribute("data-slate-node") && (r = r.closest("[data-slate-node]"));
                        var n = r ? w.get(r) : null;
                        if (!n) throw Error("Cannot resolve a Slate node from DOM node: ".concat(r));
                        return n
                    },
                    findEventRange(e, t) {
                        "nativeEvent" in t && (t = t.nativeEvent);
                        var r, {
                            clientX: n,
                            clientY: u,
                            target: a
                        } = t;
                        if (null == n || null == u) throw Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
                        var o = em.toSlateNode(e, t.target),
                            i = em.findPath(e, o);
                        if (f.Element.isElement(o) && f.Editor.isVoid(e, o)) {
                            var s = a.getBoundingClientRect(),
                                l = e.isInline(o) ? n - s.left < s.left + s.width - n : u - s.top < s.top + s.height - u,
                                c = f.Editor.point(e, i, {
                                    edge: l ? "start" : "end"
                                }),
                                d = l ? f.Editor.before(e, c) : f.Editor.after(e, c);
                            if (d) return f.Editor.range(e, d)
                        }
                        var {
                            document: D
                        } = em.getWindow(e);
                        if (D.caretRangeFromPoint) r = D.caretRangeFromPoint(n, u);
                        else {
                            var h = D.caretPositionFromPoint(n, u);
                            h && ((r = D.createRange()).setStart(h.offsetNode, h.offset), r.setEnd(h.offsetNode, h.offset))
                        }
                        if (!r) throw Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
                        return em.toSlateRange(e, r, {
                            exactMatch: !1,
                            suppressThrow: !1
                        })
                    },
                    toSlatePoint(e, t, r) {
                        var {
                            exactMatch: n,
                            suppressThrow: u
                        } = r, [a, o] = n ? t : Z(t), i = a.parentNode, s = null, l = 0;
                        if (i) {
                            var c, d, D = em.toDOMNode(e, e),
                                h = i.closest('[data-slate-void="true"]'),
                                v = h && D.contains(h) ? h : null,
                                p = i.closest("[data-slate-leaf]"),
                                C = null;
                            if (p) {
                                if (s = p.closest('[data-slate-node="text"]')) {
                                    var g = em.getWindow(e).document.createRange();
                                    g.setStart(s, 0), g.setEnd(a, o);
                                    var B = g.cloneContents();
                                    [...Array.prototype.slice.call(B.querySelectorAll("[data-slate-zero-width]")), ...Array.prototype.slice.call(B.querySelectorAll("[contenteditable=false]"))].forEach(e => {
                                        if (el && !n && e.hasAttribute("data-slate-zero-width") && e.textContent.length > 0 && "\uFEFF" !== e.textContext) {
                                            e.textContent.startsWith("\uFEFF") && (e.textContent = e.textContent.slice(1));
                                            return
                                        }
                                        e.parentNode.removeChild(e)
                                    }), l = B.textContent.length, C = s
                                }
                            } else if (v) {
                                for (var E = v.querySelectorAll("[data-slate-leaf]"), m = 0; m < E.length; m++) {
                                    var A = E[m];
                                    if (em.hasDOMNode(e, A)) {
                                        p = A;
                                        break
                                    }
                                }
                                p ? (s = p.closest('[data-slate-node="text"]'), l = (C = p).textContent.length, C.querySelectorAll("[data-slate-zero-width]").forEach(e => {
                                    l -= e.textContent.length
                                })) : l = 1
                            }
                            C && l === C.textContent.length && el && "z" === C.getAttribute("data-slate-zero-width") && null !== (c = C.textContent) && void 0 !== c && c.startsWith("\uFEFF") && (i.hasAttribute("data-slate-zero-width") || ec && null !== (d = C.textContent) && void 0 !== d && d.endsWith("\n\n")) && l--
                        }
                        if (el && !s && !n) {
                            var F = i.hasAttribute("data-slate-node") ? i : i.closest("[data-slate-node]");
                            if (F && em.hasDOMNode(e, F, {
                                    editable: !0
                                })) {
                                var b = em.toSlateNode(e, F),
                                    {
                                        path: y,
                                        offset: w
                                    } = f.Editor.start(e, em.findPath(e, b));
                                return !F.querySelector("[data-slate-leaf]") && (w = o), {
                                    path: y,
                                    offset: w
                                }
                            }
                        }
                        if (!s) {
                            if (u) return null;
                            throw Error("Cannot resolve a Slate point from DOM point: ".concat(t))
                        }
                        var O = em.toSlateNode(e, s);
                        return {
                            path: em.findPath(e, O),
                            offset: l
                        }
                    },
                    toSlateRange(e, t, r) {
                        var n, u, a, o, i, s, {
                            exactMatch: l,
                            suppressThrow: c
                        } = r;
                        if ((J(t) ? t.anchorNode : t.startContainer) && (J(t) ? (n = t.anchorNode, u = t.anchorOffset, a = t.focusNode, o = t.focusOffset, i = eD && Q(n) ? t.anchorNode === t.focusNode && t.anchorOffset === t.focusOffset : t.isCollapsed) : (n = t.startContainer, u = t.startOffset, a = t.endContainer, o = t.endOffset, i = t.collapsed)), null == n || null == a || null == u || null == o) throw Error("Cannot resolve a Slate range from DOM range: ".concat(t));
                        "getAttribute" in a && "false" === a.getAttribute("contenteditable") && (a = n, o = (null === (s = n.textContent) || void 0 === s ? void 0 : s.length) || 0);
                        var d = em.toSlatePoint(e, [n, u], {
                            exactMatch: l,
                            suppressThrow: c
                        });
                        if (!d) return null;
                        var D = i ? d : em.toSlatePoint(e, [a, o], {
                            exactMatch: l,
                            suppressThrow: c
                        });
                        if (!D) return null;
                        if (ec && !i && n !== a) {
                            var h = f.Editor.isEnd(e, d, d.path),
                                v = f.Editor.isStart(e, D, D.path);
                            h && (d = f.Editor.after(e, d) || d), v && (D = f.Editor.before(e, D) || D)
                        }
                        var p = {
                            anchor: d,
                            focus: D
                        };
                        return f.Range.isExpanded(p) && f.Range.isForward(p) && $(a) && f.Editor.void(e, {
                            at: p.focus,
                            mode: "highest"
                        }) && (p = f.Editor.unhangRange(e, p, {
                            voids: !0
                        })), p
                    },
                    hasRange(e, t) {
                        var {
                            anchor: r,
                            focus: n
                        } = t;
                        return f.Editor.hasPath(e, r.path) && f.Editor.hasPath(e, n.path)
                    },
                    hasTarget: (e, t) => X(t) && em.hasDOMNode(e, t),
                    hasEditableTarget: (e, t) => X(t) && em.hasDOMNode(e, t, {
                        editable: !0
                    }),
                    hasSelectableTarget: (e, t) => em.hasEditableTarget(e, t) || em.isTargetInsideNonReadonlyVoid(e, t),
                    isTargetInsideNonReadonlyVoid(e, t) {
                        if (P.get(e)) return !1;
                        var r = em.hasTarget(e, t) && em.toSlateNode(e, t);
                        return f.Element.isElement(r) && f.Editor.isVoid(e, r)
                    },
                    androidScheduleFlush(e) {
                        var t;
                        null === (t = N.get(e)) || void 0 === t || t()
                    },
                    androidPendingDiffs: e => W.get(e)
                },
                eA = ["anchor", "focus"],
                eF = ["anchor", "focus"],
                eb = (e, t) => Object.keys(e).length === Object.keys(t).length && Object.keys(e).every(r => t.hasOwnProperty(r) && e[r] === t[r]),
                ey = (e, t) => {
                    var r = g(e, eA),
                        n = g(t, eF);
                    return e[q] === t[q] && eb(r, n)
                },
                ew = (e, t) => {
                    if (e.length !== t.length) return !1;
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r],
                            u = t[r];
                        if (!f.Range.equals(n, u) || !ey(n, u)) return !1
                    }
                    return !0
                },
                eO = (e, t) => {
                    if (e.length !== t.length) return !1;
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r],
                            u = t[r];
                        if (n.anchor.offset !== u.anchor.offset || n.focus.offset !== u.focus.offset || !ey(n, u)) return !1
                    }
                    return !0
                },
                ex = eB ? l.useLayoutEffect : l.useEffect,
                String = e => {
                    var {
                        isLast: t,
                        leaf: r,
                        parent: n,
                        text: u
                    } = e, a = eT(), o = em.findPath(a, u), i = f.Path.parent(o), s = !0 === r[V];
                    return a.isVoid(n) ? c.createElement(eR, {
                        length: f.Node.string(n).length
                    }) : "" !== r.text || n.children[n.children.length - 1] !== u || a.isInline(n) || "" !== f.Editor.string(a, i) ? "" === r.text ? c.createElement(eR, {
                        isMarkPlaceholder: s
                    }) : t && "\n" === r.text.slice(-1) ? c.createElement(ek, {
                        isTrailing: !0,
                        text: r.text
                    }) : c.createElement(ek, {
                        text: r.text
                    }) : c.createElement(eR, {
                        isLineBreak: !0,
                        isMarkPlaceholder: s
                    })
                },
                ek = e => {
                    var {
                        text: t,
                        isTrailing: r = !1
                    } = e, n = (0, l.useRef)(null), u = () => "".concat(null != t ? t : "").concat(r ? "\n" : ""), [a] = (0, l.useState)(u);
                    return ex(() => {
                        var e = u();
                        n.current && n.current.textContent !== e && (n.current.textContent = e)
                    }), c.createElement(eP, {
                        ref: n
                    }, a)
                },
                eP = (0, l.memo)((0, l.forwardRef)((e, t) => c.createElement("span", {
                    "data-slate-string": !0,
                    ref: t
                }, e.children))),
                eR = e => {
                    var {
                        length: t = 0,
                        isLineBreak: r = !1,
                        isMarkPlaceholder: n = !1
                    } = e, u = {
                        "data-slate-zero-width": r ? "n" : "z",
                        "data-slate-length": t
                    };
                    return n && (u["data-slate-mark-placeholder"] = !0), c.createElement("span", Object.assign({}, u), el && r ? null : "\uFEFF", r ? c.createElement("br", null) : null)
                },
                eS = (0, l.createContext)(null),
                eT = () => {
                    var e = (0, l.useContext)(eS);
                    if (!e) throw Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
                    return e
                },
                ej = c.memo(e => {
                    var {
                        leaf: t,
                        isLast: r,
                        text: n,
                        parent: u,
                        renderPlaceholder: a,
                        renderLeaf: o = e => c.createElement(eN, Object.assign({}, e))
                    } = e, i = (0, l.useRef)(null), s = (0, l.useRef)(null), d = eT(), f = (0, l.useRef)(null);
                    (0, l.useEffect)(() => () => {
                        f.current && f.current.disconnect()
                    }, []), (0, l.useEffect)(() => {
                        var e = null == s ? void 0 : s.current;
                        if (e ? y.set(d, e) : y.delete(d), f.current) f.current.disconnect(), e && f.current.observe(e);
                        else if (e) {
                            var t = window.ResizeObserver || D.ResizeObserver;
                            f.current = new t(() => {
                                var e = I.get(d);
                                null == e || e()
                            }), f.current.observe(e)
                        }
                        if (!e && i.current) {
                            var r = I.get(d);
                            null == r || r()
                        }
                        return i.current = s.current, () => {
                            y.delete(d)
                        }
                    }, [s, t]);
                    var h = c.createElement(String, {
                        isLast: r,
                        leaf: t,
                        parent: u,
                        text: n
                    });
                    if (t[q]) {
                        var v = {
                            children: t.placeholder,
                            attributes: {
                                "data-slate-placeholder": !0,
                                style: {
                                    position: "absolute",
                                    pointerEvents: "none",
                                    width: "100%",
                                    maxWidth: "100%",
                                    display: "block",
                                    opacity: "0.333",
                                    userSelect: "none",
                                    textDecoration: "none"
                                },
                                contentEditable: !1,
                                ref: s
                            }
                        };
                        h = c.createElement(c.Fragment, null, a(v), h)
                    }
                    return o({
                        attributes: {
                            "data-slate-leaf": !0
                        },
                        children: h,
                        leaf: t,
                        text: n
                    })
                }, (e, t) => t.parent === e.parent && t.isLast === e.isLast && t.renderLeaf === e.renderLeaf && t.renderPlaceholder === e.renderPlaceholder && t.text === e.text && f.Text.equals(t.leaf, e.leaf) && t.leaf[q] === e.leaf[q]),
                eN = e => {
                    var {
                        attributes: t,
                        children: r
                    } = e;
                    return c.createElement("span", Object.assign({}, t), r)
                },
                eM = c.memo(e => {
                    for (var {
                            decorations: t,
                            isLast: r,
                            parent: n,
                            renderPlaceholder: u,
                            renderLeaf: a,
                            text: o
                        } = e, i = eT(), s = (0, l.useRef)(null), d = f.Text.decorations(o, t), D = em.findKey(i, o), h = [], v = 0; v < d.length; v++) {
                        var p = d[v];
                        h.push(c.createElement(ej, {
                            isLast: r && v === d.length - 1,
                            key: "".concat(D.id, "-").concat(v),
                            renderPlaceholder: u,
                            leaf: p,
                            text: o,
                            parent: n,
                            renderLeaf: a
                        }))
                    }
                    var C = (0, l.useCallback)(e => {
                        var t = k.get(i);
                        e ? (null == t || t.set(D, e), O.set(o, e), w.set(e, o)) : (null == t || t.delete(D), O.delete(o), s.current && w.delete(s.current)), s.current = e
                    }, [s, i, D, o]);
                    return c.createElement("span", {
                        "data-slate-node": "text",
                        ref: C
                    }, h)
                }, (e, t) => t.parent === e.parent && t.isLast === e.isLast && t.renderLeaf === e.renderLeaf && t.renderPlaceholder === e.renderPlaceholder && t.text === e.text && eO(t.decorations, e.decorations)),
                ez = c.memo(e => {
                    var {
                        decorations: t,
                        element: r,
                        renderElement: n = e => c.createElement(eW, Object.assign({}, e)),
                        renderPlaceholder: a,
                        renderLeaf: o,
                        selection: i
                    } = e, s = eT(), d = eK(), D = s.isInline(r), h = em.findKey(s, r), v = (0, l.useCallback)(e => {
                        var t = k.get(s);
                        e ? (null == t || t.set(h, e), O.set(r, e), w.set(e, r)) : (null == t || t.delete(h), O.delete(r))
                    }, [s, h, r]), p = eV({
                        decorations: t,
                        node: r,
                        renderElement: n,
                        renderPlaceholder: a,
                        renderLeaf: o,
                        selection: i
                    }), C = {
                        "data-slate-node": "element",
                        ref: v
                    };
                    if (D && (C["data-slate-inline"] = !0), !D && f.Editor.hasInlines(s, r)) {
                        var g = u(f.Node.string(r));
                        "rtl" === g && (C.dir = g)
                    }
                    if (f.Editor.isVoid(s, r)) {
                        C["data-slate-void"] = !0, !d && D && (C.contentEditable = !1);
                        var [
                            [B]
                        ] = f.Node.texts(r);
                        p = c.createElement(D ? "span" : "div", {
                            "data-slate-spacer": !0,
                            style: {
                                height: "0",
                                color: "transparent",
                                outline: "none",
                                position: "absolute"
                            }
                        }, c.createElement(eM, {
                            renderPlaceholder: a,
                            decorations: [],
                            isLast: !1,
                            parent: r,
                            text: B
                        })), m.set(B, 0), A.set(B, r)
                    }
                    return n({
                        attributes: C,
                        children: p,
                        element: r
                    })
                }, (e, t) => e.element === t.element && e.renderElement === t.renderElement && e.renderLeaf === t.renderLeaf && e.renderPlaceholder === t.renderPlaceholder && ew(e.decorations, t.decorations) && (e.selection === t.selection || !!e.selection && !!t.selection && f.Range.equals(e.selection, t.selection))),
                eW = e => {
                    var {
                        attributes: t,
                        children: r,
                        element: n
                    } = e, u = eT().isInline(n) ? "span" : "div";
                    return c.createElement(u, Object.assign({}, t, {
                        style: {
                            position: "relative"
                        }
                    }), r)
                },
                e_ = (0, l.createContext)(() => []),
                eL = () => (0, l.useContext)(e_),
                eI = (0, l.createContext)(!1),
                eq = () => (0, l.useContext)(eI),
                eV = e => {
                    for (var {
                            decorations: t,
                            node: r,
                            renderElement: n,
                            renderPlaceholder: u,
                            renderLeaf: a,
                            selection: o
                        } = e, i = eL(), s = eT(), l = em.findPath(s, r), d = [], D = f.Element.isElement(r) && !s.isInline(r) && f.Editor.hasInlines(s, r), h = 0; h < r.children.length; h++) {
                        var v = l.concat(h),
                            p = r.children[h],
                            C = em.findKey(s, p),
                            g = f.Editor.range(s, v),
                            B = o && f.Range.intersection(g, o),
                            E = i([p, v]);
                        for (var F of t) {
                            var b = f.Range.intersection(F, g);
                            b && E.push(b)
                        }
                        f.Element.isElement(p) ? d.push(c.createElement(eI.Provider, {
                            key: "provider-".concat(C.id),
                            value: !!B
                        }, c.createElement(ez, {
                            decorations: E,
                            element: p,
                            key: C.id,
                            renderElement: n,
                            renderPlaceholder: u,
                            renderLeaf: a,
                            selection: B
                        }))) : d.push(c.createElement(eM, {
                            decorations: E,
                            key: C.id,
                            isLast: D && h === r.children.length - 1,
                            parent: r,
                            renderPlaceholder: u,
                            renderLeaf: a,
                            text: p
                        })), m.set(p, h), A.set(p, r)
                    }
                    return d
                },
                eH = (0, l.createContext)(!1),
                eK = () => (0, l.useContext)(eH),
                eU = (0, l.createContext)(null),
                e$ = () => {
                    var e = (0, l.useContext)(eU);
                    if (!e) throw Error("The `useSlate` hook must be used inside the <Slate> component's context.");
                    var {
                        editor: t
                    } = e;
                    return t
                },
                eX = {
                    bold: "mod+b",
                    compose: ["down", "left", "right", "up", "backspace", "enter"],
                    moveBackward: "left",
                    moveForward: "right",
                    moveWordBackward: "ctrl+left",
                    moveWordForward: "ctrl+right",
                    deleteBackward: "shift?+backspace",
                    deleteForward: "shift?+delete",
                    extendBackward: "shift+left",
                    extendForward: "shift+right",
                    italic: "mod+i",
                    insertSoftBreak: "shift+enter",
                    splitBlock: "enter",
                    undo: "mod+z"
                },
                eJ = {
                    moveLineBackward: "opt+up",
                    moveLineForward: "opt+down",
                    moveWordBackward: "opt+left",
                    moveWordForward: "opt+right",
                    deleteBackward: ["ctrl+backspace", "ctrl+h"],
                    deleteForward: ["ctrl+delete", "ctrl+d"],
                    deleteLineBackward: "cmd+shift?+backspace",
                    deleteLineForward: ["cmd+shift?+delete", "ctrl+k"],
                    deleteWordBackward: "opt+shift?+backspace",
                    deleteWordForward: "opt+shift?+delete",
                    extendLineBackward: "opt+shift+up",
                    extendLineForward: "opt+shift+down",
                    redo: "cmd+shift+z",
                    transposeCharacter: "ctrl+t"
                },
                eY = {
                    deleteWordBackward: "ctrl+shift?+backspace",
                    deleteWordForward: "ctrl+shift?+delete",
                    redo: ["ctrl+y", "ctrl+shift+z"]
                },
                eG = e => {
                    var t = eX[e],
                        r = eJ[e],
                        n = eY[e],
                        u = t && (0, h.isKeyHotkey)(t),
                        a = r && (0, h.isKeyHotkey)(r),
                        o = n && (0, h.isKeyHotkey)(n);
                    return e => !!(u && u(e) || es && a && a(e) || !es && o && o(e)) || !1
                },
                eZ = {
                    isBold: eG("bold"),
                    isCompose: eG("compose"),
                    isMoveBackward: eG("moveBackward"),
                    isMoveForward: eG("moveForward"),
                    isDeleteBackward: eG("deleteBackward"),
                    isDeleteForward: eG("deleteForward"),
                    isDeleteLineBackward: eG("deleteLineBackward"),
                    isDeleteLineForward: eG("deleteLineForward"),
                    isDeleteWordBackward: eG("deleteWordBackward"),
                    isDeleteWordForward: eG("deleteWordForward"),
                    isExtendBackward: eG("extendBackward"),
                    isExtendForward: eG("extendForward"),
                    isExtendLineBackward: eG("extendLineBackward"),
                    isExtendLineForward: eG("extendLineForward"),
                    isItalic: eG("italic"),
                    isMoveLineBackward: eG("moveLineBackward"),
                    isMoveLineForward: eG("moveLineForward"),
                    isMoveWordBackward: eG("moveWordBackward"),
                    isMoveWordForward: eG("moveWordForward"),
                    isRedo: eG("redo"),
                    isSoftBreak: eG("insertSoftBreak"),
                    isSplitBlock: eG("splitBlock"),
                    isTransposeCharacter: eG("transposeCharacter"),
                    isUndo: eG("undo")
                },
                eQ = (e, t) => {
                    var r = [],
                        n = () => {
                            r = []
                        };
                    return {
                        registerMutations: n => {
                            if (t.current) {
                                var u = n.filter(t => ea(e, t, n));
                                r.push(...u)
                            }
                        },
                        restoreDOM: function() {
                            r.length > 0 && (r.reverse().forEach(e => {
                                "characterData" !== e.type && (e.removedNodes.forEach(t => {
                                    e.target.insertBefore(t, e.nextSibling)
                                }), e.addedNodes.forEach(t => {
                                    e.target.removeChild(t)
                                }))
                            }), n())
                        },
                        clear: n
                    }
                },
                e0 = {
                    subtree: !0,
                    childList: !0,
                    characterData: !0,
                    characterDataOldValue: !0
                };
            class e1 extends l.Component {
                observe() {
                    var e, {
                        node: t
                    } = this.props;
                    if (!t.current) throw Error("Failed to attach MutationObserver, `node` is undefined");
                    null === (e = this.mutationObserver) || void 0 === e || e.observe(t.current, e0)
                }
                componentDidMount() {
                    var {
                        receivedUserInput: e
                    } = this.props, t = this.context;
                    this.manager = eQ(t, e), this.mutationObserver = new MutationObserver(this.manager.registerMutations), this.observe()
                }
                getSnapshotBeforeUpdate() {
                    var e, t, r, n, u = null === (e = this.mutationObserver) || void 0 === e ? void 0 : e.takeRecords();
                    return null != u && u.length && (null === (n = this.manager) || void 0 === n || n.registerMutations(u)), null === (t = this.mutationObserver) || void 0 === t || t.disconnect(), null === (r = this.manager) || void 0 === r || r.restoreDOM(), null
                }
                componentDidUpdate() {
                    var e;
                    null === (e = this.manager) || void 0 === e || e.clear(), this.observe()
                }
                componentWillUnmount() {
                    var e;
                    null === (e = this.mutationObserver) || void 0 === e || e.disconnect()
                }
                render() {
                    return this.props.children
                }
                constructor() {
                    super(...arguments), this.context = null, this.manager = null, this.mutationObserver = null
                }
            }
            e1.contextType = eS;
            var e2 = el ? e1 : e => {
                var {
                    children: t
                } = e;
                return c.createElement(c.Fragment, null, t)
            };

            function e3(e) {
                for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                return r.reduce((e, t) => e.slice(0, t.start) + t.text + e.slice(t.end), e)
            }

            function e7(e, t) {
                var {
                    start: r,
                    end: n,
                    text: u
                } = t, a = e.slice(r, n), o = function(e, t) {
                    for (var r = Math.min(e.length, t.length), n = 0; n < r; n++)
                        if (e.charAt(n) !== t.charAt(n)) return n;
                    return r
                }(a, u), i = Math.min(a.length - o, u.length - o), s = function(e, t, r) {
                    for (var n = Math.min(e.length, t.length, r), u = 0; u < n; u++)
                        if (e.charAt(e.length - u - 1) !== t.charAt(t.length - u - 1)) return u;
                    return n
                }(a, u, i), l = {
                    start: r + o,
                    end: n - s,
                    text: u.slice(o, u.length - s)
                };
                return l.start === l.end && 0 === l.text.length ? null : l
            }

            function e4(e, t) {
                var {
                    path: r,
                    offset: n
                } = t;
                if (!f.Editor.hasPath(e, r)) return null;
                var u = f.Node.get(e, r);
                if (!f.Text.isText(u)) return null;
                var a = f.Editor.above(e, {
                    match: t => f.Element.isElement(t) && f.Editor.isBlock(e, t),
                    at: r
                });
                if (!a) return null;
                for (; n > u.text.length;) {
                    var o = f.Editor.next(e, {
                        at: r,
                        match: f.Text.isText
                    });
                    if (!o || !f.Path.isDescendant(o[1], a[1])) return null;
                    n -= u.text.length, u = o[0], r = o[1]
                }
                return {
                    path: r,
                    offset: n
                }
            }

            function e8(e, t) {
                var r = e4(e, t.anchor);
                if (!r) return null;
                if (f.Range.isCollapsed(t)) return {
                    anchor: r,
                    focus: r
                };
                var n = e4(e, t.focus);
                return n ? {
                    anchor: r,
                    focus: n
                } : null
            }

            function e9(e, t, r) {
                var n = W.get(e),
                    u = null == n ? void 0 : n.find(e => {
                        var {
                            path: r
                        } = e;
                        return f.Path.equals(r, t.path)
                    });
                if (!u || t.offset <= u.diff.start) return f.Point.transform(t, r, {
                    affinity: "backward"
                });
                var {
                    diff: a
                } = u;
                if (t.offset <= a.start + a.text.length) {
                    var o = {
                            path: t.path,
                            offset: a.start
                        },
                        i = f.Point.transform(o, r, {
                            affinity: "backward"
                        });
                    return i ? {
                        path: i.path,
                        offset: i.offset + t.offset - a.start
                    } : null
                }
                var s = {
                        path: t.path,
                        offset: t.offset - a.text.length + a.end - a.start
                    },
                    l = f.Point.transform(s, r, {
                        affinity: "backward"
                    });
                return l ? "split_node" === r.type && f.Path.equals(r.path, t.path) && s.offset < r.position && a.start < r.position ? l : {
                    path: l.path,
                    offset: l.offset + a.text.length - a.end + a.start
                } : null
            }

            function e5(e, t, r) {
                var n = e9(e, t.anchor, r);
                if (!n) return null;
                if (f.Range.isCollapsed(t)) return {
                    anchor: n,
                    focus: n
                };
                var u = e9(e, t.focus, r);
                return u ? {
                    anchor: n,
                    focus: u
                } : null
            }

            function e6(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function te(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? e6(Object(r), !0).forEach(function(t) {
                        C(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : e6(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var tt = function() {},
                tr = e => (null == e ? void 0 : e.constructor.name) === "DataTransfer",
                tn = ["node"];

            function tu(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }
            var ta = {
                    subtree: !0,
                    childList: !0,
                    characterData: !0
                },
                to = ["autoFocus", "decorate", "onDOMBeforeInput", "placeholder", "readOnly", "renderElement", "renderLeaf", "renderPlaceholder", "scrollSelectionIntoView", "style", "as", "disableDefaultStyles"],
                ti = ["text"];

            function ts(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function tl(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ts(Object(r), !0).forEach(function(t) {
                        C(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ts(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var tc = e => c.createElement(c.Fragment, null, eV(e)),
                td = e => {
                    var t, r, n, a, i, d, D = (0, l.useCallback)(e => c.createElement(tf, Object.assign({}, e)), []),
                        {
                            autoFocus: h,
                            decorate: v = tD,
                            onDOMBeforeInput: p,
                            placeholder: B,
                            readOnly: E = !1,
                            renderElement: m,
                            renderLeaf: A,
                            renderPlaceholder: x = D,
                            scrollSelectionIntoView: k = th,
                            style: j = {},
                            as: H = "div",
                            disableDefaultStyles: U = !1
                        } = e,
                        Y = g(e, to),
                        Z = e$(),
                        [Q, ee] = (0, l.useState)(!1),
                        et = (0, l.useRef)(null),
                        er = (0, l.useRef)([]);
                    var {
                        onUserInput: en,
                        receivedUserInput: eu
                    } = (t = eT(), r = (0, l.useRef)(!1), n = (0, l.useRef)(0), a = (0, l.useCallback)(() => {
                        if (!r.current) {
                            r.current = !0;
                            var e = em.getWindow(t);
                            e.cancelAnimationFrame(n.current), n.current = e.requestAnimationFrame(() => {
                                r.current = !1
                            })
                        }
                    }, []), (0, l.useEffect)(() => () => cancelAnimationFrame(n.current), []), {
                        receivedUserInput: r,
                        onUserInput: a
                    }), [, eo] = (0, l.useReducer)(e => e + 1, 0);
                    I.set(Z, eo), P.set(Z, E);
                    var es = (0, l.useMemo)(() => ({
                        isDraggingInternally: !1,
                        isUpdatingSelection: !1,
                        latestElement: null,
                        hasMarkPlaceholder: !1
                    }), []);
                    (0, l.useLayoutEffect)(() => () => {
                        if (null != es) null != es.latestElement && (es.latestElement.remove(), es.latestElement = null)
                    }, []), (0, l.useEffect)(() => {
                        et.current && h && et.current.focus()
                    }, [h]);
                    var ef = (0, l.useCallback)(s(() => {
                            if ((el || !em.isComposing(Z)) && (!es.isUpdatingSelection || null != ev && ev.isFlushing()) && !es.isDraggingInternally) {
                                var e = em.findDocumentOrShadowRoot(Z),
                                    {
                                        activeElement: t
                                    } = e,
                                    r = em.toDOMNode(Z, Z),
                                    n = e.getSelection();
                                if (t === r ? (es.latestElement = t, R.set(Z, !0)) : R.delete(Z), !n) return f.Transforms.deselect(Z);
                                var {
                                    anchorNode: u,
                                    focusNode: a
                                } = n, o = em.hasEditableTarget(Z, u) || em.isTargetInsideNonReadonlyVoid(Z, u), i = em.hasEditableTarget(Z, a) || em.isTargetInsideNonReadonlyVoid(Z, a);
                                if (o && i) {
                                    var s = em.toSlateRange(Z, n, {
                                        exactMatch: !1,
                                        suppressThrow: !0
                                    });
                                    s && (em.isComposing(Z) || null != ev && ev.hasPendingChanges() || null != ev && ev.isFlushing() ? null == ev || ev.handleUserSelect(s) : f.Transforms.select(Z, s))
                                }
                                E && (!o || !i) && f.Transforms.deselect(Z)
                            }
                        }, 100), [E]),
                        eh = (0, l.useMemo)(() => o(ef, 0), [ef]),
                        ev = function(e) {
                            var t, {
                                    node: r
                                } = e,
                                n = g(e, tn);
                            if (!el) return null;
                            var u = eT();
                            var a = (t = (0, l.useRef)(!1), (0, l.useEffect)(() => (t.current = !0, () => {
                                    t.current = !1
                                }), []), t.current),
                                [o] = (0, l.useState)(() => (function(e) {
                                    var {
                                        editor: t,
                                        scheduleOnDOMSelectionChange: r,
                                        onDOMSelectionChange: n
                                    } = e, u = !1, a = null, o = null, i = null, s = 0, l = !1, c = () => {
                                        var e = L.get(t);
                                        if (L.delete(t), e) {
                                            var {
                                                selection: r
                                            } = t, n = e8(t, e);
                                            n && (!r || !f.Range.equals(n, r)) && f.Transforms.select(t, n)
                                        }
                                    }, d = () => {
                                        var e = _.get(t);
                                        if (_.delete(t), e) {
                                            if (e.at) {
                                                var r = f.Point.isPoint(e.at) ? e4(t, e.at) : e8(t, e.at);
                                                if (!r) return;
                                                var n = f.Editor.range(t, r);
                                                (!t.selection || !f.Range.equals(t.selection, n)) && f.Transforms.select(t, r)
                                            }
                                            e.run()
                                        }
                                    }, D = () => {
                                        if (o && (clearTimeout(o), o = null), i && (clearTimeout(i), i = null), !g() && !C()) {
                                            c();
                                            return
                                        }!u && (u = !0, setTimeout(() => u = !1)), C() && (u = "action");
                                        var e = t.selection && f.Editor.rangeRef(t, t.selection, {
                                            affinity: "forward"
                                        });
                                        z.set(t, t.marks), tt("flush", _.get(t), W.get(t));
                                        for (var a = g(); s = null === (D = W.get(t)) || void 0 === D ? void 0 : D[0];) {
                                            var s, D, h, v = M.get(t);
                                            void 0 !== v && (M.delete(t), t.marks = v), v && !1 === l && (l = null);
                                            var p = function(e) {
                                                var {
                                                    path: t,
                                                    diff: r
                                                } = e;
                                                return {
                                                    anchor: {
                                                        path: t,
                                                        offset: r.start
                                                    },
                                                    focus: {
                                                        path: t,
                                                        offset: r.end
                                                    }
                                                }
                                            }(s);
                                            (!t.selection || !f.Range.equals(t.selection, p)) && f.Transforms.select(t, p), s.diff.text ? f.Editor.insertText(t, s.diff.text) : f.Editor.deleteFragment(t), W.set(t, null === (h = W.get(t)) || void 0 === h ? void 0 : h.filter(e => {
                                                var {
                                                    id: t
                                                } = e;
                                                return t !== s.id
                                            })), ! function(e, t) {
                                                var {
                                                    path: r,
                                                    diff: n
                                                } = t;
                                                if (!f.Editor.hasPath(e, r)) return !1;
                                                var u = f.Node.get(e, r);
                                                if (!f.Text.isText(u)) return !1;
                                                if (n.start !== u.text.length || 0 === n.text.length) return u.text.slice(n.start, n.start + n.text.length) === n.text;
                                                var a = f.Path.next(r);
                                                if (!f.Editor.hasPath(e, a)) return !1;
                                                var o = f.Node.get(e, a);
                                                return f.Text.isText(o) && o.text.startsWith(n.text)
                                            }(t, s) && (a = !1, _.delete(t), z.delete(t), u = "action", L.delete(t), r.cancel(), n.cancel(), null == e || e.unref())
                                        }
                                        var B = null == e ? void 0 : e.unref();
                                        if (B && !L.get(t) && (!t.selection || !f.Range.equals(B, t.selection)) && f.Transforms.select(t, B), C()) {
                                            d();
                                            return
                                        }
                                        a && r(), r.flush(), n.flush(), c();
                                        var E = z.get(t);
                                        z.delete(t), void 0 !== E && (t.marks = E, t.onChange())
                                    }, h = function() {
                                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                            r = y.get(t);
                                        if (r) {
                                            if (g() || e) {
                                                r.style.display = "none";
                                                return
                                            }
                                            r.style.removeProperty("display")
                                        }
                                    }, v = (e, r) => {
                                        var n, u, a, o, i, l, c, d, D, v = null !== (D = W.get(t)) && void 0 !== D ? D : [];
                                        W.set(t, v);
                                        var p = f.Node.leaf(t, e),
                                            C = v.findIndex(t => f.Path.equals(t.path, e));
                                        if (C < 0) {
                                            e7(p.text, r) && v.push({
                                                path: e,
                                                diff: r,
                                                id: s++
                                            }), h();
                                            return
                                        }
                                        var g = (n = p.text, u = v[C].diff, a = r, o = Math.min(u.start, a.start), i = Math.max(0, Math.min(u.start + u.text.length, a.end) - a.start), l = e3(n, u, a), c = Math.max(a.start + a.text.length, u.start + u.text.length + (u.start + u.text.length > a.start ? a.text.length : 0) - i), d = l.slice(o, c), e7(n, {
                                            start: o,
                                            end: Math.max(u.end, a.end - u.text.length + (u.end - u.start)),
                                            text: d
                                        }));
                                        if (!g) {
                                            v.splice(C, 1), h();
                                            return
                                        }
                                        v[C] = te(te({}, v[C]), {}, {
                                            diff: g
                                        })
                                    }, p = function(e) {
                                        var {
                                            at: u
                                        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                        l = !1, L.delete(t), r.cancel(), n.cancel(), C() && D(), _.set(t, {
                                            at: u,
                                            run: e
                                        }), i = setTimeout(D)
                                    }, C = () => !!_.get(t), g = () => {
                                        var e;
                                        return !!(null !== (e = W.get(t)) && void 0 !== e && e.length)
                                    }, B = e => {
                                        L.set(t, e), o && (clearTimeout(o), o = null);
                                        var {
                                            selection: r
                                        } = t;
                                        if (e) {
                                            var n = !r || !f.Path.equals(r.anchor.path, e.anchor.path),
                                                u = !r || !f.Path.equals(r.anchor.path.slice(0, -1), e.anchor.path.slice(0, -1));
                                            (n && l || u) && (l = !1), (n || g()) && (o = setTimeout(D, 200))
                                        }
                                    }, E = () => {
                                        !C() && (i = setTimeout(D))
                                    };
                                    return {
                                        flush: D,
                                        scheduleFlush: E,
                                        hasPendingDiffs: g,
                                        hasPendingAction: C,
                                        hasPendingChanges: () => C() || g(),
                                        isFlushing: () => u,
                                        handleUserSelect: B,
                                        handleCompositionEnd: e => {
                                            a && clearTimeout(a), a = setTimeout(() => {
                                                S.set(t, !1), D()
                                            }, 25)
                                        },
                                        handleCompositionStart: e => {
                                            S.set(t, !0), a && (clearTimeout(a), a = null)
                                        },
                                        handleDOMBeforeInput: e => {
                                            o && (clearTimeout(o), o = null);
                                            var {
                                                inputType: r
                                            } = e, n = null, u = e.dataTransfer || e.data || void 0;
                                            !1 !== l && "insertText" !== r && "insertCompositionText" !== r && (l = !1);
                                            var [a] = e.getTargetRanges();
                                            a && (n = em.toSlateRange(t, a, {
                                                exactMatch: !1,
                                                suppressThrow: !0
                                            }));
                                            var i = em.getWindow(t).getSelection();
                                            if (!n && i && (a = i, n = em.toSlateRange(t, i, {
                                                    exactMatch: !1,
                                                    suppressThrow: !0
                                                })), n = null !== (P = n) && void 0 !== P ? P : t.selection) {
                                                var s = !0;
                                                if (r.startsWith("delete")) {
                                                    if (f.Range.isExpanded(n)) {
                                                        var [c, d] = f.Range.edges(n);
                                                        if (f.Node.leaf(t, c.path).text.length === c.offset && 0 === d.offset) {
                                                            var D = f.Editor.next(t, {
                                                                at: c.path,
                                                                match: f.Text.isText
                                                            });
                                                            D && f.Path.equals(D[1], d.path) && (n = {
                                                                anchor: d,
                                                                focus: d
                                                            })
                                                        }
                                                    }
                                                    var h = r.endsWith("Backward") ? "backward" : "forward",
                                                        [C, g] = f.Range.edges(n),
                                                        [m, A] = f.Editor.leaf(t, C.path),
                                                        F = {
                                                            text: "",
                                                            start: C.offset,
                                                            end: g.offset
                                                        },
                                                        b = W.get(t),
                                                        y = null == b ? void 0 : b.find(e => f.Path.equals(e.path, A)),
                                                        w = y ? [y.diff, F] : [F];
                                                    if (0 === e3(m.text, ...w).length && (s = !1), f.Range.isExpanded(n)) {
                                                        if (s && f.Path.equals(n.anchor.path, n.focus.path)) {
                                                            var O = {
                                                                path: n.anchor.path,
                                                                offset: C.offset
                                                            };
                                                            return B(f.Editor.range(t, O, O)), v(n.anchor.path, {
                                                                text: "",
                                                                end: g.offset,
                                                                start: C.offset
                                                            })
                                                        }
                                                        return p(() => f.Editor.deleteFragment(t, {
                                                            direction: h
                                                        }), {
                                                            at: n
                                                        })
                                                    }
                                                }
                                                switch (r) {
                                                    case "deleteByComposition":
                                                    case "deleteByCut":
                                                    case "deleteByDrag":
                                                        return p(() => f.Editor.deleteFragment(t), {
                                                            at: n
                                                        });
                                                    case "deleteContent":
                                                    case "deleteContentForward":
                                                        var {
                                                            anchor: x
                                                        } = n;
                                                        if (s && f.Range.isCollapsed(n)) {
                                                            var k = f.Node.leaf(t, x.path);
                                                            if (x.offset < k.text.length) return v(x.path, {
                                                                text: "",
                                                                start: x.offset,
                                                                end: x.offset + 1
                                                            })
                                                        }
                                                        return p(() => f.Editor.deleteForward(t), {
                                                            at: n
                                                        });
                                                    case "deleteContentBackward":
                                                        var P, R, {
                                                                anchor: S
                                                            } = n,
                                                            T = J(a) ? a.isCollapsed : !!(null !== (R = a) && void 0 !== R && R.collapsed);
                                                        if (s && T && f.Range.isCollapsed(n) && S.offset > 0) return v(S.path, {
                                                            text: "",
                                                            start: S.offset - 1,
                                                            end: S.offset
                                                        });
                                                        return p(() => f.Editor.deleteBackward(t), {
                                                            at: n
                                                        });
                                                    case "deleteEntireSoftLine":
                                                        return p(() => {
                                                            f.Editor.deleteBackward(t, {
                                                                unit: "line"
                                                            }), f.Editor.deleteForward(t, {
                                                                unit: "line"
                                                            })
                                                        }, {
                                                            at: n
                                                        });
                                                    case "deleteHardLineBackward":
                                                        return p(() => f.Editor.deleteBackward(t, {
                                                            unit: "block"
                                                        }), {
                                                            at: n
                                                        });
                                                    case "deleteSoftLineBackward":
                                                        return p(() => f.Editor.deleteBackward(t, {
                                                            unit: "line"
                                                        }), {
                                                            at: n
                                                        });
                                                    case "deleteHardLineForward":
                                                        return p(() => f.Editor.deleteForward(t, {
                                                            unit: "block"
                                                        }), {
                                                            at: n
                                                        });
                                                    case "deleteSoftLineForward":
                                                        return p(() => f.Editor.deleteForward(t, {
                                                            unit: "line"
                                                        }), {
                                                            at: n
                                                        });
                                                    case "deleteWordBackward":
                                                        return p(() => f.Editor.deleteBackward(t, {
                                                            unit: "word"
                                                        }), {
                                                            at: n
                                                        });
                                                    case "deleteWordForward":
                                                        return p(() => f.Editor.deleteForward(t, {
                                                            unit: "word"
                                                        }), {
                                                            at: n
                                                        });
                                                    case "insertLineBreak":
                                                        return p(() => f.Editor.insertSoftBreak(t), {
                                                            at: n
                                                        });
                                                    case "insertParagraph":
                                                        return p(() => f.Editor.insertBreak(t), {
                                                            at: n
                                                        });
                                                    case "insertCompositionText":
                                                    case "deleteCompositionText":
                                                    case "insertFromComposition":
                                                    case "insertFromDrop":
                                                    case "insertFromPaste":
                                                    case "insertFromYank":
                                                    case "insertReplacementText":
                                                    case "insertText":
                                                        if (tr(u)) return p(() => em.insertData(t, u), {
                                                            at: n
                                                        });
                                                        var j = null != u ? u : "";
                                                        if (M.get(t) && (j = j.replace("\uFEFF", "")), "insertText" === r && /.*\n.*\n$/.test(j) && (j = j.slice(0, -1)), j.includes("\n")) return p(() => {
                                                            var e = j.split("\n");
                                                            e.forEach((r, n) => {
                                                                r && f.Editor.insertText(t, r), n !== e.length - 1 && f.Editor.insertSoftBreak(t)
                                                            })
                                                        }, {
                                                            at: n
                                                        });
                                                        if (f.Path.equals(n.anchor.path, n.focus.path)) {
                                                            var [N, z] = f.Range.edges(n), _ = {
                                                                start: N.offset,
                                                                end: z.offset,
                                                                text: j
                                                            };
                                                            if (j && l && "insertCompositionText" === r) {
                                                                var L = l.start + l.text.search(/\S|$/);
                                                                _.start + _.text.search(/\S|$/) === L + 1 && _.end === l.start + l.text.length ? (_.start -= 1, l = null, E()) : l = !1
                                                            } else l = "insertText" === r && (null === l ? _ : !!(l && f.Range.isCollapsed(n)) && l.end + l.text.length === N.offset && te(te({}, l), {}, {
                                                                text: l.text + j
                                                            }));
                                                            if (s) {
                                                                v(N.path, _);
                                                                return
                                                            }
                                                        }
                                                        return p(() => f.Editor.insertText(t, j), {
                                                            at: n
                                                        })
                                                }
                                            }
                                        },
                                        handleKeyDown: e => {
                                            !g() && (h(!0), setTimeout(h))
                                        },
                                        handleDomMutations: e => {
                                            if (!(g() || C()) && e.some(r => ea(t, r, e))) {
                                                var r;
                                                null === (r = I.get(t)) || void 0 === r || r()
                                            }
                                        },
                                        handleInput: () => {
                                            (C() || !g()) && D()
                                        }
                                    }
                                })(function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var r = null != arguments[t] ? arguments[t] : {};
                                        t % 2 ? tu(Object(r), !0).forEach(function(t) {
                                            C(e, t, r[t])
                                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tu(Object(r)).forEach(function(t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                        })
                                    }
                                    return e
                                }({
                                    editor: u
                                }, n)));
                            return ! function(e, t, r) {
                                var [n] = (0, l.useState)(() => new MutationObserver(t));
                                ex(() => {
                                    n.takeRecords()
                                }), (0, l.useEffect)(() => {
                                    if (!e.current) throw Error("Failed to attach MutationObserver, `node` is undefined");
                                    return n.observe(e.current, r), () => n.disconnect()
                                }, [])
                            }(r, o.handleDomMutations, ta), N.set(u, o.scheduleFlush), a && o.flush(), o
                        }({
                            node: et,
                            onDOMSelectionChange: ef,
                            scheduleOnDOMSelectionChange: eh
                        });
                    ex(() => {
                        et.current && (e = K(et.current)) ? (F.set(Z, e), b.set(Z, et.current), O.set(Z, et.current), w.set(et.current, Z)) : O.delete(Z);
                        var e, {
                                selection: t
                            } = Z,
                            r = em.findDocumentOrShadowRoot(Z).getSelection();
                        if (!(!r || !em.isFocused(Z) || null != ev && ev.hasPendingAction())) {
                            var n = e => {
                                    var n = "None" !== r.type;
                                    if (t || n) {
                                        var u = b.get(Z),
                                            a = !1;
                                        if (u.contains(r.anchorNode) && u.contains(r.focusNode) && (a = !0), n && a && t && !e) {
                                            var o = em.toSlateRange(Z, r, {
                                                exactMatch: !0,
                                                suppressThrow: !0
                                            });
                                            if (o && f.Range.equals(o, t)) {
                                                if (!es.hasMarkPlaceholder) return;
                                                var i, {
                                                    anchorNode: s
                                                } = r;
                                                if (null != s && null !== (i = s.parentElement) && void 0 !== i && i.hasAttribute("data-slate-mark-placeholder")) return
                                            }
                                        }
                                        if (t && !em.hasRange(Z, t)) {
                                            Z.selection = em.toSlateRange(Z, r, {
                                                exactMatch: !1,
                                                suppressThrow: !0
                                            });
                                            return
                                        }
                                        es.isUpdatingSelection = !0;
                                        var l = t && em.toDOMRange(Z, t);
                                        return l ? (f.Range.isBackward(t) ? r.setBaseAndExtent(l.endContainer, l.endOffset, l.startContainer, l.startOffset) : r.setBaseAndExtent(l.startContainer, l.startOffset, l.endContainer, l.endOffset), k(Z, l)) : r.removeAllRanges(), l
                                    }
                                },
                                u = n(),
                                a = (null == ev ? void 0 : ev.isFlushing()) === "action";
                            if (!el || !a) {
                                setTimeout(() => {
                                    u && ec && em.toDOMNode(Z, Z).focus(), es.isUpdatingSelection = !1
                                });
                                return
                            }
                            var o = null,
                                i = requestAnimationFrame(() => {
                                    if (a) {
                                        var e = e => {
                                            try {
                                                em.toDOMNode(Z, Z).focus(), n(e)
                                            } catch (e) {}
                                        };
                                        e(), o = setTimeout(() => {
                                            e(!0), es.isUpdatingSelection = !1
                                        })
                                    }
                                });
                            return () => {
                                cancelAnimationFrame(i), o && clearTimeout(o)
                            }
                        }
                    });
                    var eA = (0, l.useCallback)(e => {
                            if (en(), !E && em.hasEditableTarget(Z, e.target) && !tp(e, p)) {
                                if (ev) return ev.handleDOMBeforeInput(e);
                                eh.flush(), ef.flush();
                                var {
                                    selection: t
                                } = Z, {
                                    inputType: r
                                } = e, n = e.dataTransfer || e.data || void 0, u = "insertCompositionText" === r || "deleteCompositionText" === r;
                                if (u && em.isComposing(Z)) return;
                                var a = !1;
                                if ("insertText" === r && t && f.Range.isCollapsed(t) && e.data && 1 === e.data.length && /[a-z ]/i.test(e.data) && 0 !== t.anchor.offset) {
                                    a = !0, Z.marks && (a = !1);
                                    var {
                                        anchor: o
                                    } = t, [i, s] = em.toDOMPoint(Z, o), l = null === (D = i.parentElement) || void 0 === D ? void 0 : D.closest("a"), c = em.getWindow(Z);
                                    if (a && l && em.hasDOMNode(Z, l)) {
                                        var d, D, h, v, C = null == c ? void 0 : c.document.createTreeWalker(l, NodeFilter.SHOW_TEXT).lastChild();
                                        C === i && (null === (v = C.textContent) || void 0 === v ? void 0 : v.length) === s && (a = !1)
                                    }
                                    if (a && i.parentElement && (null == c ? void 0 : null === (h = c.getComputedStyle(i.parentElement)) || void 0 === h ? void 0 : h.whiteSpace) === "pre") {
                                        var g = f.Editor.above(Z, {
                                            at: o.path,
                                            match: e => f.Element.isElement(e) && f.Editor.isBlock(Z, e)
                                        });
                                        g && f.Node.string(g[0]).includes("	") && (a = !1)
                                    }
                                }
                                if (!r.startsWith("delete") || r.startsWith("deleteBy")) {
                                    var [B] = e.getTargetRanges();
                                    if (B) {
                                        var m = em.toSlateRange(Z, B, {
                                            exactMatch: !1,
                                            suppressThrow: !1
                                        });
                                        if (!t || !f.Range.equals(t, m)) {
                                            a = !1;
                                            var A = !u && Z.selection && f.Editor.rangeRef(Z, Z.selection);
                                            f.Transforms.select(Z, m), A && T.set(Z, A)
                                        }
                                    }
                                }
                                if (!u) {
                                    if (!a && e.preventDefault(), t && f.Range.isExpanded(t) && r.startsWith("delete")) {
                                        var F = r.endsWith("Backward") ? "backward" : "forward";
                                        f.Editor.deleteFragment(Z, {
                                            direction: F
                                        });
                                        return
                                    }
                                    switch (r) {
                                        case "deleteByComposition":
                                        case "deleteByCut":
                                        case "deleteByDrag":
                                            f.Editor.deleteFragment(Z);
                                            break;
                                        case "deleteContent":
                                        case "deleteContentForward":
                                            f.Editor.deleteForward(Z);
                                            break;
                                        case "deleteContentBackward":
                                            f.Editor.deleteBackward(Z);
                                            break;
                                        case "deleteEntireSoftLine":
                                            f.Editor.deleteBackward(Z, {
                                                unit: "line"
                                            }), f.Editor.deleteForward(Z, {
                                                unit: "line"
                                            });
                                            break;
                                        case "deleteHardLineBackward":
                                            f.Editor.deleteBackward(Z, {
                                                unit: "block"
                                            });
                                            break;
                                        case "deleteSoftLineBackward":
                                            f.Editor.deleteBackward(Z, {
                                                unit: "line"
                                            });
                                            break;
                                        case "deleteHardLineForward":
                                            f.Editor.deleteForward(Z, {
                                                unit: "block"
                                            });
                                            break;
                                        case "deleteSoftLineForward":
                                            f.Editor.deleteForward(Z, {
                                                unit: "line"
                                            });
                                            break;
                                        case "deleteWordBackward":
                                            f.Editor.deleteBackward(Z, {
                                                unit: "word"
                                            });
                                            break;
                                        case "deleteWordForward":
                                            f.Editor.deleteForward(Z, {
                                                unit: "word"
                                            });
                                            break;
                                        case "insertLineBreak":
                                            f.Editor.insertSoftBreak(Z);
                                            break;
                                        case "insertParagraph":
                                            f.Editor.insertBreak(Z);
                                            break;
                                        case "insertFromComposition":
                                        case "insertFromDrop":
                                        case "insertFromPaste":
                                        case "insertFromYank":
                                        case "insertReplacementText":
                                        case "insertText":
                                            "insertFromComposition" === r && em.isComposing(Z) && (ee(!1), S.set(Z, !1)), (null == n ? void 0 : n.constructor.name) === "DataTransfer" ? em.insertData(Z, n) : "string" == typeof n && (a ? er.current.push(() => f.Editor.insertText(Z, n)) : f.Editor.insertText(Z, n))
                                    }
                                    var b = null === (d = T.get(Z)) || void 0 === d ? void 0 : d.unref();
                                    T.delete(Z), b && (!Z.selection || !f.Range.equals(Z.selection, b)) && f.Transforms.select(Z, b)
                                }
                            }
                        }, [E, p]),
                        eF = (0, l.useCallback)(e => {
                            null == e ? (ef.cancel(), eh.cancel(), b.delete(Z), O.delete(Z), et.current && eE && et.current.removeEventListener("beforeinput", eA)) : eE && e.addEventListener("beforeinput", eA), et.current = e
                        }, [et, eA, ef, eh]);
                    ex(() => {
                        var e = em.getWindow(Z);
                        return e.document.addEventListener("selectionchange", eh), () => {
                            e.document.removeEventListener("selectionchange", eh)
                        }
                    }, [eh]);
                    var eb = v([Z, []]);
                    if (B && 1 === Z.children.length && 1 === Array.from(f.Node.texts(Z)).length && "" === f.Node.string(Z) && !Q) {
                        var ey = f.Editor.start(Z, []);
                        eb.push({
                            [q]: !0,
                            placeholder: B,
                            anchor: ey,
                            focus: ey
                        })
                    }
                    var {
                        marks: ew
                    } = Z;
                    if (es.hasMarkPlaceholder = !1, Z.selection && f.Range.isCollapsed(Z.selection) && ew) {
                        var {
                            anchor: eO
                        } = Z.selection, ek = f.Node.leaf(Z, eO.path), eP = g(ek, ti);
                        if (!f.Text.equals(ek, ew, {
                                loose: !0
                            })) {
                            es.hasMarkPlaceholder = !0;
                            var eR = Object.fromEntries(Object.keys(eP).map(e => [e, null]));
                            eb.push(tl(tl(tl({
                                [V]: !0
                            }, eR), ew), {}, {
                                anchor: eO,
                                focus: eO
                            }))
                        }
                    }(0, l.useEffect)(() => {
                        setTimeout(() => {
                            var {
                                selection: e
                            } = Z;
                            if (e) {
                                var {
                                    anchor: t
                                } = e, r = f.Node.leaf(Z, t.path);
                                if (ew && !f.Text.equals(r, ew, {
                                        loose: !0
                                    })) {
                                    M.set(Z, ew);
                                    return
                                }
                            }
                            M.delete(Z)
                        })
                    });
                    var eS = null === (i = y.get(Z)) || void 0 === i ? void 0 : null === (d = i.getBoundingClientRect()) || void 0 === d ? void 0 : d.height;
                    return c.createElement(eH.Provider, {
                        value: E
                    }, c.createElement(e_.Provider, {
                        value: v
                    }, c.createElement(e2, {
                        node: et,
                        receivedUserInput: eu
                    }, c.createElement(H, Object.assign({
                        role: E ? void 0 : "textbox",
                        "aria-multiline": !E || void 0
                    }, Y, {
                        spellCheck: (!!eE || !eB) && Y.spellCheck,
                        autoCorrect: eE || !eB ? Y.autoCorrect : "false",
                        autoCapitalize: eE || !eB ? Y.autoCapitalize : "false",
                        "data-slate-editor": !0,
                        "data-slate-node": "value",
                        contentEditable: !E,
                        zindex: -1,
                        suppressContentEditableWarning: !0,
                        ref: eF,
                        style: tl(tl({}, U ? {} : tl({
                            position: "relative",
                            outline: "none",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word"
                        }, eS ? {
                            minHeight: eS
                        } : {})), j),
                        onBeforeInput: (0, l.useCallback)(e => {
                            if (!eE && !E && !tv(e, Y.onBeforeInput) && em.hasSelectableTarget(Z, e.target) && (e.preventDefault(), !em.isComposing(Z))) {
                                var t = e.data;
                                f.Editor.insertText(Z, t)
                            }
                        }, [E]),
                        onInput: (0, l.useCallback)(e => {
                            if (!tv(e, Y.onInput)) {
                                if (ev) {
                                    ev.handleInput();
                                    return
                                }
                                for (var t of er.current) t();
                                er.current = []
                            }
                        }, []),
                        onBlur: (0, l.useCallback)(e => {
                            if (E || es.isUpdatingSelection || !em.hasSelectableTarget(Z, e.target) || tv(e, Y.onBlur)) return;
                            var t = em.findDocumentOrShadowRoot(Z);
                            if (es.latestElement === t.activeElement) return;
                            var {
                                relatedTarget: r
                            } = e;
                            if (r !== em.toDOMNode(Z, Z)) {
                                if (!($(r) && r.hasAttribute("data-slate-spacer"))) {
                                    if (null != r && X(r) && em.hasDOMNode(Z, r)) {
                                        var n = em.toSlateNode(Z, r);
                                        if (f.Element.isElement(n) && !Z.isVoid(n)) return
                                    }
                                    if (ed) {
                                        var u = t.getSelection();
                                        null == u || u.removeAllRanges()
                                    }
                                    R.delete(Z)
                                }
                            }
                        }, [E, Y.onBlur]),
                        onClick: (0, l.useCallback)(e => {
                            if (em.hasTarget(Z, e.target) && !tv(e, Y.onClick) && X(e.target)) {
                                var t = em.toSlateNode(Z, e.target),
                                    r = em.findPath(Z, t);
                                if (!!f.Editor.hasPath(Z, r) && f.Node.get(Z, r) === t) {
                                    if (3 === e.detail && r.length >= 1) {
                                        var n = r;
                                        if (!(f.Element.isElement(t) && f.Editor.isBlock(Z, t))) {
                                            var u, a = f.Editor.above(Z, {
                                                match: e => f.Element.isElement(e) && f.Editor.isBlock(Z, e),
                                                at: r
                                            });
                                            n = null !== (u = null == a ? void 0 : a[1]) && void 0 !== u ? u : r.slice(0, 1)
                                        }
                                        var o = f.Editor.range(Z, n);
                                        f.Transforms.select(Z, o);
                                        return
                                    }
                                    if (!E) {
                                        var i = f.Editor.start(Z, r),
                                            s = f.Editor.end(Z, r),
                                            l = f.Editor.void(Z, {
                                                at: i
                                            }),
                                            c = f.Editor.void(Z, {
                                                at: s
                                            });
                                        if (l && c && f.Path.equals(l[1], c[1])) {
                                            var d = f.Editor.range(Z, i);
                                            f.Transforms.select(Z, d)
                                        }
                                    }
                                }
                            }
                        }, [E, Y.onClick]),
                        onCompositionEnd: (0, l.useCallback)(e => {
                            if (em.hasSelectableTarget(Z, e.target) && (em.isComposing(Z) && (ee(!1), S.set(Z, !1)), null == ev || ev.handleCompositionEnd(e), !tv(e, Y.onCompositionEnd) && !el && !ed && !ep && !ei && !eg && !eC && e.data)) {
                                var t = M.get(Z);
                                M.delete(Z), void 0 !== t && (z.set(Z, Z.marks), Z.marks = t), f.Editor.insertText(Z, e.data);
                                var r = z.get(Z);
                                z.delete(Z), void 0 !== r && (Z.marks = r)
                            }
                        }, [Y.onCompositionEnd]),
                        onCompositionUpdate: (0, l.useCallback)(e => {
                            em.hasSelectableTarget(Z, e.target) && !tv(e, Y.onCompositionUpdate) && !em.isComposing(Z) && (ee(!0), S.set(Z, !0))
                        }, [Y.onCompositionUpdate]),
                        onCompositionStart: (0, l.useCallback)(e => {
                            if (em.hasSelectableTarget(Z, e.target) && (null == ev || ev.handleCompositionStart(e), !tv(e, Y.onCompositionStart) && !el)) {
                                ee(!0);
                                var {
                                    selection: t
                                } = Z;
                                if (t) {
                                    if (f.Range.isExpanded(t)) {
                                        f.Editor.deleteFragment(Z);
                                        return
                                    }
                                    var r = f.Editor.above(Z, {
                                        match: e => f.Element.isElement(e) && f.Editor.isInline(Z, e),
                                        mode: "highest"
                                    });
                                    if (r) {
                                        var [, n] = r;
                                        if (f.Editor.isEnd(Z, t.anchor, n)) {
                                            var u = f.Editor.after(Z, n);
                                            f.Transforms.setSelection(Z, {
                                                anchor: u,
                                                focus: u
                                            })
                                        }
                                    }
                                }
                            }
                        }, [Y.onCompositionStart]),
                        onCopy: (0, l.useCallback)(e => {
                            em.hasSelectableTarget(Z, e.target) && !tv(e, Y.onCopy) && (e.preventDefault(), em.setFragmentData(Z, e.clipboardData, "copy"))
                        }, [Y.onCopy]),
                        onCut: (0, l.useCallback)(e => {
                            if (!E && em.hasSelectableTarget(Z, e.target) && !tv(e, Y.onCut)) {
                                e.preventDefault(), em.setFragmentData(Z, e.clipboardData, "cut");
                                var {
                                    selection: t
                                } = Z;
                                if (t) {
                                    if (f.Range.isExpanded(t)) f.Editor.deleteFragment(Z);
                                    else {
                                        var r = f.Node.parent(Z, t.anchor.path);
                                        f.Editor.isVoid(Z, r) && f.Transforms.delete(Z)
                                    }
                                }
                            }
                        }, [E, Y.onCut]),
                        onDragOver: (0, l.useCallback)(e => {
                            if (em.hasTarget(Z, e.target) && !tv(e, Y.onDragOver)) {
                                var t = em.toSlateNode(Z, e.target);
                                f.Element.isElement(t) && f.Editor.isVoid(Z, t) && e.preventDefault()
                            }
                        }, [Y.onDragOver]),
                        onDragStart: (0, l.useCallback)(e => {
                            if (!E && em.hasTarget(Z, e.target) && !tv(e, Y.onDragStart)) {
                                var t = em.toSlateNode(Z, e.target),
                                    r = em.findPath(Z, t);
                                if (f.Element.isElement(t) && f.Editor.isVoid(Z, t) || f.Editor.void(Z, {
                                        at: r,
                                        voids: !0
                                    })) {
                                    var n = f.Editor.range(Z, r);
                                    f.Transforms.select(Z, n)
                                }
                                es.isDraggingInternally = !0, em.setFragmentData(Z, e.dataTransfer, "drag")
                            }
                        }, [E, Y.onDragStart]),
                        onDrop: (0, l.useCallback)(e => {
                            if (!E && em.hasTarget(Z, e.target) && !tv(e, Y.onDrop)) {
                                e.preventDefault();
                                var t = Z.selection,
                                    r = em.findEventRange(Z, e),
                                    n = e.dataTransfer;
                                f.Transforms.select(Z, r), es.isDraggingInternally && t && !f.Range.equals(t, r) && !f.Editor.void(Z, {
                                    at: r,
                                    voids: !0
                                }) && f.Transforms.delete(Z, {
                                    at: t
                                }), em.insertData(Z, n), !em.isFocused(Z) && em.focus(Z)
                            }
                            es.isDraggingInternally = !1
                        }, [E, Y.onDrop]),
                        onDragEnd: (0, l.useCallback)(e => {
                            !E && es.isDraggingInternally && Y.onDragEnd && em.hasTarget(Z, e.target) && Y.onDragEnd(e), es.isDraggingInternally = !1
                        }, [E, Y.onDragEnd]),
                        onFocus: (0, l.useCallback)(e => {
                            if (!E && !es.isUpdatingSelection && em.hasEditableTarget(Z, e.target) && !tv(e, Y.onFocus)) {
                                var t = em.toDOMNode(Z, Z),
                                    r = em.findDocumentOrShadowRoot(Z);
                                if (es.latestElement = r.activeElement, ec && e.target !== t) {
                                    t.focus();
                                    return
                                }
                                R.set(Z, !0)
                            }
                        }, [E, Y.onFocus]),
                        onKeyDown: (0, l.useCallback)(e => {
                            if (!E && em.hasEditableTarget(Z, e.target)) {
                                null == ev || ev.handleKeyDown(e);
                                var {
                                    nativeEvent: t
                                } = e;
                                if (em.isComposing(Z) && !1 === t.isComposing && (S.set(Z, !1), ee(!1)), !(tv(e, Y.onKeyDown) || em.isComposing(Z))) {
                                    var {
                                        selection: r
                                    } = Z, n = Z.children[null !== r ? r.focus.path[0] : 0], a = "rtl" === u(f.Node.string(n));
                                    if (eZ.isRedo(t)) {
                                        e.preventDefault();
                                        "function" == typeof Z.redo && Z.redo();
                                        return
                                    }
                                    if (eZ.isUndo(t)) {
                                        e.preventDefault();
                                        "function" == typeof Z.undo && Z.undo();
                                        return
                                    }
                                    if (eZ.isMoveLineBackward(t)) {
                                        e.preventDefault(), f.Transforms.move(Z, {
                                            unit: "line",
                                            reverse: !0
                                        });
                                        return
                                    }
                                    if (eZ.isMoveLineForward(t)) {
                                        e.preventDefault(), f.Transforms.move(Z, {
                                            unit: "line"
                                        });
                                        return
                                    }
                                    if (eZ.isExtendLineBackward(t)) {
                                        e.preventDefault(), f.Transforms.move(Z, {
                                            unit: "line",
                                            edge: "focus",
                                            reverse: !0
                                        });
                                        return
                                    }
                                    if (eZ.isExtendLineForward(t)) {
                                        e.preventDefault(), f.Transforms.move(Z, {
                                            unit: "line",
                                            edge: "focus"
                                        });
                                        return
                                    }
                                    if (eZ.isMoveBackward(t)) {
                                        e.preventDefault(), r && f.Range.isCollapsed(r) ? f.Transforms.move(Z, {
                                            reverse: !a
                                        }) : f.Transforms.collapse(Z, {
                                            edge: "start"
                                        });
                                        return
                                    }
                                    if (eZ.isMoveForward(t)) {
                                        e.preventDefault(), r && f.Range.isCollapsed(r) ? f.Transforms.move(Z, {
                                            reverse: a
                                        }) : f.Transforms.collapse(Z, {
                                            edge: "end"
                                        });
                                        return
                                    }
                                    if (eZ.isMoveWordBackward(t)) {
                                        e.preventDefault(), r && f.Range.isExpanded(r) && f.Transforms.collapse(Z, {
                                            edge: "focus"
                                        }), f.Transforms.move(Z, {
                                            unit: "word",
                                            reverse: !a
                                        });
                                        return
                                    }
                                    if (eZ.isMoveWordForward(t)) {
                                        e.preventDefault(), r && f.Range.isExpanded(r) && f.Transforms.collapse(Z, {
                                            edge: "focus"
                                        }), f.Transforms.move(Z, {
                                            unit: "word",
                                            reverse: a
                                        });
                                        return
                                    }
                                    if (eE) {
                                        if ((eD || ed) && r && (eZ.isDeleteBackward(t) || eZ.isDeleteForward(t)) && f.Range.isCollapsed(r)) {
                                            var o = f.Node.parent(Z, r.anchor.path);
                                            if (f.Element.isElement(o) && f.Editor.isVoid(Z, o) && (f.Editor.isInline(Z, o) || f.Editor.isBlock(Z, o))) {
                                                e.preventDefault(), f.Editor.deleteBackward(Z, {
                                                    unit: "block"
                                                });
                                                return
                                            }
                                        }
                                    } else {
                                        if (eZ.isBold(t) || eZ.isItalic(t) || eZ.isTransposeCharacter(t)) {
                                            e.preventDefault();
                                            return
                                        }
                                        if (eZ.isSoftBreak(t)) {
                                            e.preventDefault(), f.Editor.insertSoftBreak(Z);
                                            return
                                        }
                                        if (eZ.isSplitBlock(t)) {
                                            e.preventDefault(), f.Editor.insertBreak(Z);
                                            return
                                        }
                                        if (eZ.isDeleteBackward(t)) {
                                            e.preventDefault(), r && f.Range.isExpanded(r) ? f.Editor.deleteFragment(Z, {
                                                direction: "backward"
                                            }) : f.Editor.deleteBackward(Z);
                                            return
                                        }
                                        if (eZ.isDeleteForward(t)) {
                                            e.preventDefault(), r && f.Range.isExpanded(r) ? f.Editor.deleteFragment(Z, {
                                                direction: "forward"
                                            }) : f.Editor.deleteForward(Z);
                                            return
                                        }
                                        if (eZ.isDeleteLineBackward(t)) {
                                            e.preventDefault(), r && f.Range.isExpanded(r) ? f.Editor.deleteFragment(Z, {
                                                direction: "backward"
                                            }) : f.Editor.deleteBackward(Z, {
                                                unit: "line"
                                            });
                                            return
                                        }
                                        if (eZ.isDeleteLineForward(t)) {
                                            e.preventDefault(), r && f.Range.isExpanded(r) ? f.Editor.deleteFragment(Z, {
                                                direction: "forward"
                                            }) : f.Editor.deleteForward(Z, {
                                                unit: "line"
                                            });
                                            return
                                        }
                                        if (eZ.isDeleteWordBackward(t)) {
                                            e.preventDefault(), r && f.Range.isExpanded(r) ? f.Editor.deleteFragment(Z, {
                                                direction: "backward"
                                            }) : f.Editor.deleteBackward(Z, {
                                                unit: "word"
                                            });
                                            return
                                        }
                                        if (eZ.isDeleteWordForward(t)) {
                                            e.preventDefault(), r && f.Range.isExpanded(r) ? f.Editor.deleteFragment(Z, {
                                                direction: "forward"
                                            }) : f.Editor.deleteForward(Z, {
                                                unit: "word"
                                            });
                                            return
                                        }
                                    }
                                }
                            }
                        }, [E, Y.onKeyDown]),
                        onPaste: (0, l.useCallback)(e => {
                            !E && em.hasEditableTarget(Z, e.target) && !tv(e, Y.onPaste) && (!eE || G(e.nativeEvent) || ed) && (e.preventDefault(), em.insertData(Z, e.clipboardData))
                        }, [E, Y.onPaste])
                    }), c.createElement(tc, {
                        decorations: eb,
                        node: Z,
                        renderElement: m,
                        renderPlaceholder: x,
                        renderLeaf: A,
                        selection: Z.selection
                    })))))
                },
                tf = e => {
                    var {
                        attributes: t,
                        children: r
                    } = e;
                    return c.createElement("span", Object.assign({}, t), r, el && c.createElement("br", null))
                },
                tD = () => [],
                th = (e, t) => {
                    if (t.getBoundingClientRect && (!e.selection || e.selection && f.Range.isCollapsed(e.selection))) {
                        var r = t.startContainer.parentElement;
                        r.getBoundingClientRect = t.getBoundingClientRect.bind(t), (0, d.default)(r, {
                            scrollMode: "if-needed"
                        }), delete r.getBoundingClientRect
                    }
                },
                tv = (e, t) => {
                    if (!t) return !1;
                    var r = t(e);
                    return null != r ? r : e.isDefaultPrevented() || e.isPropagationStopped()
                },
                tp = (e, t) => {
                    if (!t) return !1;
                    var r = t(e);
                    return null != r ? r : e.defaultPrevented
                },
                tC = (0, l.createContext)(!1),
                tg = () => (0, l.useContext)(tC),
                tB = (0, l.createContext)({}),
                tE = ["editor", "children", "onChange", "value"],
                tm = e => {
                    var t, r, n, u, {
                            editor: a,
                            children: o,
                            onChange: i,
                            value: s
                        } = e,
                        d = g(e, tE),
                        D = (0, l.useRef)(!1),
                        [h, v] = c.useState(() => {
                            if (!f.Node.isNodeList(s)) throw Error("[Slate] value is invalid! Expected a list of elements but got: ".concat(f.Scrubber.stringify(s)));
                            if (!f.Editor.isEditor(a)) throw Error("[Slate] editor is invalid! You passed: ".concat(f.Scrubber.stringify(a)));
                            return a.children = s, Object.assign(a, d), {
                                v: 0,
                                editor: a
                            }
                        });
                    var {
                        selectorContext: p,
                        onChange: C
                    } = (t = a, r = (0, l.useRef)([]).current, n = (0, l.useRef)({
                        editor: t
                    }).current, u = (0, l.useCallback)(e => {
                        n.editor = e, r.forEach(t => t(e))
                    }, []), {
                        selectorContext: (0, l.useMemo)(() => ({
                            getSlate: () => n.editor,
                            addEventListener: e => (r.push(e), () => {
                                r.splice(r.indexOf(e), 1)
                            })
                        }), [r, n]),
                        onChange: u
                    }), B = (0, l.useCallback)(() => {
                        i && i(a.children), v(e => ({
                            v: e.v + 1,
                            editor: a
                        })), C(a)
                    }, [i]);
                    (0, l.useEffect)(() => (j.set(a, B), () => {
                        j.set(a, () => {}), D.current = !0
                    }), [B]);
                    var [E, m] = (0, l.useState)(em.isFocused(a));
                    return (0, l.useEffect)(() => {
                        m(em.isFocused(a))
                    }), ex(() => {
                        var e = () => m(em.isFocused(a));
                        return eo ? (document.addEventListener("focusin", e), document.addEventListener("focusout", e), () => {
                            document.removeEventListener("focusin", e), document.removeEventListener("focusout", e)
                        }) : (document.addEventListener("focus", e, !0), document.addEventListener("blur", e, !0), () => {
                            document.removeEventListener("focus", e, !0), document.removeEventListener("blur", e, !0)
                        })
                    }, []), c.createElement(tB.Provider, {
                        value: p
                    }, c.createElement(eU.Provider, {
                        value: h
                    }, c.createElement(eS.Provider, {
                        value: h.editor
                    }, c.createElement(tC.Provider, {
                        value: E
                    }, o))))
                },
                tA = (e, t) => {
                    var r = (t.top + t.bottom) / 2;
                    return e.top <= r && e.bottom >= r
                },
                tF = (e, t, r) => {
                    var n = em.toDOMRange(e, t).getBoundingClientRect(),
                        u = em.toDOMRange(e, r).getBoundingClientRect();
                    return tA(n, u) && tA(u, n)
                },
                tb = (e, t) => {
                    var r = f.Editor.range(e, f.Range.end(t)),
                        n = Array.from(f.Editor.positions(e, {
                            at: t
                        })),
                        u = 0,
                        a = n.length,
                        o = Math.floor(a / 2);
                    if (tF(e, f.Editor.range(e, n[u]), r)) return f.Editor.range(e, n[u], r);
                    if (n.length < 2) return f.Editor.range(e, n[n.length - 1], r);
                    for (; o !== n.length && o !== u;) tF(e, f.Editor.range(e, n[o]), r) ? a = o : u = o, o = Math.floor((u + a) / 2);
                    return f.Editor.range(e, n[a], r)
                };

            function ty(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function tw(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ty(Object(r), !0).forEach(function(t) {
                        C(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ty(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var tO = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x-slate-fragment",
                        {
                            apply: r,
                            onChange: n,
                            deleteBackward: u,
                            addMark: a,
                            removeMark: o
                        } = e;
                    return k.set(e, new WeakMap), e.addMark = (t, r) => {
                        var n, u;
                        null === (n = N.get(e)) || void 0 === n || n(), !M.get(e) && null !== (u = W.get(e)) && void 0 !== u && u.length && M.set(e, null), z.delete(e), a(t, r)
                    }, e.removeMark = t => {
                        var r;
                        !M.get(e) && null !== (r = W.get(e)) && void 0 !== r && r.length && M.set(e, null), z.delete(e), o(t)
                    }, e.deleteBackward = t => {
                        if ("line" !== t) return u(t);
                        if (e.selection && f.Range.isCollapsed(e.selection)) {
                            var r = f.Editor.above(e, {
                                match: t => f.Element.isElement(t) && f.Editor.isBlock(e, t),
                                at: e.selection
                            });
                            if (r) {
                                var [, n] = r, a = f.Editor.range(e, n, e.selection.anchor), o = tb(e, a);
                                !f.Range.isCollapsed(o) && f.Transforms.delete(e, {
                                    at: o
                                })
                            }
                        }
                    }, e.apply = t => {
                        var n, u = [],
                            a = W.get(e);
                        if (null != a && a.length) {
                            var o = a.map(e => (function(e, t) {
                                var {
                                    path: r,
                                    diff: n,
                                    id: u
                                } = e;
                                switch (t.type) {
                                    case "insert_text":
                                        if (!f.Path.equals(t.path, r) || t.offset >= n.end) return e;
                                        if (t.offset <= n.start) return {
                                            diff: {
                                                start: t.text.length + n.start,
                                                end: t.text.length + n.end,
                                                text: n.text
                                            },
                                            id: u,
                                            path: r
                                        };
                                        return {
                                            diff: {
                                                start: n.start,
                                                end: n.end + t.text.length,
                                                text: n.text
                                            }, id: u, path: r
                                        };
                                    case "remove_text":
                                        if (!f.Path.equals(t.path, r) || t.offset >= n.end) return e;
                                        if (t.offset + t.text.length <= n.start) return {
                                            diff: {
                                                start: n.start - t.text.length,
                                                end: n.end - t.text.length,
                                                text: n.text
                                            },
                                            id: u,
                                            path: r
                                        };
                                        return {
                                            diff: {
                                                start: n.start,
                                                end: n.end - t.text.length,
                                                text: n.text
                                            }, id: u, path: r
                                        };
                                    case "split_node":
                                        if (!f.Path.equals(t.path, r) || t.position >= n.end) return {
                                            diff: n,
                                            id: u,
                                            path: f.Path.transform(r, t, {
                                                affinity: "backward"
                                            })
                                        };
                                        if (t.position > n.start) return {
                                            diff: {
                                                start: n.start,
                                                end: Math.min(t.position, n.end),
                                                text: n.text
                                            },
                                            id: u,
                                            path: r
                                        };
                                        return {
                                            diff: {
                                                start: n.start - t.position,
                                                end: n.end - t.position,
                                                text: n.text
                                            }, id: u, path: f.Path.transform(r, t, {
                                                affinity: "forward"
                                            })
                                        };
                                    case "merge_node":
                                        if (!f.Path.equals(t.path, r)) return {
                                            diff: n,
                                            id: u,
                                            path: f.Path.transform(r, t)
                                        };
                                        return {
                                            diff: {
                                                start: n.start + t.position,
                                                end: n.end + t.position,
                                                text: n.text
                                            }, id: u, path: f.Path.transform(r, t)
                                        }
                                }
                                var a = f.Path.transform(r, t);
                                return a ? {
                                    diff: n,
                                    path: a,
                                    id: u
                                } : null
                            })(e, t)).filter(Boolean);
                            W.set(e, o)
                        }
                        var i = L.get(e);
                        i && L.set(e, e5(e, i, t));
                        var s = _.get(e);
                        if (null != s && s.at) {
                            var l = f.Point.isPoint(null == s ? void 0 : s.at) ? e9(e, s.at, t) : e5(e, s.at, t);
                            _.set(e, l ? tw(tw({}, s), {}, {
                                at: l
                            }) : null)
                        }
                        switch (t.type) {
                            case "insert_text":
                            case "remove_text":
                            case "set_node":
                            case "split_node":
                                u.push(...tx(e, t.path));
                                break;
                            case "set_selection":
                                null === (n = T.get(e)) || void 0 === n || n.unref(), T.delete(e);
                                break;
                            case "insert_node":
                            case "remove_node":
                                u.push(...tx(e, f.Path.parent(t.path)));
                                break;
                            case "merge_node":
                                u.push(...tx(e, f.Path.previous(t.path)));
                                break;
                            case "move_node":
                                u.push(...tx(e, f.Path.common(f.Path.parent(t.path), f.Path.parent(t.newPath))))
                        }
                        for (var [c, d] of(r(t), u)) {
                            var [D] = f.Editor.node(e, c);
                            x.set(D, d)
                        }
                    }, e.setFragmentData = r => {
                        var {
                            selection: n
                        } = e;
                        if (!!n) {
                            var [u, a] = f.Range.edges(n), o = f.Editor.void(e, {
                                at: u.path
                            }), i = f.Editor.void(e, {
                                at: a.path
                            });
                            if (!f.Range.isCollapsed(n) || o) {
                                var s = em.toDOMRange(e, n),
                                    l = s.cloneContents(),
                                    c = l.childNodes[0];
                                if (l.childNodes.forEach(e => {
                                        e.textContent && "" !== e.textContent.trim() && (c = e)
                                    }), i) {
                                    var [d] = i, D = s.cloneRange(), h = em.toDOMNode(e, d);
                                    D.setEndAfter(h), l = D.cloneContents()
                                }
                                if (o && (c = l.querySelector("[data-slate-spacer]")), Array.from(l.querySelectorAll("[data-slate-zero-width]")).forEach(e => {
                                        var t = "n" === e.getAttribute("data-slate-zero-width");
                                        e.textContent = t ? "\n" : ""
                                    }), Y(c)) {
                                    var v = c.ownerDocument.createElement("span");
                                    v.style.whiteSpace = "pre", v.appendChild(c), l.appendChild(v), c = v
                                }
                                var p = JSON.stringify(e.getFragment()),
                                    C = window.btoa(encodeURIComponent(p));
                                c.setAttribute("data-slate-fragment", C), r.setData("application/".concat(t), C);
                                var g = l.ownerDocument.createElement("div");
                                return g.appendChild(l), g.setAttribute("hidden", "true"), l.ownerDocument.body.appendChild(g), r.setData("text/html", g.innerHTML), r.setData("text/plain", er(g)), l.ownerDocument.body.removeChild(g), r
                            }
                        }
                    }, e.insertData = t => {
                        !e.insertFragmentData(t) && e.insertTextData(t)
                    }, e.insertFragmentData = r => {
                        var n = r.getData("application/".concat(t)) || eu(r);
                        if (n) {
                            var u = JSON.parse(decodeURIComponent(window.atob(n)));
                            return e.insertFragment(u), !0
                        }
                        return !1
                    }, e.insertTextData = t => {
                        var r = t.getData("text/plain");
                        if (r) {
                            var n = r.split(/\r\n|\r|\n/),
                                u = !1;
                            for (var a of n) u && f.Transforms.splitNodes(e, {
                                always: !0
                            }), e.insertText(a), u = !0;
                            return !0
                        }
                        return !1
                    }, e.onChange = t => {
                        p.unstable_batchedUpdates(() => {
                            var r = j.get(e);
                            r && r(), n(t)
                        })
                    }, e
                },
                tx = (e, t) => {
                    var r = [];
                    for (var [n, u] of f.Editor.levels(e, {
                            at: t
                        })) {
                        var a = em.findKey(e, n);
                        r.push([u, a])
                    }
                    return r
                }