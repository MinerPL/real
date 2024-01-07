            "use strict";
            r("424973");
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
            var o = r("969872"),
                a = r("742609"),
                u = r("884691"),
                s = r("348262"),
                c = r("699107"),
                l = r("893147"),
                f = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this
                    }
                    r = e, n = t, r.prototype = Object.create(n.prototype), r.prototype.constructor = r, r.__proto__ = n;
                    var r, n, f = e.prototype;
                    return f.shouldComponentUpdate = function(t) {
                        var e = this.props.editorState,
                            r = t.editorState;
                        if (e.getDirectionMap() !== r.getDirectionMap() || e.getSelection().getHasFocus() !== r.getSelection().getHasFocus()) return !0;
                        var n = r.getNativelyRenderedContent(),
                            i = e.isInCompositionMode(),
                            o = r.isInCompositionMode();
                        if (e === r || null !== n && r.getCurrentContent() === n || i && o) return !1;
                        var a = e.getCurrentContent(),
                            u = r.getCurrentContent(),
                            s = e.getDecorator(),
                            c = r.getDecorator();
                        return i !== o || a !== u || s !== c || r.mustForceSelection()
                    }, f.render = function() {
                        for (var t = this.props, e = t.blockRenderMap, r = t.blockRendererFn, n = t.blockStyleFn, f = t.customStyleMap, p = t.customStyleFn, h = t.editorState, d = t.editorKey, g = t.preventScroll, y = t.textDirectionality, v = h.getCurrentContent(), m = h.getSelection(), _ = h.mustForceSelection(), b = h.getDecorator(), S = l(h.getDirectionMap()), w = v.getBlocksAsArray(), k = [], x = null, C = null, E = 0; E < w.length; E++) {
                            var O = w[E],
                                D = O.getKey(),
                                K = O.getType(),
                                T = r(O),
                                M = void 0,
                                A = void 0,
                                I = void 0;
                            T && (M = T.component, A = T.props, I = T.editable);
                            var B = y || S.get(D),
                                L = a.encode(D, 0, 0),
                                R = {
                                    contentState: v,
                                    block: O,
                                    blockProps: A,
                                    blockStyleFn: n,
                                    customStyleMap: f,
                                    customStyleFn: p,
                                    decorator: b,
                                    direction: B,
                                    forceSelection: _,
                                    offsetKey: L,
                                    preventScroll: g,
                                    selection: m,
                                    tree: h.getBlockTree(D)
                                },
                                N = e.get(K) || e.get("unstyled"),
                                F = N.wrapper,
                                Element = N.element || e.get("unstyled").element,
                                z = O.getDepth(),
                                P = "";
                            if (n && (P = n(O)), "li" === Element) {
                                var j, U, q, H = C !== F || null === x || z > x;
                                P = c(P, s({
                                    "public/DraftStyleDefault/unorderedListItem": "unordered-list-item" === (j = K),
                                    "public/DraftStyleDefault/orderedListItem": "ordered-list-item" === j,
                                    "public/DraftStyleDefault/reset": H,
                                    "public/DraftStyleDefault/depth0": 0 === (U = z),
                                    "public/DraftStyleDefault/depth1": 1 === U,
                                    "public/DraftStyleDefault/depth2": 2 === U,
                                    "public/DraftStyleDefault/depth3": 3 === U,
                                    "public/DraftStyleDefault/depth4": U >= 4,
                                    "public/DraftStyleDefault/listLTR": "LTR" === (q = B),
                                    "public/DraftStyleDefault/listRTL": "RTL" === q
                                }))
                            }
                            var W = M || o,
                                V = {
                                    className: P,
                                    "data-block": !0,
                                    "data-editor": d,
                                    "data-offset-key": L,
                                    key: D
                                };
                            void 0 !== I && (V = function(t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var r = null != arguments[e] ? arguments[e] : {},
                                        n = Object.keys(r);
                                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
                                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                                    }))), n.forEach(function(e) {
                                        (function(t, e, r) {
                                            e in t ? Object.defineProperty(t, e, {
                                                value: r,
                                                enumerable: !0,
                                                configurable: !0,
                                                writable: !0
                                            }) : t[e] = r
                                        })(t, e, r[e])
                                    })
                                }
                                return t
                            }({}, V, {
                                contentEditable: I,
                                suppressContentEditableWarning: !0
                            }));
                            var G = u.createElement(Element, V, u.createElement(W, i({}, R, {
                                key: D
                            })));
                            k.push({
                                block: G,
                                wrapperTemplate: F,
                                key: D,
                                offsetKey: L
                            }), x = F ? O.getDepth() : null, C = F
                        }
                        for (var J = [], X = 0; X < k.length;) {
                            var Y = k[X];
                            if (Y.wrapperTemplate) {
                                var Z = [];
                                do Z.push(k[X].block), X++; while (X < k.length && k[X].wrapperTemplate === Y.wrapperTemplate);
                                var $ = u.cloneElement(Y.wrapperTemplate, {
                                    key: Y.key + "-wrap",
                                    "data-offset-key": Y.offsetKey
                                }, Z);
                                J.push($)
                            } else J.push(Y.block), X++
                        }
                        return u.createElement("div", {
                            "data-contents": "true"
                        }, J)
                    }, e
                }(u.Component);
            t.exports = f