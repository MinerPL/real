            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("781738");
            var i = n("627445"),
                a = n.n(i),
                l = n("132710"),
                s = n.n(l);
            let r = /\n{2,}$/,
                u = /(?:^|\n)( *)$/,
                o = "(?:[*-]|\\d+\\.)",
                d = "( *)(" + o + ") +",
                c = RegExp("^" + d),
                _ = RegExp(d + "[^\\n]*(?:\\n(?!\\1" + o + " )[^\\n]*)*(\n|$)", "gm"),
                E = / *\n$/,
                f = RegExp("^( *)(" + o + ") [\\s\\S]+?(?:\\n(?! )(?!\\1" + o + " )|$)"),
                h = /^[ \t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+$/,
                p = e => e.map(e => ("text" === e.type && null != e.content && (e.content = e.content.replace(/\n+\s*$/, "")), e)),
                T = {
                    ...s.defaultRules.list,
                    requiredFirstCharacters: " *-0123456789".split(""),
                    match: (e, t) => {
                        if (!t.allowList || t._listLevel >= 11) return null;
                        let n = null == t.prevCapture ? "" : t.prevCapture[0],
                            i = u.exec(n);
                        return null == i || h.test(i[0]) ? null : f.exec(e)
                    },
                    parse: (e, t, n) => {
                        let i = e[2],
                            l = i.length > 1,
                            s = e[0].replace(r, "\n").match(_);
                        a(null != s, "markup list items can not be parsed.");
                        let u = !1,
                            o = s.map((e, i) => {
                                let a;
                                let l = c.exec(e),
                                    r = null != l ? l[0].length : 0,
                                    o = RegExp("^ {1," + r + "}", "gm"),
                                    d = e.replace(o, "").replace(c, ""),
                                    _ = i === s.length - 1,
                                    f = -1 !== d.indexOf("\n\n"),
                                    h = f || _ && u;
                                u = h;
                                let T = n.inline,
                                    C = n._list,
                                    m = n._listLevel;
                                n._list = !0, n._listLevel = (null != m ? m : 0) + 1, h ? (n.inline = !1, a = d.replace(E, "\n\n")) : (n.inline = !0, a = d.replace(E, ""));
                                let S = p(t(a, {
                                    ...n,
                                    allowHeading: !1
                                }));
                                return n.inline = T, n._list = C, n._listLevel = m, S
                            });
                        return {
                            ordered: l,
                            start: l ? Math.min(1e9, Math.max(1, +i)) : void 0,
                            items: o
                        }
                    }
                };
            var C = T