"use strict";
n.r(e), n.d(e, {
  getCurrentHub: function() {
    return u
  }
}), n("424973"), n("70102");
var r = n("247472"),
  i = n("762046"),
  o = n("620543");
t = n.hmd(t);
var s = function() {
  function t(t, e, n) {
    void 0 === e && (e = new o.Scope), void 0 === n && (n = 3), this._version = n, this._stack = [], this._stack.push({
      client: t,
      scope: e
    })
  }
  return t.prototype._invokeClient = function(t) {
    for (var e, n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
    var o = this.getStackTop();
    o && o.client && o.client[t] && (e = o.client)[t].apply(e, r.__spread(n, [o.scope]))
  }, t.prototype.isOlderThan = function(t) {
    return this._version < t
  }, t.prototype.bindClient = function(t) {
    this.getStackTop().client = t
  }, t.prototype.pushScope = function() {
    var t = this.getStack(),
      e = t.length > 0 ? t[t.length - 1].scope : void 0,
      n = o.Scope.clone(e);
    return this.getStack().push({
      client: this.getClient(),
      scope: n
    }), n
  }, t.prototype.popScope = function() {
    return void 0 !== this.getStack().pop()
  }, t.prototype.withScope = function(t) {
    var e = this.pushScope();
    try {
      t(e)
    } finally {
      this.popScope()
    }
  }, t.prototype.getClient = function() {
    return this.getStackTop().client
  }, t.prototype.getScope = function() {
    return this.getStackTop().scope
  }, t.prototype.getStack = function() {
    return this._stack
  }, t.prototype.getStackTop = function() {
    return this._stack[this._stack.length - 1]
  }, t.prototype.captureException = function(t, e) {
    var n = this._lastEventId = (0, i.uuid4)(),
      o = e;
    if (!e) {
      var s = void 0;
      try {
        throw Error("Sentry syntheticException")
      } catch (t) {
        s = t
      }
      o = {
        originalException: t,
        syntheticException: s
      }
    }
    return this._invokeClient("captureException", t, r.__assign({}, o, {
      event_id: n
    })), n
  }, t.prototype.captureMessage = function(t, e, n) {
    var o = this._lastEventId = (0, i.uuid4)(),
      s = n;
    if (!n) {
      var c = void 0;
      try {
        throw Error(t)
      } catch (t) {
        c = t
      }
      s = {
        originalException: t,
        syntheticException: c
      }
    }
    return this._invokeClient("captureMessage", t, e, r.__assign({}, s, {
      event_id: o
    })), o
  }, t.prototype.captureEvent = function(t, e) {
    var n = this._lastEventId = (0, i.uuid4)();
    return this._invokeClient("captureEvent", t, r.__assign({}, e, {
      event_id: n
    })), n
  }, t.prototype.lastEventId = function() {
    return this._lastEventId
  }, t.prototype.addBreadcrumb = function(t, e) {
    var n = this.getStackTop();
    if (!n.scope || !n.client) return;
    var o = n.client.getOptions && n.client.getOptions() || {},
      s = o.beforeBreadcrumb,
      c = void 0 === s ? null : s,
      a = o.maxBreadcrumbs,
      u = void 0 === a ? 100 : a;
    if (!(u <= 0)) {
      var _ = (0, i.timestampWithMs)(),
        p = r.__assign({
          timestamp: _
        }, t),
        h = c ? (0, i.consoleSandbox)(function() {
          return c(p, e)
        }) : p;
      null !== h && n.scope.addBreadcrumb(h, Math.min(u, 100))
    }
  }, t.prototype.setUser = function(t) {
    var e = this.getStackTop();
    e.scope && e.scope.setUser(t)
  }, t.prototype.setTags = function(t) {
    var e = this.getStackTop();
    e.scope && e.scope.setTags(t)
  }, t.prototype.setExtras = function(t) {
    var e = this.getStackTop();
    e.scope && e.scope.setExtras(t)
  }, t.prototype.setTag = function(t, e) {
    var n = this.getStackTop();
    n.scope && n.scope.setTag(t, e)
  }, t.prototype.setExtra = function(t, e) {
    var n = this.getStackTop();
    n.scope && n.scope.setExtra(t, e)
  }, t.prototype.setContext = function(t, e) {
    var n = this.getStackTop();
    n.scope && n.scope.setContext(t, e)
  }, t.prototype.configureScope = function(t) {
    var e = this.getStackTop();
    e.scope && e.client && t(e.scope)
  }, t.prototype.run = function(t) {
    var e = a(this);
    try {
      t(this)
    } finally {
      a(e)
    }
  }, t.prototype.getIntegration = function(t) {
    var e = this.getClient();
    if (!e) return null;
    try {
      return e.getIntegration(t)
    } catch (e) {
      return i.logger.warn("Cannot retrieve integration " + t.id + " from the current Hub"), null
    }
  }, t.prototype.startSpan = function(t, e) {
    return void 0 === e && (e = !1), this._callExtensionMethod("startSpan", t, e)
  }, t.prototype.traceHeaders = function() {
    return this._callExtensionMethod("traceHeaders")
  }, t.prototype._callExtensionMethod = function(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    var r = c().__SENTRY__;
    if (r && r.extensions && "function" == typeof r.extensions[t]) return r.extensions[t].apply(this, e);
    i.logger.warn("Extension method " + t + " couldn't be found, doing nothing.")
  }, t
}();

function c() {
  var t = (0, i.getGlobalObject)();
  return t.__SENTRY__ = t.__SENTRY__ || {
    extensions: {},
    hub: void 0
  }, t
}

function a(t) {
  var e = c(),
    n = p(e);
  return h(e, t), n
}

function u() {
  var e = c();
  return ((!_(e) || p(e).isOlderThan(3)) && h(e, new s), (0, i.isNodeEnv)()) ? function(e) {
    try {
      var n = (0, i.dynamicRequire)(t, "domain").active;
      if (!n) return p(e);
      if (!_(n) || p(n).isOlderThan(3)) {
        var r = p(e).getStackTop();
        h(n, new s(r.client, o.Scope.clone(r.scope)))
      }
      return p(n)
    } catch (t) {
      return p(e)
    }
  }(e) : p(e)
}

function _(t) {
  return !!t && !!t.__SENTRY__ && !!t.__SENTRY__.hub || !1
}

function p(t) {
  return t && t.__SENTRY__ && t.__SENTRY__.hub ? t.__SENTRY__.hub : (t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.hub = new s, t.__SENTRY__.hub)
}

function h(t, e) {
  return !!t && (t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.hub = e, !0)
}