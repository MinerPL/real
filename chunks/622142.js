var n = Object.prototype.hasOwnProperty;
e.exports = function(e) {
  var t = e.length,
    r = new e.constructor(t);
  return t && "string" == typeof e[0] && n.call(e, "index") && (r.index = e.index, r.input = e.input), r
}