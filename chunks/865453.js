            "use strict";
            n.r(t), n.d(t, {
                useTrackOpenPopout: function() {
                    return m
                }
            });
            var l = n("884691"),
                a = n("913144"),
                s = n("716241"),
                i = n("412745"),
                r = n("42203"),
                o = n("18494"),
                u = n("599110"),
                d = n("958706"),
                c = n("49111");
            let m = e => {
                let {
                    emojiId: t,
                    currentGuildId: n,
                    popoutData: m,
                    emojiSourceGuildId: f,
                    nonce: h,
                    demoMode: p
                } = e, {
                    current: g
                } = l.useRef({
                    guild_id: n,
                    emoji_id: t,
                    ...(0, s.collectChannelAnalyticsMetadata)(r.default.getChannel(o.default.getChannelId(n)))
                }), E = null != m && [i.EmojiPopoutType.ADD_PACK, i.EmojiPopoutType.REMOVE_PACK, i.EmojiPopoutType.GET_PREMIUM_INVENTORY_ENABLED].includes(m.type);
                return l.useEffect(() => {
                    var e;
                    a.default.dispatch({
                        type: "EMOJI_INTERACTION_INITIATED",
                        interaction: d.EmojiInteractionPoint.TrackOpenPopoutUsed
                    }), !p && u.default.track(c.AnalyticEvents.OPEN_POPOUT, {
                        type: null !== (e = null == m ? void 0 : m.analyticsType) && void 0 !== e ? e : "Standard Emoji Popout",
                        inventory_pack_id: E ? f : void 0,
                        nonce: h,
                        ...g
                    })
                }, []), g
            }