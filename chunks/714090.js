"use strict";
n.r(e), n.d(e, {
  WINDOW: function() {
    return a
  },
  shouldIgnoreOnError: function() {
    return o
  },
  wrap: function() {
    return function t(e) {
      let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = arguments.length > 2 ? arguments[2] : void 0;
      if ("function" != typeof e) return e;
      try {
        let t = e.__sentry_wrapped__;
        if (t) return t;
        if ((0, i.getOriginalFunction)(e)) return e
      } catch (t) {
        return e
      }
      let o = function() {
        let o = Array.prototype.slice.call(arguments);
        try {
          a && "function" == typeof a && a.apply(this, arguments);
          let r = o.map(e => t(e, n));
          return e.apply(this, r)
        } catch (t) {
          throw s++, setTimeout(() => {
            s--
          }), (0, r.withScope)(e => {
            e.addEventProcessor(t => (n.mechanism && ((0, i.addExceptionTypeValue)(t, void 0, void 0), (0, i.addExceptionMechanism)(t, n.mechanism)), t.extra = {
              ...t.extra,
              arguments: o
            }, t)), (0, r.captureException)(t)
          }), t
        }
      };
      try {
        for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (o[t] = e[t])
      } catch (t) {}(0, i.markFunctionWrapped)(o, e), (0, i.addNonEnumerableProperty)(e, "__sentry_wrapped__", o);
      try {
        let t = Object.getOwnPropertyDescriptor(o, "name");
        t.configurable && Object.defineProperty(o, "name", {
          get: () => e.name
        })
      } catch (t) {}
      return o
    }
  }
});
var r = n("675065"),
  i = n("103787");
let a = i.GLOBAL_OBJ,
  s = 0;

function o() {
  return s > 0
}