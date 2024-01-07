            "use strict";
            n.r(s), n.d(s, {
                DIVERSITY_SURROGATES: function() {
                    return l
                },
                default: function() {
                    return I
                }
            }), n("70102"), n("222007"), n("781738"), n("424973");
            var i = n("917351"),
                r = n.n(i),
                o = n("895547"),
                t = n("402671"),
                a = n("858619");
            let f = null,
                _ = {},
                d = {},
                u = {},
                g = {},
                m = [],
                v = 0,
                c = 0,
                h = {
                    "1f3fb": 0,
                    "1f3fc": 1,
                    "1f3fd": 2,
                    "1f3fe": 3,
                    "1f3ff": 4
                },
                l = ["\uD83C\uDFFB", "\uD83C\uDFFC", "\uD83C\uDFFD", "\uD83C\uDFFE", "\uD83C\uDFFF"],
                y = /^:([^\s:]+?(?:::skin-tone-\d)?):/,
                V = n("620501"),
                k = /[\u200d\ud800-\udfff\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff\ufe0e\ufe0f\u270b\u2b50\u2728\u26a1\u26c5\u26c4\u2614\u2615\u26bd\u26be\u26f3\u26f5\u2693\u26fd\u26f2\u26fa\u26ea\u231a\u23f0\u231b\u23f3\u26ce\u2648\u2649\u264a\u264b\u264c\u264d\u264e\u264f\u2650\u2651\u2652\u2653\u270a\u274c\u2b55\u26d4\u2757\u2755\u2753\u2754\u2705\u274e\u267f\u23e9\u23ea\u23eb\u23ec\u2795\u2796\u2797\u27b0\u27bf\u26aa\u26ab\u25fe\u25fd\u2b1b\u2b1c\u26a7]/,
                b = /\ud83c[\udffb-\udfff](?=\ud83c[\udffb-\udfff])|(?:[^\ud800-\udfff][\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]?|[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g;
            for (let e = 0; e < l.length; e++) {
                let s = l[e];
                u["skin-tone-".concat(e + 1)] = s, g[s] = "skin-tone-".concat(e + 1)
            }
            class w {
                get names() {
                    return this.emojiObject.names
                }
                get allNamesString() {
                    return this.names.length > 1 ? ":".concat(this.names.join(": :"), ":") : ":".concat(this.uniqueName, ":")
                }
                get unicodeVersion() {
                    var e;
                    return null !== (e = this.emojiObject.unicodeVersion) && void 0 !== e ? e : 0
                }
                get hasDiversity() {
                    return this.emojiObject.hasDiversity
                }
                get hasMultiDiversity() {
                    return this.emojiObject.hasMultiDiversity
                }
                get hasDiversityParent() {
                    return this.emojiObject.hasDiversityParent
                }
                get hasMultiDiversityParent() {
                    return this.emojiObject.hasMultiDiversityParent
                }
                get managed() {
                    return !0
                }
                get animated() {
                    return !1
                }
                get defaultDiversityChild() {
                    if (this.hasDiversity && null != f) {
                        let e = function(e) {
                            let s = o.default.convert.toCodePoint(e);
                            return null != s ? s : ""
                        }(f);
                        return this.diversityChildren[e]
                    }
                    return null
                }
                get url() {
                    let e = this.defaultDiversityChild;
                    return null != e ? t.default.getURL(e.surrogates) : t.default.getURL(this.surrogates)
                }
                get name() {
                    return this.hasDiversity && null != f ? "".concat(this.uniqueName, "::").concat(g[f]) : this.uniqueName
                }
                get optionallyDiverseSequence() {
                    let e = this.defaultDiversityChild;
                    return null != e ? e.surrogates : this.surrogates
                }
                forEachDiversity(e) {
                    null != this.diversityChildren && r.each(this.diversityChildren, e)
                }
                forEachName(e) {
                    r.each(this.names, e)
                }
                setSpriteSheetIndex(e) {
                    this.index = e, this.useSpriteSheet = !0
                }
                constructor(e) {
                    if (this.emojiObject = e, this.type = a.EmojiTypes.UNICODE, this.uniqueName = e.names[0], this.surrogates = e.surrogates, this.diversityChildren = {}, null != e.diversityChildren) {
                        for (let s of e.diversityChildren)
                            if (null != s.diversity) {
                                let e = s.diversity.join("-");
                                this.diversityChildren[e] = new w(s)
                            }
                    }
                }
            }
            let p = n("838426");
            for (let e in p) {
                let s = p[e],
                    n = s.map(e => {
                        let s = new w(e),
                            n = s.surrogates,
                            i = s.uniqueName;
                        if (s.setSpriteSheetIndex(s.hasDiversity ? v++ : c++), g[n] = i, 0 > n.indexOf("‍")) {
                            let e = n.replace("️", "");
                            e !== n && (g[e] = i)
                        }
                        for (let e of s.names) d[e] = s, u[e] = n;
                        let r = s.diversityChildren;
                        for (let s in r) {
                            let n = r[s],
                                i = n.surrogates;
                            for (let e of n.names) d[e] = n, u[e] = i;
                            if (!e.hasMultiDiversity) {
                                let s = n.emojiObject.diversity[0],
                                    r = h[s];
                                for (let s of e.names) {
                                    let e = "".concat(s, "::skin-tone-").concat(r + 1);
                                    u[e] = i, d[e] = n
                                }
                            }
                            g[i] = n.uniqueName
                        }
                        return m.push(s), s
                    });
                _[e] = t.default.filterUnsupportedEmojis(n)
            }

            function D(e) {
                let s = g[e];
                return null != s ? {
                    type: "emoji",
                    surrogate: e,
                    emojiName: ":".concat(s, ":")
                } : {
                    type: "text",
                    text: e
                }
            }
            let P = String.fromCodePoint(917631),
                C = String.fromCodePoint(127988),
                E = /^[\u{E0061}-\u{E007A}]$/u;

            function M(e, s) {
                var n;
                if (!0 !== s && !k.test(e)) return [{
                    type: "text",
                    text: e
                }];
                let i = "",
                    r = [],
                    o = null !== (n = e.match(b)) && void 0 !== n ? n : [];
                for (let e = 0; e < o.length; e++) {
                    let s = o[e];
                    if (null != i && "" !== i) {
                        if (s === P) s = i + s, i = "";
                        else if (E.test(s)) {
                            i += s;
                            continue
                        } else r.push(D(i)), i = ""
                    } else if (s === C) {
                        i = s;
                        continue
                    }
                    let n = D(s);
                    if (r.length > 0) {
                        let e = r[r.length - 1];
                        if ("text" === n.type && "text" === e.type) {
                            e.text += n.text;
                            continue
                        }
                    }
                    r.push(n)
                }
                return null != i && "" !== i && r.push(D(i)), r
            }

            function j(e) {
                let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                return Object.prototype.hasOwnProperty.call(u, e) ? u[e] : s
            }
            var I = {
                getDefaultDiversitySurrogate: function() {
                    return f
                },
                setDefaultDiversitySurrogate: function(e) {
                    f = null != e && "" !== e ? e : null
                },
                getCategories: function() {
                    return Object.keys(_)
                },
                getByName: function(e) {
                    return Object.prototype.hasOwnProperty.call(d, e) ? d[e] : null
                },
                getByCategory: function(e) {
                    return _[e]
                },
                translateInlineEmojiToSurrogates: function(e) {
                    return e.replace(y, (e, s) => j(s, e))
                },
                maybeTranslateSurrogatesToInlineEmoji: function(e) {
                    if (!k.test(e)) return null;
                    let s = M(e, !0).map(e => "text" === e.type ? e.text : e.emojiName).join("");
                    return s === e ? null : s
                },
                findInlineEmojisFromSurrogates: M,
                translateSurrogatesToInlineEmoji: function(e) {
                    return M(e).map(e => "text" === e.type ? e.text : e.emojiName).join("")
                },
                convertNameToSurrogate: j,
                convertSurrogateToName: function(e) {
                    let s = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                        i = n;
                    return Object.prototype.hasOwnProperty.call(g, e) && (i = g[e]), s ? ":".concat(i, ":") : i
                },
                convertShortcutToName: function(e) {
                    let s = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                        i = n;
                    return Object.prototype.hasOwnProperty.call(V, e) && (i = V[e]), s ? ":".concat(i, ":") : i
                },
                forEach: e => r.each(m, e),
                all: () => m,
                numDiversitySprites: v,
                numNonDiversitySprites: c,
                EMOJI_NAME_RE: /^:([^\s:]+?(?:::skin-tone-\d)?):/,
                EMOJI_NAME_AND_DIVERSITY_RE: y,
                EMOJI_SHORTCUT_RE: /^(>:\(|>:\-\(|>=\(|>=\-\(|:"\)|:\-"\)|="\)|=\-"\)|<\/3|<\\3|:\-\\|:\-\/|=\-\\|=\-\/|:'\(|:'\-\(|:,\(|:,\-\(|='\(|='\-\(|=,\(|=,\-\(|:\(|:\-\(|=\(|=\-\(|<3|♡|\]:\(|\]:\-\(|\]=\(|\]=\-\(|o:\)|O:\)|o:\-\)|O:\-\)|0:\)|0:\-\)|o=\)|O=\)|o=\-\)|O=\-\)|0=\)|0=\-\)|:'D|:'\-D|:,D|:,\-D|='D|='\-D|=,D|=,\-D|:\*|:\-\*|=\*|=\-\*|x\-\)|X\-\)|:\||:\-\||=\||=\-\||:o|:\-o|:O|:\-O|=o|=\-o|=O|=\-O|:@|:\-@|=@|=\-@|:D|:\-D|=D|=\-D|:'\)|:'\-\)|:,\)|:,\-\)|='\)|='\-\)|=,\)|=,\-\)|:\)|:\-\)|=\)|=\-\)|\]:\)|\]:\-\)|\]=\)|\]=\-\)|:,'\(|:,'\-\(|;\(|;\-\(|=,'\(|=,'\-\(|:P|:\-P|=P|=\-P|8\-\)|B\-\)|,:\(|,:\-\(|,=\(|,=\-\(|,:\)|,:\-\)|,=\)|,=\-\)|:s|:\-S|:z|:\-Z|:\$|:\-\$|=s|=\-S|=z|=\-Z|=\$|=\-\$|;\)|;\-\))/,
                hasSurrogates: function(e) {
                    return r.toArray(e).some(e => null != g[e])
                }
            }