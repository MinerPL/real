            var i = r("488274"),
                n = r("912065").Buffer;
            t.exports = function(t, e) {
                for (var r, o = n.alloc(0), a = 0; o.length < e;) r = function(t) {
                    var e = n.allocUnsafe(4);
                    return e.writeUInt32BE(t, 0), e
                }(a++), o = n.concat([o, i("sha1").update(t).update(r).digest()]);
                return o.slice(0, e)
            }