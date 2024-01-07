            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i, a = n("201876"),
                l = n("260320"),
                s = n("42887");
            i = class extends a.default {
                getInitialState() {
                    return this.getNextState()
                }
                getNextState() {
                    let e = l.default.getLobbiesWithVoice();
                    return e.length > 0 && (this._hadLobbyVoiceStates = !0), {
                        lobbies: e.map(e => ({
                            lobbyId: e.id,
                            selfMute: s.default.isSelfMute(e.application_id),
                            selfDeaf: s.default.isSelfDeaf(e.application_id)
                        }))
                    }
                }
                shouldCommit() {
                    return this._hadLobbyVoiceStates && this.socket.isSessionEstablished()
                }
                didCommit(e) {
                    let {
                        lobbies: t
                    } = e;
                    this.socket.lobbyVoiceStatesUpdate(t)
                }
                forceUpdate() {
                    this._hadLobbyVoiceStates && super.forceUpdate()
                }
                constructor(e) {
                    super(), this.socket = e, this._hadLobbyVoiceStates = !1
                }
            }