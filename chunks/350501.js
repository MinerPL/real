            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            }), n("222007"), n("424973");
            var l = n("37983"),
                a = n("884691"),
                s = n("759843"),
                i = n("249654"),
                r = n("446674"),
                o = n("812204"),
                u = n("685665"),
                d = n("428958"),
                c = n("872173"),
                f = n("945956"),
                h = n("305122"),
                C = n("235004"),
                p = n("78581"),
                m = n("24156"),
                E = n("774473"),
                g = n("679864"),
                I = n("553372"),
                S = n("846325"),
                _ = n("11099");

            function N(e) {
                let {
                    guildId: t,
                    channel: n,
                    width: N,
                    height: T,
                    keepOpen: A,
                    interactive: L = !0,
                    analyticsSource: v,
                    onClose: x
                } = e, R = (0, E.useSortedGuildIdsForSoundboard)(n, !0), M = function(e) {
                    let [t, n] = (0, r.useStateFromStoresArray)([C.default], () => [C.default.getSounds(), C.default.getFavorites()]);
                    return a.useMemo(() => {
                        let l = [],
                            a = [...e, S.DEFAULT_SOUND_GUILD_ID],
                            s = (e, a) => {
                                var s, r;
                                let o = null !== (r = null === (s = t.get(e)) || void 0 === s ? void 0 : s.sort((e, t) => i.default.compare(e.soundId, t.soundId))) && void 0 !== r ? r : [];
                                for (let e of o) {
                                    let t = n.has(e.soundId),
                                        s = t && a || !t && !a;
                                    s && l.push(e)
                                }
                            };
                        return a.forEach(e => s(e, !0)), a.forEach(e => s(e, !1)), l
                    }, [t, n, e])
                }(R), O = (0, m.useGuildIdsToFetchSoundsFor)(), y = a.useRef(null), [D, b] = a.useState(void 0), j = (0, r.useStateFromStores)([f.default], () => f.default.getMediaSessionId()), {
                    analyticsLocations: G,
                    AnalyticsLocationProvider: U
                } = (0, u.default)(o.default.SOUNDBOARD_WHEEL), P = a.useCallback(e => {
                    (0, p.playSound)(e, n.id, G), x()
                }, [G, n.id, x]);
                a.useEffect(() => {
                    h.maybeFetchSoundboardSounds(), c.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), a.useEffect(() => {
                    0 === M.length && 0 === O.length && x()
                }, [M.length, O, x]), a.useEffect(() => () => {
                    let e = y.current;
                    !A && null != e && P(e)
                }, [A, P]), (0, d.default)({
                    type: s.ImpressionTypes.POPOUT,
                    name: s.ImpressionNames.SOUNDBOARD_POPOUT,
                    properties: {
                        source: v,
                        guild_id: t,
                        media_session_id: j
                    }
                }, {
                    disableTrack: !L
                });
                let w = a.useCallback(e => {
                        y.current = e, b(null == e ? void 0 : e.soundId)
                    }, []),
                    F = a.useCallback(e => {
                        if (null == e) {
                            w(null);
                            return
                        }
                        let t = M[e];
                        null != t && w(t)
                    }, [w, M]),
                    B = a.useCallback(e => {
                        if (null == e) return;
                        let t = M[e];
                        null != t && P(t)
                    }, [M, P]),
                    V = a.useMemo(() => M.map(e => (0, l.jsx)(I.default, {
                        interactive: L,
                        className: _.soundButton,
                        sound: e,
                        focused: D === e.soundId,
                        channel: n
                    }, e.soundId)), [D, n, L, M]);
                return 0 === M.length ? null : (0, l.jsx)(U, {
                    children: (0, l.jsx)(g.default, {
                        wheelWidth: N,
                        wheelHeight: T,
                        itemWidth: 96,
                        itemHeight: 52,
                        showDeadZoneIndicator: !A,
                        activeItem: D,
                        onItemSelect: F,
                        onItemAction: B,
                        interactive: L,
                        children: V
                    })
                })
            }