            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("446674"),
                s = n("271938"),
                i = n("42887"),
                l = n("800762"),
                r = e => (0, a.useStateFromStoresObject)([l.default, i.default, s.default], () => (function(e) {
                    var t;
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.default,
                        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.default,
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s.default,
                        o = null != e ? n.getVoiceState(e.getGuildId(), r.getId()) : null,
                        u = a.isSelfDeaf();
                    return {
                        selfDeaf: u,
                        deaf: null !== (t = null == o ? void 0 : o.deaf) && void 0 !== t && t
                    }
                })(e, l.default, i.default, s.default))