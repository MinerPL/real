            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return c
                }
            });
            var l = a("118810"),
                n = a("887446"),
                s = a("713810"),
                i = a("185014"),
                d = a("60036"),
                r = a("2804"),
                u = a("515631");

            function o(e, t, a) {
                let {
                    feedItemId: d,
                    guildId: o,
                    channelId: c,
                    messageId: f
                } = a, m = e.target;
                for (;
                    (0, l.isElement)(m);) {
                    var h, E;
                    if (m === t) break;
                    let e = null !== (E = null === (h = m.getAttribute("data-role")) || void 0 === h ? void 0 : h.toUpperCase()) && void 0 !== E ? E : m.tagName;
                    if ("A" === e) return (0, s.trackFeedItemInteracted)({
                        feed_item_type: (0, r.getFeedItemTypeFromId)(d),
                        feed_item_id: d,
                        load_id: i.default.getLoadId(o),
                        action_type: u.FeedItemInteractionType.LINK_CLICKED,
                        guild_id: o,
                        channel_id: c,
                        message_id: f,
                        home_session_id: n.default.getHomeSessionId(o)
                    }), !0;
                    if ("IMG" === e) return (0, s.trackFeedItemInteracted)({
                        feed_item_type: (0, r.getFeedItemTypeFromId)(d),
                        feed_item_id: d,
                        load_id: i.default.getLoadId(o),
                        action_type: u.FeedItemInteractionType.IMAGE_CLICKED,
                        guild_id: o,
                        channel_id: c,
                        message_id: f,
                        home_session_id: n.default.getHomeSessionId(o)
                    }), !0;
                    else if ("BUTTON" === e || "button" === m.getAttribute("role")) {
                        let e = u.FeedItemInteractionType.BUTTON_CLICKED;
                        if ("view-more-replies" === m.getAttribute("data-action")) e = u.FeedItemInteractionType.VIEW_MORE_REPLIES;
                        return (0, s.trackFeedItemInteracted)({
                            feed_item_type: (0, r.getFeedItemTypeFromId)(d),
                            feed_item_id: d,
                            load_id: i.default.getLoadId(o),
                            action_type: e,
                            guild_id: o,
                            channel_id: c,
                            message_id: f,
                            home_session_id: n.default.getHomeSessionId(o)
                        }), !0
                    }
                    m = m.parentNode
                }
                return !1
            }

            function c(e) {
                let {
                    guildId: t,
                    channelId: a,
                    feedItemId: l,
                    onChannelClick: c,
                    onContentClick: f
                } = e, m = (e, o) => {
                    var c;
                    e.stopPropagation();
                    let m = i.default.getItem(t, l);
                    null != m && ((0, s.trackFeedItemInteracted)({
                        feed_item_type: (0, r.getFeedItemTypeFromId)(l),
                        feed_item_id: l,
                        load_id: i.default.getLoadId(t),
                        action_type: u.FeedItemInteractionType.MESSAGE_CLICKED,
                        guild_id: t,
                        channel_id: a,
                        message_id: null !== (c = null == o ? void 0 : o.id) && void 0 !== c ? c : (0, d.default)(m).id,
                        home_session_id: n.default.getHomeSessionId(t)
                    }), f(o))
                };
                return {
                    handleMessageClick: (e, n, s) => {
                        e.stopPropagation(), !o(e, n, {
                            feedItemId: l,
                            guildId: t,
                            channelId: a,
                            messageId: s.id
                        }) && m(e, s)
                    },
                    handleChannelClick: e => {
                        e.stopPropagation(), (0, s.trackFeedItemInteracted)({
                            feed_item_type: (0, r.getFeedItemTypeFromId)(l),
                            feed_item_id: l,
                            load_id: i.default.getLoadId(t),
                            action_type: u.FeedItemInteractionType.MESSAGE_CHANNEL_CLICKED,
                            guild_id: t,
                            channel_id: a,
                            home_session_id: n.default.getHomeSessionId(t)
                        }), c()
                    },
                    handleCardClick: (e, n) => {
                        !o(e, n, {
                            feedItemId: l,
                            guildId: t,
                            channelId: a
                        }) && m(e)
                    },
                    handleItemClick: m
                }
            }