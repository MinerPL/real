            "use strict";
            n.r(t), n.d(t, {
                sanitizeWhitespace: function() {
                    return a
                },
                sanitizeUnicodeConfusables: function() {
                    return r
                },
                safelyMakeUrlHumanReadable: function() {
                    return o
                }
            }), n("781738");
            let i = RegExp("".concat(/\p{Cf}|\p{Zl}|\p{Zp}|[^\P{Cc}\n]|[^\P{Zs} ]/gu.source, "|").concat("͏|឴|឵|ᅠ|ㅤ|ﾠ"), "gu");

            function a(e) {
                return e.replace(i, "")
            }
            let l = [{
                character: "h",
                matcher: s(["H", "һ", "հ", "Ꮒ", "ℎ", "\uD835\uDC21", "\uD835\uDC89", "\uD835\uDCBD", "\uD835\uDCF1", "\uD835\uDD25", "\uD835\uDD59", "\uD835\uDD8D", "\uD835\uDDC1", "\uD835\uDDF5", "\uD835\uDE29", "\uD835\uDE5D", "\uD835\uDE91", "ｈ"])
            }, {
                character: "t",
                matcher: s(["T", "\uD835\uDC2D", "\uD835\uDC61", "\uD835\uDC95", "\uD835\uDCC9", "\uD835\uDCFD", "\uD835\uDD31", "\uD835\uDD65", "\uD835\uDD99", "\uD835\uDDCD", "\uD835\uDE01", "\uD835\uDE35", "\uD835\uDE69", "\uD835\uDE9D"])
            }, {
                character: "p",
                matcher: s(["P", "ρ", "ϱ", "р", "⍴", "ⲣ", "\uD835\uDC29", "\uD835\uDC5D", "\uD835\uDC91", "\uD835\uDCC5", "\uD835\uDCF9", "\uD835\uDD2D", "\uD835\uDD61", "\uD835\uDD95", "\uD835\uDDC9", "\uD835\uDDFD", "\uD835\uDE31", "\uD835\uDE65", "\uD835\uDE99", "\uD835\uDED2", "\uD835\uDEE0", "\uD835\uDF0C", "\uD835\uDF1A", "\uD835\uDF46", "\uD835\uDF54", "\uD835\uDF80", "\uD835\uDF8E", "\uD835\uDFBA", "\uD835\uDFC8", "ｐ", "ҏ"])
            }, {
                character: "s",
                matcher: s(["S", "ƽ", "ѕ", "ꜱ", "ꮪ", "\uD801\uDC48", "\uD806\uDCC1", "\uD835\uDC2C", "\uD835\uDC60", "\uD835\uDC94", "\uD835\uDCC8", "\uD835\uDCFC", "\uD835\uDD30", "\uD835\uDD64", "\uD835\uDD98", "\uD835\uDDCC", "\uD835\uDE00", "\uD835\uDE34", "\uD835\uDE68", "\uD835\uDE9C", "ｓ"])
            }, {
                character: ":",
                matcher: s(["ː", "˸", "։", "׃", "܃", "܄", "ः", "ઃ", "᛬", "᠃", "᠉", "⁚", "∶", "ꓽ", "꞉", "︰", "：", ";", ";"])
            }, {
                character: "/",
                matcher: s(["᜵", "⁁", "⁄", "∕", "╱", "⟋", "⧸", "Ⳇ", "⼃", "〳", "ノ", "㇓", "丿", "\uD834\uDE3A"])
            }];

            function s(e) {
                return RegExp(e.join("|"), "gu")
            }

            function r(e) {
                let t = e;
                return l.forEach(e => {
                    t = t.replace(e.matcher, e.character)
                }), t
            }
            let u = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0];

            function o(e) {
                let t = function(e) {
                    let t = "null" === e.origin,
                        n = t && e.pathname.startsWith("//");
                    if (n) return e.protocol;
                    let i = "";
                    return "" !== e.username && (i += e.username), "" !== e.password && (i += ":" + e.password), "" !== i && (i += "@"), "".concat(e.protocol, "//").concat(i).concat(e.host)
                }(e);
                return t += d(e.pathname) + d(e.search) + d(e.hash)
            }

            function d(e) {
                let t;
                try {
                    t = decodeURIComponent(e)
                } catch {
                    return e
                }
                let n = "",
                    i = e,
                    a = t;
                for (; i.length > 0;) {
                    var l;
                    let e = i.codePointAt(0),
                        t = a.codePointAt(0);
                    if (e === t) {
                        let t = String.fromCodePoint(e);
                        n += t, i = i.substring(t.length), a = a.substring(t.length);
                        continue
                    }
                    let s = String.fromCodePoint(t),
                        r = encodeURIComponent(s),
                        o = r === s ? 3 : r.length;
                    n += ((l = t) >= 0 && l < 128 ? 1 !== u[l] : 8206 === l || 8207 === l || 8234 === l || 8235 === l || 8236 === l || 8237 === l || 8238 === l || 1564 === l || 8294 === l || 8295 === l || 8296 === l || 8297 === l || 128271 === l || 128272 === l || 128274 === l || 128275 === l || 133 === l || 160 === l || 5760 === l || 8192 === l || 8193 === l || 8194 === l || 8195 === l || 8196 === l || 8197 === l || 8198 === l || 8199 === l || 8200 === l || 8201 === l || 8202 === l || 8232 === l || 8233 === l || 8239 === l || 8287 === l || 12288 === l || 10240 === l || 173 === l || 847 === l || l >= 1536 && l <= 1541 || 1757 === l || 1807 === l || 2274 === l || 4447 === l || 4448 === l || 6068 === l || 6069 === l || 6155 === l || 6156 === l || 6157 === l || 6158 === l || 8203 === l || 8204 === l || 8205 === l || 8288 === l || 8289 === l || 8290 === l || 8291 === l || 8292 === l || 8293 === l || l >= 8298 && l <= 8303 || 12644 === l || l >= 65520 && l <= 65528 || l >= 65024 && l <= 65039 || 65279 === l || 65440 === l || 65529 === l || 65530 === l || 65531 === l || 69821 === l || 69837 === l || l >= 78896 && l <= 78904 || l >= 113824 && l <= 113827 || l >= 119155 && l <= 119162 || l >= 917504 && l <= 921599) ? r : s, i = i.substring(o), a = a.substring(s.length)
                }
                return n
            }