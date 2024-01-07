            "use strict";
            t.r(a), t.d(a, {
                default: function() {
                    return r
                }
            });
            var n = {
                    lastWeek: "'afgelopen' eeee 'om' p",
                    yesterday: "'gisteren om' p",
                    today: "'vandaag om' p",
                    tomorrow: "'morgen om' p",
                    nextWeek: "eeee 'om' p",
                    other: "P"
                },
                r = function(e, a, t, r) {
                    return n[e]
                }