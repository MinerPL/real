            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("222007");
            var a = n("605250"),
                s = n("578287"),
                i = n("716724"),
                l = n("49111");
            let r = new a.default(l.RPC_APPLICATION_LOGGING_CATEGORY);
            var o = {
                [l.RPCCommands.CAPTURE_LOG]: {
                    validation: e => (0, i.default)(e).required().keys({
                        level: e.string().required(),
                        message: e.string().required()
                    }),
                    handler(e) {
                        let {
                            socket: t,
                            args: {
                                level: n,
                                message: a
                            }
                        } = e;
                        (0, s.validatePostMessageTransport)(t.transport);
                        let i = t.application.id,
                            l = "".concat(i, " - ").concat(a);
                        switch (n) {
                            case "log":
                                r.log(l);
                                break;
                            case "warn":
                                r.warn(l);
                                break;
                            case "debug":
                                r.verbose(l);
                                break;
                            case "info":
                                r.info(l);
                                break;
                            case "error":
                                r.error(l)
                        }
                    }
                }
            }