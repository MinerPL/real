            "use strict";
            s.r(t), s.d(t, {
                deepLinkRouteIfLanded: function() {
                    return u
                },
                deepLinkRouteIfLandedAndNotAuthed: function() {
                    return o
                }
            });
            var a = s("43982"),
                n = s("393414"),
                r = s("271938"),
                l = s("773336"),
                i = s("49111");
            let u = l.isPlatformEmbedded ? i.NOOP : (e, t) => {
                    if (!(0, n.hasNavigated)()) return a.default.request(i.RPCCommands.DEEP_LINK, {
                        type: e,
                        params: t
                    })
                },
                o = l.isPlatformEmbedded ? i.NOOP : (e, t) => {
                    if (!r.default.isAuthenticated()) return u(e, {
                        ...t || {},
                        fingerprint: r.default.getFingerprint()
                    })
                }