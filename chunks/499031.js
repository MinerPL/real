            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a, s, i, l, r = n("773336");

            function o(e) {
                if ((0, r.isIOS)()) return e;
                if (!(0, r.isAndroid)()) return -1;
                switch (e) {
                    case 0:
                        return 0;
                    case 1:
                    case 2:
                        return 1;
                    case 3:
                        return 2;
                    case 4:
                    case 5:
                    case 6:
                        return 3;
                    default:
                        return -1
                }
            }(a = i || (i = {}))[a.UNHANDLED = -1] = "UNHANDLED", a[a.NOMINAL = 0] = "NOMINAL", a[a.FAIR = 1] = "FAIR", a[a.SERIOUS = 2] = "SERIOUS", a[a.CRITICAL = 3] = "CRITICAL", (s = l || (l = {}))[s.NONE = 0] = "NONE", s[s.LIGHT = 1] = "LIGHT", s[s.MODERATE = 2] = "MODERATE", s[s.SEVERE = 3] = "SEVERE", s[s.CRITICAL = 4] = "CRITICAL", s[s.EMERGENCY = 5] = "EMERGENCY", s[s.SHUTDOWN = 6] = "SHUTDOWN"