            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("446674"),
                a = n("42203"),
                s = n("316133"),
                i = n("379881"),
                r = n("49111");

            function o(e) {
                let t = (0, l.useStateFromStoresObject)([s.default, a.default, i.default], () => {
                    if (e !== r.FAVORITES) return s.default.getVoiceStates(e);
                    let t = i.default.getFavoriteChannels(),
                        n = {};
                    for (let e in t) {
                        let t = a.default.getChannel(e);
                        null != t && (n[e] = s.default.getVoiceStatesForChannel(t))
                    }
                    return n
                }, [e]);
                return t
            }