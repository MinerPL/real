            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                i = n("913144"),
                l = n("636974"),
                r = n("970728"),
                o = n("539405"),
                u = n("299803"),
                d = n("52028"),
                c = n("101125"),
                E = n("861309"),
                f = n("578287"),
                _ = n("716724"),
                h = n("56245"),
                C = n("492249"),
                T = n("49111"),
                I = {
                    [T.RPCCommands.SET_OVERLAY_LOCKED]: {
                        scope: C.RPC_LOCAL_SCOPE,
                        validation: e => (0, _.default)(e).required().keys({
                            locked: e.boolean().required(),
                            pid: e.number().min(0).required()
                        }),
                        handler(e) {
                            let {
                                args: {
                                    locked: t,
                                    pid: n
                                },
                                socket: {
                                    application: a
                                }
                            } = e, s = a.id;
                            if (null == s) throw new E.default(C.RPCErrors.INVALID_COMMAND, "No application.");
                            o.default.setLocked(t, n)
                        }
                    },
                    [T.RPCCommands.OPEN_OVERLAY_ACTIVITY_INVITE]: {
                        scope: C.RPC_LOCAL_SCOPE,
                        validation: e => (0, _.default)(e).required().keys({
                            type: e.number().required().valid([T.ActivityActionTypes.JOIN]),
                            pid: e.number().min(0).required()
                        }),
                        handler(e) {
                            let {
                                socket: t,
                                args: {
                                    type: n,
                                    pid: a
                                }
                            } = e, s = t.application.id;
                            if (null == s) throw new E.default(C.RPCErrors.INVALID_COMMAND, "No application.");
                            let i = d.default.getApplicationActivity(s);
                            if (null == i || null == i.secrets || !(0, f.validateActivityInvite)(n, i.party, i.secrets)) throw new E.default(C.RPCErrors.NO_ELIGIBLE_ACTIVITY, "No eligible activity for application. Ensure an activity includes a party and appropriate secret.");
                            let {
                                lock: r
                            } = (0, h.unlockOverlay)(a), o = (0, u.default)(i, c.default);
                            return (0, l.openModal)(i, o).then(() => {
                                if (r(), o) throw new E.default(C.RPCErrors.NO_ELIGIBLE_ACTIVITY, "No eligible activity for application. Ensure user does have have privacy enabled.")
                            })
                        }
                    },
                    [T.RPCCommands.OPEN_OVERLAY_GUILD_INVITE]: {
                        scope: C.RPC_LOCAL_SCOPE,
                        validation: e => (0, _.default)(e).required().keys({
                            code: e.string().required(),
                            pid: e.number().min(0).required()
                        }),
                        handler(e) {
                            let {
                                args: {
                                    code: t,
                                    pid: n
                                },
                                socket: a
                            } = e, s = a.application.id;
                            if (null == s) throw new E.default(C.RPCErrors.INVALID_COMMAND, "No application.");
                            return r.default.resolveInvite(t, "Game SDK").then(e => {
                                let {
                                    invite: t,
                                    code: a
                                } = e;
                                if (null == t) throw new E.default(C.RPCErrors.INVALID_INVITE, "Invalid invite id: ".concat(a));
                                let {
                                    context: s,
                                    lock: l
                                } = (0, h.unlockOverlay)(n);
                                return new Promise(e => {
                                    i.default.dispatch({
                                        type: "INVITE_MODAL_OPEN",
                                        invite: t,
                                        code: a,
                                        context: s,
                                        resolve: e
                                    })
                                }).then(l)
                            })
                        }
                    },
                    [T.RPCCommands.OPEN_OVERLAY_VOICE_SETTINGS]: {
                        scope: C.RPC_LOCAL_SCOPE,
                        validation: e => (0, _.default)(e).required().keys({
                            pid: e.number().min(0).required()
                        }),
                        handler(e) {
                            let {
                                args: {
                                    pid: t
                                },
                                socket: i
                            } = e, l = i.application.id;
                            if (null == l) throw new E.default(C.RPCErrors.INVALID_COMMAND, "No application.");
                            let {
                                lock: r
                            } = (0, h.unlockOverlay)(t);
                            return new Promise(e => {
                                (0, s.openModalLazy)(async () => {
                                    let {
                                        default: t
                                    } = await n.el("301450").then(n.bind(n, "301450"));
                                    return n => (0, a.jsx)(t, {
                                        ...n,
                                        mediaEngineContext: l,
                                        title: i.application.name,
                                        onClose: () => {
                                            n.onClose(), r(), e()
                                        }
                                    })
                                })
                            })
                        }
                    }
                }