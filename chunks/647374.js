            "use strict";
            n.r(t), n.d(t, {
                punycodeLink: function() {
                    return g
                },
                default: function() {
                    return A
                }
            }), n("222007"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("70102");
            var i = n("917351"),
                a = n.n(i),
                l = n("693566"),
                s = n.n(l);
            n("125601");
            var r = n("463928"),
                u = n.n(r),
                o = n("312016"),
                d = n("449008"),
                c = n("891137"),
                _ = n("76216");
            let E = new s({
                max: 50
            });

            function f(e) {
                let t = E.get(e);
                if (null != t) return t;
                let n = (0, _.sanitizeWhitespace)(e),
                    i = (0, _.sanitizeUnicodeConfusables)(n),
                    a = {
                        whitespaceSanitized: n,
                        fullySanitized: i
                    };
                return E.set(e, a), a
            }
            let h = ["http:", "https:", "discord:"],
                p = [c.AST_KEY.TEXT, c.AST_KEY.UNDERLINE, c.AST_KEY.STRONG, c.AST_KEY.ITALICS, c.AST_KEY.STRIKETHROUGH, c.AST_KEY.INLINE_CODE, c.AST_KEY.SPOILER, c.AST_KEY.LINE_BREAK, c.AST_KEY.TIMESTAMP],
                T = [...p, c.AST_KEY.EMOJI, c.AST_KEY.CUSTOM_EMOJI],
                C = [c.AST_KEY.LIST, c.AST_KEY.HEADING, c.AST_KEY.BLOCK_QUOTE],
                m = [c.AST_KEY.TEXT],
                S = [c.AST_KEY.UNDERLINE, c.AST_KEY.STRONG, c.AST_KEY.ITALICS, c.AST_KEY.STRIKETHROUGH, c.AST_KEY.INLINE_CODE, c.AST_KEY.SPOILER, c.AST_KEY.LINE_BREAK, c.AST_KEY.TIMESTAMP, c.AST_KEY.EMOJI, c.AST_KEY.CUSTOM_EMOJI, c.AST_KEY.LIST, c.AST_KEY.HEADING, c.AST_KEY.BLOCK_QUOTE];

            function I(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                for (let i of (!Array.isArray(e) && (e = [e]), e)) {
                    if (!t.includes(i.type)) return null;
                    if (i.type === c.AST_KEY.INLINE_CODE) {
                        let e = [...t, ...n];
                        if (null == I(i.validationChildContent, e)) return null
                    }
                    if (Array.isArray(i.content) && null == I(i.content, t)) return null
                }
                return e
            }

            function g(e) {
                try {
                    var t;
                    let n = new URL(e),
                        i = null !== (t = n.protocol) && void 0 !== t ? t : "";
                    if (!h.includes(i.toLowerCase())) throw Error("Provided protocol is not allowed: " + i);
                    if (("http:" === i || "https:" === i) && (null == n.hostname || 0 === n.hostname.length)) throw Error("no hostname");
                    let a = (0, _.safelyMakeUrlHumanReadable)(n);
                    n.username = "", n.password = "";
                    let l = (0, _.safelyMakeUrlHumanReadable)(n);
                    return {
                        target: a,
                        displayTarget: l
                    }
                } catch (e) {
                    return null
                }
            }
            var A = {
                ...u.defaultRules.link,
                match: (e, t, n) => t.allowLinks ? u.defaultRules.link.match(e, t, n) : null,
                parse(e, t, i) {
                    let [l, s, r, _] = e, E = () => ({
                        type: c.AST_KEY.TEXT,
                        content: l
                    }), h = f(r), A = f(s), N = f(null != _ ? _ : ""), O = h.whitespaceSanitized, R = A.fullySanitized, y = N.fullySanitized, v = R.trim(), M = O.trim();
                    if (0 === M.length || 0 === v.length) return E();
                    let D = u.unescapeUrl(r),
                        L = g(D),
                        U = (0, o.default)(s).length > 0 || (0, o.default)(_).length > 0;
                    if (null == L || U) return E();
                    let P = {
                            ...i,
                            allowEscape: !1,
                            parseInlineCodeChildContent: !0
                        },
                        b = i.allowEmojiLinks ? T : p,
                        G = [...b, ...C],
                        k = [...m, ...S],
                        F = t(R, P),
                        w = I(F, G, [c.AST_KEY.EMOJI]),
                        V = t(y, P),
                        H = I(V, k);
                    if (null == w || null == H) return E();
                    let x = function e(t) {
                            let n = "";
                            for (let i of t) switch (i.type) {
                                case c.AST_KEY.TEXT:
                                case c.AST_KEY.INLINE_CODE:
                                    n += i.content;
                                    break;
                                case c.AST_KEY.CUSTOM_EMOJI:
                                    n += i.name;
                                    break;
                                case c.AST_KEY.EMOJI:
                                    n += i.surrogate;
                                    break;
                                case c.AST_KEY.LINE_BREAK:
                                    n += "\n";
                                    break;
                                case c.AST_KEY.STRONG:
                                case c.AST_KEY.ITALICS:
                                case c.AST_KEY.UNDERLINE:
                                case c.AST_KEY.STRIKETHROUGH:
                                case c.AST_KEY.SPOILER:
                                    n += e(i.content);
                                    break;
                                case c.AST_KEY.TIMESTAMP:
                                    n += "<timestamp>";
                                    break;
                                case c.AST_KEY.BLOCK_QUOTE:
                                case c.AST_KEY.LIST:
                                case c.AST_KEY.HEADING:
                                    n += "<".concat(i.type, "Content>");
                                    break;
                                default:
                                    (0, d.assertNever)(i.type)
                            }
                            return n
                        }(w),
                        B = 0 === x.trim().length;
                    if (B) return E();
                    let {
                        default: {
                            RULES: Y
                        }
                    } = n("888198"), K = u.parserFor(a.pick(Y, b)), j = K(A.whitespaceSanitized, P), W = N.whitespaceSanitized, {
                        target: z
                    } = L;
                    return {
                        content: j,
                        target: z,
                        title: W
                    }
                }
            }