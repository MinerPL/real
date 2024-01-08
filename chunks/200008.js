            "use strict";
            n.r(t), n.d(t, {
                addFavoriteChannel: function() {
                    return E
                },
                removeFavoriteChannel: function() {
                    return c
                },
                setFavoriteChannelNickname: function() {
                    return C
                },
                addFavoriteCategory: function() {
                    return N
                },
                removeFavoriteCategory: function() {
                    return _
                },
                updateFavoriteChannels: function() {
                    return A
                },
                updateFavoriteChannelParent: function() {
                    return S
                },
                toggleFavoriteServerMuted: function() {
                    return T
                }
            }), n("222007");
            var a = n("249654"),
                i = n("151426"),
                r = n("872173"),
                u = n("42203"),
                s = n("957255"),
                l = n("379881"),
                o = n("843455");

            function d() {
                let e = l.default.getFavoriteChannels(),
                    t = 1;
                for (let n in e) t = Math.max(t, e[n].order);
                return t + 1
            }

            function f(e) {
                for (let t in e) {
                    let n = e[t];
                    if (null == n) {
                        delete e[t];
                        continue
                    }
                    if (n.type === i.FavoriteChannelType.CATEGORY) continue;
                    let a = u.default.getChannel(t);
                    if (null == a || !a.isPrivate() && !s.default.can(o.Permissions.VIEW_CHANNEL, a)) {
                        delete e[t];
                        continue
                    }
                }
            }

            function E(e, t) {
                let n = l.default.isFavorite(e);
                !n && r.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e] = i.FavoriteChannel.create({
                        nickname: "",
                        type: i.FavoriteChannelType.REFERENCE_ORIGINAL,
                        position: d(),
                        parentId: null != t ? t : "0"
                    }), f(n.favoriteChannels)
                }, r.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function c(e) {
                let t = l.default.getFavorite(e);
                null != t && r.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    if (delete n.favoriteChannels[e], t.type === i.FavoriteChannelType.CATEGORY)
                        for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = "0");
                    f(n.favoriteChannels)
                }, r.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function C(e, t) {
                let n = l.default.isFavorite(e);
                n && r.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e].nickname = null != t ? t : ""
                }, r.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function N(e) {
                let t = a.default.fromTimestamp(Date.now());
                r.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[t] = i.FavoriteChannel.create({
                        nickname: e,
                        type: i.FavoriteChannelType.CATEGORY,
                        position: d(),
                        parentId: "0"
                    })
                }, r.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function _(e) {
                c(e)
            }

            function A(e) {
                r.PreloadedUserSettingsActionCreators.updateAsync("favorites", t => {
                    for (let a of e)
                        if (null != a.position && (t.favoriteChannels[a.id].position = a.position), void 0 !== a.parent_id) {
                            var n;
                            t.favoriteChannels[a.id].parentId = null !== (n = a.parent_id) && void 0 !== n ? n : "0"
                        }
                }, r.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function S(e, t) {
                r.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e].parentId = null != t ? t : "0"
                }, r.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function T() {
                r.PreloadedUserSettingsActionCreators.updateAsync("favorites", e => {
                    e.muted = !e.muted
                }, r.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }