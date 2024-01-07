            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return d
                }
            });
            var l = a("298386"),
                n = a("446674"),
                s = a("923959"),
                i = a("282109");

            function d(e) {
                let t = (0, n.useStateFromStores)([s.default], () => s.default.getChannels(e)),
                    a = t[s.GUILD_SELECTABLE_CHANNELS_KEY],
                    d = (0, n.useStateFromStoresArray)([i.default], () => a.filter(e => {
                        let {
                            channel: t
                        } = e;
                        return l.ChannelTypesSets.READABLE.has(t.type) && !l.ChannelTypesSets.GUILD_VOCAL.has(t.type)
                    }).filter(t => {
                        let {
                            channel: a
                        } = t;
                        return i.default.isChannelMuted(e, a.id) || i.default.isCategoryMuted(e, a.id)
                    }), [e, a]);
                return d.length
            }