            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return g
                }
            });
            var n = a("884691"),
                s = a("714617"),
                l = a.n(s),
                r = a("995008"),
                o = a.n(r),
                i = a("759843"),
                u = a("913144"),
                d = a("42203"),
                c = a("18494"),
                f = a("162771"),
                C = a("599110"),
                T = a("716241"),
                E = a("939011");
            let _ = (0, i.trackMaker)({
                analyticEventConfigs: C.AnalyticEventConfigs,
                dispatcher: u.default,
                TRACK_ACTION_NAME: "TRACK"
            });

            function g(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        disableTrack: !1,
                        trackOnInitialLoad: !1
                    },
                    a = arguments.length > 2 ? arguments[2] : void 0,
                    s = n.useRef(),
                    r = n.useRef();
                n.useEffect(() => {
                    let n = !l(s.current, e);
                    n && (s.current = e);
                    let u = !l(r.current, a);
                    if (u && (r.current = a), !n && !u) return;
                    let g = {
                        ...e,
                        sequenceId: o("impression_")
                    };
                    return ! function(e) {
                        var t, a;
                        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            {
                                name: s,
                                type: l,
                                properties: r
                            } = e;
                        if (e.type === i.ImpressionTypes.MODAL && null == e.name && (0, E.getImpressionStack)().some(e => {
                                var t;
                                return null === (t = e._stackContext) || void 0 === t ? void 0 : t.isSlide
                            })) return;
                        (0, E.setCurrentImpression)(e);
                        let o = null !== (t = null == r ? void 0 : r.guild_id) && void 0 !== t ? t : f.default.getGuildId(),
                            u = null !== (a = null == r ? void 0 : r.channel_id) && void 0 !== a ? a : c.default.getChannelId(o),
                            g = (0, C.expandEventProperties)({
                                impression_type: l,
                                location: (0, E.getLocation)(),
                                ...(0, T.collectGuildAnalyticsMetadata)(o),
                                ...(0, T.collectChannelAnalyticsMetadata)(d.default.getChannel(u)),
                                ...r
                            });
                        if (n) {
                            (0, E.setDebugTrackedData)(null, null);
                            return
                        }
                        null != s && null != l && ((0, C.debugLogEvent)(s, g), _(s, g)), (0, E.setDebugTrackedData)(s, g)
                    }(g, t.disableTrack), () => {
                        null != g && (0, E.cleanupImpression)(g)
                    }
                }, t.trackOnInitialLoad ? [] : void 0)
            }