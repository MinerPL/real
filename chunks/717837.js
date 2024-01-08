            "use strict";
            e.exports = function(e) {
                return (e = String(e || ""), s.test(e)) ? "rtl" : l.test(e) ? "ltr" : "neutral"
            };
            var i = "֑-߿יִ-﷽ﹰ-ﻼ",
                r = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
                s = RegExp("^[^" + r + "]*[" + i + "]"),
                l = RegExp("^[^" + i + "]*[" + r + "]")