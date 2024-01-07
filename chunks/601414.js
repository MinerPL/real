            "use strict";
            a.r(t), a.d(t, {
                useShowFeedback: function() {
                    return E
                },
                getDescriptionFromReason: function() {
                    return g
                },
                useGuildFeedFeedback: function() {
                    return I
                }
            }), a("222007");
            var l = a("884691"),
                n = a("446674"),
                s = a("95410"),
                i = a("206230"),
                d = a("185014"),
                r = a("760190"),
                u = a("599110"),
                o = a("677315"),
                c = a("887446"),
                f = a("302120"),
                m = a("49111"),
                h = a("782340");

            function E() {
                let e = l.useMemo(() => r.default.getExperimentBucket(o.GuildHomeFeedbackExperiment.definition.id), []),
                    [t, a] = l.useState(!1),
                    n = l.useMemo(() => s.default.get(f.GUILD_FEED_FEEDBACK_LAST_SEEN), [t]),
                    i = l.useMemo(() => 100 * Math.random() < e && (null == n || Date.now() - n > f.GUILD_FEED_FEEDBACK_TIME_OUT), [e, n]);
                return {
                    showFeedback: i,
                    setOnDismissedFeedback: a
                }
            }

            function g(e) {
                switch (e) {
                    case f.GuildFeedFeedbackReason.ALREADY_SAW:
                        return h.default.Messages.GUILD_FEED_FEEDBACK_OPTION_ALREADY_SAW;
                    case f.GuildFeedFeedbackReason.IRRELEVANT:
                        return h.default.Messages.GUILD_FEED_FEEDBACK_OPTION_IRRELEVANT;
                    case f.GuildFeedFeedbackReason.TOO_OLD:
                        return h.default.Messages.GUILD_FEED_FEEDBACK_OPTION_TOO_OLD;
                    case f.GuildFeedFeedbackReason.CONFUSING_OR_RANDOM:
                        return h.default.Messages.GUILD_FEED_FEEDBACK_OPTION_CONFUSING;
                    case f.GuildFeedFeedbackReason.INAPPROPRIATE:
                        return h.default.Messages.GUILD_FEED_FEEDBACK_OPTION_INAPPROPRIATE;
                    case f.GuildFeedFeedbackReason.UNINTERESTING:
                        return h.default.Messages.GUILD_FEED_FEEDBACK_OPTION_UNINTERESTING;
                    case f.GuildFeedFeedbackReason.ENTERTAINING:
                        return h.default.Messages.GUILD_FEED_FEEDBACK_OPTION_ENTERTAINING;
                    case f.GuildFeedFeedbackReason.INFORMATIVE:
                        return h.default.Messages.GUILD_FEED_FEEDBACK_OPTION_INFORMATIVE;
                    case f.GuildFeedFeedbackReason.USEFUL:
                        return h.default.Messages.GUILD_FEED_FEEDBACK_OPTION_USEFUL;
                    case f.GuildFeedFeedbackReason.OTHER:
                        return h.default.Messages.GUILD_FEED_FEEDBACK_OTHER_REASON;
                    case f.GuildFeedFeedbackReason.FUNNY:
                        return h.default.Messages.GUILD_FEED_FEEDBACK_OPTION_FUNNY;
                    default:
                        return null
                }
            }

            function I(e) {
                let {
                    guildId: t,
                    guildFeedItem: a,
                    setOnDismissFeedback: r
                } = e, [o, h] = l.useState(), [E, I] = l.useState(new Set), [_, x] = l.useState(), [v, S] = l.useState(!1), [C, N] = l.useState(!1), [p, T] = l.useState(!1), A = l.useCallback(e => {
                    h(e), T(!0), S(!1), setTimeout(() => {
                        T(!1)
                    }, f.GUILD_FEED_FEEDBACK_ANIMATION_DURATION + 150)
                }, [h, S, T]), j = l.useCallback(e => {
                    e === f.GuildFeedFeedbackReason.OTHER && E.has(f.GuildFeedFeedbackReason.OTHER) && x(null);
                    let t = new Set(E);
                    t.has(e) ? t.delete(e) : t.add(e), I(t)
                }, [E, x, I]), M = l.useCallback(() => {
                    S(!0), I(new Set)
                }, [S, I]), D = l.useCallback(e => {
                    (function(e) {
                        let {
                            guildId: t,
                            guildFeedItem: a,
                            dismissed: l,
                            selectedRating: n = null,
                            selectedReasons: s = null,
                            userFeedback: i = null
                        } = e, r = Array.from(null != s ? s : []);
                        u.default.track(m.AnalyticEvents.HOME_FEEDBACK_SUBMITTED, {
                            guild_id: t,
                            home_session_id: c.default.getHomeSessionId(t),
                            feed_item_id: a.id,
                            feed_item_position: 0,
                            dismissed: l,
                            report_name: "feed_item_feedback",
                            load_id: d.default.getLoadId(t),
                            rating: n,
                            reason_codes: r,
                            reason_descriptions: r.map(e => {
                                var t;
                                return null !== (t = g(e)) && void 0 !== t ? t : ""
                            }),
                            user_feedback: i
                        })
                    })({
                        guildId: t,
                        guildFeedItem: a,
                        dismissed: e,
                        selectedRating: o,
                        selectedReasons: E,
                        userFeedback: _
                    })
                }, [t, a, o, E, _]), F = l.useCallback(() => {
                    s.default.set(f.GUILD_FEED_FEEDBACK_LAST_SEEN, Date.now()), null == r || r(!0), !C && D(!0)
                }, [D, r, C]), L = l.useCallback(() => {
                    D(!1), N(!0), s.default.set(f.GUILD_FEED_FEEDBACK_LAST_SEEN, Date.now())
                }, [D]), R = l.useMemo(() => E.size > 0 && (!E.has(f.GuildFeedFeedbackReason.OTHER) || null != _ && "" !== _), [E, _]), b = (0, n.useStateFromStores)([i.default], () => i.default.useReducedMotion), G = l.useRef(!1);
                return l.useEffect(() => () => {
                    G.current = !0
                }, []), l.useEffect(() => () => {
                    G.current && null != o && F()
                }, [o, F]), {
                    selectedRating: o,
                    setSelectedRating: A,
                    selectedReasons: E,
                    setSelectedReasons: j,
                    setUserFeedback: x,
                    backPressed: v,
                    onBackPressed: M,
                    onSubmitPressed: L,
                    onClosePressed: F,
                    showSubmitted: C,
                    isAnimating: p,
                    canSubmit: R,
                    useReducedMotion: b
                }
            }