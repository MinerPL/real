            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i, a = n("201876"),
                l = n("661736"),
                s = n("101125");
            i = class extends a.default {
                getInitialState() {
                    return s.default.getLocalPresence()
                }
                getNextState() {
                    return s.default.getLocalPresence()
                }
                shouldCommit() {
                    return this.socket.isSessionEstablished()
                }
                emitPresenceUpdate(e) {
                    let {
                        status: t,
                        since: n,
                        activities: i,
                        afk: a,
                        broadcast: l
                    } = e;
                    this.socket.presenceUpdate(t, n, i, a, l)
                }
                handleConnectionOpen() {
                    let e = !this.switchingAccounts;
                    this.update({}, e), this.switchingAccounts = !1
                }
                handleAccountSwitch() {
                    this.switchingAccounts = !0, this.reset(), this.emitPresenceUpdate(this.getState())
                }
                constructor(e) {
                    super(), this.socket = e, this.switchingAccounts = !1, this.didCommit = (0, l.default)(5, 2e4, this.emitPresenceUpdate.bind(this))
                }
            }