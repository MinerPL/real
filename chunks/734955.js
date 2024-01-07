            "use strict";
            n.r(t), n.d(t, {
                Database: function() {
                    return o
                }
            }), n("70102"), n("424973"), n("222007");
            var i = n("102053"),
                r = n("400340"),
                s = n("30773"),
                a = n("999673");
            class o {
                static async open(e, t) {
                    return new o(await r.Host.open(e, t))
                }
                static openSyncUnsafe(e, t) {
                    return new o(r.Host.openSyncUnsafe(e, t))
                }
                static delete(e) {
                    return r.Host.delete(e)
                }
                close() {
                    var e;
                    this.lastState = a.DatabaseState.Closed, null === (e = this.raw) || void 0 === e || e.close(), this.raw = null, s.Runtime.removeCompletionCallback(this.databaseStateCallback)
                }
                disable(e) {
                    return null == this.raw ? Promise.resolve() : (this.lastState = a.DatabaseState.Disabled, this.execute({
                        type: "db.disable",
                        handle: 0,
                        reason: e
                    }))
                }
                execute(e, t) {
                    var n;
                    if (null == this.raw) throw Error("database is no longer open (database: ".concat(this));
                    return i.default.timeAsync("\uD83D\uDCBE", "db: ".concat(null != t ? t : e.type, " ").concat(null !== (n = e.table) && void 0 !== n ? n : ""), () => s.Runtime.executeAsync(null != t ? t : e.type, t => {
                        this.raw.execute(t, {
                            ...e,
                            handle: 0
                        })
                    }))
                }
                executeSync(e) {
                    var t;
                    if (null == this.raw) throw Error("database is no longer open (database: ".concat(this));
                    return i.default.time("\uD83D\uDCBE", "DB ".concat(e.type, " ").concat(null !== (t = e.table) && void 0 !== t ? t : "", " (sync)"), () => this.raw.execute(null, {
                        ...e,
                        handle: 0
                    }, {
                        synchronous: !0
                    }))
                }
                fullVacuum() {
                    return this.execute({
                        type: "db.vacuum",
                        handle: 0,
                        complete: !0
                    })
                }
                fsInfo() {
                    return this.execute({
                        type: "db.fs_info",
                        handle: 0
                    })
                }
                incrementalVacuum() {
                    return this.execute({
                        type: "db.vacuum",
                        handle: 0,
                        complete: !1
                    })
                }
                instantaneousState() {
                    return null == this.raw ? a.DatabaseState.Closed : this.lastState = this.executeSync({
                        type: "db.state"
                    })
                }
                async instantaneousStateAsync() {
                    return null == this.raw ? a.DatabaseState.Closed : this.lastState = await this.execute({
                        type: "db.state"
                    })
                }
                state() {
                    return this.lastState
                }
                transaction(e) {
                    let t = new l(this),
                        n = e(t);
                    return Promise.resolve(n).then(() => {
                        if (!(t.operations.length > 0)) return Promise.resolve();
                        {
                            let e = "transaction (x".concat(t.operations.length, ")");
                            return this.execute({
                                type: "db.transaction",
                                operations: t.complete()
                            }, e)
                        }
                    })
                }
                toString() {
                    return "[Database #".concat(this.handle, ": ").concat(this.name, "]")
                }
                constructor(e) {
                    this.raw = e, this.name = e.name, this.lastState = a.DatabaseState.Open, this.handle = e.handle, this.databaseStateCallback = s.Runtime.addDatabaseStateCallback((e, t) => {
                        this.handle === e && (this.lastState = t)
                    })
                }
            }
            class l {
                add(e) {
                    this.operations.push(e)
                }
                complete() {
                    for (let e of this.operations) e.handle = 0;
                    return this.operations
                }
                toString() {
                    return "[DatabaseTransaction ".concat(this.database.handle, ": ").concat(this.operations.length, " ops]")
                }
                constructor(e) {
                    this.database = e, this.operations = []
                }
            }