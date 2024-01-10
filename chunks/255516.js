            "use strict";
            let a, s;
            n.r(t), n.d(t, {
                default: function() {
                    return D
                }
            }), n("222007"), n("313619"), n("654714"), n("287168"), n("956660"), n("424973"), n("70102");
            var i = n("44170"),
                l = n("917351"),
                r = n.n(l),
                o = n("746379"),
                u = n.n(o),
                d = n("913144"),
                c = n("605250"),
                E = n("313915"),
                f = n("50885"),
                _ = n("861309"),
                h = n("856116"),
                C = n("470313"),
                T = n("56245"),
                I = n("492249"),
                S = n("49111"),
                N = n("446825").Buffer;
            try {
                a = f.default.requireModule("discord_erlpack")
            } catch (e) {
                try {
                    a = f.default.requireModule("erlpack")
                } catch (e) {}
            }
            let A = f.default.requireModule("discord_rpc").RPCWebSocket,
                p = window.GLOBAL_ENV.MARKETING_ENDPOINT,
                m = new c.default("RPCServer:WSS"),
                g = [];

            function R(e) {
                return "function" == typeof e ? e() : e
            }

            function O() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = e > 0 ? void 0 : () => {
                        if (!R(s.listening)) return;
                        let e = s.address().port;
                        m.info("Starting on ".concat(e)), d.default.dispatch({
                            type: "RPC_SERVER_READY",
                            port: e
                        })
                    };
                s.listen(S.RPC_STARTING_PORT + e % S.RPC_PORT_RANGE, "127.0.0.1", t)
            }

            function L(e, t, n) {
                let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 200,
                    s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
                    i = null != R(e.headers).origin ? {
                        "Access-Control-Allow-Origin": R(e.headers).origin,
                        "Access-Control-Allow-Credentials": "true",
                        "Access-Control-Allow-Methods": "POST, GET, PUT, PATCH, DELETE",
                        "Access-Control-Allow-Headers": "Content-Type, Authorization"
                    } : {};
                n = n ? JSON.stringify(n) : "", a = 200 === a && 0 === n.length ? 204 : a, t.setHeader("Content-Length", N.byteLength(n).toString()), t.setHeader("Content-Type", "application/json"), t.writeHead(a, {
                    ...s,
                    ...i
                }), t.end(n)
            }

            function v(e, t, n, a) {
                let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
                L(e, t, {
                    code: s,
                    message: a
                }, n)
            }
            class WebSocket extends C.default {
                send(e) {
                    (E.default.isLoggingOverlayEvents || e.cmd !== S.RPCCommands.OVERLAY && e.evt !== S.RPCEvents.OVERLAY) && m.info("Socket Emit: ".concat(this.id), (0, h.default)(e)), null != a && "etf" === this.encoding ? this._socket.send(a.pack(e), {
                        binary: !0
                    }) : this._socket.send(JSON.stringify(e))
                }
                close(e, t) {
                    this._socket.close(e, t)
                }
                constructor(e, t, n) {
                    if (super("ws", t, n), -1 === ["etf", "json"].indexOf(n)) throw new _.default(S.RPCCloseCodes.INVALID_ENCODING, "Invalid Encoding: ".concat(n));
                    if ("etf" === n && null == a) throw new _.default(S.RPCCloseCodes.INVALID_ENCODING, "Erlpack cannot be used on this client");
                    this._socket = e
                }
            }
            class M extends C.default {
                send(e) {
                    (E.default.isLoggingOverlayEvents || e.cmd !== S.RPCCommands.OVERLAY) && m.info("Socket Emit: ".concat(this.id), e), this._sendCallback(e)
                }
                close(e, t) {
                    this._closeCallback(t, e)
                }
                constructor(e, t, n, a) {
                    if (super("http", n, a), "json" !== a) throw new _.default(S.RPCCloseCodes.INVALID_ENCODING, "Invalid Encoding: ".concat(a));
                    this._sendCallback = e, this._closeCallback = t
                }
            }
            class P extends i.EventEmitter {
                handleRequest(e, t) {
                    let [n, a] = R(e.url).split("?"), s = R(e.method);
                    if ("/rpc" === n && "OPTIONS" === s) {
                        L(e, t, {
                            body: ""
                        });
                        return
                    }
                    let i = "POST" === s;
                    if ("/rpc" === n && ("GET" === s || i)) {
                        let n = new URLSearchParams(a),
                            s = i ? R(e.headers)["content-type"].split("/")[1] : "json",
                            r = function() {
                                var e;
                                let {
                                    protocol: a,
                                    host: s
                                } = u.parse(null !== (e = n.get("callback")) && void 0 !== e ? e : "");
                                a === location.protocol && s === location.host ? t.setHeader("Location", n.get("callback")) : t.setHeader("Location", p), t.writeHead(301), t.end()
                            },
                            o = new M(i ? L.bind(null, e, t) : r, i ? v.bind(null, e, t, 400) : r, Number(n.get("v")), s);
                        if (i)(0, T.validateSocketClient)(o, R(e.headers).origin, n.get("client_id")).then(() => {
                            let n = "";
                            e.on("data", e => n += e), e.on("error", () => v(e, t, 500, "Internal Server Error")), e.on("end", () => this.handleMessage(o, n))
                        }).catch(e => {
                            let {
                                code: t,
                                message: n
                            } = e;
                            return o.close(t, n)
                        });
                        else {
                            var l;
                            o.authorization.scopes = [I.RPC_PRIVATE_LIMITED_SCOPE], this.handleMessage(o, decodeURIComponent(null !== (l = n.get("payload")) && void 0 !== l ? l : ""))
                        }
                        return
                    }
                    v(e, t, 404, "Not Found")
                }
                handleConnection(e) {
                    var t, n;
                    let a;
                    let s = new URLSearchParams(R(e.upgradeReq).url.split("?")[1]),
                        i = null !== (t = R(e.upgradeReq).headers.origin) && void 0 !== t ? t : "";
                    try {
                        a = new WebSocket(e, Number(s.get("v")), null !== (n = s.get("encoding")) && void 0 !== n ? n : "json")
                    } catch (t) {
                        e.close(t.code, t.message);
                        return
                    }
                    m.info("Socket Opened: ".concat(a.id)), e.on("error", e => m.error("WS Error: ".concat(e.message))), e.on("close", (e, t) => {
                        m.info("Socket Closed: ".concat(a.id, ", code ").concat(e, ", message ").concat(t)), r.remove(g, e => e === a), this.emit("disconnect", a)
                    }), (0, T.validateSocketClient)(a, i, s.get("client_id")).then(() => {
                        g.push(a), e.on("message", e => this.handleMessage(a, e)), this.emit("connect", a)
                    }).catch(e => {
                        let {
                            code: t,
                            message: n
                        } = e;
                        return a.close(t, n)
                    })
                }
                handleMessage(e, t) {
                    let n;
                    try {
                        if (null != a && "etf" === e.encoding) n = a.unpack(t);
                        else if ("string" == typeof t) n = JSON.parse(t);
                        else throw Error()
                    } catch (t) {
                        e.close(S.RPCCloseCodes.CLOSE_UNSUPPORTED, "Payload not ".concat(e.encoding));
                        return
                    }(E.default.isLoggingOverlayEvents || n.cmd !== S.RPCCommands.OVERLAY) && m.info("Socket Message: ".concat(e.id), (0, h.default)(n)), this.emit("request", e, n)
                }
                constructor() {
                    var e;
                    super();
                    let t = 0;
                    (s = A.http.createServer()).on("error", e => {
                        m.error("Error: ".concat(e.message)), ("EADDRINUSE" === e.code || e.message.includes("EADDRINUSE")) && setTimeout(() => O(++t), 1e3)
                    }), s.on("request", this.handleRequest.bind(this)), O(t);
                    let n = {
                        instanceId: null !== (e = s.instanceId) && void 0 !== e ? e : 0,
                        server: s
                    };
                    new A.ws.Server(n).on("connection", e => this.handleConnection(e))
                }
            }
            var D = new P