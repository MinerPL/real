            var i = {
                    ECB: r("410720"),
                    CBC: r("696347"),
                    CFB: r("350066"),
                    CFB8: r("418480"),
                    CFB1: r("292065"),
                    OFB: r("8954"),
                    CTR: r("186043"),
                    GCM: r("186043")
                },
                n = r("541412");
            for (var a in n) n[a].module = i[n[a].mode];
            t.exports = n