            "use strict";
            n.r(t), n.d(t, {
                canAccessGuildMemberModViewWithExperiment: function() {
                    return c
                },
                useCanAccessGuildMemberModView: function() {
                    return f
                }
            }), n("222007");
            var a = n("316693"),
                l = n("446674"),
                s = n("305961"),
                i = n("697218"),
                r = n("991170"),
                u = n("209700"),
                o = n("562980");
            let d = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.default, i.default],
                        [n, l] = t,
                        u = n.getGuild(e);
                    if (null == u) return !1;
                    let d = l.getCurrentUser(),
                        c = a.default.hasAny(r.default.computePermissions({
                            user: d,
                            context: u,
                            checkElevated: !1
                        }), o.MemberSafetyPagePermissions);
                    return c
                },
                c = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        a = d(e),
                        l = (0, u.isInGuildMemberModViewExperiment)(e, {
                            autoTrackExposure: t,
                            disable: !a,
                            location: n
                        });
                    return a && l
                };

            function f(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    a = (0, l.useStateFromStores)([s.default, i.default], () => d(e, [s.default, i.default]), [e]),
                    r = (0, u.useGuildMemberModViewExperiment)(e, {
                        autoTrackExposure: t,
                        disable: !a,
                        location: n
                    });
                return a && r
            }