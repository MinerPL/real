            "use strict";
            n.r(t), n.d(t, {
                updateInviteStatus: function() {
                    return o
                },
                launchInviteGame: function() {
                    return u
                },
                acceptInvite: function() {
                    return d
                },
                clearUnseenInvites: function() {
                    return c
                },
                deleteInvite: function() {
                    return f
                },
                deleteAllInvites: function() {
                    return E
                }
            }), n("70102");
            var l = n("872717"),
                a = n("913144"),
                s = n("760850"),
                i = n("773336"),
                r = n("49111");
            async function o(e) {
                if (e.platform_type === r.PlatformTypes.XBOX) {
                    let t = e.parsed_launch_parameters.titleId,
                        n = e.parsed_launch_parameters.inviteToken;
                    if (!(0, i.isWindows)() || null == t || null == n) return;
                    let l = await h(t, !1),
                        s = await S(n);
                    a.default.dispatch({
                        type: "GAME_INVITE_UPDATE_STATUS",
                        inviteId: e.invite_id,
                        installed: l,
                        joinable: s
                    })
                } else throw Error("Unsupported invite platform " + e.platform_type)
            }
            async function u(e) {
                if (e.platform_type === r.PlatformTypes.XBOX) {
                    let t = e.parsed_launch_parameters.titleId;
                    return !!(0, i.isWindows)() && null != t && await _(t)
                }
                throw Error("Unsupported invite platform " + e.platform_type)
            }
            async function d(e) {
                if (e.platform_type === r.PlatformTypes.XBOX) {
                    let t = e.parsed_launch_parameters.inviteToken;
                    return !!(0, i.isWindows)() && null != t && await T(t)
                }
                throw Error("Unsupported invite platform " + e.platform_type)
            }

            function c() {
                a.default.dispatch({
                    type: "GAME_INVITE_CLEAR_UNSEEN"
                })
            }
            async function f(e) {
                await l.default.delete({
                    url: r.Endpoints.GAME_INVITE(e.invite_id)
                })
            }
            async function E() {
                await l.default.delete({
                    url: r.Endpoints.GAME_INVITES
                })
            }
            async function h(e, t) {
                if (!(0, i.isWindows)()) return !1;
                let n = await (0, s.default)();
                return new Promise((l, a) => {
                    if ((null == n ? void 0 : n.xboxIsApplicationInstalled) == null) {
                        a(Error("Game utils module not loaded"));
                        return
                    }
                    n.xboxIsApplicationInstalled(e, t, e => {
                        l(e)
                    })
                })
            }
            async function _(e) {
                if (!(0, i.isWindows)()) return !1;
                let t = await (0, s.default)();
                return new Promise((n, l) => {
                    if ((null == t ? void 0 : t.xboxLaunchGame) == null) {
                        l(Error("Game utils module not loaded"));
                        return
                    }
                    t.xboxLaunchGame(e, e => {
                        n(e)
                    })
                })
            }
            async function S(e) {
                if (!(0, i.isWindows)()) return !1;
                let t = await (0, s.default)();
                return new Promise((n, l) => {
                    if ((null == t ? void 0 : t.xboxIsInviteTokenValid) == null) {
                        l(Error("Game utils module not loaded"));
                        return
                    }
                    t.xboxIsInviteTokenValid(e, e => {
                        n(e)
                    })
                })
            }
            async function T(e) {
                if (!(0, i.isWindows)()) return !1;
                let t = await (0, s.default)();
                return new Promise((n, l) => {
                    if ((null == t ? void 0 : t.xboxAcceptGameInvite) == null) {
                        l(Error("Game utils module not loaded"));
                        return
                    }
                    t.xboxAcceptGameInvite(e, e => {
                        n(e)
                    })
                })
            }