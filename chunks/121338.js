            "use strict";
            n.r(t), n.d(t, {
                connect: function() {
                    return u
                },
                disconnect: function() {
                    return c
                },
                setReceiveEventHandler: function() {
                    return d
                },
                setReceiveCommandHandler: function() {
                    return f
                },
                send: function() {
                    return E
                }
            });
            var i = n("43982"),
                r = n("861309"),
                s = n("261131"),
                a = n("828777"),
                o = n("49111"),
                l = n("492249");

            function u() {
                i.default.connect()
            }

            function c() {
                i.default.disconnect()
            }

            function d(e, t) {
                if (!__OVERLAY__) throw new r.default(l.RPCErrors.UNKNOWN_ERROR, "called from wrong app context");
                i.default.subscribe(o.RPCEvents.OVERLAY, {
                    token: t
                }, t => e((0, a.deserializeObject)(t)))
            }

            function f(e, t) {
                if (__OVERLAY__) throw new r.default(l.RPCErrors.UNKNOWN_ERROR, "called from wrong app context");
                s.default.setCommandHandler(o.RPCCommands.OVERLAY, {
                    scope: l.RPC_PRIVATE_SCOPE,
                    handler(n) {
                        let {
                            args: i
                        } = n;
                        if (!t(i.token)) throw new r.default(l.RPCErrors.INVALID_TOKEN, "Invalid RPC auth token provided");
                        e((0, a.deserializeObject)(i))
                    }
                }), s.default.setEventHandler(o.RPCEvents.OVERLAY, {
                    scope: l.RPC_PRIVATE_SCOPE,
                    handler(e) {
                        let {
                            args: n
                        } = e;
                        if (!t(n.token)) throw new r.default(l.RPCErrors.INVALID_TOKEN, "Invalid RPC auth token provided")
                    }
                })
            }

            function E(e) {
                __OVERLAY__ ? i.default.request(o.RPCCommands.OVERLAY, (0, a.serializeObject)(e)) : s.default.dispatchToSubscriptions(o.RPCEvents.OVERLAY, {}, (0, a.serializeObject)(e))
            }