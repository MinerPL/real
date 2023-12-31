            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("222007");
            var i, a = n("917351"),
                l = n.n(a),
                s = n("862337"),
                r = n("605250");
            i = class {
                reset() {
                    this._subscriptions = {}, this._unsubscriptions = {}, this._unsubscribe.cancel()
                }
                get(e) {
                    var t;
                    let n = null !== (t = this._subscriptions[e]) && void 0 !== t ? t : {};
                    return l.keys(n)
                }
                clear(e) {
                    delete this._subscriptions[e], delete this._unsubscriptions[e]
                }
                subscribe(e, t) {
                    var n, i;
                    let a = null !== (n = this._subscriptions[e]) && void 0 !== n ? n : {};
                    a[t] = (null !== (i = a[t]) && void 0 !== i ? i : 0) + 1, this._subscriptions[e] = a, 1 === a[t] && this._onChange(e, this.get(e)), this.checkForLeaks(e, t)
                }
                isSubscribed(e, t) {
                    return null != this._subscriptions[e] && null != this._subscriptions[e][t]
                }
                unsubscribe(e, t) {
                    var n, i;
                    if (!this.isSubscribed(e, t)) return;
                    let a = null !== (n = this._unsubscriptions[e]) && void 0 !== n ? n : {};
                    a[t] = (null !== (i = a[t]) && void 0 !== i ? i : 0) + 1, this._unsubscriptions[e] = a, 1 === a[t] && this._unsubscribe.delay(!1)
                }
                checkForLeaks(e, t) {
                    var n, i, a, l;
                    let s = null !== (a = null === (n = this._subscriptions[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== a ? a : 0,
                        u = null !== (l = null === (i = this._unsubscriptions[e]) || void 0 === i ? void 0 : i[t]) && void 0 !== l ? l : 0,
                        d = s - u;
                    d > 5 && new(0, r.default)("GuildMemberSubscriptions").warn("GuildMemberSubscriptions.subscribe(...): Potential reference leak! (".concat(d, " subscriptions)"))
                }
                flushUnsubscriptions() {
                    !l.isEmpty(this._unsubscriptions) && (l.forEach(this._unsubscriptions, (e, t) => {
                        let n = this._subscriptions[t];
                        l.forEach(e, (e, t) => {
                            var i;
                            n[t] = (null !== (i = n[t]) && void 0 !== i ? i : 0) - e, n[t] <= 0 && delete n[t]
                        }), l.isEmpty(n) && delete this._subscriptions[t], this._onChange(t, this.get(t))
                    }), this._unsubscriptions = {})
                }
                constructor(e) {
                    this._subscriptions = {}, this._unsubscriptions = {}, this._unsubscribe = new s.DelayedCall(6e4, () => this.flushUnsubscriptions()), this._onChange = e
                }
            }