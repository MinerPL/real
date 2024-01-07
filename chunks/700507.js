            "use strict";
            n.r(t), n.d(t, {
                disconnectRemote: function() {
                    return m
                },
                connectToRemote: function() {
                    return S
                },
                remoteVoiceStateUpdate: function() {
                    return I
                },
                remoteDisconnect: function() {
                    return g
                },
                remoteAudioSettingsUpdate: function() {
                    return A
                },
                fetchDevices: function() {
                    return O
                },
                persistSelectedDeviceId: function() {
                    return R
                },
                transferToPlayStation: function() {
                    return M
                }
            }), n("424973"), n("222007");
            var i = n("30945"),
                a = n("363747"),
                l = n("872717"),
                s = n("913144"),
                r = n("404118"),
                u = n("504385"),
                o = n("945956"),
                d = n("235660"),
                c = n("599110"),
                _ = n("286235"),
                E = n("893243"),
                f = n("76393"),
                h = n("780338"),
                p = n("49111"),
                T = n("782340");

            function C(e, t) {
                var n, i;
                c.default.track(p.AnalyticEvents.REMOTE_COMMAND_SENT, {
                    command_type: e,
                    remote_platform: null === (i = d.default.getSessionById(t)) || void 0 === i ? void 0 : null === (n = i.clientInfo) || void 0 === n ? void 0 : n.os
                })
            }
            async function m() {
                let e = f.default.getAwaitingRemoteSessionInfo(),
                    t = null == e ? void 0 : e.nonce;
                s.default.dispatch({
                    type: "REMOTE_SESSION_DISCONNECT"
                });
                let n = [];
                ((null == e ? void 0 : e.type) === p.PlatformTypes.PLAYSTATION || (null == e ? void 0 : e.type) === p.PlatformTypes.PLAYSTATION_STAGING) && (null == e ? void 0 : e.commandId) != null && (null == e ? void 0 : e.deviceId) != null && n.push(v(e.type, e.deviceId, e.commandId)), null != t && n.push(function(e) {
                    return l.default.delete({
                        url: p.Endpoints.CONNECT_REQUEST(e)
                    })
                }(t));
                try {
                    await Promise.all(n)
                } catch (e) {
                    r.default.show({
                        title: T.default.Messages.CANCEL_TRANSFER_VOICE_FAILED_TITLE,
                        body: T.default.Messages.CANCEL_TRANSFER_VOICE_FAILED_BODY
                    })
                }
            }

            function S(e) {
                s.default.dispatch({
                    type: "REMOTE_SESSION_CONNECT",
                    sessionId: e
                })
            }

            function I(e, t) {
                let {
                    selfMute: n,
                    selfDeaf: i
                } = t;
                s.default.dispatch({
                    type: "REMOTE_COMMAND",
                    sessionId: e,
                    payload: {
                        type: "VOICE_STATE_UPDATE",
                        self_mute: n,
                        self_deaf: i
                    }
                }), C("VOICE_STATE_UPDATE", e)
            }

            function g(e) {
                s.default.dispatch({
                    type: "REMOTE_COMMAND",
                    sessionId: e,
                    payload: {
                        type: "DISCONNECT"
                    }
                }), C("DISCONNECT", e), m()
            }

            function A(e, t, n, i) {
                let a = (0, u.coerceAudioContextForProto)(n);
                null != a && (s.default.dispatch({
                    type: "REMOTE_COMMAND",
                    sessionId: e,
                    payload: {
                        type: "AUDIO_SETTINGS_UPDATE",
                        context: a,
                        id: t,
                        ...i
                    }
                }), C("AUDIO_SETTINGS_UPDATE", e))
            }
            async function N() {
                let e;
                try {
                    let t = null != o.default.getRTCConnectionId() ? a.ConsoleHandoffType.TRANSFER_EXISTING_CALL : a.ConsoleHandoffType.CREATE_NEW_CALL,
                        n = await l.default.post({
                            url: p.Endpoints.CONNECT_REQUEST_CREATE,
                            body: {
                                analytics_properties: {
                                    handoff_type: t
                                }
                            }
                        });
                    e = n.body.nonce
                } catch (e) {
                    _.default.captureException(e)
                }
                return e
            }
            async function O(e) {
                let t;
                s.default.dispatch({
                    type: "GAME_CONSOLE_FETCH_DEVICES_START",
                    platform: e
                });
                try {
                    t = await l.default.get({
                        url: p.Endpoints.CONSOLES_DEVICES(e)
                    })
                } catch (t) {
                    throw s.default.dispatch({
                        type: "GAME_CONSOLE_FETCH_DEVICES_FAIL",
                        platform: e,
                        error: t
                    }), t
                }
                let n = t.body.devices;
                return s.default.dispatch({
                    type: "GAME_CONSOLE_FETCH_DEVICES_SUCCESS",
                    platform: e,
                    devices: n
                }), n
            }

            function R(e, t) {
                s.default.dispatch({
                    type: "GAME_CONSOLE_SELECT_DEVICE",
                    platform: e,
                    deviceId: t
                })
            }
            async function y(e, t, n, a) {
                let r;
                s.default.dispatch({
                    type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_START",
                    platform: e
                });
                try {
                    r = await l.default.post({
                        url: p.Endpoints.CONSOLES_DEVICES_COMMANDS(e, t),
                        body: {
                            command: i.ConsoleCommands.CONNECT_VOICE,
                            channel_id: n.id,
                            guild_id: n.guild_id,
                            nonce: a
                        }
                    })
                } catch (t) {
                    throw s.default.dispatch({
                        type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_FAIL",
                        platform: e,
                        error: t
                    }), t
                }
                let u = r.body.id;
                return s.default.dispatch({
                    type: "WAIT_FOR_REMOTE_SESSION",
                    sessionType: e,
                    nonce: a,
                    channelId: n.id,
                    deviceId: t,
                    commandId: u
                }), u
            }
            async function v(e, t, n) {
                s.default.dispatch({
                    type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_START",
                    platform: e,
                    deviceId: t,
                    commandId: n
                });
                try {
                    await l.default.delete({
                        url: p.Endpoints.CONSOLES_DEVICES_COMMAND(e, t, n)
                    })
                } catch (i) {
                    throw s.default.dispatch({
                        type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_FAIL",
                        platform: e,
                        deviceId: t,
                        commandId: n,
                        error: i
                    }), i
                }
                s.default.dispatch({
                    type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_SUCCESS",
                    platform: e,
                    deviceId: t,
                    commandId: n
                })
            }
            async function M(e, t, n) {
                await E.default.maybeShowPTTAlert(e), await m();
                let i = await N();
                await y(e, t, n, i), (0, h.default)(n.id, e)
            }