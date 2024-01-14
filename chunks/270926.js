"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var s = n("132710"),
  i = n.n(s);
let r = /\n$/,
  a = {
    ...i.defaultRules.heading,
    requiredFirstCharacters: [" ", "#"],
    match: (e, t, n) => t.allowHeading ? null == n || "" === n || null != n.match(r) ? (0, s.anyScopeRegex)(/^ *(#{1,3})(?:\s+)((?![#]+)[^\n]+?)#*\s*(?:\n|$)/)(e, t, n) : null : null
  };
var o = a