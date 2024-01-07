            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("316693"),
                s = n("446674"),
                i = n("923959"),
                l = n("957255"),
                r = n("49111");

            function o(e) {
                let t = (0, s.useStateFromStores)([i.default], () => {
                    var t;
                    return null !== (t = i.default.getChannels(e)[i.GUILD_SELECTABLE_CHANNELS_KEY]) && void 0 !== t ? t : []
                }, [e]);
                if (0 === t.length) return 0;
                let n = t.filter(e => {
                    let {
                        channel: t
                    } = e;
                    return l.default.can(a.default.combine(r.Permissions.SEND_MESSAGES, r.Permissions.VIEW_CHANNEL), t)
                });
                return n.length
            }