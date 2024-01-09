            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("118810");

            function s(e, t) {
                let n = e.offsetTop,
                    s = e.offsetParent;
                for (; null != s;) {
                    var l;
                    if (s === t || !(0, a.isElement)(s, HTMLElement)) break;
                    n += null !== (l = s.offsetTop) && void 0 !== l ? l : 0, s = s.offsetParent
                }
                return n
            }