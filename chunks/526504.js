            "use strict";
            s("781738"), s("70102");
            var r = "%[a-f0-9]{2}",
                i = RegExp("(" + r + ")|([^%]+?)", "gi"),
                n = RegExp("(" + r + ")+", "gi");
            t.exports = function(t) {
                if ("string" != typeof t) throw TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof t + "`");
                try {
                    return t = t.replace(/\+/g, " "), decodeURIComponent(t)
                } catch (e) {
                    return function(t) {
                        for (var e = {
                                "%FE%FF": "��",
                                "%FF%FE": "��"
                            }, s = n.exec(t); s;) {
                            try {
                                e[s[0]] = decodeURIComponent(s[0])
                            } catch (t) {
                                var r = function(t) {
                                    try {
                                        return decodeURIComponent(t)
                                    } catch (r) {
                                        for (var e = t.match(i) || [], s = 1; s < e.length; s++) e = (t = (function t(e, s) {
                                            try {
                                                return [decodeURIComponent(e.join(""))]
                                            } catch (t) {}
                                            if (1 === e.length) return e;
                                            s = s || 1;
                                            var r = e.slice(0, s),
                                                i = e.slice(s);
                                            return Array.prototype.concat.call([], t(r), t(i))
                                        })(e, s).join("")).match(i) || [];
                                        return t
                                    }
                                }(s[0]);
                                r !== s[0] && (e[s[0]] = r)
                            }
                            s = n.exec(t)
                        }
                        e["%C2"] = "�";
                        for (var c = Object.keys(e), o = 0; o < c.length; o++) {
                            var f = c[o];
                            t = t.replace(RegExp(f, "g"), e[f])
                        }
                        return t
                    }(t)
                }
            }