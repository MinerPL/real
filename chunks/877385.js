"use strict";
n.r(t), n.d(t, {
  DragDropManagerImpl: function() {
    return a
  }
}), n("70102"), n("808653");
var r = n("234160");

function o(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
  }
}
var a = function() {
  var e, t, n;

  function a(e, t) {
    var n = this;
    ! function(e, t) {
      if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }(this, a), this.isSetUp = !1, this.handleRefCountChange = function() {
      var e = n.store.getState().refCount > 0;
      n.backend && (e && !n.isSetUp ? (n.backend.setup(), n.isSetUp = !0) : !e && n.isSetUp && (n.backend.teardown(), n.isSetUp = !1))
    }, this.store = e, this.monitor = t, e.subscribe(this.handleRefCountChange)
  }
  return e = a, t = [{
    key: "receiveBackend",
    value: function(e) {
      this.backend = e
    }
  }, {
    key: "getMonitor",
    value: function() {
      return this.monitor
    }
  }, {
    key: "getBackend",
    value: function() {
      return this.backend
    }
  }, {
    key: "getRegistry",
    value: function() {
      return this.monitor.registry
    }
  }, {
    key: "getActions",
    value: function() {
      var e = this,
        t = this.store.dispatch,
        n = (0, r.createDragDropActions)(this);
      return Object.keys(n).reduce(function(r, o) {
        var a, i = n[o];
        return r[o] = (a = i, function() {
          for (var n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
          var i = a.apply(e, r);
          void 0 !== i && t(i)
        }), r
      }, {})
    }
  }, {
    key: "dispatch",
    value: function(e) {
      this.store.dispatch(e)
    }
  }], o(e.prototype, t), n && o(e, n), a
}()