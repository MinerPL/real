e = n.nmd(e), ! function() {
  var t = this;

  function n(e, t) {
    var n, r, o, a, i, s;
    n = 3 & e.length, r = e.length - n, o = t;
    for (s = 0; s < r;) i = 255 & e.charCodeAt(s) | (255 & e.charCodeAt(++s)) << 8 | (255 & e.charCodeAt(++s)) << 16 | (255 & e.charCodeAt(++s)) << 24, ++s, o ^= i = (65535 & (i = (i = (65535 & i) * 3432918353 + (((i >>> 16) * 3432918353 & 65535) << 16) & 4294967295) << 15 | i >>> 17)) * 461845907 + (((i >>> 16) * 461845907 & 65535) << 16) & 4294967295, o = (65535 & (a = (65535 & (o = o << 13 | o >>> 19)) * 5 + (((o >>> 16) * 5 & 65535) << 16) & 4294967295)) + 27492 + (((a >>> 16) + 58964 & 65535) << 16);
    switch (i = 0, n) {
      case 3:
        i ^= (255 & e.charCodeAt(s + 2)) << 16;
      case 2:
        i ^= (255 & e.charCodeAt(s + 1)) << 8;
      case 1:
        i ^= 255 & e.charCodeAt(s), o ^= i = (65535 & (i = (i = (65535 & i) * 3432918353 + (((i >>> 16) * 3432918353 & 65535) << 16) & 4294967295) << 15 | i >>> 17)) * 461845907 + (((i >>> 16) * 461845907 & 65535) << 16) & 4294967295
    }
    return o ^= e.length, o ^= o >>> 16, o = (65535 & o) * 2246822507 + (((o >>> 16) * 2246822507 & 65535) << 16) & 4294967295, o ^= o >>> 13, o = (65535 & o) * 3266489909 + (((o >>> 16) * 3266489909 & 65535) << 16) & 4294967295, (o ^= o >>> 16) >>> 0
  }
  if (n.v2 = function(e, t) {
      for (var n, r = e.length, o = t ^ r, a = 0; r >= 4;) n = (65535 & (n = 255 & e.charCodeAt(a) | (255 & e.charCodeAt(++a)) << 8 | (255 & e.charCodeAt(++a)) << 16 | (255 & e.charCodeAt(++a)) << 24)) * 1540483477 + (((n >>> 16) * 1540483477 & 65535) << 16), n ^= n >>> 24, o = (65535 & o) * 1540483477 + (((o >>> 16) * 1540483477 & 65535) << 16) ^ (n = (65535 & n) * 1540483477 + (((n >>> 16) * 1540483477 & 65535) << 16)), r -= 4, ++a;
      switch (r) {
        case 3:
          o ^= (255 & e.charCodeAt(a + 2)) << 16;
        case 2:
          o ^= (255 & e.charCodeAt(a + 1)) << 8;
        case 1:
          o ^= 255 & e.charCodeAt(a), o = (65535 & o) * 1540483477 + (((o >>> 16) * 1540483477 & 65535) << 16)
      }
      return o ^= o >>> 13, o = (65535 & o) * 1540483477 + (((o >>> 16) * 1540483477 & 65535) << 16), (o ^= o >>> 15) >>> 0
    }, n.v3 = n, void 0 !== e) e.exports = n;
  else {
    var r = t.murmur;
    n.noConflict = function() {
      return t.murmur = r, n
    }, t.murmur = n
  }
}()