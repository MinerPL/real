            "use strict";
            s.r(t), s.d(t, {
                INVITE_OPTIONS_UNLIMITED: function() {
                    return l
                },
                INVITE_OPTIONS_ONCE: function() {
                    return i
                },
                INVITE_OPTIONS_5_TIMES: function() {
                    return r
                },
                INVITE_OPTIONS_10_TIMES: function() {
                    return o
                },
                INVITE_OPTIONS_25_TIMES: function() {
                    return d
                },
                INVITE_OPTIONS_50_TIMES: function() {
                    return u
                },
                INVITE_OPTIONS_100_TIMES: function() {
                    return c
                },
                MAX_USES_OPTIONS: function() {
                    return E
                },
                INVITE_OPTIONS_30_MINUTES: function() {
                    return _
                },
                INVITE_OPTIONS_1_HOUR: function() {
                    return T
                },
                INVITE_OPTIONS_6_HOURS: function() {
                    return I
                },
                INVITE_OPTIONS_12_HOURS: function() {
                    return S
                },
                INVITE_OPTIONS_1_DAY: function() {
                    return N
                },
                INVITE_OPTIONS_7_DAYS: function() {
                    return g
                },
                INVITE_OPTIONS_30_DAYS: function() {
                    return f
                },
                INVITE_OPTIONS_FOREVER: function() {
                    return A
                },
                MAX_AGE_OPTIONS: function() {
                    return L
                }
            });
            var a = s("782340");

            function n(e, t) {
                return {
                    value: e,
                    get label() {
                        return t()
                    }
                }
            }
            let l = n(0, () => a.default.Messages.MAX_USES.format({
                    maxUses: 0
                })),
                i = n(1, () => a.default.Messages.MAX_USES.format({
                    maxUses: 1
                })),
                r = n(5, () => a.default.Messages.MAX_USES.format({
                    maxUses: 5
                })),
                o = n(10, () => a.default.Messages.MAX_USES.format({
                    maxUses: 10
                })),
                d = n(25, () => a.default.Messages.MAX_USES.format({
                    maxUses: 25
                })),
                u = n(50, () => a.default.Messages.MAX_USES.format({
                    maxUses: 50
                })),
                c = n(100, () => a.default.Messages.MAX_USES.format({
                    maxUses: 100
                })),
                E = [l, i, r, o, d, u, c],
                _ = n(1800, () => a.default.Messages.DURATION_MINUTES.format({
                    minutes: 30
                })),
                T = n(3600, () => a.default.Messages.DURATION_HOURS.format({
                    hours: 1
                })),
                I = n(21600, () => a.default.Messages.DURATION_HOURS.format({
                    hours: 6
                })),
                S = n(43200, () => a.default.Messages.DURATION_HOURS.format({
                    hours: 12
                })),
                N = n(86400, () => a.default.Messages.DURATION_DAYS.format({
                    days: 1
                })),
                g = n(604800, () => a.default.Messages.DURATION_DAYS.format({
                    days: 7
                })),
                f = n(2592e3, () => a.default.Messages.DURATION_DAYS.format({
                    days: 30
                })),
                A = n(0, () => a.default.Messages.MAX_AGE_NEVER),
                L = [_, T, I, S, N, g, f, A]