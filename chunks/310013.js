"use strict";
var l = {
    childContextTypes: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  },
  a = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    arguments: !0,
    arity: !0
  },
  r = "function" == typeof Object.getOwnPropertySymbols;
e.exports = function(e, t, n) {
  if ("string" != typeof t) {
    var s = Object.getOwnPropertyNames(t);
    r && (s = s.concat(Object.getOwnPropertySymbols(t)));
    for (var i = 0; i < s.length; ++i)
      if (!l[s[i]] && !a[s[i]] && (!n || !n[s[i]])) try {
        e[s[i]] = t[s[i]]
      } catch (e) {}
  }
  return e
}