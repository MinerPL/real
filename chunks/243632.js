            "use strict";
            n.r(t), n.d(t, {
                useDropsExperiment: function() {
                    return p
                },
                useShowEligibilityEnrollmentTooltip: function() {
                    return m
                },
                useAnyDropsEnabled: function() {
                    return E
                },
                useFetchInitialDropProgress: function() {
                    return g
                },
                useActivityPanelDrop: function() {
                    return I
                },
                useTrackDropsImpression: function() {
                    return S
                }
            });
            var l = n("884691"),
                a = n("446674"),
                s = n("913144"),
                i = n("428958"),
                r = n("862853"),
                o = n("10641"),
                u = n("568307"),
                d = n("376152"),
                c = n("931115"),
                f = n("180273"),
                h = n("579565"),
                C = n("411511");

            function p(e) {
                let t, n;
                let l = c.DropsForGoLiveFortniteExperiment.useExperiment({
                    location: "59cc4b_1"
                });
                if (null == e) return null;
                let a = (0, h.getDrop)(e);
                if (null == a) return null;
                if (a.dropsQuestId === C.FORTNITE_QUEST_ID) t = c.DropsForGoLiveFortniteExperiment, n = l;
                else t = null, n = null;
                return null == t || null == n ? null : {
                    experiment: t,
                    config: n,
                    drop: a
                }
            }

            function m(e) {
                var t;
                let n = (0, a.useStateFromStores)([f.default], () => f.default.serverEligibleByQuestIds),
                    i = p(e),
                    r = function(e) {
                        let t = (0, a.useStateFromStoresArray)([u.default], () => u.default.getGamesSeen(!1)),
                            n = l.useMemo(() => (0, h.getEligibleGameLastSeenStartTimeSeconds)(), []),
                            s = (0, h.isDropGameDetected)(e, t, n);
                        return s
                    }(e),
                    o = null != i && n[i.drop.dropsQuestId];
                null != i && o && r && i.experiment.trackExposure({
                    location: "ELIGIBILITY_ENROLLMENT_TOOLTIP"
                });
                let c = null == i ? void 0 : null === (t = i.config) || void 0 === t ? void 0 : t.dropsEnabled,
                    C = null == i ? void 0 : i.drop,
                    m = null == C || (0, h.getDropExpired)(C);
                return l.useEffect(() => {
                    c && !m && r && null != C && s.default.wait(() => {
                        null == o && (0, d.fetchDropsEligibility)(C.dropsQuestId)
                    })
                }, [o, C, c, m, r]), null != C && !!c && !m && o && r
            }

            function E() {
                let e = p(C.PartnerGame.FORTNITE);
                return null == e ? void 0 : e.config.dropsEnabled
            }

            function g(e) {
                let t = p(e),
                    n = null == t ? void 0 : t.drop,
                    s = (0, a.useStateFromStores)([f.default], () => null != n && f.default.serverEligibleByQuestIds[n.dropsQuestId]),
                    i = (0, a.useStateFromStores)([f.default], () => f.default.hasInitialProgressFetched);
                l.useEffect(() => {
                    null != n && s && !i && (0, d.fetchProgress)(n.dropsQuestId)
                }, [n, s, i])
            }

            function I(e, t, n, l) {
                var s;
                let i = p(e),
                    u = null == i ? void 0 : i.drop,
                    d = (0, a.useStateFromStores)([f.default], () => null != u && f.default.serverEligibleByQuestIds[u.dropsQuestId]),
                    c = (0, a.useStateFromStores)([f.default], () => f.default.getIsPartnerGameQuestComplete(e)),
                    C = (0, h.doesGameTitleMatchList)(null == t ? void 0 : t.name, null !== (s = null == u ? void 0 : u.gameSearchTerm) && void 0 !== s ? s : []),
                    m = (0, r.useIsAnyContentShown)([n, l]),
                    E = (0, o.useIsDismissibleContentDismissed)(l),
                    g = null == u || (0, h.getDropExpired)(u),
                    I = !!(null != u && !g && C && (null == i ? void 0 : i.config.dropsEnabled) && d);
                return {
                    partnerGame: I ? e : null,
                    dropsActivityPanelExperienceBlocked: m,
                    showDropsSparkles: !c && !E
                }
            }

            function S(e, t, n) {
                let l = (0, h.getDrop)(e);
                (0, i.default)({
                    type: t,
                    name: n,
                    properties: {
                        drops_quest_id: null == l ? void 0 : l.dropsQuestId,
                        game_id: null == l ? void 0 : l.dropsGameId
                    }
                })
            }