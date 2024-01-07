            "use strict";
            s.r(t), s.d(t, {
                trackGuildSettingsDiscoveryViewed: function() {
                    return o
                }
            }), s("424973");
            var a, n, l = s("599110"),
                i = s("75766"),
                r = s("49111");

            function o(e) {
                let t = i.default.getDiscoveryChecklist(e),
                    s = [];
                if (!(null == t ? void 0 : t.sufficient)) {
                    var a;
                    !(null == t ? void 0 : t.safeEnvironment) && s.push("TNS"), (!(null == t ? void 0 : t.healthy) || (null == t ? void 0 : t.healthScorePending)) && s.push("HEALTH"), !(null == t ? void 0 : t.size) && s.push("MEMBER_COUNT"), Object.keys(null !== (a = null == t ? void 0 : t.nsfwProperties) && void 0 !== a ? a : {}).length > 0 && s.push("BAD_WORDS"), !(null == t ? void 0 : t.protected) && s.push("2FA")
                }
                l.default.track(r.AnalyticEvents.GUILD_SETTINGS_DISCOVERY_VIEWED, {
                    guild_id: e,
                    failed_reasons: s
                })
            }(n = a || (a = {})).SAFE_ENVIRONMENT = "TNS", n.HEALTHY = "HEALTH", n.SIZE = "MEMBER_COUNT", n.NSFW = "BAD_WORDS", n.PROTECTED = "2FA"