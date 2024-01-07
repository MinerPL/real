            "use strict";
            n.r(t), n.d(t, {
                ack: function() {
                    return c
                },
                ackChannel: function() {
                    return _
                },
                bulkAck: function() {
                    return f
                },
                localAck: function() {
                    return E
                },
                enableAutomaticAck: function() {
                    return h
                },
                disableAutomaticAck: function() {
                    return g
                },
                ackGuildFeature: function() {
                    return p
                },
                ackUserFeature: function() {
                    return I
                }
            }), n("222007"), n("424973");
            var i = n("249654"),
                r = n("913144"),
                s = n("401690"),
                o = n("233069"),
                u = n("42203"),
                a = n("245997"),
                l = n("697218"),
                d = n("49111");

            function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = arguments.length > 3 ? arguments[3] : void 0,
                    s = arguments.length > 4 ? arguments[4] : void 0;
                r.default.dispatch({
                    type: "CHANNEL_ACK",
                    channelId: e,
                    messageId: i,
                    immediate: t,
                    force: n,
                    context: d.CURRENT_APP_CONTEXT,
                    location: s
                })
            }

            function _(e) {
                e.isCategory() ? ! function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = u.default.getChannel(e);
                    if (null == i || null == i.guild_id) return;
                    let r = a.default.getCategories(i.guild_id);
                    if (null == r[e]) return;
                    let l = r[e].filter(e => {
                            let {
                                channel: t
                            } = e;
                            return (0, o.isGuildReadableType)(t.type)
                        }).map(e => {
                            let {
                                channel: t
                            } = e;
                            return t.id
                        }),
                        d = [...l];
                    for (let e of (l.forEach(e => {
                            let t = s.default.getActiveJoinedThreadsForParent(i.guild_id, e);
                            for (let e in t) d.push(e)
                        }), d)) c(e, t, n)
                }(e.id, !0, !0) : e.isForumLikeChannel() ? c(e.id, !0, !0, i.default.fromTimestamp(Date.now())) : c(e.id, !0, !0)
            }

            function f(e, t) {
                r.default.dispatch({
                    type: "BULK_ACK",
                    channels: e,
                    context: d.CURRENT_APP_CONTEXT,
                    onFinished: t
                })
            }

            function E(e) {
                r.default.dispatch({
                    type: "CHANNEL_LOCAL_ACK",
                    channelId: e
                })
            }

            function h(e, t) {
                r.default.dispatch({
                    type: "ENABLE_AUTOMATIC_ACK",
                    channelId: e,
                    windowId: t
                })
            }

            function g(e, t) {
                r.default.dispatch({
                    type: "DISABLE_AUTOMATIC_ACK",
                    channelId: e,
                    windowId: t
                })
            }

            function p(e, t, n) {
                r.default.dispatch({
                    type: "GUILD_FEATURE_ACK",
                    id: e,
                    ackType: t,
                    ackedId: n,
                    local: !1
                })
            }

            function I(e, t) {
                var n;
                let i = null === (n = l.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                null != i && r.default.dispatch({
                    type: "USER_NON_CHANNEL_ACK",
                    ackType: e,
                    ackedId: t,
                    local: !1
                })
            }