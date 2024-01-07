            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660");
            var a = n("922932"),
                s = n("128259"),
                i = n("773336"),
                l = n("861309"),
                r = n("578287"),
                o = n("716724"),
                u = n("492249"),
                d = {
                    [n("49111").RPCCommands.OPEN_EXTERNAL_LINK]: {
                        validation: e => (0, o.default)(e).required().keys({
                            url: e.string().required()
                        }),
                        handler(e) {
                            let {
                                socket: t,
                                args: {
                                    url: n
                                }
                            } = e;
                            (0, r.validatePostMessageTransport)(t.transport);
                            try {
                                let e = new URL(n);
                                i.isPlatformEmbedded && a.default.focus(null, !0), (0, s.handleClick)({
                                    href: e.toString()
                                })
                            } catch (e) {
                                throw new l.default(u.RPCErrors.INVALID_COMMAND, "Invalid URL: ".concat(n))
                            }
                        }
                    }
                }