"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
}), n("222007");
var i, l = n("917351"),
  a = n.n(l),
  s = n("862337"),
  r = n("605250"),
  u = n("718517");
let d = 1 * u.default.Millis.MINUTE;
i = class {
  reset() {
    this._subscriptions = {}, this._unsubscriptions = {}, this._unsubscribe.cancel()
  }
  get(e) {
    var t;
    let n = null !== (t = this._subscriptions[e]) && void 0 !== t ? t : {};
    return a.keys(n)
  }
  clear(e) {
    delete this._subscriptions[e], delete this._unsubscriptions[e]
  }
  subscribe(e, t) {
    var n, i;
    let l = null !== (n = this._subscriptions[e]) && void 0 !== n ? n : {};
    l[t] = (null !== (i = l[t]) && void 0 !== i ? i : 0) + 1, this._subscriptions[e] = l, 1 === l[t] && this._onChange(e, this.get(e)), this.checkForLeaks(e, t)
  }
  isSubscribed(e, t) {
    return null != this._subscriptions[e] && null != this._subscriptions[e][t]
  }
  isSubscribedToAnyMember(e) {
    return this.get(e).length > 0
  }
  unsubscribe(e, t) {
    var n, i;
    if (!this.isSubscribed(e, t)) return;
    let l = null !== (n = this._unsubscriptions[e]) && void 0 !== n ? n : {};
    l[t] = (null !== (i = l[t]) && void 0 !== i ? i : 0) + 1, this._unsubscriptions[e] = l, 1 === l[t] && this._unsubscribe.delay(!1)
  }
  checkForLeaks(e, t) {
    var n, i, l, a;
    let s = null !== (l = null === (n = this._subscriptions[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== l ? l : 0,
      u = null !== (a = null === (i = this._unsubscriptions[e]) || void 0 === i ? void 0 : i[t]) && void 0 !== a ? a : 0,
      d = s - u;
    d > 5 && new(0, r.default)("GuildMemberSubscriptions").warn("GuildMemberSubscriptions.subscribe(...): Potential reference leak! (".concat(d, " subscriptions)"))
  }
  flushUnsubscriptions() {
    !a.isEmpty(this._unsubscriptions) && (a.forEach(this._unsubscriptions, (e, t) => {
      let n = this._subscriptions[t];
      a.forEach(e, (e, t) => {
        var i;
        n[t] = (null !== (i = n[t]) && void 0 !== i ? i : 0) - e, n[t] <= 0 && delete n[t]
      }), a.isEmpty(n) && delete this._subscriptions[t], this._onChange(t, this.get(t))
    }), this._unsubscriptions = {})
  }
  constructor(e) {
    this._subscriptions = {}, this._unsubscriptions = {}, this._unsubscribe = new s.DelayedCall(d, () => this.flushUnsubscriptions()), this._onChange = e
  }
}