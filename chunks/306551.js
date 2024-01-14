r("781738");
var n = r("84927"),
  i = /^\s+/;
t.exports = function(t) {
  return t ? t.slice(0, n(t) + 1).replace(i, "") : t
}