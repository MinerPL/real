            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            }), s("424973");
            var a = s("446674"),
                n = s("648747"),
                l = s("161188"),
                i = s("42203"),
                r = s("49111");

            function o(e) {
                return (0, a.useStateFromStoresArray)([l.default, i.default], () => {
                    var t;
                    let s = (null !== (t = l.default.getTopChannelIds(e.id)) && void 0 !== t ? t : []).map(e => i.default.getChannel(e)).filter(t => null == t || t.id !== e.rulesChannelId),
                        a = [],
                        o = 0;
                    return s.forEach(e => {
                        if (e.type === r.ChannelTypes.GUILD_ANNOUNCEMENT) {
                            if (o >= 2) return;
                            o++
                        }
                        a.length < 5 && !a.includes(e) && a.push(e)
                    }), a.sort((t, s) => ((0, n.canChannelBeDefault)(e.id, s.id) ? 1 : 0) - ((0, n.canChannelBeDefault)(e.id, t.id) ? 1 : 0)), a
                })
            }