            var i = r("446825").Buffer;
            t.exports = function(t, e) {
                for (var r = Math.min(t.length, e.length), n = new i(r), a = 0; a < r; ++a) n[a] = t[a] ^ e[a];
                return n
            }