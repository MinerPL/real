            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007"), n("843762");
            var i = n("6587"),
                o = n("677315"),
                l = n("290886"),
                a = n("288518"),
                u = n("486503"),
                d = n("393027"),
                s = n("845579"),
                E = n("686470"),
                r = n("791823"),
                _ = n("287850"),
                A = n("449008"),
                c = n("722525"),
                C = n("49111"),
                T = n("724210");
            let S = () => {
                let e = a.default.getMessageRequestsCount() > 0 || u.default.getSpamChannelsCount() > 0;
                return [C.Routes.FRIENDS, E.default.hasLibraryApplication() && !s.DisableGamesTab.getSetting() ? C.Routes.APPLICATION_LIBRARY : null, C.Routes.APPLICATION_STORE, e ? C.Routes.MESSAGE_REQUESTS : null, C.Routes.COLLECTIBLES_SHOP, s.FamilyCenterEnabled.getSetting() ? C.Routes.FAMILY_CENTER : null].filter(A.isNotNullish)
            };

            function I(e, t) {
                (0, c.transitionToChannel)(e, t)
            }

            function f() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                    t = d.default.getState().guildId;
                null == t ? ! function(e) {
                    var t;
                    let {
                        channelId: n,
                        path: i,
                        basePath: o
                    } = d.default.getState(), l = _.default.getPrivateChannelIds(), a = __OVERLAY__ ? l : [...S(), ...l];
                    let u = null == n ? (t = null != i ? i : o, S().findIndex(e => t.startsWith(e))) : null != n ? a.indexOf(n) : 0,
                        s = u + e;
                    s >= a.length ? s = 0 : s < 0 && (s = a.length - 1);
                    let E = a[s];
                    S().includes(E) ? ! function(e) {
                        let t = r.default.getCurrentRoute();
                        e === C.Routes.APPLICATION_STORE && null != t ? (0, c.transitionToPage)(t) : (0, c.transitionToPage)(e)
                    }(E) : I(C.ME, E)
                }(e) : ! function(e, t) {
                    var n, a;
                    let u = d.default.getState().channelId,
                        s = (0, i.default)(t).map(e => e.id);
                    ((0, o.canSeeGuildHome)(t) || (0, l.canSeeOnboardingHome)(t)) && s.unshift(T.StaticChannelRoute.GUILD_HOME);
                    let E = null != u ? s.indexOf(u) : -1;
                    let r = (n = E + e, a = s.length, n < 0 ? a - 1 : n >= a ? 0 : n);
                    I(t, s[r])
                }(e, t)
            }