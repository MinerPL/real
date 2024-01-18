"use strict";
e.exports = function(e) {
  return (e = String(e || ""), l.test(e)) ? "rtl" : r.test(e) ? "ltr" : "neutral"
};
var i = "֑-߿יִ-﷽ﹰ-ﻼ",
  s = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
  l = RegExp("^[^" + s + "]*[" + i + "]"),
  r = RegExp("^[^" + i + "]*[" + s + "]")