            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
            var a = n("629109"),
                s = n("42887"),
                i = n("13798"),
                l = n("861309"),
                r = n("716724"),
                o = n("492249"),
                u = n("49111"),
                d = n("353927");

            function c(e) {
                let t = e.application.id;
                if (null == t) throw new l.default(o.RPCErrors.INVALID_COMMAND, "No application.");
                return t
            }
            var E = {
                [u.RPCCommands.SET_VOICE_SETTINGS_2]: {
                    scope: o.RPC_LOCAL_SCOPE,
                    validation: e => (0, r.default)(e).required().keys({
                        input_mode: (0, r.default)(e).keys({
                            type: e.string().valid(Object.keys(u.InputModes)),
                            shortcut: e.string().required()
                        }),
                        self_mute: e.boolean(),
                        self_deaf: e.boolean()
                    }),
                    handler(e) {
                        let {
                            socket: t,
                            args: {
                                input_mode: n,
                                self_mute: l,
                                self_deaf: r
                            }
                        } = e, o = c(t);
                        null != n && a.default.setMode(n.type, {
                            shortcut: (0, i.toCombo)(n.shortcut)
                        }, o), null != l && l !== s.default.isSelfMute(o) && a.default.toggleSelfMute({
                            context: o
                        }), null != r && r !== s.default.isSelfDeaf(o) && a.default.toggleSelfDeaf({
                            context: o
                        })
                    }
                },
                [u.RPCCommands.SET_USER_VOICE_SETTINGS_2]: {
                    scope: o.RPC_LOCAL_SCOPE,
                    validation: e => (0, r.default)(e).required().keys({
                        user_id: e.string().required(),
                        volume: e.number().min(0).max(200),
                        mute: e.boolean()
                    }),
                    handler(e) {
                        let {
                            socket: t,
                            args: {
                                user_id: n,
                                mute: i,
                                volume: l
                            }
                        } = e, r = c(t);
                        null != i && i !== s.default.isLocalMute(n, r) && a.default.toggleLocalMute(n, r), null != l && a.default.setLocalVolume(n, l, r)
                    }
                },
                [u.RPCCommands.PUSH_TO_TALK]: {
                    scope: {
                        [o.RPC_SCOPE_CONFIG.ALL]: [u.OAuth2Scopes.RPC, u.OAuth2Scopes.RPC_VOICE_WRITE]
                    },
                    validation: e => (0, r.default)(e).required().keys({
                        active: e.boolean()
                    }),
                    handler(e) {
                        let {
                            args: {
                                active: t
                            }
                        } = e;
                        s.default.getMode(d.MediaEngineContextTypes.DEFAULT) === u.InputModes.PUSH_TO_TALK && s.default.getMediaEngine().eachConnection(e => e.setForceAudioInput(t), d.MediaEngineContextTypes.DEFAULT)
                    }
                }
            }