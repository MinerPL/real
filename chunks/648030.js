            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("843762"), n("424973"), n("70102"), n("222007");
            var i, r = n("627445"),
                s = n.n(r),
                a = n("917351"),
                o = n.n(a),
                l = n("599110"),
                u = n("861309"),
                c = n("694352"),
                d = n("846678"),
                f = n("492249"),
                E = n("49111");
            let h = "RPC_STORE_WAIT",
                p = [];
            i = class {
                registerTransport(e) {
                    e.on("connect", e => this.handleConnect(e)), e.on("request", (e, t) => this.handleRequest(e, t)), e.on("disconnect", (e, t) => this.handleDisconnect(e, t))
                }
                handleConnect(e) {
                    this.sockets.add(e), this.onConnect(e);
                    let t = {
                        v: e.version,
                        config: {
                            cdn_host: window.GLOBAL_ENV.CDN_HOST,
                            api_endpoint: window.GLOBAL_ENV.API_ENDPOINT,
                            environment: "production"
                        }
                    };
                    if (e.transport === f.TransportTypes.IPC) {
                        let n = this.getCurrentUser();
                        if (null == n) {
                            e.close(E.RPCCloseCodes.CLOSE_NORMAL, "User logged out");
                            return
                        }
                        t.user = (0, c.default)(n)
                    }
                    this.dispatch(e, null, E.RPCCommands.DISPATCH, E.RPCEvents.READY, t)
                }
                handleDisconnect(e, t) {
                    this.removeSubscriptions(e), this.sockets.delete(e), this.onDisconnect(e, t)
                }
                handleRequest(e, t) {
                    new Promise(n => {
                        if (null == t.nonce || "" === t.nonce) throw new u.default(f.RPCErrors.INVALID_PAYLOAD, "Payload requires a nonce");
                        let i = t.cmd,
                            r = this.commands[i];
                        if (null == r) throw new u.default(f.RPCErrors.INVALID_COMMAND, "Invalid command: ".concat(t.cmd));
                        if (!(0, d.default)(e.authorization.scopes, r.scope)) throw new u.default(f.RPCErrors.INVALID_PERMISSIONS, "Not authenticated or invalid scope");
                        n(r)
                    }).then(e => new Promise(async (n, i) => {
                        if (null != e.validation) {
                            let r = await this.getJoi();
                            s(null != e.validation, "command.validation must not be null"), r.validate(t.args, e.validation(r), {
                                convert: !1
                            }, t => {
                                if (null != t) {
                                    i(new u.default(f.RPCErrors.INVALID_PAYLOAD, t.message));
                                    return
                                }
                                n(e)
                            })
                        } else n(e)
                    })).then(n => {
                        var i;
                        return n.handler({
                            socket: e,
                            server: this,
                            cmd: t.cmd,
                            evt: t.evt,
                            nonce: t.nonce,
                            args: null !== (i = t.args) && void 0 !== i ? i : {},
                            isSocketConnected: () => this.sockets.has(e)
                        })
                    }).then(n => this.dispatch(e, t.nonce, t.cmd, null, n)).catch(n => {
                        let {
                            code: i,
                            message: r
                        } = n;
                        return this.error(e, t.nonce, t.cmd, i, r)
                    })
                }
                setCommandHandler(e, t) {
                    this.commands[e] = t
                }
                setEventHandler(e, t) {
                    this.events[e] = t
                }
                dispatch(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E.RPCCommands.DISPATCH,
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                        r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                    e.send({
                        cmd: n,
                        data: r,
                        evt: i,
                        nonce: t
                    })
                }
                error(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E.RPCCommands.DISPATCH,
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : f.RPCErrors.UNKNOWN_ERROR,
                        r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "Unknown Error";
                    l.default.track(E.AnalyticEvents.RPC_SERVER_ERROR_CAUGHT, {
                        command: n,
                        code: i,
                        message: r
                    }), this.dispatch(e, t, n, E.RPCEvents.ERROR, {
                        code: i,
                        message: r
                    })
                }
                isSubscribed(e, t) {
                    return void 0 !== this.subscriptions.find(n => n.socket.application.id === e && n.evt === t)
                }
                getSubscription(e, t, n) {
                    return this.subscriptions.find(i => i.socket === e && i.evt === t && o.isEqual(i.args, n))
                }
                addSubscription(e, t, n) {
                    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                        r = this.dispatch.bind(this, e, null, E.RPCCommands.DISPATCH, t);
                    null == this.getSubscription(e, t, n) && this.subscriptions.push({
                        update: i,
                        dispatch: r,
                        prevState: i ? i({
                            prevState: null,
                            dispatch: r
                        }) : null,
                        socket: e,
                        evt: t,
                        args: n
                    })
                }
                removeSubscription(e, t, n) {
                    o.remove(this.subscriptions, i => i.socket === e && i.evt === t && o.isEqual(i.args, n))
                }
                removeSubscriptions(e) {
                    o.remove(this.subscriptions, t => t.socket === e)
                }
                dispatchToSubscriptions(e, t, n, i) {
                    var r;
                    if (!(null != i && "" !== i && (r = i, p.includes(r) || (p.unshift(r), p.splice(50), 0)))) this.subscriptions.forEach(i => {
                        var r, s, a;
                        if (i.evt === e) {
                            if (("function" != typeof t || t(i)) && ("object" != typeof t || (s = t, a = null !== (r = i.args) && void 0 !== r ? r : {}, o.isEqual(s, o.pick(a, Object.keys(s)))))) this.dispatch(i.socket, null, E.RPCCommands.DISPATCH, i.evt, n)
                        }
                    })
                }
                updateSubscriptions() {
                    this.subscriptions.forEach(e => {
                        e.update && (e.prevState = e.update(e))
                    })
                }
                storeWait(e, t, n) {
                    let i = t();
                    if (i || 0 === n) return Promise.resolve(i);
                    let r = o.uniqueId(),
                        s = () => this.removeSubscription(e, h, {
                            uniqueId: r
                        });
                    return new Promise((i, a) => {
                        let o = setTimeout(() => {
                            s(), a(Error("timeout"))
                        }, 1e3 * n);
                        this.addSubscription(e, h, {
                            uniqueId: r
                        }, () => {
                            let e = t();
                            e && (clearTimeout(o), i(e))
                        })
                    }).then(e => (s(), e))
                }
                constructor(e) {
                    this.getCurrentUser = () => null, this.onConnect = () => {}, this.onDisconnect = () => {}, this.events = {}, this.commands = {}, this.sockets = new Set, this.subscriptions = [], this.getJoi = e
                }
            }