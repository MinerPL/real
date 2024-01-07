            "use strict";
            var r, i;
            n.r(t), n.d(t, {
                ReleaseChannelsSets: function() {
                    return a
                }
            }), n("222007"), (i = r || (r = {})).STABLE = "stable", i.BETA = "beta", i.ALPHA = "alpha", i.PTB = "ptb", i.CANARY = "canary", i.STAGING = "staging", i.DEVELOPMENT = "development";
            let a = {
                ALL: new Set(["alpha", "beta", "canary", "development", "ptb", "stable", "staging"])
            }