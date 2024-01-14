"use strict";
n.r(t), n.d(t, {
  ComponentDispatchGroupContext: function() {
    return a
  },
  ComponentDispatchGroupProvider: function() {
    return u
  },
  useComponentAction: function() {
    return d
  },
  ComponentAction: function() {
    return c
  }
}), n("222007"), n("70102");
var l = n("37983"),
  i = n("884691"),
  r = n("44170"),
  o = n("659500");
class s {
  subscribe(e, t) {
    o.ComponentDispatch.subscribe(e, t), this.emitter.on(e, t)
  }
  unsubscribe(e, t) {
    o.ComponentDispatch.unsubscribe(e, t), this.emitter.off(e, t)
  }
  bumpDispatchPriority() {
    for (let e of this.emitter.eventNames())
      for (let t of this.emitter.listeners(e)) o.ComponentDispatch.resubscribe(e, t)
  }
  constructor() {
    this.emitter = new r.EventEmitter
  }
}
let a = i.createContext(new class e {
    subscribe(e, t) {
      o.ComponentDispatch.subscribe(e, t)
    }
    unsubscribe(e, t) {
      o.ComponentDispatch.unsubscribe(e, t)
    }
    bumpDispatchPriority() {}
  }),
  u = i.forwardRef(function(e, t) {
    let {
      children: n
    } = e, r = i.useRef(null);

    function o() {
      return null === r.current && (r.current = new s), r.current
    }
    return i.useImperativeHandle(t, o), (0, l.jsx)(a.Provider, {
      value: o(),
      children: n
    })
  });

function d(e) {
  let {
    event: t,
    handler: n
  } = e, l = i.useContext(a), r = i.useRef(n);
  i.useEffect(() => {
    r.current = n
  }, [n]);
  let o = null == n;
  return i.useEffect(() => {
    if (o) return;
    let e = function() {
      for (var e, t = arguments.length, n = Array(t), l = 0; l < t; l++) n[l] = arguments[l];
      null === (e = r.current) || void 0 === e || e.call(r, ...n)
    };
    return l.subscribe(t, e), () => {
      l.unsubscribe(t, e)
    }
  }, [l, t, o]), null
}

function c(e) {
  return d(e), null
}