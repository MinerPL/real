            "use strict";
            var a, n, l, i, r, o;
            s.r(t), s.d(t, {
                Mode: function() {
                    return a
                },
                Confidence: function() {
                    return n
                },
                PainLevel: function() {
                    return l
                },
                defaultThresholds: function() {
                    return d
                }
            }), (i = a || (a = {}))[i.DontCare = 0] = "DontCare", i[i.CareALittle = 1] = "CareALittle", i[i.CareALot = 2] = "CareALot", (r = n || (n = {}))[r.High = 0] = "High", r[r.Low = 1] = "Low", (o = l || (l = {}))[o.Low = 0] = "Low", o[o.Medium = 1] = "Medium", o[o.High = 2] = "High";
            let d = {
                careALot: {
                    monthOpenPerc: .01,
                    yearOpenPerc: .01,
                    sentMessages: 1e3
                },
                careALittle: {
                    monthOpenPerc: .001,
                    yearOpenPerc: .001,
                    sentMessages: 5,
                    minOpens: 2
                },
                smallServerSize: 50,
                mediumServerSize: 200,
                frecency: {
                    yearMinOpensSmallServer: 10,
                    yearMinOpensLargeServer: 50,
                    monthMinOpens: 2,
                    totalOpensPercent: .1
                }
            }