            "use strict";
            r("781738"), r("70102");
            var i = "%[a-f0-9]{2}",
                n = RegExp("(" + i + ")|([^%]+?)", "gi"),
                o = RegExp("(" + i + ")+", "gi");
            t.exports = function(t) {
                if ("string" != typeof t) throw TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof t + "`");
                try {
                    return t = t.replace(/\+/g, " "), decodeURIComponent(t)
                } catch (e) {
                    return function(t) {
                        for (var e = {
                                "%FE%FF": "��",
                                "%FF%FE": "��"
                            }, r = o.exec(t); r;) {
                            try {
                                e[r[0]] = decodeURIComponent(r[0])
                            } catch (t) {
                                var i = function(t) {
                                    try {
                                        return decodeURIComponent(t)
                                    } catch (i) {
                                        for (var e = t.match(n) || [], r = 1; r < e.length; r++) e = (t = (function t(e, r) {
                                            try {
                                                return [decodeURIComponent(e.join(""))]
                                            } catch (t) {}
                                            if (1 === e.length) return e;
                                            r = r || 1;
                                            var i = e.slice(0, r),
                                                n = e.slice(r);
                                            return Array.prototype.concat.call([], t(i), t(n))
                                        })(e, r).join("")).match(n) || [];
                                        return t
                                    }
                                }(r[0]);
                                i !== r[0] && (e[r[0]] = i)
                            }
                            r = o.exec(t)
                        }
                        e["%C2"] = "�";
                        for (var a = Object.keys(e), s = 0; s < a.length; s++) {
                            var f = a[s];
                            t = t.replace(RegExp(f, "g"), e[f])
                        }
                        return t
                    }(t)
                }
            }