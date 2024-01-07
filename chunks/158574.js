            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var a = l("866227"),
                n = l.n(a),
                u = l("851387"),
                i = {
                    async setCommunicationDisabledDuration(e, t, l, a, i) {
                        let s = null != l ? n().add(l, "s").toISOString() : null;
                        await u.default.setCommunicationDisabledUntil({
                            guildId: e,
                            userId: t,
                            communicationDisabledUntilTimestamp: s,
                            duration: l,
                            reason: a,
                            location: i
                        })
                    }
                }