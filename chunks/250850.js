            "use strict";
            s.r(t), s.d(t, {
                getForumPostSeenManagerId: function() {
                    return u
                },
                markForumPostItemAsSeen: function() {
                    return r
                },
                markForumPostItemAsUnseen: function() {
                    return h
                },
                default: function() {
                    return i
                }
            }), s("424973"), s("222007");
            var i, n = s("938237"),
                a = s("395118"),
                d = s("867965"),
                l = s("318321");

            function u(e) {
                return "".concat(a.AnalyticsFeedTypes.FORUM_CHANNEL, "_").concat(e)
            }

            function r(e, t, s) {
                (0, n.markAnalyticsFeedItemSeen)(u(e), t, s)
            }

            function h(e, t, s) {
                (0, n.markAnalyticsFeedItemUnseen)(u(e), t, s)
            }
            i = class extends a.AnalyticsFeedItemSeenManager {
                constructor({
                    guildId: e,
                    channelId: t,
                    windowId: s,
                    isPaused: i
                }) {
                    super({
                        windowId: s,
                        isPaused: i,
                        id: u(t)
                    }), this.createFlushSeenItemsFunction = e => {
                        let t = this.trackedFeedItems,
                            s = this.channelId,
                            i = this.guildId,
                            n = this.sessionId,
                            a = {
                                guildId: i,
                                channelId: s,
                                sessionId: n,
                                trackedFeedItems: t,
                                isForcedFlush: null != e
                            };
                        return () => (function(e) {
                            let {
                                guildId: t,
                                channelId: s,
                                sessionId: i,
                                trackedFeedItems: n,
                                isForcedFlush: a
                            } = e, l = [], u = [];
                            for (let e of Object.keys(n)) {
                                let t = n[e],
                                    s = t.computeSeenTimeDestructive(a);
                                s > 0 && (l.push(e), u.push(s))
                            }
                            0 !== l.length && (0, d.trackForumChannelSeenBatch)({
                                guildId: t,
                                channelId: s,
                                sessionId: i,
                                postIds: l,
                                additionalTimes: u
                            })
                        })(a)
                    }, this.guildId = e, this.channelId = t, this.sessionId = (0, l.getForumChannelSessionId)(t)
                }
            }