            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("803182"),
                a = n("872717"),
                l = n("913144"),
                s = n("619443"),
                r = n("233069"),
                u = n("42203"),
                o = n("18494"),
                d = n("49111"),
                c = n("724210");
            let _ = {},
                E = !1;

            function f(e) {
                if (null == e || e === c.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID || (0, c.isStaticChannelRoute)(e) || null != u.default.getChannel(e)) return Promise.resolve();
                if (E || (E = !0, l.default.subscribe("CONNECTION_OPEN", () => {
                        _ = {};
                        let e = o.default.getChannelId(),
                            t = u.default.getChannel(e);
                        null != e && null == t && f(e)
                    })), !s.default.isConnected()) return Promise.resolve();
                let t = _[e];
                if (null != t) return "LOADING" === t.type ? t.promise : Promise.resolve();
                let n = (0, i.matchPath)(location.pathname, {
                        path: d.Routes.CHANNEL(":guildId", ":channelId", ":messageId"),
                        exact: !0
                    }),
                    h = a.default.get(d.Endpoints.CHANNEL(e)).then(t => {
                        let {
                            body: i
                        } = t;
                        if (_[e] = {
                                type: "LOADED"
                            }, r.THREAD_CHANNEL_TYPES.has(i.type)) {
                            var a;
                            l.default.dispatch({
                                type: "THREAD_CREATE",
                                channel: (0, r.createChannelRecordFromServer)(i),
                                messageId: null == n ? void 0 : null === (a = n.params) || void 0 === a ? void 0 : a.messageId
                            })
                        }
                    }).catch(() => {
                        var t;
                        _[e] = {
                            type: "NOT_FOUND"
                        }, l.default.dispatch({
                            type: "CHANNEL_DELETE",
                            channel: {
                                id: e,
                                guild_id: null == n ? void 0 : null === (t = n.params) || void 0 === t ? void 0 : t.guildId,
                                parent_id: void 0
                            }
                        })
                    });
                return _[e] = {
                    type: "LOADING",
                    promise: h
                }, h
            }
            var h = {
                loadThread: f
            }