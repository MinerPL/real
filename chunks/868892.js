            "use strict";
            var n, i;

            function a(t) {
                return t < n.HOURLY
            }
            r.r(e), r.d(e, {
                Frequency: function() {
                    return n
                },
                freqIsDailyOrGreater: function() {
                    return a
                }
            }), (i = n || (n = {}))[i.YEARLY = 0] = "YEARLY", i[i.MONTHLY = 1] = "MONTHLY", i[i.WEEKLY = 2] = "WEEKLY", i[i.DAILY = 3] = "DAILY", i[i.HOURLY = 4] = "HOURLY", i[i.MINUTELY = 5] = "MINUTELY", i[i.SECONDLY = 6] = "SECONDLY"