            "use strict";
            n.r(t), n.d(t, {
                useClydeProfilesEnabled: function() {
                    return d
                },
                useClydeEnabled: function() {
                    return c
                },
                getClydeEnabled: function() {
                    return E
                },
                getClydeExperimentEnabled: function() {
                    return f
                },
                canUseCustomClydeProfiles: function() {
                    return h
                }
            }), n("884691"), n("446674");
            var i = n("305961"),
                a = n("957255"),
                l = n("772051"),
                s = n("254927"),
                r = n("49111"),
                u = n("724210");

            function o(e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "1e9ccc_1",
                    a = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "",
                    s = l.default.useExperiment({
                        guildId: a,
                        location: i
                    }, {
                        autoTrackExposure: n
                    }).experimentState;
                return s
            }

            function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    i = o(e, t, n);
                return i === l.ClydeExperimentState.ClydeProfiles
            }

            function c(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = o(e, n);
                return _(i, e, t)
            }

            function _(e, t, n) {
                if (null == t) {
                    if (null != n && n.isPrivate()) {
                        if (n.hasFlag(u.ChannelFlags.CLYDE_AI)) return !0;
                        let e = (0, s.isClydeEnabledinGdms)();
                        if (!e) return !1;
                        let t = i.default.getGuildIds().some(e => f(i.default.getGuild(e)));
                        return t
                    }
                    return !1
                }
                return null != e && e !== l.ClydeExperimentState.None && a.default.can(r.Permissions.USE_CLYDE_AI, n)
            }

            function E(e, t) {
                var n;
                let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    a = null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : "",
                    s = l.default.getCurrentConfig({
                        guildId: a,
                        location: "1e9ccc_2"
                    }, {
                        autoTrackExposure: i
                    }).experimentState;
                return _(s, e, t)
            }

            function f(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = p(e, t);
                return n !== l.ClydeExperimentState.None
            }

            function h(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return p(e, t) === l.ClydeExperimentState.ClydeProfiles
            }

            function p(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (null == e) return !1;
                let n = e.id;
                return l.default.getCurrentConfig({
                    guildId: n,
                    location: "1e9ccc_4"
                }, {
                    autoTrackExposure: t
                }).experimentState
            }