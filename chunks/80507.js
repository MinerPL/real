            "use strict";
            n.r(s), n.d(s, {
                default: function() {
                    return a
                }
            }), n("424973"), n("222007");
            var i = n("917351"),
                r = n.n(i),
                o = n("866227"),
                t = n.n(o),
                a = class e {
                    overwriteHistory(e, s) {
                        this.usageHistory = r.mapValues(null != e ? e : {}, e => ({
                            ...e,
                            frecency: -1
                        })), null == s || s.forEach(e => {
                            let {
                                key: s,
                                timestamp: n
                            } = e;
                            return this.track(s, n)
                        }), this.markDirty()
                    }
                    markDirty() {
                        this.dirty = !0
                    }
                    isDirty() {
                        return this.dirty
                    }
                    track(e, s) {
                        if (null == e) return;
                        let n = Object.prototype.hasOwnProperty.call(this.usageHistory, e) ? this.usageHistory[e] : void 0;
                        if (null == n) n = {
                            totalUses: 1,
                            recentUses: [null != s ? s : Date.now()],
                            frecency: -1,
                            score: 0
                        };
                        else
                            for (n.frecency = -1, n.totalUses += 1, null == s ? n.recentUses.push(Date.now()) : (n.recentUses.push(s), n.recentUses.sort()); n.recentUses.length > this.maxSamples;) n.recentUses.shift();
                        this.usageHistory[e] = n, this.markDirty()
                    }
                    getEntry(e) {
                        if (null == e) return null;
                        this.dirty && this.compute();
                        let s = Object.prototype.hasOwnProperty.call(this.usageHistory, e) ? this.usageHistory[e] : void 0;
                        return s
                    }
                    getScore(e) {
                        let s = this.getEntry(e);
                        return null != s ? s.score : null
                    }
                    getFrecency(e) {
                        let s = this.getEntry(e);
                        return null != s ? s.frecency : null
                    }
                    compute() {
                        let e = t();
                        r.forEach(this.usageHistory, (s, n) => {
                            let {
                                totalUses: i,
                                recentUses: o,
                                frecency: a
                            } = s;
                            if (-1 !== a) return;
                            let f = this.computeBonus(n) / 100;
                            s.score = 0, r.forEach(o, (n, i) => {
                                if (i >= this.maxSamples) return !1;
                                let r = this.computeWeight(e.diff(t(n), "days"));
                                s.score += f * r
                            }), s.score > 0 ? (s.recentUses.length > 0 && (s.frecency = Math.ceil(i * (s.score / o.length))), this.usageHistory[n] = s) : delete this.usageHistory[n]
                        }), this.frequently = r(this.usageHistory).map((e, s) => {
                            let n = this.lookupKey(s);
                            return null == n ? null : [n, e.frecency]
                        }).filter(e => null !== e).sortBy(e => {
                            let [s, n] = e;
                            return -n
                        }).map(e => {
                            let [s] = e;
                            return s
                        }).take(this.numFrequentlyItems).value(), this.dirty = !1, this.afterCompute(this.usageHistory, this._frequently)
                    }
                    get frequently() {
                        return this.dirty && this.compute(), this._frequently
                    }
                    set frequently(e) {
                        this._frequently = e
                    }
                    constructor({
                        computeBonus: e,
                        computeWeight: s,
                        lookupKey: n,
                        afterCompute: i,
                        numFrequentlyItems: r = 32,
                        maxSamples: o = 10
                    }) {
                        this.computeBonus = e, this.computeWeight = s, this.afterCompute = i, this.lookupKey = n, this.usageHistory = {}, this.frequently = [], this.maxSamples = o, this.numFrequentlyItems = r, this.dirty = !1
                    }
                }