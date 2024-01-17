"use strict";
e.exports = function(e) {
  return (e = String(e || ""), r.test(e)) ? "rtl" : l.test(e) ? "ltr" : "neutral"
};
var i = "֑-߿יִ-﷽ﹰ-ﻼ",
  s = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
  r = RegExp("^[^" + s + "]*[" + i + "]"),
  l = RegExp("^[^" + i + "]*[" + s + "]")