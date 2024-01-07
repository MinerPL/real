            r("424973"), r("781738");
            var e = r("954995"),
                o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                i = /\\(\\)?/g,
                u = e(function(t) {
                    var n = [];
                    return 46 === t.charCodeAt(0) && n.push(""), t.replace(o, function(t, r, e, o) {
                        n.push(e ? o.replace(i, "$1") : r || t)
                    }), n
                });
            t.exports = u