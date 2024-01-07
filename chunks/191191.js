            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("759843"),
                a = n("446674"),
                u = n("77078"),
                d = n("812204"),
                c = n("685665"),
                f = n("428958"),
                p = n("538282"),
                m = n("872173"),
                h = n("945956"),
                E = n("305122"),
                S = n("235004"),
                g = n("534108"),
                C = n("808910");

            function T(e) {
                let {
                    guildId: t,
                    channel: n,
                    containerWidth: r,
                    onClose: T,
                    onSelect: v,
                    analyticsSource: y,
                    suppressPlaySound: x,
                    shouldShowUpsell: I = !0,
                    gridNotice: N,
                    autoWidth: _ = !1,
                    soundButtonOverlay: A,
                    listPadding: R,
                    renderHeader: O,
                    defaultSoundsOnly: M
                } = e, k = (0, a.useStateFromStores)([S.default], () => S.default.isFetchingSounds() || S.default.isFetchingDefaultSounds()), b = (0, a.useStateFromStores)([h.default], () => h.default.getMediaSessionId()), {
                    AnalyticsLocationProvider: P
                } = (0, c.default)(d.default.SOUNDBOARD_POPOUT);
                return (0, f.default)({
                    type: s.ImpressionTypes.POPOUT,
                    name: s.ImpressionNames.SOUNDBOARD_POPOUT,
                    properties: {
                        source: y,
                        guild_id: t,
                        media_session_id: b
                    }
                }), i.useEffect(() => {
                    E.maybeFetchSoundboardSounds(), m.FrecencyUserSettingsActionCreators.loadIfNecessary(), (0, p.setSearchQuery)("")
                }, []), (0, l.jsx)(P, {
                    children: (0, l.jsx)("div", {
                        className: o(C.picker, {
                            [C.fetching]: k,
                            [C.autoWidth]: _
                        }),
                        children: k ? (0, l.jsx)(u.Spinner, {}) : (0, l.jsx)(g.default, {
                            guildId: t,
                            channel: n,
                            onClose: T,
                            onSelect: v,
                            containerWidth: r,
                            suppressPlaySound: x,
                            shouldShowUpsell: I,
                            gridNotice: N,
                            soundButtonOverlay: A,
                            listPadding: R,
                            renderHeader: O,
                            defaultSoundsOnly: M
                        })
                    })
                })
            }