"use strict";
E.r(_), E.d(_, {
  default: function() {
    return s
  }
});
var t = E("102053"),
  o = E("689988"),
  n = E("718517"),
  r = E("303217"),
  i = E("352266");
let a = 4 * n.default.Millis.HOUR;
class I extends o.default {
  _initialize() {
    setTimeout(() => t.default.timeAsync("\uD83D\uDCBE", "getBlockedDomainList", () => i.default.getBlockedDomainList()), 1e3), setTimeout(() => (0, r.fetchBlockedDomainList)(), 10 * n.default.Millis.SECOND), this.intervalID = setInterval(r.fetchBlockedDomainList, a)
  }
  _terminate() {
    clearInterval(this.intervalID)
  }
}
var s = new I