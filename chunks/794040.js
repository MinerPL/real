            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("195548"),
                a = n("794230"),
                o = n("774728"),
                i = n("697309");

            function s(e) {
                var t, n = e.reference,
                    s = e.element,
                    u = e.placement,
                    l = u ? (0, r.default)(u) : null,
                    c = u ? (0, a.default)(u) : null,
                    d = n.x + n.width / 2 - s.width / 2,
                    f = n.y + n.height / 2 - s.height / 2;
                switch (l) {
                    case i.top:
                        t = {
                            x: d,
                            y: n.y - s.height
                        };
                        break;
                    case i.bottom:
                        t = {
                            x: d,
                            y: n.y + n.height
                        };
                        break;
                    case i.right:
                        t = {
                            x: n.x + n.width,
                            y: f
                        };
                        break;
                    case i.left:
                        t = {
                            x: n.x - s.width,
                            y: f
                        };
                        break;
                    default:
                        t = {
                            x: n.x,
                            y: n.y
                        }
                }
                var p = l ? (0, o.default)(l) : null;
                if (null != p) {
                    var m = "y" === p ? "height" : "width";
                    switch (c) {
                        case i.start:
                            t[p] = t[p] - (n[m] / 2 - s[m] / 2);
                            break;
                        case i.end:
                            t[p] = t[p] + (n[m] / 2 - s[m] / 2)
                    }
                }
                return t
            }