var r = {}.toString;
t.exports = Array.isArray || function(t) {
  return "[object Array]" == r.call(t)
}