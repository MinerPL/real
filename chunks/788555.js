            "use strict";
            var n = r("827356"),
                i = r("359704"),
                o = r("855941"),
                a = r("808598");

            function u(t, e) {
                for (var r = 1 / 0, n = 1 / 0, i = -1 / 0, o = -1 / 0, a = 0; a < t.length; a++) {
                    var u = t[a];
                    0 !== u.width && 1 !== u.width && (r = Math.min(r, u.top), n = Math.min(n, u.bottom), i = Math.max(i, u.top), o = Math.max(o, u.bottom))
                }
                return i <= n && i - r < e && o - n < e
            }
            t.exports = function(t) {
                t.collapsed || a(!1);
                var e, r, s, c, l, f, p = (t = t.cloneRange()).startContainer;
                1 !== p.nodeType && (p = p.parentNode);
                var h = (e = p, r = getComputedStyle(e), (c = (s = i(e)).createElement("div")).style.fontFamily = r.fontFamily, c.style.fontSize = r.fontSize, c.style.fontStyle = r.fontStyle, c.style.fontWeight = r.fontWeight, c.style.lineHeight = r.lineHeight, c.style.position = "absolute", c.textContent = "M", (l = s.body) || a(!1), l.appendChild(c), f = c.getBoundingClientRect(), l.removeChild(c), f.height),
                    d = t.endContainer,
                    g = t.endOffset;
                for (t.setStart(t.startContainer, 0); u(o(t), h) && (d = t.startContainer, g = t.startOffset, d.parentNode || a(!1), t.setStartBefore(d), 1 !== d.nodeType || "inline" === getComputedStyle(d).display););
                for (var y = d, v = g - 1;;) {
                    for (var m = y.nodeValue, _ = v; _ >= 0; _--)
                        if (!(null != m && _ > 0 && n.isSurrogatePair(m, _ - 1))) {
                            if (t.setStart(y, _), u(o(t), h)) d = y, g = _;
                            else break
                        } if (-1 === _ || 0 === y.childNodes.length) break;
                    v = function(t) {
                        switch (t.nodeType) {
                            case Node.DOCUMENT_TYPE_NODE:
                                return 0;
                            case Node.TEXT_NODE:
                            case Node.PROCESSING_INSTRUCTION_NODE:
                            case Node.COMMENT_NODE:
                                return t.length;
                            default:
                                return t.childNodes.length
                        }
                    }(y = y.childNodes[_])
                }
                return t.setStart(d, g), t
            }