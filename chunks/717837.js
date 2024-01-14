"use strict";
t.exports = function(t) {
  return (t = String(t || ""), o.test(t)) ? "rtl" : a.test(t) ? "ltr" : "neutral"
};
var n = "֑-߿יִ-﷽ﹰ-ﻼ",
  i = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
  o = RegExp("^[^" + i + "]*[" + n + "]"),
  a = RegExp("^[^" + n + "]*[" + i + "]")