                "use strict";
                i.r(t), i.d(t, {
                    default: function() {
                        return a
                    }
                }), i("222007"), i("424973"), i("70102");
                var n = i("349807"),
                    r = i("244639");
                async function s(e, t, i, s, a) {
                    let o = a;
                    if (null == o) {
                        let e = await fetch(s);
                        if (!e.ok) throw Error("Error fetching sticker at ".concat(s));
                        o = await e.text()
                    }
                    if (null == o) return null;
                    await (0, r.initialize)();
                    let l = new r.default(o);
                    return new n.default(l, e, t, i)
                }
                var a = new class e {
                    create(e, t, i, n, r) {
                        let a = !(arguments.length > 5) || void 0 === arguments[5] || arguments[5];
                        return this.getCached(e).then(o => {
                            var l;
                            if (this.referenceCounts.set(e, (null !== (l = this.referenceCounts.get(e)) && void 0 !== l ? l : 0) + 1), o) return o;
                            let u = {
                                key: e,
                                promise: s(e, t, i, n, r)
                            };
                            return a && (this.entries.push(u), u.promise.then(t => (null == t && this.removeEntry(e), t)).catch(t => this.removeEntry(e)), this.entries.length > 50 && this.removeEntryAt(0)), u.promise
                        })
                    }
                    drop(e) {
                        this.removeEntry(e)
                    }
                    getCached(e) {
                        let t = this.entries.findIndex(t => t.key === e);
                        if (t >= 0) {
                            let e = this.entries[t];
                            return this.entries.splice(t, 1), this.entries.push(e), e.promise.then(e => (null == e && this.removeEntryAt(t), e))
                        }
                        return Promise.resolve(null)
                    }
                    removeEntry(e) {
                        let t = this.entries.findIndex(t => t.key === e);
                        if (!(t >= 0)) return null;
                        this.removeEntryAt(t)
                    }
                    removeEntryAt(e) {
                        let t = this.entries[e],
                            i = this.referenceCounts.get(t.key);
                        return null != i && i > 1 ? (this.referenceCounts.set(t.key, i - 1), null) : (this.entries.splice(e, 1), this.referenceCounts.delete(t.key), t.promise.then(e => null == e ? void 0 : e.drop()), t)
                    }
                    constructor() {
                        this.entries = [], this.referenceCounts = new Map
                    }
                }