            "use strict";
            r("854508"), r("70102"), r("222007"), r("424973"), r("808653");
            var n = r("766811");

            function i() {
                return (i = n || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function o(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                    }))), n.forEach(function(e) {
                        a(t, e, r[e])
                    })
                }
                return t
            }

            function a(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var u = r("638635"),
                s = r("742609"),
                c = r("884691"),
                l = r("929312"),
                f = r("628366"),
                p = r("496030"),
                h = r("265943"),
                d = r("160840"),
                g = r("646601"),
                y = r("808598"),
                v = r("41112");
            g.List;
            var m = function(t, e) {
                    return t.getAnchorKey() === e || t.getFocusKey() === e
                },
                _ = function(t, e) {
                    var r = t.getNextSiblingKey();
                    return !!r && e.getBlockForKey(r).getType() === t.getType()
                },
                b = function(t, Element, e) {
                    var r = [],
                        n = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, u = e.reverse()[Symbol.iterator](); !(n = (a = u.next()).done); n = !0) {
                            var l = a.value;
                            if (l.type !== Element) break;
                            r.push(l)
                        }
                    } catch (t) {
                        i = !0, o = t
                    } finally {
                        try {
                            !n && null != u.return && u.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    e.splice(e.indexOf(r[0]), r.length + 1);
                    var f = r.reverse(),
                        p = f[0].key;
                    return e.push(c.cloneElement(t, {
                        key: "".concat(p, "-wrap"),
                        "data-offset-key": s.encode(p, 0, 0)
                    }, f)), e
                },
                S = function(t, e) {
                    var r = e.get(t.getType()) || e.get("unstyled"),
                        n = r.wrapper;
                    return {
                        Element: r.element || e.get("unstyled").element,
                        wrapperTemplate: n
                    }
                },
                w = function(t, e) {
                    var r = e(t);
                    return r ? {
                        CustomComponent: r.component,
                        customProps: r.props,
                        customEditable: r.editable
                    } : {}
                },
                k = function(t, e, r, n, i, a) {
                    var u = {
                            "data-block": !0,
                            "data-editor": e,
                            "data-offset-key": r,
                            key: t.getKey(),
                            ref: a
                        },
                        s = n(t);
                    return s && (u.className = s), void 0 !== i.customEditable && (u = o({}, u, {
                        contentEditable: i.customEditable,
                        suppressContentEditableWarning: !0
                    })), u
                },
                x = function(t) {
                    function e() {
                        for (var e, r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                        return a(function(t) {
                            if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(e = t.call.apply(t, [this].concat(n)) || this), "wrapperRef", c.createRef()), e
                    }
                    r = e, n = t, r.prototype = Object.create(n.prototype), r.prototype.constructor = r, r.__proto__ = n;
                    var r, n, g = e.prototype;
                    return g.shouldComponentUpdate = function(t) {
                        var e = this.props,
                            r = e.block,
                            n = e.direction,
                            i = e.tree,
                            o = !r.getChildKeys().isEmpty(),
                            a = r !== t.block || i !== t.tree || n !== t.direction || m(t.selection, t.block.getKey()) && t.forceSelection;
                        return o || a
                    }, g.componentDidMount = function() {
                        var t, e = this.props.selection,
                            r = e.getEndKey();
                        if (!!e.getHasFocus() && r === this.props.block.getKey()) {
                            var n = this.wrapperRef.current;
                            if (n) {
                                var i = f.getScrollParent(n),
                                    o = h(i);
                                if (i === window) {
                                    var a = p(n),
                                        u = a.y + a.height;
                                    (t = u - d().height) > 0 && window.scrollTo(o.x, o.y + t + 10)
                                } else {
                                    v(n) || y(!1);
                                    var s = n.offsetHeight + n.offsetTop;
                                    (t = s - (i.offsetHeight + o.y)) > 0 && l.setTop(i, l.getTop(i) + t + 10)
                                }
                            }
                        }
                    }, g.render = function() {
                        var t = this,
                            r = this.props,
                            n = r.block,
                            a = r.blockRenderMap,
                            l = r.blockRendererFn,
                            f = r.blockStyleFn,
                            p = r.contentState,
                            h = r.decorator,
                            d = r.editorKey,
                            g = r.editorState,
                            y = r.customStyleFn,
                            v = r.customStyleMap,
                            x = r.direction,
                            C = r.forceSelection,
                            E = r.selection,
                            O = r.tree,
                            D = null;
                        n.children.size && (D = n.children.reduce(function(r, n) {
                            var i = s.encode(n, 0, 0),
                                u = p.getBlockForKey(n),
                                h = w(u, l),
                                y = h.CustomComponent || e,
                                v = S(u, a),
                                Element = v.Element,
                                m = v.wrapperTemplate,
                                x = k(u, d, i, f, h, null),
                                C = o({}, t.props, {
                                    tree: g.getBlockTree(n),
                                    blockProps: h.customProps,
                                    offsetKey: i,
                                    block: u
                                });
                            return (r.push(c.createElement(Element, x, c.createElement(y, C))), !m || _(u, p)) ? r : (b(m, Element, r), r)
                        }, []));
                        var K = n.getKey(),
                            T = s.encode(K, 0, 0),
                            M = w(n, l),
                            A = M.CustomComponent,
                            I = null != A ? c.createElement(A, i({}, this.props, {
                                tree: g.getBlockTree(K),
                                blockProps: M.customProps,
                                offsetKey: T,
                                block: n
                            })) : c.createElement(u, {
                                block: n,
                                children: D,
                                contentState: p,
                                customStyleFn: y,
                                customStyleMap: v,
                                decorator: h,
                                direction: x,
                                forceSelection: C,
                                hasSelection: m(E, K),
                                selection: E,
                                tree: O
                            });
                        if (n.getParentKey()) return I;
                        var Element = S(n, a).Element,
                            B = k(n, d, T, f, M, this.wrapperRef);
                        return c.createElement(Element, B, I)
                    }, e
                }(c.Component);
            t.exports = x