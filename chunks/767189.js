            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
            var a = n("917351"),
                l = n.n(a),
                s = n("599110"),
                i = n("39141"),
                r = n("49111");

            function d(e) {
                switch (e) {
                    case i.ShakeLocation.CHAT_INPUT:
                        return "chat_input";
                    case i.ShakeLocation.MENTION:
                        return "mention";
                    case i.ShakeLocation.VOICE_USER:
                        return "voice_user"
                }
            }

            function u(e) {
                switch (e) {
                    case i.ConfettiLocation.CHAT_INPUT:
                        return "chat_input";
                    case i.ConfettiLocation.MEMBER_USER:
                        return "member_user";
                    case i.ConfettiLocation.REACTION:
                        return "reaction";
                    case i.ConfettiLocation.CALL_TILE:
                        return "call_tile"
                }
            }

            function o(e, t) {
                return Object.entries(e).filter(e => {
                    let [t, n] = e;
                    return n
                }).map(e => {
                    let [n] = e;
                    return t(Number.parseInt(n))
                })
            }
            let c = l.throttle(e => {
                let {
                    enabled: t,
                    combosEnabled: n,
                    combosRequiredCount: a,
                    screenshakeEnabled: l,
                    shakeIntensity: i,
                    screenshakeEnabledLocations: c,
                    confettiEnabled: E,
                    confettiSize: f,
                    confettiCount: _,
                    confettiEnabledLocations: g
                } = e;
                s.default.track(r.AnalyticEvents.POGGERMODE_SETTINGS_UPDATED, {
                    enabled: t,
                    combos_enabled: n,
                    combos_required_count: a,
                    screenshake_enabled: l,
                    shake_intensity: i,
                    screenshake_enabled_locations: o(c, d),
                    confetti_enabled: E,
                    confetti_size: f,
                    confetti_count: _,
                    confetti_enabled_locations: o(g, u)
                })
            }, 5e3);
            var E = c