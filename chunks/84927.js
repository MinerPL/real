var n = /\s/;
t.exports = function(t) {
  for (var e = t.length; e-- && n.test(t.charAt(e)););
  return e
}