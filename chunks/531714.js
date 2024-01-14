"use strict";
n.r(t), n.d(t, {
  DropTarget: function() {
    return c
  }
});
var r = n("900255"),
  o = n("29150"),
  a = n("959708"),
  i = n("577111"),
  s = n("157632");

function c(e, t, n) {
  var c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
  (0, a.checkDecoratorArguments)("DropTarget", "type, spec, collect[, options]", e, t, n, c);
  var l = e;
  "function" != typeof e && ((0, r.invariant)((0, a.isValidType)(e, !0), 'Expected "type" provided as the first argument to DropTarget to be a string, an array of strings, or a function that returns either given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', e), l = function() {
    return e
  }), (0, r.invariant)((0, a.isPlainObject)(t), 'Expected "spec" provided as the second argument to DropTarget to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', t);
  var u = (0, s.createTargetFactory)(t);
  return (0, r.invariant)("function" == typeof n, 'Expected "collect" provided as the third argument to DropTarget to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', n), (0, r.invariant)((0, a.isPlainObject)(c), 'Expected "options" provided as the fourth argument to DropTarget to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', n),
    function(e) {
      return (0, i.decorateHandler)({
        containerDisplayName: "DropTarget",
        createHandler: u,
        registerHandler: o.registerTarget,
        createMonitor: function(e) {
          return new o.DropTargetMonitorImpl(e)
        },
        createConnector: function(e) {
          return new o.TargetConnector(e)
        },
        DecoratedComponent: e,
        getType: l,
        collect: n,
        options: c
      })
    }
}