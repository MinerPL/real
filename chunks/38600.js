"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("741566");
let i = {
    LATIN12: a.latin12CompactTimeStamp,
    LATIN24: a.latin24CompactTimeStamp,
    ASIAN: a.asianCompactTimeStamp
  },
  s = /(AM|PM)$/;

function r(e) {
  return null != e.match(s) ? i.LATIN24 : e.length <= 5 ? i.LATIN12 : i.ASIAN
}