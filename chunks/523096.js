            "use strict";
            n.r(t), n.d(t, {
                getAutomodAvatarURL: function() {
                    return C
                },
                default: function() {
                    return v
                }
            });
            var i = n("560528"),
                r = n("324241"),
                s = n("307757"),
                a = n("548520"),
                o = n("445724"),
                l = n("170382"),
                u = n("593285"),
                c = n("575603"),
                d = n("181815"),
                f = n("521089"),
                E = n("366942"),
                h = n("125707"),
                p = n("785744"),
                _ = n("297384"),
                S = n("573220"),
                m = n("265284"),
                T = n("320436"),
                g = n("348044"),
                I = n("36409");

            function C() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return e ? I : r
            }
            var v = {
                DEFAULT_AVATARS: [s, a, o, l, u, c],
                DEFAULT_GROUP_DM_AVATARS: [d, f, E, h, p, _, S, m],
                BOT_AVATARS: {
                    clyde: g
                },
                DEFAULT_CHANNEL_ICON: T,
                canUseWebp: function() {
                    return i.canUseWebp()
                }
            }