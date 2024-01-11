            "use strict";
            n.r(t), n.d(t, {
                getDropsExperiment: function() {
                    return c
                },
                getDropsExperimentForDrop: function() {
                    return f
                },
                doesGameTitleMatchList: function() {
                    return E
                },
                getEligibleGameLastSeenStartTimeSeconds: function() {
                    return h
                },
                isDropGameDetected: function() {
                    return _
                },
                getEligibilityByRunningGameDetection: function() {
                    return S
                },
                getShowDropsNoticeBanner: function() {
                    return p
                },
                getShowDropsEndedIncompleteBanner: function() {
                    return N
                },
                getDropExpired: function() {
                    return I
                },
                getDrop: function() {
                    return m
                },
                getDropByQuestId: function() {
                    return g
                },
                getDropsPartnerGameNameByQuestId: function() {
                    return A
                },
                getPlatformLabel: function() {
                    return C
                }
            });
            var l = n("866227"),
                a = n.n(l),
                s = n("845579"),
                i = n("546463"),
                r = n("568307"),
                o = n("931115"),
                u = n("411511"),
                d = n("782340");

            function c(e) {
                let t = m(e);
                return null == t ? null : f(t)
            }

            function f(e) {
                if (e.dropsQuestId === u.FORTNITE_QUEST_ID) return o.DropsForGoLiveFortniteExperiment;
                return null
            }

            function E(e, t) {
                if (null == e) return !1;
                let n = i.default.getGameByName(e);
                return !!(null != n && t.some(e => {
                    var t;
                    return e.toLowerCase() === (null == n ? void 0 : null === (t = n.name) || void 0 === t ? void 0 : t.toLowerCase())
                })) || !1
            }

            function h() {
                return Math.floor(Date.now() / 1e3) - u.DROPS_ELIGIBILITY_SEEN_GAMES_LOOKBACK_SECONDS
            }

            function _(e, t, n) {
                var l, a, s, i;
                let r = m(e);
                if (null == r) return !1;
                let o = (l = t, a = u.PartnerGameNameToSearchTermMapping[e], null !== (s = l.find(e => E(e.name, a))) && void 0 !== s ? s : null);
                if (null != o) {
                    ;
                    let e = null !== (i = null == o ? void 0 : o.lastLaunched) && void 0 !== i ? i : 0;
                    return n <= o.lastFocused || 1e3 * n <= e
                }
                return !1
            }

            function S(e) {
                let t = r.default.getGamesSeen(!1);
                return _(e, t, h())
            }

            function T(e, t) {
                let {
                    endDate: n
                } = e, l = a(), s = a(n, u.noticeBannerDateFormat), i = a(l.clone().add(e.dropsNoticeBannerDurationDays, "days").format(u.noticeBannerDateFormat)), r = s.isSameOrBefore(i), o = s.isBefore(l, "minute");
                return r && (t && !o || !t && o)
            }

            function p(e) {
                var t;
                let n = m(e);
                if (null == n || !(null === (t = c(e)) || void 0 === t ? void 0 : t.getCurrentConfig({
                        location: "1"
                    }, {
                        autoTrackExposure: !1
                    }).dropsEnabled)) return !1;
                let l = s.DropsOptedOut.getSetting(),
                    a = T(n, !0);
                return !l && a
            }

            function N(e) {
                var t, n;
                let l = m(e);
                if (null == l || !(null === (n = c(e)) || void 0 === n ? void 0 : null === (t = n.getCurrentConfig({
                        location: "2"
                    }, {
                        autoTrackExposure: !1
                    })) || void 0 === t ? void 0 : t.dropsEnabled)) return !1;
                let a = s.DropsOptedOut.getSetting(),
                    i = T(l, !1);
                return I(l) && !a && i
            }

            function I(e) {
                let {
                    endDate: t
                } = e, n = a(t, "YYYY-MM-DD HH:mm"), l = a();
                return l > n
            }

            function m(e) {
                let t = u.DROPS_GAMES[e];
                return t
            }

            function g(e) {
                let t = Object.values(u.DROPS_GAMES).find(t => t.dropsQuestId === e);
                return t
            }

            function A(e) {
                let t = Object.keys(u.DROPS_GAMES).find(t => u.DROPS_GAMES[t].dropsQuestId === e);
                return t
            }

            function C(e) {
                switch (e) {
                    case "SWITCH":
                        return d.default.Messages.DROPS_PLATFORM_SWITCH;
                    case "PC":
                        return d.default.Messages.DROPS_PLATFORM_PC;
                    case "PLAYSTATION":
                        return d.default.Messages.DROPS_PLATFORM_PLAYSTATION;
                    case "XBOX":
                        return d.default.Messages.DROPS_PLATFORM_XBOX;
                    default:
                        return ""
                }
            }