            var i = r("446825").Buffer;
            t.exports = function(t, e) {
                for (var r = Math.min(t.length, e.length), n = new i(r), o = 0; o < r; ++o) n[o] = t[o] ^ e[o];
                return n
            }