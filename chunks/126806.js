"use strict";
n.r(e), n.d(e, {
  SyncPromise: function() {
    return c
  },
  rejectedSyncPromise: function() {
    return o
  },
  resolvedSyncPromise: function() {
    return s
  }
}), n("424973");
var r, i, a = n("106145");

function s(t) {
  return new c(e => {
    e(t)
  })
}

function o(t) {
  return new c((e, n) => {
    n(t)
  })
}(i = r || (r = {}))[i.PENDING = 0] = "PENDING", i[i.RESOLVED = 1] = "RESOLVED", i[i.REJECTED = 2] = "REJECTED";
class c {
  __init() {
    this._state = r.PENDING
  }
  __init2() {
    this._handlers = []
  }
  then(t, e) {
    return new c((n, r) => {
      this._handlers.push([!1, e => {
        if (t) try {
          n(t(e))
        } catch (t) {
          r(t)
        } else n(e)
      }, t => {
        if (e) try {
          n(e(t))
        } catch (t) {
          r(t)
        } else r(t)
      }]), this._executeHandlers()
    })
  } catch (t) {
    return this.then(t => t, t)
  } finally(t) {
    return new c((e, n) => {
      let r, i;
      return this.then(e => {
        i = !1, r = e, t && t()
      }, e => {
        i = !0, r = e, t && t()
      }).then(() => {
        if (i) {
          n(r);
          return
        }
        e(r)
      })
    })
  }
  __init3() {
    this._resolve = t => {
      this._setResult(r.RESOLVED, t)
    }
  }
  __init4() {
    this._reject = t => {
      this._setResult(r.REJECTED, t)
    }
  }
  __init5() {
    this._setResult = (t, e) => {
      if (this._state === r.PENDING) {
        if ((0, a.isThenable)(e)) {
          e.then(this._resolve, this._reject);
          return
        }
        this._state = t, this._value = e, this._executeHandlers()
      }
    }
  }
  __init6() {
    this._executeHandlers = () => {
      if (this._state === r.PENDING) return;
      let t = this._handlers.slice();
      this._handlers = [], t.forEach(t => {
        !t[0] && (this._state === r.RESOLVED && t[1](this._value), this._state === r.REJECTED && t[2](this._value), t[0] = !0)
      })
    }
  }
  constructor(t) {
    c.prototype.__init.call(this), c.prototype.__init2.call(this), c.prototype.__init3.call(this), c.prototype.__init4.call(this), c.prototype.__init5.call(this), c.prototype.__init6.call(this);
    try {
      t(this._resolve, this._reject)
    } catch (t) {
      this._reject(t)
    }
  }
}