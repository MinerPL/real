            var i = r("488274"),
                n = r("912065").Buffer;
            t.exports = function(t, e) {
                for (var r, a = n.alloc(0), o = 0; a.length < e;) r = function(t) {
                    var e = n.allocUnsafe(4);
                    return e.writeUInt32BE(t, 0), e
                }(o++), a = n.concat([a, i("sha1").update(t).update(r).digest()]);
                return a.slice(0, e)
            }