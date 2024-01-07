            "use strict";

            function n(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                    }))), n.forEach(function(e) {
                        i(t, e, r[e])
                    })
                }
                return t
            }

            function i(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            r("222007"), r("424973"), r("781738"), r("881410");
            var o, a = r("706621"),
                u = r("117811"),
                s = r("768232"),
                c = r("985804"),
                l = r("188552"),
                f = r("272047"),
                p = r("348262"),
                h = r("568355"),
                d = r("531018"),
                g = r("707736"),
                y = r("646601"),
                v = y.List,
                Map = y.Map,
                m = y.OrderedSet,
                _ = r("70767"),
                b = r("678741"),
                S = r("41112"),
                w = r("918562"),
                k = g("draft_tree_data_support"),
                x = RegExp("\r", "g"),
                C = RegExp("\n", "g"),
                E = RegExp("^\n", "g"),
                O = RegExp("&nbsp;", "g"),
                D = RegExp("&#13;?", "g"),
                K = RegExp("&#8203;?", "g"),
                T = ["bold", "bolder", "500", "600", "700", "800", "900"],
                M = ["light", "lighter", "normal", "100", "200", "300", "400"],
                A = ["className", "href", "rel", "target", "title"],
                I = ["alt", "className", "height", "src", "width"],
                B = (i(o = {}, p("public/DraftStyleDefault/depth0"), 0), i(o, p("public/DraftStyleDefault/depth1"), 1), i(o, p("public/DraftStyleDefault/depth2"), 2), i(o, p("public/DraftStyleDefault/depth3"), 3), i(o, p("public/DraftStyleDefault/depth4"), 4), o),
                L = Map({
                    b: "BOLD",
                    code: "CODE",
                    del: "STRIKETHROUGH",
                    em: "ITALIC",
                    i: "ITALIC",
                    s: "STRIKETHROUGH",
                    strike: "STRIKETHROUGH",
                    strong: "BOLD",
                    u: "UNDERLINE",
                    mark: "HIGHLIGHT"
                }),
                R = function(t) {
                    var e = {};
                    return t.mapKeys(function(t, r) {
                        var n = [r.element];
                        void 0 !== r.aliasedElements && n.push.apply(n, r.aliasedElements), n.forEach(function(r) {
                            void 0 === e[r] ? e[r] = t : "string" == typeof e[r] ? e[r] = [e[r], t] : e[r].push(t)
                        })
                    }), Map(e)
                },
                N = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return Object.keys(B).some(function(r) {
                        t.classList.contains(r) && (e = B[r])
                    }), e
                },
                F = function(t, e) {
                    if (!S(t)) return e;
                    var r = t.style.fontWeight,
                        n = t.style.fontStyle,
                        i = t.style.textDecoration;
                    return e.withMutations(function(t) {
                        T.indexOf(r) >= 0 ? t.add("BOLD") : M.indexOf(r) >= 0 && t.remove("BOLD"), "italic" === n ? t.add("ITALIC") : "normal" === n && t.remove("ITALIC"), "underline" === i && t.add("UNDERLINE"), "line-through" === i && t.add("STRIKETHROUGH"), "none" === i && (t.remove("UNDERLINE"), t.remove("STRIKETHROUGH"))
                    })
                },
                z = function(t) {
                    return "ul" === t || "ol" === t
                },
                P = function() {
                    function t(t, e) {
                        i(this, "characterList", v()), i(this, "currentBlockType", "unstyled"), i(this, "currentDepth", 0), i(this, "currentEntity", null), i(this, "currentText", ""), i(this, "wrapper", null), i(this, "blockConfigs", []), i(this, "contentBlocks", []), i(this, "entityMap", l), i(this, "blockTypeMap", void 0), i(this, "disambiguate", void 0), this.clear(), this.blockTypeMap = t, this.disambiguate = e
                    }
                    var e = t.prototype;
                    return e.clear = function() {
                        this.characterList = v(), this.blockConfigs = [], this.currentBlockType = "unstyled", this.currentDepth = 0, this.currentEntity = null, this.currentText = "", this.entityMap = l, this.wrapper = null, this.contentBlocks = []
                    }, e.addDOMNode = function(t) {
                        var e;
                        return this.contentBlocks = [], this.currentDepth = 0, (e = this.blockConfigs).push.apply(e, this._toBlockConfigs([t], m())), this._trimCurrentText(), "" !== this.currentText && this.blockConfigs.push(this._makeBlockConfig()), this
                    }, e.getContentBlocks = function() {
                        return 0 === this.contentBlocks.length && (k ? this._toContentBlocks(this.blockConfigs) : this._toFlatContentBlocks(this.blockConfigs)), {
                            contentBlocks: this.contentBlocks,
                            entityMap: this.entityMap
                        }
                    }, e._makeBlockConfig = function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            e = n({
                                key: t.key || h(),
                                type: this.currentBlockType,
                                text: this.currentText,
                                characterList: this.characterList,
                                depth: this.currentDepth,
                                parent: null,
                                children: v(),
                                prevSibling: null,
                                nextSibling: null,
                                childConfigs: []
                            }, t);
                        return this.characterList = v(), this.currentBlockType = "unstyled", this.currentText = "", e
                    }, e._toBlockConfigs = function(t, e) {
                        for (var r = [], n = 0; n < t.length; n++) {
                            var i, o, a = t[n],
                                u = a.nodeName.toLowerCase();
                            if ("body" === u || z(u)) {
                                this._trimCurrentText(), "" !== this.currentText && r.push(this._makeBlockConfig());
                                var s = this.currentDepth,
                                    c = this.wrapper;
                                z(u) && (this.wrapper = u, z(c) && this.currentDepth++), r.push.apply(r, this._toBlockConfigs(Array.from(a.childNodes), e)), this.currentDepth = s, this.wrapper = c;
                                continue
                            }
                            var l = this.blockTypeMap.get(u);
                            if (void 0 !== l) {
                                this._trimCurrentText(), "" !== this.currentText && r.push(this._makeBlockConfig());
                                var f = this.currentDepth,
                                    p = this.wrapper;
                                this.wrapper = "pre" === u ? "pre" : this.wrapper, "string" != typeof l && (l = this.disambiguate(u, this.wrapper) || l[0] || "unstyled"), !k && S(a) && ("unordered-list-item" === l || "ordered-list-item" === l) && (this.currentDepth = N(a, this.currentDepth));
                                var d = h(),
                                    g = this._toBlockConfigs(Array.from(a.childNodes), e);
                                this._trimCurrentText(), r.push(this._makeBlockConfig({
                                    key: d,
                                    childConfigs: g,
                                    type: l
                                })), this.currentDepth = f, this.wrapper = p;
                                continue
                            }
                            if ("#text" === u) {
                                this._addTextNode(a, e);
                                continue
                            }
                            if ("br" === u) {
                                this._addBreakNode(a, e);
                                continue
                            }
                            if (w(i = a) && i.attributes.getNamedItem("src") && i.attributes.getNamedItem("src").value) {
                                this._addImgNode(a, e);
                                continue
                            }
                            if (_(o = a) && o.href && ("http:" === o.protocol || "https:" === o.protocol || "mailto:" === o.protocol)) {
                                this._addAnchorNode(a, r, e);
                                continue
                            }
                            var y = e;
                            L.has(u) && (y = y.add(L.get(u))), y = F(a, y), r.push.apply(r, this._toBlockConfigs(Array.from(a.childNodes), y))
                        }
                        return r
                    }, e._appendText = function(t, e) {
                        this.currentText += t;
                        var r, n = a.create({
                            style: e,
                            entity: this.currentEntity
                        });
                        this.characterList = (r = this.characterList).push.apply(r, Array(t.length).fill(n))
                    }, e._trimCurrentText = function() {
                        var t = this.currentText.length,
                            e = t - this.currentText.trimLeft().length,
                            r = this.currentText.trimRight().length,
                            n = this.characterList.findEntry(function(t) {
                                return null !== t.getEntity()
                            });
                        e = void 0 !== n ? Math.min(e, n[0]) : e, e > (r = void 0 !== (n = this.characterList.reverse().findEntry(function(t) {
                            return null !== t.getEntity()
                        })) ? Math.max(r, t - n[0]) : r) ? (this.currentText = "", this.characterList = v()) : (this.currentText = this.currentText.slice(e, r), this.characterList = this.characterList.slice(e, r))
                    }, e._addTextNode = function(t, e) {
                        var r = t.textContent;
                        "" === r.trim() && "pre" !== this.wrapper && (r = " "), "pre" !== this.wrapper && (r = (r = r.replace(E, "")).replace(C, " ")), this._appendText(r, e)
                    }, e._addBreakNode = function(t, e) {
                        b(t) && this._appendText("\n", e)
                    }, e._addImgNode = function(t, e) {
                        if (w(t)) {
                            var r = {};
                            I.forEach(function(e) {
                                var n = t.getAttribute(e);
                                n && (r[e] = n)
                            }), this.currentEntity = this.entityMap.__create("IMAGE", "IMMUTABLE", r), g("draftjs_fix_paste_for_img") ? "presentation" !== t.getAttribute("role") && this._appendText("\uD83D\uDCF7", e) : this._appendText("\uD83D\uDCF7", e), this.currentEntity = null
                        }
                    }, e._addAnchorNode = function(t, e, r) {
                        if (_(t)) {
                            var n = {};
                            A.forEach(function(e) {
                                var r = t.getAttribute(e);
                                r && (n[e] = r)
                            }), n.url = new f(t.href).toString(), this.currentEntity = this.entityMap.__create("LINK", "MUTABLE", n || {}), e.push.apply(e, this._toBlockConfigs(Array.from(t.childNodes), r)), this.currentEntity = null
                        }
                    }, e._toContentBlocks = function(t) {
                        for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, r = t.length - 1, i = 0; i <= r; i++) {
                            var o = t[i];
                            o.parent = e, o.prevSibling = i > 0 ? t[i - 1].key : null, o.nextSibling = i < r ? t[i + 1].key : null, o.children = v(o.childConfigs.map(function(t) {
                                return t.key
                            })), this.contentBlocks.push(new s(n({}, o))), this._toContentBlocks(o.childConfigs, o.key)
                        }
                    }, e._hoistContainersInBlockConfigs = function(t) {
                        var e = this;
                        return v(t).flatMap(function(t) {
                            return "unstyled" !== t.type || "" !== t.text ? [t] : e._hoistContainersInBlockConfigs(t.childConfigs)
                        })
                    }, e._toFlatContentBlocks = function(t) {
                        var e = this;
                        this._hoistContainersInBlockConfigs(t).forEach(function(t) {
                            var r = e._extractTextFromBlockConfigs(t.childConfigs),
                                i = r.text,
                                o = r.characterList;
                            e.contentBlocks.push(new u(n({}, t, {
                                text: t.text + i,
                                characterList: t.characterList.concat(o)
                            })))
                        })
                    }, e._extractTextFromBlockConfigs = function(t) {
                        for (var e = t.length - 1, r = "", n = v(), i = 0; i <= e; i++) {
                            var o = t[i];
                            r += o.text, n = n.concat(o.characterList), "" !== r && "unstyled" !== o.type && (r += "\n", n = n.push(n.last()));
                            var a = this._extractTextFromBlockConfigs(o.childConfigs);
                            r += a.text, n = n.concat(a.characterList)
                        }
                        return {
                            text: r,
                            characterList: n
                        }
                    }, t
                }();
            t.exports = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c,
                    n = e(t = t.trim().replace(x, "").replace(O, " ").replace(D, "").replace(K, ""));
                if (!n) return null;
                var i = R(r);
                return new P(i, function(t, e) {
                    return "li" === t ? "ol" === e ? "ordered-list-item" : "unordered-list-item" : null
                }).addDOMNode(n).getContentBlocks()
            }