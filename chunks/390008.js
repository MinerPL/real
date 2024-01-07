            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("446674"),
                i = a("77078"),
                d = a("162771"),
                u = a("498139"),
                s = a("49111"),
                o = a("782340");

            function r(e) {
                let t = (0, l.useStateFromStores)([d.default], () => d.default.getGuildId()),
                    r = e.type === s.ChannelTypes.GUILD_CATEGORY,
                    {
                        isFavoritesPerk: c
                    } = (0, u.useFavoritesServerExperiment)("useChannelFavoriteSetNickname");
                return __OVERLAY__ || t !== s.FAVORITES ? null : (0, n.jsx)(i.MenuItem, {
                    id: "set-channel-nickname",
                    label: c && r ? o.default.Messages.FAVORITES_RENAME_CATEGORY : o.default.Messages.CHANGE_NICKNAME,
                    action: function() {
                        (0, i.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await a.el("353228").then(a.bind(a, "353228"));
                            return a => (0, n.jsx)(t, {
                                ...a,
                                channelId: e.id,
                                heading: c && r ? o.default.Messages.FAVORITES_RENAME_CATEGORY : o.default.Messages.CHANGE_NICKNAME,
                                formTitle: c && r ? o.default.Messages.CATEGORY_NAME : o.default.Messages.NICKNAME,
                                allowReset: !(c && r)
                            })
                        })
                    }
                })
            }