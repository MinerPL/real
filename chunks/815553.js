            "use strict";
            n.r(t), n.d(t, {
                getNowPlayingAnalytics: function() {
                    return o
                }
            }), n("808653"), n("446674");
            var l = n("350522"),
                a = n("392453"),
                s = n("471671"),
                i = n("49111"),
                r = n("988268");

            function o() {
                let e = s.default.windowSize().width,
                    t = l.default.hasConsented(i.Consents.PERSONALIZATION),
                    n = a.default.nowPlayingCards;
                return function(e, t, n) {
                    let l = e.reduce((e, t) => {
                        var n;
                        let l = null !== (n = t.party.currentActivities.filter(e => null != e.game.name && e.game.type === r.ApplicationTypes.GAME).map(e => e.game.name)) && void 0 !== n ? n : [];
                        return e.concat(l)
                    }, []);
                    return {
                        now_playing_visible: t > 1200 && n,
                        now_playing_num_cards: e.length,
                        now_playing_games_detected: l
                    }
                }(n, e, t)
            }