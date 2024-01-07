            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("860677");
            var a = n("861309"),
                s = n("846678"),
                i = n("842897"),
                l = n("492249"),
                r = n("49111"),
                o = {
                    [r.RPCCommands.SUBSCRIBE]: {
                        async handler(e) {
                            let {
                                server: t,
                                socket: n,
                                evt: r,
                                args: o
                            } = e, u = t.events[r];
                            if (null == u) throw new a.default(l.RPCErrors.INVALID_EVENT, "Invalid event: ".concat(r));
                            if (!(0, s.default)(n.authorization.scopes, u.scope)) throw new a.default(l.RPCErrors.INVALID_PERMISSIONS, "Not authenticated or invalid scope");
                            let d = u.handler({
                                    args: o,
                                    socket: n
                                }),
                                c = await (0, i.getInitialSubscriptionPayload)(n, r, o);
                            return new Promise(e => {
                                setImmediate(() => {
                                    t.addSubscription(n, r, o, d), null != c && t.dispatchToSubscriptions(r, e => e.socket.id === n.id, c)
                                }), e({
                                    evt: r
                                })
                            })
                        }
                    },
                    [r.RPCCommands.UNSUBSCRIBE]: {
                        handler(e) {
                            let {
                                server: t,
                                socket: n,
                                evt: s,
                                args: i
                            } = e;
                            if (null == t.events[s]) throw new a.default(l.RPCErrors.INVALID_EVENT, "Invalid event: ".concat(s));
                            return t.removeSubscription(n, s, i), {
                                evt: s
                            }
                        }
                    }
                }