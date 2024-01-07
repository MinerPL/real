            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("222007");
            var a = n("872717"),
                s = n("599110"),
                i = n("492249"),
                l = n("49111"),
                r = {
                    [l.RPCCommands.GET_NETWORKING_CONFIG]: {
                        scope: i.RPC_LOCAL_SCOPE,
                        handler: () => Promise.all([a.default.get({
                            url: location.protocol + window.GLOBAL_ENV.NETWORKING_ENDPOINT,
                            retries: 3
                        }).then(e => {
                            let {
                                body: {
                                    address: t
                                }
                            } = e;
                            return t
                        }), a.default.post({
                            url: l.Endpoints.NETWORKING_TOKEN,
                            retries: 3,
                            oldFormErrors: !0
                        }).then(e => {
                            let {
                                body: {
                                    token: t
                                }
                            } = e;
                            return t
                        })]).then(e => {
                            let [t, n] = e;
                            return {
                                address: t,
                                token: n
                            }
                        })
                    },
                    [l.RPCCommands.NETWORKING_SYSTEM_METRICS]: {
                        scope: i.RPC_LOCAL_SCOPE,
                        handler(e) {
                            let {
                                socket: t,
                                args: n
                            } = e;
                            n.application_id = t.application.id, s.default.track(l.AnalyticEvents.NETWORKING_SYSTEM_METRICS, n)
                        }
                    },
                    [l.RPCCommands.NETWORKING_PEER_METRICS]: {
                        scope: i.RPC_LOCAL_SCOPE,
                        handler(e) {
                            let {
                                socket: t,
                                args: n
                            } = e;
                            n.application_id = t.application.id, s.default.track(l.AnalyticEvents.NETWORKING_PEER_METRICS, n)
                        }
                    },
                    [l.RPCCommands.NETWORKING_CREATE_TOKEN]: {
                        scope: i.RPC_LOCAL_SCOPE,
                        handler: () => a.default.post({
                            url: l.Endpoints.NETWORKING_TOKEN,
                            retries: 1,
                            oldFormErrors: !0
                        }).then(e => e.body)
                    }
                }