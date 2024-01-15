"use strict";
n.r(t), n.d(t, {
  ErrorBoundary: function() {
    return l
  }
}), n("70102"), n("222007");
var a = n("884691");
let r = (0, a.createContext)(null),
  i = {
    didCatch: !1,
    error: null
  };
class l extends a.Component {
  static getDerivedStateFromError(e) {
    return {
      didCatch: !0,
      error: e
    }
  }
  resetErrorBoundary() {
    let {
      error: e
    } = this.state;
    if (null !== e) {
      for (var t, n, a = arguments.length, r = Array(a), l = 0; l < a; l++) r[l] = arguments[l];
      null === (t = (n = this.props).onReset) || void 0 === t || t.call(n, {
        args: r,
        reason: "imperative-api"
      }), this.setState(i)
    }
  }
  componentDidCatch(e, t) {
    var n, a;
    null === (n = (a = this.props).onError) || void 0 === n || n.call(a, e, t)
  }
  componentDidUpdate(e, t) {
    let {
      didCatch: n
    } = this.state, {
      resetKeys: a
    } = this.props;
    if (n && null !== t.error && function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        return e.length !== t.length || e.some((e, n) => !Object.is(e, t[n]))
      }(e.resetKeys, a)) {
      var r, l;
      null === (r = (l = this.props).onReset) || void 0 === r || r.call(l, {
        next: a,
        prev: e.resetKeys,
        reason: "keys"
      }), this.setState(i)
    }
  }
  render() {
    let {
      children: e,
      fallbackRender: t,
      FallbackComponent: n,
      fallback: i
    } = this.props, {
      didCatch: l,
      error: o
    } = this.state, u = e;
    if (l) {
      let e = {
        error: o,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if ((0, a.isValidElement)(i)) u = i;
      else if ("function" == typeof t) u = t(e);
      else if (n) u = (0, a.createElement)(n, e);
      else throw o
    }
    return (0, a.createElement)(r.Provider, {
      value: {
        didCatch: l,
        error: o,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, u)
  }
  constructor(e) {
    super(e), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = i
  }
}