            "use strict";
            var i, r;
            n.r(t), n.d(t, {
                ReleaseChannelsSets: function() {
                    return l
                }
            }), n("222007"), (r = i || (i = {})).STABLE = "stable", r.BETA = "beta", r.ALPHA = "alpha", r.PTB = "ptb", r.CANARY = "canary", r.STAGING = "staging", r.DEVELOPMENT = "development";
            let l = {
                ALL: new Set(["alpha", "beta", "canary", "development", "ptb", "stable", "staging"])
            }