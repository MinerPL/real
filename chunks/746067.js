            var r = s("488274"),
                i = s("912065").Buffer;
            t.exports = function(t, e) {
                for (var s, n = i.alloc(0), c = 0; n.length < e;) s = function(t) {
                    var e = i.allocUnsafe(4);
                    return e.writeUInt32BE(t, 0), e
                }(c++), n = i.concat([n, r("sha1").update(t).update(s).digest()]);
                return n.slice(0, e)
            }