n("426094");
t.exports = function() {
  if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
  if ("function" == typeof Proxy) return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
  } catch (t) {
    return !1
  }
}, t.exports.__esModule = !0, t.exports.default = t.exports