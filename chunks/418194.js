            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("222007");
            var a = n("913144"),
                s = n("861309"),
                i = n("716724"),
                l = n("492249"),
                r = {
                    [n("49111").RPCCommands.SET_CONFIG]: {
                        scope: l.RPC_AUTHENTICATED_SCOPE,
                        validation: e => (0, i.default)(e).required().keys({
                            use_interactive_pip: e.boolean()
                        }),
                        handler(e) {
                            let {
                                socket: t,
                                args: {
                                    use_interactive_pip: n
                                }
                            } = e;
                            if (t.transport !== l.TransportTypes.POST_MESSAGE) throw new s.default(l.RPCErrors.INVALID_COMMAND, 'command not available from "'.concat(t.transport, " transport"));
                            if (null == t.application.id) throw new s.default(l.RPCErrors.INVALID_COMMAND, "invalid application");
                            return a.default.dispatch({
                                type: "EMBEDDED_ACTIVITY_SET_CONFIG",
                                applicationId: t.application.id,
                                config: {
                                    useInteractivePIP: n
                                }
                            }), Promise.resolve({
                                use_interactive_pip: n
                            })
                        }
                    }
                }