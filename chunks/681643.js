            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var s = l("679653"),
                u = l("42203"),
                i = l("27618"),
                n = l("697218"),
                r = l("375822"),
                a = l("49111");

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.default,
                    l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.default,
                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.default,
                    h = t.getChannel(e);
                if (null == h) return null;
                let d = (0, s.computeChannelName)(h, l, o);
                switch (h.type) {
                    case a.ChannelTypes.DM: {
                        let e = l.getUser(h.getRecipientId());
                        if (null == e) return null;
                        return {
                            type: r.AutocompleterResultTypes.USER,
                            record: e,
                            score: 0,
                            comparator: d
                        }
                    }
                    case a.ChannelTypes.GROUP_DM:
                        return {
                            type: r.AutocompleterResultTypes.GROUP_DM, record: h, score: 0, comparator: d
                        };
                    case a.ChannelTypes.GUILD_VOICE:
                    case a.ChannelTypes.GUILD_STAGE_VOICE:
                        return {
                            type: r.AutocompleterResultTypes.VOICE_CHANNEL, record: h, score: 0, comparator: d
                        };
                    default:
                        return {
                            type: r.AutocompleterResultTypes.TEXT_CHANNEL, record: h, score: 0, comparator: d
                        }
                }
            }