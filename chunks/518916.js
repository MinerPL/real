            "use strict";
            n.r(t), n.d(t, {
                socket: function() {
                    return T
                },
                localPresenceState: function() {
                    return C
                },
                localVoiceState: function() {
                    return m
                },
                localLobbyVoiceStates: function() {
                    return S
                },
                setDispatchSocketMessageFunction: function() {
                    return g
                }
            }), n("222007"), n("424973"), n("70102");
            var i = n("35092"),
                a = n("913144"),
                l = n("49671"),
                s = n("605250"),
                r = n("271938"),
                u = n("599110"),
                o = n("35468"),
                d = n("773336"),
                c = n("509065"),
                _ = n("447214"),
                E = n("413196"),
                f = n("764867"),
                h = n("292892");
            let p = new s.default("ConnectionStore"),
                T = new _.default,
                C = new f.default(T),
                m = new h.default(T),
                S = new E.default(T),
                I = null;

            function g(e) {
                I = e
            }
            T.handleIdentify = () => {
                let e = r.default.getToken();
                return (p.verbose("handleIdentify called", {
                    hasToken: null != e
                }), null == e) ? null : {
                    token: e,
                    properties: u.default.getSuperProperties(),
                    presence: C.getState()
                }
            }, (0, d.isDesktop)() && l.default.remotePowerMonitor.on("resume", () => {
                T.expeditedHeartbeat(5e3, "power monitor resumed")
            }), o.default.addOfflineCallback(() => {
                T.networkStateChange(15e3, "network detected offline.", !1)
            }), o.default.addOnlineCallback(() => {
                T.networkStateChange(5e3, "network detected online.")
            }), T.on("disconnect", e => {
                let {
                    code: t,
                    reason: n
                } = e;
                a.default.dispatch({
                    type: "CONNECTION_CLOSED",
                    code: t,
                    reason: n
                })
            }), T.on("close", e => {
                let {
                    code: t,
                    reason: n
                } = e;
                a.default.dispatch({
                    type: "CONNECTION_INTERRUPTED",
                    code: t,
                    reason: n
                })
            });
            let A = [],
                N = null,
                O = 33,
                R = new Set(["READY", "INITIAL_GUILD"]);

            function y() {
                N = null;
                let e = Date.now(),
                    t = A.slice();
                if (A.length = 0, null == I) throw Error("setDispatchSocketMessageFunction needs to be called first!");
                let n = "none";
                try {
                    i.default.Emitter.batched(() => {
                        t.forEach(e => {
                            let [t, i] = e;
                            n = t, I(t, i)
                        }), c.default.flush()
                    })
                } catch (e) {
                    T.resetSocketOnError(e, n)
                }
                let a = Date.now() - e;
                a > 100 ? (p.log("Dispatched ".concat(t.length, " messages in ").concat(a, "ms")), O = 250) : O = 33
            }
            T.on("dispatch", (e, t) => {
                A.push([e, t]), R.has(e) ? (null != N && clearTimeout(N), y()) : null == N && (N = setTimeout(y, O))
            })