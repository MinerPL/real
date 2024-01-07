            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            }), n("222007");
            var a = n("17434"),
                s = n("861309"),
                i = n("716724"),
                l = n("492249"),
                r = n("49111"),
                o = n("353927"),
                u = {
                    [r.RPCCommands.SET_CERTIFIED_DEVICES]: {
                        scope: {
                            [l.RPC_SCOPE_CONFIG.ANY]: [r.OAuth2Scopes.RPC, l.RPC_LOCAL_SCOPE]
                        },
                        validation: e => (0, i.default)(e).required().keys({
                            devices: e.array().items((0, i.default)(e).keys({
                                type: e.string().required().valid([o.DeviceTypes.AUDIO_INPUT, o.DeviceTypes.AUDIO_OUTPUT, o.DeviceTypes.VIDEO_INPUT]),
                                id: e.string().required().min(1),
                                vendor: e.object().required().keys({
                                    name: e.string().min(1),
                                    url: e.string().min(1)
                                }),
                                model: e.object().required().keys({
                                    name: e.string().min(1),
                                    url: e.string().min(1)
                                }),
                                related: e.array().items(e.string().min(1)),
                                echo_cancellation: e.boolean(),
                                noise_suppression: e.boolean(),
                                automatic_gain_control: e.boolean(),
                                hardware_mute: e.boolean()
                            }))
                        }),
                        handler(e) {
                            let {
                                socket: t,
                                args: {
                                    devices: n
                                }
                            } = e;
                            if (null == t.application.id) throw new s.default(l.RPCErrors.INVALID_COMMAND, "No application.");
                            (0, a.setCertifiedDevices)(t.application.id, n.map(e => ({
                                type: e.type,
                                id: e.id,
                                vendor: e.vendor,
                                model: e.model,
                                related: e.related.filter(e => n.some(t => t.id === e)),
                                echoCancellation: e.echo_cancellation,
                                noiseSuppression: e.noise_suppression,
                                automaticGainControl: e.automatic_gain_control,
                                hardwareMute: e.hardware_mute
                            })))
                        }
                    }
                }