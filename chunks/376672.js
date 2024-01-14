"use strict";
var n = r("766811");

function i() {
  return (i = n || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
    }
    return t
  }).apply(this, arguments)
}
var o = r("742609"),
  a = r("884691"),
  u = r("232973"),
  s = r("237396"),
  c = function(t) {
    var e, r;

    function n() {
      return t.apply(this, arguments) || this
    }
    return e = n, r = t, e.prototype = Object.create(r.prototype), e.prototype.constructor = e, e.__proto__ = r, n.prototype.render = function() {
      var t = this.props,
        e = t.block,
        r = t.children,
        n = t.contentState,
        c = t.decorator,
        l = t.decoratorKey,
        f = t.direction,
        p = t.leafSet,
        h = t.text,
        d = e.getKey(),
        g = p.get("leaves"),
        y = c.getComponentForKey(l),
        v = c.getPropsForKey(l),
        m = o.encode(d, parseInt(l, 10), 0),
        _ = h.slice(g.first().get("start"), g.last().get("end")),
        b = s.getHTMLDirIfDifferent(u.getDirection(_), f);
      return a.createElement(y, i({}, v, {
        contentState: n,
        decoratedText: _,
        dir: b,
        key: m,
        entityKey: e.getEntityAt(p.get("start")),
        offsetKey: m
      }), r)
    }, n
  }(a.Component);
t.exports = c