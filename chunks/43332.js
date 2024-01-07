            r("222007");
            var e, o = r("745011");
            var i = (e = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + e : "";
            t.exports = function(t) {
                return !!i && i in t
            }