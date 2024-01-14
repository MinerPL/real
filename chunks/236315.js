e.exports = function(e, t) {
  if ("constructor" !== t || "function" != typeof e[t]) {
    if ("__proto__" != t) return e[t]
  }
}