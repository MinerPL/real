r("424973"), r("781738");
var n = r("91589"),
  o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  a = /\\(\\)?/g,
  i = n(function(e) {
    var t = [];
    return 46 === e.charCodeAt(0) && t.push(""), e.replace(o, function(e, r, n, o) {
      t.push(n ? o.replace(a, "$1") : r || e)
    }), t
  });
e.exports = i