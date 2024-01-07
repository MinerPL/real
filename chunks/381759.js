            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("222007");
            var a = n("831314"),
                s = n("861309"),
                i = n("716724"),
                l = n("492249"),
                r = n("49111"),
                o = {
                    [r.RPCCommands.SET_USER_ACHIEVEMENT]: {
                        scope: {
                            [l.RPC_SCOPE_CONFIG.ANY]: [r.OAuth2Scopes.RPC, l.RPC_LOCAL_SCOPE]
                        },
                        validation: e => (0, i.default)(e).required().keys({
                            achievement_id: e.string().min(2).max(128),
                            percent_complete: e.number().min(0).max(100).required()
                        }),
                        handler(e) {
                            let {
                                socket: t,
                                args: {
                                    achievement_id: n,
                                    percent_complete: i
                                }
                            } = e, o = t.application.id;
                            if (null == o) throw new s.default(l.RPCErrors.INVALID_COMMAND, "No application.");
                            return a.default.setUserAchievement(o, n, i).catch(e => {
                                let {
                                    status: t,
                                    body: n
                                } = e;
                                switch (t) {
                                    case 429:
                                        throw new s.default(l.RPCErrors.RATE_LIMITED, "You are being rate limited.");
                                    case 403:
                                        if (null != n && n.code === r.AbortCodes.USER_NOT_AUTHORIZED_FOR_APPLICATION) throw new s.default(l.RPCErrors.UNAUTHORIZED_FOR_ACHIEVEMENT, "Not authorized to update this achievement.");
                                        throw new s.default(l.RPCErrors.UNKNOWN_ERROR, "Unknown error from API. status=".concat(t, "."));
                                    default:
                                        throw new s.default(l.RPCErrors.UNKNOWN_ERROR, "Unknown error from API. status=".concat(t, "."))
                                }
                            }).then(() => null)
                        }
                    },
                    [r.RPCCommands.GET_USER_ACHIEVEMENTS]: {
                        scope: {
                            [l.RPC_SCOPE_CONFIG.ANY]: [r.OAuth2Scopes.RPC, l.RPC_LOCAL_SCOPE]
                        },
                        handler(e) {
                            let {
                                socket: t
                            } = e, n = t.application.id;
                            if (null == n) throw new s.default(l.RPCErrors.INVALID_COMMAND, "No application.");
                            return a.default.fetchForApplication(n).then(e => e || [])
                        }
                    }
                }