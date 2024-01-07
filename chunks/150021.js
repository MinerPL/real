            "use strict";
            i.r(t), i.d(t, {
                setDiversityColor: function() {
                    return _
                },
                fetchEmoji: function() {
                    return S
                },
                uploadEmoji: function() {
                    return h
                },
                deleteEmoji: function() {
                    return C
                },
                updateEmoji: function() {
                    return T
                },
                favoriteEmoji: function() {
                    return A
                },
                unfavoriteEmoji: function() {
                    return y
                }
            }), i("424973");
            var n = i("917351"),
                l = i.n(n),
                s = i("872717"),
                a = i("750028"),
                r = i("913144"),
                o = i("599417"),
                u = i("385976"),
                c = i("867805"),
                d = i("619443"),
                f = i("872173"),
                E = i("341542"),
                m = i("404118"),
                I = i("49111"),
                p = i("397336"),
                g = i("782340");

            function _(e) {
                f.PreloadedUserSettingsActionCreators.updateAsync("textAndImages", t => {
                    t.diversitySurrogate = a.StringValue.create(), t.diversitySurrogate.value = e
                }, p.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function S(e) {
                r.default.dispatch({
                    type: "EMOJI_FETCH",
                    guildId: e
                }), s.default.get({
                    url: I.Endpoints.GUILD_EMOJIS(e),
                    oldFormErrors: !0
                }).then(t => r.default.dispatch({
                    type: "EMOJI_FETCH_SUCCESS",
                    guildId: e,
                    emojis: t.body
                }), () => r.default.dispatch({
                    type: "EMOJI_FETCH_FAILURE",
                    guildId: e
                }))
            }

            function h(e) {
                let {
                    guildId: t,
                    image: i,
                    name: n,
                    roles: l
                } = e;
                return r.default.dispatch({
                    type: "EMOJI_UPLOAD_START",
                    guildId: t
                }), s.default.post({
                    url: I.Endpoints.GUILD_EMOJIS(t),
                    body: {
                        image: i,
                        name: n,
                        roles: l
                    },
                    oldFormErrors: !0
                }).then(() => r.default.dispatch({
                    type: "EMOJI_UPLOAD_STOP",
                    guildId: t
                }), e => (r.default.dispatch({
                    type: "EMOJI_UPLOAD_STOP",
                    guildId: t
                }), Promise.reject(e)))
            }

            function C(e, t) {
                return r.default.dispatch({
                    type: "EMOJI_DELETE",
                    guildId: e,
                    emojiId: t
                }), s.default.delete({
                    url: I.Endpoints.GUILD_EMOJI(e, t),
                    oldFormErrors: !0
                })
            }
            async function T(e) {
                let {
                    guildId: t,
                    emojiId: i,
                    name: n,
                    roles: l
                } = e;
                try {
                    return await s.default.patch({
                        url: I.Endpoints.GUILD_EMOJI(t, i),
                        body: {
                            name: n,
                            roles: l
                        },
                        oldFormErrors: !0
                    })
                } catch (e) {
                    throw new o.default(e)
                }
            }

            function N(e) {
                return E.default.totalUnavailableGuilds > 0 || !d.default.isConnected() ? e : e.filter(e => {
                    var t;
                    let i = null !== (t = u.default.getCustomEmojiById(e)) && void 0 !== t ? t : c.default.getByName(e);
                    return null != i
                })
            }

            function A(e) {
                var t;
                (function(e) {
                    null != e && f.FrecencyUserSettingsActionCreators.updateAsync("favoriteEmojis", t => (t.emojis = N(t.emojis), l.size(t.emojis) >= p.MAX_FAVORITES) ? (m.default.show({
                        title: g.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
                        body: g.default.Messages.FAVORITES_LIMIT_REACHED_BODY.format({
                            count: p.MAX_FAVORITES
                        })
                    }), !1) : !t.emojis.includes(e) && void t.emojis.push(e), p.UserSettingsDelay.INFREQUENT_USER_ACTION)
                })(null !== (t = e.id) && void 0 !== t ? t : e.name)
            }

            function y(e) {
                var t;
                (function(e) {
                    null != e && f.FrecencyUserSettingsActionCreators.updateAsync("favoriteEmojis", t => {
                        if (!t.emojis.includes(e)) return !1;
                        t.emojis = t.emojis.filter(t => e !== t), t.emojis = N(t.emojis)
                    }, p.UserSettingsDelay.INFREQUENT_USER_ACTION)
                })(null !== (t = e.id) && void 0 !== t ? t : e.name)
            }