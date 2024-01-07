            "use strict";
            n.r(t), n.d(t, {
                GuildOnboardingStatus: function() {
                    return r
                },
                isOnboarding: function() {
                    return l
                },
                default: function() {
                    return f
                }
            });
            var i, r, s = n("446674"),
                a = n("913144"),
                o = n("49111");

            function l(e) {
                return null != e && ["started", "ready"].includes(e)
            }(i = r || (r = {})).STARTED = "started", i.READY = "ready", i.COMPLETED = "completed", i.NOT_APPLICABLE = "not_applicable";
            let u = {},
                c = {};
            class d extends s.default.Store {
                shouldShowOnboarding(e) {
                    if (e === o.ME || e === o.FAVORITES) return !1;
                    let t = u[e];
                    return !!l(t) || !1
                }
                getOnboardingStatus(e) {
                    return u[e]
                }
                resetOnboardingStatus(e) {
                    u[e] = "started", c[e] = "cover"
                }
                getCurrentOnboardingStep(e) {
                    var t;
                    return null !== (t = c[e]) && void 0 !== t ? t : "cover"
                }
            }
            d.displayName = "GuildOnboardingStore";
            var f = new d(a.default, {
                LOGOUT: function() {
                    u = {}, c = {}
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    delete u[t.id], delete c[t.id]
                },
                GUILD_ONBOARDING_START: function(e) {
                    let {
                        guildId: t
                    } = e;
                    u[t] = "started"
                },
                GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        enabled: n
                    } = e;
                    if ("started" !== u[t]) return !1;
                    n ? u[t] = "ready" : u[t] = "not_applicable"
                },
                GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: function(e) {
                    let {
                        guildId: t
                    } = e;
                    u[t] = "not_applicable"
                },
                GUILD_ONBOARDING_COMPLETE: function(e) {
                    let {
                        guildId: t
                    } = e;
                    u[t] = "completed"
                },
                GUILD_ONBOARDING_SET_STEP: function(e) {
                    let {
                        guildId: t,
                        step: n
                    } = e;
                    c[t] = n
                },
                CONNECTION_OPEN: function() {
                    c = {}
                }
            })