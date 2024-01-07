            "use strict";
            t.exports = function(t) {
                return (t = String(t || ""), o.test(t)) ? "rtl" : u.test(t) ? "ltr" : "neutral"
            };
            var r = "֑-߿יִ-﷽ﹰ-ﻼ",
                i = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
                o = RegExp("^[^" + i + "]*[" + r + "]"),
                u = RegExp("^[^" + r + "]*[" + i + "]")